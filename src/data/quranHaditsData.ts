import { MateriItem } from '../types';

export const quranHaditsData: MateriItem[] = [
  {
    id: 'quran-1',
    nomor: 1,
    scopeId: 'quran',
    judul: 'Surah Al-Fātiḥah',
    subJudul: 'Ummul Qur\'an / As-Sab\'ul Matsani (7 Ayat yang Diulang)',
    ringkasan: 'Surah pembuka Al-Qur\'an yang wajib dibaca dalam setiap rakaat salat fardu maupun sunah. Merangkum tauhid, permohonan hidayah, dan pengakuan atas sifat kasih sayang Allah SWT.',
    kontenUtama: `Surah Al-Fātiḥah adalah surah ke-1 dalam mushaf Al-Qur'an, tergolong surah Makkiyyah dan terdiri atas 7 ayat. Dinamakan Ummul Kitab (Induk Kitab) atau Ummul Qur'an karena memuat inti sari seluruh ajaran Al-Qur'an, yaitu: prinsip keimanan (Rububiyah & Uluhiyah), janji pahala dan ancaman, ibadah serta permohonan petunjuk ke jalan yang lurus (ash-shirath al-mustaqim). 

Membaca Surah Al-Fātiḥah merupakan rukun qauli dalam ibadah salat; salat seseorang tidak sah tanpa membacanya sesuai sabda Rasulullah SAW: "Lā shalāta liman lam yaqra' bifātiḥatil kitāb."`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ',
        transliteration: 'Bismillāhir-raḥmānir-raḥīm',
        translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.'
      },
      {
        ayatNumber: 2,
        arabic: 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ',
        transliteration: 'Al-ḥamdu lillāhi rabbil-\'ālamīn',
        translation: 'Segala puji bagi Allah, Tuhan seluruh alam.'
      },
      {
        ayatNumber: 5,
        arabic: 'اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ',
        transliteration: 'Iyyāka na\'budu wa iyyāka nasta\'īn',
        translation: 'Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami memohon pertolongan.'
      },
      {
        ayatNumber: 6,
        arabic: 'اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَۙ',
        transliteration: 'Ihdinaṣ-ṣirāṭal-mustaqīm',
        translation: 'Tunjukilah kami jalan yang lurus.'
      }
    ],
    poinPenting: [
      'Terdiri dari 7 ayat, Makkiyyah, disebut Ummul Qur\'an dan As-Sab\'ul Matsani.',
      'Rukun qauli salat fardhu maupun sunnah.',
      'Ayat ke-5 menegaskan tauhid ibadah dan tauhid isti\'anah (memohon pertolongan hanya kepada Allah).',
      'Ayat ke-7 membedakan tiga golongan: orang yang diberi nikmat (an\'amta \'alaihim), orang yang dimurkai (al-maghdhubi \'alaihim), dan orang yang sesat (adh-dhallin).'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Mengapa Surah Al-Fatihah disebut Ummul Qur\'an?',
        insight: 'Karena inti pokok ajaran Al-Qur\'an tentang akidah, ibadah, janji dan ancaman, serta tuntunan hidup tersimpul dalam 7 ayatnya.',
        practicalExample: 'Menjelaskan kepada teman bahwa membaca Al-Fatihah dalam salat menghadirkan dialog langsung antara hamba dengan Pencipta.'
      },
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana menerapkan makna "Iyyaka na\'budu wa iyyaka nasta\'in" di sekolah?',
        insight: 'Tidak bergantung pada jimat/contekan saat ujian, melainkan belajar sungguh-sungguh lalu berdoa memohon pertolongan hanya kepada Allah.',
        practicalExample: 'Menghindari rasa sombong saat berprestasi karena menyadari keberhasilan semata-mata atas izin Allah.'
      }
    ],
    tipsLomba: 'Perhatikan nama-nama lain Al-Fatihah (Ummul Kitab, As-Sab\'ul Matsani, Asy-Syifa, Al-Wafiyah) dan hukum basmalah menurut mazhab Syafi\'i yang merupakan ayat pertama!'
  },
  {
    id: 'quran-2',
    nomor: 2,
    scopeId: 'quran',
    judul: 'Surah An-Nās',
    subJudul: 'Al-Mu\'awwidzatain: Perlindungan dari Bisikan Jahat',
    ringkasan: 'Surah penutup Al-Qur\'an (surah ke-114) yang memerintahkan manusia memohon perlindungan kepada Allah (Rabb, Malik, dan Ilah manusia) dari godaan setan pembisik kejahatan baik dari jin maupun manusia.',
    kontenUtama: `Surah An-Nās adalah surah Makkiyyah (sebagian ulama Madaniyyah) yang terdiri atas 6 ayat. Bersama Surah Al-Falaq, keduanya dinamakan "Al-Mu'awwidzatain" (dua surah pemohon perlindungan). 

Surah ini mengajarkan bahwa musuh terbesar manusia seringkali tidak terlihat: was-was (bisikan ragu dan godaan maksiat) yang disusupkan oleh setan ke dalam dada manusia (shudur an-nas). Perlindungan sejati hanya dapat diperoleh dengan berpegang teguh pada tiga status ketuhanan Allah: Rabb an-Nas (Pencipta & Pemelihara), Malik an-Nas (Raja Yang Berkuasa), dan Ilah an-Nas (Sesembahan Yang Haq).`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ النَّاسِۙ',
        transliteration: 'Qul a\'ūżu birabbin-nās',
        translation: 'Katakanlah, "Aku berlindung kepada Tuhannya manusia,"'
      },
      {
        ayatNumber: 4,
        arabic: 'مِنْ شَرِّ الْوَسْوَاسِ ەۙ الْخَنَّاسِۖ',
        transliteration: 'Min syarril-waswāsil-khannās',
        translation: 'dari kejahatan (bisikan) setan yang bersembunyi,'
      },
      {
        ayatNumber: 6,
        arabic: 'مِنَ الْجِنَّةِ وَالنَّاسِ',
        transliteration: 'Minal-jinnati wan-nās',
        translation: 'dari (golongan) jin dan manusia.'
      }
    ],
    poinPenting: [
      'Surah ke-114, 6 ayat, bagian dari Al-Mu\'awwidzatain.',
      'Sifat Allah yang disebut: Rabb an-Nas, Malik an-Nas, Ilah an-Nas.',
      'Al-Khannas artinya setan yang bersembunyi atau lari mundur ketika manusia mengingat Allah (berzikir).',
      'Sumber godaan bisikan jahat berasal dari dua makhluk: jin dan sesama manusia yang mengajak maksiat.'
    ],
    wigginsFacets: [
      {
        facet: 'Interpretasi',
        questionPrompt: 'Apa makna bisikan jahat dari "manusia" (wan-nas)?',
        insight: 'Teman sebaya atau orang lain yang merayu untuk berbuat curang, membully teman, atau meninggalkan ibadah salat.',
        practicalExample: 'Mampu menolak ajakan bolos mengaji atau membolos sekolah dengan santun dan tegas.'
      },
      {
        facet: 'Refleksi',
        questionPrompt: 'Kapan diri kita paling rentan terkena godaan was-was?',
        insight: 'Saat sedang lalai dari zikir, menyendiri dengan gawai tanpa pengawasan, atau saat diliputi amarah.',
        practicalExample: 'Membiasakan membaca surah An-Nas sebelum tidur dan ketika mulai merasa ragu berbuat kebaikan.'
      }
    ],
    tipsLomba: 'Hafalkan makna lafaz "Al-Waswasil Khannas" dan bedakan fokus perlindungan Surah Al-Falaq (kejahatan fisik luar) vs Surah An-Nas (kejahatan batin/bisikan).'
  },
  {
    id: 'quran-3',
    nomor: 3,
    scopeId: 'quran',
    judul: 'Surah Al-Ikhlās',
    subJudul: 'Kemurnian Tauhid - Setara Sepertiga Al-Qur\'an',
    ringkasan: 'Surah ke-112 yang memurnikan konsep ketuhanan Allah SWT: Maha Esa (Ahad), tempat bergantung (Ash-Shamad), tidak beranak dan tidak diperanakkan, serta tiada yang setara dengan-Nya.',
    kontenUtama: `Surah Al-Ikhlās diturunkan di Mekah sebagai jawaban atas pertanyaan kaum musyrikin yang meminta Nabi Muhammad SAW menyebutkan nasab (silsilah) atau bahan pembuat Tuhannya. 

Al-Qur'an menjawab secara lugas dan tuntas dalam 4 ayat. Nilai surah ini dalam hadis shahih riwayat Bukhari dinyatakan setara dengan sepertiga Al-Qur'an (ta'dillu tsulutsal Qur'an), karena Al-Qur'an memuat tiga pilar utama: Aqidah/Tauhid, Syariat/Hukum, dan Qashash/Kisah sejarah. Surah Al-Ikhlas memurnikan akidah secara sempurna tanpa celah syirik.`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'قُلْ هُوَ اللّٰهُ اَحَدٌۚ',
        transliteration: 'Qul huwallāhu aḥad',
        translation: 'Katakanlah (Muhammad), "Dialah Allah, Yang Maha Esa."'
      },
      {
        ayatNumber: 2,
        arabic: 'اَللّٰهُ الصَّمَدُۚ',
        transliteration: 'Allāhuṣ-ṣamad',
        translation: 'Allah tempat meminta segala sesuatu.'
      },
      {
        ayatNumber: 3,
        arabic: 'لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ',
        transliteration: 'Lam yalid wa lam yūlad',
        translation: '(Allah) tidak beranak dan tidak pula diperanakkan,'
      },
      {
        ayatNumber: 4,
        arabic: 'وَلَمْ يَكُنْ لَّهٗ كُفُوًا اَحَدٌ',
        transliteration: 'Wa lam yakul lahū kufuwan aḥad',
        translation: 'dan tidak ada sesuatu pun yang setara dengan Dia.'
      }
    ],
    poinPenting: [
      'Asbabun nuzul: Kaum musyrik Quraisy bertanya "Wahai Muhammad, sebutkan sifat dan silsilah Tuhanmu!"',
      'Arti As-Samad: Maha Dibutuhkan, tempat bergantung segala makhluk untuk segala hajat.',
      'Menolak konsep politeisme, trinitas, dan antropomorfisme (penyerupaan Tuhan dengan makhluk).',
      'Pahala membacanya sebanding dengan membaca sepertiga isi Al-Qur\'an.'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Jelaskan perbedaan mendasar sifat Ahad dengan angka satu biasa!',
        insight: 'Ahad bermakna Maha Tunggal yang mutlak, tidak tersusun atas bagian-bagian dan tidak memiliki tandingan atau sekutu.',
        practicalExample: 'Memahami bahwa Allah tidak membutuhkan anak, orang tua, maupun sekutu dalam mengatur jagat raya.'
      },
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana wujud pengamalan sifat As-Samad dalam kehidupan santri?',
        insight: 'Hanya menyandarkan harapan dan doa kepada Allah, bukan kepada dukun, ramalan bintang, atau benda pusaka.',
        practicalExample: 'Ketika sakit atau cemas, berdoa kepada Allah sambil berikhtiar berobat secara medis.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal HOTS: Alasan mengapa Surah Al-Ikhlas sebanding sepertiga Al-Qur\'an serta arti kosakata "Ash-Shamad" dan "Kufuwan"!'
  },
  {
    id: 'quran-4',
    nomor: 4,
    scopeId: 'quran',
    judul: 'Surah Al-Falaq',
    subJudul: 'Memohon Perlindungan dari Bahaya Kegelapan & Kedengkian',
    ringkasan: 'Surah ke-113 yang mengajarkan doa perlindungan dari kejahatan makhluk ciptaan, malam apabila gelap gulita, penyihir peniup buhul tali, dan kejahatan orang yang dengki (hasad).',
    kontenUtama: `Surah Al-Falaq terdiri atas 5 ayat, termasuk Makkiyyah/Madaniyyah. Al-Falaq berarti waktu subuh/fajar yang membelah kegelapan malam. 

Surah ini mengajarkan umat Islam untuk bersandar kepada Allah dari empat ancaman nyata:
1. Kejahatan seluruh makhluk (min syarri ma khalaq).
2. Kejahatan malam yang gelap gulita (ghasiqin idza waqab) di mana binatang berbisa dan pelaku kejahatan berkeliaran.
3. Kejahatan tukang sihir (an-naffatsati fil 'uqad).
4. Kejahatan orang yang dengki saat hasadnya memuncak (hasidin idza hasad). Hasad dapat menghanguskan kebaikan bagai api melahap kayu kering.`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'قُلْ اَعُوْذُ بِرَبِّ الْفَلَقِۙ',
        transliteration: 'Qul a\'ūżu birabbil-falaq',
        translation: 'Katakanlah, "Aku berlindung kepada Tuhan yang menguasai subuh (fajar),"'
      },
      {
        ayatNumber: 3,
        arabic: 'وَمِنْ شَرِّ غَاسِقٍ اِذَا وَقَبَۙ',
        transliteration: 'Wa min syarri gāsiqin iżā waqab',
        translation: 'dan dari kejahatan malam apabila telah gelap gulita,'
      },
      {
        ayatNumber: 5,
        arabic: 'وَمِنْ شَرِّ حَاسِدٍ اِذَا حَسَدَ',
        transliteration: 'Wa min syarri ḥāsidin iżā ḥasad',
        translation: 'dan dari kejahatan orang yang dengki apabila dia dengki.'
      }
    ],
    poinPenting: [
      'Al-Falaq artinya fajar / subuh.',
      'Empat bahaya yang dimohonkan perlindungan: makhluk jahat, kegelapan malam, tukang sihir peniup buhul, dan orang berpenyakit hasad.',
      'Dengki (hasad) adalah penyakit hati yang menginginkan nikmat orang lain hilang.',
      'Rasulullah SAW biasa membaca Al-Falaq dan An-Nas lalu meniupkan ke kedua telapak tangan dan mengusapkannya ke seluruh tubuh saat hendak tidur.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Mengapa bahaya dengki (hasad) ditempatkan di akhir surah ini?',
        insight: 'Hasad adalah induk kejahatan moral yang melahirkan permusuhan, fitnah, dan kehancuran ukhuwah.',
        practicalExample: 'Ketika melihat teman juara kelas atau punya barang bagus, kita berucap "Barakallahu lak" atau "Masya Allah" alih-alih merasa iri hati.'
      }
    ],
    tipsLomba: 'Perhatikan arti harfiah "Ghasiqin idza waqab" dan "An-Naffatsati fil \'uqad" yang sering keluar di soal pilihan ganda!'
  },
  {
    id: 'quran-5',
    nomor: 5,
    scopeId: 'quran',
    judul: 'Surah Al-Mā‘ūn',
    subJudul: 'Ciri-Ciri Pendusta Agama: Lalai Salat & Enggan Menolong',
    ringkasan: 'Surah ke-107 berisikan 7 ayat yang mengungkap ciri pendusta agama: menghardik anak yatim, enggan memberi makan orang miskin, lalai dalam salat, berbuat riya, dan enggan memberi bantuan barang berguna.',
    kontenUtama: `Surah Al-Mā‘ūn memberikan peringatan keras bahwa kesalehan seseorang tidak cukup hanya berupa ritual formal. Orang yang rajin salat namun abai terhadap anak yatim dan fakir miskin dicap sebagai pendusta agama (yukadz-dzibu bid-din).

Kata Al-Mā‘ūn berarti barang-barang yang berguna untuk keperluan sehari-hari (seperti alat masak, jarum, gayung, piring). Menolak meminjamkan barang sepele kepada tetangga yang membutuhkan merupakan indikator kekikiran hati.`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'اَرَءَيْتَ الَّذِيْ يُكَذِّبُ بِالدِّيْنِۗ',
        transliteration: 'Ara\'aital-lażī yukażżibu bid-dīn',
        translation: 'Tahukah kamu (orang) yang mendustakan agama?'
      },
      {
        ayatNumber: 2,
        arabic: 'فَذٰلِكَ الَّذِيْ يَدُعُّ الْيَتِيْمَۙ',
        transliteration: 'Fażālikal-lażī yadu\'\'ul-yatīm',
        translation: 'Maka itulah orang yang menghardik anak yatim,'
      },
      {
        ayatNumber: 4,
        arabic: 'فَوَيْلٌ لِّلْمُصَلِّيْنَۙ',
        transliteration: 'Fa wailul lil-muṣallīn',
        translation: 'Maka celakalah orang yang salat,'
      },
      {
        ayatNumber: 5,
        arabic: 'الَّذِيْنَ هُمْ عَنْ صَلَاتِهِمْ سَاهُوْنَۙ',
        transliteration: 'Allażīna hum \'an ṣalātihim sāhūn',
        translation: '(yaitu) orang-orang yang lalai terhadap salatnya,'
      },
      {
        ayatNumber: 6,
        arabic: 'الَّذِيْنَ هُمْ يُرَاۤءُوْنَۙ',
        transliteration: 'Allażīna hum yurā\'ūn',
        translation: 'yang berbuat riya,'
      }
    ],
    poinPenting: [
      'Surah ke-107, 7 ayat.',
      'Ciri pendusta agama: Yadu\'\'ul yatim (menghardik anak yatim), enggan mendorong memberi makan orang miskin, sahun \'an shalatihim (lalai salat hingga lewat waktu), yura\'un (riya pamer amal), dan yamna\'unal ma\'un (menolak menolong barang bermanfaat).',
      'Hubungan ibadah vertikal (hablum minallah) dan horizontal (hablum minannas) harus seimbang.'
    ],
    wigginsFacets: [
      {
        facet: 'Empati',
        questionPrompt: 'Bagaimana perasaan seorang anak yatim ketika dihardik atau direndahkan?',
        insight: 'Mereka merasa kesepian dan kehilangan rasa aman. Islam mewajibkan kita memuliakan dan mengusap kepala anak yatim dengan kasih sayang.',
        practicalExample: 'Menyantuni dan berteman akrab dengan teman sekolah yang yatim tanpa membeda-bedakan.'
      },
      {
        facet: 'Interpretasi',
        questionPrompt: 'Apa perbedaan antara "Sahun Fi Shalatihim" dan "Sahun \'An Shalatihim"?',
        insight: 'Fi shalatihim (lupa rakaat salat karena manusiawi, disunnahkan sujud sahwi). Sedangkan \'An shalatihim (meremehkan dan menunda salat hingga habis waktu, ini yang dicela).',
        practicalExample: 'Segera wudhu dan salat saat mendengar azan berkumandang.'
      }
    ],
    tipsLomba: 'Soal MAPSI sering membedakan arti "Sahun" vs "Yura\'un" dan contoh perbuatan "Yamna\'unal Ma\'un" dalam kehidupan bertetangga!'
  },
  {
    id: 'quran-6',
    nomor: 6,
    scopeId: 'quran',
    judul: 'Surah Al-Fīl',
    subJudul: 'Kisah Pasukan Bergajah Raja Abrahah Menyerang Ka\'bah',
    ringkasan: 'Surah ke-105 mengisahkan kehancuran tentara bergajah pimpinan Abrahah yang hendak meruntuhkan Ka\'bah, dihancurkan oleh burung Ababil dengan batu Sijjil dari neraka menjelang kelahiran Nabi Muhammad SAW.',
    kontenUtama: `Surah Al-Fīl terdiri atas 5 ayat Makkiyyah. Al-Fīl artinya Gajah. Peristiwa penyerangan Ka'bah oleh Gubernur Yaman, Abrahah Al-Asyram, terjadi pada tahun 571 Masehi, yang kemudian dikenal sebagai Tahun Gajah ('Amul Fil). Pada tahun inilah Nabi Muhammad SAW lahir.

Abrahah iri karena bangsa Arab lebih memuliakan Ka'bah daripada katedral megah Al-Qullais yang ia bangun di Shan'a. Namun Allah menjaga Baitullah dengan mengirimkan kawanan burung Ababil yang melempari tentara musuh dengan batu dari tanah yang terbakar (Sijjil), sehingga mereka lumat seperti daun-daun yang dimakan ulat ('ashfim ma'kul).`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'اَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِاَصْحٰبِ الْفِيْلِۗ',
        transliteration: 'Alam tara kaifa fa\'ala rabbuka bi\'aṣḥābil-fīl',
        translation: 'Tidakkah engkau (Muhammad) perhatikan bagaimana Tuhanmu telah bertindak terhadap pasukan bergajah?'
      },
      {
        ayatNumber: 3,
        arabic: 'وَاَرْسَلَ عَلَيْهِمْ طَيْرًا اَبَابِيْلَۙ',
        transliteration: 'Wa arsala \'alaihim ṭairan abābīl',
        translation: 'dan Dia mengirimkan kepada mereka burung yang berbondong-bondong,'
      },
      {
        ayatNumber: 5,
        arabic: 'فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُوْلٍ',
        transliteration: 'Faja\'alahum ka\'aṣfim ma\'kūl',
        translation: 'sehingga Dia menjadikan mereka seperti daun-daun yang dimakan (ulat).'
      }
    ],
    poinPenting: [
      'Surah ke-105, 5 ayat, nama Al-Fil berarti Gajah.',
      'Pemimpin pasukan: Abrahah dari Yaman yang membangun gereja Al-Qullais.',
      'Tentara dihancurkan oleh burung Ababil yang membawa batu Sijjil.',
      'Perumpamaan kehancuran mereka: Ka\'ashfim ma\'kul (seperti daun-daun yang dimakan ulat).',
      'Tahun terjadinya peristiwa ini dinamai Tahun Gajah, tahun lahirnya Rasulullah SAW.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Hikmah apa yang dapat kita petik dari nasib Abrahah yang congkak?',
        insight: 'Kekuasaan, teknologi militer, dan kekuatan fisik manusia tidak ada artinya di hadapan keagungan Allah SWT.',
        practicalExample: 'Tidak membanggakan kekuatan jasmani untuk merundung (bully) orang yang lebih lemah.'
      }
    ],
    tipsLomba: 'Kerap ditanyakan: nama gereja tandingan Ka\'bah yang dibuat Abrahah (Al-Qullais), nama gajah pimpinan Abrahah (Mahmud), dan arti kiasan "Ka\'ashfim ma\'kul".'
  },
  {
    id: 'quran-7',
    nomor: 7,
    scopeId: 'quran',
    judul: 'Surah Al-Kāfirūn',
    subJudul: 'Prinsip Keteguhan Aqidah & Toleransi Beragama',
    ringkasan: 'Surah ke-109 berisi penegasan tegas Nabi SAW menolak kompromi akidah dan peribadatan dengan kaum musyrik Quraisy. Diakhiri prinsip toleransi legendaris: Lakum dīnukum waliyadīn.',
    kontenUtama: `Surah Al-Kāfirūn diturunkan ketika para tokoh kafir Quraisy (seperti Al-Walid bin Mughirah dan Al-Ash bin Wa'il) menawarkan gencatan senjata spiritual: "Wahai Muhammad, mari kita berdamai. Kamu menyembah tuhan kami selama satu tahun, dan kami akan menyembah Tuhanmu selama satu tahun berikutnya bergantian."

Allah SWT menurunkan surah ini untuk menolak mentah-mentah ide sinkretisme peribadatan. Dalam hal akidah dan ibadah, tidak boleh ada tawar-menawar atau campur aduk. Namun demikian, umat Islam tetap menghargai pilihan hidup orang lain dalam ranah sosial kemasyarakatan ("Bagimu agamamu, bagiku agamaku").`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'قُلْ يٰٓاَيُّهَا الْكٰفِرُوْنَۙ',
        transliteration: 'Qul yā ayyuhal-kāfirūn',
        translation: 'Katakanlah (Muhammad), "Wahai orang-orang kafir!"'
      },
      {
        ayatNumber: 2,
        arabic: 'لَآ اَعْبُدُ مَا تَعْبُدُوْنَۙ',
        transliteration: 'Lā a\'budu mā ta\'budūn',
        translation: 'Aku tidak akan menyembah apa yang kamu sembah,'
      },
      {
        ayatNumber: 6,
        arabic: 'لَكُمْ دِيْنُكُمْ وَلِيَ دِيْنِ',
        transliteration: 'Lakum dīnukum waliya dīn',
        translation: 'Untukmu agamamu, dan untukku agamaku.'
      }
    ],
    poinPenting: [
      'Surah ke-109, 6 ayat, Makkiyyah.',
      'Asbabun nuzul: Tawaran kaum musyrik Quraisy untuk bergantian menyembah berhala dan Allah.',
      'Prinsip toleransi Islam: Rukun berdampingan secara sosial, namun tidak mencampuradukkan akidah dan tata cara peribadatan (No sinkretisme).',
      'Makna Lakum dinukum waliyadin: Penegasan kebebasan meyakini agama masing-masing tanpa paksaan.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Bagaimana batas toleransi yang benar menurut Surah Al-Kafirun?',
        insight: 'Toleransi adalah saling menghormati hak beragama dan berbuat baik dalam muamalah kemasyarakatan, bukan ikut merayakan atau menjalankan ritual ibadah agama lain.',
        practicalExample: 'Membantu tetangga non-muslim yang sedang terkena musibah banjir tanpa memandang agamanya.'
      }
    ],
    tipsLomba: 'Perhatikan perulangan kata "Lā a\'budu mā ta\'budūn" (masa kini/akan datang) dan "Wa lā ana \'ābidum mā \'abattum" (masa lampau) yang menegaskan penolakan mutlak!'
  },
  {
    id: 'quran-8',
    nomor: 8,
    scopeId: 'quran',
    judul: 'Surah Al-Kauṡar',
    subJudul: 'Nikmat yang Berlimpah & Perintah Shalat serta Berqurban',
    ringkasan: 'Surah terpendek dalam Al-Qur\'an (hanya 3 ayat) yang menghibur Nabi SAW atas wafatnya putra beliau, menjanjikan telaga Al-Kautsar, dan menegaskan pembenci Nabi-lah yang terputus rahmatnya.',
    kontenUtama: `Surah Al-Kauṡar diturunkan di Mekah saat putra Rasulullah SAW (Al-Qasim dan Abdullah) meninggal dunia saat masih kecil. Tokoh musyrik seperti Al-'Ash bin Wa'il mengejek Nabi dengan sebutan "Abtar" (terputus nasabnya dan tidak memiliki penerus).

Allah membantah hinaan tersebut dengan menegaskan bahwa Allah telah menganugerahkan "Al-Kautsar" (kebaikan dan nikmat yang sangat banyak, termasuk telaga Al-Kautsar di surga). Sebagai wujud syukur, Allah memerintahkan: salatlah karena Tuhanmu dan sembelihlah kurban (wanḥar). Justru orang yang membenci Nabi Muhammad-lah yang sebenarnya "Abtar" (terputus dari segala kebaikan).`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'اِنَّآ اَعْطَيْنٰكَ الْكَوْثَرَۗ',
        transliteration: 'Innā a\'ṭainākal-kauṡar',
        translation: 'Sungguh, Kami telah memberimu (Muhammad) nikmat yang banyak.'
      },
      {
        ayatNumber: 2,
        arabic: 'فَصَلِّ لِرَبِّكَ وَانْحَرْۗ',
        transliteration: 'Faṣalli lirabbika wan-ḥar',
        translation: 'Maka laksanakanlah salat karena Tuhanmu, dan berkurbanlah.'
      },
      {
        ayatNumber: 3,
        arabic: 'اِنَّ شَانِئَكَ هُوَ الْاَبْتَرُ',
        transliteration: 'Inna syāni\'aka huwal-abtar',
        translation: 'Sungguh, orang-orang yang membencimu dialah yang terputus (dari rahmat Allah).'
      }
    ],
    poinPenting: [
      'Surah terpendek dalam Al-Qur\'an (3 ayat).',
      'Al-Kautsar berarti nikmat yang berlimpah, juga nama telaga Nabi di surga.',
      'Dua perintah dalam ayat ke-2: Dirikan salat dengan ikhlas dan berkurbanlah (Nahr = sembelihan kurban onta/kambing/sapi).',
      'Arti lafaz "Al-Abtar": orang yang terputus dari garis keturunan atau rahmat Allah.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana cara kita mensyukuri nikmat Al-Kautsar dalam keseharian?',
        insight: 'Menggunakan waktu, kesehatan, dan bekal yang diberikan Allah untuk beribadah dan gemar berbagi rezeki.',
        practicalExample: 'Menabung uang saku untuk ikut program kurban atau sedekah Jumat berkah di sekolah.'
      }
    ],
    tipsLomba: 'Sering diujikan: Perintah ibadah apa yang termaktub dalam Surah Al-Kautsar ayat ke-2 (Shalat Idul Adha/fardhu dan Ibadah Qurban).'
  },
  {
    id: 'quran-9',
    nomor: 9,
    scopeId: 'quran',
    judul: 'Surah At-Tīn',
    subJudul: 'Kemuliaan Penciptaan Manusia & Tempat-Tempat Suci Para Rasul',
    ringkasan: 'Surah ke-95 yang berisi 4 sumpah Allah demi buah Tin, Zaitun, Bukit Sinai, dan Kota Makkah. Menegaskan manusia diciptakan dalam bentuk terbaik (ahsan taqwim) namun dapat terjerumus ke tempat terendah jika tidak beriman dan beramal saleh.',
    kontenUtama: `Surah At-Tīn terdiri dari 8 ayat Makkiyyah. Di awal surah, Allah bersumpah dengan empat hal suci yang melambangkan risalah para nabi agung:
1. Wat-Tīni waz-Zaitūn: Melambangkan Baitul Maqdis (Palestina), tempat dakwah Nabi Isa a.s dan Nabi Ibrahim.
2. Wa Ṭūri Sīnīn: Bukit Sinai tempat Nabi Musa a.s menerima Kitab Taurat dan berdialog dengan Allah.
3. Wa hāżal-baladil-amīn: Kota Mekah yang aman tempat kelahiran Nabi Muhammad SAW dan Ka'bah suci.

Setelah sumpah tersebut, Allah menegaskan bahwa manusia diciptakan dalam bentuk lahir dan batin yang paling sempurna (fī aḥsani taqwīm). Akan tetapi, jika manusia mendurhakai Allah, ia akan dijatuhkan ke tempat yang paling hina (asfala sāfilīn), kecuali orang yang beriman dan beramal kebajikan.`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'وَالتِّيْنِ وَالزَّيْتُوْنِۙ',
        transliteration: 'Wat-tīni waz-zaitūn',
        translation: 'Demi (buah) Tin dan (buah) Zaitun,'
      },
      {
        ayatNumber: 3,
        arabic: 'وَهٰذَا الْبَلَدِ الْاَمِيْنِۙ',
        transliteration: 'Wa hāżal-baladil-amīn',
        translation: 'dan demi negeri (Mekah) yang aman ini.'
      },
      {
        ayatNumber: 4,
        arabic: 'لَقَدْ خَلَقْنَا الْاِنْسَانَ فِيْٓ اَحْسَنِ تَقْوِيْمٍۖ',
        transliteration: 'Laqad khalaqnal-insāna fī aḥsani taqwīm',
        translation: 'Sungguh, Kami telah menciptakan manusia dalam bentuk yang sebaik-baiknya,'
      },
      {
        ayatNumber: 5,
        arabic: 'ثُمَّ رَدَدْنٰهُ اَسْفَلَ سٰفِلِيْنَۙ',
        transliteration: 'Ṡumma radadnāhu asfala sāfilīn',
        translation: 'kemudian Kami kembalikan dia ke tempat yang serendah-rendahnya,'
      }
    ],
    poinPenting: [
      'Surah ke-95, 8 ayat, Makkiyyah.',
      '4 Sumpah Allah: Buah Tin, Zaitun, Tursina (Sinai), dan Baladul Amin (Kota Makkah).',
      'Ahsan taqwim: Struktur fisik, akal budi, dan nurani manusia yang sempurna.',
      'Asfala safilin: Neraka / derajat yang lebih rendah dari binatang akibat maksiat dan kekufuran.',
      'Syarat agar tidak jatuh ke jurang kehinaan: Iman dan amal saleh tiada henti (ajrun ghairu mamnun).'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Mengapa manusia disebut ciptaan terbaik (ahsan taqwim)?',
        insight: 'Karena manusia dibekali akal, nafsu, hati nurani, serta fisik yang seimbang untuk mengemban amanah khalifah fil ardh.',
        practicalExample: 'Memanfaatkan akal pikiran untuk belajar sains dan ilmu agama demi kemaslahatan umat.'
      }
    ],
    tipsLomba: 'Kerap ditanyakan: Makna simbolis dari Tursina (Nabi Musa) dan Baladil Amin (Kota Mekah / Nabi Muhammad SAW).'
  },
  {
    id: 'quran-10',
    nomor: 10,
    scopeId: 'quran',
    judul: 'Surah Aḍ-Ḍuḥā',
    subJudul: 'Penghibur Hati Nabi: Janji Masa Depan yang Lebih Baik',
    ringkasan: 'Surah ke-93 yang turun saat wahyu terputus sementara (fatratul wahyi). Allah menegaskan tidak meninggalkan Nabi, menjanjikan akhirat lebih baik dari dunia, dan memerintahkan menyayangi anak yatim serta mensyukuri nikmat.',
    kontenUtama: `Surah Aḍ-Ḍuḥā terdiri dari 11 ayat Makkiyyah. Surah ini turun setelah masa jeda beberapa waktu tanpa ada wahyu turun, sehingga kaum kafir Mekah mengejek: "Muhammad telah ditinggalkan dan dibenci Tuhannya!"

Allah membantah ejekan tersebut dengan bersumpah demi waktu Dhuha (pagi yang cerah) dan malam ketika sunyi. Allah menegaskan: Tuhanmu sekali-kali tidak meninggalkanmu dan tidak membencimu. Bahkan kehidupan akhirat akan jauh lebih mulia bagimu daripada kehidupan duniawi.

Di akhir surah, Nabi dan umatnya diingatkan tiga pedoman mulia:
1. Terhadap anak yatim: janganlah berlaku sewenang-wenang (fa ammal yatima fala taqhar).
2. Terhadap peminta-minta: janganlah menghardiknya (wa ammas-sa'ila fala tanhar).
3. Terhadap nikmat Tuhanmu: hendaklah kamu sebut-sebut dengan rasa syukur (wa amma bini'mati rabbika fahaddits).`,
    ayatAtauDalil: [
      {
        ayatNumber: 3,
        arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلٰىۗ',
        transliteration: 'Mā wadda\'aka rabbuka wa mā qalā',
        translation: 'Tuhanmu tidak meninggalkan engkau (Muhammad) dan tidak (pula) membencimu,'
      },
      {
        ayatNumber: 6,
        arabic: 'اَلَمْ يَجِدْكَ يَتِيْمًا فَاٰوٰىۖ',
        transliteration: 'Alam yajidka yatīman fa āwā',
        translation: 'Bukankah Dia mendapatimu sebagai seorang yatim, lalu Dia melindungi(mu),'
      },
      {
        ayatNumber: 9,
        arabic: 'فَاَمَّا الْيَتِيْمَ فَلَا تَقْهَرْۗ',
        transliteration: 'Fa ammal-yatīma falā taqhar',
        translation: 'Maka terhadap anak yatim janganlah engkau berlaku sewenang-wenang.'
      },
      {
        ayatNumber: 11,
        arabic: 'وَاَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ',
        transliteration: 'Wa ammā bini\'mati rabbika faḥaddiṡ',
        translation: 'Dan terhadap nikmat Tuhanmu, hendaklah engkau nyatakan (dengan bersyukur).'
      }
    ],
    poinPenting: [
      'Surah ke-93, 11 ayat, turun setelah masa fatratul wahyi.',
      'Sumpah demi waktu dhuha dan malam yang tenang melambangkan pasang surut kehidupan.',
      'Janji Allah: Walal-akhiratu khairul laka minal-ula (Akhirat lebih baik bagimu daripada dunia).',
      'Tiga akhlak luhur: Fala taqhar (jangan menindas anak yatim), Fala tanhar (jangan menghardik peminta-minta), Fahaddits (tampakkan rasa syukur atas nikmat).'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Bagaimana Surah Adh-Dhuha menguatkan mental kita saat sedang sedih atau gagal?',
        insight: 'Mengajarkan optimisme dan berprasangka baik (husnudzan) kepada Allah, bahwa ujian adalah proses pendewasaan dan masa depan cerah telah disiapkan.',
        practicalExample: 'Tidak berputus asa saat nilai ujian kurang memuaskan, melainkan bangkit belajar kembali.'
      }
    ],
    tipsLomba: 'Pahami kosa kata: "Wadda\'aka" (meninggalkanmu), "Qala" (membenci), "Fala taqhar" (jangan sewenang-wenang), "Fala tanhar" (jangan membentak).'
  },
  {
    id: 'quran-11',
    nomor: 11,
    scopeId: 'quran',
    judul: 'Surah Al-‘Alaq ayat 1-5',
    subJudul: 'Wahyu Pertama: Perintah Membaca & Literasi Berketuhanan',
    ringkasan: 'Ayat 1-5 Surah Al-\'Alaq adalah wahyu pertama yang diturunkan kepada Nabi Muhammad SAW di Gua Hira melalui Malaikat Jibril. Merupakan tonggak peradaban Islam yang mewajibkan membaca (iqra) dan belajar dengan pena (al-qalam).',
    kontenUtama: `Peristiwa turunnya wahyu pertama terjadi pada malam 17 Ramadan di Gua Hira di Jabal Nur, ketika Nabi Muhammad SAW berusia 40 tahun. Malaikat Jibril mendatangi beliau dan berkata: "Iqra!" (Bacalah!). Nabi menjawab: "Mā ana biqāri'" (Aku tidak bisa membaca). Jibril memeluk Nabi hingga tiga kali, lalu membacakan lima ayat pertama Surah Al-'Alaq.

Ayat ini menegaskan bahwa fondasi peradaban Islam adalah ilmu pengetahuan dan literasi yang dilandasi oleh tauhid ("Iqra' bismi rabbikalladzi khalaq"). Pena (al-qalam) adalah instrumen pencatatan ilmu yang mengubah manusia dari keadaan tidak tahu menjadi berpengetahuan.`,
    ayatAtauDalil: [
      {
        ayatNumber: 1,
        arabic: 'اِقْرَأْ بِاسْمِ رَبِّكَ الَّذِيْ خَلَقَۚ',
        transliteration: 'Iqra\' bismi rabbikal-lażī khalaq',
        translation: 'Bacalah dengan (menyebut) nama Tuhanmu yang menciptakan,'
      },
      {
        ayatNumber: 2,
        arabic: 'خَلَقَ الْاِنْسَانَ مِنْ عَلَقٍۚ',
        transliteration: 'Khalaqal-insāna min \'alaq',
        translation: 'Dia telah menciptakan manusia dari segumpal darah.'
      },
      {
        ayatNumber: 3,
        arabic: 'اِقْرَأْ وَرَبُّكَ الْاَكْرَمُۙ',
        transliteration: 'Iqra\' wa rabbukal-akram',
        translation: 'Bacalah, dan Tuhanmulah Yang Mahamulia,'
      },
      {
        ayatNumber: 4,
        arabic: 'الَّذِيْ عَلَّمَ بِالْقَلَمِۙ',
        transliteration: 'Allażī \'allama bil-qalam',
        translation: 'Yang mengajar (manusia) dengan pena.'
      },
      {
        ayatNumber: 5,
        arabic: 'عَلَّمَ الْاِنْسَانَ مَا لَمْ يَعْلَمْ',
        transliteration: '\'Allamal-insāna mā lam ya\'lam',
        translation: 'Dia mengajarkan manusia apa yang tidak diketahuinya.'
      }
    ],
    poinPenting: [
      'Wahyu pertama dalam Al-Qur\'an, diterima Nabi di Gua Hira malam 17 Ramadan (Nuzulul Qur\'an).',
      'Iqra\' berarti membaca fenomena kauniyah (alam) dan qauliyah (wahyu).',
      'Syarat membaca: "Bismi rabbik" (dengan niat ikhlas mencari ridha Allah, bukan untuk kesombongan).',
      'Pena (al-qalam) adalah sarana pengikat ilmu pengetahuan.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana santri mengamalkan pesan Iqra di era digital saat ini?',
        insight: 'Rajin membaca buku, memverifikasi (tabayyun) berita hoaks di media sosial, dan menggunakan teknologi untuk belajar hal-hal bermanfaat.',
        practicalExample: 'Membiasakan budaya gemar membaca dan menulis catatan pelajaran dengan rapi.'
      }
    ],
    tipsLomba: 'Sangat sering diujikan: Lokasi turunnya wahyu pertama (Gua Hira), malaikat penyampai wahyu (Jibril), arti "Alaq" (segumpal darah), dan fungsi "Al-Qalam" (pena pencatat ilmu).'
  },
  {
    id: 'quran-12',
    nomor: 12,
    scopeId: 'quran',
    judul: 'Surah Al-Ḥujurāt ayat 12-13',
    subJudul: 'Etika Sosial: Menjauhi Prasangka & Keragaman Antar-Bangsa',
    ringkasan: 'Dua ayat agung tentang adab bermasyarakat: Ayat 12 melarang prasangka buruk, mencari aib (tajassus), dan ghibah (menggunjing diibaratkan memakan bangkai saudara sendiri). Ayat 13 menegaskan manusia diciptakan bersuku-suku untuk saling mengenal (lita\'arafu), dan yang paling mulia adalah yang paling bertakwa.',
    kontenUtama: `Surah Al-Ḥujurāt dikenal sebagai surah pendidikan akhlak sosial (madaniyyah). 

Ayat 12 memberikan larangan keras terhadap penyakit pergaulan:
- Menjauhi sebagian besar purbasangka (dzan) karena sebagian prasangka adalah dosa.
- Melarang tajassus (memata-matai atau mencari-cari kesalahan orang lain).
- Melarang ghibah (membicarakan aib teman di belakang). Allah mengumpamakan ghibah seperti memakan daging saudara sendiri yang sudah meninggal (bangkai).

Ayat 13 adalah piagam persaudaraan universal. Allah menciptakan manusia dari laki-laki dan perempuan (Adam dan Hawa), lalu menjadikannya berbangsa-bangsa dan bersuku-suku (syu'ūban wa qabā'ila) agar saling mengenal, memahami, dan berkolaborasi (li ta'ārafū). Kemuliaan sejati bukan diukur dari ras, kekayaan, atau keturunan, melainkan tingkat ketakwaan kepada Allah (inna akramakum 'indallāhi atqākum).`,
    ayatAtauDalil: [
      {
        ayatNumber: 12,
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اجْتَنِبُوْا كَثِيْرًا مِّنَ الظَّنِّۖ اِنَّ بَعْضَ الظَّنِّ اِثْمٌ وَّلَا تَجَسَّسُوْا وَلَا يَغْتَبْ بَّعْضُكُمْ بَعْضًاۗ اَيُحِبُّ اَحَدُكُمْ اَنْ يَّأْكُلَ لَحْمَ اَخِيْهِ مَيْتًا فَكَرِهْتُمُوهُۗ',
        transliteration: 'Yā ayyuhallażīna āmanujtanibū kaṡīram minaẓ-ẓanni inna ba\'ḍaẓ-ẓanni iṡmuw wa lā tajassasū wa lā yagtab ba\'ḍukum ba\'ḍā...',
        translation: 'Wahai orang-orang yang beriman! Jauhilah banyak prasangka, sesungguhnya sebagian prasangka itu dosa, dan janganlah kamu mencari-cari kesalahan orang lain, dan janganlah ada di antara kamu yang menggunjing sebagian yang lain...'
      },
      {
        ayatNumber: 13,
        arabic: 'يٰٓاَيُّهَا النَّاسُ اِنَّا خَلَقْنٰكُمْ مِّنْ ذَكَرٍ وَّاُنْثٰى وَجَعَلْنٰكُمْ شُعُوْبًا وَّقَبَاۤىِٕلَ لِتَعَارَفُوْاۚ اِنَّ اَكْرَمَكُمْ عِنْدَ اللّٰهِ اَتْقٰىكُمْۗ',
        transliteration: 'Yā ayyuhan-nāsu innā khalaqnākum min żakariw wa unṡā wa ja\'alnākum syu\'ūbaw wa qabā\'ila lita\'ārafū, inna akramakum \'indallāhi atqākum...',
        translation: 'Wahai manusia! Sungguh, Kami telah menciptakan kamu dari seorang laki-laki dan seorang perempuan, kemudian Kami jadikan kamu berbangsa-bangsa dan bersuku-suku agar kamu saling mengenal. Sesungguhnya yang paling mulia di antara kamu di sisi Allah ialah orang yang paling bertakwa...'
      }
    ],
    poinPenting: [
      'Tiga larangan dalam ayat 12: Su\'udzan (prasangka buruk), Tajassus (memata-matai aib), Ghibah (menggunjing).',
      'Perumpamaan ghibah: Seperti memakan daging bangkai saudara sendiri.',
      'Tujuan keragaman ras/suku: Lita\'arafu (saling mengenal, berinteraksi positif, bersilaturahmi).',
      'Tolak ukur kemuliaan manusia di hadapan Allah: Ketakwaan (atqakum), bukan fisik, rupa, atau harta.'
    ],
    wigginsFacets: [
      {
        facet: 'Empati',
        questionPrompt: 'Bagaimana perasaan teman ketika rahasianya dibongkar atau aibnya digunjingkan?',
        insight: 'Sangat malu, terluka batinnya, dan kehilangan kepercayaan diri. Menutup aib sesama muslim adalah kewajiban yang dijanjikan balasan perlindungan aib di akhirat.',
        practicalExample: 'Tidak menyebarkan rumor atau foto aib teman di grup WhatsApp kelas.'
      },
      {
        facet: 'Perspektif',
        questionPrompt: 'Mengapa Allah menciptakan manusia beraneka suku dan bangsa?',
        insight: 'Keragaman adalah sunnatullah agar kehidupan menjadi kaya warna, saling melengkapi, belajar toleransi, dan bergotong-royong.',
        practicalExample: 'Menghargai tradisi budaya teman dari suku Jawa, Sunda, Batak, Papua tanpa bersikap rasis.'
      }
    ],
    tipsLomba: 'Hafalkan teks potongannya: "Lita\'arafu" dan "Inna akramakum \'indallahi atqakum". Soal HOTS MAPSI sangat gemar menguji analisis studi kasus ghibah dan toleransi suku bangsa!'
  },
  {
    id: 'quran-13',
    nomor: 13,
    scopeId: 'quran',
    judul: 'Surah Ali ‘Imrān ayat 64',
    subJudul: 'Seruan Kalimat Bersama (Kalimatun Sawa\') & Titik Temu Dialog',
    ringkasan: 'Ayat seruan kepada Ahli Kitab (Yahudi & Nasrani) menuju kalimatun sawa\' (kalimat titik temu yang adil): yaitu tidak menyembah selain Allah, tidak mempersekutukan-Nya, dan tidak menjadikan sesama manusia sebagai tuhan tandingan.',
    kontenUtama: `Surah Ali ‘Imrān ayat 64 adalah dalil utama diplomasi dan dialog lintas agama dalam Islam. Ketika Nabi Muhammad SAW mengirimkan surat-surat dakwah kepada raja-raja dunia (seperti Kaisar Heraclius dari Romawi, Mukaukis dari Mesir, dan Najasyi dari Habasyah), beliau mencantumkan ayat ini.

Prinsip "Kalimatun Sawa'" bermakna prinsip keadilan universal:
1. Kita tidak menyembah kecuali hanya kepada Allah (Tauhid murni).
2. Kita tidak mempersekutukan sesuatu pun dengan-Nya.
3. Kita tidak mengangkat manusia (seperti pendeta, rahib, penguasa) sebagai sesembahan tandingan yang menghalalkan apa yang diharamkan Allah atau sebaliknya.
Jika mereka berpaling dari ajakan murni ini, katakanlah: "Saksikanlah bahwa kami adalah orang-orang yang berserah diri kepada Allah (muslimūn)."`,
    ayatAtauDalil: [
      {
        ayatNumber: 64,
        arabic: 'قُلْ يٰٓاَهْلَ الْكِتٰبِ تَعَالَوْا اِلٰى كَلِمَةٍ سَوَاۤءٍۢ بَيْنَنَا وَبَيْنَكُمْ اَلَّا نَعْبُدَ اِلَّا اللّٰهَ وَلَا نُشْرِكَ بِهٖ شَيْـًٔا وَّلَا يَتَّخِذَ بَعْضُنَا بَعْضًا اَرْبَابًا مِّنْ دُوْنِ اللّٰهِۗ فَاِنْ تَوَلَّوْا فَقُوْلُوا اشْهَدُوْا بِاَنَّا مُسْلِمُوْنَ',
        transliteration: 'Qul yā ahlal-kitābi ta\'ālau ilā kalimatin sawā\'im bainanā wa bainakum allā na\'buda illallāha wa lā nusyrika bihī syai\'aw wa lā yattakhiża ba\'ḍunā ba\'ḍan arbābam min dūnillāh, fa in tawallau fa qūlusy-hadū bi\'annā muslimūn.',
        translation: 'Katakanlah (Muhammad), "Wahai Ahlulkitab! Marilah (kita menuju) kepada satu kalimat (pegangan) yang sama antara kami dan kamu, bahwa kita tidak menyembah selain Allah dan kita tidak mempersekutukan-Nya dengan sesuatu pun, dan bahwa kita tidak menjadikan satu sama lain tuhan-tuhan selain Allah." Jika mereka berpaling, katakanlah: "Saksikanlah, bahwa kami adalah orang-orang muslim."'
      }
    ],
    poinPenting: [
      'Kalimatun Sawa\' artinya kesepakatan titik temu yang sama dan adil bagi kedua pihak.',
      'Ayat ini termaktub dalam surat resmi diplomasi Nabi SAW kepada Kaisar Heraclius dari Romawi.',
      'Melarang kultus individu berlebihan terhadap pemimpin atau tokoh agama hingga dianggap maksum tanpa batas (arbaban min dunillah).',
      'Menjunjung tinggi etika berdialog secara santun, berargumen logis, dan tetap teguh pada identitas keislaman.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Bagaimana metode berdialog dengan penganut keyakinan berbeda menurut ayat ini?',
        insight: 'Mengedepankan titik persamaan terlebih dahulu (keadilan, kebaikan, keesaan Tuhan) daripada langsung menonjolkan perselisihan dengan cara konfrontatif.',
        practicalExample: 'Bekerja sama dalam aksi sosial kemanusiaan (seperti donor darah dan bersih lingkungan) dengan tetangga beda agama.'
      }
    ],
    tipsLomba: 'Perhatikan arti dari ungkapan "Kalimatin Sawa\'" dan konteks penggunaan ayat ini dalam surat dakwah Nabi ke para penguasa dunia!'
  },
  {
    id: 'quran-14',
    nomor: 14,
    scopeId: 'quran',
    judul: 'Surah Al-Baqarah ayat 256',
    subJudul: 'Tiada Paksaan dalam Beragama (Lā Ikrāha fid-Dīn)',
    ringkasan: 'Prinsip fundamental kebebasan nurani dan beragama dalam Islam: Tidak ada paksaan untuk memeluk agama Islam, karena kebenaran telah jelas terpisah dari kesesatan. Barang siapa ingkar kepada Thaghut dan beriman kepada Allah, ia berpegang pada tali yang sangat kokoh (al-\'urwatul wutsqa).',
    kontenUtama: `Surah Al-Baqarah ayat 256 memuat landasan hukum syariah yang sangat toleran: "Lā ikrāha fid-dīn" (Tidak ada paksaan dalam menganut agama).

Asbabun nuzul ayat ini terkait dengan orang tua dari kalangan kaum Ansar di Madinah yang memiliki anak-anak yang terlanjur memeluk agama Nasrani atau Yahudi sebelum Islam datang. Orang tua tersebut bertanya kepada Nabi apakah mereka boleh memaksa anak-anaknya masuk Islam. Maka turunlah ayat ini yang melarang pemaksaan iman, karena iman harus bersemi dari ketulusan hati nurani dan hidayah Allah, bukan intimidasi atau ancaman senjata.

Orang yang menolak Thaghut (segala bentuk tandingan Allah) dan beriman kepada Allah digambarkan seperti berpegang pada tali yang amat kuat (al-'urwatul wutsqa) yang tidak akan pernah terputus.`,
    ayatAtauDalil: [
      {
        ayatNumber: 256,
        arabic: 'لَآ اِكْرَاهَ فِى الدِّيْنِۗ قَدْ تَّبَيَّنَ الرُّشْدُ مِنَ الْغَيِّۚ فَمَنْ يَّكْفُرْ بِالطَّاغُوْتِ وَيُؤْمِنْۢ بِاللّٰهِ فَقَدِ اسْتَمْسَكَ بِالْعُرْوَةِ الْوُثْقٰى لَا انْفِصَامَ لَهَاۗ وَاللّٰهُ سَمِيْعٌ عَلِيْمٌ',
        transliteration: 'Lā ikrāha fid-dīni qat tabayyanar-rusydu minal-gayy, fa may yakfur biṭ-ṭāgūti wa yu\'mim billāhi faqadistamsaka bil-\'urwatil-wuṡqā lanfiṣāma lahā, wallāhu samī\'un \'alīm.',
        translation: 'Tidak ada paksaan dalam (menganut) agama (Islam); sungguh telah jelas jalan yang benar dari jalan yang sesat. Barang siapa ingkar kepada Tagut dan beriman kepada Allah, maka sungguh dia telah berpegang teguh pada tali yang sangat kuat yang tidak akan putus. Allah Maha Mendengar, Maha Mengetahui.'
      }
    ],
    poinPenting: [
      'Prinsip "Lā ikrāha fid-dīn": Pemaksaan fisik atau tekanan mental dilarang dalam mengajak orang masuk Islam.',
      'Ar-Rusydu (kebenaran) sudah terang benderang perbedaannya dari Al-Ghayy (kesesatan) melalui akal dan dalil wahyu.',
      'Thaghut: Segala sesuatu yang disembah selain Allah dan melampaui batas kewajaran.',
      'Al-\'Urwatul Wutsqa: Tali yang sangat kokoh, yakni kalimat tauhid La ilaha illallah dan syariat Islam yang lurus.'
    ],
    wigginsFacets: [
      {
        facet: 'Interpretasi',
        questionPrompt: 'Mengapa dakwah Islam harus disampaikan dengan keteladanan (bil-hikmah wal mau\'izhah) bukan paksaan?',
        insight: 'Karena keimanan yang dipaksakan hanya melahirkan orang munafik. Islam menginginkan keikhlasan hati yang hakiki.',
        practicalExample: 'Mengajak teman salat dengan ajakan lembut dan contoh nyata, bukan memaki-maki.'
      }
    ],
    tipsLomba: 'Kerap muncul dalam bentuk analisis kasus: Menolak radikalisme beragama berdasarkan makna "La ikraha fid-din" dan istilah "Al-\'Urwatul Wutsqa".'
  },
  {
    id: 'quran-15',
    nomor: 15,
    scopeId: 'quran',
    judul: 'Hadis tentang Keragaman & Kesetaraan Manusia',
    subJudul: 'Khutbah Wada\': Tiada Keutamaan Bangsa Arab atas Non-Arab Kecuali Takwa',
    ringkasan: 'Hadis monumental Rasulullah SAW yang diriwayatkan Imam Ahmad dan Al-Baihaqi pada Haji Wada\', menegaskan semua manusia berasal dari Nabi Adam a.s, tidak ada keistimewaan suku, warna kulit, atau ras, melainkan takwa.',
    kontenUtama: `Dalam khutbah perpisahan (Haji Wada') di Padang Arafah, Rasulullah SAW menyampaikan deklarasi hak asasi manusia dan kesetaraan universal yang menghapuskan tradisi fanatisme kesukuan (ashabiyah) bangsa Arab.

Rasulullah SAW bersabda:
"Wahai sekalian manusia! Ingatlah, sesungguhnya Tuhan kalian adalah satu, dan bapak kalian adalah satu (Nabi Adam). Ketahuilah, tidak ada keutamaan bagi orang Arab atas orang non-Arab ('ajam), tidak pula bagi orang non-Arab atas orang Arab, dan tidak ada keutamaan orang berkulit merah/putih atas orang berkulit hitam, melainkan hanya dengan ketakwaan." (HR. Ahmad).

Hadis ini menghancurkan segala bentuk diskriminasi rasial, kasta sosial, dan chauvinisme kesukuan ribuan tahun sebelum deklarasi HAM modern dicetuskan.`,
    ayatAtauDalil: [
      {
        arabic: 'يَا أَيُّهَا النَّاسُ إِنَّ رَبَّكُمْ وَاحِدٌ وَإِنَّ أَبَاكُمْ وَاحِدٌ أَلَا لَا فَضْلَ لِعَرَبِيٍّ عَلَى أَعْجَمِيٍّ وَلَا لِعَجَمِيٍّ عَلَى عَرَبِيٍّ وَلَا لِأَحْمَرَ عَلَى أَسْوَدَ وَلَا أَسْوَدَ عَلَى أَحْمَرَ إِلَّا بِالتَّقْوَى',
        transliteration: 'Yā ayyuhan-nāsu inna rabbakum wāḥidun wa inna abākum wāḥid, alā lā faḍla li\'arabiyyin \'alā a\'jamiyyin wa lā li\'a\'jamiyyin \'alā \'arabiyyin wa lā li\'aḥmara \'alā aswada wa lā aswada \'alā aḥmara illā bit-taqwā.',
        translation: 'Wahai sekalian manusia, sesungguhnya Tuhanmu satu dan bapakmu satu. Ingatlah, tidak ada kelebihan bagi orang Arab atas orang ajam (non-Arab), dan tidak pula orang ajam atas orang Arab, dan tidak pula orang berkulit putih/merah atas orang hitam, kecuali dengan takwa.'
      }
    ],
    poinPenting: [
      'Disampaikan Rasulullah SAW pada peristiwa Haji Wada\' tahun 10 Hijriyah di hadapan lebih dari 100.000 sahabat.',
      'Konsep dasar: Rabbakum wahid (Tuhan satu) dan Abakum wahid (Bapak satu = Adam dari tanah).',
      'A\'jami artinya orang non-Arab.',
      'Satu-satunya pembeda kemuliaan di hadapan Allah adalah At-Taqwa (ketakwaan).',
      'Mengharamkan perilaku rasisme, pembulian fisik (body shaming), dan diskriminasi warna kulit.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana santri mengimplementasikan hadis ini di lingkungan sekolah yang majemuk?',
        insight: 'Tidak membentuk geng berdasarkan suku tertentu, tidak mengejek warna kulit atau logat daerah teman, dan berteman dengan siapa saja.',
        practicalExample: 'Memilih ketua kelas berdasarkan kompetensi dan kejujuran, bukan karena kesamaan suku atau daerah asal.'
      },
      {
        facet: 'Refleksi',
        questionPrompt: 'Mengapa Islam sangat menentang faham rasisme dan kasta?',
        insight: 'Karena semua manusia berakar dari unsur yang sama (tanah), dan kesombongan keturunan adalah bibit keangkuhan Iblis yang merasa lebih baik dari Adam.',
        practicalExample: 'Selalu bersikap rendah hati (tawadhu) dalam bergaul.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal esai/HOTS MAPSI mengenai perbandingan konsep kesetaraan manusia dalam Khutbah Wada\' dan ayat Al-Hujurat 13!'
  }
];
