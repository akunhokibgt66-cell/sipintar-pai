import { MateriItem } from '../types';

export const btqData: MateriItem[] = [
  {
    id: 'btq-1',
    nomor: 1,
    scopeId: 'btq',
    judul: 'Hukum Nūn Sukūn (نْ) dan Tanwīn (ً ٍ ٌ)',
    subJudul: 'Iẓhār Ḥalqī, Idgām Bigunnah, Idgām Bilāgunnah, Iqlāb, Ikhfā’ Ḥaqīqī',
    ringkasan: 'Fondasi ilmu tajwid: aturan pelafalan nun mati atau tanwin saat bertemu 28 huruf hijaiah yang terbagi menjadi 5 hukum bacaan pokok.',
    kontenUtama: `Apabila huruf Nūn Sukūn (نْ) atau Tanwīn (fathatain, kasratain, dhammatain) bertemu salah satu huruf hijaiah, hukumnya terbagi menjadi 5 macam:

1. **Iẓhār Ḥalqī (اِظْهَارْ حَلْقِي)**:
   - Arti: Iẓhār = jelas/terang, Ḥalqī = tenggorokan.
   - Cara baca: Dibaca jelas tanpa mendengung.
   - 6 Hurufnya: Hamzah (ء), Hā’ (هـ), ‘Ain (ع), Ḥā’ (ح), Gain (غ), Khā’ (خ).
   - Contoh: مِنْ خَوْفٍ (Min khauf), مَنْ اٰمَنَ (Man āmana), عَلِيْمٌ حَكِيْمٌ (\'Alīmun ḥakīm).

2. **Idgām Bigunnah / Ma‘al-gunnah (اِدْغَامْ بِغُنَّة)**:
   - Arti: Memasukkan suara nun ke huruf berikutnya disertai dengungan (gunnah) 2 harakat.
   - 4 Hurufnya: Ya’ (ي), Nūn (ن), Mīm (م), Wāwu (و) - Disingkat **YANMU (يَنْمُوْ)**.
   - Contoh: مَنْ يَّقُوْلُ (May yaqūlu), مِنْ مَّالٍ (Mim mālin).
   - *Pengecualian (Iẓhār Muṭlaq)*: Jika nun sukun dan huruf idgham berada dalam SATU KATA, wajib dibaca jelas (Izhār Mutlaq). Hanya ada 4 kata di seluruh Al-Qur'an: الدُّنْيَا (Ad-Dunya), بُنْيَانٌ (Bunyanun), قِنْوَانٌ (Qinwanun), صِنْوَانٌ (Shinwanun).

3. **Idgām Bilāgunnah (اِدْغَامْ بِلَا غُنَّة)**:
   - Arti: Memasukkan suara nun ke huruf berikutnya TANPA dengung sama sekali.
   - 2 Hurufnya: Lām (ل) dan Rā’ (ر).
   - Contoh: مِنْ رَّبِّهِمْ (Mir rabbihim), مَنْ لَّمْ (Mal lam).

4. **Iqlāb (اِقْلَاب)**:
   - Arti: Mengganti atau menukar suara nun mati/tanwin menjadi suara mim sukun (مْ) disertai dengung 2 harakat.
   - 1 Hurufnya: Bā’ (ب).
   - Contoh: مِنْ بَعْدِ (Mim ba\'di), عَلِيْمٌۢ بِذَاتِ الصُّدُوْرِ (\'Alīmum biżātiṣ-ṣudūr).

5. **Ikhfā’ Ḥaqīqī (اِخْفَاءْ حَقِيْقِي)**:
   - Arti: Menyamarkan suara nun mati antara izhar dan idgham disertai dengung samar.
   - 15 Hurufnya: ت ث ج د ذ ز س ش ص ض ط ظ ف ق ك.
   - Contoh: مِنْ قَبْلِ (Ming qabli), كُنْتُمْ (Kuntum), اَنْدَادًا (Andādā).`,
    ayatAtauDalil: [
      {
        arabic: 'لِلنُّوْنِ اِنْ تَسْكُنْ وَلِلتَّنْوِيْنِ ¤ اَرْبَعُ اَحْكَامٍ فَخُذْ تَبْيِيْنِي',
        transliteration: 'Lin-nūni in taskun wa lit-tanwīni # Arba\'u aḥkāmin fa khuz tabyīnī',
        translation: 'Bagi nun jika ia sukun dan bagi tanwin, ada empat/lima hukum maka terimalah penjelasanku (Matan Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      'Izhar Halqi: 6 huruf (ء هـ ع ح غ خ) - dibaca jelas.',
      'Idgham Bighunnah: 4 huruf (ي ن م و) - mendengung.',
      'Pengecualian Idgham Bighunnah dalam 1 kata: Izhar Mutlaq (Ad-Dunya, Bunyan, Qinwan, Shinwan).',
      'Idgham Bilaghunnah: 2 huruf (ل ر) - tanpa dengung.',
      'Iqlab: 1 huruf (ب) - ditukar jadi mim dengung.',
      'Ikhfa\' Haqiqi: 15 huruf sisa - samar mendengung.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana cara melafalkan kata "Ad-Dunyā" (الدُّنْيَا) yang memuat nun sukun bertemu Ya dalam satu kata?',
        insight: 'Tidak boleh dibaca mendengung idgham "ad-duyya", melainkan harus dibaca jelas nun-nya "ad-dunyā" karena berhukum Izhār Muṭlaq.',
        practicalExample: 'Membaca surah Al-Baqarah ayat 201 dengan makhraj tepat.'
      }
    ],
    tipsLomba: 'Soal favorit MAPSI: 4 kata Izhar Mutlaq di Al-Qur\'an (Ad-Dunya, Bunyan, Qinwan, Shinwan) dan menghitung jumlah huruf tiap hukum!'
  },
  {
    id: 'btq-2',
    nomor: 2,
    scopeId: 'btq',
    judul: 'Hukum Mīm Sukūn (مْ)',
    subJudul: 'Ikhfā’ Syafawī, Idgām Mīmī (Mislain), Iẓhār Syafawī',
    ringkasan: 'Aturan bacaan ketika huruf mim sukun bertemu dengan huruf hijaiah. Huruf syafawi berkaitan dengan dua bibir: terbagi 3 hukum praktis.',
    kontenUtama: `Hukum Mīm Sukūn (مْ) terbagi menjadi 3 hukum bacaan:

1. **Ikhfā’ Syafawī (اِخْفَاءْ شَفَوِي)**:
   - Hurufnya HANYA 1: Bā’ (ب).
   - Cara baca: Membunyikan mim sukun dengan samar-samar di antara kedua bibir disertai dengungan (gunnah) 2 harakat sebelum masuk ke huruf ba\'.
   - Contoh: تَرْمِيْهِمْ بِحِجَارَةٍ (Tarmīhim biḥijārah - QS. Al-Fil), وَهُمْ بِالْاٰخِرَةِ (Wa hum bil-ākhirah).

2. **Idgām Mīmī / Idgām Mislain (اِدْغَامْ مِيْمِي / مِثْلَيْنِ)**:
   - Hurufnya HANYA 1: Mīm (م).
   - Cara baca: Memasukkan mim sukun ke mim berikutnya sehingga menjadi mim bertasydid disertai dengung (gunnah) 2 harakat.
   - Contoh: فِيْ قُلُوْبِهِمْ مَّرَضٌ (Fī qulūbihim maraḍ), لَهُمْ مَّا يَشَاۤءُوْنَ (Lahum mā yasyā’ūn).

3. **Iẓhār Syafawī (اِظْهَارْ شَفَوِي)**:
   - Hurufnya ada 26 huruf (Seluruh huruf hijaiah KECUALI Ba\' dan Mim).
   - Cara baca: Membaca huruf mim sukun dengan jelas tanpa mendengung di bibir.
   - Peringatan Khusus: Harus sangat jelas dan hati-hati agar tidak mendengung ketika mim sukun bertemu huruf Wāwu (و) dan Fā’ (ف) karena makhrajnya sama-sama di bibir.
   - Contoh: اَلَمْ تَرَ (Alam tara), عَلَيْهِمْ وَلَا الضَّآلِّيْنَ (\'Alaihim walāḍ-ḍāllīn).`,
    ayatAtauDalil: [
      {
        arabic: 'وَالْمِيْمُ اِنْ تَسْكُنْ تَجِي قَبْلَ الْهِجَا ¤ لَا اَلِفٍ لَّيِّنَةٍ لِذِي الْحِجَا',
        transliteration: 'Wal-mīmu in taskun tajī qablal-hijā # Lā alifin layyinatin liżil-ḥijā',
        translation: 'Dan mim jika sukun datang sebelum huruf hijaiah selain alif layyinah bagi yang berakal budi (Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      '3 Hukum Mim Sukun: Ikhfa\' Syafawi (huruf Ba\'), Idgham Mimi (huruf Mim), Izhar Syafawi (26 huruf lainnya).',
      'Syafawi artinya berhubungan dengan asy-syafatain (kedua bibir).',
      'Peringatan tajwid: Lebih berhati-hati melafalkan Izhar Syafawi saat bertemu Fa (ف) dan Wawu (و).'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Mengapa ketika mim sukun bertemu Fa dan Wawu harus ekstra hati-hati di-Izharkan?',
        insight: 'Karena makhraj Fa\' dan Wawu sama-sama berada di bibir, sehingga lidah cenderung reflek menyamarkannya (ikhfa\'), padahal hukum resminya adalah Izhar Syafawi mutlak.',
        practicalExample: 'Membaca "an\'amta \'alaihim ghairil maghdhubi \'alaihim wa lad-dhallin" dengan mim yang jernih dan lepas.'
      }
    ],
    tipsLomba: 'Kerap diuji: Jumlah hukum mim sukun (3 hukum) dan perbedaan huruf Ikhfa Syafawi (ب) vs Idgham Mimi (م).'
  },
  {
    id: 'btq-3',
    nomor: 3,
    scopeId: 'btq',
    judul: 'Hukum Tafkhīm dan Tarqīq',
    subJudul: 'Huruf Tebal & Tipis: Lafazhul Jalālah (الله) dan Huruf Rā’ (ر)',
    ringkasan: 'Tafkhim artinya menebalkan suara (menggembungkan pangkal lidah), sedangkan Tarqiq artinya menipiskan suara. Menguasai kaidah membaca lafaz Allah dan huruf Ro\'.',
    kontenUtama: `Tafkhīm (تَفْخِيْم) berarti tebal (mulut terangkat penuh), Tarqīq (تَرْقِيْق) berarti tipis (bibir agak terbuka/senyum).

1. **Hukum Lafazhul Jalālah (لَفْظُ الْجَلَالَة - اَللّٰه)**:
   - **Tafkhīm (Tebal - Lam dibaca "Llawh")**: Jika didahului oleh harakat FATḤAH atau ḌAMMAH.
     - Contoh: شَهِدَ اللّٰهُ (Syahidallāh), نَصْرُ اللّٰهِ (Naṣrullāh), سُبْحَانَ اللّٰهِ (Subḥānallāh).
   - **Tarqīq (Tipis - Lam dibaca "Llah" biasa)**: Jika didahului oleh harakat KASRAH.
     - Contoh: بِسْمِ اللّٰهِ (Bismillāh), لِلّٰهِ (Lillāh), فِيْ دِيْنِ اللّٰهِ (Fī dīnillāh).

2. **Hukum Huruf Rā’ (ر)**:
   - **Rā’ Tafkhīm (Dibaca Tebal)**:
     1. Ro\' berharakat Fathah (رَ) atau Dhammah (رُ). Contoh: رَحْمَةٌ (Raḥmah), رُسُلٌ (Rusul).
     2. Ro\' sukun didahului huruf berharakat Fathah atau Dhammah. Contoh: مَرْيَمُ (Maryam), قُرْاٰنٌ (Qur\'ān).
     3. Ro\' sukun karena waqaf didahului huruf mati yang sebelumnya berharakat Fathah/Dhammah. Contoh: وَالْعَصْرِ (Wal-\'aṣr).
   - **Rā’ Tarqīq (Dibaca Tipis)**:
     1. Ro\' berharakat Kasrah (رِ). Contoh: رِزْقًا (Rizqā).
     2. Ro\' sukun didahului huruf berharakat Kasrah asli dan setelahnya BUKAN huruf isti\'la. Contoh: فِرْعَوْنَ (Fir\'aun), مِرْيَةٍ (Miryah).
     3. Ro\' sukun karena waqaf didahului huruf Yā’ sukun (يْ). Contoh: خَيْرٌ (Khair), قَدِيْرٌ (Qadīr).`,
    ayatAtauDalil: [
      {
        arabic: 'فَخِّمِ النُّوْنَ مِنَ اسْمِ اللهِ ¤ عَنْ فَتْحٍ اَوْ ضَمٍّ كَعَبْدُ اللهِ',
        transliteration: 'Fakhkhimin-nūna min ismillāh # \'an fatḥin au ḍammin ka \'abdullāh',
        translation: 'Tebalkanlah huruf lam dari nama Allah setelah fathah atau dhammah seperti \'Abdullah (Jazariyyah).'
      }
    ],
    poinPenting: [
      'Lam Jalalah tebal jika didahului fathah/dhammah; tipis jika kasrah.',
      'Ro\' kasrah selalu tipis (tarqiq). Ro\' waqaf setelah Ya sukun selalu tipis (seperti "Khabir", "Bashir").',
      'Ro\' fathah/dhammah selalu tebal (tafkhim).',
      '7 Huruf Isti\'la (selalu tebal): خ ص ض غ ط ق ظ (Khush-sha Dhagh-thin Qizh).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana melafalkan kata "Bismillāh" vs "Qul Huwallāhu Aḥad"?',
        insight: 'Pada Bismillah lam dibaca tipis/tarqiq karena didahului kasrah; pada Huwallahu lam dibaca tebal/tafkhim karena didahului fathah.',
        practicalExample: 'Membedakan intonasi ketebalan suara saat membaca surah Al-Ikhlas.'
      }
    ],
    tipsLomba: 'Kerap diuji: Alasan mengapa lafaz tertentu dibaca tafkhim atau tarqiq (harakat huruf sebelumnya).'
  },
  {
    id: 'btq-4',
    nomor: 4,
    scopeId: 'btq',
    judul: 'Mad Ṭabī‘ī (Mad Asli)',
    subJudul: 'Panjang Asli 2 Harakat (1 Alif): Alif, Wawu & Ya\' Mati',
    ringkasan: 'Mad artinya memanjangkan suara. Mad Thabi\'i adalah mad dasar yang tidak dipengaruhi hamzah atau sukun, dibaca panjang tepat 2 harakat (1 ayunan/alif).',
    kontenUtama: `Mad terbagi menjadi dua: Mad Asli (Mad Ṭabī‘ī) dan Mad Far‘ī (Cabang).

Mad Ṭabī‘ī dinamakan Thabi\'i (alami/watak) karena orang Arab yang memiliki watak normal akan memanjangkannya secara otomatis sepanjang dua harakat, tidak kurang dan tidak lebih.

**3 Huruf Mad Ṭabī‘ī Beserta Syarat Harakatnya**:
1. Huruf **Alif (ا)** mati didahului oleh harakat **Fatḥah**. Contoh: قَالَ (Qāla), كِتَابٌ (Kitāb).
2. Huruf **Wāwu (و)** mati didahului oleh harakat **Ḍammah**. Contoh: يَقُوْلُ (Yaqūlu), نُوْرٌ (Nūr).
3. Huruf **Yā’ (ي)** mati didahului oleh harakat **Kasrah**. Contoh: قِيْلَ (Qīla), دِيْنٌ (Dīn).

Ketiga syarat ini terangkum dalam satu lafaz Al-Qur'an: **نُوْحِيْهَا (Nūḥīhā)** (QS. Hud: 49) di mana Nu (dhammah wawu), Hi (kasrah ya), Ha (fathah alif).
Panjang bacaan: Tepat **2 harakat** (1 alif).`,
    ayatAtauDalil: [
      {
        arabic: 'حُرُوْفُهُ ثَلَاثَةٌ فَعِيْهَا ¤ مِنْ لَّفْظِ نُوْحِيْهَا',
        transliteration: 'Ḥurūfuhū ṡalāṡatun fa \'īhā # Min lafẓi Nūḥīhā',
        translation: 'Huruf-hurufnya ada tiga maka hafalkanlah, terkumpul dalam lafaz: Nūḥīhā (Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      'Mad Thabi\'i = Mad Asli.',
      '3 Pasangan: Fat-hah + Alif sukun; Dhammah + Wawu sukun; Kasrah + Ya sukun.',
      'Lafaz perangkum ketiga huruf mad: نُوْحِيْهَا (Nū-ḥī-hā).',
      'Ukuran panjang: 2 harakat / 1 alif.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Apa akibatnya jika mad thabi\'i dibaca terlalu pendek (1 harakat) atau terlalu panjang (4 harakat)?',
        insight: 'Mengubah struktur irama tartil Al-Qur\'an dan berpotensi merusak arti kata (contoh: "qala" = berkata vs "qala" dipendekkan bisa menyerupai kata lain).',
        practicalExample: 'Mengetuk ketukan stabil saat melafalkan bacaan tartil.'
      }
    ],
    tipsLomba: 'Kerap diuji lafaz yang memuat ketiga huruf mad sekaligus dalam satu kata: kata "نُوْحِيْهَا" (Nu-hi-ha)!'
  },
  {
    id: 'btq-5',
    nomor: 5,
    scopeId: 'btq',
    judul: 'Mad Wājib Muttaṣil',
    subJudul: 'Mad Bertemu Hamzah dalam Satu Kata: 4 - 5 Harakat',
    ringkasan: 'Bagian dari Mad Far\'i di mana huruf Mad Thabi\'i bertemu dengan huruf Hamzah (ء) di DALAM SATU KATA yang sama. Wajib dibaca panjang 4 sampai 5 harakat (atau 6 saat waqaf).',
    kontenUtama: `Pengertian Nama:
- **Mad**: Memanjangkan suara.
- **Wājib**: Wajib dipanjangkan melebihi mad thabi'i menurut kesepakatan seluruh ulama qira'at.
- **Muttaṣil**: Bersambung (huruf mad dan hamzah berada dalam satu kata bersambung).

Kaidah: Apabila huruf mad (alif, wawu, atau ya) bertemu huruf Hamzah dalam **satu kata yang bersambung**.
Tanda dalam mushaf Al-Qur'an standar: Terdapat tanda garis lengkung alis tebal / bergelombang di atas huruf mad (~).

Contoh-Contoh:
- جَاۤءَ (Jā’a - QS. An-Nasr)
- اَلسَّمَاۤءُ (As-Samā’)
- سُوْۤءٌ (Sū’)
- جِيْۤءَ (Jī’)

Kadar Panjang Bacaan:
**4 atau 5 harakat** (2 sampai 2,5 alif) pada saat washal, dan boleh sampai 6 harakat jika hamzahnya berada di akhir kata saat berhenti (waqaf).`,
    ayatAtauDalil: [
      {
        arabic: 'فَوَاجِبٌ اِنْ جَاءَ هَمْزٌ بَعْدَ مَدّْ ¤ فِيْ كِلْمَةٍ وَذَا بِمُتَّصِلْ يُعَدّْ',
        transliteration: 'Fa wājibun in jā’a hamzum ba\'da mad # Fī kilmatin wa żā bi muttaṣil yu\'ad',
        translation: 'Maka wajib hukumnya jika datang hamzah setelah huruf mad dalam satu kata, dan ini dihitung sebagai Mad Muttashil (Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      'Mad Wajib Muttashil: Huruf mad bertemu hamzah DALAM SATU KATA.',
      'Panjang bacaan: 4 atau 5 harakat.',
      'Contoh: Jā’a, As-Samā’u, Sū’un, An-Nisā’.',
      'Ciri visual mushaf: Tanda alis melengkung di atas huruf mad di dalam kata yang sama dengan hamzah.'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Bagaimana membedakan Mad Wajib Muttashil dengan Mad Jaiz Munfashil secara visual?',
        insight: 'Mad Wajib hamzahnya berada dalam satu kata yang tidak bisa dipisahkan (seperti Ja-a atau As-Sama\'); sedangkan Mad Jaiz hamzahnya berada di awal kata berikutnya (dua kata terpisah).',
        practicalExample: 'Mengidentifikasi lafaz "Idzā jā’a nashrullāhi" (Muttashil).'
      }
    ],
    tipsLomba: 'Sangat sering diuji membedakan lafaz Mad Wajib Muttashil vs Mad Jaiz Munfashil di dalam ayat!'
  },
  {
    id: 'btq-6',
    nomor: 6,
    scopeId: 'btq',
    judul: 'Mad Jā’iz Munfaṣil',
    subJudul: 'Mad Bertemu Hamzah di Lain Kata: 2, 4, hingga 5 Harakat',
    ringkasan: 'Bagian dari Mad Far\'i di mana huruf Mad Thabi\'i berada di akhir kata pertama, dan bertemu huruf Hamzah di awal KATA BERIKUTNYA. Boleh dibaca 2, 4, atau 5 harakat.',
    kontenUtama: `Pengertian Nama:
- **Mad**: Memanjangkan suara.
- **Jā’iz**: Boleh (ulama qira'at membolehkan membaca 2 harakat qashar, atau tawasuth 4-5 harakat).
- **Munfaṣil**: Terpisah (huruf mad berada di akhir kata pertama, dan hamzah di awal kata kedua).

Kaidah: Apabila huruf mad thabi'i berada di akhir suatu kata, lalu bertemu dengan huruf hamzah/alif yang menjadi huruf pertama pada kata setelahnya.

Contoh-Contoh:
- اِنَّآ اَعْطَيْنٰكَ (Innā a‘ṭaināk - QS. Al-Kautsar: kata "Innā" terpisah dari "A‘ṭaināka")
- يٰٓاَيُّهَا (Yā ayyuhā - kata seruan "Yā" terpisah dari "Ayyuhā")
- قُوْٓا اَنْفُسَكُمْ (Qū anfusakum - QS. At-Tahrim: kata "Qū" terpisah dari "Anfusakum")
- فِيْٓ اَحْسَنِ (Fī aḥsani - QS. At-Tin: kata "Fī" terpisah dari "Aḥsani")

Kadar Panjang Bacaan:
Boleh dibaca **2 harakat** (qashar), **4 harakat**, atau **5 harakat** (kebiasaan riwayat Hafsh \'an \'Ashim membaca 4-5 harakat). Jika berhenti (waqaf) pada kata pertama (misal berhenti di lafaz "Inna"), panjangnya kembali menjadi Mad Thabi'i biasa (2 harakat).`,
    ayatAtauDalil: [
      {
        arabic: 'وَجَائِزٌ مَدٌّ وَقَصْرٌ اِنْ فُصِلْ ¤ كُلٌّ بِكِلْمَةٍ وَهٰذَا الْمُنْفَصِلْ',
        transliteration: 'Wa jā’izun madduw wa qaṣrun in fuṣil # Kullum bi kilmatin wa hāżal-munfaṣil',
        translation: 'Dan boleh dipanjangkan atau dipendekkan jika terpisah masing-masing dalam katanya sendiri, dan ini adalah Mad Munfashil (Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      'Mad Jaiz Munfashil: Huruf mad dan hamzah DI DUA KATA TERPISAH.',
      'Panjang bacaan: Boleh 2, 4, atau 5 harakat.',
      'Contoh: Innā a\'ṭaināk, Fī aḥsani, Yā ayyuhalladzīna.',
      'Jika diwaqafkan di kata pertama, hukum mad berubah menjadi mad thabi\'i 2 harakat.'
    ],
    wigginsFacets: [
      {
        facet: 'Interpretasi',
        questionPrompt: 'Mengapa lafaz "Yā Ayyuhā" (يٰٓاَيُّهَا) termasuk Mad Jaiz padahal di mushaf tulisannya bersambung?',
        insight: 'Karena secara struktur tata bahasa Arab (I\'rab), "Yā" adalah huruf nida\' (kata seru mandiri) dan "Ayyuhā" adalah munada (kata benda terpisah), sehingga hakikatnya adalah dua kata.',
        practicalExample: 'Memahami kaidah penulisan rasm Utsmani pada partikel nida\'.'
      }
    ],
    tipsLomba: 'Kerap keluar tabel klasifikasi: Menentukan mana lafaz yang termasuk Mad Wajib Muttashil vs Mad Jaiz Munfashil!'
  },
  {
    id: 'btq-7',
    nomor: 7,
    scopeId: 'btq',
    judul: 'Hukum Qalqalah',
    subJudul: 'Memantulkan Suara Huruf Sukun: Qalqalah Sugrā & Qalqalah Kubrā',
    ringkasan: 'Qalqalah artinya getaran / pantulan suara saat melafalkan 5 huruf khusus ketika berharakat sukun (asli di tengah kata = sugra) atau sukun karena waqaf (di akhir kata = kubra).',
    kontenUtama: `Qalqalah secara bahasa berarti getaran atau guncangan. Secara tajwid adalah membunyikan huruf tertentu dengan pantulan suara pada makhrajnya ketika berharakat sukun.

**5 Huruf Qalqalah**:
Disingkat **BA-JU-DI-TO-QO** (ب - ج - د - ط - ق) atau dalam kaidah Arab: **قُطْبُ جَدٍّ (Quṭbu Jaddin)**.

Pembagian Qalqalah:
1. **Qalqalah Sugrā (قَلْقَلَة صُغْرَى - Kecil)**:
   - Terjadi apabila huruf qalqalah berharakat **sukun asli dan berada di tengah kata / kalimat**.
   - Pantulannya ringan/kecil dan tidak terputus dari huruf setelahnya.
   - Contoh: يَقْطَعُوْنَ (Yaqṭa‘ūn), اَبْصَارِهِمْ (Abṣārihim), يَجْعَلْ (Yaj‘al), تَدْعُوْنَ (Tad‘ūn), اَطْعَمَهُمْ (Aṭ‘amahum).

2. **Qalqalah Kubrā (قَلْقَلَة كُبْرَى - Besar)**:
   - Terjadi apabila huruf qalqalah berada **di akhir kata dan dibaca sukun karena waqaf (berhenti)**, baik asalnya berharakat hidup maupun bertasydid.
   - Pantulannya kuat, tebal, dan jelas memantul.
   - Contoh: قُلْ هُوَ اللّٰهُ اَحَدْ (Qul huwallāhu aḥad), مِنْ شَرِّ مَا خَلَقْ (Min syarri mā khalaq), فِي الْعُقَدْ (Fil-\'uqad), ذَاتِ الْبُرُوْجِ (Żātil-burūj).
   - *Qalqalah Akbar (Tergolong Kubra)*: Jika huruf di akhir kata tersebut bertasydid saat waqaf, pantulannya lebih ditekan sejenak lalu dipantulkan kuat. Contoh: تَبَّتْ يَدَآ اَبِيْ لَهَبٍ وَّتَبَّ (Wa tabb - QS. Al-Lahab).`,
    ayatAtauDalil: [
      {
        arabic: 'قَلْقَلَةٌ قُطْبُ جَدٍّ وَاِنْ يَكُنْ ¤ مُنْفَتِحًا فَقَرِّبِ الْمُسَكَّنْ',
        transliteration: 'Qalqalatun quṭbu jaddin wa in yakun # Munfatiḥan fa qarribil-musakkan',
        translation: 'Huruf qalqalah terkumpul dalam Quthbu Jaddin, dan bila waqaf maka pantulkanlah dengan jelas.'
      }
    ],
    poinPenting: [
      '5 Huruf: Qaf, Tha, Ba, Jim, Dal (BA-JU-DI-TO-QO / Quṭbu Jaddin).',
      'Sugra: Di tengah kata, sukun asli, pantulan ringan.',
      'Kubra: Di akhir kata karena berhenti (waqaf), pantulan kuat.',
      'Contoh Sugra: "Yaj\'al", "Iqra\'", "Ath\'amahum".',
      'Contoh Kubra: "Ahad", "Ash-Shamad", "Khalaq", "Al-Waqab".'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana melafalkan ayat "Qul a\'ūżu birabbil-falaq" saat waqaf di kata Al-Falaq?',
        insight: 'Huruf Qaf dimatikan lalu diberikan pantulan suara jelas ke arah bunyi makhrajnya tanpa menambah vokal \'e\' berlebihan.',
        practicalExample: 'Membaca surah Al-Falaq dan Al-Ikhlas dengan pantulan qalqalah kubra yang bulat dan mantap.'
      }
    ],
    tipsLomba: 'Hafalkan rumus 5 huruf: BA-JU-DI-TO-QO dan klasifikasi kata di tengah (Sugra) vs di akhir kata waqaf (Kubra)!'
  },
  {
    id: 'btq-8',
    nomor: 8,
    scopeId: 'btq',
    judul: 'Alif Lām Qamariyyah dan Alif Lām Syamsiyyah',
    subJudul: 'Iẓhār Qamarī (Terang Bagaikan Bulan) & Idgām Syamsī (Melebur Bagaikan Matahari)',
    ringkasan: 'Kaidah membaca huruf Alif Lam (ال) ta\'rif ketika bertemu 28 huruf hijaiah: 14 huruf dibaca jelas (Qamariyyah) dan 14 huruf dileburkan/dimasukkan bertasydid (Syamsiyyah).',
    kontenUtama: `Ketika Alif Lam (ال) ta'rif masuk pada kata benda (isim), hukumnya terbagi menjadi dua kelompok simetris:

1. **Alif Lām Qamariyyah (Iẓhār Qamarī)**:
   - Filosofi: Qamar = Bulan. Bintang tetap terlihat terang benderang di sisi bulan. Maka bunyi lam (لْ) dibaca TERANG dan JELAS.
   - Ciri Visual Mushaf: Huruf Lam diberi tanda sukun (الْـ).
   - 14 Huruf Qamariyyah terkumpul dalam bait: **اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ (Abgi ḥajjaka wa khaf ‘aqīmah)**:
     - Hamzah (ء), Bā’ (ب), Gain (غ), Ḥā’ (ح), Jīm (ج), Kāf (ك), Wāwu (و), Khā’ (خ), Fā’ (ف), ‘Ain (ع), Qāf (ق), Yā’ (ي), Mīm (م), Hā’ (هـ).
   - Contoh: اَلْقَمَرُ (Al-Qamaru), اَلْحَمْدُ (Al-Ḥamdu), اَلْكِتَابُ (Al-Kitābu), اَلْفَلَقُ (Al-Falaqu).

2. **Alif Lām Syamsiyyah (Idgām Syamsī)**:
   - Filosofi: Syams = Matahari. Bintang tidak terlihat karena tertelan oleh cahaya terik matahari. Maka bunyi lam HILANG melebur ke huruf berikutnya.
   - Ciri Visual Mushaf: Huruf Lam TIDAK berharakat, dan huruf setelahnya diberi tanda **Tasydīd (ّ)**.
   - 14 Huruf Syamsiyyah:
     - Tā’ (ت), Ṡā’ (ث), Dāl (د), Żāl (ذ), Rā’ (ر), Zāy (ز), Sīn (س), Syīn (ش), Ṣād (ص), Ḍād (ض), Ṭā’ (ط), Ẓā’ (ظ), Lām (ل), Nūn (ن).
   - Contoh: اَلشَّمْسُ (Asy-Syamsu), اَلرَّحْمٰنُ (Ar-Raḥmānu), اَلنَّاسُ (An-Nāsu), اَلصَّلَاةُ (Aṣ-Ṣalātu).`,
    ayatAtauDalil: [
      {
        arabic: 'لِلَامِ اَلْ حَالَانِ قَبْلَ الْاَحْرُفِ ¤ اُوْلَاهُمَا اِظْهَارُهَا فَلْتَعْرِفِ',
        transliteration: 'Li lāmi al ḥālāni qablal-aḥrufi # Ūlāhumā iẓhāruhā fal-ta\'rifi',
        translation: 'Bagi lam Ta\'rif ada dua keadaan sebelum huruf hijaiah, yang pertama adalah Izhar (Qamariyyah) maka ketahuilah (Tuhfatul Athfal).'
      }
    ],
    poinPenting: [
      'Alif Lam Qamariyyah: 14 huruf (Abghi Hajjaka wa Khaf \'Aqimah) - Lam sukun dibaca jelas.',
      'Alif Lam Syamsiyyah: 14 huruf sisa - Lam melebur masuk huruf bertasydid.',
      'Ciri visual mushaf: Qamariyah ada sukun di atas lam; Syamsiyah ada tasydid di huruf setelah lam.',
      'Contoh Qamariyyah: Al-Baqarah, Al-Kautsar, Al-Falaq.',
      'Contoh Syamsiyyah: An-Nas, Ar-Rahman, As-Sama\'.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana melafalkan bacaan "Mālikin-Nās" (مَلِكِ النَّاسِ) pada surah An-Nas?',
        insight: 'Bunyi "al" tidak dibaca "Malikil-nas", melainkan langsung masuk melebur ke huruf Nun bertasydid mendengung: "Mālikin-nās" karena termasuk Alif Lam Syamsiyyah.',
        practicalExample: 'Membaca surah Al-Fatihah ayat 1: "Ar-Raḥmānir-Raḥīm" (keduanya Syamsiyyah).'
      }
    ],
    tipsLomba: 'Hafalkan kalimat perangkum 14 huruf Qamariyah: "اَبْغِ حَجَّكَ وَخَفْ عَقِيْمَهُ" (Abghi hajjaka wa khaf \'aqimah)!'
  },
  {
    id: 'btq-9',
    nomor: 9,
    scopeId: 'btq',
    judul: 'Membaca dan Menulis Huruf Hijaiah',
    subJudul: 'Bentuk Tunggal, Sambung Awal, Tengah, Akhir & Makhārijul Huruf',
    ringkasan: 'Keterampilan dasar BTQ: mengenal 28/29 huruf hijaiah, makharijul huruf (tempat keluar bunyi), kaidah huruf yang tidak bisa disambung ke depan, dan perubahan bentuk tulisan sambung.',
    kontenUtama: `1. **Jumlah Huruf Hijaiah**:
Standar umum 28 huruf (tanpa Hamzah terpisah dan Lam-Alif) atau 29/30 huruf jika Hamzah dihitung tersendiri.

2. **Kaidah Penulisan Huruf Sambung Arab**:
Huruf Arab ditulis dari arah KANAN ke KIRI.
Sebagian besar huruf dapat menyambung dan disambung (memiliki 4 bentuk: tunggal, awal kata, tengah kata, akhir kata).
**6 Huruf Istimewa yang HANYA BISA DISAMBUNG DARI BELAKANG (Tidak Bisa Menyambung ke Huruf Setelahnya)**:
Disingkat: **Alif, Dal, Dzal, Ra, Zay, Wawu (ا - د - ذ - ر - ز - و)**.
Huruf setelah keenam huruf ini wajib ditulis dalam bentuk awal/tunggal baru!

3. **Makhārijul Ḥurūf (5 Tempat Keluarnya Huruf)**:
- **Al-Jauf (الْجَوْف - Rongga Mulut & Tenggorokan)**: Tempat keluar huruf mad panjang (alif, wawu, ya).
- **Al-Ḥalq (الْحَلْق - Tenggorokan)**: Terbagi tenggorokan bawah (ء هـ), tengah (ع ح), atas (غ خ).
- **Al-Lisān (اللِّسَان - Lidah)**: Tempat keluar terbanyak (18 huruf: ق ك ج ش ي ض ل ن ر ط د ت ص ز س ظ ذ ث).
- **Asy-Syafatain (الشَّفَتَيْن - Dua Bibir)**: Huruf م, ب, و, ف.
- **Al-Khaisyūm (الْخَيْشُوْم - Rongga Hidung)**: Tempat keluarnya suara dengung (gunnah).`,
    ayatAtauDalil: [
      {
        arabic: 'مَخَارِجُ الْحُرُوْفِ سَبْعَةَ عَشَرْ ¤ عَلَى الَّذِيْ يَخْتَارُهُ مَنِ اخْتَبَرْ',
        transliteration: 'Makhārijul-ḥurūfi sab\'ata \'asyar # \'Alallażī yakhtāruhū manikhtabar',
        translation: 'Tempat-tempat keluar huruf ada 17 menurut pendapat terpilih para ulama ahli qiraat (Al-Jazariyyah).'
      }
    ],
    poinPenting: [
      'Arah tulisan Arab: Kanan ke kiri.',
      '6 Huruf pemutus sambungan depan: Alif (ا), Dal (د), Dzal (ذ), Ra (ر), Zay (ز), Wawu (و).',
      '5 Wilayah Makhraj: Al-Jauf (rongga), Al-Halq (tenggorokan), Al-Lisan (lidah), Asy-Syafatain (bibir), Al-Khaisyum (hidung/dengung).',
      'Tanda harakat: Fat-hah (a), Kasrah (i), Dhammah (u), Sukun (mati), Tasydid (dobel).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana menyambung huruf k-t-b (ك - ت - ب) vs r-z-q (ر - ز - ق)?',
        insight: 'k-t-b menjadi "كَتَبَ" (ketiganya saling menyambung); sedangkan r-z-q menjadi "رَزَقَ" (ra dan za tidak bisa menyambung ke depannya sehingga ditulis pisah-pisah).',
        practicalExample: 'Latihan menulis kaligrafi dan imla kata arab di buku tulis bergaris.'
      }
    ],
    tipsLomba: 'Kerap diuji: 6 huruf yang tidak bisa menyambung ke huruf sesudahnya dan 5 kelompok makharijul huruf!'
  },
  {
    id: 'btq-10',
    nomor: 10,
    scopeId: 'btq',
    judul: 'Transliterasi Arab-Latin Standar SKB',
    subJudul: 'Pedoman Surat Keputusan Bersama Menag & Mendikbud RI',
    ringkasan: 'Kaidah alih aksara huruf dan harakat Arab ke huruf Latin resmi menurut Keputusan Bersama Menteri Agama dan Menteri P&K No. 158/1987 dan No. 0543b/U/1987. Mengetahui huruf bertitik bawah dan tanda mad makron (ā, ī, ū).',
    kontenUtama: `Pedoman Transliterasi Arab-Latin SKB Menteri Agama dan Menteri Pendidikan dan Kebudayaan RI tahun 1987 merupakan rujukan baku nasional untuk soal-soal Lomba MAPSI:

1. **Konsonan Tunggal Khusus Bertitik Bawah & Tanda Coret**:
- Ḥā’ (ح) = **ḥ** (h bertitik bawah)
- Khā’ (خ) = **kh**
- Żāl (ذ) = **ż** (z bertitik atas)
- Syīn (ش) = **sy**
- Ṣād (ص) = **ṣ** (s bertitik bawah)
- Ḍād (ض) = **ḍ** (d bertitik bawah)
- Ṭā’ (ط) = **ṭ** (t bertitik bawah)
- Ẓā’ (ظ) = **ẓ** (z bertitik bawah)
- ‘Ain (ع) = **‘** (koma terbalik di atas / apostrof tunggal)
- Gain (غ) = **g** / **gh**
- Hamzah (ء) = **’** (apostrof lurus)

2. **Vokal Panjang (Maddah) Menggunakan Makron (Garis di Atas)**:
- Fathah + Alif = **ā** (a bergaris atas). Contoh: قَالَ = qāla.
- Kasrah + Ya sukun = **ī** (i bergaris atas). Contoh: قِيْلَ = qīla.
- Dhammah + Wawu sukun = **ū** (u bergaris atas). Contoh: يَقُوْلُ = yaqūlu.

3. **Diftong (Vokal Rangkap)**:
- Fathah + Wawu sukun = **au**. Contoh: خَوْفٌ = khauf.
- Fathah + Ya sukun = **ai**. Contoh: كَيْفَ = kaifa.

4. **Kaidah Ta\' Marbuthah (ة)**:
- Jika di akhir kata (waqaf), ditransliterasikan menjadi **h**. Contoh: رَحْمَةٌ = raḥmah.
- Jika disambung (washal/idhafah) dengan kata berikutnya, ditransliterasikan menjadi **t**. Contoh: رَحْمَةُ اللّٰهِ = raḥmatullāh.`,
    ayatAtauDalil: [
      {
        arabic: 'بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ = Bismillāhir-raḥmānir-raḥīm',
        transliteration: 'Contoh penerapan transliterasi standar SKB dua Menteri.',
        translation: 'Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.'
      }
    ],
    poinPenting: [
      'Dasar hukum: SKB Menag dan Mendikbud No. 158 Tahun 1987 & No. 0543b/U/1987.',
      'Huruf bertitik bawah: ḥ (ح), ṣ (ص), ḍ (ض), ṭ (ط), ẓ (ظ).',
      'Vokal panjang (Mad) bertanda makron garis atas: ā, ī, ū.',
      'Koma terbalik ‘ untuk \'Ain (ع), apostrof ’ untuk Hamzah (ء).',
      'Ta marbuthah saat waqaf menjadi "h" (raḥmah); saat washal menjadi "t" (raḥmatullāh).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana penulisan transliterasi yang benar untuk kalimat "الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ"?',
        insight: 'Ditulis: "Aṣ-ṣalātu khairum minan-naum" (ṣ bertitik bawah, ā bermakron, diftong au).',
        practicalExample: 'Menulis jawaban esai lomba MAPSI dengan kaidah transliterasi yang presisi tanpa salah tanda baca.'
      }
    ],
    tipsLomba: 'Kerap keluar di tes tulis MAPSI: Mengubah tulisan Arab ke Latin bertitik bawah/makron atau sebaliknya!'
  }
];
