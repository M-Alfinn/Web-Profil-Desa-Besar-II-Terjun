import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfilDesa from './components/ProfilDesa';
import StrukturPemerintah from './components/StrukturPemerintah';
import PotensiDesa from './components/PotensiDesa';
import UMKMSection from './components/UMKMSection';
import GaleriSection from './components/GaleriSection';
import FasilitasUmum from './components/FasilitasUmum';
import VideoDesa from './components/VideoDesa';
import LokasiDesa from './components/LokasiDesa';
import KKNSection from './components/KKNSection';
import Footer from './components/Footer';
import DemographicsDashboard from './components/DemographicsDashboard';
import FungsiTugasPerangkat from './components/FungsiTugasPerangkat';
import StrukturBPD from './components/StrukturBPD';
import StrukturLKMD from './components/StrukturLKMD';
import NewsSlideshow from './components/NewsSlideshow';
import UserAvatar from './components/UserAvatar';
import { 
  mockBerita, 
  mockAgenda, 
  mockPeraturan,
  mockUMKM,
  mockFasilitas
} from './data';
import { 
  ChevronUp, MessageSquare, Landmark, Calendar, Clock, GraduationCap,
  MapPin, BookOpen, FileText, ChevronRight, ChevronLeft, User, ArrowLeft, Download, ExternalLink, ShieldAlert
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('beranda');
  const [subView, setSubView] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [activeUmkmIndex, setActiveUmkmIndex] = useState<number>(0);
  const [activeFasilitasIndex, setActiveFasilitasIndex] = useState<number>(0);

  // Auto-play interval for Kilas UMKM and Kilas Fasilitas
  useEffect(() => {
    const umkmTimer = setInterval(() => {
      setActiveUmkmIndex((prev) => (prev + 3) % mockUMKM.length);
    }, 5500);

    const fasTimer = setInterval(() => {
      setActiveFasilitasIndex((prev) => (prev + 3) % mockFasilitas.length);
    }, 6000);

    return () => {
      clearInterval(umkmTimer);
      clearInterval(fasTimer);
    };
  }, []);

  // Force light mode theme
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

 // Scroll ke atas saat berita dipilih (atau ditutup) agar tidak terbuka di tengah halaman
  useEffect(() => {
    // Timeout kecil memastikan DOM telah selesai dirender terlebih dahulu sebelum memindahkan posisi scroll
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }, 60);
    return () => clearTimeout(timer);
  }, [selectedArticle]);

  const handleNavigate = (view: string, sub?: string) => {
    setCurrentView(view);
    setSubView(sub || '');
    setSelectedArticle(null); // Reset news reader if navigating away
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDownloadFile = (nomor: string) => {
    alert(`File dokumen digital untuk ${nomor} sedang dipersiapkan oleh sekretariat desa. Silakan hubungi kantor balai desa untuk salinan fisik.`);
  };

  // Motion page transition configuration
  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-100 transition-colors duration-300">
      
      {/* Sticky Top Navigation Panel */}
      <Navbar
        currentView={currentView}
        subView={subView}
        onNavigate={handleNavigate}
      />

      {/* Main Container */}
      <main className={`relative min-h-[70vh] ${currentView === 'beranda' ? 'pt-0' : 'pt-16'}`}>
        <AnimatePresence mode="wait">
          
          {/* 1. VIEW: BERANDA */}
          {currentView === 'beranda' && (
            <motion.div
              key="beranda"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-16 pb-20"
            >
              {/* Cover & Slider banner */}
              <Hero
                onExplore={() => handleNavigate('profil_desa', 'profil')}
                onAboutKKN={() => handleNavigate('tentang_kkn')}
              />

              {/* Sambutan & Pengantar KKN (No Green Highlights) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-slate-200/50 dark:border-slate-800/80 shadow-xl">
                  <div className="grid md:grid-cols-12 gap-10 items-center">
                    
                    {/* Image Column */}
                    <div className="md:col-span-5 relative">
                      <img
                        src="\Foto\Tentang Desa\pak kades.png"
                        alt="Kepala Desa Besar II Terjun"
                        className="rounded-2xl shadow-md w-full object-cover aspect-[4/5] object-top border border-slate-100 dark:border-slate-800"
                      />
                      <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-slate-900/90 dark:bg-slate-950/90 text-white border border-white/10 hidden sm:block max-w-xs">
                        <span className="text-emerald-400 font-extrabold text-xs uppercase tracking-wider block">SULAIMANSYAH</span>
                        <p className="text-[10px] text-slate-300 font-medium">Kepala Desa Besar II Terjun</p>
                      </div>
                    </div>

                    {/* Speech Text Column */}
                    <div className="md:col-span-7 space-y-6">
                      <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-amber-400 uppercase">
                        KATA PENGANTAR KEPALA DESA
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                        Selamat Datang di Portal Informasi Desa
                      </h2>
                      <div className="h-1 w-16 bg-slate-400 dark:bg-amber-400 rounded-full" />
                      
                      <div className="text-slate-600 dark:text-slate-400 text-sm sm:text-base space-y-4 leading-relaxed font-normal">
                        <p>
                          Assalamualaikum Warahmatullahi Wabarakatuh, Selamat Sejahtera untuk kita semua.
                        </p>
                        <p>
                          Selamat datang di website profil <strong>Desa Besar II Terjun</strong>! Website ini dibuat bersama dengan adik-adik mahasiswa <strong>KKN Universitas Negeri Medan (UNIMED) 2026</strong> untuk mengenalkan desa kami lebih luas lagi kepada masyarakat banyak.
                        </p>
                        <p>
                          Melalui website ini, kami ingin menampilkan berbagai potensi yang ada di desa kami, mulai dari hamparan sawah pertanian yang luas, area perkebunan rakyat yang produktif, hingga produk kerajinan anyaman pandan hasil karya kreatif warga setempat.
                        </p>
                        <p>
                          Di sini, Anda juga bisa melihat dokumentasi kegiatan KKN dan informasi seputar desa kami. Kami harap website ini bisa membantu siapa saja yang ingin mengenal lebih dekat atau berkunjung ke Desa Besar II Terjun. Semoga bermanfaat!
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              {/* 1. Standalone Section: Sejarah Singkat Desa (Elegant Editorial Style with Image) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
                  {/* Left Column: Crisp Asymmetric Image */}
                  <div className="md:col-span-5 relative">
                    <div className="aspect-[4/5] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <img 
                        src="\Foto\Tentang Desa\Sejarah2.png" 
                        alt="Sejarah Desa Besar II Terjun" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 border-r border-b border-emerald-600/40" />
                  </div>
                  
                  {/* Right Column: Editorial Text */}
                  <div className="md:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-700">
                        <BookOpen className="w-4 h-4" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Asal-Usul & Kronologi</span>
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                        Sejarah Singkat Desa
                      </h3>
                      <div className="h-[2px] w-16 bg-emerald-600" />
                    </div>
                    
                    <div className="text-xs sm:text-sm text-slate-600 space-y-4 leading-relaxed font-normal">
                      <p>
                        Awal mula <strong className="text-slate-900 font-extrabold">Desa Besar II Terjun</strong> dibuka pertama kali pada tahun 1941 di masa kolonial Belanda. Awalnya wilayah ini mencakup dua kampung yang cukup luas, yaitu Kampung Besar I dan Kampung Besar II.
                      </p>
                      <p>
                        Pada sekitar tahun 1948, demi efisiensi administrasi, kedua kampung tersebut disatukan menjadi satu desa yang utuh. Karena pusat kantor pemerintahan desa diletakkan di Kampung Besar II, maka para tetua bersepakat menamai hasil penggabungan ini sebagai Desa Besar II Terjun. Nama "Terjun" sendiri terinspirasi dari keberadaan sebuah air terjun di Kampung Besar I yang terletak di perbatasan Dusun VII dengan Desa Lubuk Cemara.
                      </p>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleNavigate('profil_desa', 'sejarah')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer hover:underline transition-all"
                      >
                        Baca Kronologi Lengkap Kepemimpinan <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. Standalone Section: Profil Geografis (Sleek Typographic Layout - No Image, No Card Body) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100 dark:border-slate-900">
                <div className="grid md:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Typographic Header with side accent line */}
                  <div className="md:col-span-4 pl-4 border-l-2 border-emerald-600 space-y-2">
                    <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest block">Letak Wilayah & Geografi</span>
                    <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
                      Profil Wilayah & Batas Alam
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">Karakteristik Pertanian & Kebun Desa</p>
                  </div>
                  
                  {/* Right Column: Information Flow */}
                  <div className="md:col-span-8 space-y-6">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Desa Besar II Terjun memiliki bentangan alam agraris yang sangat indah dan khas. Wilayah desa didominasi oleh hamparan sawah irigasi teknis yang subur dan luas, serta didukung oleh area perkebunan rakyat dan kebun campuran yang menjadi tumpuan warga.
                    </p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 dark:border-slate-900">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Batas Wilayah Utara</span>
                        <p className="text-xs text-slate-700 font-bold">Desa Tetangga / Akses ke Arah Laut</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">Batas Wilayah Selatan</span>
                        <p className="text-xs text-slate-700 font-bold">Kampung Besar I / Desa Lubuk Cemara</p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleNavigate('profil_desa', 'profil')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer hover:underline transition-all"
                      >
                        Eksplor Peta & Batas Wilayah Dusun <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. Standalone Section: Potensi Desa & UMKM (Modern Sprout-accent Grid with Image on Right) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-slate-100 dark:border-slate-900">
                <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-center">
                  {/* Left Column: Pillars & Details */}
                  <div className="md:col-span-7 space-y-6 order-2 md:order-1">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-emerald-700">
                        <Landmark className="w-4.5 h-4.5 shrink-0" />
                        <span className="text-[10px] font-bold uppercase tracking-widest block">Ekonomi, Sawah, & Kerajinan</span>
                      </div>
                      <h3 className="text-3xl font-extrabold text-slate-950 tracking-tight">
                        Potensi Desa & Sektor UMKM
                      </h3>
                      <div className="h-[2px] w-16 bg-emerald-600" />
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      Potensi terbesar Desa Besar II Terjun berpusat pada bentangan sawah padi yang subur serta area perkebunan rakyat dan tanaman pangan lainnya yang dikelola secara swadaya oleh warga, disandingkan dengan kreativitas produk UMKM anyaman pandan bernilai seni tinggi.
                    </p>

                    {/* Minimal Typographic Pillars List */}
                    <div className="space-y-3.5 pt-2">
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Sektor Pertanian Sawah</span>
                          <p className="text-[11px] text-slate-500">Hamparan padi sawah subur dan budidaya tanaman hortikultura sayuran hijau.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Sektor Perkebunan Rakyat</span>
                          <p className="text-[11px] text-slate-500">Pengelolaan kebun rakyat dan tanaman campuran yang produktif oleh warga desa.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mt-1.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">Ekonomi Kreatif Anyaman Pandan</span>
                          <p className="text-[11px] text-slate-500">Kerajinan tangan anyaman berbahan dasar tanaman pandan hutan lokal.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button 
                        onClick={() => handleNavigate('informasi_desa', 'umkm_info')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 cursor-pointer hover:underline transition-all"
                      >
                        Lihat Profil UMKM & Cara Memesan <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Beautiful Landscape with simple subtle border */}
                  <div className="md:col-span-5 order-1 md:order-2">
                    <div className="aspect-[4/3] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md">
                      <img 
                        src="\Foto\Tentang Desa\1.jpg" 
                        alt="Potensi Sawah & Ekonomi Desa" 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary: Statistik Demografi Penting */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/60 dark:border-slate-800/80 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900 dark:text-white">Statistik Keadaan Penduduk</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-normal font-medium">Gambaran umum kependudukan dan dinamika mutasi terkini Desa Besar II Terjun.</p>
                    </div>
                    <button 
                      onClick={() => handleNavigate('data_desa', 'keadaan_penduduk')}
                      className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-xl transition-colors cursor-pointer self-start sm:self-center"
                    >
                      Eksplor Data Lengkap
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Total Penduduk</span>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">5.011 Jiwa</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">2.588 Laki-laki & 2.422 Perempuan</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Total Kepala Keluarga</span>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">1.406 KK</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Tersebar di 8 Dusun Desa</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Dusun Terpadat</span>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">Dusun II</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Dihuni oleh 852 Jiwa</span>
                    </div>

                    <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between">
                      <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Dinamika Mutasi</span>
                      <span className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mt-1">+11 Jiwa</span>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">11 Datang, 1 Meninggal Dunia</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Summary: Struktur Organisasi (Jabatan Utama 1-6) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h4 className="font-extrabold text-base text-slate-900">Struktur Pemerintah Desa (Jabatan Utama)</h4>
                      <p className="text-xs text-slate-500 mt-1 font-normal">Kepemimpinan teras Desa Besar II Terjun yang melayani seluruh masyarakat.</p>
                    </div>
                    <button 
                      onClick={() => handleNavigate('pemerintah_desa', 'struktur')}
                      className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold rounded-xl transition-colors cursor-pointer self-start sm:self-center"
                    >
                      Lihat Bagan Lengkap (14 Perangkat)
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {[
                      { nama: 'SULAIMANSYAH', jabatan: 'KEPALA DESA', jenisKelamin: 'L' as const },
                      { nama: 'AHMAD RAMDANI, S.Pd', jabatan: 'SEKRETARIS DESA', jenisKelamin: 'L' as const },
                      { nama: 'YAKOB', jabatan: 'KASI PEMERINTAHAN', jenisKelamin: 'L' as const },
                      { nama: 'LILI AGUSTINA', jabatan: 'KASI KESRA & PELAYANAN', jenisKelamin: 'P' as const },
                      { nama: 'ZUBARDIN', jabatan: 'KAUR KEUANGAN', jenisKelamin: 'L' as const },
                      { nama: 'RAHMAD', jabatan: 'KAUR UMUM & RENCANA', jenisKelamin: 'L' as const },
                    ].map((staf, idx) => (
                      <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center space-y-2.5">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                          <UserAvatar gender={staf.jenisKelamin} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <span className="text-[8px] font-black text-emerald-600 block leading-tight uppercase tracking-wider">{staf.jabatan}</span>
                          <h5 className="font-bold text-[10.5px] text-slate-800 mt-1 line-clamp-2 leading-tight">{staf.nama}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Parallel Kilas Berita Terbaru & Agenda Kegiatan */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid lg:grid-cols-12 gap-8">
                  
                  {/* Kilas Berita Column */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex justify-between items-end pb-3 border-b border-slate-200/50 dark:border-slate-800/80">
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">Update Terkini</span>
                        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">Kilas Berita Desa</h4>
                      </div>
                      <button
                        onClick={() => handleNavigate('berita')}
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Semua Berita <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {mockBerita.slice(0, 2).map((news) => (
                        <div
                          key={news.id}
                          className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 overflow-hidden shadow-sm flex flex-col justify-between"
                        >
                          <div>
                            <img
                              src={news.gambar}
                              alt={news.judul}
                              className="w-full h-32 object-cover object-center"
                            />
                            <div className="p-4 space-y-2">
                              <div className="flex justify-between items-center text-[10px] text-slate-400 font-semibold">
                                <span className="uppercase text-emerald-600 dark:text-emerald-400">{news.kategori}</span>
                                <span>{news.tanggal}</span>
                              </div>
                              <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm line-clamp-2 leading-snug">
                                {news.judul}
                              </h5>
                              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
                                {news.ringkasan}
                              </p>
                            </div>
                          </div>
                          <div className="p-4 pt-0">
                            <button
                              onClick={() => {
                                setSelectedArticle(news);
                                setCurrentView('berita');
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="w-full py-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-center text-xs font-bold text-slate-700 dark:text-slate-300 rounded-xl transition-colors cursor-pointer"
                            >
                              Baca Selengkapnya
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Kilas Agenda Column */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="flex justify-between items-end pb-3 border-b border-slate-200/50 dark:border-slate-800/80">
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-bold">Kalender Agenda</span>
                        <h4 className="text-lg font-extrabold text-slate-900 dark:text-white">Agenda Kegiatan</h4>
                      </div>
                      <button
                        onClick={() => handleNavigate('agenda')}
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        Semua Agenda <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      {mockAgenda.slice(0, 3).map((agd) => (
                        <div
                          key={agd.id}
                          className="p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-800/60 shadow-sm flex items-start space-x-4"
                        >
                          <div className="p-3 bg-emerald-500/10 rounded-xl text-center shrink-0 min-w-16">
                            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase truncate">
                              {'bulan' in agd ? agd.bulan : 'Agustus'}
                            </span>
                            <span className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 block leading-none mt-0.5">
                              {agd.tanggal.split(' ')[0]}
                            </span>
                            {'tahun' in agd && (
                              <span className="text-[9px] font-semibold text-slate-400 dark:text-slate-500 block mt-0.5">
                                {agd.tahun}
                              </span>
                            )}
                          </div>
                          <div className="space-y-1 text-left min-w-0 flex-1">
                            <h5 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-tight truncate">
                              {agd.judul}
                            </h5>
                            <div className="flex flex-wrap gap-2 text-[10px] text-slate-400 font-medium">
                              {'penulis' in agd && (
                                <span className="flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 px-1 rounded">
                                  Oleh: {agd.penulis}
                                </span>
                              )}
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-emerald-600" /> {agd.waktu}
                              </span>
                              <span className="flex items-center gap-1 truncate max-w-[150px]">
                                <MapPin className="w-3 h-3 text-emerald-600" /> {agd.tempat}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Small map and route helper */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md space-y-3">
                      <div>
                        <span className="text-[10px] font-extrabold text-emerald-200 uppercase tracking-widest block mb-0.5">Letak Geografi</span>
                        <h5 className="font-bold text-sm">Lokasi & Navigasi Desa</h5>
                        <p className="text-[11px] text-emerald-100 font-normal leading-snug">Butuh panduan arah perjalanan menuju Desa Besar II Terjun? Klik rute resmi di bawah ini.</p>
                      </div>
                      <button
                        onClick={() => handleNavigate('kontak')}
                        className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-950 text-xs font-bold rounded-xl transition-all hover:scale-105 cursor-pointer flex items-center space-x-1.5"
                      >
                        <span>Lihat Peta Lengkap</span>
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
                      </button>
                    </div>

                  </div>

                </div>
              </section>

              {/* Kilas UMKM Desa */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-slate-100 dark:border-slate-900">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-bold">Ekonomi Kreatif</span>
                      <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-0.5">Kilas UMKM Unggulan Desa</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">Daftar usaha mikro dan industri rumah tangga unggulan masyarakat desa.</p>
                    </div>
                    
                    {/* Carousel Controls */}
                    <div className="flex items-center gap-2.5 self-start sm:self-center">
                      <button 
                        onClick={() => setActiveUmkmIndex((prev) => (prev - 3 + mockUMKM.length) % mockUMKM.length)}
                        className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer text-slate-600 dark:text-slate-400"
                        title="Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setActiveUmkmIndex((prev) => (prev + 3) % mockUMKM.length)}
                        className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer text-slate-600 dark:text-slate-400"
                        title="Berikutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleNavigate('informasi_desa', 'umkm_info')}
                        className="ml-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1"
                      >
                        Semua UMKM
                      </button>
                    </div>
                  </div>

                  {/* Rotating Card Window */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[0, 1, 2].map((offset) => {
                      const itemIndex = (activeUmkmIndex + offset) % mockUMKM.length;
                      const item = mockUMKM[itemIndex];
                      return (
                        <motion.div 
                          key={`${item.id}-${activeUmkmIndex}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: offset * 0.08 }}
                          className={`group bg-slate-50/75 dark:bg-slate-950/40 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 ${
                            offset > 0 ? 'hidden sm:flex' : 'flex'
                          } ${offset > 1 ? 'sm:hidden md:flex' : ''}`}
                        >
                          <div>
                            <div className="aspect-[16/10] overflow-hidden relative">
                              <img 
                                src={item.foto} 
                                alt={item.nama}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <span className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-extrabold tracking-wider bg-white/95 text-slate-800 rounded-lg shadow-sm uppercase">
                                {item.kategori}
                              </span>
                            </div>
                            <div className="p-4 space-y-2">
                              <h5 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">{item.nama}</h5>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">{item.deskripsi}</p>
                              {item.pemilik && (
                                <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-1.5">
                                  <span className="font-semibold text-slate-600 dark:text-slate-300">Pemilik:</span> {item.pemilik}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="p-4 pt-0">
                            <button 
                              onClick={() => handleNavigate('informasi_desa', 'umkm_info')}
                              className="w-full py-2 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-center text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                              Hubungi Penjual
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Indicators / Pagination Dots */}
                  <div className="flex justify-center gap-1.5 pt-2">
                    {Array.from({ length: Math.ceil(mockUMKM.length / 3) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveUmkmIndex(i * 3)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          Math.floor(activeUmkmIndex / 3) === i ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-200 dark:bg-slate-800'
                        }`}
                        title={`Grup ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* Kilas Fasilitas Desa */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block font-bold">Infrastruktur & Layanan</span>
                      <h4 className="font-extrabold text-base text-slate-900 dark:text-white mt-0.5">Kilas Fasilitas Umum Desa</h4>
                      <p className="text-xs text-slate-500 mt-0.5 font-normal">Fasilitas ibadah, pendidikan, kesehatan, dan olahraga yang melayani kebutuhan warga.</p>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex items-center gap-2.5 self-start sm:self-center">
                      <button 
                        onClick={() => setActiveFasilitasIndex((prev) => (prev - 3 + mockFasilitas.length) % mockFasilitas.length)}
                        className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer text-slate-600 dark:text-slate-400"
                        title="Sebelumnya"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => setActiveFasilitasIndex((prev) => (prev + 3) % mockFasilitas.length)}
                        className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors cursor-pointer text-slate-600 dark:text-slate-400"
                        title="Berikutnya"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleNavigate('informasi_desa', 'fasilitas_info')}
                        className="ml-2 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-xl transition-colors cursor-pointer flex items-center gap-1"
                      >
                        Semua Fasilitas
                      </button>
                    </div>
                  </div>

                  {/* Rotating Card Window */}
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[0, 1, 2].map((offset) => {
                      const itemIndex = (activeFasilitasIndex + offset) % mockFasilitas.length;
                      const item = mockFasilitas[itemIndex];
                      return (
                        <motion.div 
                          key={`${item.id}-${activeFasilitasIndex}`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: offset * 0.08 }}
                          className={`group bg-slate-50/75 dark:bg-slate-950/40 rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 ${
                            offset > 0 ? 'hidden sm:flex' : 'flex'
                          } ${offset > 1 ? 'sm:hidden md:flex' : ''}`}
                        >
                          <div>
                            <div className="aspect-[16/10] overflow-hidden relative">
                              <img 
                                src={item.foto} 
                                alt={item.nama}
                                referrerPolicy="no-referrer"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            </div>
                            <div className="p-4 space-y-2">
                              <h5 className="font-bold text-slate-900 dark:text-white text-sm line-clamp-1">{item.nama}</h5>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">{item.deskripsi}</p>
                              <div className="pt-2 text-[11px] text-slate-450 flex items-center gap-1 font-medium">
                                <MapPin className="w-3 h-3 text-emerald-600 shrink-0" /> <span className="truncate">{item.lokasiText}</span>
                              </div>
                            </div>
                          </div>
                          <div className="p-4 pt-0">
                            <button 
                              onClick={() => handleNavigate('informasi_desa', 'fasilitas_info')}
                              className="w-full py-2 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-center text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-sm border border-slate-100 dark:border-slate-800"
                            >
                              Lihat Lokasi Detail
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Indicators / Pagination Dots */}
                  <div className="flex justify-center gap-1.5 pt-2">
                    {Array.from({ length: Math.ceil(mockFasilitas.length / 3) }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveFasilitasIndex(i * 3)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          Math.floor(activeFasilitasIndex / 3) === i ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-200 dark:bg-slate-800'
                        }`}
                        title={`Grup ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* KKN UNIMED 2026 (At the absolute bottom of Beranda) */}
              <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="bg-gradient-to-br from-emerald-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-md space-y-5 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 max-w-3xl">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/10 rounded-xl text-emerald-400">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest block text-slate-300">Pengabdian KKN</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-black text-white">KKN Universitas Negeri Medan 2026</h4>
                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      Kolaborasi aktif tim mahasiswa <strong>Universitas Negeri Medan (UNIMED)</strong> dalam memelopori digitalisasi pelayanan publik, pembuatan website portal desa, pemetaan UMKM lokal, bimbingan belajar anak, serta literasi digital guna mewujudkan kemandirian masyarakat.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-2">
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5 min-w-[140px]">
                        <span className="text-sm font-black text-emerald-400 block">20 Mahasiswa</span>
                        <span className="text-[10px] text-slate-300">Lintas disiplin fakultas</span>
                      </div>
                      <div className="bg-white/5 rounded-xl p-3 border border-white/5 min-w-[140px]">
                        <span className="text-sm font-black text-emerald-400 block">42 Hari Kerja</span>
                        <span className="text-[10px] text-slate-300">Dharma bakti nyata</span>
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <button 
                      onClick={() => handleNavigate('tentang_kkn')}
                      className="px-5 py-3 bg-white hover:bg-slate-100 text-slate-950 text-xs font-extrabold rounded-xl transition-all hover:scale-105 cursor-pointer inline-flex items-center gap-1.5"
                    >
                      Lihat Program KKN <ChevronRight className="w-4 h-4 text-emerald-600" />
                    </button>
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {/* 2. VIEW: PROFIL DESA */}
          {currentView === 'profil_desa' && (
            <motion.div
              key="profil_desa"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-10 space-y-12"
            >
              {subView === 'potensi' ? (
                <div className="animate-in fade-in duration-300">
                  <PotensiDesa />
                </div>
              ) : subView === 'sejarah' ? (
                <div className="animate-in fade-in duration-300">
                  <ProfilDesa mode="sejarah" />
                </div>
              ) : (
                <div className="animate-in fade-in duration-300">
                  <ProfilDesa mode="profil" />
                </div>
              )}
            </motion.div>
          )}

          {/* 3. VIEW: PEMERINTAH DESA */}
          {currentView === 'pemerintah_desa' && (
            <motion.div
              key="pemerintah_desa"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-10 space-y-12"
            >
              {subView === 'visi_misi' && (
                <div className="animate-in fade-in duration-300">
                  <ProfilDesa mode="visi_misi" />
                </div>
              )}
              {subView === 'struktur' && (
                <div className="animate-in fade-in duration-300">
                  <StrukturPemerintah />
                </div>
              )}
              {subView === 'fungsi_tugas' && (
                <div className="animate-in fade-in duration-300">
                  <FungsiTugasPerangkat />
                </div>
              )}
              {subView === 'struktur_bpd' && (
                <div className="animate-in fade-in duration-300">
                  <StrukturBPD />
                </div>
              )}
              {subView === 'struktur_lkmd' && (
                <div className="animate-in fade-in duration-300">
                  <StrukturLKMD />
                </div>
              )}
            </motion.div>
          )}

          {/* 4. VIEW: INFORMASI DESA */}
          {currentView === 'informasi_desa' && (
            <motion.div
              key="informasi_desa"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-10 space-y-12 animate-in fade-in duration-300"
            >
              {subView === 'potensi_info' && <PotensiDesa />}
              {subView === 'umkm_info' && <UMKMSection />}
              {subView === 'fasilitas_info' && <FasilitasUmum />}
              {subView === 'galeri_info' && <GaleriSection />}
              {subView === 'video_desa' && <VideoDesa />}
            </motion.div>
          )}

          {/* 5. VIEW: BERITA DESA */}
          {currentView === 'berita' && (
            <motion.div
              key="berita"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
            >
              <AnimatePresence mode="wait">
                {selectedArticle ? (
                  /* Single news article viewer */
                  <motion.div
                    key="article-viewer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-3xl mx-auto bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-2xl overflow-hidden"
                  >
                    {/* Header Image (with interactive 3-photo slideshow support) */}
                    <NewsSlideshow 
                      images={selectedArticle.gambars} 
                      defaultImage={selectedArticle.gambar} 
                      title={selectedArticle.judul} 
                    />
                    
                    {/* Content Box */}
                    <div className="p-6 sm:p-10 space-y-6">
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Kembali Ke Berita</span>
                      </button>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-xs text-slate-400 font-bold uppercase tracking-wide">
                          <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                            {selectedArticle.kategori}
                          </span>
                          <span>•</span>
                          <span>{selectedArticle.tanggal}</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white leading-tight">
                          {selectedArticle.judul}
                        </h2>
                      </div>

                      <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                      <div className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed space-y-6 font-normal">
                        {selectedArticle.konten.split('\n\n').map((paragraph: string, idx: number) => (
                          <p key={idx}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs text-slate-500">
                        <span className="flex items-center gap-1.5 font-semibold">
                          {/* <User className="w-4 h-4" /> Penulis: {selectedArticle.penulis} */}
                        </span>
                        <span>Sumber: Tim KKN UNIMED &  Web resmi desa</span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  /* News List Grid */
                  <motion.div
                    key="news-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-12"
                  >
                    {/* Page Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4">
                      <span className="inline-block mb-3 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                        Media Jurnalistik Desa
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                        Kabar & Berita Desa Besar II Terjun
                      </h2>
                      <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                        Ikuti perkembangan program pembangunan fisik, penyaluran bantuan sosial, kegiatan kemasyarakatan, serta inovasi digital pengabdian KKN UNIMED.
                      </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-8">
                      {mockBerita.map((news) => (
                        <div
                          key={news.id}
                          className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                        >
                          <div>
                            <img
                              src={news.gambar}
                              alt={news.judul}
                              className="w-full h-48 object-cover object-center"
                            />
                            <div className="p-6 space-y-3">
                              <div className="flex justify-between items-center text-[10px] text-slate-400 font-extrabold uppercase tracking-widest">
                                <span className="text-emerald-600 dark:text-emerald-400">{news.kategori}</span>
                                <span>{news.tanggal}</span>
                              </div>
                              <h3 className="font-extrabold text-slate-950 dark:text-white text-base leading-snug group-hover:text-emerald-600">
                                {news.judul}
                              </h3>
                              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed font-normal">
                                {news.ringkasan}
                              </p>
                            </div>
                          </div>
                          <div className="p-6 pt-0">
                            <button
                              onClick={() => setSelectedArticle(news)}
                              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-center text-xs font-bold uppercase tracking-wider rounded-2xl transition-colors cursor-pointer shadow-md"
                            >
                              Buka Artikel Lengkap
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* 6. VIEW: AGENDA DESA */}
          {currentView === 'agenda' && (
            <motion.div
              key="agenda"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              {/* Page Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <span className="inline-block mb-3 text-xs font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
                  Kalender Publik
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
                  Agenda & Kegiatan Mendatang
                </h2>
                <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                  Lihat dan hadiri agenda kemasyarakatan, rapat musyawarah desa, program gotong-royong, dan bimbingan belajar kemerdekaan KKN UNIMED.
                </p>
              </div>

              {/* Agenda timeline list */}
              <div className="space-y-6">
                {mockAgenda.map((agd) => (
                  <div
                    key={agd.id}
                    className="p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-xl flex flex-col sm:flex-row gap-6 items-start"
                  >
                    {/* Date Block */}
                    <div className="p-4 bg-emerald-600 text-white rounded-2xl text-center shrink-0 w-24 sm:w-28 shadow-md">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest block opacity-90 truncate">
                        {'bulan' in agd ? agd.bulan : 'Agustus'}
                      </span>
                      <span className="text-3xl font-extrabold block leading-none mt-1">
                        {agd.tanggal.split(' ')[0]}
                      </span>
                      <span className="text-[10px] font-bold block mt-1">
                        {'tahun' in agd ? agd.tahun : '2026'}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white leading-snug">
                          {agd.judul}
                        </h4>
                        {'penulis' in agd && (
                          <span className="inline-flex items-center text-[10px] font-bold bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg w-fit">
                            Penulis: {agd.penulis}
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                        {agd.keterangan}
                      </p>

                      <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-emerald-600" />
                          <span>Waktu: {agd.waktu}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-emerald-600" />
                          <span>Tempat: {agd.tempat}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 7. VIEW: DATA DESA */}
          {currentView === 'data_desa' && (
            <motion.div
              key={`data_desa_${subView}`}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12"
            >
              <DemographicsDashboard initialSubTab={subView} onTabChange={(tab) => handleNavigate('data_desa', tab)} />
            </motion.div>
          )}

          {/* 9. VIEW: KONTAK */}
          {currentView === 'kontak' && (
            <motion.div
              key="kontak"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-10 animate-in fade-in duration-300"
            >
              <LokasiDesa />
            </motion.div>
          )}

          {/* 10. VIEW: TENTANG KKN */}
          {currentView === 'tentang_kkn' && (
            <motion.div
              key="tentang_kkn"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="py-10 animate-in fade-in duration-300"
            >
              <KKNSection />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Modern footer with specific non-official disclaimer */}
      <Footer onNavigate={handleNavigate} />

      {/* FLOATING ACTION PANELS (Back to Top) */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center animate-in fade-in zoom-in-75 duration-300 cursor-pointer"
          title="Kembali Ke Atas"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
