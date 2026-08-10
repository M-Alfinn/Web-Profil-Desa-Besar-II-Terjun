import React, { useState } from 'react';
import { Shield, BookOpen, User, Users, ClipboardList, CheckCircle, ChevronRight, Landmark, FileText, Award } from 'lucide-react';

interface TaskSection {
  title: string;
  points: string[];
}

interface PerangkatRole {
  title: string;
  subtitle: string;
  intro: string;
  icon: React.ComponentType<any>;
  sections: TaskSection[];
}

export default function FungsiTugasPerangkat() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const roles: PerangkatRole[] = [
    {
      title: 'SEKRETARIS DESA',
      subtitle: 'Pimpinan Administratif Sekretariat',
      intro: 'Sekretaris Desa berkedudukan sebagai unsur pimpinan Sekretariat Desa dan bertanggung jawab penuh membantu Kepala Desa dalam merumuskan kebijakan, merawat tertib administrasi, serta pembinaan aparatur pemerintahan.',
      icon: User,
      sections: [
        {
          title: 'Kedudukan Pokok & Kewenangan',
          points: [
            'Sekretaris Desa berkedudukan sebagai unsur pimpinan tertinggi di dalam Sekretariat Desa.',
            'Bertugas mengoordinasikan jajaran Kepala Urusan dalam mengadministrasikan program kerja Kepala Desa.'
          ]
        },
        {
          title: 'Uraian Fungsi Strategis',
          points: [
            'Melaksanakan tata urusan ketatausahaan, termasuk tata naskah dinas, administrasi kearsipan dinas, surat menyurat resmi desa, serta ekspedisi kerja.',
            'Melaksanakan urusan umum untuk penataan administrasi kepegawaian perangkat desa, penyediaan sarana prasarana balai desa, penyiapan kelancaran rapat koordinasi, serta inventarisasi aset desa.',
            'Mengelola tata administrasi keuangan desa, pengelolaan sumber-sumber pendapatan, verifikasi berkas pengeluaran, serta gaji tunjangan Kepala Desa dan jajaran perangkat.',
            'Menyusun kerangka perencanaan desa termasuk penyusunan APBDesa, inventarisasi data statistik kependudukan, serta penyusunan laporan tahunan penyelenggaraan pemerintahan.'
          ]
        }
      ]
    },
    {
      title: 'KEPALA URUSAN',
      subtitle: 'Unsur Staf Pendukung Pelayanan',
      intro: 'Kepala urusan bertugas menyelenggarakan fungsi pelayanan dukungan staf administratif guna memastikan kelancaran teknis tugas-tugas harian kesekretariatan.',
      icon: ClipboardList,
      sections: [
        {
          title: 'Kedudukan Staf & Tugas',
          points: [
            'Kepala urusan berkedudukan sebagai unsur staf kesekretariatan di bawah arahan Sekretaris Desa.',
            'Bertugas memberikan pelayanan prima dukungan administratif penunjang kinerja operasional aparatur.'
          ]
        },
        {
          title: 'Fungsi Sektoral Staf',
          points: [
            'Kaur Umum & TU: Menyelenggarakan naskah surat dinas, arsip, penyiapan ruang rapat dinas kepala desa, pengadaan ATK kantor, registrasi aset desa, serta kebersihan kompleks balai desa.',
            'Kaur Keuangan: Membantu administrasi anggaran penerimaan pendapatan asli desa, penyusunan rancangan kas pengeluaran belanja desa, pembukuan jurnal buku kas umum (BKU), serta pelaporan pajak.',
            'Kaur Perencanaan: Mengumpulkan data usulan pembangunan warga, mengoordinasikan draf program kerja prioritas desa, serta mengagendakan evaluasi berkala capaian program pembangunan.'
          ]
        }
      ]
    },
    {
      title: 'KEPALA SEKSI',
      subtitle: 'Pelaksana Teknis Lapangan',
      intro: 'Kepala seksi berkedudukan sebagai pelaksana lapangan operasional sektoral yang mengawal langsung pelaksanaan program kerja pembangunan serta pelayanan teknis kepada masyarakat.',
      icon: BookOpen,
      sections: [
        {
          title: 'Kedudukan Pelaksana & Tugas',
          points: [
            'Kepala seksi berkedudukan sebagai unsur pelaksana operasional langsung dari kebijakan Kepala Desa.',
            'Bertugas menjalankan program teknis pelayanan masyarakat berdasarkan pembidangan tugas sektoral.'
          ]
        },
        {
          title: 'Fungsi Teknis Sektoral',
          points: [
            'Kasi Pemerintahan: Melaksanakan tata praja desa, draf rancangan Peraturan Desa (Perdes), kependudukan, ketertiban umum wilayah, mitigasi konflik warga, serta pendataan pemutakhiran Profil Desa.',
            'Kasi Kesejahteraan: Mengawal pembangunan fisik jalan, irigasi, sarana ibadah, kesehatan masyarakat, pelayanan PAUD, menyalurkan program bansos kemiskinan, serta pemberdayaan ekonomi rakyat.',
            'Kasi Pelayanan: Melakukan motivasi gotong royong warga, penyuluhan hak kewajiban hukum rakyat, merawat kebudayaan adat Melayu, kerukunan beragama, serta program ketenagakerjaan desa.'
          ]
        }
      ]
    },
    {
      title: 'KEPALA DUSUN',
      subtitle: 'Pelaksana Kewilayahan',
      intro: 'Kepala Dusun bertugas sebagai kepanjangan tangan Kepala Desa untuk menyelenggarakan urusan pemerintahan, ketertiban, dan pembangunan fisik di lingkup wilayah dusun masing-masing.',
      icon: Users,
      sections: [
        {
          title: 'Kedudukan Wilayah & Tugas',
          points: [
            'Kepala dusun berkedudukan sebagai pimpinan kewilayahan taktis di tingkat dusun.',
            'Bertugas menjaga ketentraman warga, menyalurkan aspirasi pembangunan, serta mendampingi pelayanan warga.'
          ]
        },
        {
          title: 'Fungsi Kewilayahan Taktis',
          points: [
            'Membina ketentraman ketertiban, pelaksanaan pos kamling ronda malam, serta administrasi kependudukan harian.',
            'Mendampingi pelaksanaan pembangunan saluran drainase, semenisasi jalan setapak, serta fasilitas dusun.',
            'Meningkatkan partisipasi gotong royong kebersihan saluran air desa, gotong royong masjid/mushola, serta musyawarah dusun (Musdus).',
            'Melakukan pemberdayaan pemuda karang taruna dusun, pembinaan posyandu balita, serta penyelesaian perselisihan antar tetangga.'
          ]
        }
      ]
    }
  ];

  const ActiveIcon = roles[activeTab].icon;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Page Header (Open Editorial) */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-emerald-700 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
          <Award className="w-3.5 h-3.5" />
          <span>Manual Tugas Aparatur</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
          Fungsi & Tugas Pokok Perangkat Desa
        </h2>
        <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full" />
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto font-normal">
          Pedoman pembagian kewenangan strategis serta pembidangan operasional guna menjamin tertib pelayanan pemerintahan dan pembangunan terarah di Desa Besar II Terjun.
        </p>
      </div>

      {/* ==========================================
          INTERACTIVE HIERARCHICAL MATRIX (NO BOXED TAB LIST)
         ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left: Beautiful Org-Flow Navigator */}
        <div className="lg:col-span-4 flex flex-col space-y-3.5">
          <div className="px-1 pb-2 border-b border-slate-150 dark:border-slate-800">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block">Struktur Jabatan</span>
            <span className="text-[11px] text-slate-500 font-semibold italic">Pilih jabatan untuk melihat rincian fungsi</span>
          </div>

          <div className="flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 scrollbar-none snap-x">
            {roles.map((role, idx) => {
              const Icon = role.icon;
              const isActive = idx === activeTab;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-none snap-start flex items-center space-x-4 px-5 py-4 rounded-xl border text-left transition-all duration-300 w-[240px] lg:w-full cursor-pointer ${
                    isActive
                      ? 'bg-emerald-600 border-emerald-600 text-white shadow-lg shadow-emerald-600/10 scale-[1.01] font-bold'
                      : 'bg-white dark:bg-slate-900 border-slate-200/50 dark:border-slate-800/80 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg ${isActive ? 'bg-white/20 text-white' : 'bg-slate-50 dark:bg-slate-950 text-slate-400'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-xs sm:text-sm font-black tracking-tight leading-none uppercase truncate">
                      {role.title}
                    </h4>
                    <span className={`text-[10px] font-bold truncate block mt-1 ${isActive ? 'text-emerald-100' : 'text-slate-400'}`}>
                      {role.subtitle}
                    </span>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'translate-x-1 text-white' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Spacious Duties Sheet (NO card border containers) */}
        <div className="lg:col-span-8 space-y-8 lg:pl-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-150 dark:border-slate-800">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block">
                {roles[activeTab].subtitle}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950 dark:text-white uppercase">
                {roles[activeTab].title}
              </h3>
            </div>
            <div className="p-3.5 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 rounded-xl w-fit">
              <ActiveIcon className="w-6.5 h-6.5" />
            </div>
          </div>

          {/* Intro statement (Elegant quotation block) */}
          <div className="border-l-4 border-emerald-600 pl-4 py-1 bg-slate-50/50 dark:bg-slate-950/20 rounded-r-xl">
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed italic font-normal">
              "{roles[activeTab].intro}"
            </p>
          </div>

          {/* Duties detail breakdown lists */}
          <div className="space-y-8">
            {roles[activeTab].sections.map((sect, sIdx) => (
              <div key={sIdx} className="space-y-4">
                <h4 className="text-xs sm:text-sm font-black text-slate-900 dark:text-white flex items-center gap-2 uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-emerald-600" />
                  {sect.title}
                </h4>
                
                <div className="space-y-3.5 pl-4 border-l border-slate-150 dark:border-slate-800">
                  {sect.points.map((pt, pIdx) => (
                    <div 
                      key={pIdx} 
                      className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed font-normal"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Verification Footnote */}
          <div className="pt-6 border-t border-slate-150 dark:border-slate-800 flex items-center space-x-2 text-[10px] text-slate-400 font-semibold justify-center sm:justify-start">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Sesuai Peraturan Bupati Serdang Bedagai No. 22 Tahun 2018</span>
          </div>

        </div>

      </div>

    </div>
  );
}
