import { MateriItem } from '../types';

export const akhlakData: MateriItem[] = [
  {
    id: 'akhlak-1',
    nomor: 1,
    scopeId: 'akhlak',
    judul: 'Membaca Basmalah dan Ḥamdalah',
    subJudul: 'Adab Mengawali & Mengakhiri Setiap Aktivitas Baik',
    ringkasan: 'Membiasakan membaca "Bismillāhir-raḥmānir-raḥīm" sebelum melakukan setiap perbuatan baik agar bernilai ibadah dan berkah, serta menutupnya dengan "Al-ḥamdu lillāhi rabbil-\'ālamīn" sebagai wujud syukur.',
    kontenUtama: `Rasulullah SAW bersabda: "Kullu amrin żī bālin lā yubda’u fīhi bi bismillāh fahuwa abtar" (Setiap perkara bernilai baik yang tidak diawali dengan bismillah, maka perkara itu terputus dari keberkahan). 

Membaca basmalah mengubah rutinitas biasa (makan, minum, belajar, memakai pakaian, keluar rumah) menjadi amal ibadah berpahala tinggi. Sebaliknya, mengucapkan hamdalah di akhir perbuatan adalah ekspresi kesadaran bahwa segala kemampuan menyelesaikan pekerjaan semata karena rahmat dan kekuatan dari Allah SWT.`,
    ayatAtauDalil: [
      {
        arabic: 'كُلُّ أَمْرٍ ذِي بَالٍ لَا يُبْدَأُ فِيهِ بِبِسْمِ اللهِ فَهُوَ أَبْتَرُ',
        transliteration: 'Kullu amrin żī bālin lā yubda’u fīhi bi bismillāhi fahuwa abtar.',
        translation: 'Setiap perkara penting yang tidak dimulai dengan bismillah, maka ia terputus (dari berkah).'
      }
    ],
    poinPenting: [
      'Basmalah diucapkan sebelum: makan, minum, belajar, naik kendaraan, masuk rumah, mengerjakan ujian.',
      'Arti bismillah: "Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang".',
      'Abtar artinya terputus kebaikan dan keberkahannya.',
      'Hamdalah dibaca setelah: selesai makan, bersin, mendengar kabar baik, menyelesaikan tugas.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana membiasakan basmalah dan hamdalah dalam kegiatan belajar di sekolah?',
        insight: 'Mengawali membuka buku pelajaran atau tes dengan basmalah, lalu mengucapkan hamdalah saat bel selesai ujian dibunyikan.',
        practicalExample: 'Memimpin doa bersama di kelas sebelum pelajaran dimulai.'
      }
    ],
    tipsLomba: 'Kerap keluar lafaz lengkap basmalah/hamdalah beserta arti hadis "fahuwa abtar".'
  },
  {
    id: 'akhlak-2',
    nomor: 2,
    scopeId: 'akhlak',
    judul: 'Empati (Tafahhum & Musyarakah Wijdan)',
    subJudul: 'Kemampuan Merasakan Perasaan dan Penderitaan Sesama',
    ringkasan: 'Empati adalah kemampuan menempatkan diri pada posisi orang lain, merasakan apa yang mereka rasakan, dan tergerak untuk memberikan bantuan serta dukungan moril.',
    kontenUtama: `Dalam Islam, rasa empati diibaratkan seperti satu tubuh (kal jasadil wahid). Sabda Rasulullah SAW: "Perumpamaan kaum mukmin dalam cinta, kasih sayang, dan kelembutan mereka bagaikan satu tubuh. Jika satu anggota tubuh mengeluh sakit, maka seluruh anggota tubuh lainnya ikut merasakan demam dan tidak bisa tidur." (HR. Bukhari & Muslim).

Empati melahirkan akhlak karimah: tidak menyindir orang miskin, menghibur teman yang berduka, serta peka terhadap kebutuhan teman sekelas tanpa menunggu diminta.`,
    ayatAtauDalil: [
      {
        arabic: 'مَثَلُ الْمُؤْمِنِينَ فِي تَوَادِّهِمْ وَتَرَاحُمِهِمْ وَتَعَاطُفِهِمْ مَثَلُ الْجَسَدِ',
        transliteration: 'Maṡalul-mu\'minīna fī tawāddihim wa tarāḥumihim wa ta\'āṭufihim maṡalul-jasad.',
        translation: 'Perumpamaan kaum mukminin dalam hal saling mencintai, menyayangi, dan berempati bagaikan satu tubuh...'
      }
    ],
    poinPenting: [
      'Empati lebih tinggi dari sekadar simpati; empati mendorong aksi nyata membantu.',
      'Hadis perumpamaan: Kal jasadil wahid (bagaikan satu tubuh yang merasakan sakit bersama).',
      'Contoh empati: Menghibur teman yang nilainya jatuh alih-alih mengejeknya.'
    ],
    wigginsFacets: [
      {
        facet: 'Empati',
        questionPrompt: 'Bagaimana merespon teman yang tidak membawa bekal makan siang?',
        insight: 'Membagikan sebagian bekal kita dengan cara halus tanpa membuatnya merasa minder atau malu.',
        practicalExample: 'Mengajak makan bersama dan berbagi lauk pauk.'
      }
    ],
    tipsLomba: 'Kerap disajikan narasi kasus: Sikap yang tepat saat melihat teman tertimpa musibah.'
  },
  {
    id: 'akhlak-3',
    nomor: 3,
    scopeId: 'akhlak',
    judul: 'Jujur (Aṣ-Ṣidq)',
    subJudul: 'Kesesuaian Antara Hati, Lisan, dan Perbuatan',
    ringkasan: 'Jujur adalah pondasi integritas muslim sejati. Kejujuran menuntun pada kebaikan (al-birr), dan kebaikan menuntun menuju surga, sedangkan dusta menuntun pada kehancuran.',
    kontenUtama: `Nabi Muhammad SAW bergelar "Al-Amīn" (orang terpercaya) bahkan sebelum diangkat menjadi nabi karena kejujuran beliau yang luar biasa. 

Dalam hadis riwayat Bukhari & Muslim, Nabi bersabda: "Hendaklah kalian senantiasa bersikap jujur, karena sesungguhnya kejujuran menuntun kepada kebajikan (al-birr), dan kebajikan menuntun ke surga... Dan jauhilah dusta, karena dusta menuntun kepada kejahatan (al-fujur), dan kejahatan menuntun ke neraka."

Macam-macam kejujuran:
1. Jujur dalam niat (ikhlas karena Allah semata).
2. Jujur dalam ucapan (tidak berbohong, tidak melebih-lebihkan fakta).
3. Jujur dalam perbuatan (tidak curang, menepati janji, transparan).`,
    ayatAtauDalil: [
      {
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوا اتَّقُوا اللّٰهَ وَكُوْنُوْا مَعَ الصّٰدِقِيْنَ',
        transliteration: 'Yā ayyuhallażīna āmanuttaqullāha wa kūnū ma\'aṣ-ṣādiqīn',
        translation: 'Wahai orang-orang yang beriman! Bertakwalah kepada Allah, dan bersamalah kamu dengan orang-orang yang benar (jujur). (QS. At-Taubah: 119)'
      }
    ],
    poinPenting: [
      'Gelar Nabi SAW: Al-Amin (terpercaya dan jujur).',
      'Kejujuran -> Al-Birr (kebaikan) -> Al-Jannah (surga).',
      'Dusta -> Al-Fujur (kejahatan) -> An-Nar (neraka).',
      'Bentuk kejujuran pelajar: Mengerjakan ujian sendiri, mengakui kesalahan bila merusak barang orang lain.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Mengapa orang yang berbohong sekali biasanya terpaksa membuat kebohongan berikutnya?',
        insight: 'Karena kebohongan pertama membutuhkan rangkaian kebohongan lain untuk menutupi jejaknya hingga batinnya gelisah tiada henti.',
        practicalExample: 'Memilih berani jujur meski ada konsekuensi teguran daripada berbohong.'
      }
    ],
    tipsLomba: 'Kerap diujikan: QS. At-Taubah 119 (Kūnū ma\'aṣ-ṣādiqīn) dan hadis riwayat Bukhari tentang Al-Birr.'
  },
  {
    id: 'akhlak-4',
    nomor: 4,
    scopeId: 'akhlak',
    judul: 'Berbakti kepada Orang Tua dan Guru',
    subJudul: 'Birrul Wālidain & Memuliakan Pewaris Para Nabi',
    ringkasan: 'Kewajiban paling utama setelah tauhid adalah berbakti kepada kedua orang tua (birrul walidain) serta memuliakan guru yang telah menerangi akal budi kita dengan ilmu.',
    kontenUtama: `Allah SWT berulang kali menggandengkan perintah menyembah Allah dengan perintah berbakti kepada orang tua (QS. Al-Isra': 23-24 dan QS. Luqman: 14). Ridha Allah bergantung pada ridha orang tua, dan murka Allah bergantung pada murka orang tua (Ridhallāhi fī ridhal wālidain).

Ibu mendapatkan penghormatan 3 kali lebih utama dibanding ayah karena tiga fase perjuangan yang luar biasa: mengandung dalam kelemahan yang bertambah-tambah, melahirkan bertaruh nyawa, dan menyusui selama dua tahun.

Memuliakan Guru:
Guru adalah "orang tua rohani" yang mendidik jiwa dan akhlak kita. Sahabat Ali bin Abi Thalib r.a berkata: "Aku adalah hamba sahaya bagi orang yang mengajarkanku walau satu huruf." Adab terhadap guru: mendengarkan saat menjelaskan, mendoakan kebaikan guru, dan tidak membantah dengan kasar.`,
    ayatAtauDalil: [
      {
        arabic: 'وَقَضٰى رَبُّكَ اَلَّا تَعْبُدُوْٓا اِلَّآ اِيَّاهُ وَبِالْوَالِدَيْنِ اِحْسَانًاۗ',
        transliteration: 'Wa qaḍā rabbuka allā ta\'budū illā iyyāhu wa bil-wālidaini iḥsānā',
        translation: 'Dan Tuhanmu telah memerintahkan agar kamu jangan menyembah selain Dia dan hendaklah berbuat baik kepada ibu bapak. (QS. Al-Isra\': 23)'
      }
    ],
    poinPenting: [
      'Dosa durhaka kepada orang tua disebut \'Uququl Walidain (dosa besar kedua setelah syirik).',
      'Kata "Uff" / "Ah" sekalipun dilarang diucapkan kepada orang tua (Falā taqul lahumā uff).',
      'Ibu dimuliakan 3 kali lipat (hadis: Ummu-ka, Ummu-ka, Ummu-ka, tsumma Abu-ka).',
      'Berbakti setelah orang tua wafat: Mendoakan ampunan, menyambung tali silaturahmi teman orang tua, dan bersedekah atas nama mereka.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana wujud nyata sopan santun kepada guru saat berpapasan di lorong sekolah?',
        insight: 'Mengucapkan salam dengan tersenyum ramah, membungkukkan badan sedikit sebagai tanda hormat, dan membantu membawakan buku jika guru kerepotan.',
        practicalExample: 'Mencium punggung tangan guru dengan takzim.'
      }
    ],
    tipsLomba: 'Perhatikan dalil QS. Al-Isra\': 23-24, hadis "Ridhallahi fi ridhal walidain", dan nama dosa durhaka (\'Uququl Walidain).'
  },
  {
    id: 'akhlak-5',
    nomor: 5,
    scopeId: 'akhlak',
    judul: 'Menghormati Orang Lain (Al-Iḥtirām)',
    subJudul: 'Adab Berinteraksi: Menghargai yang Tua & Menyayangi yang Muda',
    ringkasan: 'Prinsip kesantunan sosial dalam Islam: yang lebih tua dihormati karena kematangan iman dan amalnya, yang lebih muda disayangi dan dibimbing dengan kelembutan.',
    kontenUtama: `Rasulullah SAW bersabda: "Laisa minnā man lam yarḥam ṣaghīranā wa yuraqqir kabīranā" (Bukan termasuk golongan kami orang yang tidak menyayangi yang lebih muda di antara kami dan tidak menghormati yang lebih tua). (HR. At-Tirmidzi).

Menghormati orang lain mencakup:
- Menjaga tutur kata agar tidak menyakiti perasaan orang lain.
- Memberikan tempat duduk di kendaraan umum kepada lansia, ibu hamil, atau difabel.
- Mendengarkan saat orang lain sedang berbicara tanpa memotong pembicaraan.
- Memanggil orang dengan panggilan kehormatan yang baik, bukan julukan buruk (laqab).`,
    ayatAtauDalil: [
      {
        arabic: 'لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا وَيُوَقِّرْ كَبِيرَنَا',
        transliteration: 'Laisa minnā man lam yarḥam ṣagīranā wa yuwaqqir kabīranā.',
        translation: 'Bukan bagian dari kami orang yang tidak menyayangi yang muda dan tidak menghormati yang tua.'
      }
    ],
    poinPenting: [
      'Menghormati lansia dan menyayangi adik kelas/kanak-kanak.',
      'Larangan memberi gelar buruk (QS. Al-Hujurat: 11 - Wa la tanabazu bil alqab).',
      'Menghargai privasi dan hak milik orang lain.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Mengapa orang yang lebih tua wajib dihormati dalam Islam?',
        insight: 'Karena mereka telah mendahului kita dalam berbuat kebajikan, menanggung beban kehidupan, dan memiliki pengalaman yang patut dipelajari.',
        practicalExample: 'Mempersilakan kakek/nenek berjalan atau antre lebih dahulu.'
      }
    ],
    tipsLomba: 'Hafalkan teks hadis: "Laisa minna man lam yarham shaghirana wa yuwaqqir kabirana".'
  },
  {
    id: 'akhlak-6',
    nomor: 6,
    scopeId: 'akhlak',
    judul: 'Menghargai dalam Keragaman (Tasāmuḥ)',
    subJudul: 'Toleransi Positif dalam Kebhinekaan',
    ringkasan: 'Tasamuh adalah sikap lapang dada, tenggang rasa, dan menghormati perbedaan suku, budaya, bahasa, dan pendapat di tengah masyarakat majemuk.',
    kontenUtama: `Allah SWT menciptakan alam dan manusia dalam aneka ragam warna (QS. Ar-Rum: 22). Keragaman adalah rahmat dan tanda kebesaran Allah. Tasamuh mengajarkan:
- Sikap adil dan tidak memaksakan kehendak kepada orang lain.
- Tidak mencela tradisi positif adat setempat selama tidak melanggar syariat Islam.
- Menjaga kerukunan antarumat beragama dan intern umat beragama.`,
    ayatAtauDalil: [
      {
        arabic: 'وَمِنْ اٰيٰتِهٖ خَلْقُ السَّمٰوٰتِ وَالْاَرْضِ وَاخْتِلَافُ اَلْسِنَتِكُمْ وَاَلْوَانِكُمْ',
        transliteration: 'Wa min āyātihī khalqus-samāwāti wal-arḍi wakhtilāfu alsinatikum wa alwānikum...',
        translation: 'Dan di antara tanda-tanda kekuasaan-Nya ialah penciptaan langit dan bumi serta perbedaan bahasa dan warna kulitmu. (QS. Ar-Rum: 22)'
      }
    ],
    poinPenting: [
      'Istilah toleransi dalam Islam: Tasamuh.',
      'Perbedaan bahasa dan warna kulit adalah tanda kebesaran Allah (Ayatullah).',
      'Batas tasamuh: Mengizinkan pemeluk agama lain beribadah sesuai keyakinan tanpa mengorbankan akidah tauhid sendiri.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Bagaimana memandang perbedaan suku dalam proyek kelompok sekolah?',
        insight: 'Memandang keragaman sebagai kekuatan kolaborasi: tiap anggota menyumbangkan ide kreatif dan keunikan perspektif daerahnya.',
        practicalExample: 'Menyusun pameran budaya daerah bersama teman sekelas secara harmonis.'
      }
    ],
    tipsLomba: 'Bedakan konsep toleransi (Tasamuh), tolong menolong (Ta\'awun), dan persaudaraan (Ukhuwah).'
  },
  {
    id: 'akhlak-7',
    nomor: 7,
    scopeId: 'akhlak',
    judul: 'Memberi dan Meminta Maaf',
    subJudul: 'Berlapang Dada (Al-\'Afw) & Menghilangkan Dendam',
    ringkasan: 'Kemuliaan seorang ksatria muslim: tidak gengsi mengakui kesalahan dan segera meminta maaf, serta memiliki kebesaran hati untuk memaafkan orang lain tanpa syarat.',
    kontenUtama: `Rasulullah SAW bersabda: "Tidaklah Allah menambah kepada seorang hamba yang suka memaafkan melainkan kemuliaan, dan tidaklah seseorang bersikap rendah hati karena Allah melainkan Allah akan mengangkat derajatnya." (HR. Muslim).

Menahan amarah (wal kazhiminal ghaizha) dan memaafkan kesalahan manusia (wal \'afina \'anin nas) adalah ciri orang yang bertakwa (QS. Ali 'Imran: 134). Meminta maaf bukan tanda kelemahan, melainkan bukti kedewasaan moral.`,
    ayatAtauDalil: [
      {
        arabic: 'وَالْكٰظِمِيْنَ الْغَيْظَ وَالْعَافِيْنَ عَنِ النَّاسِۗ وَاللّٰهُ يُحِبُّ الْمُحْسِنِيْنَ',
        transliteration: 'Wal-kāẓimīnal-gaiẓa wal-\'āfīna \'anin-nās, wallāhu yuḥibbul-muḥsinīn.',
        translation: '...dan orang-orang yang menahan amarahnya dan memaafkan (kesalahan) orang lain. Dan Allah mencintai orang-orang yang berbuat kebaikan. (QS. Ali \'Imran: 134)'
      }
    ],
    poinPenting: [
      'Al-Kazhiminal ghaizh: Mampu menahan ledakan emosi saat marah.',
      'Al-\'Afina \'aninnas: Berjiwa besar memaafkan orang lain.',
      'Sifat pemaaf justru mengangkat kemuliaan derajat seseorang di hadapan Allah dan manusia.',
      'Adab minta maaf: Ikhlas, mengakui kekhilafan, dan berjanji tidak mengulangi.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana bertindak saat tersenggol teman hingga minuman tumpah?',
        insight: 'Mengatur napas, meredam emosi seketika, dan tersenyum sambil berkata "Tidak apa-apa, ayo kita bersihkan bersama".',
        practicalExample: 'Tidak membalas menyenggol atau melontarkan kata makian.'
      }
    ],
    tipsLomba: 'Kerap diujikan: QS. Ali \'Imran 134 tentang tiga ciri mukmin muhsinin!'
  },
  {
    id: 'akhlak-8',
    nomor: 8,
    scopeId: 'akhlak',
    judul: 'Berterima Kasih (Asy-Syukr)',
    subJudul: 'Mensyukuri Nikmat Allah & Mengapresiasi Bantuan Manusia',
    ringkasan: 'Orang yang tidak berterima kasih kepada sesama manusia yang menolongnya hakikatnya belum bersyukur kepada Allah SWT. Mengucapkan ucapan mulia seperti Jazakallahu Khairan.',
    kontenUtama: `Rasulullah SAW bersabda: "Lā yasykurullāha man lā yasykurun-nās" (Tidak bersyukur kepada Allah orang yang tidak bersyukur / berterima kasih kepada manusia). (HR. Abu Dawud & At-Tirmidzi).

Bentuk terima kasih:
1. Mengucapkan kalimat doa: "Jazākallāhu khairan" (Semoga Allah membalasmu dengan kebaikan yang banyak).
2. Membalas budi kebaikan sesuai kemampuan.
3. Menghargai jerih payah orang lain (orang tua yang memasak makanan, petugas kebersihan sekolah yang menyapu).`,
    ayatAtauDalil: [
      {
        arabic: 'لَا يَشْكُرُ اللهَ مَنْ لَا يَشْكُرُ النَّاسَ',
        transliteration: 'Lā yasykurullāha man lā yasykurun-nās.',
        translation: 'Tidak dikatakan bersyukur kepada Allah orang yang tidak berterima kasih kepada manusia.'
      }
    ],
    poinPenting: [
      'Terima kasih kepada manusia adalah syarat sah kesyukuran kepada Allah.',
      'Doa terbaik untuk orang yang berjasa: Jazakallahu khairan.',
      'Membiasakan kata "Terima kasih", "Tolong", dan "Maaf" sebagai tiga kata ajaib budi pekerti.'
    ],
    wigginsFacets: [
      {
        facet: 'Empati',
        questionPrompt: 'Bagaimana dampak ucapan terima kasih kita kepada satpam atau petugas kebersihan sekolah?',
        insight: 'Mereka merasa dihargai martabat dan lelahnya, sehingga bekerja dengan senyuman dan bahagia.',
        practicalExample: 'Mengucapkan terima kasih setiap kali menerima kembali kartu parkir atau ruang kelas yang disapu bersih.'
      }
    ],
    tipsLomba: 'Hafalkan matan hadis "La yasykurullaha man la yasykurunnas"!'
  },
  {
    id: 'akhlak-9',
    nomor: 9,
    scopeId: 'akhlak',
    judul: 'Disiplin (Al-Inthibāth)',
    subJudul: 'Ketaatan pada Tata Tertib & Manajemen Waktu yang Tepat',
    ringkasan: 'Disiplin adalah kunci sukses dunia dan akhirat. Waktu dalam Islam sangat berharga sehingga Allah bersumpah demi waktu dalam surah Al-\'Ashr.',
    kontenUtama: `Ibadah dalam Islam melatih kedisiplinan yang amat ketat:
- Salat memiliki batas waktu awal dan akhir yang pasti (QS. An-Nisa: 103).
- Puasa terikat waktu imsak dan azan magrib yang presisi per menit.
- Haji terikat hari dan tempat yang ditentukan (wukuf di Arafah pada 9 Zulhijjah).

Penerapan disiplin siswa:
1. Disiplin waktu (hadir tepat waktu di sekolah, salat di awal waktu).
2. Disiplin tata tertib (memakai seragam rapi, mengumpulkan tugas sesuai tenggat).
3. Disiplin ibadah (istiqamah salat duha, membaca Al-Qur'an harian).`,
    ayatAtauDalil: [
      {
        arabic: 'اِنَّ الصَّلٰوةَ كَانَتْ عَلَى الْمُؤْمِنِيْنَ كِتٰبًا مَّوْقُوْتًا',
        transliteration: 'Innaṣ-ṣalāta kānat \'alal-mu\'minīna kitābam mauqūtā.',
        translation: 'Sungguh, salat itu adalah kewajiban yang ditentukan waktunya atas orang-orang yang beriman. (QS. An-Nisa: 103)'
      }
    ],
    poinPenting: [
      'Waktu adalah modal utama manusia (QS. Al-\'Ashr: 1-3).',
      'Ibadah salat melatih manajemen waktu.',
      'Sifat disiplin melahirkan karakter istiqamah dan profesionalisme (itqan).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana menyusun jadwal belajar agar disiplin tanpa terdistraksi gadget?',
        insight: 'Membuat jadwal harian realistis, mematikan notifikasi medsos saat jam belajar, dan memberi jeda istirahat salat tepat waktu.',
        practicalExample: 'Menyelesaikan pekerjaan rumah di sore hari sebelum bermain.'
      }
    ],
    tipsLomba: 'Kaitkan korelasi antara kewajiban salat tepat waktu (kitaban mauquta) dengan pembentukan karakter disiplin santri.'
  },
  {
    id: 'akhlak-10',
    nomor: 10,
    scopeId: 'akhlak',
    judul: 'Gaya Hidup Bersih (Aṭ-Ṭahārah & An-Nazhāfah)',
    subJudul: 'Kebersihan adalah Sebagian dari Iman',
    ringkasan: 'Islam adalah agama kebersihan. Seorang muslim dituntut menjaga kebersihan badan, pakaian, tempat tinggal, makanan, serta kebersihan hati dari dosa.',
    kontenUtama: `Rasulullah SAW bersabda: "Aṭ-ṭahūru syaṭrul īmān" (Kesucian / kebersihan itu adalah separuh dari keimanan). (HR. Muslim).

Aspek Kebersihan dalam Islam:
1. **Thaharah Lahiriyah (Fisik)**: Mandi, gosok gigi (siwak), memotong kuku, mencuci tangan sebelum makan, membuang sampah pada tempatnya.
2. **Thaharah Ma'nawiyah (Hati)**: Membersihkan jiwa dari riya, dengki, ujub, dan sombong melalui istigfar dan taubat nasuha.
3. Menjaga kebersihan tempat umum: Melarang buang hajat di sumber air mengalir, jalan umum, atau tempat orang berteduh (tiga tempat terlaknat menurut hadis).`,
    ayatAtauDalil: [
      {
        arabic: 'اِنَّ اللّٰهَ يُحِبُّ التَّوَّابِيْنَ وَيُحِبُّ الْمُتَطَهِّرِيْنَ',
        transliteration: 'Innallāha yuḥibbut-tawwābīna wa yuḥibbul-mutaṭahhirīn.',
        translation: 'Sungguh, Allah menyukai orang yang tobat dan menyukai orang yang menyucikan diri. (QS. Al-Baqarah: 222)'
      }
    ],
    poinPenting: [
      'At-Tahuru syathrul iman: Bersuci adalah separuh keimanan.',
      'Sunnah fitrah kebersihan: Memotong kuku, mencukur bulu ketiak/kemaluan, bersiwak, istinja\'.',
      'Larangan mencemari sumber air minum dan tempat berteduh umum.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana siswa menerapkan hidup bersih di lingkungan kantin sekolah?',
        insight: 'Mencuci tangan dengan sabun sebelum dan sesudah makan, serta mengembalikan piring kotor dan membuang tisu ke tempat sampah.',
        practicalExample: 'Operasi semut membersihkan sampah di kelas setiap pagi.'
      }
    ],
    tipsLomba: 'Hafalkan teks hadis "At-Thahuru syathrul iman" dan QS. Al-Baqarah 222 (Innallaha yuhibbut tawwabina wa yuhibbul mutathahhirin).'
  },
  {
    id: 'akhlak-11',
    nomor: 11,
    scopeId: 'akhlak',
    judul: 'Kalimah Ṭayyibah',
    subJudul: 'Rangkaian Kalimat Baik & Zikir Penyejuk Jiwa',
    ringkasan: 'Kalimah thayyibah adalah ucapan-ucapan mulia yang mendatangkan pahala, menenteramkan batin, dan disukai para malaikat, diucapkan pada momen-momen yang tepat.',
    kontenUtama: `Kalimah thayyibah bagaikan pohon yang akarnya menghunjam ke bumi dan cabangnya menjulang ke langit (QS. Ibrahim: 24). Rangkaian kalimat thayyibah utama:
1. **Basmalah** (Bismillāhir-raḥmānir-raḥīm): Memulai segala aktivitas baik.
2. **Ḥamdalah** (Al-ḥamdu lillāh): Bersyukur atas nikmat, selesai makan, bersin.
3. **Tasbīḥ** (Subḥānallāh): Menyucikan Allah saat melihat sesuatu yang ganjil, heran, atau bertasbih.
4. **Tahmīd** (Al-ḥamdu lillāh): Puji-pujian hanya milik Allah.
5. **Takbīr** (Allāhu Akbar): Mengagungkan Allah saat takjub, mendaki tempat tinggi, hari raya.
6. **Tahlīl** (Lā ilāha illallāh): Kalimat tauhid, kunci surga.
7. **Istigfār** (Astaghfirullāh al-‘Aẓīm): Memohon ampun saat berbuat dosa atau lupa.
8. **Ḥauqalah** (Lā ḥaula wa lā quwwata illā billāh): Menyerahkan daya upaya kepada Allah saat menghadapi kesulitan.
9. **Tarjī‘ / Istirjā‘** (Innā lillāhi wa innā ilaihi rāji‘ūn): Mengingat kematian / saat tertimpa musibah.
10. **Māsya Allāh**: Takjub melihat karya atau karunia Allah pada orang lain.
11. **Insyā Allāh**: Berjanji melakukan sesuatu di masa mendatang.`,
    ayatAtauDalil: [
      {
        arabic: 'اَلَيْهِ يَصْعَدُ الْكَلِمُ الطَّيِّبُ وَالْعَمَلُ الصَّالِحُ يَرْفَعُهٗ',
        transliteration: 'Ilaihi yaṣ\'adul-kalimut-ṭayyibu wal-\'amaluṣ-ṣāliḥu yarfa\'uh.',
        translation: 'Kepada-Nyalah naik perkataan-perkataan yang baik (kalimah thayyibah) dan amal yang saleh dinaikkan-Nya. (QS. Fatir: 10)'
      }
    ],
    poinPenting: [
      'Pohon kalimah thayyibah (QS. Ibrahim 24-25).',
      'Hauqalah: La haula wa la quwwata illa billah (simpanan harta surga).',
      'Istirja\': Inna lillahi wa inna ilaihi raji\'un (saat terkena musibah, piring pecah, kabar duka).',
      'Insya Allah: Menggantungkan janji masa depan pada kehendak Allah (QS. Al-Kahfi: 23-24).'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Kapan tepatnya kita mengucapkan Subhanallah vs Masya Allah?',
        insight: 'Subhanallah (Maha Suci Allah) diucapkan saat heran/melihat hal yang tidak pantas bagi Allah atau peringatan kesalahan; Masya Allah (atas kehendak Allah ini terjadi) diucapkan saat takjub melihat pemandangan indah atau kelebihan anak/teman.',
        practicalExample: 'Melihat panorama gunung yang megah mengucap "Masya Allah Tabarakallah".'
      }
    ],
    tipsLomba: 'Kerap diuji mencocokkan situasi peristiwa dengan kalimat thayyibah yang semestinya diucapkan!'
  },
  {
    id: 'akhlak-12',
    nomor: 12,
    scopeId: 'akhlak',
    judul: 'Menolong Sesama (At-Ta‘āwun)',
    subJudul: 'Saling Tolong-Menolong dalam Kebaikan & Takwa',
    ringkasan: 'Ta\'awun adalah prinsip saling bantu antarmanusia dalam kebaikan dan ketakwaan, serta haram tolong-menolong dalam perbuatan dosa dan permusuhan.',
    kontenUtama: `Allah SWT berfirman dalam QS. Al-Ma'idah ayat 2: "Wa ta‘āwanū ‘alal-birri wat-taqwā, wa lā ta‘āwanū ‘alal-iṡmi wal-‘udwān" (Dan tolong-menolonglah kamu dalam kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan).

Hadis Nabi SAW: "Allahu fī ‘aunil-‘abdi mā kānal-‘abdu fī ‘auni akhīhi" (Allah senantiasa menolong seorang hamba selama hamba tersebut menolong saudaranya). (HR. Muslim).

Bentuk tolong-menolong:
1. Tenaga (gotong royong membersihkan selokan).
2. Harta (memberi sedekah kepada korban bencana alam).
3. Ilmu dan nasihat (membimbing teman yang kesulitan memahami pelajaran matematika atau tajwid).`,
    ayatAtauDalil: [
      {
        arabic: 'وَتَعَاوَنُوْا عَلَى الْبِرِّ وَالتَّقْوٰىۖ وَلَا تَعَاوَنُوْا عَلَى الْاِثْمِ وَالْعُدْوَانِ',
        transliteration: 'Wa ta\'āwanū \'alal-birri wat-taqwā, wa lā ta\'āwanū \'alal-iṡmi wal-\'udwān.',
        translation: 'Dan tolong-menolonglah kamu dalam mengerjakan kebajikan dan takwa, dan jangan tolong-menolong dalam berbuat dosa dan permusuhan. (QS. Al-Ma\'idah: 2)'
      }
    ],
    poinPenting: [
      'Dalil utama: QS. Al-Ma\'idah ayat 2.',
      'Syarat tolong menolong: Dalam al-birr (kebajikan) dan at-taqwa.',
      'Larangan tolong menolong: Dalam al-itsmi (dosa) dan al-\'udwan (permusuhan/kejahatan). Contoh dilarang: memberi sontekan saat ujian.',
      'Jaminan pertolongan Allah bagi orang yang gemar menolong saudaranya.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Apakah memberikan contekan kepada sahabat dekat termasuk bentuk tolong menolong?',
        insight: 'Bukan! Itu adalah tolong menolong dalam kebohongan dan dosa (al-itsmi wal \'udwan) yang merusak mental sahabat.',
        practicalExample: 'Mengajak belajar bersama sebelum ujian tiba sebagai bentuk ta\'awun yang sejati.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal HOTS: Menguji pemahaman siswa atas batas halal/haramnya bentuk ta\'awun di lingkungan sekolah!'
  },
  {
    id: 'akhlak-13',
    nomor: 13,
    scopeId: 'akhlak',
    judul: 'Menghindari Sifat Munafik (An-Nifāq)',
    subJudul: 'Tiga Tanda Orang Munafik & Bahayanya bagi Batin',
    ringkasan: 'Nifaq adalah menampakkan kebaikan atau keislaman di luar namun menyembunyikan kekafiran atau kejahatan di dalam hati. Menghafal dan menjauhi 3 ciri utama orang munafik.',
    kontenUtama: `Rasulullah SAW bersabda dalam hadis riwayat Bukhari dan Muslim:
"Āyatul-munāfiqi ṡalāṡun: iżā ḥaddaṡa każaba, wa iżā wa‘ada akhlafa, wa iżā’tumina khāna" (Tanda-tanda orang munafik ada tiga: apabila berbicara ia berdusta, apabila berjanji ia mengingkari, dan apabila dipercaya ia berkhianat).

Pembagian Nifaq:
1. **Nifaq I'tiqadi (Akidah / Besar)**: Pura-pura muslim padahal hatinya kafir benci Islam (seperti gembong munafik Abdullah bin Ubay bin Salul pada zaman Nabi). Pelakunya kekal di dasar neraka Jahannam (QS. An-Nisa: 145 - Fi darkil asfali minan nar).
2. **Nifaq 'Amali (Perbuatan / Kecil)**: Orang mukmin yang memiliki perangai seperti perangai munafik (suka ingkar janji, berdusta, curang).`,
    ayatAtauDalil: [
      {
        arabic: 'اٰيَةُ الْمُنَافِقِ ثَلَاثٌ: اِذَا حَدَّثَ كَذَبَ، وَاِذَا وَعَدَ اَخْلَفَ، وَاِذَا اؤْتُمِنَ خَانَ',
        transliteration: 'Āyatul-munāfiqi ṡalāṡ: iżā ḥaddaṡa każaba, wa iżā wa\'ada akhlafa, wa iżā\'tumina khāna.',
        translation: 'Tanda orang munafik ada tiga: jika berbicara berdusta, jika berjanji mengingkari, dan jika dipercaya berkhianat.'
      }
    ],
    poinPenting: [
      'Tiga tanda munafik: Dusta (kadzaba), Ingkar janji (akhlafa), Khianat amanah (khana).',
      'Balasan orang munafik di akhirat: Di dasar jurang neraka yang paling bawah (ad-darkul asfal minan nar).',
      'Tokoh munafik Madinah: Abdullah bin Ubay bin Salul.',
      'Cara membentengi diri: Senantiasa menjaga lisan, menepati janji, dan memegang amanah.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Bagaimana cara mengevaluasi diri agar terhindar dari benih-benih nifaq?',
        insight: 'Memastikan janji yang diucapkan ditepati, tidak mengumbar janji palsu, dan bersikap jujur saat sendirian maupun di hadapan publik.',
        practicalExample: 'Jika berjanji mengembalikan buku perpustakaan hari Rabu, mengembalikannya tepat waktu.'
      }
    ],
    tipsLomba: 'Hafalkan teks matan hadis 3 ciri munafik dan istilah balasan neraka "Ad-Darkul Asfal" (QS. An-Nisa: 145).'
  },
  {
    id: 'akhlak-14',
    nomor: 14,
    scopeId: 'akhlak',
    judul: 'Berteman Tanpa Membedakan Agama',
    subJudul: 'Ukhuwah Insāniyyah & Batasan Muamalah Sosial',
    ringkasan: 'Prinsip persaudaraan kemanusiaan (Ukhuwah Insaniyyah/Basyariyyah) dalam kehidupan berbangsa: bersikap adil, ramah, dan saling menolong dengan teman non-muslim selama tidak memerangi agama kita.',
    kontenUtama: `Allah SWT berfirman dalam QS. Al-Mumtahanah ayat 8:
"Allah tidak melarang kamu berbuat baik dan berlaku adil terhadap orang-orang yang tidak memerangimu dalam urusan agama dan tidak mengusir kamu dari kampung halamanmu. Sesungguhnya Allah mencintai orang-orang yang berlaku adil."

Trilogi Persaudaraan dalam Islam:
1. **Ukhuwah Islamiyyah**: Persaudaraan sesama pemeluk Islam.
2. **Ukhuwah Wathaniyyah**: Persaudaraan sebangsa dan setanah air Indonesia.
3. **Ukhuwah Insaniyyah / Basyariyyah**: Persaudaraan sesama manusia sebagai keturunan Nabi Adam a.s.

Dalam pertemanan di sekolah:
- Kita boleh dan dianjurkan belajar bersama, bermain, berolahraga, dan berbagi makanan halal dengan teman non-muslim.
- Kita menghormati saat mereka beribadah menurut cara mereka.
- Batasan yang dijaga: Tidak ikut serta dalam ritual peribadatan mereka (prinsip lakum dinukum waliyadin).`,
    ayatAtauDalil: [
      {
        arabic: 'لَا يَنْهٰىكُمُ اللّٰهُ عَنِ الَّذِيْنَ لَمْ يُقَاتِلُوْكُمْ فِى الدِّيْنِ وَلَمْ يُخْرِجُوْكُمْ مِّنْ دِيَارِكُمْ اَنْ تَبَرُّوْهُمْ وَتُقْسِطُوْٓا اِلَيْهِمْۗ',
        transliteration: 'Lā yanhākumullāhu \'anil-lażīna lam yuqātilūkum fid-dīni wa lam yukhrijūkum min diyārikum an tabarrūhum wa tuqsiṭū ilaihim...',
        translation: 'Allah tidak melarang kamu berbuat baik dan berlaku adil terhadap orang-orang yang tidak memerangimu dalam urusan agama... (QS. Al-Mumtahanah: 8)'
      }
    ],
    poinPenting: [
      'Dalil legalitas berbuat baik kepada non-muslim: QS. Al-Mumtahanah ayat 8.',
      'Konsep Ukhuwah: Islamiyyah, Wathaniyyah, Insaniyyah.',
      'Sikap terhadap tetangga/teman non-muslim: Menjenguk saat sakit, berbagi rezeki makanan halal, menjaga toleransi ketenteraman lingkungan.'
    ],
    wigginsFacets: [
      {
        facet: 'Perspektif',
        questionPrompt: 'Mengapa Islam melarang bersikap kasar kepada warga non-muslim yang hidup damai?',
        insight: 'Karena Islam diturunkan sebagai rahmat bagi seluruh alam (Rahmatan lil \'Alamin). Kedamaian dan keadilan adalah pesan universal Islam.',
        practicalExample: 'Bekerja sama dalam piket kelas atau lomba kebersihan sekolah tanpa membeda-bedakan keyakinan.'
      }
    ],
    tipsLomba: 'Kerap ditanyakan dalil QS. Al-Mumtahanah: 8 dan tiga macam konsep ukhuwah!'
  },
  {
    id: 'akhlak-15',
    nomor: 15,
    scopeId: 'akhlak',
    judul: 'Peduli Lingkungan Hidup (Ri‘āyatul Bī’ah)',
    subJudul: 'Amanah Khalifah: Menjaga Kelestarian Alam & Sedekah Tumbuhan',
    ringkasan: 'Manusia diangkat sebagai khalifah fil ardh bertugas memakmurkan bumi, bukan membuat kerusakan (fasād fil ard). Hemat air wudhu, menanam pohon, dan mengelola sampah.',
    kontenUtama: `Rasulullah SAW bersabda dalam hadis shahih riwayat Bukhari:
"Tidaklah seorang muslim menanam pohon atau menanam tanaman, lalu buahnya dimakan oleh burung, manusia, atau binatang ternak, melainkan hal itu menjadi sedekah baginya."

Bahkan saat Rasulullah melihat sahabat Sa'ad bin Abi Waqqas berwudhu di sungai, Nabi menegur: "Jangan berlebih-lebihan (israf) dalam memakai air!" Sa'ad bertanya: "Apakah dalam wudhu ada pemborosan?" Nabi menjawab: "Ya, meskipun engkau berada di sungai yang mengalir deras."

Tiga Perilaku Santri Peduli Lingkungan:
1. Hemat energi dan air (mematikan keran saat selesai wudhu, mematikan lampu siang hari).
2. Membuang sampah terpilah (organik dan anorganik) serta mengurangi sampah plastik.
3. Melakukan penghijauan (menanam bunga/tanaman obat keluarga di pekarangan sekolah).`,
    ayatAtauDalil: [
      {
        arabic: 'ظَهَرَ الْفَسَادُ فِى الْبَرِّ وَالْبَحْرِ بِمَا كَسَبَتْ اَيْدِى النَّاسِ',
        transliteration: 'Ẓaharal-fasādu fil-barri wal-baḥri bimā kasabat aidin-nās...',
        translation: 'Telah tampak kerusakan di darat dan di laut disebabkan karena perbuatan tangan manusia... (QS. Ar-Rum: 41)'
      }
    ],
    poinPenting: [
      'Kerusakan alam akibat ulah manusia (QS. Ar-Rum: 41 - Fasad fil barri wal bahr).',
      'Menanam pohon dinilai sebagai sedekah jariyah yang pahalanya mengalir saat dimakan makhluk hidup.',
      'Larangan pemborosan air wudhu sekalipun di tepi sungai mengalir.',
      'Larangan menebang pohon secara serampangan bahkan dalam situasi peperangan sekalipun.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana santri menerapkan prinsip hemat air saat mengambil air wudhu di masjid?',
        insight: 'Membuka kran air secukupnya (tidak terlalu besar), membasuh anggota wudhu dengan teliti 3 kali, dan segera mematikan kran rapat setelah selesai.',
        practicalExample: 'Mengingatkan teman jika melihat kran air bak mandi meluber.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal CBT MAPSI: Hadis menanam pohon sebagai sedekah dan larangan israf dalam berwudhu!'
  }
];
