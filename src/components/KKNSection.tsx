import React, { useState, useEffect } from 'react';
import { mockKKNMembers, kknInfo } from '../data';
import { KKNMember } from '../types';
import { 
  GraduationCap, Users, BookOpen, Sparkles, Instagram, Mail, 
  QrCode, Video, MapPin, Calendar, Heart, Search, Check, Play, 
  Award, X, ChevronLeft, ChevronRight, FileText, Target, ChevronUp 
} from 'lucide-react';

// Custom sub-component for program kerja slideshow
function ProkerItemCard({ proker }: { proker: any; key?: any }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % proker.fotos.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + proker.fotos.length) % proker.fotos.length);
  };

  return (
    <div className="bg-slate-50 dark:bg-slate-900 rounded-[2rem] border border-slate-200/40 dark:border-slate-800/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 p-5 lg:p-7">
      
      {/* Landscape Image Slider Column (lg:col-span-5) */}
      <div className="lg:col-span-5 relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-950 group shadow-md">
        {proker.fotos.map((fotoUrl: string, idx: number) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img 
              src={fotoUrl} 
              alt={`${proker.judul} slide ${idx + 1}`} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
          </div>
        ))}
        
        {/* Slide Counter Overlay */}
        <span className="absolute top-3 left-3 bg-emerald-600/95 text-white font-extrabold text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
          Proker {proker.no}
        </span>
        
        <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-sm text-slate-300 text-[10px] font-bold px-2.5 py-1 rounded-lg">
          {currentSlide + 1} / {proker.fotos.length}
        </span>

        {proker.target && (
          <span className="absolute bottom-3 left-3 text-[10px] sm:text-xs font-bold text-emerald-300 bg-slate-950/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/10 max-w-[200px] truncate">
            Target: {proker.target}
          </span>
        )}

        {/* Next & Prev Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/55 hover:bg-slate-950/80 text-white transition-all duration-200 opacity-0 group-hover:opacity-100 border border-white/5 active:scale-90 z-20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/55 hover:bg-slate-950/80 text-white transition-all duration-200 opacity-0 group-hover:opacity-100 border border-white/5 active:scale-90 z-20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-3 right-3 flex space-x-1.5 z-20">
          {proker.fotos.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-white w-4' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Proker Details Column (lg:col-span-7) */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-4 text-left">
        <div className="space-y-4">
          <h4 className="text-base sm:text-lg font-extrabold text-slate-950 dark:text-white leading-snug">
            {proker.no}. {proker.judul}
          </h4>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
            {proker.deskripsi}
          </p>

          {proker.materi && (
            <div className="space-y-2.5 bg-white dark:bg-slate-950 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-850">
              <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Materi Pokok</span>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                <p><strong className="text-slate-900 dark:text-white">A. Bahasa Inggris:</strong> {proker.materi.inggris.split(': ')[1]}</p>
                <p><strong className="text-slate-900 dark:text-white">B. Seni Rupa:</strong> {proker.materi.gambar.split(': ')[1]}</p>
                <p><strong className="text-slate-900 dark:text-white">C. Seni Tari:</strong> {proker.materi.tari.split(': ')[1]}</p>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="text-[9px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Tujuan & Manfaat</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
              {proker.tujuan.map((tuj: string, idx: number) => (
                <div key={idx} className="flex items-start space-x-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  <span className="p-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-accent-gold shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </span>
                  <span>{tuj}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-emerald-500/5 dark:bg-emerald-500/10 p-4 rounded-2xl border border-emerald-500/10 space-y-1">
          <span className="text-[9px] uppercase font-bold text-emerald-700 dark:text-emerald-400 tracking-widest block">Hasil & Output</span>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-semibold">
            {proker.output}
          </p>
        </div>
      </div>

    </div>
  );
}

export default function KKNSection() {
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<'All' | 'L' | 'P'>('All');
  const [selectedDivisionFilter, setSelectedDivisionFilter] = useState<string>('All');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedMember, setSelectedMember] = useState<KKNMember | null>(null);
  const [currentKknSlide, setCurrentKknSlide] = useState(0);

  useEffect(() => {
    if (selectedMember) {
      try {
        window.scrollTo({ top: 0, behavior: 'auto' });
      } catch (e) {
        console.warn('Scroll failed:', e);
      }
    }
  }, [selectedMember]);

  const kknSliderImages = [
    {
      src: '/Foto/KKN/gotong royong/1.jpg',
      label: 'GERAKAN DESA BERSIH DAN PEDULI LINGKUNGAN',
      desc: 'Sinergi hangat bersama Kepala Desa Besar II Terjun, Sekretaris Desa, jajaran perangkat desa, BPD, LKMD, serta tokoh masyarakat.'
    },
    {
      src: '/Foto/KKN/les/1.jpg',
      label: 'Edukreasi Anak Desa',
      desc: 'Bimbingan belajar bahasa inggris, seni tari, dan seni rupa bagi anak-anak usia sekolah dasar.'
    },
    {
      src: '/Foto/KKN/tepache/1.jpg',
      label: 'DEMONSTRASI PEMBUATAN TEPACHE DARI KULIT NANAS',
      desc: 'Peningkatan daya saing produk anyaman pandan tradisional dan industri kuliner lokal melalui teknologi digital dan kemasan modern.'
    },
    {
      src: '/Foto/KKN/umkm/5.jpg',
      label: 'DIGITALISASI PROMOSI UMKM DESA',
      desc: 'Kolaborasi nyata dengan bidan desa membagikan makanan bergizi serta pelaksanaan gotong royong kebersihan lingkungan.'
    },
    {
      src: '/Foto/KKN/sekolah/1.jpg',
      label: 'KOLABORASI MENGAJAR DI SD NEGERI 106192',
      desc: 'Kolaborasi nyata dengan bidan desa membagikan makanan bergizi serta pelaksanaan gotong royong kebersihan lingkungan.'
    },
    {
      src: '/Foto/KKN/web/1.jpg',
      label: 'DIGITALISASI INFORMASI DESA BERBASIS WEBSITE DAN QR CODE',
      desc: 'Kolaborasi nyata dengan bidan desa membagikan makanan bergizi serta pelaksanaan gotong royong kebersihan lingkungan.'
    },
    {
      src: '/Foto/KKN/senam/1.jpg',
      label: 'GERAKAN MASYARAKAT SEHAT DAN BUGAR',
      desc: 'Kolaborasi nyata dengan bidan desa membagikan makanan bergizi serta pelaksanaan gotong royong kebersihan lingkungan.'
    },
    {
      src: '/Foto/KKN/lomba/1.jpg',
      label: 'FESTIVAL EDUKASI DAN KREATIVITAS ANAK DESA',
      desc: 'Kolaborasi nyata dengan bidan desa membagikan makanan bergizi serta pelaksanaan gotong royong kebersihan lingkungan.'
    }
  ];

  // Exactly 5 landscape images per program kerja
  const programKerjaList = [
    {
      no: 1,
      judul: "GERAKAN DESA BERSIH DAN PEDULI LINGKUNGAN",
      deskripsi: "Program kerja yang berfokus pada kegiatan gotong royong untuk membersihkan lingkungan dan fasilitas umum desa guna menciptakan lingkungan yang bersih, sehat, rapi, dan nyaman.",
      tujuan: [
        "Meningkatkan kepedulian terhadap kebersihan dan kelestarian lingkungan.",
        "Mewujudkan lingkungan desa yang bersih, sehat, dan nyaman.",
        "Menumbuhkan semangat kebersamaan serta budaya gotong royong."
      ],
      output: "Terlaksananya kegiatan gotong royong yang menciptakan lingkungan desa lebih bersih, rapi, dan nyaman serta meningkatkan kesadaran masyarakat akan pentingnya menjaga kebersihan lingkungan.",
      fotos: [
        "/Foto/KKN/gotong royong/1.jpg",
        "/Foto/KKN/gotong royong/2.png",
        "/Foto/KKN/gotong royong/3.png",
        "/Foto/KKN/gotong royong/4.png",
        "/Foto/KKN/gotong royong/5.png"
      ],
      target: "Masyarakat Desa Besar II Terjun"
    },
    {
      no: 2,
      judul: "EDUKREASI ANAK DESA",
      deskripsi: "Program pembelajaran nonformal yang bertujuan mengembangkan kemampuan akademik, kreativitas, dan keterampilan seni anak melalui kegiatan Bahasa Inggris dasar, menggambar dan mewarnai, serta pelatihan tari tradisional dan tari kreasi Melayu.",
      materi: {
        inggris: "Bahasa Inggris Dasar: Alphabet, self introduction, greetings, basic expressions, numbers, days & months, family, food & drinks, serta time & seasons.",
        gambar: "Menggambar dan Mewarnai: Teknik dasar menggambar dan mewarnai dengan tema flora, fauna, dan lingkungan sekitar.",
        tari: "Seni Tari: Pengenalan tari tradisional Melayu (Kuala Deli/Lenggang Patah Sembilan) dan tari kreasi Melayu."
      },
      target: "Anak-anak Desa Besar II Terjun",
      tujuan: [
        "Meningkatkan kemampuan dasar Bahasa Inggris.",
        "Mengembangkan kreativitas dan keterampilan seni.",
        "Menumbuhkan rasa percaya diri, minat belajar, serta kecintaan terhadap budaya daerah."
      ],
      output: "Terlaksananya kegiatan pembelajaran nonformal yang membantu meningkatkan kemampuan dasar, kreativitas, dan keterampilan seni anak melalui proses belajar yang interaktif, edukatif, dan menyenangkan.",
      fotos: [
        "/Foto/KKN/les/1.jpg",
        "/Foto/KKN/les/3.jpg",
        "/Foto/KKN/les/4.png",
        "/Foto/KKN/les/5.png",
        "/Foto/KKN/les/6.jpg"
      ]
    },
    {
      no: 3,
      judul: "DEMONSTRASI PEMBUATAN TEPACHE DARI KULIT NANAS",
      deskripsi: "Program sosialisasi dan demonstrasi pembuatan tepache, minuman fermentasi alami berbahan kulit nanas yang mengandung probiotik dan bermanfaat bagi kesehatan.",
      target: "Masyarakat Desa Besar II Terjun",
      tujuan: [
        "Mengenalkan tepache sebagai minuman fermentasi alami.",
        "Memberikan edukasi pengolahan kulit nanas menjadi produk bernilai tambah.",
        "Meningkatkan pengetahuan masyarakat tentang manfaat tepache bagi kesehatan."
      ],
      output: "Masyarakat memahami cara pembuatan dan manfaat tepache sebagai minuman fermentasi alami yang baik untuk kesehatan serta memiliki nilai tambah.",
      fotos: [
        "/Foto/KKN/tepache/1.jpg",
        "/Foto/KKN/tepache/2.jpg",
        "/Foto/KKN/tepache/3.jpg",
        "/Foto/KKN/tepache/4.jpg",
        "/Foto/KKN/tepache/5.jpg",
        "/Foto/KKN/tepache/6.jpg"
      ]
    },
    {
      no: 4,
      judul: "DIGITALISASI PROMOSI UMKM DESA",
      deskripsi: "Program pendampingan digitalisasi promosi UMKM melalui pemanfaatan media sosial sebagai sarana pemasaran untuk meningkatkan jangkauan dan daya tarik produk.",
      tujuan: [
        "Membantu UMKM memanfaatkan media sosial sebagai media promosi.",
        "Meningkatkan daya tarik produk melalui konten digital yang kreatif.",
        "Memperluas jangkauan pemasaran dan meningkatkan eksistensi UMKM."
      ],
      output: "Terbentuknya media promosi digital berupa akun Instagram dan TikTok beserta konten promosi yang dapat dimanfaatkan UMKM untuk memperkenalkan produk kepada masyarakat yang lebih luas.",
      fotos: [
        "/Foto/KKN/umkm/5.jpg",
        "/Foto/KKN/umkm/9.jpg",
        "/Foto/KKN/umkm/6.jpg",
        "/Foto/KKN/umkm/7.png",
        "/Foto/KKN/umkm/8.jpg"
      ],
      target: "Pelaku UMKM Lokal"
    },
    {
      no: 5,
      judul: "KOLABORASI MENGAJAR DI SD NEGERI 106192",
      deskripsi: "Program pendampingan kegiatan belajar mengajar di SD Negeri 106192 melalui pembelajaran yang interaktif untuk mendukung proses pendidikan dan meningkatkan semangat belajar siswa.",
      tujuan: [
        "Mendukung proses pembelajaran di sekolah.",
        "Meningkatkan pemahaman dan motivasi belajar siswa.",
        "Menciptakan suasana belajar yang aktif, interaktif, dan menyenangkan."
      ],
      output: "Terlaksananya kegiatan mengajar pada berbagai mata pelajaran sehingga membantu proses pembelajaran di sekolah serta meningkatkan antusiasme dan partisipasi siswa dalam belajar.",
      fotos: [
        "/Foto/KKN/sekolah/1.jpg",
        "/Foto/KKN/sekolah/3.jpg",
        "/Foto/KKN/sekolah/4.jpg"
      ],
      target: "Siswa SD Negeri 106192"
    },
    {
      no: 6,
      judul: "DIGITALISASI INFORMASI DESA BERBASIS WEBSITE DAN QR CODE",
      deskripsi: "Program pengembangan website informasi desa yang dapat diakses melalui QR Code sebagai media penyebaran informasi mengenai profil, potensi, dan informasi umum Desa Besar II Terjun.",
      target: "Pemerintah Desa Besar II Terjun, masyarakat desa, dan masyarakat umum.",
      tujuan: [
        "Menyediakan media informasi desa yang mudah diakses.",
        "Memperkenalkan profil dan potensi desa secara digital.",
        "Meningkatkan pemanfaatan teknologi informasi di lingkungan desa."
      ],
      output: "Terbentuknya website informasi Desa Besar II Terjun yang terintegrasi dengan QR Code sehingga informasi desa dapat diakses dengan mudah, cepat, dan praktis oleh masyarakat.",
      fotos: [
        "/Foto/KKN/web/1.jpg",
        "/Foto/KKN/web/2.jpg"
      ]
    },
    {
      no: 7,
      judul: "GERAKAN MASYARAKAT SEHAT DAN BUGAR",
      deskripsi: "Program kegiatan senam bersama yang bertujuan mendorong penerapan pola hidup sehat melalui aktivitas fisik yang menyenangkan serta mempererat kebersamaan antarwarga.",
      target: "Masyarakat Desa Besar II Terjun",
      tujuan: [
        "Meningkatkan kesadaran akan pentingnya aktivitas fisik untuk menjaga kesehatan.",
        "Mendorong penerapan pola hidup sehat sejak dini.",
        "Mempererat kebersamaan melalui kegiatan yang edukatif dan menyenangkan."
      ],
      output: "Terlaksananya kegiatan senam sehat yang diikuti dengan antusias sehingga meningkatkan kesadaran masyarakat akan pentingnya menjaga kesehatan melalui aktivitas fisik secara rutin.",
      fotos: [
        "/Foto/KKN/senam/2.jpg",
        "/Foto/KKN/senam/1.jpg",
        "/Foto/KKN/senam/6.jpg",
        "/Foto/KKN/senam/4.jpg",
        "/Foto/KKN/senam/7.jpg"
      ]
    },
    {
      no: 8,
      judul: "FESTIVAL EDUKASI DAN KREATIVITAS ANAK DESA",
      deskripsi: "Program perlombaan edukatif dan kreatif yang dirancang untuk mengembangkan kemampuan akademik, kreativitas, serta rasa percaya diri anak melalui berbagai kegiatan yang menarik dan menyenangkan.",
      target: "Anak-anak Desa Besar II Terjun",
      tujuan: [
        "Mengembangkan potensi akademik dan kreativitas anak.",
        "Meningkatkan semangat belajar, sportivitas, dan rasa percaya diri.",
        "Menumbuhkan jiwa kompetitif yang positif melalui kegiatan edukatif."
      ],
      output: "Terlaksananya berbagai perlombaan yang mendorong partisipasi aktif anak-anak, meningkatkan kreativitas dan kemampuan mereka, serta menciptakan pengalaman belajar yang menyenangkan.",
      fotos: [
        "/Foto/KKN/lomba/1.jpg",
        "/Foto/KKN/lomba/2.jpg",
        "/Foto/KKN/lomba/3.jpg",
        "/Foto/KKN/lomba/5.jpg",
        "/Foto/KKN/lomba/6.jpg",
        "/Foto/KKN/lomba/7.jpg",
        "/Foto/KKN/lomba/8.jpg",
        "/Foto/KKN/lomba/9.jpg"
      ]
    }
  ];

  // Auto-slide effect for main KKN picture
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentKknSlide((prev) => (prev + 1) % kknSliderImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [kknSliderImages.length]);

  const nextSlide = () => {
    setCurrentKknSlide((prev) => (prev + 1) % kknSliderImages.length);
  };

  const prevSlide = () => {
    setCurrentKknSlide((prev) => (prev - 1 + kknSliderImages.length) % kknSliderImages.length);
  };

  const divisions = [
    'All', 'Ketua', 'Wakil Ketua', 'Sekretaris', 'Wakil Sekretaris', 'Bendahara', 'Wakil Bendahara', 'Divisi Acara', 'Divisi Humas', 'Divisi PDD', 'Divisi Perlengkapan', 'Divisi Konsumsi'
  ];

  // Filtering members list
  const filteredMembers = mockKKNMembers.filter((m) => {
    const matchesGender = selectedGenderFilter === 'All' || m.jenisKelamin === selectedGenderFilter;
    const matchesDivision = selectedDivisionFilter === 'All' || m.divisi === selectedDivisionFilter;
    return matchesGender && matchesDivision;
  });

  return (
    <section id="kkn" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden text-left animate-in fade-in duration-300">
      {/* Decorative Wave lines background */}
      <div className="absolute inset-0 bg-pattern-waves opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {selectedMember ? (
          <div className="max-w-4xl mx-auto text-left animate-in fade-in duration-300 py-6">
            
            {/* Back Button */}
            <button
              onClick={() => {
                const memberId = selectedMember.id;
                setSelectedMember(null);
                setTimeout(() => {
                  const cardElement = document.getElementById(`member-${memberId}`);
                  if (cardElement) {
                    cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  } else {
                    const rosterSection = document.getElementById('kkn-roster');
                    if (rosterSection) {
                      rosterSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }
                }, 100);
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl cursor-pointer mb-8 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
              Kembali ke Daftar Anggota
            </button>

            {/* Simple Profile Page Card/Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Portrait */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md">
                  <img
                    src={selectedMember.foto}
                    alt={selectedMember.nama}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-1 w-full text-center md:text-left">
                  <span className="text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest block">
                    {selectedMember.peran}
                  </span>
                  <span className="inline-flex px-2.5 py-0.5 text-[10px] font-bold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-md border border-slate-200 dark:border-slate-800">
                    {selectedMember.divisi}
                  </span>
                </div>
              </div>

              {/* Right Column: Information (Simple, sleek design) */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-950 dark:text-white leading-tight">
                    {selectedMember.nama}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">
                    Anggota Kelompok KKN UNIMED Desa Besar II Terjun 2026
                  </p>
                </div>

                {/* Academic Details */}
                {selectedMember.prodi && (
                  <div className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-slate-50/50 dark:bg-slate-900/30">
                    <div className="p-4 sm:p-5 space-y-3.5 text-xs sm:text-sm">
                      {selectedMember.nim && (
                        <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">NIM</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{selectedMember.nim}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">Program Studi</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedMember.prodi}</span>
                      </div>
                      {selectedMember.jurusan && (
                        <div className="flex justify-between items-center border-b border-slate-200/50 dark:border-slate-800/50 pb-2.5">
                          <span className="text-slate-400 dark:text-slate-500 font-medium">Jurusan</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{selectedMember.jurusan}</span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 dark:text-slate-500 font-medium">Fakultas</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">{selectedMember.fakultas}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Motto */}
                <div className="space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Motto Pengabdian
                  </h3>
                  <div className="p-4 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/10 rounded-2xl">
                    <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
                      "{selectedMember.motto || 'Berbagi ilmu, berbakti bagi masyarakat desa.'}"
                    </p>
                  </div>
                </div>

                {/* Instagram social - simple design */}
                {selectedMember.instagram && (
                  <div className="space-y-2">
                    <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                      Media Sosial
                    </h3>
                    <a
                      href={`https://instagram.com/${selectedMember.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 text-xs font-extrabold transition-all shadow-sm cursor-pointer border border-transparent"
                    >
                      <Instagram className="w-4 h-4" />
                      <span>@{selectedMember.instagram}</span>
                    </a>
                  </div>
                )}

              </div>

            </div>

          </div>
        ) : (
          <>
            {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase bg-emerald-50 dark:bg-emerald-950/30 px-5 py-2.5 rounded-full border border-emerald-500/10 inline-block">
            Universitas Negeri Medan
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white pt-2 leading-tight">
            Kelompok KKN Desa Besar II Terjun
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full mt-4" />
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed pt-2 font-normal">
            Karya nyata pengabdian dan inovasi teknologi digital mahasiswa Universitas Negeri Medan dalam mendukung kemandirian, digitalisasi UMKM, dan literasi warga desa. Dengan mengusung tema KKN: <strong className="text-emerald-700 dark:text-accent-gold">"KKN Berdampak: Optimalisasi Pembangunan Desa Melalui Sinergi Berkelanjutan"</strong>.
          </p>
        </div>

        {/* Big Group Picture Banner / Image Slider */}
        <div className="relative rounded-[2.5rem] overflow-hidden border border-slate-200/50 dark:border-slate-800/50 shadow-2xl mb-16 h-[540px] sm:h-[450px] md:h-[380px] lg:h-[440px] w-full bg-slate-100 dark:bg-slate-950 group">
          {kknSliderImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentKknSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.src}
                alt={slide.label}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlaid styling gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/50 to-slate-950/10 pointer-events-none" />
              
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10 text-white flex flex-col md:flex-row md:items-end justify-between gap-6 z-20">
                <div className="space-y-2 text-left max-w-xl">
                  <span className="px-3.5 py-1 rounded-xl bg-accent-gold/90 text-slate-950 text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-md inline-block">
                    KKN UNIMED 2026
                  </span>
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight leading-tight">
                    {slide.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                    {slide.desc}
                  </p>
                </div>
                
                {/* Responsive Metrics Box */}
                <div className="grid grid-cols-3 gap-2 sm:flex sm:space-x-4 shrink-0 bg-white/10 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md border border-white/10 text-center text-white text-xs w-full md:w-auto">
                  <div className="px-1">
                    <span className="block font-black text-sm sm:text-lg text-accent-gold">{mockKKNMembers.length}</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-200 uppercase font-bold tracking-wider">Mahasiswa</span>
                  </div>
                  <div className="hidden sm:block w-px bg-white/20 h-8 self-center" />
                  <div className="px-1 border-l border-white/10 sm:border-l-0">
                    <span className="block font-black text-sm sm:text-lg text-accent-gold">8 Program</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-200 uppercase font-bold tracking-wider">Kerja</span>
                  </div>
                  <div className="hidden sm:block w-px bg-white/20 h-8 self-center" />
                  <div className="px-1 border-l border-white/10 sm:border-l-0">
                    <span className="block font-black text-sm sm:text-lg text-accent-gold">42 Hari</span>
                    <span className="text-[9px] sm:text-[10px] text-slate-200 uppercase font-bold tracking-wider">Pengabdian</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slider controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-slate-950/40 hover:bg-slate-950/70 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {kknSliderImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentKknSlide(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentKknSlide ? 'bg-accent-gold w-6' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ==================== SECTION: DESKRIPSI & TUJUAN ==================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Left Panel: Deskripsi & Tujuan */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Deskripsi KKN */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 space-y-4 text-left">
              <div className="flex items-center space-x-3 text-emerald-600 dark:text-accent-gold">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-xl font-extrabold tracking-tight">Deskripsi Pengabdian KKN</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Kuliah Kerja Nyata (KKN) Universitas Negeri Medan Tahun 2026 di Desa Besar II Terjun menjadi wadah bagi kami untuk belajar sekaligus mengabdi langsung di tengah masyarakat. Selama <strong>42 hari</strong>, sebanyak <strong>{mockKKNMembers.length} mahasiswi/mahasiswa</strong> dari berbagai program studi berkolaborasi erat dengan pemerintah desa dan seluruh lapisan masyarakat demi menyelaraskan pembangunan desa yang maju dan mandiri.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                Kami hadir dengan fokus pada program mengajar dan bimbingan belajar (les), pendampingan pelaku usaha mikro (UMKM), sosialisasi minuman fermentasi kesehatan, pembiasaan senam kebugaran, gotong royong kebersihan lingkungan, serta percepatan digitalisasi informasi desa.
              </p>
            </div>

            {/* Tujuan KKN */}
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 space-y-5 text-left">
              <div className="flex items-center space-x-3 text-emerald-600 dark:text-accent-gold">
                <Award className="w-6 h-6" />
                <h3 className="text-xl font-extrabold tracking-tight">Tujuan Program KKN</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  'Mengoptimalkan kualitas pembelajaran anak melalui kegiatan mengajar dan bimbingan belajar (les).',
                  'Mempercepat digitalisasi promosi dan kemasan produk kreatif UMKM lokal.',
                  'Meningkatkan minat baca dan mengenalkan literasi komputer digital sejak dini.',
                  'Membantu pelayanan kemasyarakatan di balai desa.',
                  'Membangun jejaring kolaborasi berkelanjutan antara kampus dan desa mandiri.'
                ].map((tujuan, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5">
                    <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-accent-gold mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed text-left">
                      {tujuan}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Panel: Tema & Arti Tema */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Tema Box */}
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-8 rounded-[2rem] shadow-xl border border-emerald-500/10 relative overflow-hidden h-full flex flex-col justify-between text-left">
              <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-10 -mt-10" />
              <div className="space-y-4 relative z-10">
                <span className="text-[10px] uppercase font-bold text-accent-gold tracking-widest block">Tema Utama KKN UNIMED 2026</span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                  "KKN Berdampak: Optimalisasi Pembangunan Desa Melalui Sinergi Berkelanjutan"
                </h3>
                <div className="h-px w-20 bg-accent-gold" />
                
                {/* Arti Tema */}
                <div className="space-y-4 pt-2">
                  <h4 className="text-xs font-bold text-accent-gold uppercase tracking-wider">Arti & Kandungan Tema</h4>
                  
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs sm:text-sm">1. KKN Berdampak</span>
                      <p className="text-emerald-100 font-normal leading-relaxed text-xs">
                        Semua kegiatan KKN dirancang agar memberikan manfaat nyata yang langsung terasa dan berguna dalam kehidupan sehari-hari masyarakat desa.
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs sm:text-sm">2. Optimalisasi Pembangunan</span>
                      <p className="text-emerald-100 font-normal leading-relaxed text-xs">
                        Mengembangkan program pendidikan, pemberdayaan UMKM, kesehatan masyarakat, dan kebersihan lingkungan secara kreatif, kekeluargaan, dan praktis.
                      </p>
                    </div>

                    <div>
                      <span className="font-bold text-white block mb-0.5 text-xs sm:text-sm">3. Sinergi Berkelanjutan</span>
                      <p className="text-emerald-100 font-normal leading-relaxed text-xs">
                        Bekerja sama secara kekeluargaan dengan perangkat desa dan warga agar semua kegiatan positif yang sudah dimulai bisa terus berjalan dan dijaga bersama.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ==================== SECTION: 8 PROGRAM KERJA KKN (DETAILED) ==================== */}
        <div className="py-16 border-t border-slate-100 dark:border-slate-900 space-y-12">
          <div className="max-w-3xl space-y-3 text-left">
            <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Program Pengabdian Unggul</span>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">8 Program Kerja Utama & Dokumentasi</h3>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
              Berikut adalah pemaparan lengkap program kerja inovatif yang berhasil dirumuskan dan dilaksanakan bersama warga di Desa Besar II Terjun.
            </p>
          </div>

          {/* Stacks as a beautiful vertical linear list instead of horizontal grid */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-4">
            {programKerjaList.map((proker) => (
              <ProkerItemCard key={proker.no} proker={proker} />
            ))}
          </div>
        </div>

        {/* ==================== SECTION: PROFIL ANGGOTA KKN ==================== */}
        <div id="kkn-roster" className="py-16 border-t border-slate-100 dark:border-slate-900 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Roster Tim KKN</span>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Profil & Pembagian Tugas Anggota KKN</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                Total 20 mahasiswa lintas disiplin dari Universitas Negeri Medan yang bekerjasama dengan penuh semangat dan dedikasi.
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Gender Filter */}
              <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs font-semibold">
                {['All', 'L', 'P'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGenderFilter(gender as any)}
                    className={`px-3.5 py-2 rounded-lg transition-all duration-300 cursor-pointer ${
                      selectedGenderFilter === gender
                        ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-accent-gold shadow-md font-bold'
                        : 'text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                    }`}
                  >
                    {gender === 'All' ? 'Semua' : gender === 'L' ? 'Laki-laki (5)' : 'Perempuan (15)'}
                  </button>
                ))}
              </div>

              {/* Division Dropdown */}
              <select
                value={selectedDivisionFilter}
                onChange={(e) => setSelectedDivisionFilter(e.target.value)}
                className="px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-bold text-slate-700 dark:text-slate-300 shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 cursor-pointer"
              >
                <option value="All">Semua Divisi</option>
                {divisions.slice(1).map((div) => (
                  <option key={div} value={div}>{div}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Members Grid: Compact 2-columns on mobile to prevent massive cards & scrolling */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                id={`member-${member.id}`}
                className="group relative bg-slate-50 dark:bg-slate-900 rounded-[1.5rem] sm:rounded-3xl overflow-hidden border border-slate-200/40 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-emerald-500/20 dark:hover:border-accent-gold/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Portrait Image: aspect-square on mobile, 3/4 on desktop */}
                <div className="relative aspect-square sm:aspect-[3/4] w-full overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-950">
                  <img
                    src={member.foto}
                    alt={member.nama}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Gender and Division Overlays - Compact sizes for mobile responsiveness */}
                  <span className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[7px] sm:text-[8px] font-bold tracking-widest uppercase bg-slate-950/80 text-white border border-white/10">
                    {member.jenisKelamin === 'L' ? 'L' : 'P'}
                  </span>
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[8px] sm:text-[9px] font-extrabold text-[#D4AF37] bg-slate-950/90 rounded-md uppercase tracking-wider border border-[#D4AF37]/30">
                    {member.divisi.length > 10 ? member.divisi.split(' ')[0] : member.divisi}
                  </span>
                </div>

                {/* Content info: compact padding on mobile */}
                <div className="p-3 sm:p-5 space-y-3 sm:space-y-4 flex-grow flex flex-col justify-between bg-white dark:bg-slate-900 text-left">
                  <div className="space-y-1 sm:space-y-2">
                    <span className="text-[8px] sm:text-[10px] text-emerald-600 dark:text-emerald-400 font-extrabold uppercase tracking-wider block truncate">
                      {member.peran}
                    </span>
                    <h4 className="text-xs sm:text-base md:text-lg font-extrabold text-slate-950 dark:text-white leading-tight line-clamp-1">
                      {member.nama}
                    </h4>
                    
                    {/* Compact Academic Box inside main roster list */}
                    {member.prodi && (
                      <div className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-normal bg-slate-50 dark:bg-slate-950 p-2 sm:p-2.5 rounded-xl border border-slate-100 dark:border-slate-850 space-y-0.5 hidden sm:block">
                        <span className="block truncate text-slate-700 dark:text-slate-300"><strong className="font-semibold text-[8px] uppercase tracking-wider text-slate-400">Prodi:</strong> {member.prodi}</span>
                        <span className="block truncate text-slate-700 dark:text-slate-300"><strong className="font-semibold text-[8px] uppercase tracking-wider text-slate-400">Fakultas:</strong> {member.fakultas}</span>
                      </div>
                    )}
                  </div>

                  {/* Motto and Lihat Profil Action Target (With proper spacing and size) */}
                  <div className="pt-2 sm:pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2 sm:space-y-3">
                    <p className="text-[9px] sm:text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed line-clamp-1 sm:line-clamp-2">
                      "{member.motto || 'Berbagi ilmu, berbakti bagi masyarakat desa.'}"
                    </p>
                    
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="flex items-center justify-center gap-1.5 w-full py-1.5 sm:py-2.5 rounded-lg sm:rounded-xl bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 transition-all text-[9px] sm:text-xs font-bold shadow-sm cursor-pointer"
                    >
                      <span>Lihat Profil</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 font-semibold text-sm">Tidak ada anggota yang cocok dengan filter divisi.</p>
            </div>
          )}
        </div>

        {/* ==================== SECTION: GALERI SEMASA KKN ==================== */}
        <div className="py-16 border-t border-slate-100 dark:border-slate-900 space-y-8 text-left">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Galeri Pengabdian</span>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Galeri Semasa KKN</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">
              Dokumentasi kenangan manis, tawa, gotong royong, dan sinergi hangat bersama warga selama pengabdian di Desa Besar II Terjun.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
            {[
              { src: '/Foto/Galeri/Galeri KKN/1.jpg', label: 'Berangkat dari kampus ke desa' },
              { src: '/Foto/Galeri/Galeri KKN/2.jpg', label: 'Pelepasan Mahasiswa KKN dari Kabupaten' },
              { src: '/Foto/Galeri/Galeri KKN/3.jpg', label: 'Edukreasi Seni Tari' },
              { src: '/Foto/Galeri/Galeri KKN/4.jpg', label: 'Foto Bareng di halaman perpustakaan UNIMED' },
              { src: '/Foto/Galeri/Galeri KKN/5.jpg', label: 'Pertama kali berjumpa' },
              { src: '/Foto/Galeri/Galeri KKN/6.jpg', label: 'Foto kece sebelum berangkat' },
              { src: '/Foto/Galeri/Galeri KKN/7.jpg', label: 'Keliling sambil lihat sunset' },
              { src: '/Foto/Galeri/Galeri KKN/8.jpg', label: 'Main main ke pantai' },
              { src: '/Foto/Galeri/Galeri KKN/9.jpg', label: 'Berkunjung ke Kantor Desa' },
              { src: '/Foto/Galeri/Galeri KKN/10.jpg', label: 'Dengan Pak Gubernur dan Bupati SUMUT' },
              { src: '/Foto/Galeri/Galeri KKN/11.jpg', label: 'Berkunjung ke Kantor Desa' },
              { src: '/Foto/Galeri/Galeri KKN/12.jpg', label: 'Gotong royong di Dusun III' },
              { src: '/Foto/Galeri/Galeri KKN/13.jpg', label: 'Ulang tahun Ibu Kades' },
              { src: '/Foto/Galeri/Galeri KKN/14.jpg', label: 'Ulang tahun Ibu Kades' },
              { src: '/Foto/Galeri/Galeri KKN/15.jpg', label: 'Senam lansia di posyandu' },
              { src: '/Foto/Galeri/Galeri KKN/16.jpg', label: 'Mengajar di SD Negeri 106192' },
              { src: '/Foto/Galeri/Galeri KKN/17.jpg', label: 'Edukreasi Bahasa Inggris' },
              { src: '/Foto/Galeri/Galeri KKN/18.jpeg', label: 'Berkunjung ke UMKM Kerei' },
              { src: '/Foto/Galeri/Galeri KKN/19.jpg', label: 'Saat pertama kali berjuma' },
              { src: '/Foto/Galeri/Galeri KKN/20.jpg', label: 'Hasil minuman Tepache' },
              { src: '/Foto/Galeri/Galeri KKN/21.jpg', label: 'Mengajar ke sekolah' },
              { src: '/Foto/KKN/sekolah/4.jpg', label: 'SD Negeri Kelas 2 A' },
              { src: '/Foto/Galeri/Galeri KKN/24.jpg', label: 'Dengan Bapak DPL' },
              { src: '/Foto/Galeri/Galeri KKN/23.jpg', label: 'Pembuatan konten UMKM Bu Kemah' },
            ].map((img, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden aspect-square border border-slate-200/40 dark:border-slate-800 bg-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
                <img
                  src={img.src}
                  alt={img.label}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-[11px] font-bold text-white tracking-wide">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== SECTION: INFORMASI KELOMPOK ==================== */}
        <div className="py-16 border-t border-slate-100 dark:border-slate-900 space-y-8 text-left">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Kontak & Posko Utama</span>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">Informasi Kelompok KKN</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-normal">
              Saluran komunikasi resmi dan alamat posko utama Desa Besar II Terjun.
            </p>
          </div>

          <div className="max-w-3xl pt-4">
            {/* Main Box: Address and logos */}
            <div className="p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 space-y-6">
              <div className="flex items-center space-x-4">
                {/* 3 Logos Row in KKNSection card */}
                <div className="flex items-center space-x-1.5 bg-white dark:bg-slate-950 p-1.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50 shrink-0 shadow-sm">
                  <img
                    src="\Foto\Logo\unimed.png"
                    alt="Logo UNIMED"
                    referrerPolicy="no-referrer"
                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                    title="Universitas Negeri Medan"
                  />
                  <img
                    src="\Foto\Logo\KKN.png"
                    alt="Logo KKN"
                    referrerPolicy="no-referrer"
                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                    title="KKN UNIMED 2026"
                  />
                  <img
                    src="\Foto\Logo\Sergei.png"
                    alt="Logo Kecamatan"
                    referrerPolicy="no-referrer"
                    className="h-10 w-auto object-contain hover:scale-105 transition-transform"
                    title="Kecamatan Pantai Cermin - Serdang Bedagai"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Universitas Negeri Medan</h4>
                  <p className="text-xs text-slate-400">Tahun Pengabdian {kknInfo.tahun}</p>
                </div>
              </div>

              <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-accent-gold tracking-widest block">Motto Pengabdian</span>
                <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed bg-white dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-850">
                  "{kknInfo.motto}"
                </p>
              </div>

              <div className="space-y-4 pt-2 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-400">
                  <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Lokasi Posko Utama</span>
                    <span>{kknInfo.lokasi}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200/40 dark:border-slate-800/60">
                  <Instagram className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Instagram Resmi</span>
                    <a
                      href={`https://instagram.com/${kknInfo.instagram}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      @{kknInfo.instagram}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200/40 dark:border-slate-800/60">
                  <svg className="w-5 h-5 text-slate-400 shrink-0 mt-0.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.41-.43-.58-.67-.02 1.95-.01 3.91-.02 5.86 0 1.33-.21 2.69-.82 3.85-.82 1.57-2.31 2.79-4.04 3.26-1.42.39-2.95.34-4.33-.17-1.78-.65-3.21-2.07-3.83-3.81-.69-1.92-.47-4.14.61-5.86 1.05-1.68 2.89-2.8 4.88-2.94V9.92c-1.12.06-2.26.54-2.97 1.4-.73.88-.93 2.13-.53 3.2.37 1 .13 1.92.57 2.87.52.88 1.45 1.52 2.45 1.64.99.12 2.01-.2 2.72-.9.77-.76.99-1.88.94-2.94.02-3.6 0-7.2 0-10.8.01-1.45-.02-2.91.02-4.37z"/>
                  </svg>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">TikTok Resmi</span>
                    <a
                      href={`https://www.tiktok.com/@${kknInfo.tiktok}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      @{kknInfo.tiktok}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-slate-600 dark:text-slate-400 pt-3 border-t border-slate-200/40 dark:border-slate-800/60">
                  <Mail className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Email KKN</span>
                    <a
                      href={`mailto:${kknInfo.email}`}
                      className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
                    >
                      {kknInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          </>
        )}
      </div>

      {/* VIDEO LIGHTBOX OVERLAY */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative bg-black rounded-2xl overflow-hidden max-w-4xl w-full aspect-[16/9] border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Exit top button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 hover:bg-black text-white transition-colors border border-white/10 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <iframe
              src={selectedVideo}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

    </section>
  );
}
