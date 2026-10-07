export interface ZakatProblem {
  id: string;
  tipe: 'Zakat Fitri' | 'Zakat Mal (Emas)' | 'Zakat Mal (Tabungan/Uang)' | 'Zakat Pertanian' | 'Zakat Perdagangan' | 'Zakat Peternakan';
  judul: string;
  kasus: string;
  dataAngka: {
    label: string;
    value: string;
  }[];
  pertanyaan: string;
  kunciJawabanNilai: number;
  satuan: string;
  pilihanOpsi: {
    teks: string;
    isCorrect: boolean;
  }[];
  rumus: string;
  langkahPerhitungan: string[];
  kesimpulanHukum: string;
}

export const zakatProblemsData: ZakatProblem[] = [
  {
    id: 'zp-1',
    tipe: 'Zakat Fitri',
    judul: 'Perhitungan Zakat Fitri Keluarga Pak Rahmat',
    kasus: 'Pak Rahmat adalah seorang kepala keluarga muslim. Di rumahnya, ia menanggung nafkah diri sendiri, seorang istri, 3 orang anak kandung, dan 1 orang ibunya yang sudah lansia. Menjelang malam Idulfitri, panitia masjid menetapkan besaran zakat fitrah per jiwa adalah 2,5 kg beras (atau setara uang Rp 40.000,-).',
    dataAngka: [
      { label: 'Jumlah Anggota Keluarga Tanggungan', value: 'Pak Rahmat (1) + Istri (1) + Anak (3) + Ibu (1) = 6 Jiwa' },
      { label: 'Kadar Zakat Beras per Jiwa', value: '2,5 kg beras (atau 3,5 liter)' },
      { label: 'Konversi Rupiah per Jiwa', value: 'Rp 40.000,-' }
    ],
    pertanyaan: 'Berapakah total beras dan total uang yang wajib dikeluarkan Pak Rahmat untuk zakat fitri seluruh tanggungannya?',
    kunciJawabanNilai: 15,
    satuan: 'kg beras atau Rp 240.000,-',
    pilihanOpsi: [
      { teks: '12,5 kg beras atau Rp 200.000,-', isCorrect: false },
      { teks: '15 kg beras atau Rp 240.000,-', isCorrect: true },
      { teks: '17,5 kg beras atau Rp 280.000,-', isCorrect: false },
      { teks: '20 kg beras atau Rp 320.000,-', isCorrect: false }
    ],
    rumus: 'Total Zakat Fitri = Jumlah Jiwa yang Ditanggung × Kadar per Jiwa (2,5 kg atau Rp 40.000)',
    langkahPerhitungan: [
      '1. Hitung total jiwa yang wajib dizakati: Pak Rahmat + Istri + 3 Anak + Ibu = 6 jiwa.',
      '2. Hitung bentuk makanan pokok (beras): 6 jiwa × 2,5 kg = 15 kg beras.',
      '3. Hitung bentuk konversi uang tunai: 6 jiwa × Rp 40.000 = Rp 240.000,-.'
    ],
    kesimpulanHukum: 'Pak Rahmat wajib membayarkan 15 kg beras makanan pokok atau uang tunai Rp 240.000,- sebelum salat Idulfitri dimulai.'
  },
  {
    id: 'zp-2',
    tipe: 'Zakat Mal (Emas)',
    judul: 'Perhitungan Zakat Tabungan Emas Murni Bu Fatimah',
    kasus: 'Ibu Fatimah memiliki simpanan logam mulia emas murni seberat 120 gram. Emas tersebut disimpan sebagai tabungan investasi dan telah tersimpan genap selama 1 tahun Hijriyah (mencapai haul). Diketahui nisab zakat emas adalah 85 gram emas murni dengan kadar zakat 2,5%. Jika harga emas saat itu Rp 1.000.000,- per gram.',
    dataAngka: [
      { label: 'Kepemilikan Emas', value: '120 gram' },
      { label: 'Nisab Emas Murni', value: '85 gram (Wajib Zakat karena 120 ≥ 85)' },
      { label: 'Haul', value: 'Genap 1 tahun (Terpenuhi)' },
      { label: 'Kadar Zakat Emas', value: '2,5%' },
      { label: 'Harga Emas per Gram', value: 'Rp 1.000.000,-' }
    ],
    pertanyaan: 'Berapakah zakat emas yang wajib dikeluarkan Bu Fatimah (dalam gram emas dan dalam rupiah)?',
    kunciJawabanNilai: 3,
    satuan: 'gram emas atau Rp 3.000.000,-',
    pilihanOpsi: [
      { teks: '2,5 gram emas atau Rp 2.500.000,-', isCorrect: false },
      { teks: '3 gram emas atau Rp 3.000.000,-', isCorrect: true },
      { teks: '4 gram emas atau Rp 4.000.000,-', isCorrect: false },
      { teks: '5 gram emas atau Rp 5.000.000,-', isCorrect: false }
    ],
    rumus: 'Zakat Emas = Total Berat Emas (gram) × 2,5%',
    langkahPerhitungan: [
      '1. Uji Syarat Nisab: Kepemilikan 120 gr > Nisab 85 gr, haul genap 1 tahun (Wajib Zakat).',
      '2. Hitung kadar zakat: 120 gram × 2,5% = 3 gram emas murni.',
      '3. Hitung konversi rupiah: 3 gram × Rp 1.000.000 = Rp 3.000.000,-.'
    ],
    kesimpulanHukum: 'Bu Fatimah wajib mengeluarkan 3 gram emas batangan atau uang senilai Rp 3.000.000,- kepada mustahiq zakat.'
  },
  {
    id: 'zp-3',
    tipe: 'Zakat Pertanian',
    judul: 'Zakat Panen Padi Sawah dengan Irigasi Berbayar (Pompa Air)',
    kasus: 'Pak Haji Hasan memanen padi sawahnya menghasilkan gabah bersih seberat 2.000 kg (2 ton). Dalam pengelolaannya, sawah tersebut dialiri air menggunakan pompa diesel berbayar dan membeli bahan bakar secara rutin. Nisab zakat pertanian adalah 5 wasaq (setara 653 kg gabah).',
    dataAngka: [
      { label: 'Hasil Panen Bersih', value: '2.000 kg gabah' },
      { label: 'Nisab Pertanian (5 Wasaq)', value: '653 kg gabah (Wajib Zakat karena 2.000 ≥ 653)' },
      { label: 'Sistem Pengairan', value: 'Irigasi berbiaya (Kadar zakat = 5%)' }
    ],
    pertanyaan: 'Berapakah zakat hasil panen yang wajib dikeluarkan Pak Haji Hasan saat memanen?',
    kunciJawabanNilai: 100,
    satuan: 'kg gabah',
    pilihanOpsi: [
      { teks: '50 kg gabah', isCorrect: false },
      { teks: '100 kg gabah', isCorrect: true },
      { teks: '200 kg gabah', isCorrect: false },
      { teks: '150 kg gabah', isCorrect: false }
    ],
    rumus: 'Zakat Pertanian Irigasi Berbiaya = Total Panen (kg) × 5% (Jika tadah hujan alami = 10%)',
    langkahPerhitungan: [
      '1. Periksa nisab: 2.000 kg melampaui nisab 653 kg, maka wajib zakat setiap selesai panen (tanpa menunggu haul 1 tahun).',
      '2. Tentukan persentase: Karena menggunakan pengairan berbiaya/pompa diesel, persentasenya adalah 5%.',
      '3. Hitung zakat: 2.000 kg × 5% = 100 kg gabah.'
    ],
    kesimpulanHukum: 'Zakat yang wajib dikeluarkan saat panen adalah 100 kg gabah. Seandainya sawahnya tadah hujan tanpa biaya, zakatnya menjadi 10% = 200 kg gabah.'
  },
  {
    id: 'zp-4',
    tipe: 'Zakat Perdagangan',
    judul: 'Zakat Perniagaan Toko Kelontong Berkah',
    kasus: 'Pak Sulaiman memiliki toko kelontong. Setelah berjalan 1 tahun buku (haul), dihitung aset lancarnya: nilai stok barang dagangan Rp 120.000.000,-, uang kas dan piutang lancar Rp 30.000.000,-, serta memiliki utang jatuh tempo yang harus dibayar Rp 50.000.000,-. Harga emas saat itu Rp 1.000.000/gram (Nisab 85 gr emas = Rp 85.000.000,-).',
    dataAngka: [
      { label: 'Stok Barang Dagangan', value: 'Rp 120.000.000,-' },
      { label: 'Uang Kas & Piutang Lancar', value: 'Rp 30.000.000,-' },
      { label: 'Utang Dagang Jatuh Tempo', value: 'Rp 50.000.000,-' },
      { label: 'Nilai Nisab (85 gr Emas)', value: 'Rp 85.000.000,-' }
    ],
    pertanyaan: 'Apakah Pak Sulaiman wajib zakat, dan berapakah nominal zakat perniagaan yang wajib ia bayarkan?',
    kunciJawabanNilai: 2500000,
    satuan: 'Rupiah',
    pilihanOpsi: [
      { teks: 'Belum wajib karena belum mencapai laba bersih Rp 100 juta', isCorrect: false },
      { teks: 'Wajib, zakatnya sebesar Rp 2.500.000,-', isCorrect: true },
      { teks: 'Wajib, zakatnya sebesar Rp 3.750.000,-', isCorrect: false },
      { teks: 'Wajib, zakatnya sebesar Rp 1.500.000,-', isCorrect: false }
    ],
    rumus: 'Harta Bersih Zakat Perniagaan = (Stok Barang Dagangan + Uang Kas/Piutang) - Utang Jatuh Tempo. Zakat = 2,5% × Harta Bersih.',
    langkahPerhitungan: [
      '1. Total Aset Kotor: Rp 120.000.000 + Rp 30.000.000 = Rp 150.000.000,-.',
      '2. Kurangi Utang Jatuh Tempo: Rp 150.000.000 - Rp 50.000.000 = Rp 100.000.000,- (Aset Bersih Perniagaan).',
      '3. Cek Nisab: Rp 100.000.000 ≥ Nisab Rp 85.000.000 (Maka Wajib Zakat!).',
      '4. Hitung Zakat: Rp 100.000.000 × 2,5% = Rp 2.500.000,-.'
    ],
    kesimpulanHukum: 'Pak Sulaiman wajib membayar zakat perniagaan sebesar Rp 2.500.000,-.'
  },
  {
    id: 'zp-5',
    tipe: 'Zakat Peternakan',
    judul: 'Zakat Hewan Ternak Kambing Pak Ahmad',
    kasus: 'Pak Ahmad seorang peternak memiliki 55 ekor kambing yang digembalakan di padang rumput bebas (as-sa\'imah) dan telah genap dipelihara selama 1 tahun (haul).',
    dataAngka: [
      { label: 'Jumlah Kambing Milik Pak Ahmad', value: '55 ekor' },
      { label: 'Tabel Nisab Kambing', value: '40 - 120 ekor = 1 ekor kambing; 121 - 200 ekor = 2 ekor kambing; 201 - 300 ekor = 3 ekor kambing' }
    ],
    pertanyaan: 'Berapakah zakat ternak yang wajib dikeluarkan Pak Ahmad?',
    kunciJawabanNilai: 1,
    satuan: 'ekor kambing umur 1 atau 2 tahun',
    pilihanOpsi: [
      { teks: 'Belum wajib karena belum mencapai 100 ekor', isCorrect: false },
      { teks: '1 ekor kambing', isCorrect: true },
      { teks: '2 ekor kambing', isCorrect: false },
      { teks: 'Uang seharga 5 ekor kambing', isCorrect: false }
    ],
    rumus: 'Nisab Kambing pertama adalah 40 ekor. Rentang 40 s.d. 120 ekor zakatnya 1 ekor kambing (usia minimal 1 tahun untuk domba atau 2 tahun untuk kambing kacang).',
    langkahPerhitungan: [
      '1. Jumlah kambing = 55 ekor. Ini berada di antara rentang 40 s.d. 120 ekor.',
      '2. Memenuhi syarat sa\'imah (makan rumput gratis) dan genap 1 tahun haul.',
      '3. Maka zakat yang wajib diserahkan = 1 ekor kambing sehat.'
    ],
    kesimpulanHukum: 'Pak Ahmad wajib mengeluarkan zakat 1 ekor kambing yang telah memenuhi syarat umur (jadza\'ah atau tsaniyyah).'
  }
];
