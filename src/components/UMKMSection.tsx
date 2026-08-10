import React, { useState, useEffect } from 'react';
import { mockUMKM } from '../data';
import { UMKMData } from '../types';
import { 
  Phone, MapPin, User, ShoppingBag, ArrowUpRight, 
  ShieldCheck, ChevronLeft, ChevronRight, Search, 
  Store, MessageSquare, Info, Calendar, Landmark,
  X, Instagram, Award, Layers, Clipboard, Navigation,
  ArrowLeft
} from 'lucide-react';

export default function UMKMSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [selectedUMKM, setSelectedUMKM] = useState<UMKMData | null>(null);
  const [currentImageIdx, setCurrentImageIdx] = useState<number>(0);

  // Dynamic Categories from data
  const categories = ['Semua', ...Array.from(new Set(mockUMKM.map(item => item.kategori)))];

  // Filter & Search Logic
  const filteredUMKM = mockUMKM.filter(item => {
    const matchesCategory = selectedCategory === 'Semua' || item.kategori === selectedCategory;
    const matchesSearch = item.nama.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (item.deskripsi && item.deskripsi.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.pemilik && item.pemilik.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (item.lokasi && item.lokasi.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(8);
  }, [selectedCategory, searchQuery]);

  const handleNextImage = (e: React.MouseEvent, list: string[]) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handlePrevImage = (e: React.MouseEvent, list: string[]) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const openDetail = (umkm: UMKMData) => {
    setSelectedUMKM(umkm);
    setCurrentImageIdx(0);
    setTimeout(() => {
      const el = document.getElementById('umkm-detail-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 80);
  };

  const visibleUMKM = filteredUMKM.slice(0, visibleCount);

  if (selectedUMKM) {
    return (
      <section id="umkm-detail-container" className="py-8 bg-slate-50/50 dark:bg-slate-950/20 relative overflow-hidden min-h-screen scroll-mt-6">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-900/40 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 animate-in fade-in duration-300">
          
          {/* Back Button */}
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedUMKM(null);
                setTimeout(() => {
                  const el = document.getElementById('umkm');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }, 50);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 shadow-md text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-50 dark:hover:bg-slate-850/55 transition-all text-xs font-black cursor-pointer active:scale-95"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Daftar UMKM</span>
            </button>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest hidden sm:inline">
              Detail Informasi UMKM
            </span>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/80 shadow-2xl flex flex-col">
            
            {/* Header / Title bar for Detail */}
            <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-950/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shrink-0 text-left">
              <div className="space-y-1">
                <span className="px-2.5 py-0.5 text-[9px] font-black text-white bg-emerald-600 rounded uppercase tracking-wider inline-block">
                  {selectedUMKM.kategori}
                </span>
                <h3 className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  {selectedUMKM.nama}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 flex-1">
              
              {/* Left Column (Image Slider & Order Actions) - md:col-span-5 */}
              <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800/60 flex flex-col bg-slate-50/[0.2] dark:bg-slate-950/10">
                
                {/* Image Slider - Compact landscape ratio */}
                <div className="relative w-full h-44 sm:h-52 md:h-60 bg-slate-950 overflow-hidden shrink-0">
                  {selectedUMKM.fotoList && selectedUMKM.fotoList.length > 0 ? (
                    <div className="w-full h-full relative">
                      <img
                        src={selectedUMKM.fotoList[currentImageIdx]}
                        alt={`${selectedUMKM.nama} - Foto ${currentImageIdx + 1}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />

                      {/* Slider controls */}
                      {selectedUMKM.fotoList.length > 1 && (
                        <>
                          <button
                            onClick={(e) => handlePrevImage(e, selectedUMKM.fotoList || [])}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 hover:bg-slate-950/90 text-white transition-colors border border-white/10 cursor-pointer z-10 active:scale-90"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) => handleNextImage(e, selectedUMKM.fotoList || [])}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-slate-950/70 hover:bg-slate-950/90 text-white transition-colors border border-white/10 cursor-pointer z-10 active:scale-90"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>

                          {/* Indicators */}
                          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1.5 z-10 bg-slate-950/40 px-2 py-1 rounded-full backdrop-blur-xs">
                            {selectedUMKM.fotoList.map((_, idx) => (
                              <button
                                key={idx}
                                onClick={() => setCurrentImageIdx(idx)}
                                className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                                  currentImageIdx === idx ? 'bg-emerald-500 w-3' : 'bg-white/60 hover:bg-white'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <img
                      src={selectedUMKM.foto}
                      alt={selectedUMKM.nama}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Left side actions (order buttons) */}
                <div className="p-4 sm:p-5 space-y-4 flex-1 flex flex-col justify-center">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase font-bold text-slate-400 block tracking-widest text-center">Hubungi & Hubungkan</span>
                    
                    {!selectedUMKM.bukanWA ? (
                      <div className="grid grid-cols-1 gap-2">
                        <a
                          href={`https://wa.me/${selectedUMKM.kontak.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4 shrink-0" />
                          <span>WhatsApp Order</span>
                        </a>
                        <a
                          href={`tel:${selectedUMKM.kontak}`}
                          className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850 font-bold border border-slate-200 dark:border-slate-800 rounded-xl text-xs transition-all active:scale-95 cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5 shrink-0" />
                          <span>Panggil Telepon</span>
                        </a>
                      </div>
                    ) : (
                      <a
                        href={`tel:${selectedUMKM.kontak}`}
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md transition-all active:scale-95 text-center cursor-pointer"
                      >
                        <Phone className="w-4 h-4 shrink-0" />
                        <span>Hubungi Telepon</span>
                      </a>
                    )}

                    {selectedUMKM.instagram && (
                      <a
                        href={`https://instagram.com/${selectedUMKM.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-bold rounded-xl text-xs transition-all active:scale-95 text-center cursor-pointer"
                      >
                        <Instagram className="w-3.5 h-3.5 shrink-0" />
                        <span>Kunjungi Instagram</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>

              {/* Right Column (Info Fields & Details) - md:col-span-7 */}
              <div className="md:col-span-7 p-4 sm:p-6 space-y-4 text-left flex flex-col justify-between">
                
                <div className="space-y-4">
                  {/* Deskripsi */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Deskripsi Usaha</span>
                    <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                      {selectedUMKM.deskripsi}
                    </p>
                  </div>

                  {/* Detail fields in compact grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Pemilik */}
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center gap-2">
                      <div className="p-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg shrink-0">
                        <User className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider">Pemilik</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{selectedUMKM.pemilik || '-'}</span>
                      </div>
                    </div>

                    {/* Tahun Berdiri */}
                    <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center gap-2">
                      <div className="p-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
                        <Calendar className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider">Tahun</span>
                        <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{selectedUMKM.tahunBerdiri && selectedUMKM.tahunBerdiri !== '-' ? selectedUMKM.tahunBerdiri : 'Tidak Ada'}</span>
                      </div>
                    </div>

                    {/* Bahan Baku */}
                    {selectedUMKM.bahan && selectedUMKM.bahan !== '-' && (
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center gap-2 col-span-2">
                        <div className="p-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-lg shrink-0">
                          <Layers className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider">Komoditas / Bahan Baku</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{selectedUMKM.bahan}</span>
                        </div>
                      </div>
                    )}

                    {/* Sekali Produksi */}
                    {selectedUMKM.sekaliProduksi && (
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center gap-2 col-span-2">
                        <div className="p-1.5 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-lg shrink-0">
                          <Clipboard className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider">Kapasitas Produksi</span>
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block truncate">{selectedUMKM.sekaliProduksi}</span>
                        </div>
                      </div>
                    )}

                    {/* Cara Mengelola */}
                    {selectedUMKM.caraMengelola && (
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex flex-col gap-0.5 col-span-2 text-xs">
                        <div className="flex items-center gap-1.5">
                          <div className="p-1 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded">
                            <Landmark className="w-3 h-3" />
                          </div>
                          <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider">Manajemen Pemasaran</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-300 font-semibold leading-relaxed">
                          {selectedUMKM.caraMengelola}
                        </p>
                      </div>
                    )}

                    {/* Perbandingan Harga */}
                    {selectedUMKM.hargaKemarin && selectedUMKM.hargaSekarang && (
                      <div className="p-2.5 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl flex items-center justify-between col-span-2 gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-rose-500/10 text-rose-600 dark:text-rose-400 rounded-lg shrink-0">
                            <ShoppingBag className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[8px] uppercase font-bold text-slate-400 block tracking-wider">Perbandingan Harga</span>
                            <span className="font-bold text-slate-700 dark:text-slate-300 text-xs">Evolusi Harga</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-slate-400 line-through block">Lama: {selectedUMKM.hargaKemarin}</span>
                          <span className="font-black text-emerald-600 dark:text-emerald-400 text-xs">Baru: {selectedUMKM.hargaSekarang}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Products list */}
                  {selectedUMKM.produk && selectedUMKM.produk.length > 0 && (
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">Produk Unggulan</span>
                      <div className="flex flex-wrap gap-1">
                        {selectedUMKM.produk.map((prod, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-0.5 rounded bg-emerald-500/[0.04] dark:bg-emerald-500/[0.02] text-emerald-700 dark:text-emerald-400 text-[11px] font-bold border border-emerald-500/10"
                          >
                            {prod}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Map & Address Block */}
                <div className="p-3 bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-850 rounded-xl space-y-2 mt-2">
                  <div className="flex items-start justify-between gap-3 text-xs">
                    <div className="flex items-start space-x-2 min-w-0">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div className="min-w-0 text-xs">
                        <span className="font-bold text-[8px] text-slate-400 uppercase tracking-widest block">Lokasi Produksi</span>
                        <span className="text-slate-700 dark:text-slate-300 font-bold leading-relaxed block truncate max-w-[180px] sm:max-w-none">{selectedUMKM.lokasi}</span>
                      </div>
                    </div>
                    
                    {/* Route Button */}
                    <a
                      href={selectedUMKM.koordinat ? `https://www.google.com/maps/dir/?api=1&destination=${selectedUMKM.koordinat}` : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedUMKM.nama + ", " + selectedUMKM.lokasi)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1 px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[9px] font-black transition-all cursor-pointer shadow-sm active:scale-95 shrink-0"
                    >
                      <Navigation className="w-2.5 h-2.5 fill-current" />
                      <span>Rute</span>
                    </a>
                  </div>
                  
                  <div className="flex items-start space-x-2 text-xs pt-2 border-t border-slate-200/50 dark:border-slate-800/40">
                    <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                    <div>
                      <span className="font-bold text-[8px] text-slate-400 uppercase tracking-widest block">Kontak</span>
                      <span className="text-slate-700 dark:text-slate-300 font-bold text-xs">{selectedUMKM.kontak}</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="umkm" className="py-20 bg-slate-50/50 dark:bg-slate-950/20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-900/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            <Store className="w-3.5 h-3.5" />
            <span>Ekonomi Kreatif & UMKM Desa</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 dark:text-white uppercase leading-tight">
            Etalase & Direktori Usaha Lokal
          </h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
            Guna mendukung kemandirian ekonomi, Tim KKN UNIMED 2026 mempersembahkan Direktori Digital UMKM Desa Besar II Terjun. Jelajahi, hubungi, dan dukung usaha warga mulai dari kuliner lezat hingga kerajinan tangan estetik.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mb-10 max-w-4xl mx-auto space-y-6">
          {/* Search Bar */}
          <div className="relative bg-white dark:bg-slate-900 p-2 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 shadow-md animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari UMKM berdasarkan nama, pemilik, atau kategori..."
                className="w-full pl-12 pr-4 py-3.5 text-sm bg-transparent border-none rounded-xl focus:outline-none focus:ring-0 text-slate-800 dark:text-slate-200 font-medium placeholder:text-slate-400"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Categories Horizontal Pills (Scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-300 cursor-pointer border shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-md shadow-emerald-600/10'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-slate-200/60 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6 text-xs text-slate-400 font-bold uppercase tracking-wider max-w-7xl mx-auto px-1">
          <span>Hasil Pencarian: {filteredUMKM.length} UMKM</span>
          <span>Klik kartu untuk info kontak & detail</span>
        </div>

        {/* Grid of Compact Cards (Mobile & Desktop friendly) */}
        {filteredUMKM.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {visibleUMKM.map((umkm) => (
              <div
                key={umkm.id}
                onClick={() => openDetail(umkm)}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden cursor-pointer transform hover:-translate-y-1"
              >
                {/* Image block */}
                <div className="relative aspect-video sm:aspect-square w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                  <img
                    src={umkm.foto}
                    alt={umkm.nama}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category overlay */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-black uppercase text-white bg-emerald-600 rounded shadow-sm z-10">
                    {umkm.kategori}
                  </span>
                </div>

                {/* Info block */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-black text-slate-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-1 flex-1">
                        {umkm.nama}
                      </h4>
                      {umkm.instagram && (
                        <a
                          href={`https://instagram.com/${umkm.instagram}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 transition-all shrink-0 active:scale-90"
                          title={`Kunjungi Instagram ${umkm.nama}`}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      <span>Pemilik: {umkm.pemilik}</span>
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {umkm.deskripsi}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="text-[10px] text-slate-400 font-semibold truncate max-w-[120px]">{umkm.lokasi.split(',')[0]}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Detail</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center text-slate-400 space-y-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 max-w-md mx-auto shadow-md">
            <Info className="w-10 h-10 text-slate-300 mx-auto" />
            <p className="text-sm font-semibold">Tidak ada UMKM yang cocok dengan filter Anda.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredUMKM.length > visibleCount && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
            >
              Tampilkan Lebih Banyak ({filteredUMKM.length - visibleCount} lagi)
            </button>
          </div>
        )}

      </div>



    </section>
  );
}
