import { useState, useEffect } from 'react';
import { Sprout, Compass, Landmark, LayoutGrid, Heart, ChevronLeft, ChevronRight, Building2 } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onAboutKKN: () => void;
}

export default function Hero({ onExplore, onAboutKKN }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    '../assets/Foto/Tentang Desa/1.jpg',
    '../assets/Foto/Tentang Desa/2.jpg',
    '../assets/Foto/Tentang Desa/3.jpg',
  ];

  // Auto-play interval for background image slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const stats = [
    { label: 'Jumlah Dusun', value: '8 Dusun', desc: 'Dusun I s/d Dusun VIII', icon: Landmark },
    { label: 'Jumlah UMKM', value: '15+ Usaha', desc: 'Sentra Kuliner, Pertanian, & Kerajinan', icon: LayoutGrid },
    { label: 'Fasilitas Umum', value: '15+ Fasilitas', desc: 'Tempat Ibadah, Sekolah, & Posyandu', icon: Building2 },
    { label: 'Potensi Desa', value: 'Pertanian dan Kerajinan', desc: 'Sawah subur & ragam tanaman pangan', icon: Compass },
  ];

  return (
    <div id="beranda" className="w-full relative bg-slate-50 dark:bg-slate-950">
      
      {/* 1. IMMERSIVE WIDE SLIDER BACKDROP (EDGE-TO-EDGE) */}
      <div className="relative w-full h-[70vh] sm:h-[75vh] md:h-[80vh] overflow-hidden bg-slate-950">
        
        {/* Shifting Slides Layer */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            {/* The Image */}
            <img
              src={image}
              alt={`Lanskap Desa ${index + 1}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center brightness-[0.45] contrast-[1.05]"
            />
            
            {/* Soft Overlay to guarantee typography contrast & elegance */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/60" />
          </div>
        ))}
 
        {/* 2. CENTERED LEGIBLE TEXT OVERLAY (NOT COVERING THE PIC) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-12 z-10 select-none">
          <div className="max-w-4xl space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-500">
            
            {/* Title with drop-shadow so it pops out beautifully */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)] tracking-tight">
              Selamat Datang di Website Profil Desa Besar II Terjun
            </h1>

            {/* Description/Narrative positioned nicely */}
            <p className="text-sm sm:text-base md:text-lg text-slate-100 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)]">
              Portal informasi digital, potensi wilayah persawahan & perkebunan, sentra ekonomi kreatif UMKM warga, serta dokumentasi pengabdian KKN Universitas Negeri Medan.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={onExplore}
                className="px-6 sm:px-8 py-3.5 rounded-xl text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Jelajahi Desa
              </button>
            </div>

          </div>
        </div>

        {/* 3. SLIDER NAVIGATION ARROWS (ELEGANT SIDE GLASS BUTTONS) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/75 border border-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-slate-900/40 hover:bg-slate-900/75 border border-white/10 hover:border-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators / Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide
                  ? 'w-8 bg-emerald-500'
                  : 'w-2.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* 4. STATISTICS SECTION BELOW THE SLIDER (CLEAN & CLUTTER-FREE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full -mt-10 sm:-mt-12 relative z-30 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/80 shadow-2xl">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 p-3 hover:bg-slate-50 dark:hover:bg-slate-800/40 rounded-2xl transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shrink-0">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] sm:text-xs font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white block leading-tight">
                  {stat.value}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 block leading-tight">
                  {stat.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
