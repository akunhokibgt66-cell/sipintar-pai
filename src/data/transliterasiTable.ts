export interface TransliterasiItem {
  arab: string;
  nama: string;
  latin: string;
  keterangan: string;
  contohArab: string;
  contohLatin: string;
}

export const transliterasiTable: TransliterasiItem[] = [
  { arab: 'ا', nama: 'Alif', latin: 'tidak dilambangkan / a', keterangan: 'Sebagai vokal a atau pemanjang', contohArab: 'اَمَرَ', contohLatin: 'amara' },
  { arab: 'ب', nama: 'Ba', latin: 'b', keterangan: 'Konsonan biasa', contohArab: 'بَصِيْرٌ', contohLatin: 'baṣīr' },
  { arab: 'ت', nama: 'Ta', latin: 't', keterangan: 'Konsonan biasa', contohArab: 'تَابَ', contohLatin: 'tāba' },
  { arab: 'ث', nama: 'Tsa', latin: 'ṡ (s titik atas)', keterangan: 's dengan titik di atas', contohArab: 'ثَمَرَةٌ', contohLatin: 'ṡamarah' },
  { arab: 'ج', nama: 'Jim', latin: 'j', keterangan: 'Konsonan biasa', contohArab: 'جَنَّةٌ', contohLatin: 'jannah' },
  { arab: 'ح', nama: 'Ha', latin: 'ḥ (h titik bawah)', keterangan: 'h dengan titik di bawah', contohArab: 'حَمْدٌ', contohLatin: 'ḥamd' },
  { arab: 'خ', nama: 'Kha', latin: 'kh', keterangan: 'Kombinasi k dan h', contohArab: 'خَوْفٌ', contohLatin: 'khauf' },
  { arab: 'د', nama: 'Dal', latin: 'd', keterangan: 'Konsonan biasa', contohArab: 'دِيْنٌ', contohLatin: 'dīn' },
  { arab: 'ذ', nama: 'Dzal', latin: 'ż (z titik atas)', keterangan: 'z dengan titik di atas', contohArab: 'ذِكْرٌ', contohLatin: 'żikr' },
  { arab: 'ر', nama: 'Ra', latin: 'r', keterangan: 'Konsonan biasa', contohArab: 'رَحْمَةٌ', contohLatin: 'raḥmah' },
  { arab: 'ز', nama: 'Zai', latin: 'z', keterangan: 'Konsonan biasa', contohArab: 'زَكَاةٌ', contohLatin: 'zakāh' },
  { arab: 'س', nama: 'Sin', latin: 's', keterangan: 'Konsonan biasa', contohArab: 'سَلَامٌ', contohLatin: 'salām' },
  { arab: 'ش', nama: 'Syin', latin: 'sy', keterangan: 'Kombinasi s dan y', contohArab: 'شُكْرٌ', contohLatin: 'syukr' },
  { arab: 'ص', nama: 'Shad', latin: 'ṣ (s titik bawah)', keterangan: 's dengan titik di bawah', contohArab: 'صَبْرٌ', contohLatin: 'ṣabr' },
  { arab: 'ض', nama: 'Dhad', latin: 'ḍ (d titik bawah)', keterangan: 'd dengan titik di bawah', contohArab: 'ضَرُوْرَةٌ', contohLatin: 'ḍarūrah' },
  { arab: 'ط', nama: 'Tha', latin: 'ṭ (t titik bawah)', keterangan: 't dengan titik di bawah', contohArab: 'طَالِبٌ', contohLatin: 'ṭālib' },
  { arab: 'ظ', nama: 'Zha', latin: 'ẓ (z titik bawah)', keterangan: 'z dengan titik di bawah', contohArab: 'ظُلْمٌ', contohLatin: 'ẓulm' },
  { arab: 'ع', nama: '‘Ain', latin: '‘ (koma terbalik di atas)', keterangan: 'Apostrof terbalik di atas', contohArab: 'عَلِيْمٌ', contohLatin: '‘alīm' },
  { arab: 'غ', nama: 'Ghain', latin: 'g / gh', keterangan: 'g atau gh', contohArab: 'غَفُوْرٌ', contohLatin: 'gafūr' },
  { arab: 'ف', nama: 'Fa', latin: 'f', keterangan: 'Konsonan biasa', contohArab: 'فَلَقٌ', contohLatin: 'falaq' },
  { arab: 'ق', nama: 'Qaf', latin: 'q', keterangan: 'Konsonan biasa', contohArab: 'قُرْاٰنٌ', contohLatin: 'qur\'ān' },
  { arab: 'ك', nama: 'Kaf', latin: 'k', keterangan: 'Konsonan biasa', contohArab: 'كِتَابٌ', contohLatin: 'kitāb' },
  { arab: 'ل', nama: 'Lam', latin: 'l', keterangan: 'Konsonan biasa', contohArab: 'لَيْلٌ', contohLatin: 'lail' },
  { arab: 'م', nama: 'Mim', latin: 'm', keterangan: 'Konsonan biasa', contohArab: 'مُسْلِمٌ', contohLatin: 'muslim' },
  { arab: 'ن', nama: 'Nun', latin: 'n', keterangan: 'Konsonan biasa', contohArab: 'نُوْرٌ', contohLatin: 'nūr' },
  { arab: 'و', nama: 'Wau', latin: 'w', keterangan: 'Konsonan w atau u panjang', contohArab: 'وَقْتٌ', contohLatin: 'waqt' },
  { arab: 'هـ', nama: 'Ha', latin: 'h', keterangan: 'Konsonan biasa', contohArab: 'هُدًى', contohLatin: 'hudā' },
  { arab: 'ء', nama: 'Hamzah', latin: '’ (apostrof tegak)', keterangan: 'Apostrof atas', contohArab: 'مُؤْمِنٌ', contohLatin: 'mu\'min' },
  { arab: 'ي', nama: 'Ya', latin: 'y', keterangan: 'Konsonan y atau i panjang', contohArab: 'يَوْمٌ', contohLatin: 'yaum' }
];

export interface TransliterasiPractice {
  id: string;
  arab: string;
  correctLatin: string;
  explanation: string;
  hint: string;
}

export const transliterasiPractices: TransliterasiPractice[] = [
  {
    id: 'tp-1',
    arab: 'الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ',
    correctLatin: 'Aṣ-ṣalātu khairum minan-naum',
    explanation: 'Shad memakai ṣ (titik bawah), Lam panjang memakai ā (makron), diftong au pada naum.',
    hint: 'Gunakan karakter khusus: ṣ, ā, kh, au'
  },
  {
    id: 'tp-2',
    arab: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
    correctLatin: 'Bismillāhir-raḥmānir-raḥīm',
    explanation: 'Lam Jalalah tarqiq lillāh, Ha memakai ḥ (titik bawah), mad panjang memakai ā dan ī.',
    hint: 'Gunakan karakter khusus: ā, ḥ, ī'
  },
  {
    id: 'tp-3',
    arab: 'قُلْ هُوَ اللّٰهُ اَحَدٌ',
    correctLatin: 'Qul huwallāhu aḥad',
    explanation: 'Qaf dengan q, Lam Jalalah tafkhim huwallāhu, Ha dengan ḥ (titik bawah).',
    hint: 'Gunakan karakter khusus: ā, ḥ'
  },
  {
    id: 'tp-4',
    arab: 'اِنَّا جَعَلْنٰكُمْ شُعُوْبًا وَقَبَاۤىِٕلَ لِتَعَارَفُوْا',
    correctLatin: 'Innā ja‘alnākum syu‘ūbaw wa qabā\'ila lita‘ārafū',
    explanation: 'Syin dengan sy, ‘Ain dengan koma atas ‘, wawu sukun dengan ū.',
    hint: 'Gunakan karakter khusus: ‘, ā, sy, ū'
  }
];
