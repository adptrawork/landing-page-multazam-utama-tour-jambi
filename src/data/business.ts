export const business = {
  name: 'Multazam Utama Tour Jambi',
  slug: 'multazam-utama-tour-jambi',
  category: 'Travel Umroh & Haji',
  city: 'Kota Jambi',
  rating: 5.0,
  reviewCount: 200,
  phone: '62811188354',
  phoneDisplay: '0811-188-354 (Admin Multazam)',
  phoneAlt: 'Telp kantor (021) 4288-5027, email cs@multazam.co.id.',
  mapsUrl: 'https://maps.google.com/?q=Multazam+Utama+Tour+Jambi',
  mapsEmbed: 'https://maps.google.com/maps?q=Jambi&t=&z=12&ie=UTF8&iwloc=&output=embed',
  address: 'Kantor pusat PT Tisaga Multazam Utama: Jl. Cempaka Putih Tengah 27 No.14A, Jakarta Pusat 10510. Layanan kemitraan Jambi — alamat cabang konfirmasi via WA.',
  hours: 'Konsultasi setiap hari via WhatsApp',
  website: 'https://multazam.co.id',
  instagram: 'https://www.instagram.com/multazamutamaofficial',
  founded: '15 Juli 1999',
  founder: 'H. Imam Bashori',
  legalEntity: 'PT Tisaga Multazam Utama',
  izinUmroh: 'Izin Umroh No. 884 Tahun 2019 (tertera pada banner paket resmi)',
  schemaType: 'TravelAgency',
  ctaLabel: 'Konsultasi Gratis via WA',
  ctaUrl: 'https://wa.me/62811188354?text=Halo%20admin%20Multazam%2C%20saya%20mau%20tanya%20program%20umroh%20yang%20tersedia.',
  title: 'Umroh Kautsar & Barokah Mulai Rp32jt — Multazam Jambi, Izin 884/2019',
  description: 'Multazam Utama Tour Jambi (PT Tisaga, est. 1999): umroh Kautsar 9–10 hari, Barokah ekonomis 12 hari, hotel Sofwah Tower & Ajyad Makareem, muthowif sesuai sunnah.',
  canonicalPath: '/',
  ogImage: '/images/multazam-umroh-series.jpg',
};

export const navLinks = [
  { href: '/', label: 'Beranda' },
  { href: '/paket', label: 'Paket' },
  { href: '/legalitas', label: 'Legalitas' },
  { href: '/cara-cek-izin', label: 'Cek Izin' },
  { href: '/testimoni', label: 'Testimoni' },
  { href: '/kontak', label: 'Kontak' },
];

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const packages = [
  { name: 'Umroh Kautsar 9 Hari — 23 Des 2026', hotel: 'Ajyad Makareem', price: 'Rp40.500.000', status: 'Terverifikasi situs resmi', img: 'ajyad' },
  { name: 'Umroh Barokah Ekonomis 12 Hari — 28 Des 2026', hotel: 'Ekonomis', price: 'Rp32.000.000', status: 'Terverifikasi situs resmi', img: 'barokah' },
  { name: 'Umroh Kautsar 10 Hari — 11 Nov 2026', hotel: 'Sofwah Tower 3 (Quad 39,75 / Triple 44,5 / Double 45,5 jt)', price: 'Rp39.750.000', status: 'Terverifikasi situs resmi', img: 'sofwah' },
  { name: 'Umroh Kautsar 10 Hari — 11 Nov 2026', hotel: 'Sohada', price: 'Rp36.550.000', status: 'Terverifikasi situs resmi', img: 'sohada' },
  { name: 'Umroh Kautsar 9 Hari — 2 Feb 2027', hotel: 'Royal Majestic', price: 'Rp40.250.000', status: 'Terverifikasi situs resmi', img: 'royal' },
  { name: 'Umroh Syawal 12 Hari — 11 Mar 2027', hotel: 'Royal Majestic', price: 'Rp39.250.000', status: 'Terverifikasi situs resmi', img: 'syawal' },
];

export const departures = [
  { name: 'Umroh Kautsar 9 Hari — 25 Des 2026', hotel: 'Ajyad Makareem', price: 'Rp38.750.000' },
  { name: 'Umroh Barokah Ekonomis 12 Hari — 26 Des 2026', hotel: 'Ekonomis', price: 'Rp37.250.000' },
  { name: 'Umroh Kautsar 9 Hari — 13 Jan 2027', hotel: 'Sofwah Tower', price: 'Rp39.900.000' },
  { name: 'Umroh Kautsar 9 Hari — 30 Jan 2027', hotel: 'Sohada', price: 'Rp36.500.000' },
  { name: 'Umroh Awal Ramadhan 9 Hari — 7 Feb 2027', hotel: 'Ramada Dar Al Fayzeen', price: 'Rp37.000.000' },
  { name: 'Umroh Awal Ramadhan 12 Hari — 7 Feb 2027', hotel: 'Ramada Dar Al Fayzeen', price: 'Rp40.500.000' },
  { name: 'Umroh Lailatul Qadar 15 Hari — 27 Feb 2027', hotel: 'Ramada Dar Al Fayzeen', price: 'Rp56.900.000' },
  { name: 'Umroh Syawal 9 Hari — 12 Mar 2027', hotel: 'Sofwah Tower', price: 'Rp39.900.000' },
  { name: 'Umroh Syawal 9 Hari — 20 Mar 2027', hotel: 'Ajyad Makareem', price: 'Rp36.990.000' },
];

export const hotels = [
  { name: 'Sofwah Tower', desc: 'Hotel Makkah dekat Masjidil Haram untuk paket Kautsar.' },
  { name: 'Ajyad Makareem', desc: 'Hotel Makkah untuk keberangkatan Desember dan Syawal.' },
  { name: 'Sohada', desc: 'Opsi hemat paket Kautsar November dan Januari.' },
  { name: 'Royal Majestic', desc: 'Hotel paket Februari dan Syawal Maret 2027.' },
  { name: 'Ramada Dar Al Fayzeen', desc: 'Hotel paket Ramadhan dan Lailatul Qadar.' },
  { name: 'Triple One Madinah', desc: 'Hotel Madinah paket 11 November (info banner).' },
];

export const testimonials = [
  { name: 'Zaskia Adya Mecca', role: 'Publik figur — alumni Haji 2023', text: 'Merasa tidak salah pilih travel, semua rangkaian ibadah sesuai sunnah, sangat kekeluargaan.' },
  { name: 'Tantri Syalindri', role: 'Publik figur — alumni Haji 2024', text: 'Amanah dan membuat jamaah nyaman, solusi cepat karena pengalaman 25 tahun.' },
  { name: 'Tya Ariestya', role: 'Publik figur — alumni Haji 2025', text: 'Handling amanah dan kekeluargaan, sesuai syariat Islam.' },
  { name: 'Nurlela Fitriani', role: 'Umroh private keluarga', text: 'Hotel, makanan, bus, tour leader, dan muthowif semuanya memuaskan.' },
];

export const notes: string[] = [
  'Harga mulai (quad) terverifikasi dari situs resmi multazam.co.id (Oktober 2026) dan dapat berubah mengikuti kurs.',
  'Izin Umroh No. 884 Tahun 2019 tertera pada banner paket resmi — minta salinan SK dan verifikasi di simpu.kemenag.go.id via WA.',
  'Alamat cabang/kemitraan Jambi dikonfirmasi via WA sebelum survei kantor.',
];
