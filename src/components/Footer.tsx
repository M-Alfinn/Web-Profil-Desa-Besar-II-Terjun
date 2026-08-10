import { Instagram, Mail, Heart, Landmark, GraduationCap, ShieldAlert } from 'lucide-react';
import { kknInfo } from '../data';

interface FooterProps {
  onNavigate: (view: string, sub?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { name: 'Beranda Utama', id: 'beranda' },
    { name: 'Sejarah Desa', id: 'profil_desa', sub: 'sejarah' },
    { name: 'Profil & Batas Wilayah', id: 'profil_desa', sub: 'profil' },
    { name: 'Potensi Sawah & Pesisir', id: 'informasi_desa', sub: 'potensi_info' },
    { name: 'UMKM Kreatif Warga', id: 'informasi_desa', sub: 'umkm_info' },
    { name: 'Galeri Visual Kegiatan', id: 'informasi_desa', sub: 'galeri_info' },
    { name: 'Fasilitas Publik', id: 'informasi_desa', sub: 'fasilitas_info' },
    { name: 'Demografi & Data Desa', id: 'data_desa', sub: 'keadaan_penduduk' },
    { name: 'Kontak Hubungan Penting', id: 'kontak' },
    { name: 'Tentang Tim KKN UNIMED', id: 'tentang_kkn' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Wave aesthetic footer graphics */}
      <div className="absolute inset-0 bg-pattern-waves opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto pl-4 pr-0 sm:pl-6 sm:pr-0 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Column 1: Disclaimer & Logos (Col 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center space-x-4">
              {/* 3 Logos Row in Footer */}
              <div className="flex items-center space-x-2 bg-white/5 p-1.5 px-2 rounded-xl border border-white/10 shrink-0">
                <img
                  src="\Foto\Logo\unimed.png"
                  alt="Logo UNIMED"
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain hover:scale-105 transition-transform"
                  title="Universitas Negeri Medan"
                />
                <img
                  src="\Foto\Logo\KKN.png"
                  alt="Logo KKN"
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain hover:scale-105 transition-transform"
                  title="KKN UNIMED 2026"
                />
                <img
                  src="\Foto\Logo\Sergei.png"
                  alt="Logo Kecamatan"
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain hover:scale-105 transition-transform"
                  title="Kecamatan Pantai Cermin - Serdang Bedagai"
                />
              </div>
              <div>
                <h4 className="font-extrabold tracking-tight text-white text-base">Desa Besar II Terjun</h4>
                <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-widest leading-none">Media Informasi Digital</p>
              </div>
            </div>

            {/* HIGHLY EMPHASIZED NON-OFFICIAL DISCLAIMER */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-widest block flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
                Pernyataan Penting (Disclaimer)
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Website ini merupakan media informasi, dokumentasi, dan promosi yang dikembangkan oleh <strong>Kelompok KKN Desa Besar II Terjun Universitas Negeri Medan (UNIMED) 2026</strong> sebagai bagian dari program kerja pengabdian. Website ini <strong>BUKAN</strong> merupakan website resmi milik Pemerintah Desa Besar II Terjun.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h5 className="text-sm font-extrabold text-white uppercase tracking-wider">Navigasi Halaman</h5>
            <ul className="grid grid-cols-1 gap-2.5 text-xs font-semibold">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id, link.sub)}
                    className="hover:text-emerald-400 transition-colors block text-left uppercase tracking-wider text-[11px]"
                  >
                    • {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: KKN Contacts (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h5 className="text-sm font-extrabold text-white uppercase tracking-wider">Kontak Pengembang</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pertanyaan atau bimbingan mengenai program kerja KKN UNIMED dapat diajukan secara tertulis ke alamat resmi berikut:
            </p>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start space-x-3 text-slate-400">
                <GraduationCap className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-0.5">Universitas Negeri Medan</span>
                  <span>Jl. William Iskandar Ps. V, Medan Estate, Sumatera Utara</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-400">
                <Instagram className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <a
                    href={`https://instagram.com/${kknInfo.instagram}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400"
                  >
                    @{kknInfo.instagram}
                  </a>
                </div>
              </div>

              {/* TikTok KKN */}
              <div className="flex items-center space-x-3 text-slate-400">
                <svg className="w-5 h-5 text-emerald-400 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.58-.67-.02 1.95-.01 3.91-.02 5.86 0 1.33-.21 2.69-.82 3.85-.82 1.57-2.31 2.79-4.04 3.26-1.42.39-2.95.34-4.33-.17-1.78-.65-3.21-2.07-3.83-3.81-.69-1.92-.47-4.14.61-5.86 1.05-1.68 2.89-2.8 4.88-2.94V9.92c-1.12.06-2.26.54-2.97 1.4-.73.88-.93 2.13-.53 3.2.37 1 .13 1.92.57 2.87.52.88 1.45 1.52 2.45 1.64.99.12 2.01-.2 2.72-.9.77-.76.99-1.88.94-2.94.02-3.6 0-7.2 0-10.8.01-1.45-.02-2.91.02-4.37z"/>
                </svg>
                <div>
                  <a
                    href={`https://www.tiktok.com/@${kknInfo.tiktok}`}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-400"
                  >
                    @{kknInfo.tiktok}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <a
                    href={`mailto:${kknInfo.email}`}
                    className="hover:text-emerald-400"
                  >
                    {kknInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/10 my-10" />

        {/* Bottom copyright statement */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Desa Besar II Terjun. Dikembangkan secara kolaboratif oleh Kelompok KKN UNIMED.</p>
          <div className="flex items-center space-x-1">
            <span>Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>untuk kemajuan Desa Besar II Terjun.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
