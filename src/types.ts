export interface PerangkatDesa {
  id: string;
  nama: string;
  jabatan: string;
  foto: string;
  tingkat: 'kades' | 'sekdes' | 'kaur_kasi' | 'kadus' | 'staf';
  detailTugas?: string;
  jenisKelamin?: 'L' | 'P';
}

export interface PotensiDesa {
  id: string;
  kategori: 'Pertanian' | 'Perikanan' | 'UMKM' | 'Budaya' | 'Potensi Desa' | 'Pendidikan';
  judul: string;
  deskripsi: string;
  gambar: string;
  detailInfo?: string;
}

export interface UMKMData {
  id: string;
  nama: string;
  kategori: string;
  deskripsi: string;
  foto: string;
  fotoList?: string[];
  lokasi: string;
  kontak: string;
  pemilik?: string;
  produk?: string[];
  bukanWA?: boolean;
  bahan?: string;
  tahunBerdiri?: string;
  caraMengelola?: string;
  instagram?: string;
  jenisUsaha?: string;
  menjual?: string;
  sekaliProduksi?: string;
  mitraKerja?: string;
  hasilUmkm?: string;
  hargaKemarin?: string;
  hargaSekarang?: string;
  koordinat?: string;
}

export interface GaleriItem {
  id: string;
  kategori: 'desa' | 'alam' | 'budaya' | 'kegiatan' | 'umkm';
  judul: string;
  url: string;
  deskripsi?: string;
}

export interface FasilitasUmum {
  id: string;
  nama: string;
  deskripsi: string;
  foto: string;
  fotoList?: string[];
  iconName: string; // Lucide icon name
  lokasiText: string;
  kategori?: string;
  koordinat?: string;
}

export interface KKNMember {
  id: string;
  nama: string;
  nim?: string;
  jenisKelamin: 'L' | 'P';
  divisi: string;
  peran: string;
  motto: string;
  foto: string;
  prodi?: string;
  jurusan?: string;
  fakultas?: string;
  instagram?: string;
}

export interface ProgramKerjaKKN {
  id: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
  status: 'Selesai' | 'Berjalan' | 'Rencana';
  foto: string;
  videoUrl?: string;
}

export interface TimelineKegiatan {
  id: string;
  judul: string;
  tanggal: string;
  deskripsi: string;
  ikon: string; // Lucide icon name
}

export interface KeadaanPendudukDusun {
  dusun: string;
  jlhPenduduk: number;
  jlhKK: number;
  awalLK: number;
  awalPR: number;
  awalJLH: number;
  lahirLK: number;
  lahirPR: number;
  meninggalLK: number;
  meninggalPR: number;
  datangLK: number;
  datangPR: number;
  pindahLK: number;
  pindahPR: number;
  wajibKTP: number;
  akhirLK: number;
  akhirPR: number;
  akhirJLH: number;
}

