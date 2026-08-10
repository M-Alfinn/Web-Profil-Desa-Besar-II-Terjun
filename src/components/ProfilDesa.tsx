import { useState } from 'react';
import { 
  Eye, Target, Map, Users, Briefcase, Landmark, Sprout, 
  ShieldCheck, BookOpen, UserCheck, Hammer, Check, MapPin, 
  TrendingUp, Calendar, Trophy, ChevronRight, Award, Quote, Compass
} from 'lucide-react';

interface ProfilDesaProps {
  mode: 'sejarah' | 'profil' | 'visi_misi';
}

export default function ProfilDesa({ mode }: ProfilDesaProps) {
  // Tab switcher state for historical achievements
  const [activeEra, setActiveEra] = useState<'perintis' | 'modern'>('modern');

  const mataPencaharianDefinitif = [
    { nama: 'Petani', deskripsi: 'Warga yang mengelola sektor pertanian padi sawah produktif secara mandiri maupun berkelompok.', icon: Sprout, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
    { nama: 'Pekebun', deskripsi: 'Warga yang mengelola perkebunan tanaman pangan, perkebunan rakyat, dan kebun campuran.', icon: Sprout, color: 'bg-teal-500/10 text-teal-600 dark:text-teal-400' },
    { nama: 'Pelaku UMKM', deskripsi: 'Warga kreatif yang menjalankan usaha mikro, kecil, dan menengah untuk mendukung perekonomian lokal.', icon: Briefcase, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400' },
    { nama: 'Dan Lain-Lain', deskripsi: 'Profesi penunjang lainnya seperti buruh, penyedia jasa, karyawan swasta, dan mata pencaharian lainnya.', icon: Users, color: 'bg-slate-500/10 text-slate-600 dark:text-slate-400' },
  ];

  return (
    <section id="profil" className="py-16 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-900/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            1. REFINED EDITORIAL HEADER (NO Repetitive Boxing)
           ========================================== */}
        {mode === 'profil' && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
              <Compass className="w-3.5 h-3.5" />
              <span>Profil Wilayah</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
              Gambaran Umum & Letak Geografis
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              Identitas spasial, bentang agraris subur, batas administratif, serta karakteristik sosial-ekonomi penduduk Desa Besar II Terjun.
            </p>
          </div>
        )}

        {mode === 'sejarah' && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Sejarah Desa</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
              Kronologi & Rekam Jejak Desa
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              Arsip kronologi pembukaan wilayah, silsilah ketokohan Kepala Desa, serta dokumentasi kemajuan pembangunan infrastruktur fisik desa.
            </p>
          </div>
        )}

        {mode === 'visi_misi' && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
              <Target className="w-3.5 h-3.5" />
              <span>Arah Kebijakan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
              Visi & Misi Pembangunan
            </h2>
            <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
              Rencana aksi jangka panjang, pilar kemakmuran, dan komitmen pengabdian jajaran Pemerintah Desa Besar II Terjun.
            </p>
          </div>
        )}

        {/* ==========================================
            2. INTERACTIVE EDITORIAL BODY (FLATTENED DEPTH, OPEN CONCEPT)
           ========================================== */}
        <div className="space-y-16">
          
          {/* ==========================================
              MODE: PROFIL (Open, Typographic & Visual Layout)
             ========================================== */}
          {mode === 'profil' && (
            <div className="space-y-20 animate-in fade-in duration-500">
              
              {/* Part A: Spacious Scoreboard Statistics (No card borders) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-slate-150 dark:border-slate-800 text-center md:text-left">
                <div className="space-y-2 md:pr-6 md:border-r border-slate-150 dark:border-slate-800">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Struktur Administrasi</span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">8 Wilayah Dusun</div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Kecamatan Pantai Cermin, Kabupaten Serdang Bedagai.</p>
                </div>

                <div className="space-y-2 md:pl-6">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Letak Strategis</span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white">Akses Pesisir</div>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Hanya 10 menit menuju garis pantai wisata Pantai Cermin.</p>
                </div>
              </div>

              {/* Part B: Asymmetric Editorial Row (Split Text / Overlapping Image Grid) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center space-x-2 text-xs font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1 rounded-full border border-emerald-500/10">
                    <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                    <span>Gerbang Informasi Resmi KKN UNIMED 2026</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight leading-snug">
                    BENTANG ALAM AGRIBISNIS DESA BESAR II TERJUN
                  </h3>
                  
                  <div className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed space-y-4 font-normal">
                    <p>
                      Desa Besar II Terjun berdiri kokoh sebagai salah satu sentra agraris produktif di wilayah pesisir Kabupaten Serdang Bedagai, Sumatra Utara. Dikelilingi udara segar pedesaan, wilayah ini menyajikan harmoni alam berupa hamparan persawahan basah hijau sejauh mata memandang, berseling dengan rapi jajaran kebun produktif yang dikelola secara terpadu oleh warga setempat.
                    </p>
                    <p>
                      Kehidupan sosial warga dihiasi nilai-nilai kebudayaan adat suku Melayu dan Jawa yang kental. Kehangatan, keramahtamahan, dan gotong-royong merupakan denyut nadi harian masyarakat desa, menjadikannya destinasi yang bersahabat bagi siapa saja yang berkunjung untuk belajar maupun berwisata.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  {/* Overlapping Image Grid with custom spacing */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-150 dark:border-slate-800 shadow-xl z-10 bg-slate-100">
                    <img
                      src="..\assets\Foto\Tentang Desa\1.jpg"
                      alt="Sawah Desa Besar II Terjun"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-6 -left-6 p-4 rounded-xl bg-slate-950/90 text-white max-w-[250px] border border-white/10 hidden sm:block shadow-2xl z-20">
                    <span className="text-emerald-400 font-extrabold text-[9px] uppercase tracking-wider block">Karakter Wilayah</span>
                    <p className="text-[11px] text-slate-300 leading-normal mt-1">"Tanah subur beraliran irigasi berpadu warisan adat luhur Pantai Cermin."</p>
                  </div>
                </div>
              </div>
              {/* Part C removed per user request */}

              {/* Part D: Livelihood demographic distributions (Editorial Split Layout) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-12 border-t border-slate-150 dark:border-slate-800">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Struktur Demografi</span>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white tracking-tight leading-snug">
                    STRUKTUR MATA PENCAHARIAN WARGA
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-normal">
                    Distribusi pekerjaan mayoritas penduduk mencerminkan karakter agraris tangguh yang dinamis, dengan sektor persawahan padi sebagai pilar utama kehidupan perekonomian desa.
                  </p>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {mataPencaharianDefinitif.map((penc, index) => {
                    const Icon = penc.icon;
                    return (
                      <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 rounded-2xl flex items-start gap-3">
                        <div className={`p-2.5 rounded-xl shrink-0 ${penc.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="space-y-1 text-left">
                          <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">
                            {penc.nama}
                          </h4>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                            {penc.deskripsi}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          )}

          {/* ==========================================
              MODE: SEJARAH (Chronology & Leadership)
             ========================================== */}
          {mode === 'sejarah' && (
            <div className="space-y-20 animate-in fade-in duration-500">
              
              {/* Part 1: Historical Chronicle Timeline Layout (NO Nested Card Box) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Left hand structural chronology steps */}
                <div className="lg:col-span-8 space-y-12">
                  <div className="space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white tracking-tight">
                      KRONIK ASAL-USUL PEMBENTUKAN WILAYAH
                    </h3>
                    <div className="h-1 w-16 bg-emerald-600 rounded-full" />
                  </div>

                  {/* Chronicle Events */}
                  <div className="space-y-8 relative pl-6 border-l border-emerald-500/20">
                    {/* Event 1 */}
                    <div className="relative space-y-2">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950" />
                      <div className="flex items-center space-x-2 text-xs font-black text-emerald-700">
                        <span className="text-sm">Tahun 1941</span>
                        <span>•</span>
                        <span className="uppercase tracking-wider">Masa Kolonial & Perintisan</span>
                      </div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white">Pembukaan Lahan Pertanian Pertama</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                        Kawasan rintisan pemukiman mulai dibuka secara bergotong royong di masa akhir penjajahan Belanda. Warga membuka lahan persawahan subur yang terbagi dalam dua pemukiman mandiri bernama Kampung Besar I dan Kampung Besar II.
                      </p>
                    </div>

                    {/* Event 2 */}
                    <div className="relative space-y-2">
                      <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-600 border-4 border-white dark:border-slate-950" />
                      <div className="flex items-center space-x-2 text-xs font-black text-emerald-700">
                        <span className="text-sm">Tahun 1948</span>
                        <span>•</span>
                        <span className="uppercase tracking-wider">Penyatuan Administratif</span>
                      </div>
                      <h4 className="text-base font-black text-slate-900 dark:text-white">Lahirnya Nama Desa Besar II Terjun</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
                        Pasca proklamasi, para tokoh melangsungkan musyawarah penggabungan Kampung Besar I dan Kampung Besar II guna mempersatukan pelayanan administrasi terpusat. Mengingat letak balai pelayanan berada di Kampung Besar II, maka disepakatilah nama gabungan resmi "Desa Besar II Terjun". Nama Terjun sendiri diabadikan dari air terjun alam kecil di aliran sungai batas Dusun VII dengan Lubuk Cemara.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right hand historic quick facts */}
                <div className="lg:col-span-4 space-y-6 lg:border-l border-slate-150 dark:border-slate-800 lg:pl-8">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Intisari Sejarah</span>
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-slate-100">
                      <img 
                        src="..\assets\Foto\Tentang Desa\Sejarah2.png"
                        alt="Kondisi Historis Desa"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-3.5 text-xs text-slate-600">
                      <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-2">
                        <span className="font-semibold text-slate-400">Tahun Perintisan</span>
                        <span className="font-black text-slate-800 dark:text-white text-right">1941</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 dark:border-slate-850 pb-2">
                        <span className="font-semibold text-slate-400">Penyatuan Wilayah</span>
                        <span className="font-black text-slate-800 dark:text-white text-right">1948</span>
                      </div>
                      <div className="flex justify-between items-start pb-2">
                        <span className="font-semibold text-slate-400 shrink-0">Inspirasi "Terjun"</span>
                        <span className="font-black text-slate-800 dark:text-white text-right">Muara Air Terjun Alami Kecil di Batas Dusun VII</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Part 2: Leadership Timeline - MOBILE & DESKTOP INDEPENDENT DESIGNS (Silsilah Kepemimpinan) */}
              <div className="space-y-10 py-10 border-t border-slate-150 dark:border-slate-800">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Silsilah Kepemimpinan</span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white uppercase flex items-center justify-center gap-2">
                    <UserCheck className="w-5 h-5 text-emerald-600" />
                    Masa Bakti Kepala Desa Dari Masa ke Masa
                  </h4>
                  <p className="text-xs text-slate-500">
                    Estafet kepemimpinan jajaran Kepala Desa Besar II Terjun yang telah mendedikasikan tenaga dan pikirannya sejak awal berdirinya desa.
                  </p>
                </div>

                {/* --- DESKTOP VIEW: PREMIUM CHRONOLOGICAL GRID (Only visible on MD+) --- */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {[
                    { no: 1, nama: 'KAMARUDDIN', periode: 'Periode Pertama (I)', status: 'Mantan Kades' },
                    { no: 2, nama: 'MOLKAN', periode: 'Periode Kedua (II)', status: 'Mantan Kades' },
                    { no: 3, nama: 'OK. JAMIL', periode: 'Periode Ketiga (III)', status: 'Mantan Kades' },
                    { no: 4, nama: 'HARUN ARASYID', periode: 'Periode Keempat (IV)', status: 'Mantan Kades' },
                    { no: 5, nama: 'AHMAT. J', periode: 'Periode Kelima (V)', status: 'Mantan Kades' },
                    { no: 6, nama: 'SAYUTI AS', periode: '1972 - 2007 (± 35 Tahun)', status: 'Kades Terlama', highlight: true },
                    { no: 7, nama: 'SULAIMANSYAH', periode: '2007 - Sekarang', status: 'Kades Aktif', active: true }
                  ].map((leader) => (
                    <div 
                      key={leader.no} 
                      className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 ${
                        leader.active 
                          ? 'bg-emerald-600 text-white border-emerald-600 shadow-xl shadow-emerald-500/10 scale-102' 
                          : leader.highlight 
                            ? 'bg-amber-500/[0.04] dark:bg-amber-500/[0.01] border-amber-500/30' 
                            : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 hover:border-slate-350 shadow-sm'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md ${
                          leader.active 
                            ? 'bg-white/20 text-white' 
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                        }`}>
                          Silsilah No. 0{leader.no}
                        </span>
                        <span className={`text-[9px] font-extrabold uppercase ${
                          leader.active ? 'text-emerald-200' : 'text-slate-400'
                        }`}>
                          {leader.status}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <h5 className="text-sm font-black tracking-tight leading-tight uppercase">{leader.nama}</h5>
                        <p className={`text-xs ${leader.active ? 'text-emerald-100' : 'text-slate-500 dark:text-slate-400'} font-semibold`}>
                          {leader.periode}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* --- MOBILE VIEW: CLEAN, READABLE VERTICAL NODE FLOW (Only visible on Mobile < MD) --- */}
                <div className="md:hidden space-y-6 relative pl-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-150 dark:before:bg-slate-850">
                  {[
                    { no: 1, nama: 'KAMARUDDIN', periode: 'Periode Pertama (I)', status: 'Mantan Kades' },
                    { no: 2, nama: 'MOLKAN', periode: 'Periode Kedua (II)', status: 'Mantan Kades' },
                    { no: 3, nama: 'OK. JAMIL', periode: 'Periode Ketiga (III)', status: 'Mantan Kades' },
                    { no: 4, nama: 'HARUN ARASYID', periode: 'Periode Keempat (IV)', status: 'Mantan Kades' },
                    { no: 5, nama: 'AHMAT. J', periode: 'Periode Kelima (V)', status: 'Mantan Kades' },
                    { no: 6, nama: 'SAYUTI AS', periode: '1972 - 2007 (± 35 Tahun)', status: 'Kades Terlama', highlight: true },
                    { no: 7, nama: 'SULAIMANSYAH', periode: '2007 - Sekarang', status: 'Kades Aktif', active: true }
                  ].map((leader) => (
                    <div key={leader.no} className="relative pl-6 space-y-1.5">
                      {/* Left Circle Node Indicator */}
                      <div className={`absolute -left-[23px] top-1.5 w-3 h-3 rounded-full border-2 ${
                        leader.active 
                          ? 'bg-emerald-600 border-white dark:border-slate-950 scale-125' 
                          : 'bg-slate-300 border-white dark:border-slate-950'
                      }`} />

                      <div className="flex items-center justify-between text-[10px] font-black leading-none gap-2">
                        <span className="text-emerald-600 uppercase tracking-widest">Silsilah No. 0{leader.no}</span>
                        <span className={`uppercase font-extrabold ${leader.active ? 'text-emerald-600' : 'text-slate-400'}`}>
                          {leader.status}
                        </span>
                      </div>
                      
                      <h5 className="text-sm font-black text-slate-900 dark:text-white leading-tight uppercase">{leader.nama}</h5>
                      <p className="text-xs text-slate-500 font-semibold leading-none">{leader.periode}</p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Part 3: Accomplishments Directory (Rekam Jejak Pembangunan - Clean open layout) */}
              <div className="space-y-8 py-10 border-t border-slate-150 dark:border-slate-800">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Infrastruktur</span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white uppercase flex items-center justify-center gap-2">
                    <Hammer className="w-5 h-5 text-emerald-600" />
                    Arsip Rekam Jejak Pembangunan Fisik
                  </h4>
                  <p className="text-xs text-slate-500">
                    Sistem inventarisasi digital pencatatan pembangunan sarana fisik penunjang kemakmuran warga.
                  </p>
                </div>

                {/* Selector bar */}
                <div className="flex justify-center">
                  <div className="inline-flex bg-slate-50 dark:bg-slate-950 p-1 rounded-xl border border-slate-250/60 dark:border-slate-850">
                    <button
                      onClick={() => setActiveEra('perintis')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        activeEra === 'perintis'
                          ? 'bg-slate-900 text-white shadow'
                          : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Era Perintis & Pemeliharaan</span>
                    </button>
                    
                    <button
                      onClick={() => setActiveEra('modern')}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        activeEra === 'modern'
                          ? 'bg-emerald-600 text-white shadow'
                          : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Masa Bakti Sulaimansyah</span>
                    </button>
                  </div>
                </div>

                {/* Structured open list (No Nested Card Grid inside card background) */}
                <div className="pt-4">
                  {activeEra === 'perintis' ? (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="border-b border-slate-100 dark:border-slate-850 pb-2">
                        <h5 className="text-xs font-black uppercase text-slate-400 tracking-widest">Era Penggabungan Awal</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 pl-1">
                        {[
                          'Pembangunan Dam Irigasi di Dusun IV Sei Rencah',
                          'Pembangunan Dam Irigasi Penahan Air di Dusun VII',
                          'Pembangunan Gedung Koperasi Unit Desa (KUD) Berkat di Dusun I',
                          'Pembangunan Gedung Sekolah Dasar (SD) Negeri No.106192 di Dusun I',
                          'Rehabilitasi Gedung Sekolah SD Negeri di Dusun VI',
                          'Pembangunan Jembatan Beton Penghubung Dusun VII menuju Dusun III',
                          'Pembangunan Jembatan Beton Penghubung Dusun II menuju Dusun III',
                          'Pembangunan Jembatan Beton Utama Dusun I menuju Dusun II',
                          'Pembangunan Jembatan Beton Penghubung di Dusun VIII',
                          'Pembangunan pengerasan jalan sertu di Dusun I, II, III, IV, V dan VI',
                          'Pembangunan pengerasan jalan sertu di Dusun VII menuju Dusun VIII',
                          'Instalasi jaringan Pompanisasi di Dusun I, III, V, VI, VII dan VIII'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3 text-xs text-slate-600 py-1.5 border-b border-slate-50 dark:border-slate-900">
                            <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-semibold">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="border-b border-slate-100 dark:border-slate-850 pb-2">
                        <h5 className="text-xs font-black uppercase text-emerald-600 tracking-widest">Modernisasi & Pembangunan Desa</h5>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[450px] overflow-y-auto pr-1 scrollbar-thin">
                        {[
                          { text: 'Pembangunan Poskesmas Pembantu (Pustu) di Dusun IV', cat: 'Kesehatan' },
                          { text: 'Pengaspalan hotmix utama Dusun III menuju Dusun IV', cat: 'Jalan' },
                          { text: 'Melanjutkan pengaspalan Hotmix jalan Dusun IV menuju Dusun VI', cat: 'Jalan' },
                          { text: 'Pembangunan kantor Kepala Desa Besar II Terjun di Dusun II (2011-2014)', cat: 'Pelayanan' },
                          { text: 'Pembangunan Gedung Pendidikan MDA Terintegrasi di Dusun IV', cat: 'Pendidikan' },
                          { text: 'Rehabilitasi total sarana sekolah MDA di Dusun VIII', cat: 'Pendidikan' },
                          { text: 'Pembangunan satu unit Sarana Air Bersih warga di Dusun II', cat: 'Fasilitas' },
                          { text: 'Pembangunan satu unit Bank Sampah Desa di Dusun II', cat: 'Sanitasi' },
                          { text: 'Pembangunan Gedung Pemmas / Posyandu Dusun II', cat: 'Kesehatan' },
                          { text: 'Pembangunan Gedung Ketahanan Pangan Terpusat di Dusun VIII', cat: 'Ekonomi' },
                          { text: 'Pengaspalan Jalan Lapen utama Dusun I menuju Dusun II', cat: 'Jalan' },
                          { text: 'Pengaspalan Jalan Lapen Dusun VIII menuju Dusun VII', cat: 'Jalan' },
                          { text: 'Pengaspalan jalan Lapen Dusun III menuju Dusun VII', cat: 'Jalan' },
                          { text: 'Rehabilitasi total Mesjid Al-Raudah Dusun VI (2012)', cat: 'Sarana Ibadah' },
                          { text: 'Rehabilitasi total Mesjid Sirajur Rahmah Dusun III (2009)', cat: 'Sarana Ibadah' },
                          { text: 'Pembangunan Mesjid Baru di wilayah Dusun I (2008)', cat: 'Sarana Ibadah' },
                          { text: 'Pembangunan Mesjid Al-Baroqah Dusun IV (2012)', cat: 'Sarana Ibadah' }
                        ].map((item, idx) => (
                          <div key={idx} className="space-y-1.5 py-3 border-b border-slate-100 dark:border-slate-850">
                            <span className="inline-block text-[8px] font-black uppercase text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30 px-1.5 py-0.5 rounded tracking-wider">{item.cat}</span>
                            <div className="flex items-start space-x-2">
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold leading-normal">{item.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* ==========================================
              MODE: VISI_MISI (Manifesto Layout - NO Nested Cards)
             ========================================== */}
          {mode === 'visi_misi' && (
            <div className="space-y-20 animate-in fade-in duration-500">
              
              {/* Part A: Spacious Visi Quote Section */}
              <div className="relative py-12 px-6 sm:px-12 text-center space-y-6">
                <Quote className="absolute top-0 left-4 w-24 h-24 text-slate-100 dark:text-slate-900 pointer-events-none" />
                <Quote className="absolute bottom-0 right-4 w-24 h-24 text-slate-100 dark:text-slate-900 pointer-events-none" />

                <div className="space-y-1 relative z-10">
                  <span className="text-emerald-600 font-extrabold text-[10px] uppercase tracking-widest block">Cita-Cita Luhur</span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white uppercase tracking-tight">VISI PEMBANGUNAN JANGKA PANJANG</h3>
                </div>

                <div className="max-w-4xl mx-auto py-6 border-y border-slate-200 dark:border-slate-800 relative z-10">
                  <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white italic leading-relaxed font-serif">
                    "Mewujudkan Desa Besar II Terjun sebagai desa yang mandiri dan sejahtera dalam kehidupan seluruh masyarakat, adil dan makmur."
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed relative z-10 font-normal">
                  Visi tersebut merefleksikan tekad bulat segenap jajaran pemerintah desa bersama warga untuk menumbuhkan ketahanan ekonomi berkeadilan sosial, serta merawat persatuan di setiap dusun.
                </p>
              </div>

              {/* Part B: Misi Strategic List Section (NO Bento Box Grid cards) */}
              <div className="space-y-12 pt-10 border-t border-slate-150 dark:border-slate-800">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <span className="text-[10px] font-black uppercase text-emerald-600 tracking-widest block">Langkah Aksi</span>
                  <h4 className="text-lg sm:text-xl font-black text-slate-950 dark:text-white uppercase flex items-center justify-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    Penjabaran Misi Strategis Desa
                  </h4>
                  <p className="text-xs text-slate-500">
                    Langkah nyata penjabaran kerja operasional aparatur desa menuju kesejahteraan berkelanjutan.
                  </p>
                </div>

                {/* Main Misi Statement */}
                <div className="max-w-4xl mx-auto py-5 px-6 sm:px-8 bg-emerald-50/40 dark:bg-emerald-950/10 border border-emerald-500/10 rounded-2xl text-center mb-8">
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold text-[9px] uppercase tracking-widest block mb-2">MISI UTAMA</span>
                  <p className="text-sm sm:text-base font-black text-slate-900 dark:text-white leading-relaxed">
                    Membangun desa yang maju, dengan meningkatkan kualitas pendidikan dan meningkatkan pembangunan di segala bidang
                  </p>
                </div>

                {/* Sub-Misi List */}
                <div className="max-w-4xl mx-auto space-y-6">
                  {[
                    { 
                      letter: '(a).', 
                      desc: 'Membangun tata pemerintahan desa yang baik dengan bersendikan pada prinsip keterbukaan dan tanggung jawab, serta saling percaya dan parsipatif' 
                    },
                    { 
                      letter: '(b).', 
                      desc: 'Meningkatkan perekonomian masyarakat desa secara berkelanjutann dengan mengutamakan sektor pertanian desa sebagai modal utama yang didukung dengan teknologi' 
                    },
                    { 
                      letter: '(c).', 
                      desc: 'Mengembangkan dan memanfaatkan sumber daya alam yang ada didukung dengan sumber daya manusia yang berkualitas' 
                    },
                    { 
                      letter: '(d).', 
                      desc: 'Mengembangkan kapasitas masyarakat untuk meningkatkan serta memajukan kegiatan ekonomi yang produktif.' 
                    }
                  ].map((misi) => (
                    <div key={misi.letter} className="p-4 bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-850 rounded-xl">
                      <div className="flex items-start gap-3">
                        <span className="text-emerald-700 dark:text-emerald-400 font-black text-sm shrink-0 select-none">
                          {misi.letter}
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed font-semibold">
                          {misi.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
