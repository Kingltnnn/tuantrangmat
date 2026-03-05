'use client';

import { useState } from 'react';
import { poiData } from '@/lib/poiData';
import { MapPin, ChevronDown, ChevronUp, Clock, Camera, Navigation, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function OverviewView({ selectedEventId }: { selectedEventId: string | null }) {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rose-600 mb-1">Cẩm nang điểm đến</h1>
        <p className="text-slate-500 text-sm">Khám phá các địa điểm nổi bật tại Quy Nhơn</p>
      </div>
      
      <div className="space-y-3">
        {poiData.map((poi) => {
          const isExpanded = expandedId === poi.id;
          
          return (
            <div key={poi.id} className="overflow-hidden">
              <button
                onClick={() => toggleExpand(poi.id)}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all duration-300 ${
                  isExpanded 
                    ? 'border-rose-500 bg-rose-50 shadow-sm' 
                    : 'border-slate-200 bg-white hover:border-rose-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isExpanded ? 'bg-rose-100 text-rose-600' : 'bg-slate-100 text-slate-500'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className={`font-bold text-left ${isExpanded ? 'text-rose-700' : 'text-slate-700'}`}>
                    {poi.name}
                  </span>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-rose-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="mt-2 p-5 bg-white rounded-2xl border border-rose-100 shadow-sm space-y-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Mô tả</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">{poi.description}</p>
                      </div>

                      {poi.activities && (
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Hoạt động</h4>
                          <div className="flex flex-wrap gap-2">
                            {poi.activities.map((act, idx) => (
                              <span key={idx} className="inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-medium">
                                <Camera className="w-3 h-3 mr-1" />
                                {act}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-3">
                        {poi.bestTime && (
                          <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-slate-700">Thời gian đẹp</h4>
                              <p className="text-xs text-slate-500">{poi.bestTime}</p>
                            </div>
                          </div>
                        )}

                        {poi.moving && (
                          <div className="flex items-start gap-2">
                            <Navigation className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-slate-700">Di chuyển</h4>
                              <p className="text-xs text-slate-500">{poi.moving}</p>
                            </div>
                          </div>
                        )}

                        {poi.tips && (
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                            <div>
                              <h4 className="text-xs font-bold text-slate-700">Mẹo nhỏ</h4>
                              <p className="text-xs text-slate-500">{poi.tips}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
