import { MapPin, Phone, Mail, Clock, ShieldCheck, Compass, Navigation, Car, Train } from 'lucide-react';

export default function LokasiDesa() {
  return (
    <section id="lokasi" className="py-20 bg-slate-50 dark:bg-slate-900/40 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-pattern-abstract pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-3 text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Akses & Komunikasi
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Lokasi & Kontak Penting Desa
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400">
            Dapatkan petunjuk navigasi menuju Desa Besar II Terjun serta nomor telepon darurat/hotline pelayanan umum desa.
          </p>
        </div>

        {/* LOKASI GRID Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Block: Map & Directions (Col 7) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-slate-950 p-4 rounded-3xl border border-slate-200/50 dark:border-slate-800/80 shadow-xl overflow-hidden">
              
              {/* Actual Embedded Google Maps pointing to Pantai Cermin region */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-850 relative group">
                <iframe
                  title="Google Maps Desa Besar II Terjun"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.07920119865!2d98.9833333!3d3.5999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30311bd3057111b7%3A0xc3e16ee2da1578f5!2sBesar%20II%20Terjun%2C%20Kec.%20Pantai%20Cermin%2C%20Kabupaten%20Serdang%20Bedagai%2C%20Sumatera%20Utara!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                
                {/* Floating overlay button for direct navigation */}
                <div className="absolute bottom-4 right-4 z-10">
                  <a
                    href="https://maps.app.goo.gl/LZHt7DvVCLn3dtRcA"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-lg transition-transform hover:scale-105"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Petunjuk Rute (Google Maps)</span>
                  </a>
                </div>
              </div>

              {/* Directions Details */}
              <div className="p-4 sm:p-6 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-primary-green dark:text-accent-gold" />
                  Petunjuk Aksesibilitas Menuju Desa
                </h3>
                
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-primary-green dark:text-accent-gold">
                      <Compass className="w-4.5 h-4.5 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider">Jarak Tempuh</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      ± 45 km dari pusat Kota Medan (Waktu tempuh sekitar 1 jam 15 menit melalui rute jalan lintas timur sumatera).
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-primary-green dark:text-accent-gold">
                      <Car className="w-4.5 h-4.5 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider">Akses Kendaraan</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Dapat diakses dengan mobil pribadi, sepeda motor, bus pariwisata sedang, maupun angkutan desa setempat.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-primary-green dark:text-accent-gold">
                      <Train className="w-4.5 h-4.5 shrink-0" />
                      <span className="text-xs font-bold uppercase tracking-wider">Rute Alternatif</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                      Keluar tol Perbaungan lalu menuju arah lintas Pantai Cermin, belok kiri di simpang utama Desa Besar II Terjun.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Block: Hotline Contacts (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Kontak Kami</h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Silakan hubungi tim pengembang profil desa atau pemerintah desa setempat melalui saluran komunikasi di bawah ini.
            </p>

            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800/80 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full filter blur-2xl pointer-events-none" />
              
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Hubungan Masyarakat</span>
                <h4 className="text-xl font-black text-slate-950 dark:text-white">Hubungi Kami</h4>
                <div className="h-0.5 w-8 bg-emerald-600 rounded-full mt-1.5" />
              </div>

              <div className="space-y-5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {/* Alamat */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider mb-0.5">Alamat</span>
                    <p className="font-semibold leading-relaxed">
                      Jl. Ayahanda Dusun II Desa Besar II Terjun Kec. Pantai Cermin Kab. Serdang Bedagai
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider mb-0.5">Email</span>
                    <a href="mailto:besar2terjun@gmail.com" className="font-semibold text-slate-900 dark:text-white hover:text-emerald-600 transition-colors break-all">
                      besar2terjun@gmail.com
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4 items-start">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-xl shrink-0 mt-0.5">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 block uppercase tracking-wider mb-0.5">Website resmi</span>
                    <a href="http://besarduaterjun.web.id" target="_blank" rel="noreferrer" className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline break-all">
                      http://besarduaterjun.web.id
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <a
                  href="mailto:besar2terjun@gmail.com"
                  className="w-full flex items-center justify-center gap-1.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-all hover:scale-[1.02] shadow-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Kirim Email Desa</span>
                </a>
              </div>

            </div>

            <div className="flex items-center space-x-2.5 text-[10px] text-orange-600 dark:text-orange-400 italic bg-orange-500/5 p-3 rounded-xl border border-orange-500/10">
              <ShieldCheck className="w-4.5 h-4.5 shrink-0" />
              <span>Gunakan kontak di atas pada jam kerja untuk keperluan bimbingan, pertanyaan, atau koordinasi program kerja.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
