import { useState } from 'react';
import { Award, User, Phone, Mail, ShieldAlert, CheckCircle, ArrowDown } from 'lucide-react';
import UserAvatar from './UserAvatar';

interface MemberBPD {
  nama: string;
  jabatan: string;
  foto: string;
  tugas: string[];
  jenisKelamin?: 'L' | 'P';
}

export default function StrukturBPD() {
  const [selectedMember, setSelectedMember] = useState<MemberBPD | null>(null);

  const ketuaMember: MemberBPD = {
    nama: 'EDIY SUPRAYITNO, S.Pd',
    jabatan: 'Ketua BPD',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    tugas: [
      'Memimpin penyelenggaraan rapat-rapat BPD Desa Besar II Terjun.',
      'Mengoordinasikan pelaksanaan tugas dan fungsi legislasi serta pengawasan BPD.',
      'Menandatangani keputusan BPD dan menyepakati peraturan desa bersama Kepala Desa.',
      'Mewakili BPD dalam menjalin hubungan kerja harmonis dengan Pemerintah Desa.'
    ],
    jenisKelamin: 'L'
  };

  const pimpinanMembers: MemberBPD[] = [
    {
      nama: 'MAHMUDDIN',
      jabatan: 'Wakil Ketua BPD',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Membantu Ketua BPD dalam mengoordinasikan bidang legislasi dan aspirasi.',
        'Melaksanakan tugas-tugas Ketua BPD dalam hal Ketua berhalangan.',
        'Mengawasi kedisiplinan dan kepatuhan jalannya rapat musyawarah internal.'
      ],
      jenisKelamin: 'L'
    },
    {
      nama: 'HERAWATI',
      jabatan: 'Sekretaris BPD',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Menyelenggarakan administrasi ketatausahaan, registrasi, dan persuratan BPD.',
        'Mempersiapkan bahan rapat, membuat notulen hasil rapat, dan menyusun laporan berkala.',
        'Mengelola arsip regulasi desa dan korespondensi eksternal.'
      ],
      jenisKelamin: 'P'
    }
  ];

  const anggotaMembers: MemberBPD[] = [
    {
      nama: 'HAIRI',
      jabatan: 'Anggota BPD',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Menampung dan menyalurkan aspirasi pembangunan warga di dusun perwakilan.',
        'Mendampingi pelaksanaan musyawarah dusun (Musdus) dan Musrenbang.',
        'Melakukan pengawasan melekat terhadap pembangunan fisik desa.'
      ],
      jenisKelamin: 'L'
    },
    {
      nama: 'DESY YUWANDA',
      jabatan: 'Anggota BPD',
      foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Menampung aspirasi perempuan, kesejahteraan sosial, dan kesehatan ibu-anak.',
        'Ikut serta membahas dan mengevaluasi rancangan Peraturan Desa.',
        'Berperan aktif mendukung program peningkatan literasi dan kesejahteraan warga.'
      ],
      jenisKelamin: 'P'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block mb-3 text-xs font-bold tracking-widest text-emerald-600 dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
          Badan Permusyawaratan Desa
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase">
          Struktur Organisasi BPD
        </h2>
        <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 leading-tight">
          DESA BESAR II TERJUN • KEC. PANTAI CERMIN • KAB. SERDANG BEDAGAI
        </p>
        <span className="inline-block text-xs font-extrabold text-emerald-700 bg-emerald-500/10 dark:text-emerald-300 px-3 py-1 rounded-full border border-emerald-500/15">
          Tahun Bakti : 2019 - 2025
        </span>
        <div className="h-[2px] w-16 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Badan Permusyawaratan Desa (BPD) adalah lembaga legislatif tingkat desa yang menyuarakan aspirasi masyarakat, mengkaji rancangan peraturan desa, serta mengawasi kinerja jalannya pemerintahan desa.
        </p>
      </div>

      {/* Organizational Tree */}
      <div className="space-y-12 max-w-4xl mx-auto">
        
        {/* Tier 1: Ketua BPD */}
        <div className="flex flex-col items-center">
          <div 
            onClick={() => setSelectedMember(ketuaMember)}
            className="cursor-pointer group relative bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center w-full max-w-xs"
          >
            <span className="absolute top-3 right-3 px-2 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold uppercase tracking-wider">
              KETUA
            </span>
            <div className="w-18 h-18 rounded-full overflow-hidden mb-3 border-2 border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
              <UserAvatar gender={ketuaMember.jenisKelamin} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{ketuaMember.nama}</h4>
            <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 tracking-wider">{ketuaMember.jabatan}</span>
            <span className="mt-3 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all">Tugas & Kewenangan</span>
          </div>

          <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Tier 2: Wakil & Sekretaris */}
        <div className="relative">
          <div className="absolute top-0 left-[20%] right-[20%] h-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 max-w-2xl mx-auto">
            {pimpinanMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Connector line up to parent on desktop */}
                <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700 hidden md:block" />
                
                <div 
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer group relative bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center w-full max-w-xs"
                >
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider ${idx === 0 ? 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400' : 'bg-purple-500/10 text-purple-600 dark:text-purple-400'}`}>
                    {idx === 0 ? 'WAKIL KETUA' : 'SEKRETARIS'}
                  </span>
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                    <UserAvatar gender={member.jenisKelamin} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{member.nama}</h4>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 tracking-wider">{member.jabatan}</span>
                  <span className="mt-3 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all">Tugas & Fungsi</span>
                </div>

                {/* Downward line to sub-divisions on desktop */}
                <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: Anggota */}
        <div className="relative">
          {/* Main split bar for divisions */}
          <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />

          <div className="text-center mb-6 pt-4 hidden md:block">
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">ANGGOTA BPD</span>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto pt-4">
            {anggotaMembers.map((member, iIdx) => (
              <div 
                key={iIdx}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/50 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all text-center flex flex-col items-center w-full max-w-[200px] mx-auto"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-all">
                  <UserAvatar gender={member.jenisKelamin} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-1">{member.nama}</h5>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide mt-1">ANGGOTA BPD</span>
                <span className="text-[9px] mt-2 font-bold text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">Tugas</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Details Dialog Modal */}
      {selectedMember && (
        <div 
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 z-[110] bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-300"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-6 sm:p-8 max-w-md w-full relative animate-in zoom-in-95 duration-300 my-8"
          >
            {/* Top avatar and title */}
            <div className="flex items-center space-x-4 border-b border-slate-200/50 dark:border-slate-800/50 pb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                <UserAvatar gender={selectedMember.jenisKelamin} className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-accent-gold block">
                  {selectedMember.jabatan}
                </span>
                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                  {selectedMember.nama}
                </h3>
              </div>
            </div>

            {/* Core responsibilities checklist */}
            <div className="mt-5 space-y-4">
              <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
                Fungsi & Kewenangan Tugas:
              </h4>
              <div className="space-y-2 max-h-[250px] overflow-y-auto pr-2 scrollbar-thin">
                {selectedMember.tugas.map((task, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer buttons */}
            <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/50 flex justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 cursor-pointer transition-colors"
              >
                Tutup Deskripsi
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
