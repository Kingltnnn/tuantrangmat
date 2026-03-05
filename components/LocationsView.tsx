'use client';

import { useState } from 'react';
import { locationsData, Location } from '@/lib/locationsData';
import { MapPin, ChevronDown, ChevronUp, Camera, X, Info, Map as MapIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

type Category = 'Ngắm cảnh' | 'Cà phê' | 'Ăn uống' | 'Chụp ảnh';

const CATEGORIES: Category[] = ['Ngắm cảnh', 'Cà phê', 'Ăn uống', 'Chụp ảnh'];

export default function LocationsView() {
  const [activeCategory, setActiveCategory] = useState<Category>('Ngắm cảnh');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[] | null>(null);

  const filteredLocations = locationsData.filter(loc => loc.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto relative">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rose-600 mb-1">Địa điểm</h1>
        <p className="text-slate-500 text-sm">Khám phá Quy Nhơn theo sở thích</p>
      </div>

      {/* Horizontal Categories */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat);
              setExpandedId(null);
            }}
            className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 shadow-sm ${
              activeCategory === cat
                ? 'bg-rose-600 text-white shadow-rose-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-rose-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Locations List */}
      <div className="space-y-3">
        {filteredLocations.map((loc) => {
          const isExpanded = expandedId === loc.id;
          
          return (
            <div key={loc.id} className="overflow-hidden">
              <button
                onClick={() => toggleExpand(loc.id)}
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
                    {loc.name}
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
                        <p className="text-sm text-slate-600 leading-relaxed">{loc.description}</p>
                      </div>

                      {loc.address && (
                        <div className="flex items-start gap-2">
                          <MapIcon className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-bold text-slate-700">Địa chỉ</h4>
                            <p className="text-xs text-slate-500">{loc.address}</p>
                          </div>
                        </div>
                      )}

                      {loc.tips && (
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-xs font-bold text-slate-700">Mẹo nhỏ</h4>
                            <p className="text-xs text-slate-500">{loc.tips}</p>
                          </div>
                        </div>
                      )}

                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSelectedImages(loc.images)}
                          className="flex items-center justify-center gap-2 py-3 bg-rose-50 text-rose-600 rounded-xl font-bold text-sm hover:bg-rose-100 transition-colors"
                        >
                          <Camera className="w-4 h-4" />
                          Hình ảnh
                        </button>

                        {loc.mapLink ? (
                          <a
                            href={loc.mapLink}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 py-3 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm hover:bg-blue-100 transition-colors"
                          >
                            <MapIcon className="w-4 h-4" />
                            Bản đồ
                          </a>
                        ) : (
                          <div className="flex items-center justify-center gap-2 py-3 bg-slate-50 text-slate-400 rounded-xl font-bold text-sm cursor-not-allowed">
                            <MapIcon className="w-4 h-4" />
                            Bản đồ
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4"
          >
            <button
              onClick={() => setSelectedImages(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="w-full max-w-md space-y-4 overflow-y-auto max-h-[80vh] scrollbar-hide">
              {selectedImages.map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={img}
                    alt="Location"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <p className="mt-6 text-white/60 text-sm font-medium">Vuốt để xem thêm</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
