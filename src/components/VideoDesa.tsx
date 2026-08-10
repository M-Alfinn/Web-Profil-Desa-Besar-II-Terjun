import { useState } from 'react';
import { 
  Play, Calendar, ExternalLink, Check, Copy, 
  Video, Film, Tv, Radio, Flame 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface VideoItem {
  id: string;
  judul: string;
  penulis: string;
  tanggal: string;
  youtubeId: string;
  link: string;
  deskripsi?: string;
  durasi?: string;
}

export default function VideoDesa() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string>('vid-1');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const videoList: VideoItem[] = [
    {
      id: 'vid-1',
      judul: 'Parodi Debat Pilpres',
      penulis: 'Dani',
      tanggal: '22 Maret 2019',
      youtubeId: '0d1-NQJdgMQ',
      link: 'https://youtu.be/0d1-NQJdgMQ?si=fNUlVHa2nxU98XBk',
      deskripsi: 'Sebuah tayangan parodi kreatif seputar kontestasi debat pilpres yang disajikan secara humoris, cerdas, dan jenaka oleh para pemuda kreatif desa sebagai hiburan rakyat.',
      durasi: '12:45'
    },
    {
      id: 'vid-2',
      judul: 'Suara Rakyat Jangan di Beli',
      penulis: 'Dani',
      tanggal: '22 Maret 2019',
      youtubeId: 'uoube_4SCJY',
      link: 'https://youtu.be/uoube_4SCJY?si=s86EuXQ4V3AcTlSr',
      deskripsi: 'Pesan edukasi moral, imbauan sosial, serta ajakan positif bagi segenap masyarakat desa untuk menolak praktik politik uang demi keberlangsungan demokrasi yang sehat.',
      durasi: '08:30'
    }
  ];

  const activeVideo = videoList.find(v => v.id === activeVideoId) || videoList[0];

  const handleCopy = (id: string, link: string) => {
    navigator.clipboard.writeText(link);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const selectVideoFromPlaylist = (id: string) => {
    setActiveVideoId(id);
    setIsPlaying(false);
  };

  return (
    <section id="video-desa" className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Visual glowing layout circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/5 dark:bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10 inline-flex items-center gap-1.5">
            <Video className="w-3.5 h-3.5 text-red-500" />
            Media & Video Desa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Galeri Video Kreatif & Edukasi
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400">
            Nikmati tontonan video informatif, dokumentasi kegiatan, parodi kreatif, serta sosialisasi mendidik hasil karya mandiri warga dan pemuda kreatif desa.
          </p>
        </div>

        {/* CINEMATIC THEATER SPLIT VIEWPORT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* PLAYLIST QUEUE COLUMN: Positioned on Top for Mobile/Tablet (order-1), Right for Desktop (lg:order-2) */}
          <div className="lg:col-span-4 space-y-4 order-1 lg:order-2">
            <div className="bg-white dark:bg-slate-900 rounded-[28px] p-5 border border-slate-200/50 dark:border-slate-800/80 shadow-md">
              
              <div className="flex items-center space-x-2 mb-4 px-1.5">
                <Tv className="w-4 h-4 text-slate-400" />
                <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  Daftar Putar Video
                </h3>
              </div>

              {/* Playlist Feed Stack */}
              <div className="space-y-3">
                {videoList.map((video) => {
                  const isCurrent = video.id === activeVideoId;

                  return (
                    <button
                      key={video.id}
                      onClick={() => selectVideoFromPlaylist(video.id)}
                      className={`w-full flex items-center gap-3.5 p-3 rounded-2xl border transition-all text-left cursor-pointer group ${
                        isCurrent
                          ? 'bg-red-500/5 dark:bg-red-500/10 border-red-500/30'
                          : 'bg-transparent border-transparent hover:bg-slate-50 dark:hover:bg-slate-800/40'
                      }`}
                    >
                      {/* Compact Thumbnail Frame */}
                      <div className="relative w-24 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0 border border-slate-100 dark:border-slate-800">
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.judul}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform"
                        />

                        {/* Translucent mini overlay play icon */}
                        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors">
                          <div className={`p-1.5 rounded-full transition-transform ${
                            isCurrent ? 'bg-red-600 scale-110 text-white' : 'bg-white/80 group-hover:bg-red-600 group-hover:text-white scale-100 text-slate-900'
                          }`}>
                            <Play className="w-3 h-3 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Mini Duration indicator */}
                        {video.durasi && (
                          <span className="absolute bottom-1 right-1 bg-slate-950/80 text-[8px] font-black text-white px-1 py-0.5 rounded-sm">
                            {video.durasi}
                          </span>
                        )}
                      </div>

                      {/* Info lines */}
                      <div className="min-w-0 flex-grow">
                        <h4 className={`text-xs sm:text-sm font-bold line-clamp-1 transition-colors ${
                          isCurrent 
                            ? 'text-red-600 dark:text-red-400' 
                            : 'text-slate-900 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400'
                        }`}>
                          {video.judul}
                        </h4>
                        
                        <div className="flex items-center space-x-2 text-[10px] text-slate-400 dark:text-slate-500 font-semibold mt-1">
                          <span>Rilis: {video.tanggal}</span>
                        </div>
                      </div>

                    </button>
                  );
                })}
              </div>

            </div>

            {/* Support Community Notice Box */}
            <div className="bg-gradient-to-br from-emerald-500/5 to-secondary-blue/5 rounded-[24px] p-5 border border-slate-100 dark:border-slate-900 flex items-start space-x-3.5">
              <Radio className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                  Ajukan Konten Kreatif Anda
                </h5>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                  Apakah Anda memiliki video seputar kearifan lokal Desa Besar II Terjun? Kirim tautan YouTube Anda kepada Perangkat Desa untuk dimuat di sini.
                </p>
              </div>
            </div>

          </div>

          {/* CINEMATIC THEATER VIEWPORT: Positioned on Bottom for Mobile/Tablet (order-2), Left for Desktop (lg:order-1) */}
          <div className="lg:col-span-8 space-y-6 order-2 lg:order-1">
            <div className="bg-white dark:bg-slate-900 rounded-[32px] overflow-hidden border border-slate-200/60 dark:border-slate-800/80 shadow-xl">
              
              {/* Main TV Screen Frame */}
              <div className="relative aspect-video w-full bg-slate-950 overflow-hidden shadow-inner">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                    title={activeVideo.judul}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 absolute inset-0 z-10"
                  />
                ) : (
                  <>
                    {/* Immersive YouTube Cover Image */}
                    <img
                      src={`https://img.youtube.com/vi/${activeVideo.youtubeId}/maxresdefault.jpg`}
                      alt={activeVideo.judul}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-90 scale-100 hover:scale-[1.01] transition-transform duration-700"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://img.youtube.com/vi/${activeVideo.youtubeId}/hqdefault.jpg`;
                      }}
                    />

                    {/* Majestic Center Pulsing Play Trigger */}
                    <div className="absolute inset-0 bg-slate-950/30 flex items-center justify-center z-10">
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="p-5.5 sm:p-7 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 cursor-pointer flex items-center justify-center group"
                        aria-label={`Putar ${activeVideo.judul}`}
                      >
                        <Play className="w-8 h-8 fill-current ml-1 group-hover:scale-105 transition-transform" />
                      </button>
                    </div>

                    {/* Floating live badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 bg-red-600 px-3 py-1 rounded-xl shadow-lg border border-red-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                      <span className="text-[10px] font-black text-white uppercase tracking-wider">
                        Cinema Theater
                      </span>
                    </div>

                    {/* Float duration tag */}
                    {activeVideo.durasi && (
                      <span className="absolute bottom-4 right-4 bg-slate-900/90 text-[10px] font-extrabold text-white px-2 py-1 rounded-md tracking-wider border border-white/15 backdrop-blur-xs">
                        {activeVideo.durasi} MINS
                      </span>
                    )}
                  </>
                )}
              </div>

              {/* Theater Viewport Info Details */}
              <div className="p-6 sm:p-8 space-y-6">
                
                <div className="space-y-4">
                  {/* Meta tag rows */}
                  <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">
                    <span className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-950 border border-slate-200/30 dark:border-slate-800/50 px-3 py-1.5 rounded-xl">
                      <Calendar className="w-3.5 h-3.5 text-primary-green" />
                      <span>Rilis: {activeVideo.tanggal}</span>
                    </span>
                    <span className="flex items-center gap-1.5 bg-red-500/5 text-red-600 dark:text-red-400 border border-red-500/10 px-3 py-1.5 rounded-xl">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>Edukasi Pilihan</span>
                    </span>
                  </div>

                  {/* Title & paragraph */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 dark:text-white leading-tight">
                      {activeVideo.judul}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                      {activeVideo.deskripsi}
                    </p>
                  </div>
                </div>

                {/* Sub Action controls */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 text-white dark:text-slate-950 shadow-md transition-colors cursor-pointer"
                  >
                    <Play className="w-4 h-4 fill-current shrink-0" />
                    <span>{isPlaying ? 'Tutup Pemutar' : 'Putar Sekarang'}</span>
                  </button>

                  <a
                    href={activeVideo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 shrink-0 text-slate-400" />
                    <span>Tonton di YouTube</span>
                  </a>

                  <button
                    onClick={() => handleCopy(activeVideo.id, activeVideo.link)}
                    className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border border-slate-200 dark:border-slate-850 bg-white dark:bg-slate-950 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    {copiedId === activeVideo.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span className="text-emerald-500 font-bold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>Salin Link</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
