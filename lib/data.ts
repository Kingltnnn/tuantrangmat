export interface Location {
  lat: number;
  lng: number;
}

export interface ItineraryEvent {
  id: string;
  time: string; // HH:mm
  title: string;
  description: string;
  locationName: string;
  mapLink: string;
  transportSuggestion: string;
  coordinates: Location;
}

export interface ItineraryDay {
  id: string;
  date: string; // YYYY-MM-DD
  title: string;
  events: ItineraryEvent[];
}

export const itineraryData: ItineraryDay[] = [
  {
    id: 'day-1',
    date: '2026-03-11',
    title: 'Ngày 1: Hạ cánh Phù Cát & Food Tour Quy Nhơn',
    events: [
      {
        id: 'evt-1-1',
        time: '17:00',
        title: 'Sân bay Phù Cát',
        description: 'Hạ cánh, lấy hành lý. Di chuyển vào trung tâm TP. Quy Nhơn.',
        locationName: 'Sân bay Phù Cát',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Thuê xe di chuyển thẳng vào trung tâm TP. Quy Nhơn trước khi về Nhơn Lý.',
        coordinates: { lat: 13.9611, lng: 109.0453 },
      },
      {
        id: 'evt-1-2',
        time: '18:30',
        title: 'Ăn tối Bánh xèo',
        description: 'Thưởng thức đặc sản Bánh xèo tại 14 Diên Hồng (Quán Gia Vỹ).',
        locationName: 'Quán Bánh xèo Gia Vỹ',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi/Grab',
        coordinates: { lat: 13.7667, lng: 109.2201 },
      },
      {
        id: 'evt-1-3',
        time: '19:30',
        title: 'Dạo phố & Chợ đêm',
        description: 'Đi dạo quảng trường trung tâm và chợ đêm Quy Nhơn.',
        locationName: 'Chợ đêm Quy Nhơn',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.7630, lng: 109.2250 },
      },
      {
        id: 'evt-1-4',
        time: '20:30',
        title: 'Food Tour',
        description: 'Khám phá Ốc (94 Mai Xuân Thưởng), Chè thập cẩm (đối diện 162 Bạch Đằng).',
        locationName: 'Phố ẩm thực',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.7650, lng: 109.2230 },
      },
      {
        id: 'evt-1-5',
        time: '21:30',
        title: 'Về Nhơn Lý',
        description: 'Di chuyển về khách sạn/homestay tại Nhơn Lý, check-in.',
        locationName: 'Làng chài Nhơn Lý',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi/Grab',
        coordinates: { lat: 13.9100, lng: 109.2450 },
      }
    ]
  },
  {
    id: 'day-2',
    date: '2026-03-12',
    title: 'Ngày 2: Tọa độ sống ảo Nhơn Lý & Di tích',
    events: [
      {
        id: 'evt-2-1',
        time: '07:00',
        title: 'Ăn sáng',
        description: 'Bánh Bèo cây mận hoặc Bánh hỏi lòng heo.',
        locationName: 'Trung tâm Quy Nhơn',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Di chuyển từ Nhơn Lý vào trung tâm',
        coordinates: { lat: 13.7660, lng: 109.2200 },
      },
      {
        id: 'evt-2-2',
        time: '09:00',
        title: 'Eo Gió',
        description: 'Check-in tuyệt tác thiên nhiên với hàng rào đỏ.',
        locationName: 'Eo Gió',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Xe máy/Taxi',
        coordinates: { lat: 13.9150, lng: 109.2500 },
      },
      {
        id: 'evt-2-3',
        time: '11:30',
        title: 'Ăn trưa Hải sản',
        description: 'Thưởng thức Hải sản Phương Lan Nhơn Lý.',
        locationName: 'Hải sản Phương Lan',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.9110, lng: 109.2460 },
      },
      {
        id: 'evt-2-4',
        time: '13:30',
        title: 'Làng Nhơn Lý',
        description: 'Check-in Con đường đá xanh với bích họa.',
        locationName: 'Làng chài Nhơn Lý',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.9100, lng: 109.2450 },
      },
      {
        id: 'evt-2-5',
        time: '15:00',
        title: 'Cà phê',
        description: 'Trải nghiệm cà phê chill nhà bên biển.',
        locationName: 'Quán cafe Nhơn Lý',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.9105, lng: 109.2455 },
      },
      {
        id: 'evt-2-6',
        time: '16:00',
        title: 'Bến tàu & Tháp Đôi',
        description: 'Check-in Bến tàu Tocepo và tham quan Tháp Đôi.',
        locationName: 'Tháp Đôi',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Xe máy/Taxi',
        coordinates: { lat: 13.7750, lng: 109.2250 },
      },
      {
        id: 'evt-2-7',
        time: '17:00',
        title: 'Ghềnh Ráng',
        description: 'Thăm Mộ Hàn Mặc Tử và Bãi đá Trứng.',
        locationName: 'Ghềnh Ráng Tiên Sa',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Xe máy/Taxi',
        coordinates: { lat: 13.7550, lng: 109.2350 },
      },
      {
        id: 'evt-2-8',
        time: '19:00',
        title: 'Ăn tối',
        description: 'Cơm Nhà 1989 hoặc Bánh ướt lòng heo.',
        locationName: 'Trung tâm Quy Nhơn',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Xe máy/Taxi',
        coordinates: { lat: 13.7660, lng: 109.2200 },
      },
      {
        id: 'evt-2-9',
        time: '21:00',
        title: 'Về Nhơn Lý',
        description: 'Di chuyển về lại Nhơn Lý nghỉ ngơi.',
        locationName: 'Làng chài Nhơn Lý',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi/Grab',
        coordinates: { lat: 13.9100, lng: 109.2450 },
      }
    ]
  },
  {
    id: 'day-3',
    date: '2026-03-13',
    title: 'Ngày 3: Tìm về chốn bình yên Nhơn Hải',
    events: [
      {
        id: 'evt-3-1',
        time: '10:00',
        title: 'Di chuyển Nhơn Lý -> Nhơn Hải',
        description: 'Trả phòng, di chuyển sang Làng chài Nhơn Hải.',
        locationName: 'Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi/Xe dịch vụ',
        coordinates: { lat: 13.8800, lng: 109.2800 },
      },
      {
        id: 'evt-3-2',
        time: '11:00',
        title: 'Nhận phòng Nhơn Hải',
        description: 'Nhận phòng lưu trú và tận hưởng sự yên bình.',
        locationName: 'Làng chài Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.8800, lng: 109.2800 },
      },
      {
        id: 'evt-3-3',
        time: '12:00',
        title: 'Ăn trưa',
        description: 'Đặc sản Bánh xèo mực tươi nguyên con.',
        locationName: 'Quán ăn Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.8805, lng: 109.2805 },
      },
      {
        id: 'evt-3-4',
        time: '15:00',
        title: 'Bờ kè Nhơn Hải',
        description: 'Săn rêu xanh trên bãi đá chắn sóng.',
        locationName: 'Bờ kè Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.8810, lng: 109.2810 },
      },
      {
        id: 'evt-3-5',
        time: '18:30',
        title: 'Ăn tối Cococamp',
        description: 'Ăn tối lãng mạn phong cách Santorini.',
        locationName: 'Nhà hàng Cococamp',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.8820, lng: 109.2820 },
      }
    ]
  },
  {
    id: 'day-4',
    date: '2026-03-14',
    title: 'Ngày 4: Kiệt tác đại dương & Rừng rong mơ',
    events: [
      {
        id: 'evt-4-1',
        time: '08:30',
        title: 'Đảo Hòn Khô',
        description: 'Thám hiểm đảo, cầu gỗ, con đường cát giữa biển.',
        locationName: 'Đảo Hòn Khô',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Thuyền/Cano',
        coordinates: { lat: 13.8750, lng: 109.2900 },
      },
      {
        id: 'evt-4-2',
        time: '11:30',
        title: 'Ăn trưa nhà bè',
        description: 'Trải nghiệm ăn trưa lênh đênh trên biển.',
        locationName: 'Nhà bè Hòn Khô',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Thuyền',
        coordinates: { lat: 13.8760, lng: 109.2890 },
      },
      {
        id: 'evt-4-3',
        time: '14:00',
        title: 'Biển Nhơn Hải',
        description: 'Chèo SUP, lặn ngắm san hô, rừng rong mơ, tường thành Champa.',
        locationName: 'Biển Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'SUP/Thuyền',
        coordinates: { lat: 13.8800, lng: 109.2850 },
      },
      {
        id: 'evt-4-4',
        time: '19:00',
        title: 'Ăn tối chia tay',
        description: 'Dạ tiệc với các món nướng mọi, hấp bia.',
        locationName: 'Nhà hàng Hương Biển',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Đi bộ',
        coordinates: { lat: 13.8815, lng: 109.2815 },
      }
    ]
  },
  {
    id: 'day-5',
    date: '2026-03-15',
    title: 'Ngày 5: Tạm biệt Quy Nhơn',
    events: [
      {
        id: 'evt-5-1',
        time: '06:30',
        title: 'Di chuyển ra sân bay',
        description: 'Trả phòng, xuất phát ra sân bay Phù Cát.',
        locationName: 'Nhơn Hải',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi (đã đặt trước)',
        coordinates: { lat: 13.8800, lng: 109.2800 },
      },
      {
        id: 'evt-5-2',
        time: '07:30',
        title: 'Sân bay Phù Cát',
        description: 'Làm thủ tục hàng không.',
        locationName: 'Sân bay Phù Cát',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Taxi',
        coordinates: { lat: 13.9611, lng: 109.0453 },
      },
      {
        id: 'evt-5-3',
        time: '09:00',
        title: 'Cất cánh',
        description: 'Kết thúc chuyến trăng mật.',
        locationName: 'Sân bay Phù Cát',
        mapLink: 'https://maps.app.goo.gl/qX8vY8ZzZzZzZzZz',
        transportSuggestion: 'Máy bay',
        coordinates: { lat: 13.9611, lng: 109.0453 },
      }
    ]
  }
];
