import React, { useState, useEffect } from 'react';
import { 
  Building2, School, HeartHandshake, Activity, Award, Milestone, 
  MapPin, HelpCircle, ChevronLeft, ChevronRight, Copy, Check, Navigation, ArrowRight 
} from 'lucide-react';
import { mockFasilitas } from '../data';
import { FasilitasUmum as FasilitasType } from '../types';
import { motion, AnimatePresence } from 'motion/react';

export default function FasilitasUmum() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeId, setActiveId] = useState<string>(mockFasilitas[0]?.id || '');
  const [currentImgIdx, setCurrentImgIdx] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const filteredFasilitas = selectedCategory === 'Semua'
    ? mockFasilitas
    : mockFasilitas.filter(f => f.kategori?.toLowerCase() === selectedCategory.toLowerCase());

  const activeFas = filteredFasilitas.find(f => f.id === activeId) || filteredFasilitas[0];

  useEffect(() => {
    if (filteredFasilitas.length > 0 && !filteredFasilitas.some(f => f.id === activeId)) {
      setActiveId(filteredFasilitas[0].id);
      setCurrentImgIdx(0);
    }
  }, [selectedCategory, filteredFasilitas, activeId]);

  const getFasilitasIcon = (iconName: string, className = "w-5 h-5") => {
    switch (iconName) {
      case 'Building2': return <Building2 className={className} />;
      case 'School': return <School className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'Activity': return <Activity className={className} />;
      case 'Award': return <Award className={className} />;
      case 'Milestone': return <Milestone className={className} />;
      default: return <HelpCircle className={className} />;
    }
  };

  const getFasilitasColor = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500/20';
      case 'School': return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border-blue-500/20';
      case 'HeartHandshake': return 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 border-amber-500/20';
      case 'Activity': return 'text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/40 border-rose-500/20';
      case 'Award': return 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 border-indigo-500/20';
      case 'Milestone': return 'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-950/40 border-teal-500/20';
      default: return 'text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 border-slate-500/20';
    }
  };

  const images = activeFas?.fotoList && activeFas.fotoList.length > 0 
    ? activeFas.fotoList 
    : [activeFas?.foto];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleCopyAddress = () => {
    if (!activeFas) return;
    navigator.clipboard.writeText(activeFas.lokasiText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSelectFas = (id: string) => {
    setActiveId(id);
    setCurrentImgIdx(0);
    setCopied(false);
  };

  return (
    <section id="fasilitas" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Aksesibilitas Warga
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Fasilitas Umum & Sarana Desa
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Pusat administrasi, sarana ibadah, instansi pendidikan, dan prasarana kesehatan yang menunjang mobilitas sosial serta kesejahteraan warga Desa Besar II Terjun.
          </p>
        </div>

        {/* KATEGORI FASILITAS & SARANA SELECTOR */}
        <div className="mb-10">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest px-1">
              Kategori Fasilitas & Sarana
            </span>
            <div className="h-px flex-grow bg-slate-200 dark:bg-slate-850" />
          </div>
          <div 
            className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-none"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {['Semua', 'Ibadah', 'Pendidikan', 'Kesehatan', 'Sosial', 'Pemerintahan', 'Lain-lain'].map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-md shadow-emerald-600/10'
                      : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE & TABLET INDIVIDUAL FACILITY SUB-SELECTOR */}
        <div className="block lg:hidden mb-8 overflow-hidden">
          {filteredFasilitas.length > 0 ? (
            <div 
              className="flex overflow-x-auto gap-2.5 pb-2 scrollbar-none animate-in fade-in duration-300"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' 
              }}
            >
              {filteredFasilitas.map((fas) => {
                const isActive = fas.id === activeId;
                const colors = getFasilitasColor(fas.iconName);
                
                return (
                  <button
                    key={fas.id}
                    onClick={() => handleSelectFas(fas.id)}
                    className={`flex-shrink-0 flex items-center space-x-3 px-4 py-3 rounded-2xl border transition-all duration-300 text-left cursor-pointer ${
                      isActive
                        ? 'bg-emerald-500/10 border-emerald-500/40 shadow-sm text-emerald-700 dark:text-emerald-400 font-bold'
                        : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                    }`}
                  >
                    <div className={`p-2 rounded-xl border ${colors}`}>
                      {getFasilitasIcon(fas.iconName, "w-4.5 h-4.5")}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">{fas.nama}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-6 text-center text-xs text-slate-400 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/50 dark:border-slate-850">
              Tidak ada fasilitas dalam kategori ini.
            </div>
          )}
        </div>

        {/* MAIN DISPLAY HUB */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR: Clickable Directory List (Desktop Only, Hidden on Mobile/Tablet) */}
          <div className="hidden lg:block lg:col-span-5 space-y-3">
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/50 dark:border-slate-800/80 shadow-md">
              <h3 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-4 px-2">
                Pilih Fasilitas Umum
              </h3>
              
              {/* Directory Stack */}
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                {filteredFasilitas.length > 0 ? (
                  filteredFasilitas.map((fas) => {
                    const isActive = fas.id === activeId;
                    const colors = getFasilitasColor(fas.iconName);
                    
                    return (
                      <button
                        key={fas.id}
                        onClick={() => handleSelectFas(fas.id)}
                        className={`w-full flex items-center space-x-4 p-3.5 rounded-2xl border transition-all duration-300 text-left cursor-pointer group ${
                          isActive
                            ? 'bg-emerald-500/5 dark:bg-emerald-500/10 border-emerald-500/40 shadow-sm'
                            : 'bg-transparent border-slate-100 dark:border-slate-800/40 hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                      >
                        {/* Styled Icon */}
                        <div className={`p-3 rounded-xl border transition-colors duration-300 ${colors} ${
                          isActive ? 'scale-110 shadow-md' : 'group-hover:scale-105'
                        }`}>
                          {getFasilitasIcon(fas.iconName, "w-5 h-5")}
                        </div>

                        {/* Info details */}
                        <div className="flex-grow min-w-0">
                          <h4 className={`text-sm sm:text-base font-bold truncate transition-colors duration-300 ${
                            isActive 
                              ? 'text-emerald-700 dark:text-emerald-400' 
                              : 'text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-accent-gold'
                          }`}>
                            {fas.nama}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate mt-0.5">
                            {fas.lokasiText}
                          </p>
                        </div>

                        {/* Indicator arrow */}
                        <div className={`text-slate-300 dark:text-slate-700 transition-all ${
                          isActive ? 'translate-x-1 text-emerald-500 dark:text-emerald-400 opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5'
                        }`}>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <div className="py-12 text-center text-xs text-slate-400">
                    Tidak ada fasilitas di kategori ini.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT VIEWPORT: Beautiful Spotlight Showcase Panel (Desktop & Mobile) */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              {activeFas && (
                <motion.div
                  key={activeFas.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-xl"
                >
                  
                  {/* Majestic Image Slider */}
                  <div className="relative h-64 sm:h-80 md:h-[350px] bg-slate-950">
                    <img
                      src={images[currentImgIdx]}
                      alt={`${activeFas.nama} - Slide ${currentImgIdx + 1}`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                    {/* Slider Navigation controls (if multi images) */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrev}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/65 hover:bg-slate-950 text-white transition-colors border border-white/10 cursor-pointer z-10"
                          title="Sebelumnya"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/65 hover:bg-slate-950 text-white transition-colors border border-white/10 cursor-pointer z-10"
                          title="Berikutnya"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>

                        {/* Dot indicator bars */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10 bg-slate-950/40 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/5">
                          {images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImgIdx(idx)}
                              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                                currentImgIdx === idx ? 'bg-emerald-500 w-4' : 'bg-white/50 hover:bg-white w-1.5'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}

                    {/* Left floating category icon */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className={`p-3 rounded-2xl shadow-lg border backdrop-blur-md ${getFasilitasColor(activeFas.iconName)}`}>
                        {getFasilitasIcon(activeFas.iconName, "w-6 h-6")}
                      </div>
                    </div>
                  </div>

                  {/* Showcase Details */}
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-3">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white leading-snug">
                        {activeFas.nama}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                        {activeFas.deskripsi}
                      </p>
                    </div>

                    {/* Location Card with Actions */}
                    <div className="bg-slate-50 dark:bg-slate-950 rounded-2xl p-4 border border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-emerald-600 dark:text-accent-gold mt-0.5 shrink-0" />
                        <div className="space-y-0.5">
                          <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                            Lokasi & Alamat Fisik
                          </span>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium block">
                            {activeFas.lokasiText}
                          </p>
                          {activeFas.koordinat && (
                            <span className="text-[11px] text-slate-450 dark:text-slate-500 font-semibold block">
                              Koordinat: {activeFas.koordinat}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Interactive Buttons */}
                      <div className="flex gap-2 shrink-0 sm:self-center">
                        <button
                          onClick={handleCopyAddress}
                          className="flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Tersalin</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-slate-400" />
                              <span>Salin Alamat</span>
                            </>
                          )}
                        </button>
                        
                        <a
                          href={activeFas.koordinat ? `https://www.google.com/maps/dir/?api=1&destination=${activeFas.koordinat}` : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(activeFas.nama + ", " + activeFas.lokasiText)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all cursor-pointer shadow-sm active:scale-95"
                        >
                          <Navigation className="w-3.5 h-3.5 fill-current" />
                          <span>Peta Rute</span>
                        </a>
                      </div>
                    </div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* OTHER FACILITIES GRID / CATALOG */}
        <div className="mt-16 pt-12 border-t border-slate-200 dark:border-slate-800 space-y-6">
          <div className="flex items-center space-x-3">
            <Building2 className="w-5 h-5 text-emerald-600" />
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wide">
              Katalog Lengkap Sarana & Fasilitas Desa
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFasilitas.map((fas) => {
              const isActive = fas.id === activeId;
              const colors = getFasilitasColor(fas.iconName);
              
              return (
                <div 
                  key={fas.id}
                  onClick={() => {
                    handleSelectFas(fas.id);
                    document.getElementById('fasilitas')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group bg-white dark:bg-slate-900 rounded-2xl p-5 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isActive 
                      ? 'border-emerald-500 ring-2 ring-emerald-500/10 shadow-md' 
                      : 'border-slate-200/60 dark:border-slate-800/80 hover:border-emerald-500/30 dark:hover:border-slate-700 hover:shadow-md'
                  }`}
                >
                  <div className="space-y-4">
                    {/* Facility Image with Overlay */}
                    <div className="relative h-44 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-950">
                      <img 
                        src={fas.foto} 
                        alt={fas.nama} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <div className={`p-2 rounded-xl backdrop-blur-md shadow-md border ${colors}`}>
                          {getFasilitasIcon(fas.iconName, "w-4 h-4")}
                        </div>
                      </div>
                    </div>
                    
                    {/* Facility Text Info */}
                    <div className="space-y-1.5 text-left">
                      <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {fas.nama}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {fas.deskripsi}
                      </p>
                      {fas.koordinat && (
                        <p className="text-[10px] text-slate-400 font-medium">
                          GPS: {fas.koordinat}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  {/* Footer Metadata & Action Link */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] gap-2">
                    <span className="text-slate-400 font-semibold flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 shrink-0 text-slate-400" /> 
                      <span className="truncate">{fas.lokasiText}</span>
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold group-hover:underline flex items-center gap-0.5 shrink-0 whitespace-nowrap">
                      Lihat Detail <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
