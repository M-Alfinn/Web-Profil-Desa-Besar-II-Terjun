import { PerangkatDesa, PotensiDesa, UMKMData, GaleriItem, FasilitasUmum, KKNMember, ProgramKerjaKKN, TimelineKegiatan } from './types';

// Perangkat Desa (Struktur Organisasi)
export const mockPerangkatDesa: PerangkatDesa[] = [
  {
    id: '1',
    nama: 'SULAIMANSYAH',
    jabatan: 'Kepala Desa',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kades',
    detailTugas: 'Memimpin penyelenggaraan pemerintahan desa, membina kehidupan masyarakat, dan memelihara ketentraman serta ketertiban umum.',
    jenisKelamin: 'L'
  },
  {
    id: '2',
    nama: 'AHMAD RAMDANI, S.Pd',
    jabatan: 'Sekretaris Desa',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    tingkat: 'sekdes',
    detailTugas: 'Membantu Kepala Desa dalam bidang administrasi pemerintahan, pelayanan publik, sekretariat, dan pengorganisasian perangkat desa.',
    jenisKelamin: 'L'
  },
  {
    id: '3',
    nama: 'YAKOB',
    jabatan: 'Kasi Pemerintahan',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kaur_kasi',
    detailTugas: 'Menyelenggarakan manajemen tata praja pemerintahan, registrasi kependudukan non-rahasia, pembinaan ketentraman, dan pertanahan.',
    jenisKelamin: 'L'
  },
  {
    id: '4',
    nama: 'LILI AGUSTINA',
    jabatan: 'Kasi Kesejahteraan dan Pelayanan',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kaur_kasi',
    detailTugas: 'Melaksanakan pembangunan sarana prasarana fisik, keagamaan, sosial kemasyarakatan, serta pelayanan perizinan dan bimbingan sosial.',
    jenisKelamin: 'P'
  },
  {
    id: '5',
    nama: 'ZUBARDIN',
    jabatan: 'Kaur Keuangan',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kaur_kasi',
    detailTugas: 'Mengelola tata usaha keuangan desa, termasuk penerimaan, pengeluaran, penyusunan anggaran (APBDesa), dan pelaporan pertanggungjawaban.',
    jenisKelamin: 'L'
  },
  {
    id: '6',
    nama: 'RAHMAD',
    jabatan: 'Kaur Umum dan Perencanaan',
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kaur_kasi',
    detailTugas: 'Menyusun rencana pembangunan desa, mengelola urusan surat-menyurat, arsip, perlengkapan, dan aset kekayaan desa.',
    jenisKelamin: 'L'
  },
  {
    id: '7',
    nama: 'SUYETNO',
    jabatan: 'Ka. Dusun I',
    foto: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun I, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '8',
    nama: 'MAS CIPTO PRANOTO',
    jabatan: 'Ka. Dusun II',
    foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun II, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '9',
    nama: 'NURHAMDANI',
    jabatan: 'Ka. Dusun III',
    foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun III, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '10',
    nama: 'SUMARSIM',
    jabatan: 'Ka. Dusun IV',
    foto: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun IV, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '11',
    nama: 'NAZRIYAN',
    jabatan: 'Ka. Dusun V',
    foto: 'https://images.unsplash.com/photo-1513956589300-bad6acb9b9d4?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun V, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '12',
    nama: 'JUNAIDI',
    jabatan: 'Ka. Dusun VI',
    foto: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun VI, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '13',
    nama: 'HENGKY PURNAWAN, SH',
    jabatan: 'Ka. Dusun VII',
    foto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun VII, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  },
  {
    id: '14',
    nama: 'IRWIN',
    jabatan: 'Ka. Dusun VIII',
    foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=400',
    tingkat: 'kadus',
    detailTugas: 'Membantu Kepala Desa dalam pelaksanaan tugas di wilayah kerja Dusun VIII, membina ketertiban, dan menyalurkan aspirasi warga.',
    jenisKelamin: 'L'
  }
];

// Potensi Desa
export const mockPotensiDesa: PotensiDesa[] = [
  {
    id: 'pot-1',
    kategori: 'Pertanian',
    judul: 'Sektor Pertanian & Perkebunan',
    deskripsi: 'Pilar utama perekonomian Desa Besar II Terjun yang bertumpu pada hamparan sawah irigasi teknis padi yang subur, perkebunan rakyat swadaya warga, serta budidaya tanaman dan sayur-sayuran harian.',
    gambar: '/Foto/Tentang Desa/4.jpg',
    detailInfo: 'Sektor ini menyerap tenaga kerja terbesar di desa (lebih dari 22.83% penduduk) dan terus dikembangkan menggunakan teknologi mekanisasi tani, pemupukan hayati, serta pengaturan irigasi teknis yang andal.'
  },
  {
    id: 'pot-2',
    kategori: 'UMKM',
    judul: 'Sektor UMKM & Industri Rumah Tangga',
    deskripsi: 'Desa Besar II Terjun memiliki sektor ekonomi kreatif yang dinamis dengan 15+ UMKM aktif terdaftar. Meliputi mebel kayu premium, kerajinan tirai bambu, kerajinan anyaman pandan tradisional Melayu, batu nisan, agen sapu lidi, distributor pupuk pertanian, serta aneka budidaya kacang tanah.',
    gambar: '/Foto/UMKM/Dusun VII & VIII/Agen Sapu Lidi/1.jpg',
    detailInfo: 'Pendampingan digitalisasi pemasaran dan inovasi kemasan oleh mahasiswa KKN UNIMED 2026 bertujuan agar 15+ unit usaha mikro ini dapat terhubung dengan jaringan pasar digital yang lebih luas dan profesional.'
  },
  {
    id: 'pot-3',
    kategori: 'Potensi Desa',
    judul: 'Fasilitas Umum & Sosial Pendukung',
    deskripsi: 'Dukungan infrastruktur sosial yang lengkap dengan 15+ fasilitas umum aktif. Mencakup Pondok Pesantren Tahfidz Qur’an khusus santriwati, Mendai Computer Course, SD Negeri, Taman Baca Al-Qur’an anak-anak, Masjid asri di tiap dusun, Posyandu aktif harian, serta Kantor Kepala Desa yang megah untuk pelayanan publik warga.',
    gambar: '/Foto/Fasilitas/Dusun III/Masjid AL-Ikhlas/1.jpg',
    detailInfo: 'Sebanyak 15+ fasilitas umum ini dikelola secara sinergis oleh pemerintah desa dan tokoh masyarakat demi menjamin kesejahteraan, pendidikan cerdas, dan tingkat kesehatan harian warga yang merata.'
  }
];

// UMKM Desa (Sorted by Dusun I s/d Dusun VIII)
export const mockUMKM: UMKMData[] = [
  {
    id: 'umkm-3',
    nama: 'UMKM Tempe Pak Suyitno',
    kategori: 'Kuliner & Pangan',
    deskripsi: 'Usaha produksi tempe rumahan berkualitas tinggi yang dikelola oleh Pak Suyitno di Dusun I.',
    foto: '/Foto/UMKM/Dusun I & II/Umkm Tempe/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun I & II/Umkm Tempe/1.jpg',
      '/Foto/UMKM/Dusun I & II/Umkm Tempe/2.jpg',
      '/Foto/UMKM/Dusun I & II/Umkm Tempe/3.jpg'
    ],
    lokasi: 'Dusun I, Desa Besar II Terjun',
    kontak: '085206535459',
    pemilik: 'Pak Suyitno',
    jenisUsaha: 'Industri Pangan',
    bahan: 'Kacang kedelai dan ragi',
    tahunBerdiri: 'Mei 2001',
    produk: ['Tempe Kedelai Super', 'Tempe Daun Tradisional'],
    koordinat: '3.631017,98.971839'
  },
  {
    id: 'umkm-14',
    nama: 'Jendela Kayu Pak Sugeng',
    kategori: 'Mebel & Kerajinan',
    deskripsi: 'Usaha pertukangan kayu milik Pak Sugeng di Dusun II yang memproduksi berbagai macam jendela kayu pesanan warga.',
    foto: '/Foto/UMKM/Dusun I & II/pak sugeng/3.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun I & II/pak sugeng/3.jpg',
      '/Foto/UMKM/Dusun I & II/pak sugeng/2.jpg',
      '/Foto/UMKM/Dusun I & II/pak sugeng/1.jpg'
    ],
    lokasi: 'Dusun II, Desa Besar II Terjun',
    kontak: '082168093693',
    pemilik: 'Pak Sugeng',
    koordinat: '3.630958,98.972690',
    produk: ['Jendela Kayu Jati', 'Kusen Kayu Custom', 'Daun Jendela Minimalis']
  },
  {
    id: 'umkm-6',
    nama: 'Batu Nisan Berkah (Awang Berkah)',
    kategori: 'Pekerjaan Umum & Jasa',
    deskripsi: 'Usaha pembuatan batu nisan di Dusun III.',
    foto: '/Foto/UMKM/Dusun III & IV/batu nisan/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/batu nisan/1.jpg',
      '/Foto/UMKM/Dusun III & IV/batu nisan/2.jpg',
      '/Foto/UMKM/Dusun III & IV/batu nisan/3.jpg'
    ],
    lokasi: 'Dusun III, Desa Besar II Terjun',
    kontak: '083171836145',
    pemilik: 'Bayu Gazali',
    bahan: '-',
    produk: ['Batu Nisan'],
    koordinat: '3.630012,98.980110'
  },
  {
    id: 'umkm-7',
    nama: 'Tirai Bambu Kemuning',
    kategori: 'Kerajinan Tangan',
    deskripsi: 'Usaha pembuatan tirai atau krei bambu kemuning milik Pak Fendi di Dusun III.',
    foto: '/Foto/UMKM/Dusun III & IV/tirai bambu kemuning/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/tirai bambu kemuning/1.jpg',
      '/Foto/UMKM/Dusun III & IV/tirai bambu kemuning/2.jpg',
      '/Foto/UMKM/Dusun III & IV/tirai bambu kemuning/3.jpg'
    ],
    lokasi: 'Dusun III, Desa Besar II Terjun',
    kontak: '085264121392',
    pemilik: 'Pak Fendi',
    bahan: 'Bambu kemuning, tali senar, cat pelapis tahan air',
    produk: ['Tirai Bambu Kemuning Rapi', 'Tirai Bambu Outdoor Custom'],
    koordinat: '3.629059,98.979848'
  },
  {
    id: 'umkm-10',
    nama: 'UMKM Bibit Buah dan Bunga Pak Darwin',
    kategori: 'Pertanian & Tanaman',
    deskripsi: 'Usaha pembibitan berbagai jenis tanaman buah dan tanaman hias bunga milik Pak Darwin di Dusun III.',
    foto: '/Foto/UMKM/Dusun III & IV/bibit buah/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/bibit buah/1.jpg',
      '/Foto/UMKM/Dusun III & IV/bibit buah/2.jpg',
      '/Foto/UMKM/Dusun III & IV/bibit buah/3.jpg'
    ],
    lokasi: 'Dusun III, Desa Besar II Terjun',
    kontak: '085358771220',
    pemilik: 'Pak Darwin',
    produk: ['Bibit Buah Durian Unggul', 'Bibit Tanaman Hias Bunga', 'Bibit Tanaman Buah Pekarangan'],
    koordinat: '3.625812,98.978787'
  },
  {
    id: 'umkm-11',
    nama: 'UMKM Kacang Tanah Bu Maemunah',
    kategori: 'Kuliner & Pangan',
    deskripsi: 'Usaha penjualan kacang tanah hasil panen dari kebun milik Bu Maemunah di Dusun III.',
    foto: '/Foto/UMKM/Dusun III & IV/kacang bu maemunah/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/kacang bu maemunah/1.jpg',
      '/Foto/UMKM/Dusun III & IV/kacang bu maemunah/2.jpg',
      '/Foto/UMKM/Dusun III & IV/kacang bu maemunah/3.jpg' 
    ],
    lokasi: 'Dusun III, Desa Besar II Terjun',
    kontak: '085355034794',
    pemilik: 'Bu Maemunah',
    produk: ['Kacang Tanah Polong Bersih', 'Kacang Tanah Kupas Pilihan'],
    koordinat: '3.620659,98.979666'
  },
  {
    id: 'umkm-9',
    nama: 'UMKM Kacang Tanah Besar Pak Uwo',
    kategori: 'Kuliner & Pangan',
    deskripsi: 'Usaha penjualan komoditas kacang tanah berukuran besar (kacang tanah super) di Dusun IV oleh Tengku Sarwedih (Pak Uwo).',
    foto: '/Foto/UMKM/Dusun III & IV/kacang pak uwo/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/kacang pak uwo/1.jpg',
      '/Foto/UMKM/Dusun III & IV/kacang pak uwo/2.jpg',
      '/Foto/UMKM/Dusun III & IV/kacang pak uwo/3.jpg'
    ],
    lokasi: 'Dusun IV, Desa Besar II Terjun',
    kontak: '082164196788',
    pemilik: 'Tengku Sarwedih (Pak Uwo)',
    bukanWA: true,
    produk: ['Kacang Tanah Ukuran Besar Super'],
    koordinat: '3.615511,98.978847'
  },
  {
    id: 'umkm-12',
    nama: 'Gedeg Dinding Kak Indah',
    kategori: 'Mebel & Kerajinan',
    deskripsi: 'Usaha pembuatan kerajinan gedeg dinding (anyaman anyam-anyaman tradisional) dari olahan bambu/kayu di Dusun IV oleh Kak Indah.',
    foto: '/Foto/UMKM/Dusun III & IV/Gedeg/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun III & IV/Gedeg/1.jpg',
      '/Foto/UMKM/Dusun III & IV/Gedeg/2.png',
      '/Foto/UMKM/Dusun III & IV/Gedeg/3.png'
    ],
    lokasi: 'Dusun IV, Desa Besar II Terjun',
    kontak: '081264338651',
    pemilik: 'Kak Indah',
    bahan: 'Batang sawit',
    produk: ['Gedeg Dinding Batang Sawit', 'Anyaman Estetik Dinding'],
    koordinat: '3.625205,98.977213'
  },
  {
    id: 'umkm-15',
    nama: 'Kue Basah Tradisional Bu Kemah',
    kategori: 'Kuliner & Pangan',
    deskripsi: 'Usaha pembuatan berbagai macam kue basah tradisional oleh Bu Kemah di Dusun IV.',
    foto: '/Foto/KKN/umkm/5.jpg',
    fotoList: [
      '/Foto/KKN/umkm/5.jpg',
      '/Foto/KKN/umkm/9.jpg'
    ],
    lokasi: 'Dusun IV, Desa Besar II Terjun',
    kontak: '081375400056',
    pemilik: 'Bu Kemah',
    produk: ['Kue Basah Tradisional', 'Kue Kotak Arisan', 'Jajanan Pasar Halal'],
    koordinat: '3.625482,98.979316'
  },
  {
    id: 'umkm-2',
    nama: 'UD. Larena - 2',
    kategori: 'Sarana Pertanian',
    deskripsi: 'Toko distributor penyedia berbagai keperluan pertanian seperti pupuk dan pestisida milik Pak Sembiring di Dusun V.',
    foto: '/Foto/UMKM/Dusun V & VI/Larena/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun V & VI/Larena/1.jpg',
      '/Foto/UMKM/Dusun V & VI/Larena/2.jpg',
      '/Foto/UMKM/Dusun V & VI/Larena/3.jpg'
    ],
    lokasi: 'Dusun V, Desa Besar II Terjun',
    kontak: '082363595766',
    pemilik: 'Sembiring',
    bahan: '-',
    tahunBerdiri: '-',
    caraMengelola: 'Offline',
    jenisUsaha: 'Distributor',
    menjual: 'Pupuk, Pestisida, dan alat-alat pertanian',
    produk: ['Pupuk Tanaman Sawah', 'Pestisida Pengendali Hama', 'Alat-alat Pertanian Modern'],
    koordinat: '3.614445,98.980050'
  },
  {
    id: 'umkm-1',
    nama: 'Almira Furniture',
    kategori: 'Mebel & Kerajinan',
    deskripsi: 'Usaha pembuatan mebel kayu seperti lemari, meja, kursi, tempat tidur, dan kusen milik Muhammad Fadli di Dusun VI.',
    foto: '/Foto/UMKM/Dusun V & VI/Almira/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun V & VI/Almira/1.jpg',
      '/Foto/UMKM/Dusun V & VI/Almira/2.jpg',
      '/Foto/UMKM/Dusun V & VI/Almira/3.jpg',
      '/Foto/UMKM/Dusun V & VI/Almira/4.jpg',
      '/Foto/UMKM/Dusun V & VI/Almira/5.jpg'
    ],
    lokasi: 'Dusun VI, Desa Besar II Terjun',
    kontak: '085358028117',
    pemilik: 'Muhammad Fadli',
    bahan: 'Kayu, cat, triplek, dan lainnya',
    tahunBerdiri: '2018',
    caraMengelola: 'Online, melalui medsos bernama “Almira_furniture.id”',
    instagram: 'Almira_furniture.id',
    produk: ['Lemari Pakaian', 'Meja Kursi Minimalis', 'Tempat Tidur Kayu', 'Kusen Pintu Custom'],
    koordinat: '3.614609,98.977359'
  },
  {
    id: 'umkm-5',
    nama: 'Agen Sapu Lidi Bu Kenti',
    kategori: 'Perkebunan & Industri Rumah',
    deskripsi: 'Usaha pengumpulan dan penjualan sapu lidi pelepah sawit secara eceran maupun grosir milik Bu Kenti di Dusun VII.',
    foto: '/Foto/UMKM/Dusun VII & VIII/Agen Sapu Lidi/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun VII & VIII/Agen Sapu Lidi/1.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Agen Sapu Lidi/2.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Agen Sapu Lidi/3.jpg'
    ],
    lokasi: 'Dusun VII, Desa Besar II Terjun',
    kontak: '081262888064',
    pemilik: 'Bu Kenti',
    bahan: 'Pelepah sawit',
    tahunBerdiri: '2025',
    hargaKemarin: 'Rp 3.300 / kg',
    hargaSekarang: 'Rp 3.100 / kg',
    caraMengelola: 'Dari mulut ke mulut, sudah ada agen',
    produk: ['Sapu Lidi Pelepah Sawit (Eceran)', 'Sapu Lidi Pelepah Sawit (Grosir)'],
    koordinat: '3.621096,98.971196'
  },
  {
    id: 'umkm-4',
    nama: 'Mebel Pak Legimin',
    kategori: 'Mebel & Kerajinan',
    deskripsi: 'Usaha pembuatan kusen, jendela, pintu, lemari, dan perlengkapan rumah tangga dari kayu milik Pak Legimin di Dusun VIII.',
    foto: '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/1.jpg',
    fotoList: [
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/1.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/2.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/3.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/4.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/5.jpg',
      '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/6.jpg'
    ],
    lokasi: 'Dusun VIII, Desa Besar II Terjun',
    kontak: '083174147800',
    pemilik: 'Pak Legimin',
    bahan: 'Kayu mhoni, Kayu bira',
    tahunBerdiri: '2011',
    mitraKerja: 'Dari teman ke teman',
    hasilUmkm: 'Kusen, Jendela, Pintu, Lemari, Daun pintu, Daun jendela',
    produk: ['Kusen Pintu', 'Jendela & Daun Jendela', 'Pintu Panel & Daun Pintu', 'Lemari Pakaian Kayu'],
    koordinat: '3.626296,98.970306'
  }
];

// Galeri Desa
export const mockGaleri: GaleriItem[] = [
  {
    id: 'gal-1',
    kategori: 'alam',
    judul: 'Hamparan Sawah Dusun V',
    url: '/Foto/Tentang Desa/1.jpg',
    deskripsi: 'Pemandangan hijau sawah padi Desa Besar II Terjun di pagi hari yang menyejukkan mata.'
  },
  {
    id: 'gal-2',
    kategori: 'alam',
    judul: 'Tanaman bibit buah Dusun III',
    url: '/Foto/UMKM/Dusun III & IV/bibit buah/3.jpg',
    deskripsi: 'Tanaman bibit buah pak darwin.'
  },
  {
    id: 'gal-3',
    kategori: 'budaya',
    judul: 'Latihan Tari Persembahan Melayu',
    url: '/Foto/Berita Desa/julang budaya/2.jpg',
    deskripsi: 'Majelis Julang Budaya Melayu 2025: Pelestarian Adat, Busana, Tanjak, dan Silat Melayu Pantai Cermin.'
  },
  {
    id: 'gal-4',
    kategori: 'desa',
    judul: 'Kawasan Kantor Pemerintah Desa',
    url: '/Foto/Fasilitas/Dusun II/Kantor Desa/1.jpg',
    deskripsi: 'Halaman luar Kantor Kepala Desa Besar II Terjun.'
  },
  {
    id: 'gal-5',
    kategori: 'alam',
    judul: 'Pesona Sunset di Pinggir Sawah',
    url: '/Foto/Galeri/Galeri KKN/7.jpg',
    deskripsi: 'Keindahan langit saat senja menyelimuti area persawahan padi.'
  },
  {
    id: 'gal-6',
    kategori: 'kegiatan',
    judul: 'Sosialisasi Digitalisasi UMKM',
    url: '/Foto/Galeri/Galeri KKN/18.jpeg',
    deskripsi: 'Mahasiswa KKN UNIMED berdiskusi interaktif bersama para pelaku UMKM Desa.'
  },
  {
    id: 'gal-7',
    kategori: 'desa',
    judul: 'Kunjungan Gubernur & Bupati',
    url: '/Foto/Tentang Desa/6.jpg',
    deskripsi: 'Gubernur Sumatera Utara dan Bupati Serdang Bedagai meninjau langsung kondisi rumah bantuan sosial korban bencana di Dusun 3.'
  },
  {
    id: 'gal-8',
    kategori: 'kegiatan',
    judul: 'Gotong Royong Kebersihan Lingkungan',
    url: '/Foto/KKN/gotong royong/1.jpg',
    deskripsi: 'Aksi kolaboratif warga bersama KKN UNIMED dan KKN UISU merapikan jalan desa.'
  },
  {
    id: 'gal-9',
    kategori: 'umkm',
    judul: 'Produksi Tempe Pak Suyitno',
    url: '/Foto/UMKM/Dusun I & II/Umkm Tempe/2.jpg',
    deskripsi: 'Proses pembuatan tempe secara tradisional oleh salah satu UMKM desa.'
  },
  {
    id: 'gal-10',
    kategori: 'umkm',
    judul: 'Kerajinan Jendela Kayu',
    url: '/Foto/UMKM/Dusun VII & VIII/Mebel Pak Legimin/1.jpg',
    deskripsi: 'Karya pertukangan kayu  dari pengrajin mebel lokal di Desa Besar II Terjun.'
  }
];

// Fasilitas Umum (Sorted Dusun I s/d Dusun VIII)
export const mockFasilitas: FasilitasUmum[] = [
  {
    id: 'fas-17',
    nama: 'SD NEGERI 106192 KP.BESAR I/II',
    kategori: 'Pendidikan',
    deskripsi: 'Sekolah Dasar Negeri 106192 Kp.Besar I/II di Dusun I, mendidik siswa-siswi tingkat sekolah dasar dengan fasilitas kelas yang nyaman, perpustakaan pendukung, dan dedikasi guru dalam mencerdaskan generasi muda desa.',
    foto: '/Foto/Fasilitas/Dusun I/SD NEGERI 1/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/1.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/2.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/3.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/4.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/5.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/6.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/7.jpg',
      '/Foto/Fasilitas/Dusun I/SD NEGERI 1/8.jpg'
    ],
    iconName: 'School',
    lokasiText: 'Dusun I, Desa Besar II Terjun',
    koordinat: '3.627589,98.978753'
  },
  {
    id: 'fas-8',
    nama: 'Kantor Desa',
    kategori: 'Pemerintahan',
    deskripsi: 'Pusat administrasi pemerintahan Desa Besar II Terjun berlantai dua yang megah di Dusun II, tempat Kepala Desa dan seluruh jajaran perangkat desa melayani pengurusan dokumen publik masyarakat secara maksimal.',
    foto: '/Foto/Fasilitas/Dusun II/Kantor Desa/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun II/Kantor Desa/1.jpg',
      '/Foto/Fasilitas/Dusun II/Kantor Desa/2.jpg',
      '/Foto/Fasilitas/Dusun II/Kantor Desa/3.jpg'
    ],
    iconName: 'Landmark',
    lokasiText: 'Dusun II, Desa Besar II Terjun',
    koordinat: '3.626692,98.977807'
  },
  {
    id: 'fas-9',
    nama: 'Posyandu',
    kategori: 'Kesehatan',
    deskripsi: 'Pos Pelayanan Keluarga Berencana dan Kesehatan Terpadu di Dusun II yang aktif melayani pemeriksaan kesehatan berkala, imunisasi berkala, pengukuran tumbuh kembang bayi/balita, serta kegiatan cek kesehatan umum lansia setiap tanggal 13.',
    foto: '/Foto/Fasilitas/Dusun II/Posyandu/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun II/Posyandu/1.jpg',
      '/Foto/Fasilitas/Dusun II/Posyandu/2.jpg',
      '/Foto/Fasilitas/Dusun II/Posyandu/3.jpg'
    ],
    iconName: 'Activity',
    lokasiText: 'Dusun II, Desa Besar II Terjun',
    koordinat: '3.626604,98.977910'
  },
  {
    id: 'fas-13',
    nama: 'TK AL- KARIM PANTAI CERMIN',
    kategori: 'Pendidikan',
    deskripsi: 'Lembaga pendidikan anak usia dini TK Al-Karim Pantai Cermin yang berada di Dusun II, memfasilitasi anak-anak desa belajar bersosialisasi, menggambar, mengeja, dan berkreasi sejak dini secara menyenangkan.',
    foto: '/Foto/Fasilitas/Dusun II/TK AL- KARIM/1.jpg',
      fotoList: [
        '/Foto/Fasilitas/Dusun II/TK AL- KARIM/1.jpg',
        '/Foto/Fasilitas/Dusun II/TK AL- KARIM/2.jpg',
        '/Foto/Fasilitas/Dusun II/TK AL- KARIM/3.jpg'
      ],
    iconName: 'School',
    lokasiText: 'Dusun II, Desa Besar II Terjun',
    koordinat: '3.626683,98.977540'
  },
  {
    id: 'fas-15',
    nama: 'Musholla Nurul Amaliyah',
    kategori: 'Ibadah',
    deskripsi: 'Rumah ibadah Musholla Nurul Amaliyah yang bersih dan nyaman di Dusun II untuk memfasilitasi sholat berjamaah warga sekitar, kegiatan tadarus bersama, dan aktivitas kerohanian santri.',
    foto: '/Foto/Fasilitas/Dusun II/Musholla Nurul Amaliyah/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun II/Musholla Nurul Amaliyah/1.jpg',
      '/Foto/Fasilitas/Dusun II/Musholla Nurul Amaliyah/2.jpg',
      '/Foto/Fasilitas/Dusun II/Musholla Nurul Amaliyah/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun II, Desa Besar II Terjun',
    koordinat: '3.628599,98.976531'
  },
  {
    id: 'fas-14',
    nama: 'Pemakaman umum',
    kategori: 'Lain-lain',
    deskripsi: 'Kawasan tanah pemakaman umum yang tertata rapi dan bersih di Dusun III untuk tempat peristirahatan terakhir dan sarana ziarah keluarga warga desa.',
    foto: '/Foto/Fasilitas/Dusun III/Pemakaman umum/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun III/Pemakaman umum/1.jpg',
      '/Foto/Fasilitas/Dusun III/Pemakaman umum/2.jpg',
      '/Foto/Fasilitas/Dusun III/Pemakaman umum/3.jpg'
    ],
    iconName: 'Map',
    lokasiText: 'Dusun III, Desa Besar II Terjun',
    koordinat: '3.631816,98.980820'
  },
  {
    id: 'fas-16',
    nama: 'Gedung Balai Nikah Manasik Haji, KUA Pantai Cermin',
    kategori: 'Pemerintahan',
    deskripsi: 'Gedung resmi Balai Nikah dan Manasik Haji di bawah naungan Kantor Urusan Agama (KUA) Pantai Cermin di Dusun III yang memfasilitasi prosesi pencatatan pernikahan dan bimbingan manasik haji warga.',
    foto: '/Foto/Fasilitas/Dusun III/KUA/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun III/KUA/1.jpg',
      '/Foto/Fasilitas/Dusun III/KUA/2.jpg',
      '/Foto/Fasilitas/Dusun III/KUA/3.jpg'
    ],
    iconName: 'Landmark',
    lokasiText: 'Dusun III, Desa Besar II Terjun',
    koordinat: '3.631147,98.980327'
  },
  {
    id: 'fas-18',
    nama: 'Masjid Al Ikhlas',
    kategori: 'Ibadah',
    deskripsi: 'Masjid Al Ikhlas yang asri di Dusun III, memfasilitasi ibadah sholat lima waktu berjamaah harian warga sekitar, majelis taklim, pengajian anak-anak, serta perayaan hari besar keagamaan.',
    foto: '/Foto/Fasilitas/Dusun III/Masjid AL-Ikhlas/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun III/Masjid AL-Ikhlas/1.jpg',
      '/Foto/Fasilitas/Dusun III/Masjid AL-Ikhlas/2.jpg',
      '/Foto/Fasilitas/Dusun III/Masjid AL-Ikhlas/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun III, Desa Besar II Terjun',
    koordinat: '3.630514,98.971914'
  },
  {
    id: 'fas-1',
    nama: "Pondok Pesantren Tahfidz Qur'an Khoirunnujum Khusus Putri",
    kategori: 'Pendidikan',
    deskripsi: 'Lembaga pendidikan Islam non-formal khusus santriwati yang berfokus pada hafalan Al-Qur’an (Tahfidz) disertai pembinaan akhlak mulia, kajian kitab kuning, dan pembentukan karakter religius yang mandiri di Dusun V.',
    foto: '/Foto/Fasilitas/Dusun V/Pondok Pesantren/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun V/Pondok Pesantren/1.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun V, Desa Besar II Terjun',
    koordinat: '3.6172448,98.9761375'
  },
  {
    id: 'fas-2',
    nama: 'Mendai Computer Course',
    kategori: 'Pendidikan',
    deskripsi: 'Pusat pelatihan bimbingan belajar komputer praktis milik warga setempat yang menyediakan kursus pengenalan dasar komputer, Microsoft Office (Word, Excel, PowerPoint), hingga dasar desain grafis untuk membekali kemampuan digital siswa dan pemuda desa di Dusun V.',
    foto: '/Foto/Fasilitas/Dusun V/Computer/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun V/Computer/1.jpg'
    ],
    iconName: 'BookOpen',
    lokasiText: 'Dusun V, Desa Besar II Terjun',
    koordinat: '3.611855,98.978957'
  },
  {
    id: 'fas-3',
    nama: 'SD Negeri No. 101957 Terjun',
    kategori: 'Pendidikan',
    deskripsi: 'Lembaga pendidikan sekolah dasar negeri di Dusun VI yang mendidik siswa berkarakter cerdas dan mandiri. Dilengkapi dengan ruang kelas memadai, sarana olahraga, dan perpustakaan pendukung gerakan literasi sekolah.',
    foto: '/Foto/Fasilitas/Dusun VI/SD Negeri 2/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VI/SD Negeri 2/1.jpg',
      '/Foto/Fasilitas/Dusun VI/SD Negeri 2/2.jpg',
      '/Foto/Fasilitas/Dusun VI/SD Negeri 2/3.jpg'
    ],
    iconName: 'School',
    lokasiText: 'Dusun VI, Desa Besar II Terjun',
    koordinat: '3.630429,98.972184'
  },
  {
    id: 'fas-4',
    nama: 'Taman Baca Al-Qur\'an "Nur Jannah"',
    kategori: 'Pendidikan',
    deskripsi: 'Sarana bimbingan belajar mengaji dan membaca Al-Qur’an interaktif bagi anak-anak usia dini di Dusun VI. Dirintis untuk menanamkan pemahaman keagamaan sejak dini dengan penuh ketulusan.',
    foto: '/Foto/Fasilitas/Dusun VI/Taman Baca/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VI/Taman Baca/1.jpg',
      '/Foto/Fasilitas/Dusun VI/Taman Baca/2.jpg',
      '/Foto/Fasilitas/Dusun VI/Taman Baca/3.jpg'
    ],
    iconName: 'BookOpen',
    lokasiText: 'Dusun VI, Desa Besar II Terjun',
    koordinat: '3.608217,98.977202'
  },
  {
    id: 'fas-5',
    nama: 'Masjid Al-Raudhah',
    kategori: 'Ibadah',
    deskripsi: 'Masjid yang asri dan bersih sebagai sarana ibadah sholat berjamaah harian, pengajian rutin majelis taklim ibu-ibu dan bapak-bapak, serta pusat syiar Islam di Dusun VI.',
    foto: '/Foto/Fasilitas/Dusun VI/Masjid Al-Raudhah/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VI/Masjid Al-Raudhah/1.jpg',
      '/Foto/Fasilitas/Dusun VI/Masjid Al-Raudhah/2.jpg',
      '/Foto/Fasilitas/Dusun VI/Masjid Al-Raudhah/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun VI, Desa Besar II Terjun',
    koordinat: '3.603445,98.980026'
  },
  {
    id: 'fas-6',
    nama: 'Musholla Al Ikhlas',
    kategori: 'Ibadah',
    deskripsi: 'Rumah ibadah musholla yang nyaman dan tenang di Dusun VI untuk sholat lima waktu berjamaah warga sekitar serta menjadi wadah gotong royong kegiatan sosial keagamaan dusun.',
    foto: '/Foto/Fasilitas/Dusun VI/Musholla AL-Ikhlas/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VI/Musholla AL-Ikhlas/1.jpg',
      '/Foto/Fasilitas/Dusun VI/Musholla AL-Ikhlas/2.jpg',
      '/Foto/Fasilitas/Dusun VI/Musholla AL-Ikhlas/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun VI, Desa Besar II Terjun',
    koordinat: '3.603443,98.980007'
  },
  {
    id: 'fas-7',
    nama: 'Papan Informasi Desa',
    kategori: 'Pemerintahan',
    deskripsi: 'Sarana publikasi fisik berukuran besar di persimpangan strategis Dusun VI yang memuat pengumuman penting administrasi desa, transparansi anggaran APBDesa, dan jadwal kegiatan posyandu.',
    foto: '/Foto/Fasilitas/Dusun VI/Papan Informasi desa/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VI/Papan Informasi desa/1.jpg',
      '/Foto/Fasilitas/Dusun VI/Papan Informasi desa/2.jpg',
      '/Foto/Fasilitas/Dusun VI/Papan Informasi desa/3.jpg'
    ],
    iconName: 'Milestone',
    lokasiText: 'Dusun VI, Desa Besar II Terjun',
    koordinat: '3.6057844,98.9777764'
  },
  {
    id: 'fas-10',
    nama: 'Masjid Al-Ikhlas',
    kategori: 'Ibadah',
    deskripsi: 'Masjid utama Dusun VII dengan bangunan luas dan bersih yang menyelenggarakan kegiatan ibadah rutin sholat wajib berjamaah, perayaan hari besar Islam (PHBI), dan pengajian remaja masjid.',
    foto: '/Foto/Fasilitas/Dusun VII/Masjid AL-Ikhlas/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VII/Masjid AL-Ikhlas/1.jpg', 
      '/Foto/Fasilitas/Dusun VII/Masjid AL-Ikhlas/2.jpg',
      '/Foto/Fasilitas/Dusun VII/Masjid AL-Ikhlas/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun VII, Desa Besar II Terjun',
    koordinat: '3.621590,98.971362'
  },
  {
    id: 'fas-12',
    nama: 'Yayasan Nurul Akmal',
    kategori: 'Sosial',
    deskripsi: 'Yayasan sosial keagamaan dan pendidikan yang menaungi pembinaan akhlak mulia anak yatim/piatu serta kaum dhuafa, pembinaan rohani, dan pelayanan umat di wilayah perbatasan Dusun VII dan VIII.',
    foto: '/Foto/Fasilitas/Dusun VII/Yayasan/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VII/Yayasan/1.jpg',
      '/Foto/Fasilitas/Dusun VII/Yayasan/2.jpg',
      '/Foto/Fasilitas/Dusun VII/Yayasan/3.jpg'
    ],
    iconName: 'HeartHandshake',
    lokasiText: 'Dusun VII/VIII, Desa Besar II Terjun',
    koordinat: '3.622975,98.970312'
  },
  {
    id: 'fas-11',
    nama: 'Masjid Nurul Amaliyah',
    kategori: 'Ibadah',
    deskripsi: 'Masjid yang megah dan tenang di Dusun VIII yang menjadi sarana utama pembinaan kerohanian warga setempat melalui pengajian majelis taklim dan taman pendidikan Al-Qur’an.',
    foto: '/Foto/Fasilitas/Dusun VIII/Masjid Nurul Amaliyah/1.jpg',
    fotoList: [
      '/Foto/Fasilitas/Dusun VIII/Masjid Nurul Amaliyah/1.jpg',
      '/Foto/Fasilitas/Dusun VIII/Masjid Nurul Amaliyah/2.jpg',
      '/Foto/Fasilitas/Dusun VIII/Masjid Nurul Amaliyah/3.jpg'
    ],
    iconName: 'Building2',
    lokasiText: 'Dusun VIII, Desa Besar II Terjun',
    koordinat: '3.625901,98.969972'
  }
];

// KKN Members (UNIMED 2026 - 5 Males, 15 Females)
export const mockKKNMembers: KKNMember[] = [
  {
    id: 'kkn-1',
    nama: 'Rifki Alfansyah Palam',
    nim: '6232210009',
    jenisKelamin: 'L',
    divisi: 'Ketua',
    peran: 'Koordinator utama KKN yang jaga hubungan baik sama Kades dan warga desa.',
    motto: 'Memimpin dengan teladan, mengabdi dengan ketulusan hati untuk kemajuan bersama.',
    foto: '/Foto/Anggota KKN/rifki.png',
    prodi: 'Ilmu Keolahragaan',
    fakultas: 'Fakultas Ilmu Keolahragaan dan Kesehatan',
    instagram: 'rifkipalam'
  },
  {
    id: 'kkn-2',
    nama: 'Naila Zuhra',
    nim: '7233510016',
    jenisKelamin: 'P',
    divisi: 'Wakil Ketua',
    peran: 'Wakil ketua posko yang ngatur kerjaan internal tim biar selalu kompak.',
    motto: 'Kolaborasi yang baik melahirkan karya pengabdian yang abadi dan berdampak luas.',
    foto: '/Foto/Anggota KKN/naila.png',
    prodi: 'Manajemen',
    fakultas: 'Fakultas Ekonomi dan Bisnis',
    instagram: 'nailazuhraa'
  },
  // {
  //   id: 'kkn-3',
  //   nama: 'Joice Omasi Angelita Harefa',
  //   nim: '7232250001',
  //   jenisKelamin: 'P',
  //   divisi: 'Sekretaris',
  //   peran: 'Sekretaris andalan yang ngurus surat menyurat dan draf laporan akhir.',
  //   motto: 'Ketelitian dalam setiap baris administrasi adalah kunci kesuksesan organisasi.',
  //   foto: '/Foto/Anggota KKN/joice.png',
  //   prodi: 'Bisnis Digital',
  //   fakultas: 'Fakultas Ekonomi dan Bisnis',
  //   instagram: 'angls_jo'
  // },
  {
    id: 'kkn-3',
    nama: 'Yasmiati Syafitri',
    nim: '7231142016',
    jenisKelamin: 'P',
    divisi: 'Sekretaris',
    peran: 'Ngebantu urusan administrasi posko dan bikin notulen rapat harian.',
    motto: 'Menulis setiap jejak langkah pengabdian agar abadi dalam lembaran sejarah.',
    foto: '/Foto/Anggota KKN/yasmin.png',
    prodi: 'Pendidikan Akuntansi',
    fakultas: 'Fakultas Ekonomi dan Bisnis',
    instagram: 'ysmtisftr20'
  },
    {
    id: 'kkn-4',
    nama: 'Joice Omasi Angelita Harefa',
    nim: '7232250001',
    jenisKelamin: 'P',
    divisi: 'Wakil Sekretaris',
    peran: 'Sekretaris andalan yang ngurus surat menyurat dan draf laporan akhir.',
    motto: 'Ketelitian dalam setiap baris administrasi adalah kunci kesuksesan organisasi.',
    foto: '/Foto/Anggota KKN/joice.png',
    prodi: 'Bisnis Digital',
    fakultas: 'Fakultas Ekonomi dan Bisnis',
    instagram: 'angls_jo'
  },
  {
    id: 'kkn-5',
    nama: 'Siska Dentina Pasaribu',
    nim: '7233220044',
    jenisKelamin: 'P',
    divisi: 'Bendahara',
    peran: 'Bendahara posko yang ngatur keluar masuknya uang belanja proker.',
    motto: 'Keuangan yang rapi dan terukur melancarkan setiap agenda kerja di lapangan.',
    foto: '/Foto/Anggota KKN/siska.png',
    prodi: 'Akuntansi',
    fakultas: 'Fakultas Ekonomi dan Bisnis',
    instagram: 'siska_dentinaa'
  },
  {
    id: 'kkn-6',
    nama: 'Marihut Hamonangan Lumban Gaol',
    nim: '2233342008',
    jenisKelamin: 'L',
    divisi: 'Wakil Bendahara',
    peran: 'Ngebantu pembukuan keuangan biar transparan dan kuitansi tercatat rapi.',
    motto: 'Transparansi anggaran membangun kepercayaan masyarakat akan pengabdian kami.',
    foto: '/Foto/Anggota KKN/marihut.png',
    prodi: 'Pendidikan Musik',
    fakultas: 'Fakultas Bahasa dan Seni',
    instagram: 'marihut_lumban_gaol'
  },
  {
    id: 'kkn-7',
    nama: 'Viola Enjelia',
    nim: '2231141007',
    jenisKelamin: 'P',
    divisi: 'Divisi Acara',
    peran: 'Pelatih tari kreasi Melayu yang ngajarin anak-anak desa buat pentas seni.',
    motto: 'Menciptakan momen edukatif yang kreatif, seru, dan berkesan bagi seluruh warga.',
    foto: '/Foto/Anggota KKN/viola.png',
    prodi: 'Pendidikan Tari',
    fakultas: 'Fakultas Bahasa dan Seni',
    instagram: 'viola_enjelia'
  },
  {
    id: 'kkn-8',
    nama: 'Elda Riska Amanda',
    nim: '2233321007',
    jenisKelamin: 'P',
    divisi: 'Divisi Acara',
    peran: 'Nyiapin materi seru buat Rumah Belajar dan ngajar bimbingan harian.',
    motto: 'Tawa ceria anak-anak desa adalah energi terbesar dalam menjalankan KKN.',
      foto: '/Foto/Anggota KKN/elda.png',
      prodi: 'Pendidikan Bahasa Inggris',
    fakultas: 'Fakultas Bahasa dan Seni',
    instagram: 'daouy_'
  },
  {
    id: 'kkn-9',
    nama: 'Cahya Sry Amsidah Simanullang',
    nim: '1233111003',
    jenisKelamin: 'P',
    divisi: 'Divisi Acara',
    // peran: 'Pelatih tari kreasi Melayu yang ngajarin anak-anak desa buat pentas seni.',
    peran: 'Penyusun rundown kegiatan dan ngerancang ice breaking seru buat warga.',
    motto: 'Menghidupkan kembali nyala cinta budaya Melayu di sanubari anak-anak negeri.',
    foto: '/Foto/Anggota KKN/cahya.png',
    prodi: 'Pendidikan Guru Sekolah Dasar',
    fakultas: 'Fakultas Ilmu Pendidikan',
    instagram: 'cahyasimanullang'
  },
  {
    id: 'kkn-10',
    nama: 'Muthia Syahbana',
    nim: '4232220001',
    jenisKelamin: 'P',
    divisi: 'Divisi Acara',
    peran: 'Merancang dan memastikan setiap rangkaian acara berjalan seru, terstruktur, dan lancar.',
    motto: 'Pendidikan akhlak dan ilmu umum beriringan demi masa depan cerah anak desa.',
    foto: '/Foto/Anggota KKN/muthia.png',
    prodi: 'Biologi',
    fakultas: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    instagram: 'mthiasya_'
  },
  {
    id: 'kkn-11',
    nama: 'Nanda Tresia Hutabarat',
    nim: '1233111004',
    jenisKelamin: 'P',
    divisi: 'Divisi Humas',
    peran: 'Humas supel yang nemuin kadus dan warga buat sosialisasi proker.',
    motto: 'Silaturahmi yang hangat melunturkan segala kecanggungan, menyatukan rasa kekeluargaan.',
    foto: '/Foto/Anggota KKN/nanda.png',
    prodi: 'Pendidikan Guru Sekolah Dasar',
    fakultas: 'Fakultas Ilmu Pendidikan',
    instagram: 'nandahutabarat_'
  },
  {
    id: 'kkn-12',
    nama: 'Enjel Widia Sari Gea',
    nim: '7232240002',
    jenisKelamin: 'P',
    divisi: 'Divisi Humas',
    peran: 'Menjaga alur acara tetap mengalir lancar dan menghadapi dinamika lapangan dengan tenang.',
    motto: 'Menyampaikan setiap kebaikan program kerja agar dipahami and didukung sepenuhnya.',
    foto: '/Foto/Anggota KKN/enjel.png',
    prodi: 'Ilmu Ekonomi',
    fakultas: 'Fakultas Ekonomi dan Bisnis',
    instagram: 'elgea_n'
  },
  {
    id: 'kkn-13',
    nama: 'Nida Nafilah',
    nim: '2231151007',
    jenisKelamin: 'P',
    divisi: 'Divisi PDD',
    peran: 'Desainer andalan yang bikin poster acara dan rapiin feeds Instagram.',
    motto: 'Mengabadikan setiap momen penuh makna agar cerita KKN terus menginspirasi dunia.',
    foto: '/Foto/Anggota KKN/nida.png',
    prodi: 'Pendidikan Seni Rupa',
    fakultas: 'Fakultas Bahasa dan Seni',
    instagram: 'ndnflh_'
  },
  {
    id: 'kkn-14',
    nama: 'Harrysal Muharram Siregar',
    nim: '5233111001',
    jenisKelamin: 'L',
    divisi: 'Divisi PDD',
    peran: 'Nge-shoot dan ngedit video proker biar jadi konten sinematik yang keren.',
    motto: 'Setiap gerakan pengabdian berhak didokumentasikan dengan sudut pandang terbaik.',
    foto: '/Foto/Anggota KKN/harysal.png',
    prodi: 'Pendidikan Teknik Bangunan',
    fakultas: 'Fakultas Teknik',
    instagram: 'hrrrsl'
  },
  {
    id: 'kkn-15',
    nama: 'Vina Nabila',
    nim: '6231111004',
    jenisKelamin: 'P',
    divisi: 'Divisi PDD',
    peran: 'Penulis takarir medsos dan bikin naskah narasi video dokumentasi KKN.',
    motto: 'Kata-kata memiliki daya magis untuk menggerakkan kepedulian publik.',
    foto: '/Foto/Anggota KKN/vina.png',
    prodi: 'Pendidikan Jasmani Kesehatan dan Rekreasi',
    fakultas: 'Fakultas Ilmu Keolahragaan dan Kesehatan',
    instagram: 'vinanabilanabila'
  },
  {
    id: 'kkn-16',
    nama: 'Septri Amelia Simamora',
    nim: '4233111048',
    jenisKelamin: 'P',
    divisi: 'Divisi Perlengkapan',
    peran: 'Penyedia logistik, nyiapin sound system, proyektor, dan kebutuhan acara.',
    motto: 'Persiapan matang di balik layar adalah pondasi kesuksesan panggung utama.',
    foto: '/Foto/Anggota KKN/septri.png',
    prodi: 'Pendidikan Matematika',
    fakultas: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    instagram: 'septri_smr'
  },
  {
    id: 'kkn-17',
    nama: 'Chindy',
    nim: '2232210002',
    jenisKelamin: 'P',
    divisi: 'Divisi Perlengkapan',
    peran: 'Ngurusin sumbangan buku buat pojok baca dan nyiapin hiasan posko.',
    motto: 'Bekerja lincah demi memastikan seluruh program tidak kekurangan sarana penunjang.',
    foto: '/Foto/Anggota KKN/chindy.png',
    prodi: 'Sastra Indonesia',
    fakultas: 'Fakultas Bahasa dan Seni',
    instagram: 'chindy0301'
  },
  {
    id: 'kkn-18',
    nama: 'Muhammad Alfin',
    nim: '4233250020',
    jenisKelamin: 'L',
    divisi: 'Divisi Perlengkapan',
    peran: 'Bantu nyiapin alat berat gotong royong dan ngejaga kelancaran fisik di lapangan.',
    motto: 'Siap sedia melangkah kapan pun dibutuhkan demi kelancaran tugas tim KKN.',
    foto: '/Foto/Anggota KKN/alfin.png',
    prodi: 'Ilmu Komputer',
    fakultas: 'Fakultas Matematika dan Ilmu Pengetahuan Alam',
    instagram: 'v.avnn'
  },
  {
    id: 'kkn-19',
    nama: 'Jelita Trie Sania',
    nim: '5233142001',
    jenisKelamin: 'P',
    divisi: 'Divisi Konsumsi',
    peran: 'Koki andalan posko yang ngerancang menu makanan bergizi biar tim fit terus.',
    motto: 'Asupan yang sehat dan lezat menjaga stamina tim KKN tetap membara setiap hari.',
    foto: '/Foto/Anggota KKN/jelita.png',
    prodi: 'Pendidikan Tata Boga',
    fakultas: 'Fakultas Teknik',
    instagram: 'jelitatrsniaa_'
  },
  {
    id: 'kkn-20',
    nama: 'M Rizal Adha',
    nim: '6233321048',
    jenisKelamin: 'L',
    divisi: 'Divisi Konsumsi',
    peran: 'Ngebantu masak, belanja ke pasar, dan bagiin konsumsi pas sosialisasi.',
    motto: 'Menjamu warga dengan baik dalam setiap kegiatan adalah cerminan adat Melayu yang mulia.',
    foto: '/Foto/Anggota KKN/rizal.png',
    prodi: 'Pendidikan Kepelatihan Olahraga',
    fakultas: 'Fakultas Ilmu Keolahragaan dan Kesehatan',
    instagram: 'mrzalladhap_'
  }
];

// Program Kerja KKN (Program Kerja Utama / Kegiatan - Ada 8 Program Kerja)
export const mockProgramKerja: ProgramKerjaKKN[] = [
  {
    id: 'prog-1',
    judul: 'Digitalisasi Pemasaran UMKM Desa',
    tanggal: '10 Juli 2026',
    deskripsi: 'Mengadakan pelatihan pembuatan foto produk kreatif, pembuatan akun toko online, pendaftaran titik Google Maps bisnis, dan penyusunan kemasan modern untuk Dapur Melayu Mak Cik dan pengrajin anyaman pandan.',
    status: 'Selesai',
    foto: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'prog-2',
    judul: 'Pojok Baca & Rumah Belajar Kreatif',
    tanggal: '15 Juli 2026',
    deskripsi: 'Membangun perpustakaan mini dengan donasi ratusan buku edukatif serta mengadakan bimbingan belajar gratis (matematika, komputer dasar, bahasa Inggris) untuk siswa sekolah dasar.',
    status: 'Selesai',
    foto: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'prog-3',
    judul: 'Sosialisasi Bahaya Stunting & Posyandu Sehat',
    tanggal: '20 Juli 2026',
    deskripsi: 'Kolaborasi bersama bidan desa menggelar seminar edukasi MPASI sehat bergizi dengan bahan baku ikan bandeng desa, serta pembagian paket suplemen gizi untuk balita dusun setempat.',
    status: 'Selesai',
    foto: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: 'prog-4',
    judul: 'Sistem Pertanian Terpadu & Saluran Irigasi Sawah',
    tanggal: '28 Juli 2026',
    deskripsi: 'Pembersihan bersama saluran irigasi primer dusun, penyuluhan pupuk organik tanaman pangan, dan pembuatan papan informasi potensi pertanian ramah lingkungan.',
    status: 'Berjalan',
    foto: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prog-5',
    judul: 'Pembuatan Peta Dusun & Batas Administrasi Desa',
    tanggal: '02 Agustus 2026',
    deskripsi: 'Penyusunan peta digital batas-batas administrasi wilayah dusun menggunakan koordinat satelit akurat demi ketertiban tata ruang wilayah administrasi desa.',
    status: 'Selesai',
    foto: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prog-6',
    judul: 'Pelatihan Komputer & Literasi Digital Dasar',
    tanggal: '05 Agustus 2026',
    deskripsi: 'Edukasi pengoperasian perangkat lunak produktivitas kantor dasar (pengolah kata dan angka) untuk pemuda desa dan jajaran staf balai desa.',
    status: 'Selesai',
    foto: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prog-7',
    judul: 'Kampanye Lingkungan Bersih & Pengelolaan Sampah Organik',
    tanggal: '08 Agustus 2026',
    deskripsi: 'Penyuluhan daur ulang sampah rumah tangga menjadi kompos pertanian organik serta penempatan tong sampah terpilah di titik strategis.',
    status: 'Berjalan',
    foto: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'prog-8',
    judul: 'Pendampingan Administrasi Desa Mandiri & Penyusunan Dokumen Digital',
    tanggal: '12 Agustus 2026',
    deskripsi: 'Sinergi penyusunan arsip produk hukum, regulasi, dan basis data publik non-rahasia untuk meningkatkan pelayanan prima di balai desa.',
    status: 'Rencana',
    foto: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600'
  }
];

// Timeline Sejarah Desa (Interactive Timeline)
export const mockSejarahTimeline: TimelineKegiatan[] = [
  {
    id: 'sej-1',
    judul: 'Pembukaan Wilayah Desa',
    tanggal: 'Tahun 1941',
    deskripsi: 'Desa Besar II Terjun dibuka pertama kali pada masa penjajahan Belanda, berawal dari wilayah hutan agraris potensial.',
    ikon: 'Milestone'
  },
  {
    id: 'sej-2',
    judul: 'Penyatuan Kampung Besar I & II',
    tanggal: 'Tahun 1948',
    deskripsi: 'Kampung Besar I (yang memiliki air terjun perbatasan Dusun VII) dan Kampung Besar II resmi disatukan menjadi satu desa dengan pusat pemerintahan di Kampung Besar II.',
    ikon: 'Sprout'
  },
  {
    id: 'sej-3',
    judul: 'Era Kepemimpinan Panjang Sayuti AS',
    tanggal: '1972 - 2007',
    deskripsi: 'Desa dipimpin oleh Bapak Sayuti AS selama kurang lebih 35 tahun, meletakkan fondasi kemasyarakatan dan kepemimpinan desa yang kokoh.',
    ikon: 'Waves'
  },
  {
    id: 'sej-4',
    judul: 'Kepemimpinan Kades Sulaimansyah',
    tanggal: '2007 - Sekarang',
    deskripsi: 'Era modernisasi infrastruktur desa secara masif, mulai dari pengaspalan hotmix, pembangunan fasilitas kesehatan, perkantoran kepala desa, dan digitalisasi desa bersama tim KKN UNIMED.',
    ikon: 'Laptop'
  }
];

// KKN Info metadata
export const kknInfo = {
  universitas: 'Universitas Negeri Medan (UNIMED)',
  tahun: '2026',
  logoUnimed: 'https://upload.wikimedia.org/wikipedia/commons/e/ec/Logo_UNIMED.png',
  logoKkn: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Logo_kemdikbud.png',
  logoKec: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Lambang_Kabupaten_Serdang_Bedagai.png',
  motto: 'Bakti Unimed untuk Negeri: Menganyam Budaya, Meluhurkan Potensi, Mendedikasikan Teknologi.',
  lokasi: 'Desa Besar II Terjun, Kec. Pantai Cermin, Sumatera Utara',
  email: 'kkn.besar2terjun2026@gmail.com',
  instagram: 'kkn.besar2terjun_',
  tiktok: 'kkn.besar2terjun2026',
  websiteQrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://kkn-besar2terjun-unimed.vercel.app'
};

// Demografi Keadaan Data Penduduk (Overview)
export const demografiKeadaan = [
  { kategori: 'Total Penduduk (Jiwa)', jumlah: 5011, persentase: 100 },
  { kategori: 'Jumlah Kepala Keluarga (KK)', jumlah: 1406, persentase: 28.1 },
  { kategori: 'Penduduk Laki-laki', jumlah: 2588, persentase: 51.6 },
  { kategori: 'Penduduk Perempuan', jumlah: 2422, persentase: 48.4 },
  { kategori: 'Kelompok Usia Produktif', jumlah: 2726, persentase: 54.4 },
  { kategori: 'Kelompok Lansia', jumlah: 486, persentase: 9.7 }
];

export const demografiKeadaanDusun = [
  {
    dusun: 'I',
    jlhPenduduk: 580,
    jlhKK: 166,
    awalLK: 296,
    awalPR: 284,
    awalJLH: 580,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 2,
    datangPR: 2,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 298,
    akhirPR: 286,
    akhirJLH: 584
  },
  {
    dusun: 'II',
    jlhPenduduk: 852,
    jlhKK: 239,
    awalLK: 454,
    awalPR: 398,
    awalJLH: 852,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 0,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 454,
    akhirPR: 398,
    akhirJLH: 852
  },
  {
    dusun: 'III',
    jlhPenduduk: 649,
    jlhKK: 184,
    awalLK: 324,
    awalPR: 325,
    awalJLH: 649,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 0,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 324,
    akhirPR: 325,
    akhirJLH: 649
  },
  {
    dusun: 'IV',
    jlhPenduduk: 721,
    jlhKK: 210,
    awalLK: 397,
    awalPR: 325,
    awalJLH: 721,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 1,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 397,
    akhirPR: 325,
    akhirJLH: 722
  },
  {
    dusun: 'V',
    jlhPenduduk: 608,
    jlhKK: 164,
    awalLK: 306,
    awalPR: 302,
    awalJLH: 608,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 1,
    meninggalPR: 0,
    datangLK: 3,
    datangPR: 3,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 308,
    akhirPR: 305,
    akhirJLH: 613
  },
  {
    dusun: 'VI',
    jlhPenduduk: 523,
    jlhKK: 156,
    awalLK: 268,
    awalPR: 255,
    awalJLH: 523,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 0,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 268,
    akhirPR: 255,
    akhirJLH: 523
  },
  {
    dusun: 'VII',
    jlhPenduduk: 497,
    jlhKK: 135,
    awalLK: 231,
    awalPR: 265,
    awalJLH: 497,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 0,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 231,
    akhirPR: 265,
    akhirJLH: 497
  },
  {
    dusun: 'VIII',
    jlhPenduduk: 571,
    jlhKK: 177,
    awalLK: 308,
    awalPR: 263,
    awalJLH: 571,
    lahirLK: 0,
    lahirPR: 0,
    meninggalLK: 0,
    meninggalPR: 0,
    datangLK: 0,
    datangPR: 0,
    pindahLK: 0,
    pindahPR: 0,
    wajibKTP: 0,
    akhirLK: 308,
    akhirPR: 263,
    akhirJLH: 571
  }
];

// Demografi Pendidikan dalam KK
export const demografiPendidikan = [
  { kategori: 'TAMAT SD / SEDERAJAT', jumlah: 1600, persentase: 34.23, lk: 821, lkPersen: 17.57, pr: 779, prPersen: 16.67 },
  { kategori: 'TIDAK / BELUM SEKOLAH', jumlah: 866, persentase: 18.53, lk: 450, lkPersen: 9.63, pr: 416, prPersen: 8.90 },
  { kategori: 'BELUM TAMAT SD/SEDERAJAT', jumlah: 832, persentase: 17.80, lk: 418, lkPersen: 8.94, pr: 414, prPersen: 8.86 },
  { kategori: 'SLTP/SEDERAJAT', jumlah: 780, persentase: 16.69, lk: 404, lkPersen: 8.64, pr: 376, prPersen: 8.04 },
  { kategori: 'SLTA / SEDERAJAT', jumlah: 568, persentase: 12.15, lk: 304, lkPersen: 6.50, pr: 264, prPersen: 5.65 },
  { kategori: 'DIPLOMA I / II', jumlah: 15, persentase: 0.32, lk: 1, lkPersen: 0.02, pr: 14, prPersen: 0.30 },
  { kategori: 'DIPLOMA IV/ STRATA I', jumlah: 13, persentase: 0.28, lk: 8, lkPersen: 0.17, pr: 5, prPersen: 0.11 },
  { kategori: 'AKADEMI/ DIPLOMA III/S. MUDA', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'STRATA III', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'STRATA II', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'BELUM MENGISI', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 }
];

// Demografi Pekerjaan
export const demografiPekerjaan = [
  { kategori: 'BELUM/TIDAK BEKERJA', jumlah: 1202, persentase: 25.72, lk: 600, lkPersen: 12.84, pr: 602, prPersen: 12.88 },
  { kategori: 'MENGURUS RUMAH TANGGA', jumlah: 975, persentase: 20.86, lk: 0, lkPersen: 0.00, pr: 975, prPersen: 20.86 },
  { kategori: 'PELAJAR/MAHASISWA', jumlah: 894, persentase: 19.13, lk: 432, lkPersen: 9.24, pr: 462, prPersen: 9.88 },
  { kategori: 'PETANI/PERKEBUNAN', jumlah: 736, persentase: 15.75, lk: 658, lkPersen: 14.08, pr: 78, prPersen: 1.67 },
  { kategori: 'BURUH TANI/PERKEBUNAN', jumlah: 331, persentase: 7.08, lk: 267, lkPersen: 5.71, pr: 64, prPersen: 1.37 },
  { kategori: 'WIRASWASTA', jumlah: 271, persentase: 5.80, lk: 255, lkPersen: 5.46, pr: 16, prPersen: 0.34 },
  { kategori: 'KARYAWAN SWASTA', jumlah: 73, persentase: 1.56, lk: 62, lkPersen: 1.33, pr: 11, prPersen: 0.24 },
  { kategori: 'NELAYAN/PERIKANAN', jumlah: 42, persentase: 0.90, lk: 42, lkPersen: 0.90, pr: 0, prPersen: 0.00 },
  { kategori: 'BURUH HARIAN LEPAS', jumlah: 26, persentase: 0.56, lk: 21, lkPersen: 0.45, pr: 5, prPersen: 0.11 },
  { kategori: 'PEGAWAI NEGERI SIPIL (PNS)', jumlah: 20, persentase: 0.43, lk: 8, lkPersen: 0.17, pr: 12, prPersen: 0.26 },
  { kategori: 'BURUH NELAYAN/PERIKANAN', jumlah: 20, persentase: 0.43, lk: 18, lkPersen: 0.39, pr: 2, prPersen: 0.04 },
  { kategori: 'PEMBANTU RUMAH TANGGA', jumlah: 12, persentase: 0.26, lk: 0, lkPersen: 0.00, pr: 12, prPersen: 0.26 },
  { kategori: 'GURU', jumlah: 11, persentase: 0.24, lk: 3, lkPersen: 0.06, pr: 8, prPersen: 0.17 },
  { kategori: 'KARYAWAN HONORER', jumlah: 9, persentase: 0.19, lk: 0, lkPersen: 0.00, pr: 9, prPersen: 0.19 },
  { kategori: 'SOPIR', jumlah: 8, persentase: 0.17, lk: 8, lkPersen: 0.17, pr: 0, prPersen: 0.00 },
  { kategori: 'KARYAWAN BUMN', jumlah: 7, persentase: 0.15, lk: 5, lkPersen: 0.11, pr: 2, prPersen: 0.04 },
  { kategori: 'PEDAGANG', jumlah: 5, persentase: 0.11, lk: 4, lkPersen: 0.09, pr: 1, prPersen: 0.02 },
  { kategori: 'BURUH PETERNAKAN', jumlah: 5, persentase: 0.11, lk: 5, lkPersen: 0.11, pr: 0, prPersen: 0.00 },
  { kategori: 'KEPOLISIAN RI (POLRI)', jumlah: 3, persentase: 0.06, lk: 3, lkPersen: 0.06, pr: 0, prPersen: 0.00 },
  { kategori: 'PERANGKAT DESA', jumlah: 3, persentase: 0.06, lk: 3, lkPersen: 0.06, pr: 0, prPersen: 0.00 },
  { kategori: 'TUKANG LAS/PANDAI BESI', jumlah: 3, persentase: 0.06, lk: 3, lkPersen: 0.06, pr: 0, prPersen: 0.00 },
  { kategori: 'TUKANG CUKUR', jumlah: 2, persentase: 0.04, lk: 2, lkPersen: 0.04, pr: 0, prPersen: 0.00 },
  { kategori: 'BIDAN', jumlah: 2, persentase: 0.04, lk: 0, lkPersen: 0.00, pr: 2, prPersen: 0.04 },
  { kategori: 'KARYAWAN BUMD', jumlah: 2, persentase: 0.04, lk: 1, lkPersen: 0.02, pr: 1, prPersen: 0.02 },
  { kategori: 'TENTARA NASIONAL INDONESIA (TNI)', jumlah: 2, persentase: 0.04, lk: 2, lkPersen: 0.04, pr: 0, prPersen: 0.00 },
  { kategori: 'PERDAGANGAN', jumlah: 2, persentase: 0.04, lk: 0, lkPersen: 0.00, pr: 2, prPersen: 0.04 },
  { kategori: 'TUKANG KAYU', jumlah: 2, persentase: 0.04, lk: 2, lkPersen: 0.04, pr: 0, prPersen: 0.00 },
  { kategori: 'PENELITI', jumlah: 1, persentase: 0.02, lk: 1, lkPersen: 0.02, pr: 0, prPersen: 0.00 },
  { kategori: 'KONSTRUKSI', jumlah: 1, persentase: 0.02, lk: 0, lkPersen: 0.00, pr: 1, prPersen: 0.02 },
  { kategori: 'PENATA RIAS', jumlah: 1, persentase: 0.02, lk: 0, lkPersen: 0.00, pr: 1, prPersen: 0.02 },
  { kategori: 'PENSIUNAN', jumlah: 1, persentase: 0.02, lk: 1, lkPersen: 0.02, pr: 0, prPersen: 0.00 },
  { kategori: 'PERAWAT', jumlah: 1, persentase: 0.02, lk: 0, lkPersen: 0.00, pr: 1, prPersen: 0.02 }
];

// Demografi Agama
export const demografiAgama = [
  { kategori: 'ISLAM', jumlah: 4673, persentase: 99.98, lk: 2406, lkPersen: 51.48, pr: 2267, prPersen: 48.50 },
  { kategori: 'KRISTEN', jumlah: 1, persentase: 0.02, lk: 0, lkPersen: 0.00, pr: 1, prPersen: 0.02 },
  { kategori: 'KATHOLIK', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'HINDU', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'BUDHA', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'KHONGHUCU', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'Kepercayaan Terhadap Tuhan YME / Lainnya', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'BELUM MENGISI', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 }
];

// Demografi Jenis Kelamin
export const demografiJenisKelamin = [
  { kategori: 'Laki-laki', jumlah: 2588, persentase: 51.6 },
  { kategori: 'Perempuan', jumlah: 2422, persentase: 48.4 }
];

// Demografi Golongan Darah
export const demografiGolDarah = [
  { kategori: 'O', jumlah: 74, persentase: 1.58, lk: 44, lkPersen: 0.94, pr: 30, prPersen: 0.64 },
  { kategori: 'B', jumlah: 27, persentase: 0.58, lk: 11, lkPersen: 0.24, pr: 16, prPersen: 0.34 },
  { kategori: 'A', jumlah: 20, persentase: 0.43, lk: 10, lkPersen: 0.21, pr: 10, prPersen: 0.21 },
  { kategori: 'AB', jumlah: 9, persentase: 0.19, lk: 5, lkPersen: 0.11, pr: 4, prPersen: 0.09 },
  { kategori: 'TIDAK TAHU', jumlah: 8, persentase: 0.17, lk: 7, lkPersen: 0.15, pr: 1, prPersen: 0.02 },
  { kategori: 'O-', jumlah: 5, persentase: 0.11, lk: 2, lkPersen: 0.04, pr: 3, prPersen: 0.06 },
  { kategori: 'O+', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'B-', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'A+', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'AB+', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'A-', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'AB-', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'B+', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'BELUM MENGISI', jumlah: 4531, persentase: 96.94, lk: 2327, lkPersen: 49.79, pr: 2204, prPersen: 47.15 }
];

// Demografi Kelompok Umur
export const demografiKelompokUmur = [
  { kategori: 'Bayi ( < 1 ) Tahun', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'Balita ( 2 > 4 ) Tahun', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'Anak-anak ( 5 > 9 ) Tahun', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'Anak-anak ( 10 > 14 ) Tahun', jumlah: 153, persentase: 3.27, lk: 82, lkPersen: 1.75, pr: 71, prPersen: 1.52 },
  { kategori: 'Remaja ( 15 > 19 ) Tahun', jumlah: 429, persentase: 9.18, lk: 220, lkPersen: 4.71, pr: 209, prPersen: 4.47 },
  { kategori: 'Remaja ( 20 > 24 ) Tahun', jumlah: 441, persentase: 9.44, lk: 229, lkPersen: 4.90, pr: 212, prPersen: 4.54 },
  { kategori: 'Dewasa ( 25 > 29 ) Tahun', jumlah: 461, persentase: 9.86, lk: 225, lkPersen: 4.81, pr: 236, prPersen: 5.05 },
  { kategori: 'Dewasa ( 30 > 34 ) Tahun', jumlah: 499, persentase: 10.68, lk: 244, lkPersen: 5.22, pr: 255, prPersen: 5.46 },
  { kategori: 'Dewasa ( 35 > 39 ) Tahun', jumlah: 447, persentase: 9.56, lk: 239, lkPersen: 5.11, pr: 208, prPersen: 4.45 },
  { kategori: 'Dewasa ( 40 > 44 ) Tahun', jumlah: 412, persentase: 8.81, lk: 228, lkPersen: 4.88, pr: 184, prPersen: 3.94 },
  { kategori: 'Tua ( 45 > 49 ) Tahun', jumlah: 386, persentase: 8.26, lk: 196, lkPersen: 4.19, pr: 190, prPersen: 4.07 },
  { kategori: 'Tua ( 50 > 54 ) Tahun', jumlah: 304, persentase: 6.50, lk: 148, lkPersen: 3.17, pr: 156, prPersen: 3.34 },
  { kategori: 'Tua ( 55 > 59 ) Tahun', jumlah: 293, persentase: 6.27, lk: 147, lkPersen: 3.15, pr: 146, prPersen: 3.12 },
  { kategori: 'Tua ( 60 > 64 ) Tahun', jumlah: 261, persentase: 5.58, lk: 127, lkPersen: 2.72, pr: 134, prPersen: 2.87 },
  { kategori: 'Tua ( 65 > 69 ) Tahun', jumlah: 244, persentase: 5.22, lk: 134, lkPersen: 2.87, pr: 110, prPersen: 2.35 },
  { kategori: 'Tua ( 70 > 74 ) Tahun', jumlah: 130, persentase: 2.78, lk: 76, lkPersen: 1.63, pr: 54, prPersen: 1.16 },
  { kategori: 'Lansia ( > 75 ) Tahun', jumlah: 213, persentase: 4.56, lk: 110, lkPersen: 2.35, pr: 103, prPersen: 2.20 },
  { kategori: 'BELUM MENGISI', jumlah: 1, persentase: 0.02, lk: 1, lkPersen: 0.02, pr: 0, prPersen: 0.00 }
];

// Demografi Warga Negara
export const demografiWargaNegara = [
  { kategori: 'WNI', jumlah: 4674, persentase: 100.00, lk: 2406, lkPersen: 51.48, pr: 2268, prPersen: 48.52 },
  { kategori: 'WNA', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'DUA KEWARGANEGARAAN', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 },
  { kategori: 'BELUM MENGISI', jumlah: 0, persentase: 0.00, lk: 0, lkPersen: 0.00, pr: 0, prPersen: 0.00 }
];

// Berita Desa
export const mockBerita = [
    {
    id: 'news-1',
    judul: 'Peluncuran Website Profil Desa Besar II Terjun oleh KKN UNIMED',
    tanggal: '10 Agustus 2026',
    kategori: 'Inovasi',
    ringkasan: 'Kolaborasi interaktif mahasiswa KKN UNIMED melahirkan portal informasi desa terintegrasi guna mempromosikan produk lokal perkebunan dan UMKM.',
    konten: `Sebagai wujud pengabdian nyata kepada masyarakat, Kelompok KKN Tematik Universitas Negeri Medan (UNIMED) resmi meluncurkan platform digital website Desa Besar II Terjun. Platform ini memuat profil kepengurusan, potensi sawah dan pertanian, profil  UMKM, hingga fasilitas.

Website ini diharapkan menjadi media humas yang menjembatani hubungan pemerintah desa dengan publik luar, sekaligus memudahkan pembeli luar kota untuk memesan produk UMKM secara online melalui tautan kontak whatsapp langsung.

Website profil desa ini menyajikan sejarah desa, visualisasi data kependudukan (demografi), peta wilayah, program kerja, serta daftar fasilitas umum. Keberadaan portal digital ini diharapkan memudahkan warga desa maupun masyarakat luas di luar wilayah Pantai Cermin untuk mengenal keunggulan dan potensi strategis Desa Besar II Terjun secara instan.`,
    gambar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    gambars: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
    ],
    penulis: 'Tim KKN UNIMED'
  },
  {
    id: 'news-2',
    judul: 'Kunjungan Gubernur & Bupati Sumatera Utara Tinjau Rumah Bantuan Sosial di Dusun 3',
    tanggal: '25 Juli 2026',
    kategori: 'Pemerintahan',
    ringkasan: 'Gubernur Sumatera Utara bersama dengan Bupati Serdang Bedagai melakukan kunjungan ke Dusun 3, Desa Besar II Terjun untuk meninjau progres pembangunan rumah bantuan sosial.',
    konten: `Gubernur Sumatera Utara bersama dengan Bupati Serdang Bedagai melakukan kunjungan ke Dusun 3, Desa Besar II Terjun. Kunjungan jajaran pemerintahan daerah ini disambut hangat oleh Kepala Desa Bapak Sulaimansyah beserta segenap perangkat desa, tokoh adat, dan masyarakat setempat.

Tujuan utama dari peninjauan langsung ini adalah untuk melihat secara riil progres pembangunan serta kelaikan rumah bantuan sosial bagi para korban bencana alam yang melanda beberapa waktu lalu. Pemerintah memastikan bantuan hunian tetap layak huni ini dibangun dengan kualitas struktur yang kokoh dan aman bagi seluruh penerima manfaat.

Bapak Gubernur mengapresiasi kebersamaan warga dan perangkat desa yang sigap berkolaborasi dalam membantu proses rehabilitasi pasca-bencana.`,
    gambar: '/Foto/Tentang Desa/6.jpg',
    gambars: [
      '/Foto/Tentang Desa/6.jpg'
    ],
    penulis: 'Sekretariat Desa'
  },
  {
    id: 'news-3',
    judul: 'Aksi Gotong Royong Kebersihan Pinggir Jalan Bersama Mahasiswa KKN UNIMED & UISU',
    tanggal: '17 Juli 2026',
    kategori: 'Gotong royong',
    ringkasan: 'Kolaborasi mahasiswa KKN UNIMED dan UISU bersama masyarakat Desa Besar II Terjun membersihkan lingkungan pinggir jalan desa.',
    konten: `Semangat kebersamaan terpancar jelas dalam aksi gotong royong kebersihan lingkungan yang digelar di sepanjang jalan utama Desa Besar II Terjun. Kegiatan kemitraan ini dipelopori langsung oleh jajaran perangkat desa bersama dengan perwakilan mahasiswa Kuliah Kerja Nyata (KKN).

Aksi gotong royong di pinggir jalan ini melibatkan kolaborasi erat antara 3 mahasiswa KKN dari Universitas Negeri Medan (UNIMED) dan 2 mahasiswa KKN dari Universitas Islam Sumatera Utara (UISU). Bersama masyarakat, mereka memotong rumput liar, merapikan tanaman hias jalan, serta membersihkan sampah plastik di saluran air pinggir jalan poros desa.`,
    gambar: '/Foto/KKN/gotong royong/1.jpg',
    gambars: [
      '/Foto/KKN/gotong royong/1.jpg'
    ],
    penulis: 'Sri Wahyuni, S.Pd.'
  },
//   {
//     id: 'news-1',
//     judul: 'Peluncuran Website Profil Desa Besar II Terjun oleh KKN UNIMED',
//     tanggal: '10 Agustus 2026',
//     kategori: 'Inovasi',
//     ringkasan: 'Kolaborasi interaktif mahasiswa KKN UNIMED melahirkan portal informasi desa terintegrasi guna mempromosikan produk lokal perkebunan dan UMKM.',
//     konten: `Sebagai wujud pengabdian nyata kepada masyarakat, Kelompok KKN Tematik Universitas Negeri Medan (UNIMED) resmi meluncurkan platform digital website Desa Besar II Terjun. Platform ini memuat profil kepengurusan, potensi sawah dan pertanian, profil  UMKM, hingga fasilitas.

// Website ini diharapkan menjadi media humas yang menjembatani hubungan pemerintah desa dengan publik luar, sekaligus memudahkan pembeli luar kota untuk memesan produk UMKM secara online melalui tautan kontak whatsapp langsung.

// Website profil desa ini menyajikan sejarah desa, visualisasi data kependudukan (demografi), peta wilayah, program kerja, serta daftar fasilitas umum. Keberadaan portal digital ini diharapkan memudahkan warga desa maupun masyarakat luas di luar wilayah Pantai Cermin untuk mengenal keunggulan dan potensi strategis Desa Besar II Terjun secara instan.`,
//     gambar: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
//     gambars: [
//       'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
//     ],
//     penulis: 'Tim KKN UNIMED'
//   },
  {
    id: 'news-banjir',
    judul: 'Desa Besar II Terjun Mengalami Banjir',
    tanggal: '28 November 2025',
    kategori: 'Bencana Alam',
    ringkasan: 'Hujan deras terus-menerus dan angin kencang melanda Desa Besar II Terjun mengakibatkan areal persawahan dan pemukiman warga terendam banjir.',
    konten: `Besarduaterjun.web.id-Cuaca ekstrim yang melanda Sumatera Utara yang mengakibatkan bencana angin kencang dan banjir juga terjadi di wilayah Desa Besar II Terjun. Hujan yang terus menerus dan angin kencang mengakibatkan wilayah Desa Besar II Terjun Kecamatan Pantai Cermin Kabupaten Serdang Bedagai mengalami banjir. Jum’at (28/11)

Banyak areal persawahan yang sudah ditanami padi usia lebih kurang satu bulan di Desa Besar II Terjun yang terendam banjir bahkan areal persawahan sudah seperti lautan yang tidak tampak lagi tanaman padinya and juga terdapat 3 rumah di Dusun II Desa Besar II Terjun terdampak dan mengalami banjir setinggi lutut orang dewasa yang mengakibatkan masyarakat tidak dapat melakukan aktivitasnya seperti biasanya.

Atas kejadian tersebut Pemerintah Desa Besar II Terjun yang dipimpin oleh Bapak Sulaimansyah selaku Kepala Desa Besar II Terjun bersama perangkat desa melakukan gerak cepat dengan melihat secara langsung masyarakat terdampak serta memberikan bantuan sembako berupa beras dan mie instan sebagai bentuk perhatian kepada masyarakat terdampak.

Bapak Sulaimansyah mengatakan bahwa bantuan yang kami berikan memang tidak banyak nilainya tapi paling tidak bisa menghibur dan membantu masyarakat walau sedikit atas dampak banjir yang mereka alami, dan Bapak Sakem salah satu masyarakat yang terdampak mengucapkan terima kasih banyak atas bantuan yang diberikan oleh Bapak Kepala Desa Besar II Terjun, bantuan yang diterima ini sangat membantu secara saat ini kami tidak dapat melakukan aktivitas dan mencari rezeki seperti biasanya.

Dan Kepala Desa Besar II Terjun Bapak Sulaimansyah menambahkan semoga cuaca ekstrim ini cepat berlalu dengan hujan cepat mereda sehingga air dapat surut dan terlebih penting segala aktivitas kita terlebih lagi masyarakat dapat kembali seperti sediakala.

(AR)`,
    gambar: '/Foto/Berita Desa/mengalami banjir/11.jpeg',
    gambars: [
      '/Foto/Berita Desa/mengalami banjir/11.jpeg',
      '/Foto/Berita Desa/mengalami banjir/2.jpeg',
      '/Foto/Berita Desa/mengalami banjir/3.jpeg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-budaya-melayu',
    judul: 'Julang Bidaya Melayu di Besar II Terjun',
    tanggal: '06 Maret 2025',
    kategori: 'Adat & Budaya',
    ringkasan: 'Majelis Julang Budaya Melayu Tahun 2025 diselenggarakan oleh Pemuda Pemudi Melayu Kecamatan Pantai Cermin bersama Kedato’an Pantai Cermin di Desa Besar II Terjun.',
    konten: `Majelis Julang Budaya Melayu Tahun 2025 diselenggarakan oleh Pemuda Pemudi Melayu Kecamatan Pantai Cermin bersama Kedato’an Pantai Cermin merupakan Kegiatan Majelis yang terdiri dari berbagai agenda acara di Desa Besar II Terjun Kecamatan Pantai Cermin Kabupaten Serdang Bedagai. (Jum’at, 14/02/2025)

Kegiatan dilaksanakan pada tanggal 14 s.d 15 Februari 2025 M / 15 s.d 16 Sya’ban 1446 H, dimulai Pukul 08.30 Wib s/d selesai. Dilaksanakan selama 2 hari. Untuk hari pertama Pembukaan Tunjuk Ajar Destar, Tanjak dan Tengkulok dengan serah terima Balai Berilmu dari Atok Wan Adham Nuch perwakilan Kesultanan Serdang kepada Guru Tunjuk Ajar Destar, Tanjak dan Tengkulok diterima oleh Cikgu Abu Abdillah Fahmi yang disaksikan Oleh Kedato’kan Pantai Cermin, selanjutnya pemaparan materi Busana Alam Melayu selama 1 (satu) jam, Sholat Jum’at bersama di Mesjid Sirajurrahmah  dan makan bersama.

Tepat Pukul 13.30 Wib mengambil Adab Berguru Alam Melayu yaitu Bergaram, bergaram ini mencicipi rasa garam di hadapan guru dan menyampaikan niat berguru, dilanjutkan pelatihan mengarang Tanjak Bulang Bidang 1 sampai 3, Belajar Mengikat Kain Samping dan Belajar Tengkulok Perempuan,

Pada hari Kedua kegiatan di buka Pukul 09.30 Wib oleh Protocol yaitu Nde Rizal dari Pantai Labu dan lanjut pembacaan ayat suci Al-Qur’an oleh Saudara Zulkifli dari Desa Kuala Lama dan Do’a Oleh Khatib Fauzi dari Desa Pantai Cermin Kiri Kec. Pantai Cermin, Kata Sambutan dari Ketua Pengerusi dan Kata Sambutan dari Dato’ Sulaimansyah sebagai Penanggung Jawab Acara, Kemudian Penyerahan Penghargaan kepada Adi Guru Budayawan Melayu Kecamatan Pantai Cermin Sekaligus Penobatan Bapak Sulaimansyah Sebagai Pengulu Adat Pantai Cermin oleh Duli Yang Mulia Tuanku Ahmad Talaa Syariful Alam.

Kata sambutan yang dilanjutkan Oleh Tuanku Sultan Serdang, diikuti Kata Sambutan Oleh Pj. Sekda Kab. Serdang Bedagai Ibu Rusmaini Purba, SP, M.Si, dan Asisten Administrasi Umum Ayahnda Ir. Kaharuddin. Dengan di tutup Makan Beredang di Aula Keluarga Dato’ Sulaimnasyah.

Tepat Pukul 14.00 Wib kegiatan dilanjutkan dengan “Taklimat Warisan Tradisi Alam Melayu” yang bertajuk Adab Silat Persembahan dan Busana serta Aksesoris Pencak Silat yang dengan nara sumber dari Cikgu Abu Abdillah Fahmi dari Tanjung Balai Karimun, Adi Guru OK Thamrin dari Pencak Silat XII Pasir Putih Pantai Cermin juga  Adi Guru Tok Aswat dari Pencak Silat Lintau 16 Pantai Labu. Dengan Moderator dipimpin Oleh Abangda Hasby Yasir dari Kota Medan. Dengan mendapati hasil diskusi “Silat Persembahan Tidak Boleh Memakai Senjata Saat Penampilan” dan “Busana Yang Di Pakai Adalah Telok Belang Dengan Bertanjak Bulang Bidang, Tanjak Khusus Untuk Pendekar Pencak Silat”.


(Bai Ombak/Dani)`,
    gambar: '/Foto/Berita Desa/julang budaya/2.jpg',
    gambars: [
      '/Foto/Berita Desa/julang budaya/2.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-sosialisasi-kebakaran',
    judul: 'SOSIALISASI PENYEBAB KEBAKARAN DAN PENANGGULANGANNYA',
    tanggal: '21 Agustus 2023',
    kategori: 'Penyuluhan',
    ringkasan: 'Pelaksanaan kegiatan sosialisasi mengenai penyebab terjadinya kebakaran serta simulasi pemadaman dengan menggunakan APAR maupun metode tradisional.',
    konten: `Besar ll terjun, 08 Agustus 2023, Melaksanakan kegiatan sosialisasi tentang sebab terjadinya kebakaran. Ternyata Api digolongkan menjadi dua golongan yaitu Api kecil atau terkendali dan Api yang tidak terkendali, terkadang sebabnya api tidak terkendali karna Kelalaiyan kita begitu menjadi besar sehingga panik dalam menghadapi kejadian tersebut. 

Acara ini dilaksanakan di Desa Besar ll terjun, yang dihadiri Bapak Camat pantai cermin, Kades Besar ll terjun (sulaimansyah) Babinsa Besar ll terjun,Babinkantipmas Besar ll terjun,Kepala pelaksana BPBD kabupaten segai, sekertaris BPBD sergai, anggota Destana Besar ll terjun, anggota Destana Pantai cermin kiri, anggota Destana Celawan. 

Adapun Narasumber yang memberi pelatihan tersebut tim BPBD Propinsi Sumut, menjelaskan gimana cara memberikan pertolongan pertama pada orang yang mengalami kecelakaan pada Musibah Bencana tersebut, dengan menggunakan bahan yang seadanya di sekitar, namun cukup Besar maanfatnya sehingga dapat membantu pada musibah Bencana. 

Maka dilaksanakan juga Demo atau praktek pemadaman api Dengan menggunakan Bahan seadanya ataupun Tradisional, juga Alat pemadam APAR (alat pemadam api ringan).`,
    gambar: '/Foto/Berita Desa/sosialisasi penyebab/sosialisasi penyebab.jpg',
    gambars: [
      '/Foto/Berita Desa/sosialisasi penyebab/sosialisasi penyebab.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-perpisahan-kkn',
    judul: 'PERPISAHAN MAHASISWA KKN',
    tanggal: '19 Agustus 2023',
    kategori: 'Pemberdayaan',
    ringkasan: 'Selesainya masa bakti tugas pengabdian Mahasiswa KKN dari Universitas UNIMED dan Universitas UISU Medan di Desa Besar II Terjun.',
    konten: `Besar ll terjun, Selesainya tugas Mahasiswa KKN (Kuliyah kerja Nyata) dari Universitas UNIMED dan universitas UISU Medan. Pada tanggal 19 Agustus 2023 yang dilaksanakan di Desa Besar ll terjun kec. pantai cermin. 

Adapun acara ini yang di hadiri Kepala Desa Besar ll terjun, beserta perangkat Pemerintahan Desa, Anggota DPRD sergai(suryadi) Tokoh Masyarakat, juga para Masyarakat Desa Besar ll terjun, kec. Pantai cermin. 

Dengan pemberian cendra mata dari Mahasiswa Kepada Bapak kepala Desa juga Kepada Masyarakat Desa Besar ll terjun. Yang mana selama ini mereka Berkecimpung di tengah tengah masyarakat dalam membantu Bidang pendidikan, Pertanian, dan Kesehatan. 

Semoga kalian menjadi Manusia yang berguna bagi agama Nusa dan Bangsa, juga orang banyak (Ujar pak Kades dalam sambutannya) yang mana selama ini kalian Praktekkan yang kalian pelajari di Universitas sekarang kalian terapkan dalam membantu orang banyak ditengah tengah masyarakat.`,
    gambar: '/Foto/Berita Desa/perpisahan kkn/1.jpg',
    gambars: [
      '/Foto/Berita Desa/perpisahan kkn/1.jpg'
    ],
    penulis: 'cipto'
  },
//   {
//     id: 'news-sukses-bpd',
//     judul: 'SELAMAT DAN SUKSES BUAT BPD',
//     tanggal: '27 Mei 2019',
//     kategori: 'Pemerintahan',
//     ringkasan: 'Pemilihan dan pembentukan susunan pengurus Badan Permusyawaratan Desa (BPD) Desa Besar II Terjun Periode 2019 - 2024.',
//     konten: `Besar II Terjun,  Dengan masa berakhirnya Tugas anggota BPD Desa Besar II Terjun Periode 2014 – 2019  Maka di bentuklah susunan Kepanitiaan Pemilihan Anggota BPD Desa Besar II Terjun, yang di ketuai oleh Bapak Misrun (ketua Panitia) Pemilihan dilaksanakan di Aula Kantor Desa Besar II Terjun.

// Pada tanggal 27 May 2019… dilaksanakannya pemilihan Berdasarkan aturan  dan tatatertib yang disepakati maka menjadi ketentuan Panitia Pelaksana sehingga berkumpulnya tokoh Masyarakat unttuk memilih anggota BPD Desa Besar II Terjun yang sudah mencalonkan dirinya sebagai Peserta.

// With demikian terlaksanalah Kegiatan Pemilihan anggota BPD Yang Baru Priode 2019 – 2024  yang hasilnya sama sama di ketahui Baik peserta Maupun Masyarakat yang hadir pada saat itu Sehingga Bersama Untuk Membangun Desa Agar Bisa Lebih Baik Lagi di Hari Mendatang.`,
//     gambar: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800',
//     gambars: [
//       'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800'
//     ],
//     penulis: 'Misrun'
//   },
//   {
//     id: 'news-pendapatan-2019',
//     judul: 'Pendapatan Desa Besar II Terjun untuk TA. 2019',
//     tanggal: '22 Maret 2019',
//     kategori: 'Keuangan',
//     ringkasan: 'Pemerintah Desa Besar II Terjun mempublikasikan APBDes 2019 dengan total Anggaran Pendapatan dan Belanja Desa mencapai Rp. 1.192.274.614,-',
//     konten: `Besar II Terjun, besarduaterjun.web.id - Pemerintah Republik Indonesia di tahun 2019 ini masih terus menggenjot pembangunan di desa-desa melalui Dana Desa yang dibebankan kedalam APBN.
// Sama hal nya  dengan desa-desa yang lain, Desa Besar II Terjun juga mendapatkan dana desa tersebut, adapun jumlah anggaran yang diterima Desa Besar II Terjun baik yang bersumber dari APBN maupun APBD Kabupaten Serdang Bedagai yaitu sebesar Rp. 311.627.170,- yang diperoleh dari pagu Alokasi Dana Desa, dan sebesar Rp. 802.279.505,- yang diperoleh dari pagu Dana Desa, dan sebesar Rp. 26.352.539,- yang diperoleh dari pagu Bagi Hasil Pajak dan Restribusi Daerah, dan sebesar Rp. 31.390.400,- yang diperoleh dari Bantuan Keuangan Kabupaten Serdang Bedagai untuk Pemilihan kepala desa, dan sebesar Rp. 20.525.000,- yang diperoleh dari SILPA anggaran tahun sebelumnya, dan sebesar Rp. 104.00,- yang diperoleh dari pendapatan bagi hasil BUMDesa Bersama. Maka jumlah Anggaran Pendapatan dan Belanja Desa untuk Pemerintah Desa Besar II Terjun Tahun Anggaran 2019 yaitu sebesar Rp. 1.192.274.614,-
// Melalui rapat musyawarah rencana pembangunan desa atau yang lebih dikenal dengan Musrembangdesa dihasilkanlah RKP Desa Tahun 2019 yang sudah dituangkan kedalam APBDesa 2019. Masyarakat and pemerintah desa berharap dana tersebut dapat diserap 100% dan rencana pembangunan yang sudah dimusyawarahkan tersebut dapat terlaksana secara baik.
// Dan kini pemerintah desa sudah memulai pembangunan untuk ditahun ini dikarenakan sudah masuknya dana transfer Dana Desa (DD) dan Alokasi Dana Desa (ADD) tahap I kedalam rekening desa. Desa Besar II Terjun adalah desa yang terdapat di Kecamatan Pantai Cermin Kabupaten Serdang Bedagai, Sabtu (22/3).
// (Dani).`,
//     gambar: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
//     gambars: [
//       'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
//     ],
//     sumber: 'Web resmi desa'
//   },
  {
    id: 'news-jumat-bersih',
    judul: "Jum'at Bersih Lingkungan Bersih",
    tanggal: '22 Maret 2019',
    kategori: 'Gotong Royong',
    ringkasan: 'Pemerintah Desa Besar II Terjun bersama Muspika dan masyarakat bergotong royong membersihkan pekarangan jalan desa.',
    konten: `Besar II Terjun, Pemerintah Desa Besar II Terjun bersama dengan Muspika Kecamatan dan masyarakat melakukan kegiatan gotong royong disepanjang jalan desa dan pekarangan rumah masyarakat demi menciptakan lingkungan yang sehat dan bersih. Kegiatan yang dipimpin oleh Bapak Sulaimansyah Kepala Desa Besar II Terjun itu diikuti lebih dari seratus orang, Jum'at (22/3).

Kegiatan ini bertujuan selain menciptakan lingkungan yang sehat dan bersih kegiatan ini juga memupuk rasa kegotong royongan diantara masyarakat sebagai ciri khas orang Indonesia, seraya dengan pernyataan Bapak Kepala Desa "kegiatan ini baik untuk kita lakukan agar lingkungan kita bersih, lingkungan kita sehat juga merekatkan rasa persaudaraan kita dengan kegiatan gotong royong karna kita orang Indonesia, yang kegiatan ini harus terus kita lestarikan". (Dani).`,
    gambar: '/Foto/Berita Desa/jumat bersih/1.jpg',
    gambars: [
      '/Foto/Berita Desa/jumat bersih/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-pengobatan-gratis',
    judul: 'Puskesmas Pariwisata Pantai Cermin Lakukan Pengobatan Gratis di Desa Besar II Terjun',
    tanggal: '18 Maret 2019',
    kategori: 'Kesehatan',
    ringkasan: 'Masyarakat antusias berbondong-bondong memeriksakan kesehatan dalam pengobatan gratis bergerak Puskesmas Pantai Cermin.',
    konten: `Besar II Terjun, besarduaterjun.web.id - Masyarakat berbondong-bondong mendatangi kantor Desa Besar II Terjun dalam kegiatan pelayanan bergerak/pengobatan Gratis yang dilakukan oleh Puskesmas Pariwisata Pantai Cermin, Senin, (18/3).
Kegiatan tersebut dihadiri langsung oleh kepala Puskesmas Pariwisata Pantai Cermin dr. Naomi Manalu, PLKB Kecamatan Pantai Cermin, Bidan Koordinator, Kapustu Besar II Terjun, Bidan Desa Besar II Terjun serta pegawai Puskesmas lainnya.
Warga masyarakat yang dilayani dari Ibu hamil, balita, anak-anak, sampai lansia berdatangan untuk berobat atau memeriksakan kesehatanya.
Seluruh warga masyarakat dipersilahkan untuk datang berobat baik yang memiliki kartu BPJS maupun yang tidak memiliki kartu BPJS tetap dilayani dan mendapatkan pelayanan kesehatan dari Puskesmas Pariwisata Pantai Cermin.(Dani).`,
    gambar: '/Foto/Berita Desa/puskesmas pariwisata/1.jpeg',
    gambars: [
      '/Foto/Berita Desa/puskesmas pariwisata/1.jpeg',
      '/Foto/Berita Desa/puskesmas pariwisata/2.jpg',
      '/Foto/Berita Desa/puskesmas pariwisata/3.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-sarasehan-bitra',
    judul: 'Saresehan 33 BITRA Indonesia Dibuka Oleh Bupati Sergai di Besar II Terjun',
    tanggal: '13 Maret 2019',
    kategori: 'Sosial',
    ringkasan: 'Sarasehan Nasional Yayasan BITRA Indonesia bertema Inklusi Sosial resmi dibuka oleh Bupati Sergai Ir. H. Soekirman di Dusun II.',
    konten: `Serdang Bedagai, Kongkrit.com—Bupati Kabupaten Serdang Bedagai (Sergai) Sumatera Utara, Ir. H Soekirman buka Sarasehan 33 BITRA Indonesia dengan Tema : Membangun Peradaban Bersama Rakyat Melalui Implementasi Nilai Nilai dalam Cakupan Inklusi Sosial, yang dilaksanakan di  Dusun II Desa Besar II Terjun Kecamatan Pantai Cermin, Rabu (13/3). Pada Saresehan dihadiri oleh : Bupati Sergai Ir H Soekirman yang juga sebagai pendiri BITRA and hadir juga Ketua TP PKK Ny Hj Marliah Soekirman, Kapolres Sergai diwakili, Dandim 02/04 Deli Serdang diwakili,  Camat Pantai Cermin Benny Saragih, Kepala Desa (Kades) Terjun Sulaimansyah, Direktur  Pusaka Indonesia, Ketua Badan Pembina BITRA Indonesia Wahyudi serta ratusan anggota BITRA Indonesia. Bupati Sergai Ir H Soekirman pada sambutannya mengatakan bahwa :  Hari ini bertepatan dengan 37 tahun yang lalu saya beserta istri resmi menjadi suami dan istri. Dalam kesempatan ini saya juga menyampaikan selamat atas sarasehan yang ke 33 yayasan BITRA Indonesia. “Saya ingat saat itu, Yayasan BITRA Indonesia seperti halnya perahu kecil yang menghadapi berbagai macam badai, karang serta tantangan lain yang tengah dihadapi, hingga kini kami dapat melewatinya. Dengan demikian saya mengajak kita semua yang ada di sini untuk bisa menerapkan ilmu sebagai insan yang ‘menjadi’, bukan sebagai insan yang ‘memiliki’.  Saat ini, beragam keberhasilan BITRA Indonesia dalam membina masyarakat marginal membuat saya semakin yakin di sarasehan yang ke 33 ini mampu menjadikan kita sebagai umat manusia bermanfaat bagi orang banyak, ungkapnya.  Kembali ditambahkan Bupati, bahwa Indonesia merupakan negara yang kaya akan perbedaan, namun perbedaan tersebut bukanlah penghambat dalam menuju tujuan negara, akan tetapi merupakan peluang dan kekuatan untuk mewujudkan masyarakat Indonesia yang dicita-citakan, sebagai mana yang tercantum pada Pancasila, yakni sila yang ke 3 ‘Persatuan Indonesia’ yang merupakan kunci dalam mengelola perbedaan tersebut. Inklusi Sosial dipahami sebagai sebuah upaya penting yang dapat mendorong keadilan dan kebersamaan dalam pembangunan nasional. melalui inklusi sosial ini maka setiap masyarakat dapat memberikan kontribusinya terhadap kemajuan negeri, ucap Soekirman.  Lebih lanjut, inklusi sosial setidaknya mencakup 3 bidang besar yang saling berkaitan yaitu pendidikan, sosial-budaya dan ekonomi. Dari ketiga bidang tersebut, peningkatan pendidikan merupakan prioritas yang paling mendesak karena dengan pendidikan anak dan remaja marginal bisa terbebas dari belenggu keterbelakangan, tutup Bupati Sergai. Sementara Ketua Badan Pembina BITRA Indonesia menyebutkan :  tidak terbayangkan yayasan ini bisa bertahan sampai saat ini, dengan tekad yang kuat sarasehan dapat di selenggarakan hingga mencapai 33 kali. Sarasehan ini dibangun untuk tempat kita bertukar pikiran, mendapatkan pengetahuan yang baru. Apalagi sarasehan ini di ikuti sebanyak 11 Kabupaten/Kota se-Sumut. (Dipa).`,
    gambar: '/Foto/Berita Desa/seresehan/1.jpg',
    gambars: [
      '/Foto/Berita Desa/seresehan/1.jpg'
    ],
    penulis: 'Dipa'
  },
  {
    id: 'news-pertanggungjawaban-desa',
    judul: 'PERTANGGUNG JAWABAN DESA',
    tanggal: '30 Desember 2018',
    kategori: 'Pemerintahan',
    ringkasan: 'Rapat pertanggungjawaban kegiatan desa dan perangkat desa bersama tokoh masyarakat di Aula Kantor Desa Besar II Terjun.',
    konten: `Besar II Terjun,   30 Desember 2018, Tepatnya pada Hari minggu  yang biasanya dimana mana Kantor pelayanan selalu libur, Tetapi kali ini di Aula Kantor Desa Besar II Terjun Dilaksanakan  Rapat / musyawarah Desa Tentang Pertanggung Jawaban Kegiatan Desa dan Perangkat Desa Bersama Masyarakat Desa , Yang di hadiri  87 Orang ,yaitu  Perangkat Desa, BPD, LKMD, PKK tokoh Masyarakat, Tokoh Agama, Tokoh Pemuda juga Beberapa Masyarakat Masing masing Dusun Lainnya.

Desa melaksanakan Pada Hari libur dikarenakan Masyarakat tidak Banyak Kegiatan/Aktipitas Dengan Waktu Luang santai dan suasana yang tenang, Dengan jelas Bapak Kepala Desa Menjelaskan dan di Uraikan Kegiatan –kegiatan yang Telah Dilaksanakan pada Tahun 2018 yang Pembangunannya Berada di Desa Besar II terjun, dan diawasi BPD dan MASYARAKAT banyak Sesuai dengan APBDESA yang pernah diMusyawarahkan sihingga Menjadi APBDESA (Anggaran Pendapatan Belanja Desa) Besar II Terjun Kec. Pantai Cermin serta Biaya yang di Realisasikan.

Sambutan dari Tokoh Masyarakat dan Masyarakat yang hadir pada saat itu sangat baik Sehingga Jelas With adanya Pembangunan yang pada tahun 2018 ini dilaksanakan dengan swaklola juga pada tahun sebelumnya Selama adanya Dana Desa yang di pekerjakannya masyarakat Desa dan dipergunakan Untuk Keperluan Masyarakat dari sumber dana yang ada di Desa.

Apalagi dipertanggung Jawabkan / dijelaskan Kepada Masyarakat Seperti Tahun yang sudah juga Tahun ini Menjadikan Masyarakat semakin Jelas Anggaran Yang didapat oleh Desa dan direalisasikan sesuai dengan APBDESA dan Sumber Dana Yang di dapat. Tetapi pak kades Kenapa Jalan Protokol kita tidak di Bangun (Tanya Peserta rapat dari Masyarakat) dengan Jelas Dijawab Oleh Bapak Kepala Desa : Itu Bukan Wewenang Desa  Melainkan adalah Wewenang Kabupaten dan sudah diatur UU Desa tahun 2014, Pengelolaan Keuangan Desa Tentang Wilayah Desa. Dengan ini Masyarakat Merasa Lebih Jelas lagi Tentang Pengelolaan Keuangan di Desa. Terimakasih Pak Kades..(sambut pula peserta rapat lainnya).`,
    gambar: '/Foto/Berita Desa/pertanggung jawaban desa/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pertanggung jawaban desa/1.jpg'
    ],
    penulis: 'Sekretariat Desa'
  },
  {
    id: 'news-ngobrolin-desa',
    judul: 'NGOBROLIN TENTANG DESA',
    tanggal: '13 Desember 2018',
    kategori: 'Sosial',
    ringkasan: 'Pemdes, Tokoh Masyarakat, dan Bhabinkamtibmas duduk bersama mendiskusikan penanggulangan kenakalan remaja, etika, dan narkoba.',
    konten: `Besar II Terjun,  Pemdes,bersama tokoh masyarakat dan Babinkantibmas duduk bersama membahas kondisi desa tentang kehidupan masyarakat di Desa. Bagai mana kultur Budaya di Desa selalu mengadakan Pertemuan atau silaturahmi antar Masyarakat Melalui Perwiritan Sosialisasi Kesehatan ataupun tentang Kenakalan Remaja yang terkadang membuat  resah para orang tuanya.

Namun dengan adanya kebersamaan ataupun duduk bersama  para tokoh,pemdes Bersama Babinkantipmas untuk membahas atau ngobrolin masalah yang ada di Masyarakat desa .

Bagaimana menanggulangi kenakalan remaja Masalah etika atau Sopan Santun tutur kata dan yang lebih di hawatirkan lagi Masalah Narkoba.

Tanpa mereka sadari Remaja adalah Harapan Bangsa sebagai Generasi Penerus, Apabila terjerumus seperti yang di khawatirkan maka Hancurlah Semua Harapan dan Cita cita Perjuangan  Bangsa,  keluarga dan Orang tuanya.

Namun Demikian para tokoh, Pemdes,Juga Babinkantipmas  berupaya melakukan trobosan dalam bentuk Kegiatan yang positip untuk meninggalkan kebiasaan yang tidak Baik, Namun Masih menjadi PR Bagi Mereka dalam Merumuskan Hasil perbincangan Tersebut.

Tahap Awal diadakannya Kedekatan Orangtua dengan Anak yang kadang kita selalu Lupa dengan adanya kesibukan sehari hari Namun ini juga menjadi tanggung Jawab Orangtua dalam hal Mendidik anak (sebut pak kadus sambil senyum) disambut dan dibenarkan oleh Pak Babinkantipmas`,
    gambar: '/Foto/Berita Desa/ngobrolin tentang desa/1.jpg',
    gambars: [
      '/Foto/Berita Desa/ngobrolin tentang desa/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-bergotong-royong',
    judul: 'BERGOTONG ROYONG KEBIASAAN DESA',
    tanggal: '12 Desember 2018',
    kategori: 'Gotong Royong',
    ringkasan: 'Masyarakat Desa Besar II Terjun bergotong royong membangun tempat pelayanan kesehatan masyarakat demi mewujudkan lingkungan yang sehat.',
    konten: `Besar II terjun,  adalah salah satu Desa Yang terletak di kecamatan Pantai Cermin kabupaten Serdang Bedagi. Saat ini desa Membangun Tempat Pelayanan kesehatan Masyarakat Desa Besar II terjun Yaitu pos Yandu Bersama Aparatur desa juga Masyarakat Desa.

Posyandu Adalah  Tempat dimana Masyarakat Desa berkumpul untuk mengadakan Kegiyatan Penyuluhan Kesehatan  untuk Balita juga Lansia Ibu hamil, dan untuk Kesehatan  masyarakat desa.Dikarenakan selama ini Masyarakat yang hadir dengan petugas Poasyandu dan petugas  kesehatan dari kecamatan sangat aktip sehingga masyarakat berantusias ingin selalu hidup sehat.

Walaupun Pembangunan ini didanai oleh Dana Desa namun  masyarakat dan aparatur desa juga menyumbangkan swadayanya demi terwujudnya kesehatan Masayarakat di Desa. Masyarakat bersemangat membangun Desa secara bergotong royng , dibantu oleh babin kantipmas dengan semboyan didalam Tubuh yang Sehat terdapat jiwa yang sehat Pula.`,
    gambar: '/Foto/Berita Desa/gotong royong desa/1.jpg',
    gambars: [
      '/Foto/Berita Desa/gotong royong desa/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-semangat-berjuang',
    judul: 'SEMANGAT BERJUANG PANTANG MENYERAH',
    tanggal: '02 November 2018',
    kategori: 'Kisah Inspiratif',
    ringkasan: 'Bapak Suyetno bersama istrinya Ibu Reni membuktikan bahwa dengan kemauan yang keras, keterbatasan bisa dirubah menjadi peluang usaha pembuatan tempe.',
    konten: `Besar II Terjun, Bapak Suyetno Bersama istrinya Ibu Reni yang bertempat tinggal di dusun I Desa Besar II Terjun adalah keluarga sederhana yang mempunyai kegitan sebagai seorang Petani Biasa, Bercocok Tanam Padi juga Palawija Lainnya, pada saat musim panen padi telah usai mereka mencoba menanam palawija yaitu kacang kedelai kebetulan Pola tanam di daerah sekitar biasanya setahun dua kali tanam padi satu kali kedele atau palawija lainnya.

Pada saat menanam kedele biasanya musim kemarau dikarenakan saat itu cuaca yang dimusim kemarau terlalu banyak curah hujan sehingga kedele yang di tanam banyak yang tidak tumbuh dan bapak yetno sudah membeli benih kedele yang lumanyan banyaknya namun belum sempat ditanam di lahan yang sudah di sediakan dikarenakan curah hujnan terlalu banyak, timbullah pemikiran mencoba merebusnya untuk di jadikan tempe, awalnya iseng, habis sudah banyak kedele mau dikemanakan lagi (sebutnya sambil bingung sudah beli benihnya mahal begitu panen jualnya yang sering murah).

Dengan demikian beliau mencobanya dijadikan makanan yaitu tempe namun dikarenakan belum pernah dilakukan terkadang tidak semudah yang di pikirkannya walaupun hanya sedikit yang dibuat. Seiring waktu berjalan sudah mulai mengerti dan masyarakat juga sudah banyak yang tau bahwa makanan yang sederhana itu adalah makanan sehat juga terjangkau mulai banyak yang beli.

Alhamdulillah usaha pengerajin tempe ini dapat dilaksanakan sampai sekarang ini. Ternyata yang di bilang dimana ada kemauan disitu ada jalan (ujarnya sambil tersenyum) walaupun terkadang beberapa kendala yang harus di lalui. Dan sekarang bisa menambah penghasilan untuk kebutuhan keluarganya sehari hari. menambah semangat kegiatan ini di pantau juga oleh perangkat desa yang dikunjungi kasipemerintahan desa`,
    gambar: '/Foto/Berita Desa/pantang menyerah/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pantang menyerah/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-pembantaian-masal',
    judul: 'PEMBANTAIAN MASAL',
    tanggal: '21 Oktober 2018',
    kategori: 'Gotong Royong',
    ringkasan: 'Gotong royong Pembantaian Masal yang dihadiri Bapak Camat dan petugas Puskesmas untuk memerangi nyamuk pembawa wabah penyakit.',
    konten: `Hari minggu Biasanya Orang selalu melakukan Kegiatan Berpergian bersama Keluarga Ketempat Rekreasi atau Ketempat lainnya. Di Desa Besar II Terjun Kecamatan Pantai Cermin Malah Melaksanakan Kegiatan PEMBANTAIAN MASAL. Gotong Royong adalah Kegiatan yang biasa sering di lakukan oleh Masyarakat,Kepala Dusun, Kepala Desa, Ibu ibu Pkk dan Aparatur Desa yang lainnya  dimanapunberada.

Gotong Royong adalah Salah satu Kegiatan Silaturahmi Di Desa Besar II terjun, Sambil bercengkrama canda tawa juga bekerja sama membrsihkan Pekarangan Rumah Selokan membersihkan Bahu Jalan yang Hasilnya bias sama sama di rasakan masyarakat banyak

Namun Kali ini beda dengan kegiatan yang biasanya dilakaukan mana lagi kegiatan PEMBANTAIAN MASAL  tersebut dihadiri Oleh Bapak Camat, juga petugas Puskesmas Pantai cermin , Kegiatannya adalah Mengubur Sampah, Kaleng Bekas dan Memerangi Nyamuk yang Bisa Mengakibatkan wabah Penyakit

Kegiatan ini disebut PEMBANTAIAN MASAL (ujar kadus sambil senyum) Karna kegiatan ini adalah Kegiatan Yang Positip apalagi saat sekarang ini Curah Hujan Sangat tinggi, agar kita semua Bisa Membiasakan Hidup Bersih Dan Sehat yang selalu diharapkan oleh semua Orang.`,
    gambar: '/Foto/Berita Desa/pembantaian masal/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pembantaian masal/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-sosialisasi-padi-ipb',
    judul: 'Sosialisasi Budidaya Padi Sehat oleh Mahasiswa IPB',
    tanggal: '01 September 2018',
    kategori: 'Pendidikan',
    ringkasan: 'Mahasiswa IPB menyelenggarakan sosialisasi budidaya padi sehat serta membagikan door prize bagi warga Desa Besar II Terjun.',
    konten: `Setelah kedatangan mereka para mahasiswa Instiut Pertanian Bogor (IPB) pada Selasa, 19 Juli 2017 ke Kabupaten Serdang Bedagai tepatnya di Desa Besar II Terjun dengan berjalannya program IPB Goes To Field Tahun 2017, kini mahasiswa Institut Pertanian Bogor (IPB) melakukan kegiatan “Sosialisasi Budidaya Padi Sehat”. Senin (31/07).

Kegiatan tersebut dihadiri oleh Penyuluh, Gapoktan, Ketua Poktan beserta masyarakat Desa Besar II Terjun. Dalam kesempatan tersebut mahasiswa bercerita tentang bagaimana budidaya padi sehat agar dapat diterapkan oleh para petani khususnya di Desa Besar II Terjun, dan bercerita tentang bagaimana dalam pengendalian hama penyakit padi secara sehat.

Bapak Sulaimansyah selaku Kepala Desa Besar II Terjun menyambut baik kegiatan tersebut and menghimbau masyarakat untuk mendukung program yang ditawarkan oleh mahasiswa IPB agar berdampak baik terhadap hasil pertanian yang ada di Desa Besar II Terjun.

Diakhir acara mahasiswa membagi-bagikan door prize sebagai hadiah hiburan bagi para peserta undangan yang hadir dalam kegiatan tersebut.`,
    gambar: '/Foto/Berita Desa/IPB/1.jpg',
    gambars: [
      '/Foto/Berita Desa/IPB/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-kunjungan-ipb',
    judul: 'Mahasiswa IPB Berkunjung ke Desa Besar II Terjun - Sergai',
    tanggal: '01 September 2018',
    kategori: 'Pendidikan',
    ringkasan: 'Mahasiswa IPB lintas fakultas melakukan kunjungan pengabdian lapangan di Kabupaten Serdang Bedagai dengan tajuk IGTF 2017.',
    konten: `Mahasiswa Institut Pertanian Bogor (IPB) yang terdiri dari 6 Fakultas yaitu Fakultas Agribisnis, perikanan, peternakan, ekonomi sumberdaya lahan, ekonomi syariah, proteksi tanaman dan mekanisasi pertanian serta sains komunikasi pengembangan masyarakat beraudiensi dengan Wakil Bupati (Wabup) Darma Wijaya bertempat di ruang kerja Wabup di Sei Rampah, Kamis (20/7).
Kunjungan silaturahmi dan audiensi ini dimaksudkan untuk menyampaikan tujuan pelaksanaan Pengabdian Lapangan Mahasiswa IPB dengan tajuk “IGTF 2017 IPB Goes To Field Kab. Serdang Bedagai” yang rencananya akan dilaksanakan mulai 20 Juli s/d 6 Agustus 2017 adalah untuk menfasilitasi mitra kerja IPB agar dapat meningkatkan kemampuan mahasiswa dalam mengatasi permasalahan pembangunan dan masyarakat di Kabupaten Sergai.
Demikian disampaikan Staf Pengajar Departemen Proteksi Tanaman Fitria Ningrum Kurniawan, SP, M.Si selaku koordinator mahasiswa dihadapan Wabup Darma Wijaya, Kepala Bappeda Hj. Prihatinah, Kadis Ketahanan Pangan Ir. Aliuddin, SP, M.Si, beserta perwakilan OPD lainnya.
Lebih lanjut dikatakan Fitria Ningrum bahwa latar belakang pelaksanaan kegiatan ini adalah tindak lanjut MoU antara Bupati Sergai dengan Rektor IPB bulan Maret lalu yang ditindaklanjuti oleh Kepala LPPM (Lembaga Penelitian dan Pengabdian Masyarakat) IPB dengan kesepakatan kerjasama bidang Pendidikan, Pertanian, Perkebunan dan Perikanan, imbuh Fitria Ningrum.
“Dimohonkan bimbingan dan terhadap kami dalam hal pelaksanaan kegiatan sesuai Tri Darma Perguruan Tinggi ini, karena guru yang sebenarnya adalah para petani yang merasakan dan mengalami langsung tentang apa dan bagaimana tanaman itu dikelola”, pungkas Pengajar IPB ini.
Sementara Kepala Bappeda Hj. Prihatinah menyampaikan Kegiatan IGTF 2017 IPB Goes To Field Kab. Sergai dengan tema “Budidaya Padi Sehat” ini diharapkan bertambahnya wawasan mahasiswa terkait ilmu pengetahuan tentang pengelolaan tanaman padi yang seminimal mungkin menggunakan efek kimia serta ilmu lain yang dipelajari dengan turun langsung kelapangan bersama para petani, jelas Prihatinah.
Kemudian disampaikan bahwa rencananya bulan depan para pengajar ilmu Proteksi Tanaman dari IPB akan berkunjung lagi ke Kabupaten Sergai terkait sharing ilmu pengetahuan terutama tentang keadaan ledakan hama dan penyakit tanaman yang lain dengan tujuan meningkatkan taraf hidup petani akan hal proteksi tanaman dari hama dan penyakit, jelasnya.
Senada dengan Kepala Bappeda, Kadis Ketahanan Pangan Ir. Aliuddin menyambut baik dan siap membantu pelaksanaan kegiatan dari para mahasiswa IPB tersebut. Disampaikannya bahwa saat ini ada 3 permasalahan besar yang dihadapi para petani yakni bagaimana mendapatkan bibit unggul, pupuk, dan akses untuk memasarkan komoditi tanaman yang mereka tanam.
Diharapkan dengan pelaksanaan kegiatan oleh para Mahasiswa IPB ini dapat membantu mengatasi permasalahan yang disampaikan diatas, jelas Kadis Ketahanan Pangan.
Menanggapi maksud kunjungan yang disampaikan pihak IPB tersebut, Wabup Darma Wijaya dalam sambutannya menyampaikan apresiasi atas rencana pelaksanaan kegiatan dari IPB tersebut di Kabupaten Sergai.
Dikatakan Wabup saat ini Kabupaten Sergai memang sedang mengalami permasalahan hama ulat kantong khususnya pada tanaman sawit dan kelapa sawit yang mengakibatkan turunnya produktifitas tanaman tersebut.

Dikatakan Wabup, bahwa untuk tanaman padi, produktifitas terus meningkat terkait ketersediaan air yang melimpah dengan adanya 3 sungai besar yang mengairi lahan di seluruh Kabupaten Sergai. Sementara Untuk komoditi tanaman Kepala sawit dan coklat baiknya diadakan peremajaan agar dapat menjaga produktifitas tanaman tersebut dengan mengutamakan penggunaan bibit unggul, himbau Wabup.

Mengakhiri sambutannya, Wabup mengucapkan selamat melaksanakan kegiatan pengabdian masyarakat serta menghimbau kepada para mahasiswa yang melaksanakan kegiatan pengabdian masyarakat ini untuk selalu mengutamakan sosialisasi penggunaan bibit unggul tanaman serta penanggulangan hama tanaman terkait perbedaan iklim antara daerah terutama dataran tinggi dan dataran rendah, pungkas Wabup Darma Wijaya. (MCSergai/Indan)`,
    gambar: '/Foto/Berita Desa/IPB Berkunjung/1.jpg',
    gambars: [
      '/Foto/Berita Desa/IPB Berkunjung/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-dester-fc',
    judul: 'DESTER FC RAIH JUARA',
    tanggal: '01 September 2018',
    kategori: 'Olahraga',
    ringkasan: 'Klub futsal binaan Karang Taruna Desa Besar II Terjun, DESTER FC, sukses meraih Juara 2 pada Turnamen Futsal Open Kecamatan Pantai Cermin 2017.',
    konten: `Besar II Terjun _SID. Karang Taruna adalah organisasi kepemudaan mitra dari pemerintah, maka sebagai kontribusi dari Karang Taruna Desa Besar II Terjun terhadap Pemerintahan Desa Besar II Terjun melakukan pergerakan dalam membina pemuda khususnya dibidang olah raga, memiliki beberapa cabang dan kegiatan diantaranya di Dusun  V Klub Fotsal, di Dusun III Klub Badminton, di Dusun II Klub Takraw dan Badminton serta di Dusun VII Badminton.

DESTER FC salah satu klub futsal binaan Karang Taruna Desa Besar II Terjun yang mengikuti Turnamen Futsal Open Kecamatan Pantai Cermin 2017, beranggotakan dari 8 orang yaitu Hasan Basri, Zulham Efendi, Kusuma Wardani, Rahmadan, Aryanto, Reza Azhari, Muhammad Dima Fanki dan Alfitra Alkifrawi serta dua official yaitu Ramdana Fikri sebagai Pelatih dan A. Ramdani sebagai Manager, berhasil merebut Juara 2 pada turnamen tersebut. Minggu, (30/07).

Kendati hanya berhasil mendapat juara 2 para pemain sudah merasa bersyukur walaupun target yang ingin dicapai adalah juara 1, namun demikian mereka tidak putus asa dan tetap semangat “kita akan ulangi kembali dan rebut juara 1 pada kesempatan yang laen” kata mereka menumbuhkan semangat.

Walaupun mendapatkan juara 2 namun arak-arakkan kemenangan tetap semarak mengiringi kepulangan mereka Desa Besar II Terjun menggunakan Bentor dan rombongan sepeda motor mengiringi dibelakangnya.`,
    gambar: '/Foto/Berita Desa/fc juara/1.jpg',
    gambars: [
      '/Foto/Berita Desa/fc juara/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-patbm-sosialisasi',
    judul: 'PATBM Desa Besar II Terjun Lakukan Sosialisasi ke Remaja Masjid',
    tanggal: '04 Oktober 2016',
    kategori: 'Sosial',
    ringkasan: 'Aktivis Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM) menyelenggarakan sosialisasi kepada remaja masjid Al-Raudhah Dusun V & VI.',
    konten: `Besar II Terjun - SID. Setelah dikeluarkan Surat Keputusan Pengangkatan Aktivis/Relawan Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM) Desa Besar II Terjun Nomor : 18.39.9/141/18/2016  Tahun 2016 dan mengangkat 10 orang aktivis/relawan, maka aktivis/relawan PATBM mulai melakukan sosialisasi/intervensi kemasyarakat dan kali ini PATBM Desa Besar II Terjun melakukan sosialisasi keremaja masjid Al-Raudhah Dusun V dan VI Desa Besar II Terjun. Kamis (16/09).

Kegiatan tersebut dilaksanakan dirumah Bapak Yakob warga Dusun V Desa Besar II Terjun dan kebetulan menjabat sebagai Kaur Pemerintahan di Pemerintahan Desa Besar II Terjun pada pukul 20.00 wib s.d selesai.

Dihadiri juga oleh perwakilan dari BPD dan Ketua Karang Taruna Bapak Sahrul, S.Pd yang juga dalam kesempatan itu memberikan nasihat dan arahan kepada para anak remaja tentang bagaimana menjaga diri dari prilaku yang menjangkit anak remaja dewasa ini.

Walaupun pada malam itu kondisi cuaca tidak mendukung karna angin bahkan hujan namun tidak menyurutkan minat aktivis/relawan PATBM, tamu dan peserta untuk datang dan mengikuti semua tahapan dan diskusi sampai dengan selesai.`,
    gambar: '/Foto/Berita Desa/patbm/1.jpg',
    gambars: [
      '/Foto/Berita Desa/patbm/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-kemeriahan-17',
    judul: 'Kemeriahan 17 Agustus di Desa Besar II Terjun',
    tanggal: '03 Oktober 2016',
    kategori: 'Sosial',
    ringkasan: 'Masyarakat Dusun V & VI Desa Besar II Terjun memeriahkan peringatan Hari Kemerdekaan RI ke-71 dengan aneka kegiatan hiburan rakyat.',
    konten: `Besar II Terjun - SID. Seperti tahun-tahun biasanya, masyarakat Dusun V & VI Desa Besar II Terjun memeriahkan peringatan Hari Kemerdekaan Republik Indonesia dengan kegiatan hiburan rakyat, dari lari goni, tarik tambang sampai panjat pucang. Rabu (17/08).

Masyarakat begitu antusias dalam mengikuti kegiatan tersebut seperti yang dikatakan oleh Hadafit salah seorang warga “rame dan meriah kali acaranya tahun ini, ada juga lucunya”.

Para kaum ibu-ibu pun tidak mau ketinggalan mereka juga menjadi peserta tarik tambang, bukan hadiah yang mereka kejar tetapi turut serta meramaikan Hari Ulang Tahun Republik Indonesia yang ke-71 “kami ikut meramekannya aja, biar makin seru” kata Ani  salah satu peserta.

Kegiatan yang digagas oleh panitia tersebut berjalan dengan sukses dan penuh kemeriahan, terlihat dari banyaknya masyarakat yang hadir, dan kegiatan tersebut menjadi pintu rizki bagi pedagang yang berjualan disekitaran lokasi tersebut dan bahkan bermunculan pedagang dadakan dari masyarakat sekitar karna dilihat mereka banyak orang-orang yang datang pada kegiatan 17-an tersebut.`,
    gambar: '/Foto/Berita Desa/17 agustus/1.jpg',
    gambars: [
      'Foto/Berita Desa/17 agustus/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-patbm',
    judul: 'Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM) Desa Besar II Terjun',
    tanggal: '03 Oktober 2016',
    kategori: 'Pemerintahan',
    ringkasan: 'Kementerian PP dan PA mengembangkan kebijakan PATBM di Desa Besar II Terjun sebagai salah satu desa percontohan perlindungan anak.',
    konten: `Besar II Terjun - SID. Kementerian Pemberdayaan Perempuan dan Perlindungan Anak (PP dan PA) mengembangkan kebijakan Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM) di desa-desa di Indonesia, dan Desa Besar II Terjun menjadi salah satu dari desa tersebut.

PATBM dikembangkan di 136 desa/kelurahan yang berada di 68 kabupaten/kota di 34 provinsi se-Indonesia. Kebijakan PATBM ini dibentuk untuk dapat diterapkan diberbagai wilayah Indonesia.

Gerakan yang diinisiasi oleh masyarakat untuk masyarakat guna upaya mencegah dan menangani kekerasan yang terjadi terhadap anak yang ada dilingkungan secara mendiri.

Desa yang mengembangkan PATBM dibentuk aktivis/relawan yang terdiri dari 10 orang. Terdapat 2 desa diKabupaten Serdang Bedagai yaitu Desa Besar II Terjun diKecamatan Pantai Cermin dan Desa Bingkat diKecamatan Pegajahan, serta 2 desa diKabupaten Deli Serdang.

Untuk aktivis/relawan PATBM desa yang ada diProvinsi Sumatera Utara telah dilakukan pelatihan bagi para aktivis/relawan yang dihadiri oleh Ibu Rini Handayani, SE, MM (Asisten Deputi Perlindungan Kekeraasan Pada Anak dan Eksploitasi), Bapak Burhanuddin, SH, M.Si (Biro Pemberdayaan Perempuan dan Anak Prov. Sumatera Utara), Ibu Mutia Fhadillah selaku Fasilitator Provinsi dari Universitas Negeri Medan (UNIMED), Ibu Jurna Elvina (Kebag. PPAKB Kabupaten Serdang Bedagai). Kegiatan yang berlangsung pada tanggal 29 Agustus 2016 s.d 1 September 2016 diHotel Theme Park and Resot Hotel Pantai Cermin.

Kegiatan tersebut disambut baik oleh Kepala Desa Besar II Terjun, Bapak Sulaimansyah ditandai dengan diterbitkannya Surat Keputusan Pengangkatan Aktivis/Relawan Perlindungan Anak Terpadu Berbasis Masyarakat (PATBM) Desa Besar II Terjun Nomor : 18.39.9/141/18/2016  Tahun 2016 dan mengangkat 10 aktivis/relawan PATBM diantaranya :

1. Ahmad Ramdani, S.Pd           Ketua
2. Rani                                      Sekretaris
3. Herawati                               Bendahara
4. Yose Rizal                              Anggota
5. M. Rizky Ramadani                Anggota
6. Agus Saputra                         Anggota
7. Armiyah                                Anggota
8. Sulini                                    Anggota
9. Sri Rahmawati                      Anggota
10. Reni Marlina                         Anggota`,
    gambar: '/Foto/Berita Desa/perlindungan anak/1.jpg',
    gambars: [
      '/Foto/Berita Desa/perlindungan anak/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-gotong-royong-puting-beliung',
    judul: 'Gotong Royong Bangun Rumah Korban Bencana Angin Puting Beliung',
    tanggal: '03 Oktober 2016',
    kategori: 'Gotong Royong',
    ringkasan: 'BPBD Serdang Bedagai bersama Pemdes dan masyarakat bergotong royong membangun kembali rumah warga yang hancur terdampak puting beliung.',
    konten: `Besar Dua Terjun SID - Pasca bencana angin puting beliung, Sabtu 6 Agustus 2016 lalu yang mengakibatkan 20 rumah warga mengalami kerusakan ringan maupun berat, BPBD Kabupaten Serdang Bedagai beserta Pemerintahan Desa Besar II Terjun dan masyarakat melakukan bantuan lanjutan membangun rumah warga secara bergotong royong. Kamis (08/09).

Kegiatan tersebut disambut baik oleh masyarakat terlihat dari begitu banyak masyarakat yang ikut serta membangun kembali rumah ambruk, dikarnakan keperdulian yang masih terasa begitu kuat diantara masyarakat disaat ada warga yang mengalami kesusahan.

Nanang Sabran warga Dusun VI Desa Besar II Terjun, adalah salah satu dari korban rumah ambruk merasa sangat bersyukur dikarnakan rumahnya dapat kembali berdiri seperti sediakala “saya sangat bersyukur rumah ini dapat berdiri lagi, terimakasih BPBD Sergai, Pengulu dan Tetangga”. Katanya saat ditemui oleh  jurnalis SID.

Bapak Sulaimansyah, Kepala Desa Besar II Terjun pun tidak mau ketinggalan, beliau berbaur bersama masyarakat bersama-sama ikut serta membangun rumah warga korban bencana, “kita harus meningkatkan rasa kebersamaan, saling memiliki, serta peduli dan disaat ada saudara kita yang terkena musibah kita harus cepat membantu, dan ini adalah salah satu bentuk keperdulian kepada saudara kita yang terkena musibah”. Pungkas beliau.`,
    gambar: '/Foto/Berita Desa/gotong royong bangun rumah/1.jpg',
    gambars: [
      '/Foto/Berita Desa/gotong royong bangun rumah/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-bantuan-bpbd',
    judul: 'Bantuan BPBD Kab. Serdang Bedagai ke Desa Besar II Terjun',
    tanggal: '03 Oktober 2016',
    kategori: 'Sosial',
    ringkasan: 'Penyaluran bantuan logistik tanggap darurat dari BPBD Serdang Bedagai diserahkan langsung kepada para korban angin puting beliung.',
    konten: `Besar II Terjun - SID. Bencana angin puting beliung yang terjadi di Desa Besar II Terjun, mengakibatkan warga korban rumah ambruk mengalami kesusahan, dikarnakan alat-alat rumah tangga dan barang keperluan sehari-hari tertimpa puing-puing bangunan rumah.

Pasca bencana angin putting beliung, Sabtu (06/08) yang lalu masyarakat korban bencana menata kembali rumah mereka yang ambruk menyelamatkan barang yang masih bisa digunakan.

BPBD Kabupaten Serdang Bedagai melalui program tanggap darurat bergerak cepat mengumpulkan data dan pada Minggu (07/08) bantuan sudah dapat diterima oleh masyarakat. Bantuan disalurkan ke kantor desa, dan diteruskan kerumah-rumah warga korban bencana.

Deni Pandrian korban bencana angin puting beliung yang rumahnya mengalami rusak berat merasa cukup terbantu “untunglah ada bantuan, kalau tidak pening juga la kepala” pungkasnya.`,
    gambar: '/Foto/Berita Desa/bantuan bpbd/1.jpg',
    gambars: [
      '/Foto/Berita Desa/bantuan bpbd/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-angin-kencang',
    judul: 'Bruk..!!! Angin Kencang Rumah Warga pada Ambruk',
    tanggal: '07 Agustus 2016',
    kategori: 'Bencana Alam',
    ringkasan: 'Sebanyak 16 rumah warga di Desa Besar II Terjun mengalami kerusakan akibat angin kencang disertai hujan deras.',
    konten: `Besar II Terjun SID - Telah terjadi musibah sekira pukul 20.30 Wib yang mengakibatkan sebagian bangunan rumah warga di Desa Besar II Terjun Kecamatan Pantai Cermin  Kabupaten Serdang Bedagai, ambruk diterjang hembusan angin kencang, Sabtu (06/08).

Sesaat sesudah kejadian Kepala Desa Besar II Terjun Bapak Sulaimansyah turun langsung melihat rumah warga yang menjadi korban terpaan angin kencang, dari hasil temuan tersebut beliau mengatakan terdapat 16 rumah warga yang mengalami kerusakan diantaranya 10 rusak berat dan 6 lainnya rusak ringan, dan beliau memberikan bantuan kepada warga berupa Gula, Teh dan Aqua Cup kepada warga yang tertimpa bencana tersebut sembari berpesan kepada warga agar tabah menghadapi cobaan ini.

Bapak Ruslan (64) bersama anggota keluarganya adalah salah seorang korban angin kencang yang berhasil menyelamatkan diri sebelum rumahnya ambruk. Mereka berhasil keluar rumah  dan berpindah kerumah didepannya setelah mendengar benda keras dari atas rumah berjatuhan. Hanya dalam hitungan beberapa detik, rumahnya ambruk.

“Kendati tidak menimbulkan korban jiwa dan luka-luka, tapi bencana angin besar yang disertai hujan deras ini sempat mengagetkan warga. Hanya saja sejumlah barang berharga rusak karena tertimpa bangunan dan atap rumah,” kata Muchsan, S.PdI warga Desa Besar II Terjun saat ditemui oleh jurnalis SID.

Adapun daftar rumah warga yang menjadi korban terpaan angin kencang sebagai berikut :
1. Jumingan Penduduk Dusun III Desa Besar II Terjun, ditaksir kerugian ± Rp. 2.000.000,-
2. Supian Penduduk Dusun IV  Desa Besar II Terjun, ditaksir kerugian  ± Rp. 20.000.000,-
3. Nurpah Penduduk Dusun V Desa Besar II Terjun, ditaksir kerugian ± Rp. 8.500.000,-
4. Ruslan Penduduk Dusun V Desa Besar II Terjun, ditaksir kerugian  ± Rp. 40.000.000,-
5. Najuan Nor Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp. 30.000.000,-
6. Doni Susilo Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.20.000.000,-
7. Rukiah Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.25.000.000,-
8. Nanang Sabran  Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.30.000.000,-
9. Deni Pandrian Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.10.000.000,-
10. Khairul Hijam  Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.2.500.000,-
11. Kamidin  Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp.3.500.000,-
12. Parmin Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp. 10.000.000,-
13. Amirsad Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp. 5.000.000,-
14. Arfai Penduduk Dusun VI Desa Besar II Terjun, ditaksir kerugian  ± Rp. 3.000.000,-
15. Sutrisman Penduduk Dusun VII Desa Besar II Terjun, ditaksir kerugian  ± Rp. 2.000.000,-
16. Giman Penduduk Dusun VIII  Desa Besar II Terjun, ditaksir kerugian  ± Rp. 20.000.000,-`,
    gambar: '/Foto/Berita Desa/bruk/1.jpg',
    gambars: [
      '/Foto/Berita Desa/bruk/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-iptek-mangrove',
    judul: 'Program IPTEK bagi Wilayah Peningkatan Kesejahteraan Masyarakat Kab. Serdang Bedagai berbasis IPTEK',
    tanggal: '29 Juli 2016',
    kategori: 'Pemberdayaan',
    ringkasan: 'Pelatihan pengolahan mangrove menjadi aneka jenis makanan bersama UNIMED dan BAPPEDA Sergai guna meningkatkan perekonomian masyarakat.',
    konten: `Universitas Negeri Medan (UNIMED) bekerjsama dengan BAPPEDA Kabupaten Serdang Bedagai memilih Desa Besar II Terjun untuk melakukan Pelatihan Program IPTEK bagi Wilayah Peningkatan Kesejahteraan Masyarakat Kabupaten Serdang Bedagai berbasis IPTEK, Selasa(27/07).

Program yang digagas oleh Bapak Zulkarnain Siregar, ST, M.Si dan Ibu Meilinda Suriani Hrd, S.Pd, M.Si selaku dosen di Universitas Negeri Medan (UNIMED) menyampaikan paparannya kepada para peserta yang dihadiri oleh Desa Besar II Terjun, Desa Naga Lawan dan Desa Bogak Besar tentang cara mengolah mangrove menjadi berbagai jenis makan.

Dihadiri langsung oleh Kepala BAPPEDA Kabupaten Serdang Bedagai Bapak Ir. M. Taufik Batubara. M.Si sebagai pembuka acara pada kegiatan pelatihan tersebut. Dalam kata sambutannya beliau menyampaikan agar para peserta pelatihan dengan serius dan berkomitmen dalam menjalankan program tersebut sebagai modal untuk meningkatkan ekonomi masyarakat, beliau juga mengatakan bahwa program tersebut sesuai dengan visi Kab. Serdang Bedagai yaiu Unggul, Inovatif, Bertanggungjawab dan Berkelanjutan. Beliau menginginkan setelah berjalannya program tersebut maka desa-desa itu akan unggul dapat berinovasi, bertanggungjawab dan berkelanjutan.

Program yang bertujuan untuk merubah kehidupan masyarakat dibidang ekonomi agar lebih membaik dengan memanfaatkan mangrove sebagai bahan pokok dalam pembuatan berbagai jenis makanan diantaranya bolu kukus dan nastar dari buah siapi-api, sirup dan selai dari brembang diikuti oleh peserta dengan serius terlihat disaat peserta dibagi dalam dua kelompok untuk mempraktekkan langsung, para peserta mengikuti tahapan-tahapan tersebut dengan baik dibawah bimbingan dari Ibu Meilinda Suriani Hrd, S.Pd, M.Si.

Tidak hanya sampai disana kegiatan tersebut juga terdapat pemberian alat dan bahan dari Universitas Negeri Medan (UNIMED) dan BAPPEDA Kab. Serdang Bedagai yang diserahkan kepada setiap desa peserta pelatihan.`,
    gambar: '/Foto/Berita Desa/iptek/1.jpg',
    gambars: [
      '/Foto/Berita Desa/iptek/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-safari-ramadhan',
    judul: 'Tim Safari Ramadhan ke Desa Besar II Terjun dihadiri Bapak Wakil Bupati Sergai',
    tanggal: '19 Juni 2016',
    kategori: 'Sosial',
    ringkasan: 'Wakil Bupati Serdang Bedagai Darma Wijaya beserta tim safari ramadhan bersilaturahmi dan tarawih bersama warga Desa Besar II Terjun.',
    konten: `Bapak Wakil Bupati Kabupaten Serdang Bedagai Darma Wijaya, SE beserta rombongan sambangi Desa Besar II Terjun Kecamatan Pantai Cermin dalam rangka kegiatan safari ramadhan, Jum'at (17/06).Kegiatan yang rutin dilakukan setiap bulan ramadhan tersebut memang memberi dampak positif bagi masyarakat karna dapat mempererat tali silaturahmi antara pemimpin dan masyarakatnya, khususnya bagi masyarakat Desa Besar II Terjun.Rumah Bapak Kepala Desa Besar II Terjun Sulaimansyah pun ramai dihadiri oleh tim safari ramadhan yang diketuai oleh Bapak Wakil Bupati Kab. Serdang Bedagai Darma Wijaya, SE, Camat Pantai Cermin Gunawan S.STP, Kepala Desa se-Kecamatan Pantai Cermin beserta masyarakat dengan jamuan yang dihidangkan sekaligus berbuka bersama.

Selesai kumpul dan berbuka bersama dan diteruskan dengan makan malam tim dan rombongan beserta masyarakat bergerak ke Masjid Al-Raudhah Dsn VI Desa Besar II Terjun untuk melaksanakan sholat tarawih.

Masyarakat menyambut kegiatan tersebut dengan penuh rasa syukur bapak Sahir selaku bagian dari Badan Kemakmuran Masjid menyatakan " pertemuan ini dapat mempererat tali persaudaraan diantara kita dan meningkatkan ketaqwaan dan keimanan dibulan baik dan barokah ini".. Bapak Wakil Bupati pun dalam kesempatan yang sama menyampaikan harapan besarnya terhadap Kabupaten Serdang Bedagai "semoga sampai lima tahun kedepan saya Wakil Bupati (Darma Wijaya, SE) dan Bapak Bupati Ir. H. Soekirman dapat membangun dan mensejahterakan kabupaten ini untuk lebih baik".

Acara yang ditutup dengan penyerahan bingkisan oleh Bapak Wakil Bupati kepada perwakilan Badan Kemakmuran Masjid dengan disaksikan oleh jamaah yang hadir pada malam itu.`,
    gambar: '/Foto/Berita Desa/safari/1.jpg',
    gambars: [
      '/Foto/Berita Desa/safari/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-sid-peluncuran',
    judul: 'SID Meningkatkan Pelayanan, Perekonomian & Keterbukaan Informasi Desa',
    tanggal: '01 Juni 2016',
    kategori: 'Inovasi',
    ringkasan: 'Peluncuran terobosan Sistem Informasi Desa (SID) online perdana di Sumatera Utara guna efisiensi administrasi dan promosi UKM.',
    konten: `Dari Peluncuran Sistem Informasi Desa (SID) Kabupaten SerdangBedagai.

SeiRampah (1/6/2016). Sistem Informasi Desa (SID) merupakan terobosan baru di Sumatera Utara sebagai unggulan yang harus diterapkan desa.Selain untuk pendataan yang baik, SID juga digunakan untuk pelayanan, khususnya administrasi desa yang efektif.SID yang telah online juga mulai digunakan promosi produk-produk unggulan UKM dan kelompok masyarakat desa untuk meluaskan pasar.

“Kami melihat, beberapa desa, kini mengalami peningkatan permintaan dan perluasan pasar dari produk-produk unggulan desanya”.Seperti dipaparkan Wahyudhi, direktur BITRA Indonesia sebagai pihak yang menginisiasi pembangunan SID di desa-desa bersama masyarakat, kader-kader IT desadan Pemerintahan Kabupaten SerdangBedagai.

Berharap ekspektasi yang lebih jauh, Bupati SerdangBedagai, Ir. H Soekirman mengatakan, “Ke depan, jika memungkinkan, produk-produk desa ini dapat diselenggarakan jual belinya secara online?” Tantang Bupati kepada desa-desa pengembang SID dan 200an Kepala Desa yang hadir di Aula Sultan Serdang, SeiRampah, SerdangBedagai, dalam kegiatan Forum Inspirasi Desa, dengan thema “Membangun Kemandirian Desa Melalui Sistem Informasi Desa (SID)”.

Sebagai keynote speaker dalam kegiatan tersebut adalah, Ir H. Soekirman (Bupati SerdangBedagai). Dan narasumber adalah Bapak BahrunWardoyo (Kepala Desa Dlingo, Bantul, Yogyakarta) sebagai peng-inspirasi.

Sebagai paparan testimony tiga Kepala Desa penerap SID di Sergai dari limayang telah terapkan SID online di SerdangBedagai. Antara lain, Kepala Desa Tanjung Harap, Kec. Serbajadi, Bapak M. Zein, Kepala Desa Bingkat, KecPegajahan, Bapak Rusdi dan Ibu Kepala Desa Pekan Tanjung Beringin, Kec. Tanjung Beringin, Fauziati.

Pada masing-masing desa penerap ini menggunakan SID dengan keutamaan atau keunggulan masing-masing, Tanjung Harap telah melakukan pendataan kemiskinan mendalam atau yang disebut analisis kemiskinan partisipatif (AKP), Bingkat untuk keterbukaan informasi publik, Pekan Tanjung beringin untuk pelayanan administrasi desa yang baik dan sangat cepat. (Isw)`,
    gambar: '/Foto/Berita Desa/SID/1.jpg',
    gambars: [
      '/Foto/Berita Desa/SID/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-serai-bunga',
    judul: 'SERAI DAN BUNGA TANAMAN IBU-IBU PKK',
    tanggal: '26 Mei 2016',
    kategori: 'Gotong Royong',
    ringkasan: 'Ibu-ibu PKK Desa Besar II Terjun bersama unsur Pemdes melakukan penanaman serai dan bunga di sepanjang jalan desa.',
    konten: `Ibu-ibu PKK Desa Besar II Terjun tidak ingin ketinggalan untuk berbuat bagi desa, Senin (16/05) ibu-ibu PKK bersama dengan seluruh unsur pemerintahan Desa Besar II Terjun menaman serai dan bunga disepanjang jalan desa.

Melibatkan hampir seratus orang suasana desa ramai disepanjang jalan bukan karna ada kericuhan atau yang berpesta tetapi mereka sibuk dengan kegiatan masing-masing untuk menanam serai dan bunga disepanjang jalan desa.

Sebagai ketua penggerak PKK Desa Besar II Terjun Ny. Armiah Sulaimansyah berbaur dengan masyarakat menggali dan menanam serai dan bunga tersebut, itu terlihat dari semangatnya beliau turun langsung berbaur dengan masyarakat.

Menyandang Juara 1 sebagai Desa Percontohan Tertib Administrasi PKK, Hatinya PKK, UP2K, Pemanfaatan Toga dan PKDRT  pada lomba 12 April  2016 lalu, Ny. Armiah Sulaimansyah tidak ingin tinggal diam dan terus membuat inovasi di desa agar dapat menjadi contoh bagi desa-desa yang lain.`,
    gambar: '/Foto/Berita Desa/serai/1.jpg',
    gambars: [
      '/Foto/Berita Desa/serai/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-karang-taruna-gotong-royong',
    judul: 'Peduli terhadap Desa, Karang Taruna lakukan Gotong Royong',
    tanggal: '26 Mei 2016',
    kategori: 'Gotong Royong',
    ringkasan: 'Menyambut bulan Ramadhan, Karang Taruna Desa Besar II Terjun melaksanakan aksi gotong royong membersihkan jalanan desa.',
    konten: `Gotong royong merupakan istilah asli Indonesia yang berarti bekerja bersama-sama untuk mencapai suatu hasil yang didambakan dan gotong royong merupakan budaya orang Indonesia yang membuat Indonesia banyak dipuji oleh bangsa lain karna budaya tersebut dan Karang Taruna Desa Besar II Terjun berusaha ingin tetap mempertahankan budaya baik tersebut.

Sadar betul terhadap hal tersebut, anak-anak Karang Taruna Desa Besar II Terjun melakukan gotong royong bersama untuk membersihkan sepanjang jalan desa dengan tema “menyambut bulan ramadhan mari kita bersih-bersih”, Minggu (22/05).

Ketua Karang Taruna Desa Besar II Terjun  Bapak Sahrul, S.Pd saat dikonfirmasi tentang hal tersebut mengatakan komitmennya membangun karakter anak-anak karang taruna khususnya anak-anak di Desa Besar II Terjun dengan semangat gotong royong “generasi muda adalah cerminan dari masa depan bangsa, maka dari itu nilai luhur budaya dan keagamaan harus kita tanamkan kepada mereka” pungkas Bapak Sahrul, S.Pd saat berdialog dengan jurnalis SID Desa Besar II Terjun.`,
    gambar: '/Foto/Berita Desa/peduli/1.jpg',
    gambars: [
      '/Foto/Berita Desa/peduli/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-tropi-kades',
    judul: 'Tropi Kepala Desa Besar II Terjun',
    tanggal: '26 Mei 2016',
    kategori: 'Sosial',
    ringkasan: 'Sebagai bukti keperdulian Kepala Desa Besar II Terjun terhadap remaja, kemarin Selasa (24/05) Kades memberikan tropi beserta uang tunai kepada remaja masjid berprestasi.',
    konten: `Sebagai bukti keperdulian Kepala Desa Besar II Terjun terhadap remaja yang ada di desanya, kemarin selasa (24/05) Kepala Desa Besar II Terjun Sulaimansyah memberikan tropi beserta uang tunai kepada remaja masjid yang berprestasi.

Saat ditanya oleh jurnalis SID Desa Besar II Terjun alasan mengadakan atau memberikan penghargaan tersebut, kepala desa hanya tersenyum dan mengatakan bahwa “itu alakadarnya saja ini kan mau menyambut bulan puasa ya kita beri semangatlah mereka anak-anak remaja agar menyambut bulan ini dengan meriah dan memakmurkan masjid“.

Acara tersebut bersamaan dengan perayaan Isra’ Mi’raj yang ada di Dusun II Desa Besar II Terjun yang dihadiri oleh Remaja Masjid dan Musholla se-Desa Besar II Terjun, kepala dusun, BPD, LKMD, Karang Taruna beserta tokoh-tokoh masyarakat lainnya.

Kegiatan tersebut tidak lepas dari peran Karang Taruna Desa Besar II Terjun yang diketuai oleh Bapak Sahrul, S.Pd sebagai motor penggerak remaja yang ada di desa agar  remaja-remaja di desa dapat lebih berbuat hal yang positif ditengah miskinnya moral anak remaja dewasa ini.`,
    gambar: '/Foto/Berita Desa/tropi kepala/1.jpg',
    gambars: [
      '/Foto/Berita Desa/tropi kepala/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-dprd-kunjungan',
    judul: 'DPRD Kab. Serdang Bedagai sambangi Desa Besar II Terjun',
    tanggal: '26 Mei 2016',
    kategori: 'Pemerintahan',
    ringkasan: 'Desa Besar II Terjun mendapat kunjungan dari anggota DPRD Kabupaten Serdang Bedagai Pansus LKPJ 2015 (Pokja III) untuk meninjau perkembangan PHI.',
    konten: `Desa Besar II Terjun mendapat kunjungan dari  anggota DPRD Kabupaten Serdang Bedagai Pansus LKPJ 2015 (Pokja III) Usman E. Sitorus, S.Ag (DPRD kab. Sergai), Hotma br Sinnurat, S.Pd (DPRD Kab. Sergai), Edi Resmanto, SE (DPRD Kab. Sergai), Enriko Silalahi, SE (DPRD Kab. Sergai) dan pendamping pansus LKPJ 2015 (Pokja III) Rudiyanto (Sekretaris DPRD), Martua Sihombing (Sekretaris DPRD), Iskandar Ibnu Khaldin (Sekretaris DPRD), dan Abdul Rahim (BPMPD), Jum’at (29/04).

Sebagai Program Inovasi Kabupaten Serdang Bedagai mengapresiasi SKPD yang telah berintegrasi membangun PHI ada Kantor Lingkungan Hidup, Dinas Kesehatan, Dinas Pertanian, Dinas Sosial Tenaga Kerja dan Koperasi dan tentunya ada penggagas program yaitu Bappeda. Di setiap SKPD selayaknya terdapat anggaran untuk menunjang PHI yang ada di 10 Kecamatan, dalam kesempatan ini DPRD hadir terkait anggaran PHI yang ada di BPMPD, mereka ingin melihat perkembangan PHI

Ibu Nusyamsidar selaku Pendamping PHI dalam kesempatan itu menyampaikan agar  kiranya dilakukan binaan lanjutan di Desa Besar II Terjun dan memohon menyediakan tempat pemasaran bagi prodak yang dihasilkan serta bantuan bangunan untuk rumah mesin pencacah organik yang sudah ada tetapi belum memiliki tempat sehingga belum dapat dioperasikan dan bila mesin mencacah organik itu dapat difungsikan maka akan banyak manfaat didapat selain daur ulang sampah beroprasinya mesin tersebut akan menampung tanaga kerja yang ada di desa, tambah ibu Nur Syamsidar.
 
Pernyataan serupa disampaikan oleh Bapak Kepala Desa Besar II Terjun Sulaimansyah dan mendukung program-program PHI untuk kebaikan bersama dan kesejahteraan warga Desa Besar II Terjun.`,
    gambar: '/Foto/Berita Desa/dprd/1.jpg',
    gambars: [
      '/Foto/Berita Desa/dprd/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-apbdesa-2016',
    judul: 'Musyawarah Penetapan APBDESA Tahun 2016',
    tanggal: '29 April 2016',
    kategori: 'Pemerintahan',
    ringkasan: 'Pemerintah Desa Besar II Terjun kembali melakukan musyawarah penetapan APBDESA Tahun 2016 dalam penggunaan Dana Desa, ADD, dan Bagi Hasil.',
    konten: `Pemerintah Desa Besar II Terjun kembali melakukan musyawarah penetapan APBDESA Tahun 2016 dalam penggunaan Dana Desa, Alokasi Dana Desa dan Dana Bagi Hasil Pakai/Retribusi Daerah untuk Desa, Selasa (19/04/).

Musyawarah tersebut dihadiri lebih dari 70 orang yang diantaranya terdiri dari Apartur Pemerintahan Desa, Kepala Dusun, BPD, LKMD, PKK, Karang Taruna, beserta tokoh masyarakat lainnya. Acara yang berlangsung di Balai Desa tersebut berlangsung dengan lancar dan menghasilkan kesepakatan bersama melalui musyawarah.

Kepala Desa Besar II Terjun Bapak Sulaimansyah menyampaikan " agar seluruh masyarakat ikut berpartisipasi dalam penggunaan serta pengawasan dana tersebut agar pembangunan berjalan dengan baik agar dampaknya dapat bermanfaat bagi masyarakat, dalam kesempaan itu juga Bapak Kepala Desa juga menyampaikan pemikirannya tentang kesejahteraan masyarakat dan pembinaan pemuda remaja demi terciptanya desa mandiri seperti kegiatan-kegiatan ekonomi kreatif pembinaan terhadap remaja desa."`,
    gambar: '/Foto/Berita Desa/masyarakat/1.jpg',
    gambars: [
      '/Foto/Berita Desa/masyarakat/1.jpg'
    ],
    penulis: 'Kontributor'
  },
  {
    id: 'news-tuan-rumah-pkk',
    judul: 'DESA BESAR II TERJUN MENJADI TUAN RUMAH',
    tanggal: '12 April 2016',
    kategori: 'Pemberdayaan',
    ringkasan: 'Kantor Desa Besar II Terjun dipenuhi oleh para undangan dan peserta Lomba Desa Percontohan Program TP-PKK Kabupaten Serdang Bedagai.',
    konten: `Kantor Desa Besar II Terjun dipenuhi oleh para undangan dan peserta Loma Desa Percontohan Program Tertib Administrasi PKK, Hatinya PKK, UP2K, Pemanfaatan Toga (Tumbuhan Obat Keluarga) PKK dan PKDRT, Selasa (12/4).

Acara tersebut dihadiri oleh Hj. Imas Haris Fadillah sebagai perwakilan dari ketua tim penggerak PKK Kabupaten Serdang Bedagai Hj. Marliah Soekirman, ketua tim penggerak Kecamatan Pantai Cermin Ny. Fauziah Gunawan, kepala desa se-Kecamatan Pantai Cermin, ketua tim penggerak desa beserta tim sebagai peserta lomba, kepala dusun, BPD, LKMD, Ketua PIK-R serta tokoh masyarakat lainnya.

Sebagai penampil pertama Ny. Armiah Sulaimansyah menyampaikan ekspose kepada penilai dan diikuti oleh penampilan dari Desa Naga Kisar, Desa Arapayung, Desa Celawan, dan Desa Pantai Cermin Kiri.

Pada kesempatan tersebut Ny. Hj. Imas Haris Fadillah menyampaikan kepada peserta lomba yaitu ketua dan tim penggerak PKK “agar memajukan PKK di desa masing-masing bukan hanya mengejar gelar juara pada lomba, tetapi bagaimana PKK dapat lebih bermanfaat terhadap masyarakat baik memanfaatkan toga dan usaha lain yang dapat menghasilkan agar dapat meningkatkan pendapatan keluarga”.`,
    gambar: '/Foto/Berita Desa/tuan rumah/1.jpg',
    gambars: [
          '/Foto/Berita Desa/tuan rumah/1.jpg'
        ],
    penulis: 'Kontributor'
  },
  {
    id: 'news-sang-pemimpin',
    judul: 'sang Pemimpin',
    tanggal: '08 April 2016',
    kategori: 'Pemerintahan',
    ringkasan: 'Profil kepemimpinan Kepala Desa Bapak Sulaimansyah yang arif, pemerhati masyarakat, and selalu turun ke tengah-tengah warga.',
    konten: `Desa Besar II Terjun adalah salah satu desa yang ada di kecamatan pantai cermin, yang berbatasan dengan Desa Pantai Cermin Kiri di sebelah utara, Desa Sementara di sebelah timur, desa Lubuk Cemara di sebelah selatan / kecamatan perbaungan, dan desa Sukajadi dan Celawan di sebelah barat. Memiliki kepala desa yang arif dan pemerhati masyarakat.

Melalui program beliau Desa Besar II Terjun memiliki kantor desa yang cukup megah, jalan yang sudah tersentuh aspal hampir seluruhnya serta irigasi yang lancar bagi petani yang ada di Desa Besar II Terjun.

Tidak ada alasan yang dapat meragunakan kepemimpinan belliau, sebagai desa percontohan Desa Besar II Terjun terus berkembang sebagai desa idaman bagi penduduknya atau bahkan pendatang yang pernah singgah di desa tersebut.

Bukan hanya itu, dikeseharianya tidak ada batasan antara masyarakat yang miskin atau yang kaya bersosialisasi memastikan agar seluruh masyarakat mendapatkan pelayanan publik yang semaksimal mungkin, tidak hanya menerima laporan dari petugas-petugas desa atau kepala-kepala dusun. Sang Pemimpin tetap turun ketengah-tengah masyarakat.

Kehadiran Bapak Sulaimansyah Kepala Desa Besar II Terjun sang pemimpin yang dirindukan oleh masyarakatnya.`,
    gambar: '/Foto/Berita Desa/sang pemimpin/1.jpg',
    gambars: [
      '/Foto/Berita Desa/sang pemimpin/1.jpg'
    ],
    penulis: 'Kontributor'
  },
  {
    id: 'news-tampung-tawar-bibit',
    judul: 'Tampung Tawar Bibit',
    tanggal: '08 April 2016',
    kategori: 'Pertanian',
    ringkasan: 'Warga Desa Besar II Terjun beramai-ramai menghadiri acara tampung tawar bibit sebagai warisan adat dan budaya Melayu.',
    konten: `Warga Desa Besar II Terjun Kecamatan Pantai Cermin beramai-ramai mendatangi acara tampung tawar bibit yang ada di Dusun VI Desa Besar II Terjun. Acara yang rutin dilaksanakan setiap lima tahun itu rutin diadakan oleh masyarakat secara turun-temurun sebagai warisan dan adat budaya melayu di Desa Besar II Terjun.

Acara yang cukup menyita perhatian masyarakat tersebut dikarnakan pada kesempatan tahun ini turut dihadiri oleh Bupati Ir. H. Soekirman dan Wakil Bupati Darma Wijaya, SE, Kepala Dinas Pertanian dan Peternakan Serdang Bedagai Bapak Ir. Safaruddin, keluarga kerajaan Kesultanan Serdang Tengku Ahmad Tala’a (Amek) beserta rombongan, Camat Kecamatan Pantai Cermin Gunawan S.STP, Kepala-kepala Desa di Kecamatan Pantai Cermin beserta tokoh-tokoh penting lainnya. Rabu (16/03/2016).

Dalam kesempatan itu Kepala Dianas Pertanian dan Peternakan Kabupaten Serdang Bedagai menyampaikan “mendukung kegiatan adat tersebut dan berharap musim panen akan datang petani mendapatkan hasil yang meningkat”.

Kepala Desa Besar II Terjun menyampaikan bahwa “acara yang bersumber dari swadaya masyarakat beserta kerjasama dengan pemerintahan desa dengan mengorbankan seekor kerbau dan dimakan bersama-sama bertujuan untuk menjalin silaturahmi antara masyarakat dan bersyukur atas hasil yang didapat selama ini dan semoga musim panen akan datang petani mendapatkan hasil yang melimpah”.`,
    gambar: '/Foto/Berita Desa/tampung/1.jpg',
    gambars: [
      '/Foto/Berita Desa/tampung/1.jpg'
    ],
    penulis: 'Kontributor'
  },
  {
    id: 'news-petani-pemakan-limbah',
    judul: 'PETANI PEMAKAN LIMBAH',
    tanggal: '09 Januari 2016',
    kategori: 'Pertanian',
    ringkasan: 'Aparatur desa bersama PPL Pertanian membimbing petani mengolah limbah pertanian dan peternakan menjadi pupuk kompos.',
    konten: `Demi memajukan pembangunan Desa untuk meningkatkan kesejahteraan masyarakat di Desa Besar II Terjun, Kecamtan Pantai Cermin, Kabupaten Serdang Bedagai, Provinsi Sumatera Utara yang penghasilannya dari pertanian dan peternakan. Aparatur Desa bersama PPL Pertanian masyarakat melakukan pembangunan rumah kompos yang bahannya diambil dari limbah pertanian dan peternakan yang selama ini petani menggunakan pupuk kimia untuk meningkatkan hasil produksi pertanian sekarang mulai beralih dengan mengumpulkan dan mengolah sampah ataupun limbah pertanian dan peternakan menjadi pupuk kompos.

Selama ini limbah pertanian seperti jerami atau batang padi habis dibakar dan kotoran sapi habis dibuang dengan tidak dimanfaatkan untuk tanaman yang ada disekelilingnya. Namun sekarang pertenak dan petani sudah mulai bisa mengelolanya menjadi pupuk kompos untuk meningkatkan produksi pertanian sehingga lahan pertanian menjadi lebih subur.

Tanpa disadari mereka potensi yang ada disekeliling mereka adalah uang yang banyak terbuang cuma – Cuma. Namun sekarang petani dan masyarakat banyak sudah bisa merasakan dampak positif yang mereka lakukan seperti air cucian beras ditambah air kelapa bisa dijadikan Mikro Organisme Lokal (MOL).

Yang tadinya mereka mengeluarkan uang untuk membeli pupuk kimia sekarang sudah menjadi berkurang dikarenakan sudah bisa memanfaatkan potensi limbah yang ada di sekelilingnya.`,
    gambar: '/Foto/Berita Desa/pemakan limbah/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pemakan limbah/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-kelompok-wanita-tani',
    judul: 'KELOMPOK IBU WANITA TANI',
    tanggal: '05 Januari 2016',
    kategori: 'Pertanian',
    ringkasan: 'Kelompok Wanita Tani Desa Besar II Terjun bergotong royong memanfaatkan pekarangan rumah untuk menanam sayuran dibimbing penyuluh.',
    konten: `Kelompok Wanita Tani Desa Besar II Terjun Kecamatan Pantai Cermin Bergotong Royong Menanam Serai juga Tanaman Sayuran sawi, kacang panjang tomat dan sejenisnya untuk kebutuhan sehari hari.... Kelompok Wanita Tani yang di bina oleh Badan penyuluhan (BP2KP) KAB. Serdang Bedagai.  Kelompok Wanita Tani mencoba membuat Tanaman pekarangan yang selama ini Hanya di tanami hiasan atau Bunga, Sekarang di tambah lagi tanaman Sayuran dengan Menggunakan pot atau Polibat untuk kebutuhan sehari hari yang di bimbing penyuluh Pertanian Kabupaten Serdang Bedagai Yaitu Bapak SUTRISNO      (MCP).`,
    gambar: '/Foto/Berita Desa/ibu wanita tani/1.jpg',
    gambars: [
      '/Foto/Berita Desa/ibu wanita tani/1.jpg'
    ],
    penulis: 'cipto'
  },
  {
    id: 'news-tanam-pepaya',
    judul: 'Tanam Pepaya Untuk Memenuhi Kebutuhan Sehari-hari',
    tanggal: '30 Desember 2015',
    kategori: 'Pertanian',
    ringkasan: 'Ongkol, seorang pemuda Desa Besar II Terjun, sukses meningkatkan ekonominya dengan membudidayakan pepaya California.',
    konten: `Ongkol seorang pemuda Desa Besar II Terjun yang kegiatan sehari-harinya adalah seorang petani. Dengan bercocok tanam pepaya California untuk menambah penghasilan demi kebutuhan sehari-hari.

“Seperti diketahui pepaya sangat baik untuk kesehatan tubuh, terutama baik untuk pencernaan. Pepaya California saat ini banyak digemari masyarakat karena rasanya yang manis, bentuknya menarik, walaupun sudah cukup matang, tekstur buahnya tidak gampang lembek. Ternyata pembeli buah pepaya tersebut tidak hanya berasal dari masyarakat Desa Besar II Terjun saja, masyarakat dari desa lain juga banyak yang datang untuk membelinya,” kata Ongkol.

Sebelum bertani papaya Ongkol bekerja sebagai kuli bangunan dan saat ini beliau bersyukur kepada Tuhan Yang Maha Esa karena hasil dari bertani papaya ia sudah dapat membeli  sepeda motor yang digunakan untuk memasarkan hasil pertaniannya.(MCP)`,
    gambar: '/Foto/Berita Desa/papaya/1.jpg',
    gambars: [
      '/Foto/Berita Desa/papaya/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-pemilukada-2015',
    judul: 'Pemilukada Serentak 2015 Besar II Terjun dimenangkan Incambent',
    tanggal: '19 Desember 2015',
    kategori: 'Pemerintahan',
    ringkasan: 'Pelaksanaan Pilkada Serentak di Desa Besar II Terjun dimenangkan oleh pasangan incumbent Ir. H. Soekirman dan Darma Wijaya.',
    konten: `Pada tanggal 9 Desember 2015 pertama kalinya Indonesia mengadakan pemilukada secara serentak tercatat ada 269 daerah terdiri atas 9 provinsi, 36 kota, dan 224 kabupaten yang serentak memilih kepala daerah. Artinya, sekitar 53 persen dari total 537 jumlah provinsi dan kabupaten/kota di Indonesia akan melaksanakan pilkada serentak gelombang pertama.

Kabupaten Serdang Bedagai adalah satu dari dua ratus dua puluh empat kabupaten yang mengadakan pemilukada serentak di tahun 2015. Terdiri dari empat pasangan calon yaitu (1) Indra Syahrin, M.Si dan Safrun Hayadi, SH (2) Syahrianto, SH dan dr. M. Rizki Ramadhan Hasibuan (3) Drs. H. Abdul Rahim, MM, M.Si dan H. Ali Muhammad Madhy (4) Ir. H. Soekirman dan Darma Wijaya, yang memperebutkan kursi sebagai orang nomor satu dan dua di Kabupaten Serdang Bedagai.

Tercatat setelah diadakannya pemilihan tanggal 9 Desember 2015 di Desa Besar II Terjun yang terdiri dari 10 TPS pasangan Ir. H. Soekirman dan Darma Wijaya memperoleh suara terbanyak. Dari jumlah suara sah 1.814 pasangan Ir. H. Soekirman dan Darma Wijaya memperoleh suara 1.313 dan diikuti oleh pasangan Syahrianto, SH dan dr. M. Rizki Ramadhan Hasibuan yang memperoleh 342 suara dan pasangan H. Abdul Rahim, MM, M.Si dan H. Ali Muhammad Madhy memperoleh 132 suara serta pasangan Indra Syahrin, M.Si dan Safrun Hayadi, SH memperoleh 27 suara.`,
    gambar: '/Foto/Berita Desa/pemilukada/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pemilukada/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-atap-rumbia',
    judul: 'ATAP RUMBIA, penompang kehidupan',
    tanggal: '25 November 2015',
    kategori: 'Pemberdayaan',
    ringkasan: 'Ibu Ina, wanita pengrajin atap rumbia berusia lebih dari 60 tahun di Desa Besar II Terjun tetap produktif memproduksi kerajinan tradisional.',
    konten: `Ditengah tingginya biaya kebutuhan hidup, seseorang harus bijak memanajemen biaya rumah tangga agar dapat bertahan ditangah kerasnya kehidupan. Bagi Ibu-ibu tidak hanya bisa mengharapkan rezeki yang didapatkan oleh sang suami bagi istri harus pintar-pintar untuk mencari penghasilan tambahan, dan itulah yang dilakukan oleh Ibu Ina, wanita pengrajin atap rumbia yang sudah berusia lebih dari enam puluh tahun tetap bekerja sebagai pengrajin atap rumbia sebagai penghasilan tambahan kebutuhan rumah tangganya.

Kerajinan tradisional sebagai pengrajin atap rumbia cukup membantu kebutuhan Ia dan keluarga sehari-hari. Atap rumbia adalah atap yang berbahan pokok dari daun rumbia yang masih dibutuhkan walaupun hampir sebagian besar orang-orang lebih memilih seng bahkan genteng sebagai atap rumah mereka tetapi atap rumbia masih memiliki nilai jual yang cukup menjanjikan dikarnakan atap rumbia dibutuhkan oleh pengusaha-pengusaha ayam ternak sebagai atap bagi kandang-kandang ayam mereka atau hal lainnya selain atap rumah.

Atas dasar itulah usaha kerajinan tradisional ini masih memiliki nilai jual dipasaran dan Ibu Ina adalah salah satu diantara banyak pengrajin atap rumbia yang ada di Desa Besar II Terjun.`,
    gambar: '/Foto/Berita Desa/rumbia/1.jpg',
    gambars: [
      '/Foto/Berita Desa/rumbia/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-bimtek-kpps',
    judul: 'BIMTEK KPPS di Desa Besar II Terjun',
    tanggal: '25 November 2015',
    kategori: 'Pemerintahan',
    ringkasan: 'PPS Desa Besar II Terjun mengadakan Bimbingan Teknis pemungutan dan penghitungan suara bagi seluruh KPPS se-desa.',
    konten: `Panitia Pemungutan Suara (PPS) Desa Besar II Terjun mengadakan Bimbingan Teknis (BIMTEK) tentang Pemungutan dan Penghitungan Surat Suara yang diadakan di Aulan Kantor Desa Besar II Terjun (22/11/15). Desa Besar II Terjun terdiri dari 10 TPS dari 8 Dusun. Bimtek tersebut dihadiri oleh seluruh Ketua dan Anggota KPPS se-Desa Besar II Terjun, Panitia Tempat Pemungutan Suara (PTPL) se-Desa Besar II Terjun dan di hadiri pula oleh anggota (Haris Fadillah, S.Pd) dan Ketua (Mohammad Sum) Panitia Pemilihan Kecamatan (PPK) Kecamatan Pantai Cermin serta Kepala Desa Besar II Terjun (Sulaimansyah).

Acara tersebut diisi oleh arahan dari Bapak Kepala Desa, Sosialisasi oleh anggota PPK, pembukaan acara oleh Ketua PPK serta Ketua PPS (Ahmad Ramdani, S.Pd) sebagai pemateri acara Bimtek tersebut.

Acara yang dibuka dari pukul 08.00 s.d 17.00 wib berjalan dengan baik, dan peserta pun mengikuti tahapan-tahapan acara dengan baik, sampai acara selesai dan ditutup kembalii oleh ketua PPK Kecamatan Pantai Cermin.`,
    gambar: '/Foto/Berita Desa/bimtek/1.jpg',
    gambars: [
      '/Foto/Berita Desa/bimtek/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-istana-desa',
    judul: 'Masyarakat Desa Besar II Terjun, punya istana.',
    tanggal: '25 November 2015',
    kategori: 'Pemerintahan',
    ringkasan: 'Di bawah kepemimpinan Bapak Sulaimansyah, Desa Besar II Terjun memiliki Kantor Desa megah berlantai dua yang melayani masyarakat maksimal.',
    konten: `Dibawah kepemimpinan Bapak Sulaimansyah selaku Kepala Desa Besar II Terjun, desa ini memiliki Kantor Desa yang berdiri sangat megah. Kantor berlantai dua tersebut dibangun sejak tahun 2011 sebagai bukti pelayanan kepada masyarakat agar lebih maksimal dalam menjalankan roda pemerintahan.

Kantor yang memiliki Aula yang cukup besar tersebut dapat memuat sampai seratus peserta / kursi bila mengadakan pertemuan atau acara bahkan digadang-gadang sebagai kantor desa yang terbesar dan termewah yang pernah ada di Kecamatan Pantai Cermin. 

Dengan keberadaan kantor desa yang megah tersebut masyarakat merasa puas sebagai pendukung pelayanan masyarakat, selain sebagai penunjang bagi kebutuhan masyarakat dalam pelayanan publik sekaligus sebagai kebanggaan bagi masyarakat Desa Besar II Terjun.`,
    gambar: '/Foto/Berita Desa/musyawarah/1.jpg',
    gambars: [
      '/Foto/Berita Desa/musyawarah/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-pengabdian-guru-ra',
    judul: 'Pengabdian si Guru RA di Desa Besar II Terjun',
    tanggal: '25 November 2015',
    kategori: 'Sosial',
    ringkasan: 'Para guru RA Raudhatul Jannah mengabdi mendidik anak usia dini dengan penuh dedikasi walaupun dengan honor bulanan yang sangat minim.',
    konten: `Dari zaman Oemar Barkrie sampai kini permasalahan seorang guru tidak habis dari waktu kewaktu. RA RAudhatul Jannah sebuah sekolah tingkat taman kanak-kanak yang ada di Desa Besar II Terjun berdiri sejak tahun 2009 sampai dengan sekarang namun kata cukup sangat jauh dari tenaga pendidik di sana apalagi untuk mencapai sejahtera.

Menghadapi siswa-siswi yang berusia 5 s.d 7 tahun memang harus memiliki kesabaran yang tinggi dan itulah keseharian yang mereka jalanani, walaupun honor yang mereka terima sangat rendahbahkan jauh dari kata cukup seratus ribu rupaih perbulan, namun mereka tidak pernah menghiraukan dan tetap mendidik dengan sepenuh hati demi mencerdaskan anak bangsa khususnya anak-anak yang ada di Desa Besar II Terjun.

Sungguh mulia perjuangan mereka yang tidak pernah menghiraukan honor yang akan mereka terima dan tetap mendidik dengan sepenuh hati.`,
    gambar: '/Foto/Berita Desa/pengabdian/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pengabdian/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-silat-melayu',
    judul: 'Pencak Silat Melayu',
    tanggal: '25 November 2015',
    kategori: 'Sosial',
    ringkasan: 'Sebagai bagian pelestarian warisan leluhur, budaya Silat Melayu giat dikembangkan oleh pemuda Desa Besar II Terjun.',
    konten: `Hampir semua suku yang ada di nusantara memiliki adat dan budaya serta ciri khas dari suku mereka masing-masing. Sadar dengan hal tersebut, Desa Besar II Terjun dengan sebagian besar penduduk adalah suku melayu, maka budaya melayu juga dikembangkan di desa tersebut.

Silat Melayu adalah salah satu peninggalan budaya melayu yang terus dilestarikan oleh masyarakat di Desa Besar II Terjun agar tidak punah termakan zaman, pemerintah desa pun tidak ingin ketinggalan serta giat merangkul pemuda-pemuda untuk belajar pencak silat melayu.`,
    gambar: '/Foto/Berita Desa/pencak silat/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pencak silat/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-pelayanan-posyandu',
    judul: 'Pelayanan Posyandu',
    tanggal: '25 November 2015',
    kategori: 'Sosial',
    ringkasan: 'Pemerintah Desa berkomitmen menjaga kesehatan balita melalui pelayanan berkala Posyandu di Puskesmas Pembantu.',
    konten: `Sebagai bukti pelayanan kesehatan yang ada di Desa Besar II Terjun adanya Posyandu yang rutin menjaga kesehatan balita anak-anak di Desa Besar II Terjun.

Bertempat di lingkungan kantor desa posyandu di puskesmas pembantu berdiri dengan bangunan serta fasilitas yang cukup memadai sebagai bukti pelayanan bagi masyarakat yang ada di Desa Besar II Terjun.`,
    gambar: '/Foto/Berita Desa/pelayanan/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pelayanan/1.jpg'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-pengrajin-kerai',
    judul: 'Pengrajin Kerai di Desa Besar II Terjun',
    tanggal: '21 November 2015',
    kategori: 'Pemberdayaan',
    ringkasan: 'Warga Dusun II Desa Besar II Terjun mahir memproduksi kerai tradisional sebagai penopang ekonomi keluarga.',
    konten: `Masyarakat Desa Besar II Terjun memiliki pengrajin-pengrajin handal, dan salah satu jenis kerajinan yang mereka geluti adalah Kerai. Kerai biasanya digunakan sebagai penutup yang digunakan didepan rumah atau ruko-ruko agar tidak terkena langsung dari sinar matahari.

Bertempat di Dusun II Desa Besar II Terjun, masyarakat tersebut sebahagian besar adalah penghasil kerai, berawal dari usaha sampingan tetapi kini usaha tersebut dapat menompang biaya kehidupan mereka ditengah biaya kebutuhan hidup yang terus meningkat.

Bahkan kerajinan tersebut semakin menjadi favorit bagi mereka sehingga anak-anak usia remaja pun tidak ingin ketinggalan untuk mengikuti jejak orang tua mereka.`,
    gambar: '/Foto/Berita Desa/pengrajin/1.jpg',
    gambars: [
      '/Foto/Berita Desa/pengrajin/1.jpg '
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-wirausahawan-dani',
    judul: 'Menjadi Wirausahawan',
    tanggal: '17 November 2015',
    kategori: 'Pemberdayaan',
    ringkasan: 'Kisah inspiratif Dani, pemuda lulusan matematika yang beralih merintis berbagai jenis wirausaha demi kemajuan desa.',
    konten: `Memilih menjadi wirausahawan adalah sebuah keputusan yang berat dikarnakan orang lebih memilih menjadi PNS, Karyawan, bahkan kuli. Meraka menganggap pilihan itu lebih baik dari pada menjadi wirausahawan yang harus berfikir berat memikirkan resiko dan tanggung jawab terhadap usaha yang dikelola. 

Tapi tidak bagi salah satu pemuda yang ada di Desa Besar II Terjun, pemuda tersebut memilih jalan yang berbeda. Kerap dipanggil Dani pemuda kelahiran 10 April 1991 ini lulusan S1 Pend. Matematika di salah satu Universitas swasta di Medan Sumatera Utara. Pemuda ini pernah bekerja sebagai pendidik dengan mengajar di MTs GUPPI Pematang Sijonam dari tahun 2009 s.d 2011, mengajar di MTs Mutiara Ilmu tahun 2010 s.d 2015 dan beberapa sekolah lain di Kecamatan Pantai Cermin Kabupaten Serdang Bedagai. 

Di Tahun 2015 pemuda ini mengambil keputusan besar dalam hidupnya, meninggalkan dunia pendidikan yang pernah digelutinya selama 6 tahun terakhir, beralih sebagai wirausahawan secara seutuhnya karna Ia menyadari tidak akan berhasil usaha atau kerjaan apapun yang dikerjakan apabila mendua hati, atas alasan itulah Ia memilih menjadi wirausawan dan meninggalkan dunia pendidikan walaupun itu adalah keputusan yang berat baginya.

Merintis usaha rental komputer ditahun 2010 dan sempat mengalami pasang surut bahkan mengalami kebangkrutan di tahun 2013 namun tidak membuat surut semangatnya untuk tetap bertahan, hingga kini ditahun 2015 pemuda ini sudah mengembangkan usahanya dibidang yang lain, berawal dari usaha rental komputer kini pemuda ini sudah memiliki beberapa usaha lain seperti Kursus Komputer dengan nama Mendai Computer Course, Toko yang menjual kebutuhan sehari-hari, Kios Pulsa, dan Advertising dengan nama Mendai Advertising bahkan ia tidak cukup hanya disitu Ia juga mengelola usaha ternak ayam kampung, dan masih memiliki impian besar lain untuk membuktikan bahwa tidak harus mencari untuk mencari uang tidak hanya dengan cara mencari pekerjaan tetapi ada cara lain untuk menghasilkan uang yaitu dengan cara menciptakan lapangan kerja dengan tujuan yang sama yaitu dengan tujuan yang sama dalam menghasilkan uang tetapi memiliki nilai lain untuk dapat membuka palangan pekerjaan bagi yang lain dan bahkan kemajuan daerah khususnya desa.

Walaupun masih jauh dari kata keberhasilan atau kesuksesan tapi pemuda ini memberikan warna baru di lingkurang Ia tinggal, dan kini sudah menampung tenaga kerja 10 orang dari usaha yang Ia geluti.`,
    gambar: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
    gambars: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
    ],
    sumber: 'Web resmi desa'
  },
  {
    id: 'news-sd-negeri-terjun',
    judul: 'SD NEGERI 101957 Terjun; kurang diminati ?',
    tanggal: '17 November 2015',
    kategori: 'Sosial',
    ringkasan: 'Ketua Karang Taruna prihatin atas penurunan jumlah penerimaan murid baru di SD Negeri 101957 Terjun dari tahun ke tahun.',
    konten: `Menurunnya jumlah penerimaan peserta siswa baru (PPDB) terlihat dari tahun ke tahun, orang tua siswa lebih memilih menyekolahkan anak mereka di sekolah lain walaupun mereka tinggal disekitaran SD Negeri 101957 Terjun, tersebut.

Anak usia pendidikan sekolah dasar yang ada di Dusun IV, V dan VI yang seharunya menjadi basis sekolah tersebut memilih bersekolah di sekolah lain yang ada di desa itu bahkan kedesa tetangga.

Ketua Pemuda Karang Taruna (SAHRUL, S.Pd) yang prihatin terhadap sekolah tersebut, mencari informasi mengapa terjadi hal seperti itu dengan mewancarai beberapa tokoh masyarakat, serta orang tua siswa di sekitaran sekolah tersebut.

After melakukan wawancara terhadap beberapa orang, ditemui beberapa hal yang menyebabkan menurunya PPDP di sekolah tersebut. (1). Bangunan sekolah kurang memadai untuk kegiatan belajar mengajar, (2) Infrastruktur serta fasilitas pun kurang memadai, (3) Kurangnya kedisiplinan yang diterapkan para guru di sekolah tersebut, (3) Terdapat beberapa tenaga pendidik yang dianggap kurang berkualitas jika dibandingkan dengan sekolah yang ada diluar dan (4) Kurangnya komunikasi pihak sekolah dengan masyarakat sekitar. sehingga mengakibatkan masyarakat tidak percaya bila anak mereka di sekolahkan di SD Negeri 101957 Terjun. (07/09/2015).`,
    gambar: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800',
    gambars: [
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
    ],
    sumber: 'Web resmi desa'
  }
];

// Agenda Desa
export const mockAgenda = [
  {
    id: 'agd-1',
    judul: 'Monitoring Combine Resource Institution',
    tanggal: '08',
    bulan: 'April',
    tahun: '2016',
    sumber: 'Web resmi desa',
    waktu: '09:14:11 WIB',
    tempat: 'Desa Binaan (Desa Besar II Terjun, dkk)',
    keterangan: 'Combine Resource Institution akan melakukan monitoring SID pada tanggal 8 s.d 10 April 2016 bagi desa binaan diantaranya Desa Besar II Terjun, Desa Tanjung Harap, Desa Pekan Tanjung Bringin, Desa Berohol, Desa Bingkat.'
  },
  {
    id: 'agd-2',
    judul: 'ULTAH SERDANG BEDAGAI',
    tanggal: '06',
    bulan: 'Januari',
    tahun: '2016',
    penulis: 'cipto',
    waktu: '07:20:32 WIB',
    tempat: 'Lapangan REPLIKA Perbaungan Kabupaten Serdang Bedagai',
    keterangan: 'Tanggal 7 januari 2016 adalah hari ulang tahunnya kabupaten Serdang Bedagai, yang ke 12 di meriahkan Acara Tarian Serampang dua belas yang di ikuti siswa sekolah se Serdang bedagai dan Perlombaan lainnya yang dimeriyahkan Masyarakat Serdang Bedagai Juga Oleh Artis Ibu kota.. Saksikanlah diLapangan REPLIKA Perbaungan Kabupaten Serdang Bedagai.... Hidup Serdang Bedagai Semoga Serdang Bedagai Menjadi Kabupaten Yang Lebih Baik Lagi.... Masyarakatnya Aman Nyaman Tentram dan Sejahtera,,, Amiinnnn....'
  },
  {
    id: 'agd-3',
    judul: 'SOSIALISASI SID SUMUT',
    tanggal: '25',
    bulan: 'November',
    tahun: '2015',
    sumber: 'Web resmi desa',
    waktu: '05:32:04 WIB',
    tempat: 'Aula Desa Besar II Terjun, Pukul 10.00 WIB',
    keterangan: 'Tanggal 26 Nopember 2015, akan diladakan sosialisasi SID SUMUT di Aula Desa Besar II Terjun, pukul 10.00 wib. Akan dihadiri oleh TIM SID SUMUT (BITRA INDONESIA) tim-tim SID dari desa yang menggunakan SID, kepala desa dari 12 desa se-kecamatan pantai cermin dan akan dihadiri oleh Pendiri Yayasan BITRA INDONESIA Bapak Ir. Soekirman'
  }
];

// Peraturan Desa
export const mockPeraturan = [
  {
    id: 'per-1',
    nomor: 'Peraturan Desa No. 2 Tahun 2024',
    tentang: 'Ketertiban Umum, Keamanan, dan Sistem Kependudukan Terintegrasi',
    tanggalDitetapkan: '12 Maret 2024',
    status: 'Berlaku',
    ringkasan: 'Mengatur ketertiban jam malam bertamu, kewajiban pelaporan 1x24 jam bagi warga pendatang baru di lingkungan rukun tetangga, serta pembinaan siskamling dusun.'
  },
  {
    id: 'per-2',
    nomor: 'Peraturan Desa No. 5 Tahun 2023',
    tentang: 'Perlindungan Saluran Irigasi Sawah dan Kelestarian Sungai Desa',
    tanggalDitetapkan: '05 September 2023',
    status: 'Berlaku',
    ringkasan: 'Melarang pembuangan limbah sampah plastik ke saluran air irigasi sawah, menertibkan pengambilan tanah pematang, serta mengatur pemeliharaan tanggul sungai secara kolektif.'
  },
  {
    id: 'per-3',
    nomor: 'Peraturan Desa No. 1 Tahun 2022',
    tentang: 'Pengelolaan Air Irigasi Persawahan Secara Adil dan Merata (Sistem Subak Desa)',
    tanggalDitetapkan: '20 Januari 2022',
    status: 'Berlaku',
    ringkasan: 'Mengatur jadwal pembagian debit air bagi sawah di Dusun I secara bergiliran untuk menghindari konflik antar petani selama musim kemarau.'
  },
  {
    id: 'per-4',
    nomor: 'Peraturan Desa No. 4 Tahun 2021',
    tentang: 'Rencana Tata Ruang Wilayah dan Pemberdayaan Kawasan Sentra UMKM Desa',
    tanggalDitetapkan: '14 November 2021',
    status: 'Berlaku',
    ringkasan: 'Menetapkan klaster khusus pemukiman, daerah konservasi perikanan, lahan tani abadi, dan alokasi pembangunan gerai fisik bagi UMKM di sepanjang jalan poros utama.'
  }
];

