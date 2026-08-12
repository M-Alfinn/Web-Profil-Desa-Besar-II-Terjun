import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { mockPotensiDesa } from '../data';
import { PotensiDesa as PotensiType } from '../types';
import { Sprout, Compass, HelpCircle, GraduationCap, Ship, Palette, Store, X, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function PotensiDesa() {
  const [selectedPotensi, setSelectedPotensi] = useState<PotensiType | null>(null);

  // Body scroll lock when modal is open
  useEffect(() => {
    if (selectedPotensi) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPotensi]);

  // Return icons dynamically based on category
  const getPotensiIcon = (cat: string) => {
    switch (cat) {
      case 'Pertanian': return <Sprout className="w-4 h-4" />;
      case 'Perikanan': return <Ship className="w-4 h-4" />;
      case 'UMKM': return <Store className="w-4 h-4" />;
      case 'Budaya': return <Palette className="w-4 h-4" />;
      case 'Potensi Desa': return <Compass className="w-4 h-4" />;
      case 'Pendidikan': return <GraduationCap className="w-4 h-4" />;
      default: return <HelpCircle className="w-4 h-4" />;
    }
  };

  const getPotensiBg = (cat: string) => {
    switch (cat) {
      case 'Pertanian': return 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400';
      case 'Perikanan': return 'bg-blue-500/10 border-blue-500/20 text-blue-700 dark:text-blue-400';
      case 'UMKM': return 'bg-amber-500/10 border-amber-500/20 text-amber-700 dark:text-amber-400';
      case 'Budaya': return 'bg-indigo-500/10 border-indigo-500/20 text-indigo-700 dark:text-indigo-400';
      case 'Potensi Desa': return 'bg-rose-500/10 border-rose-500/20 text-rose-700 dark:text-rose-400';
      case 'Pendidikan': return 'bg-teal-500/10 border-teal-500/20 text-teal-700 dark:text-teal-400';
      default: return 'bg-slate-500/10 border-slate-500/20 text-slate-700 dark:text-slate-400';
    }
  };

  return (
    <section id="potensi" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Decorative floral/curved Melayu background lines */}
      <div className="absolute inset-0 bg-pattern-abstract opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="inline-block text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Kekayaan Alam & Budaya
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Potensi Unggulan Desa Besar II Terjun
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400">
            Sinergi bentangan alam persawahan subur, kemudahan akses menuju kawasan pantai, serta kearifan lokal yang dikembangkan warga secara mandiri.
          </p>
        </div>

        {/* POTENSI ASYMMETRIC ALTERNATING EDITORIAL ROWS */}
        <div className="space-y-16 md:space-y-24">
          {mockPotensiDesa.map((potensi, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={potensi.id}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 md:gap-16 items-center`}
              >
                {/* Visual Image Block (Col 1) */}
                <div className="w-full md:w-1/2 group">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/80 aspect-[4/3]">
                    {/* Floating Decorative Card Backdrop */}
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-300 z-10" />

                    <img
                      src={potensi.gambar}
                      alt={potensi.judul}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Left Category Badge Overlaid */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold tracking-wide backdrop-blur-md shadow-md border ${getPotensiBg(potensi.kategori)}`}>
                        {getPotensiIcon(potensi.kategori)}
                        <span>{potensi.kategori}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content Block (Col 2) */}
                <div className="w-full md:w-1/2 space-y-4 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold tracking-widest text-[#1976D2] dark:text-accent-gold uppercase">
                      Potensi Sektor 0{index + 1}
                    </span>
                    <div className="h-px w-8 bg-slate-300 dark:bg-slate-700" />
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white leading-tight">
                    {potensi.judul}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                    {potensi.deskripsi}
                  </p>

                  <div className="pt-4 flex">
                    <button
                      onClick={() => setSelectedPotensi(potensi)}
                      className="inline-flex items-center space-x-2 text-sm font-bold text-primary-green dark:text-accent-gold hover:text-primary-green-dark dark:hover:text-accent-gold-dark group/btn cursor-pointer py-1 border-b border-transparent hover:border-current transition-all"
                    >
                      <span>Pelajari Lebih Dalam</span>
                      <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* DETAILS DRAWER/MODAL FOR POTENSI */}
        {selectedPotensi && createPortal(
          <div 
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
            onClick={() => setSelectedPotensi(null)}
          >
            <div 
              className="relative bg-white dark:bg-slate-950 rounded-3xl max-w-2xl w-full my-auto overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Hero Image in Modal */}
              <div className="relative h-48 sm:h-64 shrink-0">
                <img
                  src={selectedPotensi.gambar}
                  alt={selectedPotensi.judul}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPotensi(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-950 text-white transition-colors border border-white/10 z-10 cursor-pointer"
                  title="Tutup"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Overlaid details */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-6 sm:right-6 text-white space-y-1">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold border ${getPotensiBg(selectedPotensi.kategori)}`}>
                    {getPotensiIcon(selectedPotensi.kategori)}
                    <span>{selectedPotensi.kategori}</span>
                  </span>
                  <h3 className="text-base sm:text-xl font-extrabold tracking-tight mt-1 line-clamp-1">
                    {selectedPotensi.judul}
                  </h3>
                </div>
              </div>

              {/* Content Body (Scrollable) */}
              <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-grow custom-scrollbar">
                <div className="space-y-2">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500">Gambaran Umum Potensi</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {selectedPotensi.deskripsi}
                  </p>
                </div>

                {selectedPotensi.detailInfo && (
                  <div className="bg-emerald-50 dark:bg-slate-900/60 p-4 rounded-2xl border border-emerald-100/30 dark:border-slate-800/80 space-y-1.5">
                    <h5 className="text-[10px] font-black uppercase tracking-widest text-primary-green dark:text-accent-gold">Upaya Pengembangan & Strategi</h5>
                    <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedPotensi.detailInfo}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Footer (Sticky/Fixed) */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center gap-4 shrink-0">
                <span className="text-[9px] sm:text-xs text-slate-400 dark:text-slate-500 font-bold">Sektor Unggulan • Desa Besar II Terjun</span>
                <button
                  onClick={() => setSelectedPotensi(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-extrabold rounded-xl transition-all cursor-pointer shadow-sm hover:scale-105 shrink-0"
                >
                  Kembali
                </button>
              </div>

            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
