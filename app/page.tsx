'use client';

import { useState } from 'react';
import ItineraryView from '@/components/ItineraryView';
import OverviewView from '@/components/OverviewView';
import ExpenseTracker from '@/components/ExpenseTracker';
import SettingsView from '@/components/SettingsView';
import LocationsView from '@/components/LocationsView';
import { Map, Wallet, Settings, LayoutGrid, MapPin } from 'lucide-react';

type Tab = 'overview' | 'itinerary' | 'expenses' | 'settings' | 'locations';

const TAB_BACKGROUNDS: Record<Tab, string> = {
  overview: '/1D0A3821.webp',
  itinerary: '/1D0A4340.webp',
  expenses: '/1D0A4394 2.webp',
  settings: '/1D0A4487.webp',
  locations: '/1D0A4340.webp',
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const handleShowOverview = (eventId: string) => {
    setSelectedEventId(eventId);
    setActiveTab('overview');
  };

  return (
    <main className="h-screen flex flex-col relative overflow-hidden bg-slate-50">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Object.entries(TAB_BACKGROUNDS).map(([tab, src]) => (
          <div 
            key={tab}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              activeTab === tab ? 'opacity-40' : 'opacity-0'
            }`}
            style={{ 
              backgroundImage: `url('${src.replace(/ /g, '%20')}')`,
              filter: 'blur(8px) brightness(0.9)',
              transform: 'scale(1.1)',
            }}
          />
        ))}
        {/* Subtle overlay for better text contrast */}
        <div className="absolute inset-0 bg-white/20" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
        {activeTab === 'overview' && <OverviewView selectedEventId={selectedEventId} />}
        {activeTab === 'itinerary' && <ItineraryView onShowOverview={handleShowOverview} />}
        {activeTab === 'expenses' && <ExpenseTracker />}
        {activeTab === 'settings' && <SettingsView />}
        {activeTab === 'locations' && <LocationsView />}
      </div>

      {/* Bottom Navigation */}
      <nav className="flex-none bg-white/80 backdrop-blur-md border-t border-slate-200 pb-safe pt-2 px-4 z-50">
        <div className="flex justify-between items-center max-w-md mx-auto h-16">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === 'overview' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <LayoutGrid className={`w-5 h-5 mb-1 ${activeTab === 'overview' ? 'fill-rose-100' : ''}`} />
            <span className="text-[9px] font-medium">Tổng quan</span>
          </button>

          <button
            onClick={() => setActiveTab('locations')}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === 'locations' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <MapPin className={`w-5 h-5 mb-1 ${activeTab === 'locations' ? 'fill-rose-100' : ''}`} />
            <span className="text-[9px] font-medium">Địa điểm</span>
          </button>

          <button
            onClick={() => setActiveTab('itinerary')}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === 'itinerary' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Map className={`w-5 h-5 mb-1 ${activeTab === 'itinerary' ? 'fill-rose-100' : ''}`} />
            <span className="text-[9px] font-medium">Lịch trình</span>
          </button>

          <button
            onClick={() => setActiveTab('expenses')}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === 'expenses' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Wallet className={`w-5 h-5 mb-1 ${activeTab === 'expenses' ? 'fill-rose-100' : ''}`} />
            <span className="text-[9px] font-medium">Chi tiêu</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex flex-col items-center justify-center w-14 h-full transition-colors ${
              activeTab === 'settings' ? 'text-rose-600' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Settings className={`w-5 h-5 mb-1 ${activeTab === 'settings' ? 'fill-rose-100' : ''}`} />
            <span className="text-[9px] font-medium">Cài đặt</span>
          </button>
        </div>
      </nav>
    </main>
  );
}
