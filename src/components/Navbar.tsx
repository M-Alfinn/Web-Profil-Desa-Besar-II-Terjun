import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ShieldAlert } from 'lucide-react';
import { kknInfo } from '../data';

interface MenuItem {
  name: string;
  id: string;
  submenus?: { name: string; id: string }[];
}

interface NavbarProps {
  currentView: string;
  subView: string;
  onNavigate: (view: string, sub?: string) => void;
}

export default function Navbar({ currentView, subView, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { name: 'Beranda', id: 'beranda' },
    { 
      name: 'Profil Desa', 
      id: 'profil_desa',
      submenus: [
        { name: 'Sejarah Desa', id: 'sejarah' },
        { name: 'Profil Desa', id: 'profil' }
      ]
    },
    { 
      name: 'Pemerintah Desa', 
      id: 'pemerintah_desa',
      submenus: [
        { name: 'Visi dan Misi', id: 'visi_misi' },
        { name: 'Struktur Pemerintah', id: 'struktur' },
        { name: 'Fungsi & Tugas', id: 'fungsi_tugas' },
        { name: 'Struktur BPD', id: 'struktur_bpd' },
        { name: 'Struktur LKMD', id: 'struktur_lkmd' }
      ]
    },
    { 
      name: 'Informasi Desa', 
      id: 'informasi_desa',
      submenus: [
        { name: 'Potensi Desa', id: 'potensi_info' },
        { name: 'UMKM', id: 'umkm_info' },
        { name: 'Fasilitas', id: 'fasilitas_info' },
        { name: 'Galeri', id: 'galeri_info' },
        { name: 'Video Desa', id: 'video_desa' }
      ]
    },
    { name: 'Berita Desa', id: 'berita' },
    { name: 'Agenda', id: 'agenda' },
    { 
      name: 'Data Desa', 
      id: 'data_desa',
      submenus: [
        { name: 'Keadaan Penduduk', id: 'keadaan_penduduk' }
      ]
    },
    { name: 'Kontak', id: 'kontak' },
    { name: 'Tentang Kami (KKN)', id: 'tentang_kkn' }
  ];

  const handleMenuClick = (item: MenuItem) => {
    if (item.submenus) {
      // Toggle dropdown on click for mobile, or nav first item for desktop
      onNavigate(item.id, item.submenus[0].id);
    } else {
      onNavigate(item.id);
      setIsOpen(false);
    }
  };

  const handleSubmenuClick = (viewId: string, subId: string) => {
    onNavigate(viewId, subId);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || currentView !== 'beranda'
            ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md py-3 shadow-md border-b border-slate-200/50 dark:border-slate-800/50'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1400px] mx-auto pl-4 pr-0 sm:pl-6 sm:pr-0 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo and App Title */}
            <div className="flex items-center cursor-pointer select-none" onClick={() => { onNavigate('beranda'); setIsOpen(false); }}>
              <div className="flex items-center space-x-3 sm:space-x-4">
                {/* 3 Logos Row in Navbar */}
                <div className="flex items-center space-x-1 sm:space-x-1.5 bg-white/90 dark:bg-slate-950/80 p-0.5 px-1 rounded-lg border border-slate-200/60 dark:border-slate-800/80 shrink-0 shadow-sm">
                  {/* Logo 1: Unimed */}
                  <img
                    src="..\assets\Foto\Logo\unimed.png"
                    alt="Logo UNIMED"
                    referrerPolicy="no-referrer"
                    className="h-6.5 sm:h-7 w-auto object-contain hover:scale-105 transition-transform"
                    title="Universitas Negeri Medan"
                  />
                  {/* Logo 2: KKN Unimed Real Logo */}
                  <img
                    src="..\assets\Foto\Logo\KKN.png"
                    alt="Logo KKN"
                    referrerPolicy="no-referrer"
                    className="h-6.5 sm:h-7 w-auto object-contain hover:scale-105 transition-transform"
                    title="KKN UNIMED 2026"
                  />
                  {/* Logo 3: Kecamatan (Kabupaten Serdang Bedagai) */}
                  <img
                    src="..\assets\Foto\Logo\Sergei.png"
                    alt="Logo Kecamatan"
                    referrerPolicy="no-referrer"
                    className="h-6.5 sm:h-7 w-auto object-contain hover:scale-105 transition-transform"
                    title="Kecamatan Pantai Cermin - Serdang Bedagai"
                  />
                </div>
                <div>
                  <h1 className={`text-xs sm:text-sm font-extrabold tracking-tight leading-snug transition-colors duration-300 ${
                    scrolled || currentView !== 'beranda' ? 'text-slate-900 dark:text-white' : 'text-white'
                  }`}>
                    Desa Besar II Terjun
                  </h1>
                  <span className={`text-[9px] sm:text-[10px] font-bold tracking-wide transition-colors duration-300 block ${
                    scrolled || currentView !== 'beranda' ? 'text-emerald-600 dark:text-emerald-400' : 'text-emerald-300'
                  }`}>
                    KKN UNIMED 2026
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {menuItems.map((item) => {
                const hasSub = !!item.submenus;
                const isMenuSelected = currentView === item.id;
                
                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => hasSub && setActiveDropdown(item.id)}
                    onMouseLeave={() => hasSub && setActiveDropdown(null)}
                  >
                    <button
                      onClick={() => handleMenuClick(item)}
                      className={`px-2 py-1.5 rounded-lg text-[10.5px] font-bold uppercase tracking-wide flex items-center space-x-0.5 transition-all duration-200 cursor-pointer ${
                        isMenuSelected
                          ? scrolled || currentView !== 'beranda'
                            ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                            : 'text-white border-b-2 border-white rounded-none'
                          : scrolled || currentView !== 'beranda'
                            ? 'text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                            : 'text-slate-100 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSub && <ChevronDown className="w-3 h-3 opacity-70" />}
                    </button>

                    {/* Submenu Dropdown */}
                    {hasSub && activeDropdown === item.id && (
                      <div className="absolute left-0 mt-0 w-56 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                        {item.submenus?.map((sub) => {
                          const isSubSelected = subView === sub.id;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSubmenuClick(item.id, sub.id)}
                              className={`block w-full text-left px-4 py-2 text-[10.5px] font-bold uppercase tracking-wide transition-all cursor-pointer ${
                                isSubSelected
                                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                                  : 'text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60'
                              }`}
                            >
                              {sub.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="flex xl:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2.5 rounded-lg transition-colors focus:outline-none cursor-pointer ${
                  scrolled || currentView !== 'beranda' ? 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
                }`}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {isOpen && (
          <div className="xl:hidden animate-in fade-in slide-in-from-top duration-300 max-h-[85vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-slate-200 dark:border-slate-800">
              {menuItems.map((item) => {
                const hasSub = !!item.submenus;
                const isMenuSelected = currentView === item.id;
                const isOpenDropdown = activeDropdown === item.id;

                return (
                  <div key={item.id} className="space-y-1">
                    <button
                      onClick={() => {
                        if (hasSub) {
                          setActiveDropdown(isOpenDropdown ? null : item.id);
                        } else {
                          handleMenuClick(item);
                        }
                      }}
                      className={`flex items-center justify-between w-full text-left px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all ${
                        isMenuSelected
                          ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{item.name}</span>
                      {hasSub && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpenDropdown ? 'rotate-180' : ''}`} />
                      )}
                    </button>

                    {hasSub && isOpenDropdown && (
                      <div className="pl-4 pr-2 py-1 space-y-1 border-l-2 border-emerald-500/30 ml-4 animate-in fade-in duration-200">
                        {item.submenus?.map((sub) => {
                          const isSubSelected = subView === sub.id;
                          return (
                            <button
                              key={sub.id}
                              onClick={() => handleSubmenuClick(item.id, sub.id)}
                              className={`block w-full text-left px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                                isSubSelected
                                  ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/20'
                                  : 'text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400'
                              }`}
                            >
                              {sub.name}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <div className="p-3 rounded-2xl bg-orange-50 dark:bg-orange-950/10 border border-orange-200/40 dark:border-orange-900/30 flex items-start space-x-2.5">
                  <ShieldAlert className="w-4.5 h-4.5 text-orange-600 dark:text-orange-400 shrink-0 mt-0.5" />
                  <span className="text-[10px] text-orange-700 dark:text-orange-300 leading-relaxed">
                    Website Non-Resmi • Media Informasi dikembangkan oleh Kelompok KKN UNIMED 2026. Bukan website resmi Pemerintah Desa Besar II Terjun.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
