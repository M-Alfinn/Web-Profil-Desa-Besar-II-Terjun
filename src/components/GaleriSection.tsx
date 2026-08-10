import { useState, MouseEvent } from 'react';
import { mockGaleri } from '../data';
import { GaleriItem } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

export default function GaleriSection() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['Semua', 'desa', 'alam', 'budaya', 'kegiatan', 'umkm'];

  const filteredItems = activeCategory === 'Semua'
    ? mockGaleri
    : mockGaleri.filter((item) => item.kategori === activeCategory.toLowerCase());

  const openLightbox = (item: GaleriItem) => {
    const idx = mockGaleri.findIndex((g) => g.id === item.id);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? mockGaleri.length - 1 : lightboxIndex - 1);
    }
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === mockGaleri.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  return (
    <section id="galeri" className="py-20 bg-slate-50/50 dark:bg-slate-900/20 relative overflow-hidden">
      {/* Visual background lines */}
      <div className="absolute inset-0 bg-radial-gradient from-emerald-500/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10 inline-flex items-center gap-1.5">
            <ImageIcon className="w-3.5 h-3.5" />
            Kilas Visual Desa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Galeri Dokumentasi & Keindahan Desa
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400">
            Saksikan pesona lanskap alam persawahan subur, ragam kesenian lokal Melayu, serta kehangatan program pemberdayaan pengabdian masyarakat Kelompok KKN UNIMED 2026.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 capitalize cursor-pointer ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/15'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/50 dark:border-slate-800/80'
              }`}
            >
              {cat === 'Semua' ? 'Semua Galeri' : cat}
            </button>
          ))}
        </div>

        {/* ARTISTIC POLAROID SCRAPBOOK BOARD (Staggered rotate, white-borders, polaroid-style caption) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredItems.map((item, index) => {
            // Apply varied mild rotation for the scrapbook realism look
            const rotateClasses = [
              'rotate-1',
              '-rotate-1.5',
              'rotate-[1.8deg]',
              '-rotate-[1.2deg]',
              'rotate-[0.6deg]',
              '-rotate-[0.8deg]'
            ];
            const rotation = rotateClasses[index % rotateClasses.length];

            return (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className={`cursor-pointer group bg-white dark:bg-slate-900 p-3.5 pb-6 rounded-sm shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] hover:shadow-2xl transition-all duration-300 hover:scale-[1.04] hover:rotate-0 hover:z-20 border border-slate-100 dark:border-slate-800 flex flex-col justify-between ${rotation}`}
              >
                {/* Photo Frame Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 dark:bg-slate-950 border border-slate-100 dark:border-slate-950">
                  <img
                    src={item.url}
                    alt={item.judul}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Category overlay badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[9px] font-extrabold text-white bg-slate-900/80 rounded-md uppercase tracking-wider border border-white/5 backdrop-blur-xs">
                    {item.kategori}
                  </span>
                </div>

                {/* Polaroid Bottom Signature Margin */}
                <div className="pt-4 px-1.5 flex flex-col justify-between h-14">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 line-clamp-1 italic tracking-tight font-serif">
                    "{item.judul}"
                  </h4>
                  
                  <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500">
                    <span className="truncate">
                      {item.deskripsi || 'Keindahan Desa'}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Lightbox Dialog */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex flex-col justify-between p-4 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Top Close Control */}
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-2 z-10 text-white">
              <span className="text-xs font-bold tracking-widest text-slate-400 uppercase">
                Foto {lightboxIndex + 1} dari {mockGaleri.length}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Middle Container (Image and side-controls) */}
            <div className="relative flex-grow flex items-center justify-center max-w-6xl mx-auto w-full px-4 sm:px-12 my-4">
              
              {/* Left Arrow Button */}
              <button
                onClick={handlePrev}
                className="absolute left-0 sm:left-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/5 shadow-md cursor-pointer z-10"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Lightbox Picture */}
              <div
                className="relative max-h-[65vh] max-w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={mockGaleri[lightboxIndex].url}
                  alt={mockGaleri[lightboxIndex].judul}
                  referrerPolicy="no-referrer"
                  className="max-h-[65vh] max-w-full object-contain mx-auto"
                />
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNext}
                className="absolute right-0 sm:right-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all border border-white/5 shadow-md cursor-pointer z-10"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="w-full max-w-3xl mx-auto px-4 py-4 text-center text-white z-10 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white italic font-serif">
                "{mockGaleri[lightboxIndex].judul}"
              </h3>
              {mockGaleri[lightboxIndex].deskripsi && (
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {mockGaleri[lightboxIndex].deskripsi}
                </p>
              )}
              <span className="inline-block px-2.5 py-0.5 text-[9px] font-extrabold text-emerald-400 bg-emerald-500/10 rounded-md border border-emerald-500/20 uppercase tracking-widest mt-2">
                Kategori: {mockGaleri[lightboxIndex].kategori}
              </span>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
