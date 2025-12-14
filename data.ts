import { Category, DayPlan, FlightInfo, HotelInfo } from './types';

// Mock hourly weather generator
const generateHourly = (baseTemp: number, icon: string) => [
  { time: '09:00', temp: `${baseTemp}°`, icon },
  { time: '12:00', temp: `${baseTemp + 2}°`, icon },
  { time: '15:00', temp: `${baseTemp + 1}°`, icon },
  { time: '18:00', temp: `${baseTemp - 2}°`, icon: '🌙' },
  { time: '21:00', temp: `${baseTemp - 4}°`, icon: '🌙' },
];

export const TRIP_DATA: DayPlan[] = [
  {
    date: '2025-12-20',
    dayLabel: 'Sat',
    dayNumber: '20',
    locationTitle: '東京 Tokyo',
    locationUrl: 'https://goo.gl/maps/8Z5Z5Z5Z5Z5Z5Z5Z5',
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000&auto=format&fit=crop', 
    weather: { 
      temp: '12°', 
      condition: 'Sunny', 
      icon: '☀️',
      hourly: generateHourly(12, '☀️')
    },
    items: [
      {
        id: 'd1-1',
        time: '06:10',
        title: '虎航 IT200 出發',
        location: '桃園機場 T1',
        category: Category.FLIGHT,
        description: '前往東京成田機場 (NRT)。',
        googleMapsUrl: 'https://goo.gl/maps/8Z5Z5Z5Z5Z5Z5Z5Z5',
        // Example attachment: replace 'url' with your Notion PDF link
        attachments: [
          { type: 'pdf', title: '電子機票', url: '#' } 
        ]
      },
      {
        id: 'd1-3',
        time: '11:30',
        title: 'Skyliner + 山手線',
        location: '成田 → 池袋',
        category: Category.TRANSPORT,
        price: '¥2,760',
        googleMapsUrl: 'https://goo.gl/maps/example',
        highlights: [
          { text: '日暮里轉乘', type: 'critical' }
        ],
        description: '搭乘 Skyliner 到日暮里，轉乘 JR 山手線至池袋。',
        attachments: [
            { type: 'image', title: 'Skyliner QR', url: '#' }
        ]
      },
      {
        id: 'd1-4',
        time: '14:00',
        title: 'Check-in',
        location: '東急 Stay 池袋',
        category: Category.HOTEL,
        googleMapsUrl: 'https://maps.app.goo.gl/yQ6eMS7miAsZnoPn6',
        highlights: [
          { text: '訂單: 1676573267', type: 'critical' }
        ],
        description: 'C1出口步行1分鐘。'
      },
      {
        id: 'd1-5',
        time: '18:00',
        title: '無敵家拉麵',
        location: '池袋東口',
        category: Category.FOOD,
        googleMapsUrl: 'https://maps.app.goo.gl/ExampleRamen',
        description: '池袋排隊名店，必點本丸麵。',
        highlights: [
          { text: '必吃', type: 'food' }
        ]
      }
    ]
  },
  {
    date: '2025-12-21',
    dayLabel: 'Sun',
    dayNumber: '21',
    locationTitle: '東京 Tokyo',
    locationUrl: 'https://maps.app.goo.gl/SunshineCity',
    heroImage: 'https://images.unsplash.com/photo-1599818826724-42f025974051?q=80&w=1000&auto=format&fit=crop',
    weather: { 
      temp: '11°', 
      condition: 'Cloudy', 
      icon: '☁️',
      hourly: generateHourly(11, '☁️')
    },
    items: [
      {
        id: 'd2-2',
        time: '10:30',
        title: '領取特急列車票',
        location: 'JR池袋站',
        category: Category.TRANSPORT,
        googleMapsUrl: 'https://maps.app.goo.gl/Station',
        highlights: [
          { text: '領取富士回遊票', type: 'critical' }
        ],
        description: '前往 JR 東日本旅行服務中心領取明日車票。',
        attachments: [
            { type: 'pdf', title: '預約確認單', url: '#' }
        ]
      },
      {
        id: 'd2-3',
        time: '12:00',
        title: 'Sunshine City',
        location: '池袋',
        category: Category.SHOPPING,
        googleMapsUrl: 'https://maps.app.goo.gl/SunshineCity',
        description: '太陽城水族館、寶可夢中心。',
        highlights: [
          { text: '寶可夢中心', type: 'info' }
        ]
      }
    ]
  },
  {
    date: '2025-12-22',
    dayLabel: 'Mon',
    dayNumber: '22',
    locationTitle: '富士山 Mt. Fuji',
    locationUrl: 'https://maps.app.goo.gl/bcjAtaEzuUGKfSX96',
    heroImage: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=1000&auto=format&fit=crop',
    weather: { 
      temp: '2°', 
      condition: 'Snow', 
      icon: '❄️',
      hourly: generateHourly(2, '❄️')
    },
    items: [
      {
        id: 'd3-1',
        time: '11:00',
        title: '前往新宿站',
        location: '新宿站',
        category: Category.TRANSPORT,
        googleMapsUrl: 'https://maps.app.goo.gl/ShinjukuSt',
        highlights: [
          { text: '第 9、10 月台', type: 'critical' }
        ]
      },
      {
        id: 'd3-2',
        time: '11:34',
        title: '富士回遊 93 號',
        location: '新宿 → 河口湖',
        category: Category.TRANSPORT,
        price: '¥8,260',
        googleMapsUrl: 'https://goo.gl/maps/example',
        highlights: [
          { text: '3號車 9A, 9B', type: 'critical' },
          { text: '票: 332423605...', type: 'critical' }
        ],
        attachments: [
            { type: 'image', title: '車票 QR', url: '#' }
        ]
      },
      {
        id: 'd3-4',
        time: '15:00',
        title: 'Mizno Hotel Check-in',
        location: '河口湖',
        category: Category.HOTEL,
        googleMapsUrl: 'https://maps.app.goo.gl/bcjAtaEzuUGKfSX96',
        highlights: [
          { text: '預約: 16757210', type: 'critical' },
          { text: '逆富士', type: 'info' }
        ]
      }
    ]
  },
  {
    date: '2025-12-23',
    dayLabel: 'Tue',
    dayNumber: '23',
    locationTitle: '富士山 Mt. Fuji',
    locationUrl: 'https://maps.app.goo.gl/Ropeway',
    heroImage: 'https://images.unsplash.com/photo-1528360983277-13d9012356eb?q=80&w=1000&auto=format&fit=crop',
    weather: { 
      temp: '4°', 
      condition: 'Sunny', 
      icon: '☀️',
      hourly: generateHourly(4, '☀️')
    },
    items: [
      {
        id: 'd4-1',
        time: '10:00',
        title: '天上山公園',
        location: '河口湖纜車',
        category: Category.SIGHTSEEING,
        googleMapsUrl: 'https://maps.app.goo.gl/Ropeway',
        highlights: [
          { text: 'Hoto 不動麵', type: 'food' }
        ]
      },
      {
        id: 'd4-2',
        time: '14:09',
        title: '富士回遊 32 號',
        location: '河口湖 → 新宿',
        category: Category.TRANSPORT,
        googleMapsUrl: 'https://goo.gl/maps/example',
        price: '¥8,260',
        highlights: [
          { text: '2號車 9C, 9D', type: 'critical' }
        ]
      },
      {
        id: 'd4-4',
        time: '17:30',
        title: '淺草豪景別館 Check-in',
        location: '淺草',
        category: Category.HOTEL,
        googleMapsUrl: 'https://maps.app.goo.gl/3zZSENurrZKcvxsy9',
        highlights: [
          { text: '預約: 1676005197', type: 'critical' }
        ]
      },
      {
        id: 'd4-5',
        time: '19:00',
        title: '淺草今半壽喜燒',
        location: '淺草',
        category: Category.FOOD,
        googleMapsUrl: 'https://maps.app.goo.gl/Imahan',
        highlights: [
          { text: '頂級和牛', type: 'food' }
        ]
      }
    ]
  },
  {
    date: '2025-12-24',
    dayLabel: 'Wed',
    dayNumber: '24',
    locationTitle: '東京 Tokyo',
    locationUrl: 'https://maps.app.goo.gl/NaritaT2',
    heroImage: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop',
    weather: { 
      temp: '13°', 
      condition: 'Cloudy', 
      icon: '☁️',
      hourly: generateHourly(13, '☁️')
    },
    items: [
      {
        id: 'd5-1',
        time: '09:00',
        title: '淺草寺參拜',
        location: '淺草寺',
        category: Category.SIGHTSEEING,
        googleMapsUrl: 'https://maps.app.goo.gl/Sensoji',
        highlights: [
          { text: '人形燒', type: 'food' }
        ]
      },
      {
        id: 'd5-2',
        time: '11:00',
        title: 'Access 特急',
        location: '淺草 → 成田機場',
        category: Category.TRANSPORT,
        googleMapsUrl: 'https://goo.gl/maps/example',
        price: '¥1,380',
        description: '直達機場，約 51 分鐘。'
      },
      {
        id: 'd5-3',
        time: '13:00',
        title: '虎航 IT201 回程',
        location: '成田機場 T2',
        category: Category.FLIGHT,
        googleMapsUrl: 'https://maps.app.goo.gl/NaritaT2',
        description: '13:00 出發，16:25 抵達桃園。'
      }
    ]
  }
];

export const FLIGHTS: FlightInfo[] = [
  {
    code: 'IT200',
    route: 'TPE 桃園 → NRT 成田',
    time: '2025/12/20 06:10 - 10:35',
    terminal: 'T1 (TPE) / T2 (NRT)',
    details: '虎航 Tigerair'
  },
  {
    code: 'IT201',
    route: 'NRT 成田 → TPE 桃園',
    time: '2025/12/24 13:00 - 16:25',
    terminal: 'T2 (NRT) / T1 (TPE)',
    details: '虎航 Tigerair'
  }
];

export const HOTELS: HotelInfo[] = [
  {
    name: '東急 Stay 池袋',
    checkIn: '12/20 - 12/22 (2晚)',
    address: '東京都豊島区池袋2-12-2',
    mapUrl: 'https://maps.app.goo.gl/yQ6eMS7miAsZnoPn6',
    bookingId: '1676573267',
    // Paste Notion Link of your hotel voucher PDF here
    attachments: [
        { type: 'pdf', title: '住宿憑證', url: '#' } 
    ]
  },
  {
    name: 'Mizno Hotel (湖之飯店)',
    checkIn: '12/22 - 12/23 (1晚)',
    address: '山梨県南都留郡富士河口湖町浅川187',
    mapUrl: 'https://maps.app.goo.gl/bcjAtaEzuUGKfSX96',
    bookingId: '16757210',
    attachments: [
        { type: 'pdf', title: '住宿憑證', url: '#' }
    ]
  },
  {
    name: '淺草豪景飯店別館',
    checkIn: '12/23 - 12/24 (1晚)',
    address: '東京都台東区浅草2-9-10',
    mapUrl: 'https://maps.app.goo.gl/3zZSENurrZKcvxsy9',
    bookingId: '1676005197',
    attachments: [
        { type: 'pdf', title: '住宿憑證', url: '#' }
    ]
  }
];

export const EMERGENCY_CONTACTS = [
  { name: '旅外國人急難救助', phone: '+81-3-3280-7917' },
  { name: '日本警局', phone: '110' },
  { name: '日本救護車', phone: '119' },
];