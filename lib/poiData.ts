export interface POI {
  id: string;
  name: string;
  description: string;
  activities?: string[];
  bestTime?: string;
  tips?: string;
  moving?: string;
}

export const poiData: POI[] = [
  {
    id: 'eo-gio',
    name: '1. Eo Gió',
    description: 'Eo biển được bao quanh bởi dãy núi đá cong hình vòng cung. Nổi tiếng với con đường đi bộ ven núi sát biển.',
    activities: ['Đi bộ ngắm cảnh', 'Chụp ảnh sống ảo', 'Ngắm hoàng hôn'],
    bestTime: 'Bình minh 5h30 – 6h30, Hoàng hôn 17h – 18h',
    tips: 'Đứng ở đoạn cong của đường ven biển để có background đại dương.'
  },
  {
    id: 'ky-co',
    name: '2. Kỳ Co',
    description: 'Một trong những bãi biển đẹp nhất Việt Nam. Nước biển xanh ngọc, cát trắng mịn.',
    activities: ['Tắm biển', 'Lặn san hô', 'Cano, moto nước'],
    bestTime: '9h – 11h (nước trong nhất)',
    moving: 'Cano từ Nhơn Lý khoảng 15 phút.'
  },
  {
    id: 'tinh-xa-ngoc-hoa',
    name: '3. Tịnh xá Ngọc Hòa',
    description: 'Ngôi chùa nổi tiếng gần Eo Gió. Có tượng Quan Âm hai mặt cao hơn 30m.',
    activities: ['Tham quan chùa', 'Ngắm cảnh biển'],
    tips: 'Đi chung với Eo Gió vì khoảng cách rất gần.'
  },
  {
    id: 'lang-chai-nhon-ly',
    name: '4. Làng chài Nhơn Lý',
    description: 'Làng chài truyền thống hơn 200 năm. Nhà cửa sơn màu pastel và nhiều tranh tường.',
    activities: ['Chụp ảnh street', 'Tham quan cuộc sống ngư dân', 'Ăn hải sản tươi'],
    bestTime: '6h – 7h sáng (thuyền cá về bến).'
  },
  {
    id: 'doi-cat-phuong-mai',
    name: '5. Đồi cát Phương Mai',
    description: 'Đồi cát lớn trên bán đảo Phương Mai. Cảnh giống sa mạc.',
    activities: ['Trượt cát', 'Chụp ảnh'],
    bestTime: 'Hoàng hôn.'
  },
  {
    id: 'hon-kho',
    name: '6. Hòn Khô',
    description: 'Hòn đảo nhỏ cách Nhơn Hải khoảng 10 phút đi thuyền. Nước biển rất trong.',
    activities: ['Lặn san hô', 'Tắm biển', 'Check-in cầu gỗ'],
    bestTime: '9h – 11h.'
  },
  {
    id: 'con-duong-bien',
    name: '7. Con đường đi bộ giữa biển (Hòn Khô)',
    description: 'Con đường cát nối từ bờ ra đảo. Chỉ xuất hiện khi thủy triều rút.',
    tips: 'Hỏi dân địa phương trước khi đi.'
  },
  {
    id: 'lang-chai-nhon-hai',
    name: '8. Làng chài Nhơn Hải',
    description: 'Làng chài yên bình ít khách du lịch. Nổi tiếng với cảnh bình minh.',
    activities: ['Chụp ảnh', 'Ăn hải sản']
  },
  {
    id: 'bai-san-ho-nhon-hai',
    name: '9. Bãi san hô Nhơn Hải',
    description: 'Một trong những điểm lặn san hô đẹp nhất Quy Nhơn.',
    activities: ['Snorkeling', 'Chụp ảnh dưới nước']
  }
];
