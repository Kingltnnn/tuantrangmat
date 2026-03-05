'use client';

import { useEffect, useState } from 'react';
import { useAppStore } from '@/lib/store';
import { itineraryData } from '@/lib/data';
import { getDistanceFromLatLonInM } from '@/lib/utils';
import confetti from 'canvas-confetti';
import { MapPin, Navigation, CheckCircle, Clock, Map, Info } from 'lucide-react';

export default function ItineraryView({ onShowOverview }: { onShowOverview: (eventId: string) => void }) {
  const { completedEvents, markEventCompleted } = useAppStore();
  const [selectedDayId, setSelectedDayId] = useState<string>(itineraryData[0].id);
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(
    typeof navigator !== 'undefined' && !('geolocation' in navigator) 
      ? 'Thiết bị không hỗ trợ định vị' 
      : null
  );

  const selectedDay = itineraryData.find(day => day.id === selectedDayId) || itineraryData[0];

  const triggerCelebration = (title: string) => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fbbf24', '#34d399']
    });
    
    // Show local notification if permitted
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Chúc mừng!', {
        body: `Bạn đã đến: ${title}. Chúc hai bạn có những giây phút tuyệt vời!`,
        icon: '/icon-192x192.png'
      });
    } else {
      alert(`Chúc mừng! Bạn đã đến: ${title}. Chúc hai bạn có những giây phút tuyệt vời!`);
    }
  };

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });

        // Check if we are close to any uncompleted event
        itineraryData.forEach((day) => {
          day.events.forEach((event) => {
            if (!completedEvents.includes(event.id)) {
              const distance = getDistanceFromLatLonInM(
                latitude,
                longitude,
                event.coordinates.lat,
                event.coordinates.lng
              );

              // If within 500 meters
              if (distance < 500) {
                markEventCompleted(event.id);
                triggerCelebration(event.title);
              }
            }
          });
        });
      },
      (error) => {
        setErrorMsg('Không thể lấy vị trí hiện tại');
        console.error(error);
      },
      { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [completedEvents, markEventCompleted]);

  // For testing purposes
  const simulateArrival = (eventId: string, title: string) => {
    if (!completedEvents.includes(eventId)) {
      markEventCompleted(eventId);
      triggerCelebration(title);
    }
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rose-600 mb-1">Lịch trình Trăng mật</h1>
        <p className="text-slate-500 text-sm">
          {currentLocation 
            ? `Đã cập nhật vị trí hiện tại` 
            : errorMsg || 'Đang tìm vị trí...'}
        </p>
      </div>

      {/* Day Selection Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto flex-nowrap [&::-webkit-scrollbar]:hidden">
        {itineraryData.map((day) => (
          <button
            key={day.id}
            onClick={() => setSelectedDayId(day.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              selectedDayId === day.id
                ? 'bg-rose-600 text-white'
                : 'bg-white text-slate-600 border border-slate-200'
            }`}
          >
            {day.title.split(':')[0]}
          </button>
        ))}
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          {selectedDay.events.map((event) => {
            const isCompleted = completedEvents.includes(event.id);
            
            return (
              <div key={event.id} className="relative flex items-start gap-4">
                <div className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white shrink-0 shadow-sm transition-colors duration-300 ${isCompleted ? 'border-emerald-500 text-emerald-500' : 'border-rose-200 text-rose-500'}`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : <MapPin className="w-5 h-5" />}
                </div>
                
                <div className={`flex-1 bg-white rounded-2xl p-4 shadow-sm border transition-all duration-300 ${isCompleted ? 'border-emerald-100 bg-emerald-50/30' : 'border-slate-100'}`}>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`font-semibold ${isCompleted ? 'text-emerald-700' : 'text-slate-800'}`}>
                      {event.title}
                    </h3>
                    <span className="flex items-center text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-full shrink-0">
                      <Clock className="w-3 h-3 mr-1" />
                      {event.time}
                    </span>
                  </div>
                  
                  <p className="text-sm text-slate-600 mb-3">{event.description}</p>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => onShowOverview(event.id)}
                      className="flex items-center text-xs text-rose-600 bg-rose-50 px-3 py-1.5 rounded-lg font-medium hover:bg-rose-100 transition-colors"
                    >
                      <Info className="w-3 h-3 mr-1" />
                      Chi tiết
                    </button>
                    <a 
                      href={event.mapLink} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg font-medium hover:bg-blue-100 transition-colors"
                    >
                      <Map className="w-3 h-3 mr-1" />
                      Bản đồ
                    </a>
                  </div>

                  {/* Test button - visible only when not completed */}
                  {!isCompleted && (
                    <button 
                      onClick={() => simulateArrival(event.id, event.title)}
                      className="mt-3 text-xs w-full py-2 bg-slate-50 text-slate-600 rounded-xl font-medium active:bg-slate-100 transition-colors"
                    >
                      Mô phỏng đến nơi
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
