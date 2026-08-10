import { useState } from 'react';
import { mockPerangkatDesa } from '../data';
import { PerangkatDesa } from '../types';
import { ArrowDown, Award, Shield, User, X } from 'lucide-react';
import UserAvatar from './UserAvatar';

export default function StrukturPemerintah() {
  const [selectedStaff, setSelectedStaff] = useState<PerangkatDesa | null>(null);

  // Group staff members by category
  const kades = mockPerangkatDesa.find((p) => p.tingkat === 'kades');
  const sekdes = mockPerangkatDesa.find((p) => p.tingkat === 'sekdes');
  const kaurKasi = mockPerangkatDesa.filter((p) => p.tingkat === 'kaur_kasi');
  const kadus = mockPerangkatDesa.filter((p) => p.tingkat === 'kadus');

  const StaffCard = ({ staff }: { staff: PerangkatDesa }) => (
    <div
      onClick={() => setSelectedStaff(staff)}
      className="cursor-pointer group relative bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/60 dark:border-slate-800/80 shadow-md hover:shadow-xl hover:border-primary-green dark:hover:border-accent-gold transition-all duration-300 flex flex-col items-center text-center max-w-xs mx-auto"
    >
      {/* Decorative Gold Badge for High positions */}
      {(staff.tingkat === 'kades' || staff.tingkat === 'sekdes') && (
        <span className="absolute top-3 right-3 p-1 rounded-lg bg-accent-gold/10 text-accent-gold-dark dark:text-accent-gold text-xs font-bold flex items-center gap-1">
          <Award className="w-3.5 h-3.5" />
        </span>
      )}

      {/* Avatar Container with glowing border */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-4 border-2 border-slate-100 dark:border-slate-800 group-hover:border-primary-green dark:group-hover:border-accent-gold transition-colors duration-300">
        <UserAvatar
          gender={staff.jenisKelamin}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="space-y-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {staff.jabatan}
        </span>
        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-primary-green dark:group-hover:text-accent-gold transition-colors">
          {staff.nama}
        </h4>
      </div>

      <span className="mt-3 text-[11px] font-semibold text-primary-green dark:text-accent-gold underline underline-offset-4 decoration-transparent group-hover:decoration-current transition-all">
        Lihat Tugas Pokok
      </span>
    </div>
  );

  return (
    <section id="struktur-pemerintah" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Wave pattern overlay */}
      <div className="absolute inset-0 bg-pattern-waves opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block mb-3 text-xs font-bold tracking-widest text-primary-green dark:text-accent-gold uppercase bg-emerald-50 dark:bg-emerald-950/30 px-3.5 py-1.5 rounded-full border border-emerald-500/10">
            Sinergi Kepemimpinan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 dark:text-white">
            Struktur Organisasi Pemerintah Desa
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-green to-secondary-blue mx-auto rounded-full" />
          <p className="text-slate-600 dark:text-slate-400">
            Bagan kepemimpinan Desa Besar II Terjun yang disusun secara berjenjang guna menjamin efektivitas koordinasi, transparansi, serta kualitas pelayanan publik.
          </p>
        </div>

        {/* ORGANIZATIONAL CHART TREE */}
        <div className="space-y-8 max-w-5xl mx-auto">
          
          {/* Tier 1: Kepala Desa */}
          {kades && (
            <div className="relative flex flex-col items-center">
              <StaffCard staff={kades} />
              
              {/* Vertical connector line downward */}
              <div className="w-0.5 h-12 bg-gradient-to-b from-slate-300 to-slate-400 dark:from-slate-700 dark:to-slate-600 my-2" />
            </div>
          )}

          {/* Tier 2: Sekretaris Desa */}
          {sekdes && (
            <div className="relative flex flex-col items-center">
              <StaffCard staff={sekdes} />

              {/* Connector split lines */}
              <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700 mt-2" />
              
              {/* Horizontal line for Kaur/Kasi connection */}
              <div className="hidden md:block w-3/4 h-0.5 bg-slate-300 dark:bg-slate-700" />
            </div>
          )}

          {/* Tier 3: Kaur & Kasi (Horizontal Grid on desktop) */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-4 max-w-5xl mx-auto">
              {kaurKasi.map((staff) => (
                <div key={staff.id} className="relative flex flex-col items-center">
                  {/* Small vertical connector from the horizontal line to card on desktop */}
                  <div className="hidden md:block w-0.5 h-6 bg-slate-300 dark:bg-slate-700 absolute -top-4" />
                  <StaffCard staff={staff} />
                </div>
              ))}
            </div>

            {/* Downward line toward Kepala Dusun on desktop */}
            <div className="hidden md:flex flex-col items-center mt-10">
              <div className="w-1/2 h-0.5 bg-slate-300 dark:bg-slate-700" />
              <div className="w-0.5 h-10 bg-slate-300 dark:bg-slate-700" />
            </div>
          </div>

          {/* Tier 4: Kepala Dusun */}
          <div className="pt-6">
            <h5 className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-6">
              Kepala Kewilayahan (Dusun)
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {kadus.map((staff) => (
                <div key={staff.id} className="relative flex flex-col items-center">
                  {/* Small vertical connector on desktop */}
                  <div className="hidden md:block w-0.5 h-4 bg-slate-300 dark:bg-slate-700 absolute -top-4" />
                  <StaffCard staff={staff} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* MODAL DETIL TUGAS STAF */}
        {selectedStaff && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl animate-in zoom-in-95 duration-300">
              
              <button
                onClick={() => setSelectedStaff(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center space-y-4">
                
                {/* Large Portrait */}
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-500/10 dark:border-accent-gold/10">
                  <UserAvatar
                    gender={selectedStaff.jenisKelamin}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name / Title */}
                <div className="space-y-1">
                  <span className="px-3 py-1 text-[10px] font-bold bg-primary-green/10 dark:bg-accent-gold/10 text-primary-green dark:text-accent-gold rounded-full uppercase tracking-wider">
                    {selectedStaff.jabatan}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedStaff.nama}
                  </h3>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                    Pemerintah Desa Besar II Terjun
                  </p>
                </div>

                <div className="h-px w-full bg-slate-100 dark:bg-slate-800" />

                {/* Duty / Tugas Pokok */}
                <div className="text-left w-full space-y-3">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-primary-green dark:text-accent-gold" /> Tugas Pokok & Fungsi (Tupoksi)
                  </span>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-100 dark:border-slate-800/80">
                    {selectedStaff.detailTugas || 'Membantu menyelenggarakan urusan dinas dan pelayanan masyarakat sesuai bidang kedinasan demi kemajuan dan kondusivitas wilayah Desa Besar II Terjun.'}
                  </p>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
