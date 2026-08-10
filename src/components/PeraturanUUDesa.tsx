import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Scale, Printer, Copy, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Article {
  id: string;
  pasal: string;
  title: string;
  content: string[];
}

interface Chapter {
  id: string;
  title: string;
  summary: string;
  articles: Article[];
}

export default function PeraturanUUDesa() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [expandedArticles, setExpandedArticles] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Source text of UU No. 6 Tahun 2014 tentang Desa
  const uuChapters: Chapter[] = [
    {
      id: 'bab-1',
      title: 'BAB I - KETENTUAN UMUM',
      summary: 'Mengatur definisi fundamental mengenai Desa, Pemerintahan Desa, BPD, Musyawarah Desa, BUM Desa, Peraturan Desa, Pembangunan Desa, serta asas dan tujuan pengaturan Desa.',
      articles: [
        {
          id: 'pasal-1',
          pasal: 'Pasal 1',
          title: 'Definisi Ketentuan Umum',
          content: [
            '1. Desa adalah desa dan desa adat atau yang disebut dengan nama lain, adalah kesatuan masyarakat hukum yang memiliki batas wilayah yang berwenang untuk mengatur dan mengurus urusan pemerintahan, kepentingan masyarakat setempat berdasarkan prakarsa masyarakat, hak asal usul, dan/atau hak tradisional yang diakui dan dihormati dalam sistem pemerintahan NKRI.',
            '2. Pemerintahan Desa adalah penyelenggaraan urusan pemerintahan dan kepentingan masyarakat setempat dalam sistem pemerintahan Negara Kesatuan Republik Indonesia.',
            '3. Pemerintah Desa adalah Kepala Desa dibantu perangkat Desa sebagai unsur penyelenggara Pemerintahan Desa.',
            '4. Badan Permusyawaratan Desa (BPD) adalah lembaga yang melaksanakan fungsi pemerintahan yang anggotanya merupakan wakil dari penduduk Desa berdasarkan keterwakilan wilayah dan ditetapkan secara demokratis.',
            '5. Musyawarah Desa adalah musyawarah antara BPD, Pemerintah Desa, dan unsur masyarakat yang diselenggarakan oleh BPD untuk menyepakati hal yang bersifat strategis.',
            '6. Badan Usaha Milik Desa (BUM Desa) adalah badan usaha yang seluruh atau sebagian besar modalnya dimiliki oleh Desa melalui penyertaan secara langsung yang berasal dari kekayaan Desa yang dipisahkan guna mengelola aset, jasa, dan usaha lainnya untuk kesejahteraan masyarakat Desa.',
            '7. Peraturan Desa adalah peraturan perundang-undangan yang ditetapkan oleh Kepala Desa setelah dibahas dan disepakati bersama Badan Permusyawaratan Desa (BPD).'
          ]
        },
        {
          id: 'pasal-2',
          pasal: 'Pasal 2',
          title: 'Landasan Hukum Penyelenggaraan',
          content: [
            'Penyelenggaraan Pemerintahan Desa, pelaksanaan Pembangunan Desa, pembinaan kemasyarakatan Desa, dan pemberdayaan masyarakat Desa berdasarkan Pancasila, Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, Negara Kesatuan Republik Indonesia, dan Bhinneka Tunggal Ika.'
          ]
        },
        {
          id: 'pasal-3',
          pasal: 'Pasal 3',
          title: 'Asas Pengaturan Desa',
          content: [
            'Pengaturan Desa berasaskan: a) rekognisi; b) subsidiaritas; c) keberagaman; d) kebersamaan; e) kegotongroyongan; f) kekeluargaan; g) musyawarah; h) demokrasi; i) kemandirian; j) partisipasi; k) kesetaraan; l) pemberdayaan; dan m) keberlanjutan.'
          ]
        },
        {
          id: 'pasal-4',
          pasal: 'Pasal 4',
          title: 'Tujuan Pengaturan Desa',
          content: [
            'a. Memberikan pengakuan dan penghormatan atas Desa yang sudah ada beserta keberagamannya.',
            'b. Memberikan kejelasan status dan kepastian hukum atas Desa dalam sistem ketatanegaraan RI.',
            'c. Melestarikan dan memajukan adat, tradisi, dan budaya masyarakat Desa.',
            'd. Mendorong prakarsa, gerakan, dan partisipasi masyarakat Desa untuk pengembangan potensi dan Aset Desa guna kesejahteraan bersama.',
            'e. Membentuk Pemerintahan Desa yang profesional, efisien dan efektif, terbuka, serta bertanggung jawab.',
            'f. Meningkatkan pelayanan publik bagi warga masyarakat Desa guna mempercepat kesejahteraan umum.'
          ]
        }
      ]
    },
    {
      id: 'bab-2',
      title: 'BAB II - KEDUDUKAN DAN JENIS DESA',
      summary: 'Mengatur tentang kedudukan administratif Desa di dalam wilayah Kabupaten/Kota serta pembagian jenis Desa.',
      articles: [
        {
          id: 'pasal-5',
          pasal: 'Pasal 5',
          title: 'Kedudukan Administratif Desa',
          content: [
            'Desa berkedudukan di wilayah Kabupaten/Kota.'
          ]
        },
        {
          id: 'pasal-6',
          pasal: 'Pasal 6',
          title: 'Jenis Desa',
          content: [
            '(1) Desa terdiri atas Desa dan Desa Adat.',
            '(2) Penyebutan Desa atau Desa Adat disesuaikan dengan penyebutan yang berlaku di daerah setempat.'
          ]
        }
      ]
    },
    {
      id: 'bab-3',
      title: 'BAB III - PENATAAN DESA',
      summary: 'Mengatur kewenangan penataan Desa oleh Pemerintah dan Pemda, meliputi pembentukan, penghapusan, penggabungan, perubahan status kelurahan, syarat kependudukan (jumlah penduduk minimum Sumatera: 4.000 jiwa/800 KK), dan proses pengesahan perda.',
      articles: [
        {
          id: 'pasal-7',
          pasal: 'Pasal 7',
          title: 'Kewenangan & Tujuan Penataan',
          content: [
            '(1) Pemerintah, Pemerintah Daerah Provinsi, dan Pemerintah Daerah Kabupaten/Kota dapat melakukan penataan Desa.',
            '(2) Penataan berdasarkan hasil evaluasi tingkat perkembangan Pemerintahan Desa.',
            '(3) Penataan bertujuan mewujudkan efektivitas penyelenggaraan Pemerintahan Desa, mempercepat peningkatan kesejahteraan masyarakat, kualitas pelayanan publik, tata kelola, dan daya saing Desa.',
            '(4) Penataan meliputi: pembentukan, penghapusan, penggabungan, perubahan status, dan penetapan Desa.'
          ]
        },
        {
          id: 'pasal-8',
          pasal: 'Pasal 8',
          title: 'Syarat Pembentukan Desa Baru',
          content: [
            '(1) Pembentukan Desa merupakan tindakan mengadakan Desa baru di luar Desa yang ada.',
            '(2) Pembentukan Desa ditetapkan dengan Peraturan Daerah Kabupaten/Kota dengan mempertimbangkan prakarsa masyarakat, adat istiadat, sosial budaya, kemampuan, dan potensi.',
            '(3) Pembentukan Desa harus memenuhi syarat: a) Batas usia Desa induk paling sedikit 5 tahun. b) Jumlah penduduk minimum (Sumatera: 4.000 jiwa atau 800 KK; Jawa: 6.000 jiwa atau 1.200 KK; Bali: 5.000 jiwa atau 1.000 KK). c) Akses transportasi antarwilayah. d) Sosial budaya pendukung kerukunan. e) Potensi SDA, SDM, dan SDE. f) Peta batas wilayah bersertifikasi. g) Sarana prasarana pemerintahan. h) Tersedianya dana operasional.',
            '(4) Dalam wilayah Desa dibentuk dusun sebagai pelaksana wilayah berdasarkan asal usul adat istiadat.'
          ]
        },
        {
          id: 'pasal-9',
          pasal: 'Pasal 9',
          title: 'Penghapusan Desa',
          content: [
            'Desa dapat dihapus karena bencana alam dan/atau kepentingan program nasional yang strategis.'
          ]
        },
        {
          id: 'pasal-11',
          pasal: 'Pasal 11',
          title: 'Perubahan Status Desa Menjadi Kelurahan',
          content: [
            '(1) Desa dapat berubah status menjadi kelurahan berdasarkan prakarsa Pemerintah Desa dan BPD melalui Musyawarah Desa dengan memperhatikan saran masyarakat.',
            '(2) Seluruh barang milik Desa dan sumber pendapatan berubah menjadi aset Pemda Kabupaten/Kota yang dialokasikan kembali untuk pembangunan kelurahan tersebut.'
          ]
        },
        {
          id: 'pasal-15',
          pasal: 'Pasal 15',
          title: 'Evaluasi Peraturan Daerah oleh Gubernur',
          content: [
            '(1) Rancangan Perda pembentukan/perubahan status Desa diajukan kepada Gubernur setelah disetujui bersama Bupati/Walikota dan DPRD.',
            '(2) Gubernur melakukan evaluasi mendalam berdasarkan aspek urgensi, kepentingan nasional, daerah, masyarakat, dan hukum.'
          ]
        }
      ]
    },
    {
      id: 'bab-4',
      title: 'BAB IV - KEWENANGAN DESA',
      summary: 'Menjelaskan ruang lingkup kewenangan mandiri Desa yang meliputi hak asal usul, kewenangan lokal berskala Desa, serta kewenangan penugasan dari Pemerintah Pusat maupun Pemerintah Daerah.',
      articles: [
        {
          id: 'pasal-18',
          pasal: 'Pasal 18',
          title: 'Cakupan Kewenangan Utama',
          content: [
            'Kewenangan Desa meliputi kewenangan di bidang penyelenggaraan Pemerintahan Desa, pelaksanaan Pembangunan Desa, pembinaan kemasyarakatan Desa, dan pemberdayaan masyarakat Desa berdasarkan prakarsa masyarakat, hak asal usul, dan adat istiadat Desa.'
          ]
        },
        {
          id: 'pasal-19',
          pasal: 'Pasal 19',
          title: 'Klasifikasi Kewenangan',
          content: [
            'Kewenangan Desa meliputi: a) kewenangan berdasarkan hak asal usul; b) kewenangan lokal berskala Desa; c) kewenangan yang ditugaskan oleh Pemerintah/Pemda; d) kewenangan lain yang ditugaskan sesuai ketentuan peraturan perundang-undangan.'
          ]
        },
        {
          id: 'pasal-22',
          pasal: 'Pasal 22',
          title: 'Pembiayaan Atas Kewenangan Penugasan',
          content: [
            '(1) Penugasan dari Pemerintah dan/atau Pemerintah Daerah kepada Desa wajib disertai dengan pengalokasian biaya operasional pendukung secara nyata.'
          ]
        }
      ]
    },
    {
      id: 'bab-5',
      title: 'BAB V - PENYELENGGARAAN PEMERINTAHAN DESA',
      summary: 'Mengatur struktur pemerintahan, tugas, wewenang, hak & kewajiban Kepala Desa, larangan kades, pemilihan Kepala Desa secara serentak (Pilkades), masa jabatan kades (6 tahun), pemberhentian, struktur perangkat desa, forum strategis Musyawarah Desa, serta pembentukan dan fungsi BPD.',
      articles: [
        {
          id: 'pasal-23',
          pasal: 'Pasal 23',
          title: 'Penyelenggara Pemerintahan Desa',
          content: [
            'Pemerintahan Desa diselenggarakan oleh Pemerintah Desa.'
          ]
        },
        {
          id: 'pasal-24',
          pasal: 'Pasal 24',
          title: 'Asas Penyelenggaraan Pemerintahan',
          content: [
            'Penyelenggaraan Pemerintahan Desa berdasarkan asas: kepastian hukum, tertib pemerintahan, tertib kepentingan umum, keterbukaan, proporsionalitas, profesionalitas, akuntabilitas, efektivitas & efisiensi, kearifan lokal, keberagaman, dan partisipatif.'
          ]
        },
        {
          id: 'pasal-26',
          pasal: 'Pasal 26',
          title: 'Tugas, Wewenang & Hak Kepala Desa',
          content: [
            '(1) Kepala Desa bertugas menyelenggarakan Pemerintahan, melaksanakan Pembangunan, Pembinaan kemasyarakatan, dan Pemberdayaan masyarakat.',
            '(2) Wewenang Kepala Desa meliputi: Memimpin penyelenggaraan pemerintahan, mengangkat/memberhentikan perangkat desa, memegang kekuasaan pengelolaan keuangan/aset, menetapkan peraturan desa, membina ketentraman dan ketertiban warga, mengembangkan ekonomi desa, dan mewakili desa di dalam dan di luar pengadilan.',
            '(3) Hak Kepala Desa: Mengusulkan SOTK, mengajukan rancangan peraturan desa, menerima penghasilan tetap bulanan, tunjangan, jaminan kesehatan, serta perlindungan hukum.'
          ]
        },
        {
          id: 'pasal-29',
          pasal: 'Pasal 29',
          title: 'Larangan Bagi Kepala Desa',
          content: [
            'Kepala Desa dilarang: a) Merugikan kepentingan umum; b) Membuat keputusan menguntungkan diri sendiri/keluarga/parpol; c) Menyalahgunakan wewenang; d) Melakukan tindakan diskriminatif; e) Melakukan kolusi, korupsi, dan nepotisme (KKN); f) Menjadi pengurus partai politik; g) Merangkap jabatan sebagai anggota BPD, DPR, DPD, DPRD, atau jabatan publik lainnya; h) Ikut serta kampanye pemilu/pilkada.'
          ]
        },
        {
          id: 'pasal-39',
          pasal: 'Pasal 39',
          title: 'Masa Jabatan Kepala Desa',
          content: [
            '(1) Kepala Desa memegang jabatan selama 6 (enam) tahun terhitung sejak tanggal pelantikan.',
            '(2) Kepala Desa dapat menjabat paling banyak 3 (tiga) kali masa jabatan secara berturut-turut atau tidak secara berturut-turut.'
          ]
        },
        {
          id: 'pasal-48',
          pasal: 'Pasal 48',
          title: 'Struktur Perangkat Desa',
          content: [
            'Perangkat Desa terdiri atas: a) Sekretariat Desa (dipimpin Sekretaris Desa); b) Pelaksana Kewilayahan (Kepala Dusun); c) Pelaksana Teknis (Seksi-seksi pelaksana lapangan).'
          ]
        },
        {
          id: 'pasal-54',
          pasal: 'Pasal 54',
          title: 'Musyawarah Desa (Musdes)',
          content: [
            '(1) Musyawarah Desa merupakan forum permusyawaratan tertinggi antara BPD, Pemerintah Desa, dan unsur masyarakat untuk memusyawarahkan hal bersifat strategis (penataan, perencanaan, investasi, pembentukan BUM Desa, pelepasan aset).',
            '(2) Musdes diselenggarakan minimal 1 (satu) kali dalam setahun dan dibiayai dari APBD/APBDesa.'
          ]
        },
        {
          id: 'pasal-55',
          pasal: 'Pasal 55',
          title: 'Fungsi Badan Permusyawaratan Desa (BPD)',
          content: [
            'BPD mempunyai fungsi utama: a) Membahas dan menyepakati Rancangan Peraturan Desa bersama Kepala Desa; b) Menampung dan menyalurkan aspirasi masyarakat Desa; dan c) Melakukan pengawasan kinerja Kepala Desa secara konstruktif.'
          ]
        }
      ]
    },
    {
      id: 'bab-6',
      title: 'BAB VI - HAK DAN KEWAJIBAN DESA DAN MASYARAKAT DESA',
      summary: 'Menjelaskan hak warga untuk mendapatkan pelayanan adil, penyampaian aspirasi terbuka, hak memilih dan dipilih, serta kewajiban berpartisipasi gotong royong memelihara lingkungan.',
      articles: [
        {
          id: 'pasal-67',
          pasal: 'Pasal 67',
          title: 'Hak dan Kewajiban Desa',
          content: [
            '(1) Desa berhak: Mengatur urusan adat/lokal, menetapkan kelembagaan, dan mendapatkan alokasi pendapatan asli maupun dana perimbangan.',
            '(2) Desa berkewajiban: Melindungi persatuan, meningkatkan kualitas hidup warga, mengembangkan demokrasi, pemberdayaan, dan pelayanan prima.'
          ]
        },
        {
          id: 'pasal-68',
          pasal: 'Pasal 68',
          title: 'Hak & Kewajiban Warga Desa',
          content: [
            '(1) Warga berhak: Meminta dan mendapatkan informasi transparan dari Pemerintah Desa, mengawasi jalannya pembangunan, memperoleh pelayanan setara, menyampaikan aspirasi, serta memilih dan dipilih.',
            '(2) Warga berkewajiban: Berpartisipasi aktif membangun lingkungan, menjaga kondusifitas wilayah, memelihara kegotongroyongan, dan melestarikan budaya.'
          ]
        }
      ]
    },
    {
      id: 'bab-7',
      title: 'BAB VII - PERATURAN DESA',
      summary: 'Mengatur hierarki peraturan hukum desa (Perdes, Peraturan Bersama, Perkades) serta keterlibatan warga dalam merumuskan peraturan.',
      articles: [
        {
          id: 'pasal-69',
          pasal: 'Pasal 69',
          title: 'Penyusunan Peraturan Desa',
          content: [
            '(1) Jenis peraturan terdiri atas: Peraturan Desa (Perdes), peraturan bersama Kepala Desa, dan peraturan Kepala Desa (Perkades).',
            '(2) Peraturan desa dilarang keras bertentangan dengan kepentingan umum dan peraturan perundangan yang lebih tinggi.',
            '(3) Rancangan peraturan wajib dikonsultasikan kepada warga desa untuk mendapat masukan partisipatif.'
          ]
        }
      ]
    },
    {
      id: 'bab-8',
      title: 'BAB VIII - KEUANGAN DESA DAN ASET DESA',
      summary: 'Mengatur sirkulasi dana desa (ADD minimal 10% dari dana perimbangan kabupaten), struktur APBDesa, dan asas tertib administrasi kekayaan/aset desa.',
      articles: [
        {
          id: 'pasal-72',
          pasal: 'Pasal 72',
          title: 'Sumber Pendapatan Desa',
          content: [
            '(1) Pendapatan Desa bersumber dari: a) Pendapatan Asli Desa (PADesa); b) Alokasi APBN (Dana Desa); c) Bagian hasil pajak & retribusi daerah kabupaten; d) Alokasi Dana Desa (ADD) sekurang-kurangnya 10% dari dana perimbangan kabupaten setelah dikurangi DAK; e) Bantuan keuangan provinsi/kabupaten; f) Hibah tidak mengikat.',
            '(2) Pengelolaan keuangan dipimpin Kepala Desa selaku pemegang kekuasaan utama.'
          ]
        },
        {
          id: 'pasal-76',
          pasal: 'Pasal 76',
          title: 'Klasifikasi Aset Desa',
          content: [
            '(1) Aset Desa dapat berupa tanah kas Desa, pasar desa, pasar hewan, tambatan perahu, bangunan desa, hutan desa, mata air milik desa, pemandian umum, dan aset lainnya.',
            '(2) Kekayaan milik desa yang berupa tanah disertifikatkan atas nama Pemerintah Desa secara sah.'
          ]
        }
      ]
    },
    {
      id: 'bab-9',
      title: 'BAB IX - PEMBANGUNAN DESA & SISTEM INFORMASI',
      summary: 'Mengatur proses perencanaan pembangunan (RPJMDes 6 tahun & RKPDes 1 tahun), keterbukaan data melalui Sistem Informasi Desa (SID), serta hak warga melakukan monitoring program.',
      articles: [
        {
          id: 'pasal-79',
          pasal: 'Pasal 79',
          title: 'Dokumen Perencanaan Desa',
          content: [
            '(1) Pemerintah Desa menyusun perencanaan mengacu pada daerah: a) Rencana Pembangunan Jangka Menengah Desa (RPJM Desa) untuk 6 tahun; b) Rencana Kerja Pemerintah Desa (RKP Desa) untuk 1 tahun.',
            '(2) Kedua dokumen ini ditetapkan dengan Peraturan Desa dan menjadi pedoman penyusunan anggaran belanja (APBDesa).'
          ]
        },
        {
          id: 'pasal-82',
          pasal: 'Pasal 82',
          title: 'Hak Pemantauan Warga',
          content: [
            '(1) Masyarakat Desa berhak mendapatkan informasi transparan mengenai rencana, anggaran, dan kemajuan pelaksanaan pembangunan.',
            '(2) Warga berhak memantau langsung dan melaporkan keluhan/temuan penyimpangan ke BPD dan Pemerintah Desa.'
          ]
        },
        {
          id: 'pasal-86',
          pasal: 'Pasal 86',
          title: 'Sistem Informasi Desa (SID)',
          content: [
            '(1) Desa berhak mengembangkan sistem informasi desa (SID) berbasis teknologi informasi untuk mempermudah pelayanan publik dan transparansi kependudukan.',
            '(2) Pemerintah Daerah wajib membina integrasi SID perangkat keras, lunak, dan SDM pengelolanya.'
          ]
        }
      ]
    }
  ];

  // Local Peraturan Desa Data
  const localRegulations = [
    {
      id: 'per-1',
      nomor: 'Peraturan Desa No. 2 Tahun 2024',
      tentang: 'Ketertiban Umum, Keamanan, dan Sistem Kependudukan Terintegrasi',
      tanggalDitetapkan: '12 Maret 2024',
      status: 'Berlaku',
      ringkasan: 'Mengatur ketertiban jam malam bertamu (maksimal pukul 22:00 WIB), kewajiban pelaporan 1x24 jam bagi tamu/pendatang baru kepada kepala dusun, serta koordinasi keaktifan pos ronda malam (Siskamling) di seluruh dusun.'
    },
    {
      id: 'per-2',
      nomor: 'Peraturan Desa No. 5 Tahun 2023',
      tentang: 'Perlindungan Saluran Irigasi Sawah dan Kelestarian Sungai Desa',
      tanggalDitetapkan: '05 September 2023',
      status: 'Berlaku',
      ringkasan: 'Melarang pembuangan sampah rumah tangga maupun limbah plastik ke dalam saluran air irigasi sawah dan aliran sungai. Menertibkan tata guna tanah pematang sawah serta mengatur sanksi denda bagi pelanggar kebersihan air desa.'
    },
    {
      id: 'per-3',
      nomor: 'Peraturan Desa No. 1 Tahun 2022',
      tentang: 'Pengelolaan Air Irigasi Persawahan Secara Adil (Sistem Subak Desa)',
      tanggalDitetapkan: '20 Januari 2022',
      status: 'Berlaku',
      ringkasan: 'Mengatur regulasi pembagian debit aliran air secara berkala dan bergiliran antar kelompok tani di Dusun I dan Dusun IV demi menanggulangi risiko kekeringan tanaman padi pada puncak musim kemarau.'
    },
    {
      id: 'per-4',
      nomor: 'Peraturan Desa No. 4 Tahun 2021',
      tentang: 'Perlindungan Sempadan Sungai & Pencegahan Pencemaran Lingkungan',
      tanggalDitetapkan: '18 November 2021',
      status: 'Berlaku',
      ringkasan: 'Melarang pembuangan sampah atau limbah ke bantaran sungai, mengatur sanksi denda bagi pelaku pencemaran air sungai, serta menetapkan zona penghijauan pohon pelindung di sepanjang aliran sungai desa.'
    }
  ];

  // Toggle expand/collapse for a specific article
  const toggleArticle = (id: string) => {
    setExpandedArticles(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Copy text helper
  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Filter and search logic
  const filteredArticles = useMemo(() => {
    let result: { chapterTitle: string; article: Article }[] = [];

    uuChapters.forEach(chap => {
      if (selectedChapter === 'all' || selectedChapter === chap.id) {
        chap.articles.forEach(art => {
          const matchQuery = 
            art.pasal.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            art.content.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));

          if (matchQuery) {
            result.push({
              chapterTitle: chap.title,
              article: art
            });
          }
        });
      }
    });

    return result;
  }, [searchQuery, selectedChapter]);

  // Fake print function
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      
      {/* Main Legal Foundations Info */}
      <div className="bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl p-6 sm:p-8 border border-emerald-500/10 dark:border-emerald-500/5 shadow-md flex flex-col md:flex-row items-start gap-6">
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 shrink-0">
          <Scale className="w-8 h-8" />
        </div>
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Salinan Undang-Undang Republik Indonesia Nomor 6 Tahun 2014 Tentang Desa
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
            Undang-undang ini merupakan landasan yuridis utama yang menempatkan desa sebagai subjek pembangunan nasional yang mandiri, berdaulat atas hak asal usul, memiliki wewenang lokal berskala desa, serta mengatur sinergitas Pemerintahan Desa bersama Badan Permusyawaratan Desa (BPD).
          </p>
          <div className="flex flex-wrap gap-2.5 pt-1.5">
            <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full font-bold border border-slate-200/50 dark:border-slate-700/50">
              Ditetapkan: 30 Desember 2015
            </span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3 py-1 rounded-full font-bold border border-emerald-500/20">
              Status: Berlaku Nasional
            </span>
          </div>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-sm">
        
        {/* Search Input */}
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari Pasal atau kata kunci..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-400 text-slate-900 dark:text-white font-medium"
          />
        </div>

        {/* Chapter Select Filter */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <span className="text-xs text-slate-500 font-bold hidden md:inline shrink-0">Pilih Bab:</span>
          <select
            value={selectedChapter}
            onChange={(e) => setSelectedChapter(e.target.value)}
            className="w-full sm:w-auto px-4 py-2 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:border-emerald-500 text-slate-700 dark:text-slate-300 font-bold"
          >
            <option value="all">Semua BAB (I s/d IX)</option>
            {uuChapters.map(chap => (
              <option key={chap.id} value={chap.id}>{chap.title.split(' - ')[0]}</option>
            ))}
          </select>

          <button
            onClick={handlePrint}
            className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-xl transition-all cursor-pointer"
            title="Cetak Regulasi"
          >
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Articles Feed */}
      <div className="space-y-8">
        {selectedChapter !== 'all' && searchQuery === '' && (
          <div className="bg-slate-100/60 dark:bg-slate-900/40 p-5 rounded-2xl border border-slate-200/40 dark:border-slate-800/40">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Cakupan Bab Terpilih:</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
              {uuChapters.find(c => c.id === selectedChapter)?.summary}
            </p>
          </div>
        )}

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">Pencarian Tidak Ditemukan</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
              Coba masukkan kata kunci hukum lain seperti "BPD", "Kepala Desa", "Masa Jabatan", atau nomor pasal spesifik.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredArticles.map(({ chapterTitle, article }) => {
              const isExpanded = expandedArticles[article.id] ?? true;
              const fullArticleText = `${article.pasal}: ${article.title}\n${article.content.join('\n')}`;

              return (
                <div
                  key={article.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-lg transition-all"
                >
                  {/* Accordion Trigger Header */}
                  <div 
                    onClick={() => toggleArticle(article.id)}
                    className="p-5 flex justify-between items-center cursor-pointer select-none"
                  >
                    <div className="space-y-1 pr-4">
                      <span className="text-[9px] font-bold text-emerald-600 dark:text-accent-gold uppercase tracking-wider block">
                        {chapterTitle}
                      </span>
                      <h4 className="text-sm sm:text-base font-extrabold text-slate-950 dark:text-white flex items-center gap-2">
                        {article.pasal}
                        <span className="text-xs sm:text-sm font-semibold text-slate-400 dark:text-slate-500">• {article.title}</span>
                      </h4>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCopyText(fullArticleText, article.id);
                        }}
                        className="p-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-800 text-slate-400 hover:text-emerald-600 transition-colors border border-slate-200/30 dark:border-slate-800/30 cursor-pointer"
                        title="Salin Ayat"
                      >
                        {copiedId === article.id ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                    </div>
                  </div>

                  {/* Expanding Content Block */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 dark:border-slate-800/60 animate-in fade-in duration-200">
                      <div className="space-y-2.5 max-w-3xl">
                        {article.content.map((paragraph, index) => (
                          <p 
                            key={index} 
                            className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
