import { useState } from 'react';
import { 
  GraduationCap, Briefcase, Heart, Users, Activity, Layers, Globe, 
  ShieldCheck, Home, BarChart3, PieChart, Search, Info,
  BookOpen, TrendingUp, MapPin
} from 'lucide-react';
import { 
  demografiKeadaan,
  demografiKeadaanDusun,
  demografiPendidikan, 
  demografiPekerjaan, 
  demografiAgama, 
  demografiGolDarah, 
  demografiKelompokUmur, 
  demografiWargaNegara 
} from '../data';

interface DemographicsDashboardProps {
  initialSubTab?: string;
  onTabChange?: (tab: string) => void;
}

export default function DemographicsDashboard({ initialSubTab = 'keadaan_penduduk', onTabChange }: DemographicsDashboardProps) {
  const activeTab = initialSubTab;

  // Chart type switcher state: 'bar' or 'pie'
  const [chartType, setChartType] = useState<'bar' | 'pie'>('pie');
  
  // Search state for detailed Dusun table
  const [searchDusun, setSearchDusun] = useState<string>('');

  // Helper to format ratio strings exactly as requested
  const formatRatio = (lk: number | string, pr: number | string) => {
    const lkVal = lk === 0 ? '-' : lk;
    const prVal = pr === 0 ? '-' : pr;
    if (lkVal === '-' && prVal === '-') return '-/-';
    return `${lkVal}/${prVal}`;
  };

  // Page Configurations (individualized titles, descriptions and icons)
  const tabConfigs: Record<string, { 
    name: string; 
    icon: any; 
    dataset: any[]; 
    label: string; 
    title: string;
    description: string;
  }> = {
    keadaan_penduduk: { 
      name: 'Keadaan Penduduk', 
      icon: Home, 
      dataset: demografiKeadaan, 
      label: 'Keadaan Umum Kependudukan',
      title: 'Statistik Keadaan Penduduk',
      description: 'Analisis kependudukan Desa Besar II Terjun mencakup perbandingan jumlah kepala keluarga, distribusi gender, mutasi bulanan, dan perkembangan kependudukan.'
    }
  };

  const currentConfig = tabConfigs[activeTab] || tabConfigs.keadaan_penduduk;
  const dataset = currentConfig.dataset;
  const totalWarga = activeTab === 'keadaan_penduduk' ? 5011 : dataset.reduce((acc, curr) => acc + curr.jumlah, 0);

  // Modular Narratives Mapper for the Standard 6 tabs
  const tabUlasans: Record<string, {
    title: string;
    badge: string;
    points: string[];
    footerNote: string;
    icon: any;
  }> = {
    pendidikan: {
      title: 'Ulasan Demografi Pendidikan',
      badge: 'Analisis Pendidikan',
      icon: GraduationCap,
      points: [
        'Struktur tingkat pendidikan formal di Desa Besar II Terjun didominasi oleh warga yang Tamat SD / Sederajat (34.23% atau 1.600 Jiwa).',
        'Angka anak yang belum/tidak sekolah tercatat sebanyak 866 Jiwa (18.53%), diikuti lulusan SLTP/Sederajat sebanyak 780 Jiwa (16.69%), dan SLTA/Sederajat sebanyak 568 Jiwa (12.15%).',
        'Kombinasi warga berpendidikan tinggi (Sarjana S1, Diploma I/II/IV) yang berjumlah 28 Jiwa menjadi modal intelektual desa yang terus dibina oleh Tim KKN UNIMED guna mendongkrak minat studi lanjutan.'
      ],
      footerNote: 'Kecenderungan wajib belajar dasar berjalan dengan baik.'
    },
    pekerjaan: {
      title: 'Ulasan Profil Pekerjaan',
      badge: 'Analisis Pekerjaan',
      icon: Briefcase,
      points: [
        'Mata pencaharian penduduk Desa Besar II Terjun didominasi oleh kategori BELUM/TIDAK BEKERJA sebesar 25.72% (1.202 Jiwa), yang mencakup anak-anak usia non-produktif serta pencari kerja.',
        'Sektor rumah tangga memiliki porsi signifikan yaitu Mengurus Rumah Tangga sebanyak 975 Jiwa (20.86%) dan Pelajar/Mahasiswa sebanyak 894 Jiwa (19.13%).',
        'Sektor produktif riil digerakkan kuat oleh sektor agraris: Petani/Perkebunan sebanyak 736 Jiwa (15.75%) serta Buruh Tani/Perkebunan sebanyak 331 Jiwa (7.08%), disusul kekuatan mandiri dari kelompok Wiraswasta sebanyak 271 Jiwa (5.80%).'
      ],
      footerNote: 'Struktur ekonomi bertumpu kuat pada sektor pertanian & perkebunan.'
    },
    agama: {
      title: 'Ulasan Profil Keagamaan',
      badge: 'Analisis Keagamaan',
      icon: Heart,
      points: [
        'Desa Besar II Terjun menunjukkan profil keagamaan yang sangat homogen, dengan mayoritas mutlak penduduk memeluk agama ISLAM sebesar 99.98% (4.673 Jiwa).',
        'Satu-satunya kelompok agama lain yang terdata dalam catatan KK resmi semester ini adalah penganut agama KRISTEN sebanyak 1 Jiwa (0.02%) yang berjenis kelamin perempuan.',
        'Kelompok keagamaan lainnya (Katolik, Hindu, Budha, Khonghucu, serta Kepercayaan Terhadap Tuhan YME/Lainnya) tercatat nihil (0 Jiwa). Kerukunan dan kehidupan beragama di desa ini berjalan dengan damai dan penuh toleransi.'
      ],
      footerNote: 'Kehidupan keagamaan rukun, damai, dan solid dalam harmoni sosial.'
    },
    gol_darah: {
      title: 'Ulasan Profil Golongan Darah',
      badge: 'Analisis Golongan Darah',
      icon: Activity,
      points: [
        'Struktur golongan darah di Desa Besar II Terjun didominasi oleh kelompok warga dengan status BELUM MENGISI sebesar 96.94% (4.531 Jiwa). Hal ini mencerminkan ruang pengembangan pemutakhiran kartu keluarga.',
        'Dari kelompok masyarakat yang sudah mengisi datanya, pemegang Golongan Darah O menduduki posisi terbanyak sebesar 1.58% (74 Jiwa), disusul oleh B sebesar 0.58% (27 Jiwa) dan A sebesar 0.43% (20 Jiwa).',
        'Pemegang rhesus khusus seperti kelompok rhesus negatif O- tercatat sebanyak 5 Jiwa (0.11%), diikuti oleh AB sebanyak 9 Jiwa (0.19%). Data ini bernilai untuk pembentukan Bank Donor Darah Darurat desa.'
      ],
      footerNote: 'Kesiapsiagaan donor darah darurat desa terus diperkuat.'
    },
    kelompok_umur: {
      title: 'Ulasan Profil Kelompok Umur',
      badge: 'Analisis Rentang Usia',
      icon: Layers,
      points: [
        'Struktur umur menunjukkan persebaran yang dinamis dan berpotensi tinggi secara demografis. Kelompok usia produktif mendominasi struktur piramida penduduk desa secara keseluruhan.',
        'Kelompok Dewasa (usia 30-34 tahun) merupakan porsi terbesar dengan total 499 Jiwa (10.68%), disusul oleh kelompok Dewasa (usia 25-29 tahun) sebanyak 461 Jiwa (9.86%) dan kelompok Dewasa (usia 35-39 tahun) sebanyak 447 Jiwa (9.56%).',
        'Untuk kelompok anak-anak dan remaja, tercatat Remaja (usia 20-24 tahun) sebanyak 441 Jiwa (9.44%) serta Anak-anak (usia 10-14 tahun) sebanyak 153 Jiwa (3.27%). Ini memberikan peluang bonus demografi.'
      ],
      footerNote: 'Kesiapsiagaan bonus demografi desa terus dioptimalkan.'
    },
    warga_negara: {
      title: 'Ulasan Profil Kewarganegaraan',
      badge: 'Analisis Kewarganegaraan',
      icon: Globe,
      points: [
        'Administrasi kependudukan Desa Besar II Terjun menunjukkan integritas dan keselarasan hukum yang sangat matang. Tercatat 100.00% (4.674 Jiwa) penduduk desa berstatus hukum sebagai Warga Negara Indonesia (WNI).',
        'Tidak ada warga negara asing (WNA) maupun warga dengan status dua kewarganegaraan yang terdaftar secara aktif dalam semester ini.',
        'Homogenitas status kewarganegaraan ini memberikan kemudahan signifikan dalam penyaluran jaminan sosial, partisipasi pemilu, serta perlindungan hukum bagi segenap lapisan masyarakat.'
      ],
      footerNote: 'Keselarasan administrasi hukum kependudukan desa terus dipertahankan.'
    }
  };

  const ulasanData = tabUlasans[activeTab];

  return (
    <div className="w-full space-y-8">
      
      {/* 1. Page Banner Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3.5">
        <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
          <currentConfig.icon className="w-3.5 h-3.5" />
          <span>{currentConfig.name}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
          {currentConfig.title}
        </h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
          {currentConfig.description}
        </p>
      </div>



      {/* ==========================================
          TAB RENDERING: KEADAAN PENDUDUK (Dusun Detailed Table)
         ========================================== */}
      {activeTab === 'keadaan_penduduk' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-6">
            
            {/* Elegant Dynamic Digital Header (No Paper-Kop Style) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200/50 dark:border-slate-800/60">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl shrink-0">
                  <Home className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Database Kependudukan</span>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white leading-tight">Rekapitulasi Laporan Kependudukan</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-extrabold rounded-lg border border-emerald-500/20">
                  Terakhir di data 3 Agustus 2026
                </span>
                <span className="text-[10px] px-2.5 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 font-extrabold rounded-lg border border-blue-500/20">
                  Sumber: dari kantor desa
                </span>
              </div>
            </div>

            {/* Interactive Search Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchDusun}
                  onChange={(e) => setSearchDusun(e.target.value)}
                  placeholder="Cari Dusun (I - VIII)..."
                  className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-800 dark:text-slate-200"
                />
              </div>

              <div className="px-3.5 py-1.5 bg-slate-100 dark:bg-slate-900/40 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 rounded-xl border border-slate-200/50 dark:border-slate-800/40 flex items-center gap-2">
                <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span>Geser tabel ke kanan untuk melihat rincian mutasi</span>
              </div>
            </div>

            {/* Table Container - COMPACT SIZE ON MOBILE */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
              <table className="w-full border-collapse min-w-[760px] sm:min-w-[1100px] text-sm text-slate-800 dark:text-slate-200 font-medium">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 font-black text-[9px] sm:text-[11px] uppercase tracking-wider">
                    <th className="px-1 py-2 sm:px-2 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-10">No</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-20">Dusun</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-24">Jlh Penduduk</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-18">Jlh KK</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Penduduk Awal (LK/PR/JLH)</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Lahir (LK/PR)</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Meninggal Dunia (LK/PR)</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Datang (LK/PR)</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Pindah (LK/PR)</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-20">Wajib KTP</th>
                    <th className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center">Penduduk Akhir (LK/PR/JLH)</th>
                  </tr>
                </thead>
                <tbody>
                  {demografiKeadaanDusun
                    .filter(row => 
                      row.dusun.toLowerCase().includes(searchDusun.toLowerCase()) ||
                      `dusun ${row.dusun}`.toLowerCase().includes(searchDusun.toLowerCase())
                    )
                    .map((row, idx) => (
                      <tr 
                        key={row.dusun}
                        className="hover:bg-slate-50 dark:hover:bg-slate-900/50 border-b border-slate-150 dark:border-slate-800/60 text-center transition-colors text-[9px] sm:text-xs text-slate-800 dark:text-slate-300"
                      >
                        <td className="px-1 py-1.5 sm:px-2 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-extrabold text-slate-400">{idx + 1}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-black text-slate-950 dark:text-white">Dusun {row.dusun}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-bold">{row.jlhPenduduk}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60">{row.jlhKK}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 bg-slate-50/50 dark:bg-slate-900/30 font-medium">{row.awalLK}/{row.awalPR}/{row.awalJLH}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60">{formatRatio(row.lahirLK, row.lahirPR)}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-rose-600 dark:text-rose-400 font-semibold">{formatRatio(row.meninggalLK, row.meninggalPR)}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-blue-600 dark:text-blue-400 font-semibold">{formatRatio(row.datangLK, row.datangPR)}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60">{formatRatio(row.pindahLK, row.pindahPR)}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-slate-400">-</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-bold bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400">{row.akhirLK}/{row.akhirPR}/{row.akhirJLH}</td>
                      </tr>
                    ))}
                  
                  {/* Total Row */}
                  <tr className="bg-slate-50 dark:bg-slate-900/80 text-center font-extrabold text-[9px] sm:text-xs text-slate-950 dark:text-white border-t-2 border-slate-200 dark:border-slate-700">
                    <td colSpan={2} className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black uppercase text-center tracking-wider">JUMLAH</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">5001</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">1406</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black bg-slate-100/50 dark:bg-slate-900/50">2586/2418/5005</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-bold text-slate-400">-/-</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-bold text-rose-600 dark:text-rose-400">-/1</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-bold text-blue-600 dark:text-blue-400">6/5</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-bold text-slate-400">-/-</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 text-slate-400">-</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black bg-emerald-100/20 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">2588/2422/5011</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Detailed Data Analysis of the New Population Dynamics */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white uppercase tracking-wide">
                    Analisis & Tinjauan Naratif Dinamika Penduduk
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Ulasan perkembangan kependudukan dan rincian mutasi bulanan di setiap Dusun
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { d: 'Dusun I', p: '580', kk: '166', text: 'Memiliki jumlah penduduk 580 jiwa dengan 166 KK. Penduduk awal terdiri dari 296 laki-laki dan 284 perempuan. Tidak tercatat adanya kelahiran maupun kematian. Terdapat kedatangan warga sebanyak 2 laki-laki dan 2 perempuan, serta tidak ada yang pindah. Penduduk akhir bulan menjadi 298 laki-laki dan 286 perempuan, dengan total akhir 584 jiwa.' },
                  { d: 'Dusun II', p: '852', kk: '239', text: 'Memiliki jumlah penduduk 852 jiwa dengan 239 KK. Penduduk awal terdiri dari 454 laki-laki dan 398 perempuan. Tidak ada peristiwa kelahiran, kematian, warga datang, maupun pindah selama periode berjalan. Komposisi penduduk akhir bulan stabil sepenuhnya di angka 454 laki-laki dan 398 perempuan, dengan total tetap 852 jiwa.' },
                  { d: 'Dusun III', p: '649', kk: '184', text: 'Memiliki jumlah penduduk 649 jiwa dengan 184 KK. Penduduk awal tercatat 324 laki-laki dan 325 perempuan. Tidak tercatat adanya peristiwa kelahiran, kematian, warga datang, maupun warga pindah, sehingga jumlah penduduk akhir bulan tetap bertahan pada 324 laki-laki dan 325 perempuan, dengan total tetap 649 jiwa.' },
                  { d: 'Dusun IV', p: '721', kk: '210', text: 'Memiliki jumlah penduduk 721 jiwa dengan 210 KK. Penduduk awal terdiri dari 397 laki-laki dan 325 perempuan. Tidak ada kelahiran maupun kematian. Tercatat ada kedatangan warga berupa 1 laki-laki dan tidak ada yang pindah. Penduduk akhir bulan bergeser menjadi 397 laki-laki dan 325 perempuan, dengan total akhir 722 jiwa.' },
                  { d: 'Dusun V', p: '608', kk: '164', text: 'Memiliki jumlah penduduk 608 jiwa dengan 164 KK. Penduduk awal terdiri dari 306 laki-laki dan 302 perempuan. Periode ini mencatat dinamika vitalitas berupa 1 kematian laki-laki (kelahiran nihil). Mutasi kedatangan tercatat 3 laki-laki dan 3 perempuan, serta pindah nihil. Komposisi akhir bulan terakumulasi menjadi 308 laki-laki dan 305 perempuan, dengan total 613 jiwa.' },
                  { d: 'Dusun VI', p: '523', kk: '156', text: 'Memiliki jumlah penduduk 523 jiwa dengan 156 KK. Penduduk awal terdiri dari 268 laki-laki dan 255 perempuan. Tidak ada kelahiran, kematian, warga datang, maupun warga pindah. Jumlah kependudukan akhir bulan tetap utuh dan stabil di angka 268 laki-laki dan 255 perempuan, dengan total tetap 523 jiwa.' },
                  { d: 'Dusun VII', p: '497', kk: '135', text: 'Memiliki jumlah penduduk 497 jiwa dengan 135 KK. Penduduk awal tercatat 231 laki-laki dan 265 perempuan. Tidak terjadi peristiwa kelahiran, kematian, mutasi datang, maupun mutasi pindah. Hasil pencatatan administrasi akhir bulan tetap konstan pada angka 231 laki-laki dan 265 perempuan, dengan total tetap 497 jiwa.' },
                  { d: 'Dusun VIII', p: '571', kk: '177', text: 'Memiliki jumlah penduduk 571 jiwa dengan 177 KK. Penduduk awal tercatat terdiri dari 308 laki-laki dan 263 perempuan. Dikarenakan tidak adanya dinamika pertambahan atau pengurangan penduduk, jumlah penduduk akhir bulan stabil sepenuhnya di angka 308 laki-laki dan 263 perempuan, dengan total tetap 571 jiwa.' },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-150 dark:border-slate-800/80 space-y-2">
                    <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/60 pb-1.5">
                      <span className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider">{item.d}</span>
                      <div className="flex gap-1.5">
                        <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-bold rounded-md">{item.p} Jiwa</span>
                        <span className="text-[10px] px-2 py-0.5 bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold rounded-md">{item.kk} KK</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* Total Desa Overall Analytics Card */}
              <div className="p-5 bg-gradient-to-r from-emerald-900 to-slate-900 text-white rounded-2xl border border-emerald-800/30 shadow-lg space-y-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg">
                    <TrendingUp className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider">Ringkasan Dinamika Kumulatif Tingkat Desa</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  Secara keseluruhan, jumlah total penduduk desa adalah <strong>5.001 jiwa</strong> dengan <strong>1.406 KK</strong>. Penduduk awal terdata berjumlah <strong>2.586 laki-laki</strong> dan <strong>2.418 perempuan</strong> (total <strong>5.005 jiwa</strong>). Sepanjang periode pelaporan ini tercatat dinamika kependudukan berupa <strong>1 kematian</strong> (laki-laki di Dusun V), mutasi kedatangan sebanyak <strong>6 laki-laki</strong> dan <strong>5 perempuan</strong>, serta <strong>tidak ada yang pindah</strong>. Hal ini menghasilkan komposisi akhir bulan yang berkembang menjadi <strong>2.588 laki-laki</strong> dan <strong>2.422 perempuan</strong>, dengan total kumulatif akhir <strong>5.011 jiwa</strong>.
                </p>
              </div>
            </div>

            {/* Footnote explanation */}
            <div className="flex items-start space-x-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <Info className="w-4.5 h-4.5 text-[#1976D2] shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-slate-700 dark:text-slate-300">Penjelasan & Verifikasi Administrasi Desa:</p>
                <p className="font-normal">
                  Tabel di atas disajikan sesuai dengan data yang terpajang pada papan informasi di dalam kantor desa.
                </p>
              </div>
            </div>

            {/* Signatures */}
            <div className="mt-12 flex justify-end">
              <div className="text-center space-y-16 pr-6 sm:pr-12">
                <div className="space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <p className="font-medium text-slate-500">Besar II Terjun,</p>
                  <p className="font-bold text-slate-900 dark:text-white">Kepala Desa</p>
                </div>
                <div className="pt-2">
                  <p className="font-black text-xs sm:text-sm text-slate-950 dark:text-white underline decoration-2 decoration-slate-800 dark:decoration-slate-200 uppercase tracking-wide">
                    SULAIMAN SYAH
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ==========================================
          TAB RENDERING: STANDARD 6 DEMOGRAPHICS TABS (Modular & Highly Responsive)
         ========================================== */}
      {activeTab !== 'keadaan_penduduk' && ulasanData && (
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="space-y-6">
            
            {/* Elegant Dynamic Digital Header (No Paper-Kop Style) */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-5 border-b border-slate-200/50 dark:border-slate-800/60">
              <div className="flex items-center space-x-3.5">
                <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl shrink-0">
                  <ulasanData.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-wider">Arsip Rekapitulasi Desa</span>
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white leading-tight">{currentConfig.label}</h3>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 font-extrabold rounded-lg border border-emerald-500/20">
                  Semester I - 2026
                </span>
                <span className="text-[10px] px-2.5 py-1 bg-blue-500/10 text-blue-700 dark:text-blue-400 font-extrabold rounded-lg border border-blue-500/20">
                  Akurasi Tinggi 100%
                </span>
              </div>
            </div>

            {/* Compact Table Frame */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
              <table className="w-full border-collapse min-w-[600px] sm:min-w-[800px] text-sm text-slate-800 dark:text-slate-200 font-medium">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/90 text-slate-900 dark:text-white border-b-2 border-slate-200 dark:border-slate-700 font-black text-[9px] sm:text-[11px] uppercase tracking-wider">
                    <th rowSpan={2} className="px-1.5 py-2 sm:px-3 sm:py-4 border border-slate-200 dark:border-slate-700 text-center w-12">No</th>
                    <th rowSpan={2} className="px-2 py-2 sm:px-4 sm:py-4 border border-slate-200 dark:border-slate-700 text-left">Kelompok</th>
                    <th colSpan={2} className="px-1.5 py-1 border border-slate-200 dark:border-slate-700 text-center">Jumlah</th>
                    <th colSpan={2} className="px-1.5 py-1 border border-slate-200 dark:border-slate-700 text-center">Laki-laki</th>
                    <th colSpan={2} className="px-1.5 py-1 border border-slate-200 dark:border-slate-700 text-center">Perempuan</th>
                  </tr>
                  <tr className="bg-slate-50/50 dark:bg-slate-900/50 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 font-bold text-[8px] sm:text-[10px] uppercase tracking-wider">
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">n</th>
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">%</th>
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">n</th>
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">%</th>
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">n</th>
                    <th className="px-1.5 py-1 sm:px-3 sm:py-2 border border-slate-200 dark:border-slate-700 text-center w-20">%</th>
                  </tr>
                </thead>
                <tbody>
                  {dataset.map((row: any, idx: number) => {
                    const isBelumMengisi = row.kategori === 'BELUM MENGISI';
                    return (
                      <tr 
                        key={row.kategori}
                        className={`hover:bg-slate-50 dark:hover:bg-slate-900/50 border-b border-slate-150 dark:border-slate-800/60 text-center transition-colors text-[9px] sm:text-xs text-slate-800 dark:text-slate-300 ${
                          isBelumMengisi ? 'font-bold bg-slate-50/60 dark:bg-slate-900/40' : ''
                        }`}
                      >
                        <td className="px-1 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-extrabold text-slate-400">
                          {isBelumMengisi ? '' : idx + 1}
                        </td>
                        <td className="px-2 py-1.5 sm:px-4 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-left font-black text-slate-900 dark:text-white">
                          {row.kategori}
                        </td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 font-bold">{row.jumlah}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-slate-500 font-semibold">{row.persentase.toFixed(2)}%</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 bg-slate-50/40 dark:bg-slate-900/20">{row.lk !== undefined ? row.lk : '-'}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-slate-500 bg-slate-50/40 dark:bg-slate-900/20 font-semibold">{row.lkPersen !== undefined ? `${row.lkPersen.toFixed(2)}%` : '-'}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60">{row.pr !== undefined ? row.pr : '-'}</td>
                        <td className="px-1.5 py-1.5 sm:px-3 sm:py-3 border border-slate-150 dark:border-slate-800/60 text-slate-500 font-semibold">{row.prPersen !== undefined ? `${row.prPersen.toFixed(2)}%` : '-'}</td>
                      </tr>
                    );
                  })}
                  
                  {/* Total Row */}
                  <tr className="bg-slate-50 dark:bg-slate-900/80 text-center font-black text-[9px] sm:text-xs text-slate-950 dark:text-white border-t-2 border-slate-200 dark:border-slate-700">
                    <td colSpan={2} className="px-2 py-3 border border-slate-200 dark:border-slate-700 font-black uppercase text-center tracking-wider">TOTAL</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">4674</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">100%</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black bg-slate-100/50 dark:bg-slate-900/50">2406</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black bg-slate-100/50 dark:bg-slate-900/50">51.48%</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">2268</td>
                    <td className="px-1.5 py-3 border border-slate-200 dark:border-slate-700 font-black">48.52%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Visualisasi Infografis & Ulasan (FIXED OVERFLOW & MOBILE STACKING) */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 rounded-xl">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white uppercase tracking-wide">
                    Visualisasi & Ulasan Singkat {ulasanData.badge}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Grafik interaktif representasi kelompok data dan ulasan analisis resmi desa
                  </p>
                </div>
              </div>

              {/* Responsive Grid Panel (No horizontal bleed) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full max-w-full overflow-hidden min-w-0">
                
                {/* Left Side: Chart Card (Col 7) */}
                <div className="lg:col-span-7 bg-slate-50/50 dark:bg-slate-900/30 p-4 sm:p-6 rounded-2xl border border-slate-100 dark:border-slate-800/40 space-y-4 w-full max-w-full overflow-hidden min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <span className="text-xs font-bold text-slate-500">Pilih Model Visualisasi:</span>
                    <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                      <button
                        onClick={() => setChartType('pie')}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          chartType === 'pie'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <PieChart className="w-3.5 h-3.5" />
                        <span>Grafik Lingkar (Pie)</span>
                      </button>
                      <button
                        onClick={() => setChartType('bar')}
                        className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          chartType === 'bar'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        <BarChart3 className="w-3.5 h-3.5" />
                        <span>Grafik Batang</span>
                      </button>
                    </div>
                  </div>

                  {/* SVG Chart Frame */}
                  <div className="bg-white dark:bg-slate-950 p-3 sm:p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 min-h-[300px] flex flex-col justify-center shadow-inner w-full overflow-hidden">
                    {chartType === 'pie' ? (
                      <PieChartComponent data={dataset.filter(item => item.jumlah > 0)} totalVal={4674} />
                    ) : (
                      <BarChartComponent data={dataset.filter(item => item.jumlah > 0)} />
                    )}
                  </div>
                </div>

                {/* Right Side: Narrative Review Card (Col 5) */}
                <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 sm:p-8 rounded-2xl border border-white/5 shadow-xl flex flex-col justify-between space-y-4 w-full max-w-full overflow-hidden min-w-0">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest block">Analisis Data</span>
                      <h5 className="text-sm sm:text-base font-black text-white">{ulasanData.title}</h5>
                      <div className="h-0.5 w-12 bg-emerald-500 rounded-full" />
                    </div>

                    <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3 font-normal">
                      {ulasanData.points.map((pt, i) => (
                        <p key={i}>{pt}</p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center space-x-2 text-[10px] sm:text-[11px] text-slate-400 font-bold">
                    <TrendingUp className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{ulasanData.footerNote}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Verification Footnote */}
            <div className="flex items-start space-x-2.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
              <ShieldCheck className="w-4.5 h-4.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-slate-700 dark:text-slate-300 font-semibold">Sumber Data Resmi Desa:</p>
                <p className="font-normal">
                  Data di atas bersumber dari pencatatan kependudukan resmi Desa Besar II Terjun Semester I Tahun 2026. Jumlah total responden/penduduk terdata dalam kategori ini adalah <strong>4.674 jiwa</strong> (2.406 laki-laki dan 2.268 perempuan), yang ditarik dari dokumen resmi Kartu Keluarga (KK).
                </p>
              </div>
            </div>

            {/* Official Stamps */}
            <div className="mt-12 flex justify-end">
              <div className="text-center space-y-16 pr-6 sm:pr-12">
                <div className="space-y-1 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                  <p className="font-medium text-slate-500">Besar II Terjun,</p>
                  <p className="font-bold text-slate-900 dark:text-white">Kepala Desa</p>
                </div>
                <div className="pt-2">
                  <p className="font-black text-xs sm:text-sm text-slate-950 dark:text-white underline decoration-2 decoration-slate-800 dark:decoration-slate-200 uppercase tracking-wide">
                    SULAIMAN SYAH
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

/* ==========================================================
   NATIVE INTERACTIVE SVG PIE CHART COMPONENT
   ========================================================== */
function PieChartComponent({ data, totalVal }: { data: { kategori: string; jumlah: number; persentase: number }[]; totalVal: number }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const colors = [
    '#059669', '#14b8a6', '#2563eb', '#d97706', 
    '#4f46e5', '#0ea5e9', '#ea580c', '#475569'
  ];

  const cx = 100;
  const cy = 100;
  const r = 80;

  let accumulatedAngle = -90;

  const slices = data.map((item, idx) => {
    const percentage = item.persentase;
    const angleSpan = (percentage / 100) * 360;
    const startAngle = accumulatedAngle;
    const endAngle = accumulatedAngle + angleSpan;
    accumulatedAngle = endAngle;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const largeArcFlag = percentage > 50 ? 1 : 0;

    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);

    const isFullCircle = percentage >= 99.9;
    const pathData = isFullCircle
      ? `M ${cx} ${cy - r} A ${r} ${r} 0 1 1 ${cx - 0.01} ${cy - r} Z`
      : `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

    const bisectorAngle = startAngle + angleSpan / 2;
    const bisectorRad = (bisectorAngle * Math.PI) / 180;
    const tx = Math.cos(bisectorRad) * 6;
    const ty = Math.sin(bisectorRad) * 6;

    return {
      ...item,
      pathData,
      color: colors[idx % colors.length],
      tx,
      ty
    };
  });

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-2 w-full">
      {/* Pie svg canvas */}
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 200 200">
          {slices.map((slice, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <path
                key={idx}
                d={slice.pathData}
                fill={slice.color}
                stroke="#ffffff"
                strokeWidth="1.5"
                className="transition-all duration-300 cursor-pointer"
                style={{
                  transform: isHovered ? `translate(${slice.tx}px, ${slice.ty}px)` : 'translate(0px, 0px)',
                  transformOrigin: '100px 100px',
                  filter: isHovered ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' : 'none'
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              />
            );
          })}
        </svg>
      </div>
      
      {/* Interactive Legend Side */}
      <div className="flex-grow space-y-1 w-full max-w-sm">
        {/* Dynamic Focus Header */}
        <div className="bg-slate-100 dark:bg-slate-900/60 px-4 h-16 rounded-xl border border-slate-200/40 dark:border-slate-800/60 mb-2 flex flex-col justify-center overflow-hidden">
          {hoveredIdx !== null ? (
            <div className="animate-in fade-in slide-in-from-bottom-1 duration-200">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 block truncate">
                Fokus: {data[hoveredIdx].kategori}
              </span>
              <div className="flex items-center justify-between mt-0.5">
                <span className="text-xs sm:text-sm font-black text-slate-800 dark:text-white">
                  {data[hoveredIdx].jumlah.toLocaleString('id-ID')} Jiwa
                </span>
                <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  {data[hoveredIdx].persentase}%
                </span>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-1 duration-200">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 block">
                Petunjuk Interaksi
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold mt-0.5 truncate">
                Arahkan kursor atau sentuh grafik untuk rincian.
              </p>
            </div>
          )}
        </div>

        <div className="max-h-[160px] overflow-y-auto pr-1 scrollbar-thin">
          {data.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex items-center justify-between px-2 py-1 rounded-lg border transition-colors text-xs cursor-pointer ${
                hoveredIdx === idx 
                  ? 'bg-emerald-500/10 border-emerald-500/20 dark:bg-slate-900' 
                  : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/40'
              }`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex items-center space-x-2.5 min-w-0">
                <div 
                  className="w-2.5 h-2.5 rounded-full shrink-0" 
                  style={{ backgroundColor: colors[idx % colors.length] }}
                />
                <span className="font-bold text-slate-750 dark:text-slate-300 truncate">{item.kategori}</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-400 shrink-0 pl-1">
                <span className="font-semibold">{item.jumlah}</span>
                <span className="px-1.5 py-0.5 rounded-md bg-emerald-500/5 dark:bg-emerald-500/10 font-black text-[9px] text-emerald-600 dark:text-emerald-400">
                  {item.persentase}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================================
   NATIVE INTERACTIVE SVG BAR CHART COMPONENT
   ========================================================== */
function BarChartComponent({ data }: { data: { kategori: string; jumlah: number; persentase: number }[] }) {
  const maxVal = Math.max(...data.map(d => d.jumlah));
  const colors = [
    '#059669', '#14b8a6', '#2563eb', '#d97706', 
    '#4f46e5', '#0ea5e9', '#ea580c', '#475569'
  ];
  
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <div className="py-2 space-y-4 w-full overflow-hidden">
      {/* Bars canvas */}
      <div className="h-56 flex items-stretch border-b border-slate-200 dark:border-slate-800 pb-2 relative w-full">
        
        {/* Y-Axis Labels */}
        <div className="w-8 flex flex-col justify-between text-right pr-2 select-none shrink-0 text-[8px] text-slate-400 dark:text-slate-500 font-black pb-5 pt-2">
          {[1, 0.75, 0.5, 0.25, 0].map((ratio, idx) => (
            <span key={idx} className="h-3.5 leading-none">
              {Math.round(maxVal * ratio)}
            </span>
          ))}
        </div>

        {/* Scrollable Bar Area */}
        <div className="flex-grow overflow-x-auto scrollbar-thin relative pb-5 w-full">
          <div 
            className="h-full flex flex-col justify-end relative"
            style={{ minWidth: data.length > 5 ? `${data.length * 48}px` : '100%' }}
          >
            {/* Grid lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none select-none pb-5 pt-2">
              {[1, 0.75, 0.5, 0.25, 0].map((_, idx) => (
                <div key={idx} className="w-full flex items-center">
                  <div className="h-px bg-slate-100 dark:bg-slate-800/50 flex-grow" />
                </div>
              ))}
            </div>

            {/* Bars */}
            <div className="w-full h-full flex items-end justify-around gap-1.5 z-10 pb-5 pt-2">
              {data.map((item, idx) => {
                const heightPercent = maxVal > 0 ? (item.jumlah / maxVal) * 85 : 0;
                const isHovered = hoveredIdx === idx;
                
                return (
                  <div 
                    key={idx} 
                    className="flex flex-col items-center flex-1 h-full justify-end group cursor-pointer relative min-w-0"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    {/* Tooltip */}
                    <div className={`absolute -top-10 bg-slate-950 dark:bg-slate-900 text-white text-[9px] px-2 py-1 rounded-lg font-bold shadow-xl transition-all duration-200 whitespace-nowrap z-30 pointer-events-none flex flex-col items-center ${
                      isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-90'
                    }`}>
                      <span className="text-emerald-400 text-[10px] font-black">{item.jumlah} Jiwa ({item.persentase}%)</span>
                    </div>

                    {/* Column */}
                    <div 
                      className="w-full sm:w-8 rounded-t-lg transition-all duration-300 relative overflow-hidden flex flex-col justify-end"
                      style={{ 
                        height: `${heightPercent}%`, 
                        backgroundColor: colors[idx % colors.length],
                        opacity: hoveredIdx === null || isHovered ? 1 : 0.6,
                        transform: isHovered ? 'translateY(-2px)' : 'none'
                      }}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-10 pointer-events-none" />
                    </div>

                    {/* Labels */}
                    <span className="text-[8px] font-black text-slate-400 dark:text-slate-500 mt-1.5 truncate w-full text-center group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors px-0.5">
                      {item.kategori.length > 10 ? item.kategori.substring(0, 8) + ".." : item.kategori}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Structured Details Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1 scrollbar-thin">
        {data.map((item, idx) => (
          <div 
            key={idx}
            className={`flex items-center justify-between p-2 rounded-lg border transition-all text-xs cursor-pointer ${
              hoveredIdx === idx 
                ? 'bg-emerald-500/10 border-emerald-500/20 shadow-sm' 
                : 'border-transparent hover:bg-slate-100 dark:hover:bg-slate-900/40'
            }`}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            <div className="flex items-center space-x-2 min-w-0">
              <div 
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: colors[idx % colors.length] }}
              />
              <span className="font-bold text-slate-700 dark:text-slate-300 truncate">{item.kategori}</span>
            </div>
            <div className="flex items-center space-x-2 shrink-0 pl-1 text-[11px]">
              <span className="font-semibold text-slate-500">{item.jumlah}</span>
              <span className="font-black text-emerald-600 dark:text-emerald-400 bg-emerald-500/5 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded-md">
                {item.persentase}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
