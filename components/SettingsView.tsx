'use client';

import { useState } from 'react';
import { useAppStore } from '@/lib/store';
import { Trash2, Bell, ShieldAlert, Heart } from 'lucide-react';

export default function SettingsView() {
  const { clearData } = useAppStore();
  const [showConfirm, setShowConfirm] = useState(false);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('Trình duyệt không hỗ trợ thông báo');
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      new Notification('Đã bật thông báo!', {
        body: 'Bạn sẽ nhận được nhắc nhở khi đến các địa điểm trong lịch trình.',
        icon: '/icon-192x192.png'
      });
    } else {
      alert('Bạn đã từ chối nhận thông báo.');
    }
  };

  const handleClearData = () => {
    clearData();
    setShowConfirm(false);
    alert('Đã xóa toàn bộ dữ liệu!');
  };

  return (
    <div className="pb-24 pt-6 px-4 max-w-md mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-rose-600 mb-1">Cài đặt</h1>
        <p className="text-slate-500 text-sm">Tùy chỉnh ứng dụng</p>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Thông báo</h3>
              <p className="text-xs text-slate-500">Nhận thông báo nhắc nhở lịch trình</p>
            </div>
          </div>
          <button 
            onClick={requestNotificationPermission}
            className="w-full py-2.5 bg-slate-50 text-slate-700 rounded-xl text-sm font-medium border border-slate-200 hover:bg-slate-100 transition-colors"
          >
            Bật thông báo
          </button>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-rose-100">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
              <Trash2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Xóa dữ liệu</h3>
              <p className="text-xs text-slate-500">Xóa lịch sử chi tiêu và check-in</p>
            </div>
          </div>
          
          {showConfirm ? (
            <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
              <p className="text-sm text-rose-600 font-medium flex items-center gap-2">
                <ShieldAlert className="w-4 h-4" />
                Hành động này không thể hoàn tác!
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={() => setShowConfirm(false)}
                  className="flex-1 py-2.5 bg-slate-100 text-slate-700 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors"
                >
                  Hủy
                </button>
                <button 
                  onClick={handleClearData}
                  className="flex-1 py-2.5 bg-rose-600 text-white rounded-xl text-sm font-medium hover:bg-rose-700 transition-colors shadow-sm shadow-rose-200"
                >
                  Xác nhận xóa
                </button>
              </div>
            </div>
          ) : (
            <button 
              onClick={() => setShowConfirm(true)}
              className="w-full py-2.5 bg-rose-50 text-rose-600 rounded-xl text-sm font-medium border border-rose-100 hover:bg-rose-100 transition-colors"
            >
              Xóa toàn bộ dữ liệu
            </button>
          )}
        </div>

        <div className="mt-8 text-center text-slate-400 text-xs flex flex-col items-center justify-center gap-2">
          <Heart className="w-5 h-5 text-rose-300 fill-rose-100" />
          <p>Chúc Nam & An có một tuần trăng mật thật hạnh phúc!</p>
          <p>Phiên bản 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
