export const business = {
  name: 'Multazam Utama Tour Jambi',
  slug: 'multazam-utama-tour-jambi',
  category: 'Travel Umroh & Haji',
  city: 'Kota Jambi',
  rating: 5.0,
  reviewCount: 200,
  phone: '6281234567890', // TODO-GANTI: nomor WA aktif pemilik
  mapsUrl: 'https://maps.google.com/?q=Multazam%20Utama%20Tour%20Jambi%20Jambi',
  address: 'Kota Jambi, Provinsi Jambi',
  hours: 'Senin–Sabtu 09.00–21.00, Minggu 10.00–20.00',
  title: 'Multazam Tour Jambi — Itinerary & Izin Kemenag',
  description: 'Multazam Utama Tour Jambi: itinerary, hotel Mekkah/Madinah, izin Kemenag jelas via WA.',
  canonicalPath: '/',
  ogImage: '/og-default.jpg',
};

export const waLink = (message: string) =>
  `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;

export const products = [
  {
    "name": "Paket 9 Hari Quad",
    "price": "Rp 29.500.000",
    "badge": "Hotel 500m",
    "stock": "Seat"
  },
  {
    "name": "Paket 12 Hari Triple",
    "price": "Rp 33.000.000",
    "badge": "Madinah Dekat",
    "stock": "Seat"
  },
  {
    "name": "Private Keluarga 10 Pax",
    "price": "Hubungi",
    "badge": "Fleksibel",
    "stock": "Slot"
  },
  {
    "name": "Ramadhan 14 Hari",
    "price": "Rp 42.000.000",
    "badge": "Lailatul Qadar",
    "stock": "Seat"
  },
  {
    "name": "Plus Turki 15 Hari",
    "price": "Rp 48.000.000",
    "badge": "2 Negara",
    "stock": "Seat"
  },
  {
    "name": "Cicilan 12x Syariah",
    "price": "Mulai Rp 2.600.000/bln",
    "badge": "Ringan",
    "stock": "Konsultasi"
  }
];
