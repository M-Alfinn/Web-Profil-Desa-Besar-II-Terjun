import { useState } from 'react';
import { Award, User, Phone, Mail, CheckCircle } from 'lucide-react';
import UserAvatar from './UserAvatar';

interface MemberLKMD {
  nama: string;
  jabatan: string;
  foto: string;
  tugas: string[];
  jenisKelamin?: 'L' | 'P';
}

export default function StrukturLKMD() {
  const [selectedMember, setSelectedMember] = useState<MemberLKMD | null>(null);

  const ketuaMember: MemberLKMD = {
    nama: 'T. SARWO EDI',
    jabatan: 'Ketua LKMD',
    foto: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    tugas: [
      'Memimpin jajaran LKMD Desa Besar II Terjun dalam menyusun rencana pembangunan partisipatif.',
      'Mendorong tumbuhnya swadaya gotong royong warga desa.',
      'Mengadakan koordinasi berkala dengan Kepala Desa dan jajaran BPD.',
      'Mengawasi implementasi program peningkatan pemberdayaan kesejahteraan masyarakat.'
    ],
    jenisKelamin: 'L'
  };

  const pengurusMembers: MemberLKMD[] = [
    {
      nama: 'MISNARDI',
      jabatan: 'Sekretaris LKMD',
      foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Menyusun serta mengurus berkas administrasi persuratan LKMD.',
        'Membuat notulen hasil rapat musyawarah LKMD.',
        'Mendokumentasikan seluruh riwayat program swadaya masyarakat yang berjalan.'
      ],
      jenisKelamin: 'L'
    },
    {
      nama: 'NAZWAN',
      jabatan: 'Bendahara LKMD',
      foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      tugas: [
        'Mencatat pembukuan keuangan kas internal LKMD.',
        'Mengelola sirkulasi dana operasional kegiatan swadaya gotong royong.',
        'Menyusun laporan pertanggungjawaban keuangan secara transparan kepada pimpinan.'
      ],
      jenisKelamin: 'L'
    }
  ];

  const anggotaMembers: MemberLKMD[] = [
    {
      nama: 'ZULKIFLI',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Menyalurkan aspirasi masyarakat terkait pembangunan infrastruktur desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SAHARMAN',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Menyalurkan aspirasi masyarakat terkait pembangunan infrastruktur desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SAHRUL, S.Pd',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan pemberdayaan pendidikan dan pemuda desa.', 'Mendukung program literasi dan pembinaan generasi muda desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'M. HARIS',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Menjalin koordinasi keamanan dan ketertiban lingkungan kemasyarakatan.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SUGIMIN',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan pembangunan infrastruktur desa.', 'Mendorong swadaya masyarakat dalam pemeliharaan sarana umum.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SURIADI',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Berpartisipasi aktif dalam koordinasi pembangunan fisik desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'RUSLI',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Berpartisipasi aktif dalam koordinasi pembangunan fisik desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SARIYAH',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan pemberdayaan masyarakat dan gotong-royong.', 'Berpartisipasi aktif dalam koordinasi pembangunan sosial desa.'],
      jenisKelamin: 'P'
    },
    {
      nama: 'SUEF',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Berpartisipasi aktif dalam koordinasi pembangunan fisik desa.'],
      jenisKelamin: 'L'
    },
    {
      nama: 'SALIMUDDIN',
      jabatan: 'Anggota LKMD',
      foto: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
      tugas: ['Membantu pelaksanaan kegiatan gotong royong di dusun-dusun.', 'Berpartisipasi aktif dalam koordinasi pembangunan fisik desa.'],
      jenisKelamin: 'L'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-12 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block mb-3 text-xs font-bold tracking-widest text-emerald-600 dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
          Lembaga Kemasyarakatan Desa
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase">
          Struktur Organisasi LKMD
        </h2>
        <p className="text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 leading-tight">
          DESA BESAR II TERJUN • KEC. PANTAI CERMIN • KAB. SERDANG BEDAGAI
        </p>
        <div className="h-[2px] w-16 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Lembaga Pemberdayaan Masyarakat Desa (LKMD) wadah partisipasi masyarakat dalam perencanaan, pelaksanaan, dan pelestarian pembangunan secara bergotong royong.
        </p>
      </div>

      {/* Organizational Tree */}
      <div className="space-y-12 max-w-5xl mx-auto">
        
        {/* Tier 1: Ketua LKMD */}
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
            <span className="mt-3 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all">Tugas & Fungsi</span>
          </div>

          <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700" />
        </div>

        {/* Tier 2: Sekretaris & Bendahara */}
        <div className="relative">
          <div className="absolute top-0 left-[25%] right-[25%] h-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {pengurusMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center relative">
                {/* Connector line up to parent on desktop */}
                <div className="w-0.5 h-6 bg-slate-300 dark:bg-slate-700 hidden md:block" />
                
                <div 
                  onClick={() => setSelectedMember(member)}
                  className="cursor-pointer group relative bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 flex flex-col items-center text-center w-full max-w-xs"
                >
                  <span className={`absolute top-3 right-3 px-2 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider ${idx === 0 ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'}`}>
                    {idx === 0 ? 'SEKRETARIS' : 'BENDAHARA'}
                  </span>
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-2 border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-colors">
                    <UserAvatar gender={member.jenisKelamin} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">{member.nama}</h4>
                  <span className="text-[10px] text-slate-400 uppercase font-semibold mt-1 tracking-wider">{member.jabatan}</span>
                  <span className="mt-3 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all">Tugas & Fungsi</span>
                </div>

                {/* Downward line to divisions */}
                <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Tier 3: Anggota (Grid 5 columns on desktop, beautifully laid out) */}
        <div className="relative">
          {/* Main split bar for divisions */}
          <div className="absolute top-0 left-[10%] right-[10%] h-0.5 bg-slate-300 dark:bg-slate-700 hidden md:block" />

          <div className="text-center mb-6 pt-4 hidden md:block">
            <span className="text-[10px] font-black tracking-widest text-slate-400 uppercase">DIVISI ANGGOTA LKMD</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto pt-4">
            {anggotaMembers.map((member, iIdx) => (
              <div 
                key={iIdx}
                onClick={() => setSelectedMember(member)}
                className="cursor-pointer group bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200/50 dark:border-slate-800/80 shadow-sm hover:shadow-xl hover:border-emerald-500 transition-all text-center flex flex-col items-center w-full max-w-[160px] mx-auto"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-slate-100 dark:border-slate-800 group-hover:border-emerald-500 transition-all">
                  <UserAvatar gender={member.jenisKelamin} className="w-full h-full object-cover" />
                </div>
                <h5 className="text-xs font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors line-clamp-1">{member.nama}</h5>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wide mt-1">ANGGOTA</span>
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
                Fungsi & Peran Utama:
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
