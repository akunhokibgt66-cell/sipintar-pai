export interface TajwidSample {
  id: string;
  surahOrAyat: string;
  phraseArabic: string;
  phraseLatin: string;
  targetWordArabic: string;
  hukumTajwid: string;
  kategori: 'Nun Sukun / Tanwin' | 'Mim Sukun' | 'Mad' | 'Qalqalah' | 'Alif Lam' | 'Tafkhim/Tarqiq';
  hurufPenyebab: string;
  caraBaca: string;
  options: string[];
}

export const tajwidSamples: TajwidSample[] = [
  {
    id: 't-1',
    surahOrAyat: 'QS. Al-Kafirun : 2',
    phraseArabic: 'لَآ اَعْبُدُ مَا تَعْبُدُوْنَ',
    phraseLatin: 'Lā a‘budu mā ta‘budūn',
    targetWordArabic: 'لَآ اَعْبُدُ',
    hukumTajwid: 'Mad Jā’iz Munfaṣil',
    kategori: 'Mad',
    hurufPenyebab: 'Huruf mad (Alif) di akhir kata "Lā" bertemu Hamzah (أ) di awal kata "A\'budu"',
    caraBaca: 'Dibaca panjang 2, 4, atau 5 harakat (umumnya 4-5 harakat).',
    options: ['Mad Wajib Muttashil', 'Mad Jaiz Munfashil', 'Mad Thabi\'i', 'Mad \'Aridh Lissukun']
  },
  {
    id: 't-2',
    surahOrAyat: 'QS. Al-Ikhlas : 1',
    phraseArabic: 'قُلْ هُوَ اللّٰهُ اَحَدٌ',
    phraseLatin: 'Qul huwallāhu aḥad',
    targetWordArabic: 'اَحَدٌ (saat waqaf)',
    hukumTajwid: 'Qalqalah Kubrā',
    kategori: 'Qalqalah',
    hurufPenyebab: 'Huruf Dāl (د) berharakat dhommatain dibaca sukun karena berhenti (waqaf)',
    caraBaca: 'Dipantulkan dengan suara tebal, bulat, dan kuat pada huruf Dal.',
    options: ['Qalqalah Sugra', 'Qalqalah Kubra', 'Ikhfa\' Haqiqi', 'Izhar Halqi']
  },
  {
    id: 't-3',
    surahOrAyat: 'QS. Al-Fil : 4',
    phraseArabic: 'تَرْمِيْهِمْ بِحِجَارَةٍ مِّنْ سِجِّيْلٍ',
    phraseLatin: 'Tarmīhim biḥijāratim min sijjīl',
    targetWordArabic: 'تَرْمِيْهِمْ بِـ',
    hukumTajwid: 'Ikhfā’ Syafawī',
    kategori: 'Mim Sukun',
    hurufPenyebab: 'Huruf Mīm Sukūn (مْ) bertemu dengan huruf Bā’ (ب)',
    caraBaca: 'Disamarkan di antara kedua bibir disertai dengungan (gunnah) 2 harakat.',
    options: ['Izhar Syafawi', 'Ikhfa\' Syafawi', 'Idgham Mimi', 'Iqlab']
  },
  {
    id: 't-4',
    surahOrAyat: 'QS. An-Nas : 1',
    phraseArabic: 'قُلْ اَعُوْذُ بِرَبِّ النَّاسِ',
    phraseLatin: 'Qul a‘ūżu birabbin-nās',
    targetWordArabic: 'النَّاسِ',
    hukumTajwid: 'Alif Lām Syamsiyyah (Idgām Syamsī)',
    kategori: 'Alif Lam',
    hurufPenyebab: 'Alif Lam bertemu huruf Nun (ن) yang merupakan huruf Syamsiyyah',
    caraBaca: 'Bunyi Lam dileburkan masuk ke huruf Nun bertasydid dengan dengung 2 harakat.',
    options: ['Alif Lam Qomariyyah', 'Alif Lam Syamsiyyah', 'Izhar Halqi', 'Mad Badal']
  },
  {
    id: 't-5',
    surahOrAyat: 'QS. Al-Baqarah : 256',
    phraseArabic: 'فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ',
    phraseLatin: 'Fa may yakfur biṭ-ṭāgūt',
    targetWordArabic: 'فَمَنْ يَّـ',
    hukumTajwid: 'Idgām Bigunnah',
    kategori: 'Nun Sukun / Tanwin',
    hurufPenyebab: 'Nun Sukun (نْ) bertemu huruf Yā’ (ي) di dua kata terpisah',
    caraBaca: 'Suara Nun dimasukkan ke huruf Ya disertai dengung 2 harakat.',
    options: ['Izhar Halqi', 'Idgham Bighunnah', 'Idgham Bilaghunnah', 'Iqlab']
  },
  {
    id: 't-6',
    surahOrAyat: 'QS. Al-Baqarah : 201',
    phraseArabic: 'رَبَّنَآ اٰتِنَا فِى الدُّنْيَا حَسَنَةً',
    phraseLatin: 'Rabbanā ātinā fid-dunyā ḥasanah',
    targetWordArabic: 'الدُّنْيَا',
    hukumTajwid: 'Iẓhār Muṭlaq (Pengecualian Idgham)',
    kategori: 'Nun Sukun / Tanwin',
    hurufPenyebab: 'Nun Sukun (نْ) bertemu huruf Yā’ (ي) dalam SATU KATA',
    caraBaca: 'Wajib dibaca jelas nun-nya "ad-dunya" tanpa mendengung agar arti kata tidak rusak.',
    options: ['Idgham Bighunnah', 'Izhar Mutlaq', 'Ikhfa\' Haqiqi', 'Iqlab']
  },
  {
    id: 't-7',
    surahOrAyat: 'QS. Al-Hasyr : 23',
    phraseArabic: 'هُوَ اللّٰهُ الَّذِيْ لَآ اِلٰهَ اِلَّا هُوَ',
    phraseLatin: 'Huwallāhul-lażī lā ilāha illā huw',
    targetWordArabic: 'هُوَ اللّٰهُ',
    hukumTajwid: 'Lafazhul Jalālah Tafkhīm (Tebal)',
    kategori: 'Tafkhim/Tarqiq',
    hurufPenyebab: 'Lafazh Allah didahului oleh huruf berharakat Fathah (Huwa)',
    caraBaca: 'Lam Jalalah ditebalkan dengan menaikkan pangkal lidah sehingga berbunyi "Huwallawh".',
    options: ['Lam Jalalah Tafkhim', 'Lam Jalalah Tarqiq', 'Mad Iwad', 'Qalqalah Kubra']
  },
  {
    id: 't-8',
    surahOrAyat: 'QS. Al-Qadr : 5',
    phraseArabic: 'سَلٰمٌ هِيَ حَتّٰى مَطْلَعِ الْفَجْرِ',
    phraseLatin: 'Salāmun hiya ḥattā maṭla‘il-fajr',
    targetWordArabic: 'مَطْلَعِ',
    hukumTajwid: 'Qalqalah Sugrā',
    kategori: 'Qalqalah',
    hurufPenyebab: 'Huruf Ṭā’ (ط) berharakat sukun asli di tengah-tengah kata',
    caraBaca: 'Dipantulkan ringan dan cepat tanpa jeda ke huruf berikutnya.',
    options: ['Qalqalah Kubra', 'Qalqalah Sugra', 'Izhar Halqi', 'Idgham Mutajanisain']
  }
];
