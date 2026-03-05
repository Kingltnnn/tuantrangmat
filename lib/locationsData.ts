export interface Location {
  id: string;
  name: string;
  category: 'Ngắm cảnh' | 'Cà phê' | 'Ăn uống' | 'Chụp ảnh';
  description: string;
  images: string[];
  address?: string;
  tips?: string;
  mapLink?: string;
}

export const locationsData: Location[] = [
  // NGẮM CẢNH (Bình minh & Hoàng hôn)
  {
    id: 'eo-gio-scenic',
    name: 'Eo Gió',
    category: 'Ngắm cảnh',
    description: 'Eo biển được bao quanh bởi các vách đá hình vòng cung nhìn ra đại dương. Đây là một trong những nơi ngắm hoàng hôn đẹp nhất ở Quy Nhơn.',
    images: ['/ngamcanh/c1.jpg','/ngamcanh/c2.jpg','/ngamcanh/c3.jpg','/ngamcanh/c4.jpg'],
    address: 'Thôn Lý Lương, xã Nhơn Lý, TP Quy Nhơn, Bình Định',
    tips: 'Bình minh: 05:30 – 06:30, Hoàng hôn: 17:00 – 18:00',
    mapLink: 'https://maps.app.goo.gl/uLa2MkP4k7dL6kiv9'
  },
  {
    id: 'bai-reu-scenic',
    name: 'Bãi Rêu',
    category: 'Ngắm cảnh',
    description: 'Đây là nơi có view biển rộng, rất đẹp để ngắm bình minh và hoàng hôn.',
    images: ['/ngamcanh/c5.jpg','/ngamcanh/c6.jpg','/ngamcanh/c7.jpg','/ngamcanh/c9.jpg'],
    address: 'Thôn Hải Đông, xã Nhơn Hải, TP Quy Nhơn',
    tips: 'Bình minh: 05:30 – 06:30, Hoàng hôn: 17:00 – 18:00',
    mapLink: 'https://maps.app.goo.gl/sGt2XgvRQA4fzt6E8'
  },
  
  // CÀ PHÊ
  {
    id: 'nha-ben-bien',
    name: 'Nhà Bên Biển',
    category: 'Cà phê',
    description: 'Quán do một bạn trẻ Gen Z địa phương tự thiết kế từ các vật dụng biển tái chế. Không gian siêu mộc mạc, chill, có lối đi nhỏ dẫn thẳng ra biển và dịch vụ chèo SUP.',
    images: ['/caphe/cp1.jpg','/caphe/cp2.webp','/caphe/cp3.jpg'],
    address: 'Hẻm ra biển, Làng chài Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/2uQsEspegyyFUFB28'
  },
  {
    id: 'con-duong-da-xanh',
    name: 'Cafe Dọc Con Đường Đá Xanh',
    category: 'Cà phê',
    description: 'Dọc theo con dốc lát đá xanh với các bức bích họa rực rỡ, người dân mở các ban công bán nước, cafe rất dễ thương. Phù hợp để bạn nữ mặc váy maxi chụp ảnh mang phong cách Santorini.',
    images: ['/caphe/da1.jpg','/caphe/da2.jpg','/caphe/da3.jpg'],
    address: 'Dốc Quán, Thôn Lý Lương, Xã Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/Qg9T7GfEcQJhmesn7'
  },
  {
    id: 'ngo-coffee',
    name: 'Ngõ Coffee & Homestay',
    category: 'Cà phê',
    description: 'Nằm ngay lối xuống Eo Gió, quán có khu vườn rộng rãi nhiều cây xanh, kết hợp tông màu trắng - xanh nhiệt đới mang lại cảm giác cực kỳ mát mẻ, yên tĩnh.',
    images: ['/caphe/ngo1.jpg'],
    address: 'Khu du lịch Eo Gió, Xã Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/vA6vwEx4Jejo84pE7'
  },
  {
    id: 'eo-gio-panorama',
    name: 'Eo Gió Panorama',
    category: 'Cà phê',
    description: 'Sở hữu không gian cafe có view ngắm biển trực diện 3 mặt cực kỳ hiếm có, lên hình cực kỳ sang chảnh.',
    images: ['/caphe/eo1.webp','/caphe/eo2.jpeg'],
    address: 'Thôn Lý Hưng, Xã Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/Zqw8nUNWMtYG89M79'
  },
  {
    id: 'mua-reu-cafe',
    name: 'Mùa Rêu',
    category: 'Cà phê',
    description: 'Đây là quán cafe có view đẹp nhất Nhơn Hải. Nằm ngay sát bãi biển, thiết kế tone màu xanh dương - trắng. Buổi chiều ngồi đây uống nước ngắm đảo Hòn Khô và hoàng hôn lộng lẫy.',
    images: ['/caphe/reu1.jpg','/caphe/reu2.jpg','/caphe/reu3.jpg'],
    address: 'Thôn Hải Nam, Xã Nhơn Hải, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/hLG3XTuzU8deWHQh9'
  },

  // ĂN UỐNG
  {
    id: 'phuong-lan-seafood',
    name: 'Hải sản Phương Lan',
    category: 'Ăn uống',
    description: 'Quán hải sản lâu đời và nổi tiếng nhất Nhơn Lý. Hải sản tươi sống được đánh bắt trong ngày, chế biến đậm đà.',
    images: ['/1D0A4394 2.webp'],
    address: 'Thôn Lý Lương, Xã Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/uLa2MkP4k7dL6kiv9'
  },
  {
    id: 'hoang-thao-seafood',
    name: 'Hải sản Hoàng Thao',
    category: 'Ăn uống',
    description: 'Không gian nhà hàng rộng rãi, sang trọng với view nhìn thẳng ra Eo Gió. Phù hợp cho các bữa tối lãng mạn.',
    images: ['/1D0A4340.webp'],
    address: 'Đường số 4, Khu du lịch Eo Gió, Xã Nhơn Lý',
    mapLink: 'https://maps.app.goo.gl/Zqw8nUNWMtYG89M79'
  },
  {
    id: 'hoa-bien-nhon-ly',
    name: 'Hải sản Hoa Biển',
    category: 'Ăn uống',
    description: 'Quán ăn bình dân nhưng chất lượng hải sản cực kỳ tươi ngon, giá cả phải chăng, được nhiều khách du lịch lựa chọn.',
    images: ['/1D0A4487.webp'],
    address: 'Thôn Lý Hưng, Xã Nhơn Lý, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/Qg9T7GfEcQJhmesn7'
  },
  {
    id: 'banh-xeo-muc-ly',
    name: 'Bánh xèo mực Nhơn Lý',
    category: 'Ăn uống',
    description: 'Món ăn đặc sản dân dã nhưng cực kỳ gây nghiện. Mực tươi rói được đổ cùng bột bánh xèo giòn rụm.',
    images: ['/1D0A4394 2.webp'],
    address: 'Chợ Nhơn Lý, Xã Nhơn Lý, TP. Quy Nhơn',
    tips: 'Nên ăn vào buổi sáng hoặc xế chiều.'
  },
  {
    id: 'bun-cha-ca-ly',
    name: 'Bún chả cá Nhơn Lý',
    category: 'Ăn uống',
    description: 'Bún chả cá được làm từ cá tươi đánh bắt tại biển Nhơn Lý, nước dùng thanh ngọt tự nhiên.',
    images: ['/1D0A4487.webp'],
    address: 'Làng chài Nhơn Lý, TP. Quy Nhơn',
    tips: 'Món ăn sáng tuyệt vời của người dân địa phương.'
  },
  {
    id: 'cococamp-nhon-hai',
    name: 'Cococamp',
    category: 'Ăn uống',
    description: 'Nhà hàng kết hợp cafe phong cách Santorini với view biển Nhơn Hải tuyệt đẹp. Không gian cực kỳ chill và sang chảnh.',
    images: ['/1D0A4340.webp'],
    address: 'Thôn Hải Nam, Xã Nhơn Hải, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/hLG3XTuzU8deWHQh9'
  },
  {
    id: 'huong-bien-nhon-hai',
    name: 'Hải sản Hương Biển',
    category: 'Ăn uống',
    description: 'Quán ăn sát biển Nhơn Hải, hải sản được nuôi trong lồng bè, khách có thể chọn trực tiếp để chế biến.',
    images: ['/1D0A4394 2.webp'],
    address: 'Bờ kè Nhơn Hải, Xã Nhơn Hải, TP. Quy Nhơn',
    mapLink: 'https://maps.app.goo.gl/sGt2XgvRQA4fzt6E8'
  },
  {
    id: 'banh-xeo-muc-hai',
    name: 'Bánh xèo mực Nhơn Hải',
    category: 'Ăn uống',
    description: 'Nổi tiếng với mực sữa tươi rói. Bánh xèo ở đây có vị ngọt đặc trưng của hải sản vừa đánh bắt.',
    images: ['/1D0A4487.webp'],
    address: 'Dọc bờ kè Nhơn Hải, TP. Quy Nhơn',
    tips: 'Mực ở đây thường là mực sữa nhỏ, rất ngọt.'
  },
  {
    id: 'oc-bien-nhon-hai',
    name: 'Ốc Nhơn Hải',
    category: 'Ăn uống',
    description: 'Các loại ốc biển lạ mắt và ngon miệng như ốc nón, ốc vú nàng, ốc nhảy được chế biến đơn giản để giữ vị ngọt.',
    images: ['/1D0A4394 2.webp'],
    address: 'Khu vực chợ Nhơn Hải, TP. Quy Nhơn'
  },
  {
    id: 'cha-ca-nhon-hai',
    name: 'Chả cá Nhơn Hải',
    category: 'Ăn uống',
    description: 'Đặc sản chả cá Nhơn Hải nổi tiếng khắp Quy Nhơn bởi độ dai và thơm mùi cá biển nguyên chất.',
    images: ['/1D0A4487.webp'],
    address: 'Làng chài Nhơn Hải, TP. Quy Nhơn',
    tips: 'Có thể mua chả cá tươi hoặc đã chiên về làm quà.'
  },

  // CHỤP ẢNH
  {
    id: 'bich-hoa-nhon-ly',
    name: 'Con đường bích họa Nhơn Lý',
    category: 'Chụp ảnh',
    description: 'Những bức tường cũ kỹ được khoác lên mình những bức tranh đầy màu sắc kể về cuộc sống làng chài.',
    images: ['/ngamcanh/c1.jpg'],
    address: 'Dốc Quán, Nhơn Lý, Quy Nhơn',
    tips: 'Nên đi vào buổi sáng sớm để tránh nắng và đông người.'
  },
  {
    id: 'cau-go-hon-kho',
    name: 'Cầu gỗ Hòn Khô',
    category: 'Chụp ảnh',
    description: 'Cây cầu gỗ uốn lượn ven vách đá trên đảo Hòn Khô, một trong những điểm check-in "quốc dân" tại Quy Nhơn.',
    images: ['/ngamcanh/c5.jpg'],
    address: 'Đảo Hòn Khô, Nhơn Hải, Quy Nhơn',
    tips: 'Cần đi cano ra đảo để check-in.'
  },
  {
    id: 'bo-ke-nhon-hai',
    name: 'Bờ kè chắn sóng Nhơn Hải',
    category: 'Chụp ảnh',
    description: 'Bờ kè chắn sóng với những khối đá hình thù độc đáo, đặc biệt đẹp vào mùa rêu xanh.',
    images: ['/ngamcanh/c6.jpg'],
    address: 'Dọc bờ biển Nhơn Hải, Quy Nhơn',
    tips: 'Mùa rêu thường bắt đầu từ tháng 1 đến tháng 3 âm lịch.'
  }
];
