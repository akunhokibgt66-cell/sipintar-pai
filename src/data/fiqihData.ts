import { MateriItem } from '../types';

export const fiqihData: MateriItem[] = [
  {
    id: 'fiqih-1',
    nomor: 1,
    scopeId: 'fiqih',
    judul: 'Ażan dan Ikamah',
    subJudul: 'Seruan Panggilan Salat & Penanda Dimulainya Ibadah',
    ringkasan: 'Azan adalah pemberitahuan masuknya waktu salat fardu dengan lafaz tertentu, sedangkan ikamah adalah seruan penanda salat berjamaah segera didirikan.',
    kontenUtama: `Hukum mengumandangkan azan dan ikamah adalah sunnah muakkadah bagi salat fardhu (sebagian ulama fardhu kifayah bagi masyarakat muslim). 

Syarat Muazin: Muslim, berakal, laki-laki, mumayyiz. Sunnah muazin: suci dari hadas, menghadap kiblat, berdiri, bersuara merdu, meletakkan jari di telinga, menoleh ke kanan saat mengucapkan "Hayya 'alash-shalah" dan menoleh ke kiri saat mengucapkan "Hayya 'alal-falah".

Keistimewaan lafaz azan Subuh ditambah tatswib: "Aṣ-ṣalātu khairum minan-naum" (Salat lebih baik daripada tidur) sebanyak 2 kali setelah Hayya 'alal falah.

Doa setelah azan: Memohon wasilah dan fadhilah serta maqam terpuji bagi Nabi Muhammad SAW. Orang yang mendengarkan azan disunnahkan menjawab ucapan muazin semisal yang diucapkan, kecuali pada kedua "Hay\'alatain" (Hayya \'alash shalah & Hayya \'alal falah) dijawab dengan Hauqalah: "Lā ḥaula wa lā quwwata illā billāhil-\'aliyyil-\'aẓīm". Pada tatswib subuh dijawab: "Ṣadaqta wa bararta".`,
    ayatAtauDalil: [
      {
        arabic: 'اِذَا نُوْدِيَ لِلصَّلٰوةِ مِنْ يَّوْمِ الْجُمُعَةِ فَاسْعَوْا اِلٰى ذِكْرِ اللّٰهِ',
        transliteration: 'Iżā nūdiya liṣ-ṣalāti miy yaumil-jumu\'ati fas\'au ilā żikrillāh...',
        translation: 'Wahai orang-orang yang beriman! Apabila telah diseru untuk melaksanakan salat pada hari Jumat, maka segeralah kamu mengingat Allah... (QS. Al-Jumu\'ah: 9)'
      }
    ],
    poinPenting: [
      'Azan: Pemberitahuan masuk waktu salat fardu. Ikamah: Tanda salat siap ditegakkan.',
      'Muazin pertama dalam Islam: Sahabat Bilal bin Rabah r.a.',
      'Lafaz khusus subuh: Tatswib (Ash-shalatu khairum minan naum) 2x.',
      'Jawaban Hay\'alatain: La haula wa la quwwata illa billah.',
      'Doa setelah azan mendatangkan hak syafaat Rasulullah SAW di hari kiamat.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana adab seorang muslim saat mendengar azan berkumandang?',
        insight: 'Menghentikan pembicaraan, mendengarkan dengan khusyuk, menirukan lafaz muazin, berdoa setelahnya, lalu bersiap mengambil wudhu.',
        practicalExample: 'Mematikan musik atau game di smartphone saat mendengar suara azan dari masjid.'
      }
    ],
    tipsLomba: 'Kerap diujikan: Nama sahabat muazin pertama, lafaz tatswib azan subuh beserta jawabannya, dan tata cara menoleh saat hay\'alatain.'
  },
  {
    id: 'fiqih-2',
    nomor: 2,
    scopeId: 'fiqih',
    judul: 'Salat Fardu',
    subJudul: 'Tiang Agama: Syarat Wajib, Syarat Sah, Rukun & Pembatal Salat',
    ringkasan: 'Salat fardu 5 waktu adalah ibadah fisik dan spiritual utama, tiang agama Islam (ash-shalatu \'imaduddin). Menguasai 13/17 rukun salat, syarat sah, dan hal yang membatalkannya.',
    kontenUtama: `Salat adalah tiang agama (ash-shalātu ‘imāduddīn). Ibadah agung ini diawali dengan takbiratul ihram dan diakhiri dengan salam dengan rincian hukum fiqih komprehensif:

1. **SYARAT WAJIB SALAT (Orang yang terkena beban kewajiban)**:
   - Islam (tidak wajib atas orang kafir dalam hukum duniawi).
   - Bālig (telah mencapai tanda kedewasaan mimpi basah/haid/15 tahun).
   - Berakal sehat (orang gila, mabuk, pingsan tidak wajib).
   - Suci dari haid dan nifas bagi wanita.
   - Telah sampai seruan/dakwah Islam kepadanya.
   - Panca indera mendengar atau melihat berfungsi (tidak buta dan tuli sejak lahir).

2. **SYARAT SAH SALAT (Keabsahan ibadah saat dikerjakan)**:
   - Mengetahui telah masuknya waktu salat (dengan yakin atau ijtihad/jam/azan).
   - Suci dari hadas kecil (dengan wudhu/tayamum) dan hadas besar (dengan mandi wajib).
   - Suci badan, pakaian, dan tempat salat dari najis yang tidak dimaafkan.
   - Menutup aurat dengan busana suci (laki-laki pusar hingga lutut; perempuan seluruh tubuh kecuali wajah dan kedua telapak tangan).
   - Menghadap kiblat (Ka'bah di Masjidil Haram Makkah).
   - Mengetahui fardhu-fardhu salat (tidak meyakini rukun sebagai sunnah).
   - Menjauhi hal-hal yang membatalkan salat.

3. **17 RUKUN SALAT (Mazhab Syafi'i - Terbagi 3 Dimensi)**:
   - **Rukun Qalbī (Hati)**:
     1. Niat di dalam hati menyertai Takbiratul Ihram (menyebut fardhu, nama salat, rakaat, lillāhi ta‘ālā).
   - **Rukun Qaulī (Ucapan yang wajib dilafalkan minimal terdengar oleh telinga sendiri)**:
     2. Takbiratul Ihram ("Allāhu Akbar").
     3. Membaca Surah Al-Fatihah dengan basmalah dan makhraj bertasydid benar.
     4. Membaca bacaan Tasyahud Akhir ("At-tahiyyātul mubārakātush-shalawātuth-thayyibātu lillāh...").
     5. Membaca Shalawat atas Nabi Muhammad SAW pada tasyahud akhir.
     6. Mengucapkan Salam yang pertama ke arah kanan ("As-salāmu ‘alaikum wa raḥmatullāh").
   - **Rukun Fi‘lī (Gerakan fisik wajib disertai Tuma'ninah)**:
     7. Berdiri tegak bagi yang mampu.
     8. Rukū‘ (membungkuk hingga kedua telapak tangan memegang lutut).
     9. Tuma’nīnah dalam rukū‘ (diam tenang sekadar bacaan tasbih).
     10. I‘tidāl (bangkit tegak berdiri dari ruku').
     11. Tuma’nīnah dalam i‘tidāl.
     12. Sujud dua kali (menempelkan 7 anggota sujud: dahi tanpa terhalang, kedua telapak tangan, kedua lutut, ujung jari kedua kaki).
     13. Tuma’nīnah dalam sujud.
     14. Duduk di antara dua sujud.
     15. Tuma’nīnah dalam duduk antara dua sujud.
     16. Duduk untuk membaca Tasyahud Akhir.
     17. Tartīb (berurutan dari rukun pertama hingga terakhir).

4. **PEMBAGIAN SUNNAH SALAT: SUNNAH AB‘AḌ VS SUNNAH HAI’AH**:
   - **Sunnah Ab‘aḍ (Sunnah berat - jika terlupa disunnahkan diganti Sujud Sahwi)**:
     1. Tasyahud Awal.
     2. Duduk membaca Tasyahud Awal.
     3. Shalawat atas Nabi SAW pada tasyahud awal.
     4. Shalawat atas keluarga Nabi (Āli Muhammad) pada tasyahud akhir.
     5. Doa Qunut pada salat Subuh dan salat Witir paruh kedua Ramadan.
     6. Berdiri saat membaca doa Qunut.
     7. Shalawat dan salam atas Nabi SAW dan keluarga/sahabat di akhir qunut.
   - **Sunnah Hai’ah (Sunnah ringan - jika terlupa tidak perlu sujud sahwi)**:
     - Mengangkat kedua tangan sejajar telinga/bahu saat takbiratul ihram, ruku', i'tidal, dan bangun dari tasyahud awal.
     - Meletakkan tangan kanan di atas tangan kiri di bawah dada di atas pusar (sedekap).
     - Membaca doa Iftitah di awal salat.
     - Membaca ta‘awwudz sebelum Al-Fatihah.
     - Mengucapkan "Āmīn" setelah Waladh-dhāllīn.
     - Membaca surah pendek setelah Al-Fatihah pada rakaat ke-1 dan ke-2.
     - Membaca takbir intiqal saat berpindah gerakan.
     - Tasbih ruku' 3x (Subḥāna rabbiyal-‘aẓīmi wa biḥamdih).
     - Bacaan i'tidal (Rabbanā lakal-ḥamd...).
     - Tasbih sujud 3x (Subḥāna rabbiyal-a‘lā wa biḥamdih).
     - Doa duduk antara dua sujud (Rabbigfir lī warḥamnī...).
     - Duduk Iftirāsy pada tasyahud awal dan Duduk Tawarruk pada tasyahud akhir.
     - Menoleh ke kanan saat salam pertama dan menoleh ke kiri saat salam kedua.

5. **HAL-HAL YANG MEMBATALKAN SALAT**:
   - Berbicara dengan sengaja walau hanya dua huruf yang bermakna atau satu huruf bermakna.
   - Bergerak berturut-turut tiga kali gerakan besar (seperti melangkah atau menggerakkan tangan).
   - Mengalami hadas kecil atau hadas besar.
   - Terkena najis basah/kering yang tidak segera disingkirkan tanpa menyentuhnya.
   - Terbukanya aurat secara sengaja atau tidak segera ditutup saat tersingkap angin.
   - Makan atau minum walau setetes/sebutir nasi yang tertelan dengan sengaja.
   - Berniat membatalkan salat atau ragu-ragu berniat membatalkannya.
   - Membelakangi arah kiblat.
   - Tertawa terbahak-bahak hingga mengeluarkan suara huruf.
   - Menambah rukun fi'li dengan sengaja (seperti sujud 3 kali).
   - Mendahului imam 2 rukun fi'li tanpa uzur, atau tertinggal dari imam 2 rukun fi'li.
   - Murtad (keluar dari Islam) di tengah salat.`,
    ayatAtauDalil: [
      {
        arabic: 'اِنَّ الصَّلٰوةَ تَنْهٰى عَنِ الْفَحْشَاۤءِ وَالْمُنْكَرِ',
        transliteration: 'Innaṣ-ṣalāta tanhā \'anil-faḥsyā\'i wal-munkar.',
        translation: 'Sesungguhnya salat itu mencegah dari (perbuatan) keji dan mungkar. (QS. Al-\'Ankabut: 45)'
      }
    ],
    poinPenting: [
      'Hadis: Ash-Shalatu \'imaduddin (Salat adalah tiang agama).',
      'Tuma\'ninah: Berhenti sejenak sekadar lamanya membaca tasbih (Subhanallah) dalam ruku, i\'tidal, sujud, dan duduk.',
      'Perbedaan Rukun Qauli (ucapan wajib: takbiratul ihram, Al-Fatihah, tasyahud akhir, shalawat, salam) vs Rukun Fi\'li (gerakan badan: berdiri, ruku, sujud, i\'tidal, duduk).',
      'Batasan aurat laki-laki (antara pusar dan lutut) vs perempuan (seluruh tubuh kecuali wajah dan telapak tangan).'
    ],
    wigginsFacets: [
      {
        facet: 'Interpretasi',
        questionPrompt: 'Mengapa salat yang dilakukan dengan benar mampu mencegah perbuatan keji dan mungkar?',
        insight: 'Karena salat menghidupkan kesadaran spiritual dan muraqabah bahwa Allah selalu melihat setiap gerak-gerik hamba, membentengi dari godaan dosa.',
        practicalExample: 'Seseorang yang rajin salat berjamaah akan merasa risih dan malu jika diajak mencuri atau menyontek.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal ujian: Membedakan mana rukun qauli, rukun fi\'li, rukun qalbi (niat), serta pengertian tuma\'ninah!'
  },
  {
    id: 'fiqih-3',
    nomor: 3,
    scopeId: 'fiqih',
    judul: 'Usia Bālig',
    subJudul: 'Transisi Menuju Mukallaf: Tanda Biologis & Tanggung Jawab Hukum',
    ringkasan: 'Balig adalah fase kematangan biologis dan akal di mana seseorang menjadi mukallaf (dibebani kewajiban syariat sepenuhnya). Memahami tanda-tanda balig laki-laki dan perempuan.',
    kontenUtama: `Secara bahasa, balig berarti "sampai" (mencapai kedewasaan). Dalam hukum Islam, balig menandai perpindahan status dari shabiy (kanak-kanak) menjadi mukallaf (orang yang terbebani hukum syariah: salat wajib, puasa wajib, dosa dan pahala dicatat sendiri).

Tanda-Tanda Balig dalam Kitab Fiqih (Safīnatun Najā):
1. **Untuk Laki-laki & Perempuan**:
   - Telah mencapai usia genap 15 tahun menurut penanggalan Hijriyah (qamariyah) bila belum mengalami tanda lainnya.
2. **Khusus Laki-laki**:
   - Ihtilam (mimpi basah / keluarnya sperma/mani) dalam keadaan tidur atau terjaga, minimal usia 9 tahun Hijriyah.
3. **Khusus Perempuan**:
   - Haid (menstruasi), minimal pada usia 9 tahun Hijriyah.

Konsekuensi Balig:
- Menutup aurat secara sempurna di hadapan non-mahram.
- Kewajiban mandi wajib (ghusl) setelah hadas besar (ihtilam/selesainya haid).
- Seluruh kewajiban fardhu \'ain tidak boleh lagi ditinggalkan.`,
    ayatAtauDalil: [
      {
        arabic: 'رُفِعَ الْقَلَمُ عَنْ ثَلَاثَةٍ: عَنِ النَّائِمِ حَتَّى يَسْتَيْقِظَ، وَعَنِ الصَّبِيِّ حَتَّى يَحْتَلِمَ، وَعَنِ الْمَجْنُونِ حَتَّى يَعْقِلَ',
        transliteration: 'Rufi\'al-qalamu \'an ṡalāṡatin: \'anin-nā\'imi ḥattā yastaiqiẓa, wa \'aniṣ-ṣabiyyi ḥattā yaḥtalima, wa \'anil-majnūni ḥattā ya\'qil.',
        translation: 'Pena (pencatat amal) diangkat dari tiga orang: orang tidur hingga bangun, anak kecil hingga mimpi basah (balig), dan orang gila hingga berakal sehat.'
      }
    ],
    poinPenting: [
      'Status Mukallaf: Orang balig, berakal, dan telah sampai dakwah Islam kepadanya.',
      'Tanda balig laki-laki: Mimpi basah (ihtilam).',
      'Tanda balig perempuan: Haid (menstruasi).',
      'Batas usia maksimal balig jika tidak haid/ihtilam: 15 tahun Hijriyah.',
      'Kewajiban mandi junub (janabah) dengan membasahi seluruh tubuh dan rambut tanpa sela.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Bagaimana pola pikir remaja yang telah balig seharusnya berubah dibanding masa kanak-kanak?',
        insight: 'Menyadari bahwa setiap keputusan, perbuatan, dan ucapan kini langsung dipertanggungjawabkan di hadapan Allah SWT tanpa ditanggung orang tua lagi.',
        practicalExample: 'Memiliki kesadaran mandiri untuk bangun subuh sendiri tanpa harus dipaksa orang tua.'
      }
    ],
    tipsLomba: 'Kerap diujikan: Tiga tanda balig menurut Safinatun Naja, usia minimal haid (9 tahun), dan hadis "Rufi\'al qalamu \'an tsalatsah".'
  },
  {
    id: 'fiqih-4',
    nomor: 4,
    scopeId: 'fiqih',
    judul: 'Zakat (Fitrah & Māl)',
    subJudul: 'Penyuci Jiwa & Harta: Nisab, Haul & 8 Golongan Mustahiq',
    ringkasan: 'Zakat adalah rukun Islam ketiga. Membedakan zakat fitrah (jiwa di bulan Ramadan) dengan zakat mal (harta kekayaan: emas, perniagaan, pertanian, peternakan) serta 8 asnaf penerima zakat.',
    kontenUtama: `Zakat artinya suci, tumbuh, dan berkah. Zakat terbagi dua:

1. **Zakat Fitrah (Zakat Jiwa)**:
   - Wajib dikeluarkan oleh setiap jiwa muslim yang hidup di bulan Ramadan dan memiliki kelebihan makanan untuk malam dan hari raya Idulfitri.
   - Besaran: 1 sha\' (sekitar 2,5 kg atau 3,5 liter beras / makanan pokok setempat).
   - Waktu afdhal: Sebelum salat Idulfitri didirikan.

2. **Zakat Māl (Zakat Harta)**:
   - Syarat: Milik sempurna, berkembang, mencapai **nisab** (batas minimal) dan mencapai **haul** (tersimpan genap 1 tahun Hijriyah).
   - Nisab emas: 85 gram emas murni (kadar zakatnya 2,5%).
   - Nisab perak: 595 gram perak (kadar 2,5%).
   - Zakat hasil pertanian: Dikeluarkan setiap panen (nisab 5 wasaq / ~653 kg gabah; kadar 5% jika pakai irigasi berbiaya, 10% jika tadah hujan alami).

**8 Golongan Penerima Zakat (Mustahiq - QS. At-Taubah: 60)**:
1. Fakir (hampir tidak punya apa-apa), 2. Miskin (punya penghasilan tapi tidak cukup), 3. Amil (panitia pengelola zakat), 4. Mualaf (orang yang baru masuk Islam atau dibujuk hatinya), 5. Riqab (memerdekakan budak), 6. Gharim (orang yang terlilit utang demi kebaikan), 7. Sabilillah (pejuang jalan Allah/dakwah/pendidikan Islam), 8. Ibnu Sabil (musafir kehabisan bekal di perjalanan halal).`,
    ayatAtauDalil: [
      {
        arabic: 'اِنَّمَا الصَّدَقٰتُ لِلْفُقَرَاۤءِ وَالْمَسٰكِيْنِ وَالْعٰمِلِيْنَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوْبُهُمْ وَفِى الرِّقَابِ وَالْغَارِمِيْنَ وَفِيْ سَبِيْلِ اللّٰهِ وَابْنِ السَّبِيْلِۗ',
        transliteration: 'Innamaṣ-ṣadaqātu lil-fuqarā\'i wal-masākīni wal-\'āmilīna \'alaihā wal-mu\'allafati qulūbuhum wa fir-riqābi wal-gārimīna wa fī sabīlillāhi wabnis-sabīl...',
        translation: 'Sesungguhnya zakat itu hanyalah untuk orang-orang fakir, orang miskin, amil zakat, yang dilunakkan hatinya (mualaf), untuk (memerdekakan) hamba sahaya, untuk (membebaskan) orang yang berutang, untuk jalan Allah dan untuk orang yang sedang dalam perjalanan... (QS. At-Taubah: 60)'
      }
    ],
    poinPenting: [
      'Ukuran zakat fitrah: 1 sha\' (~2,5 kg / 3,5 liter beras).',
      'Nisab emas: 85 gram emas, kadar zakat 2,5%.',
      'Pertanian: 5 wasaq (~653 kg), kadar 5% (irigasi biaya) atau 10% (air hujan).',
      '8 Asnaf dalam QS. At-Taubah 60: Fakir, Miskin, Amil, Mualaf, Riqab, Gharimin, Fisabilillah, Ibnu Sabil.',
      'Muzakki (pemberi zakat) vs Mustahiq (penerima zakat).'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Jelaskan perbedaan mendasar antara fakir dan miskin!',
        insight: 'Fakir memiliki penghasilan kurang dari 50% kebutuhan dasarnya; sedangkan miskin memiliki penghasilan di atas 50% tetapi tetap belum mencukupi 100% kebutuhan primernya.',
        practicalExample: 'Seorang kakek sebatang kara tanpa penghasilan tergolong fakir.'
      }
    ],
    tipsLomba: 'Hafalkan urutan dan arti 8 golongan mustahiq dalam QS. At-Taubah: 60 serta nisab emas 85 gram / 2,5%.'
  },
  {
    id: 'fiqih-5',
    nomor: 5,
    scopeId: 'fiqih',
    judul: 'Sedekah, Infaq, dan Wakaf',
    subJudul: 'Amal Kebajikan Sukarela yang Tidak Terikat Nisab',
    ringkasan: 'Sedekah memiliki cakupan sangat luas: dari harta materi hingga senyuman tulus. Mengetahui keutamaan sedekah jariyah yang pahalanya mengalir abadi.',
    kontenUtama: `Perbedaan Zakat, Infaq, Sedekah, dan Wakaf:
- **Zakat**: Wajib hukumnya, ditentukan nisab, haul, dan kadar persentasenya, serta terbatas untuk 8 golongan.
- **Infaq**: Mengeluarkan sebagian rezeki harta untuk kebaikan kapan saja tanpa batasan nisab dan kadar (bisa wajib seperti nafkah keluarga, bisa sunnah).
- **Sedekah (Shadaqah)**: Cakupannya paling luas; tidak terbatas materi, bisa berupa tenaga, ilmu, pikiran, bahkan senyuman tulus kepada sesama ("Tabassumuka fī wajhi akhīka laka ṣadaqah").
- **Wakaf**: Menahan aset pokok yang tidak habis pakai (seperti tanah, bangunan, sumur air) untuk dimanfaatkan manfaatnya bagi kepentingan umum umat Islam selamanya.

Hadis Sedekah Jariyah:
"Idzā mātal-insānu inqaṭa‘a ‘amaluhū illā min ṡalāṡ: ṣadaqatin jāriyah, au ‘ilmin yuntafa‘u bih, au waladin ṣāliḥin yad‘ū lah" (Apabila manusia meninggal dunia, terputuslah amalnya kecuali 3 perkara: sedekah jariyah, ilmu yang bermanfaat, dan anak saleh yang mendoakannya). (HR. Muslim).`,
    ayatAtauDalil: [
      {
        arabic: 'تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ',
        transliteration: 'Tabassumuka fī wajhi akhīka laka ṣadaqah.',
        translation: 'Senyummu di hadapan saudaramu adalah sedekah bagimu.'
      }
    ],
    poinPenting: [
      'Sedekah materi vs non-materi (senyum, amar ma\'ruf nahi munkar, menyingkirkan duri di jalan).',
      '3 Amal yang tidak terputus setelah wafat (sedekah jariyah, ilmu bermanfaat, doa anak saleh).',
      'Sedekah menolak bala (ash-shadaqatu tadfa\'ul bala\') dan memadamkan murka Allah.',
      'Adab sedekah: Ikhlas, tidak mengungkit-ungkit (al-mann), dan tidak menyakiti perasaan penerima (al-adza).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana siswa yang tidak memiliki uang saku lebih tetap bisa bersedekah setiap hari?',
        insight: 'Tersenyum ramah kepada teman, menyingkirkan batu/duri di halaman sekolah, dan membantu membukakan pintu bagi guru.',
        practicalExample: 'Membagikan catatan pelajaran yang rapi kepada teman yang sakit.'
      }
    ],
    tipsLomba: 'Kerap ditanyakan: 3 perkara yang tidak terputus amalnya saat mati (HR. Muslim) dan dua perbuatan yang merusak pahala sedekah (Al-Mann wal Adza).'
  },
  {
    id: 'fiqih-6',
    nomor: 6,
    scopeId: 'fiqih',
    judul: 'Makanan dan Minuman Halal dan Haram',
    subJudul: 'Konsep Halalan Thayyiban: Kriteria Dzat & Cara Memperoleh',
    ringkasan: 'Islam mewajibkan konsumsi makanan dan minuman yang halal secara hukum dan thayyib (bergizi, bersih, baik bagi kesehatan). Mengetahui jenis bangkai, darah, babi, khamar, dan sembelihan non-syar\'i.',
    kontenUtama: `Dua Syarat Makanan Muslim:
1. **Halāl**: Sesuai dengan hukum syariat Islam, tidak ada dalil yang melarangnya.
2. **Ṭayyib**: Bersih, suci, menyehatkan jasmani, dan aman bagi tubuh (tidak mengandung racun/kadar berbahaya).

Kategori Halal & Haram Ditinjau Dari Dua Sisi:
- **Halal/Haram Li-dzātihi (Dzatnya)**:
  - Yang haram dzatnya (QS. Al-Ma'idah: 3): Bangkai (kecuali bangkai ikan dan belalang), darah mengalir, daging babi, hewan yang disembelih tanpa menyebut nama Allah, hewan yang mati tercekik, terpukul, terjatuh, ditanduk, atau diterkam binatang buas.
  - Minuman keras (Khamar) dan narkoba (segala yang memabukkan adalah khamar dan haram).
- **Halal/Haram Li-ghairihi (Cara Memperoleh)**:
  - Makanan asalnya halal (seperti nasi, ayam goreng), namun didapat dari hasil mencuri, korupsi, judi, riba, atau menipu. Makanan tersebut haram dimakan.

Hewan yang Haram Dimakan dalam Hadis:
1. Binatang buas yang bertaring (singa, harimau, serigala).
2. Burung yang memiliki cakar mencengkeram mangsa (elang, rajawali).
3. Binatang yang diperintahkan dibunuh (ular, tikus, kalajengking, anjing gila).
4. Binatang yang dilarang dibunuh (lebah, semut, burung hud-hud, burung shurad).
5. Binatang yang hidup di dua alam (katak/buaya menurut sebagian ulama).`,
    ayatAtauDalil: [
      {
        arabic: 'يٰٓاَيُّهَا النَّاسُ كُلُوْا مِمَّا فِى الْاَرْضِ حَلٰلًا طَيِّبًاۖ',
        transliteration: 'Yā ayyuhan-nāsu kulū mimmā fil-arḍi ḥalālan ṭayyibā...',
        translation: 'Wahai manusia! Makanlah dari (makanan) yang halal dan baik yang terdapat di bumi... (QS. Al-Baqarah: 168)'
      }
    ],
    poinPenting: [
      'Konsep Halālan Ṭayyiban.',
      'Dua bangkai dan dua darah yang halal: Bangkai ikan dan belalang; hati dan limpa.',
      'Semua yang memabukkan (muskir) adalah khamar, dan setiap khamar adalah haram.',
      'Dampak makanan haram: Doa tidak dikabulkan, hati menjadi keras, dan malas beribadah.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Mengapa doa seseorang bisa tertolak hanya karena makanan haram?',
        insight: 'Karena darah dan daging yang tumbuh dari asupan haram menjauhkan manusia dari rahmat dan kesucian Allah yang Maha Suci.',
        practicalExample: 'Selalu memeriksa logo Halal MUI/BPJPH pada kemasan makanan sebelum membeli.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal CBT: Dua bangkai yang halal (ikan & belalang), 4 hewan yang dilarang dibunuh, dan definisi halal li-dzatihi vs li-ghairihi.'
  },
  {
    id: 'fiqih-7',
    nomor: 7,
    scopeId: 'fiqih',
    judul: 'Bersuci: Wuḍū’ dan Tayamum',
    subJudul: 'Aṭ-Ṭahārah: Menyucikan Diri dari Hadas Kecil & Hadas Besar',
    ringkasan: 'Thaharah adalah anak kunci salat. Menguasai 6 rukun wudhu, hal yang membatalkan wudhu, serta tata cara tayamum menggunakan debu suci sebagai rukhsah saat tiada air.',
    kontenUtama: `Bersuci (Aṭ-Ṭahārah) adalah syarat utama sahnya salat. Wudhu adalah menyucikan diri dari hadas kecil menggunakan air mutlak (suci dan menyucikan). Rincian hukum fiqih wudhu secara tuntas:

1. **SYARAT WAJIB WUDHU**:
   - Beragama Islam.
   - Bālig atau mumayyiz (anak yang sudah bisa membedakan baik dan buruk, kanan dan kiri).
   - Berakal sehat.
   - Tidak sedang berhadas besar (haid, nifas, junub).
   - Ada air suci menyucikan yang mencukupi.
   - Mampu menggunakan air secara fisik (tidak sakit yang dilarang dokter terkena air).

2. **SYARAT SAH WUDHU**:
   - Menggunakan air mutlak (air hujan, air sumur, air laut, air sungai, air embun, air salju, air mata air).
   - Mengalirkan air pada anggota wudhu (tidak sekadar mengusap basah untuk wajah/tangan/kaki).
   - Tidak ada sesuatu yang menghalangi sampainya air ke kulit atau kuku (seperti cat kuku/kutek kedap air, lem lilin, getah, minyak tebal).
   - Tidak ada benda pada anggota badan yang merubah sifat air (seperti tinta pekat yang merubah warna air).
   - Mengetahui fardhu-fardhu wudhu (bisa membedakan mana rukun mana sunnah).
   - Tidak meyakini salah satu rukun fardhu wudhu sebagai amalan sunnah.
   - Suci dari haid dan nifas.
   - Telah masuk waktu salat dan muwālah bagi orang yang terus menerus berhadas (da'imul hadats/beser).

3. **6 RUKUN WUDHU (QS. Al-Mā'idah: 6)**:
   1. **Niat** di dalam hati berbarengan saat air pertama kali membasuh muka: "Nawaitul-wudhū’a li-raf‘il-ḥadatsil-ashghari farḍal lillāhi ta‘ālā".
   2. **Membasuh seluruh wajah/muka**: Batas vertikal dari tempat tumbuh rambut kepala bagian atas hingga ujung dagu bawah; batas horizontal dari pangkal anak telinga kanan hingga anak telinga kiri.
   3. **Membasuh kedua tangan sampai ke kedua siku**: Termasuk menyempurnakan basuhan melewati siku.
   4. **Mengusap sebagian kepala**: Baik kulit kepala atau sehelai rambut yang berada dalam batas kepala.
   5. **Membasuh kedua kaki sampai kedua mata kaki**: Termasuk tumit dan sela-sela jari kaki.
   6. **Tartīb**: Berurutan dari rukun ke-1 hingga rukun ke-5 tanpa membolak-balik urutan.

4. **13 SUNNAH-SUNNAH WUDHU**:
   1. Membaca Basmalah ("Bismillāhir-raḥmānir-raḥīm") di awal.
   2. Membasuh kedua telapak tangan hingga pergelangan tangan sebanyak 3 kali.
   3. Bersiwak (menggosok gigi).
   4. Berkumur-kumur (Al-Maḍmaḍah) sebanyak 3 kali secara merata.
   5. Menghirup air ke dalam rongga hidung (Al-Istinsyāq) lalu menghembuskannya keluar (Al-Istinṡār) 3 kali.
   6. Menyela-nyela jenggot yang tebal (Takhlyl al-lihyah).
   7. Menyela-nyela jari-jari tangan dan jari-jari kaki (Takhlyl ash-shabi').
   8. Mengusap seluruh bagian kepala (bukan hanya sebagian).
   9. Mengusap kedua daun telinga (bagian luar dan dalam) dengan air baru 3 kali.
   10. Mendahulukan anggota tubuh sebelah kanan dari yang kiri (At-Tayāmun).
   11. Mengulang setiap basuhan sebanyak 3 kali (At-Taṡlīṡ).
   12. Muwālah (berkesinambungan: segera membasuh anggota berikutnya sebelum anggota sebelumnya mengering).
   13. Menghadap kiblat dan berdoa setelah wudhu: "Asyhadu allā ilāha illallāh waḥdahū lā syarīka lah, wa asyhadu anna Muḥammadan ‘abduhū wa rasūluh, Allāhummaj‘alnī minat-tawwābīna waj‘alnī minal-mutaṭahhirīn...".

5. **HAL-HAL YANG MEMBATALKAN WUDHU**:
   1. Keluarnya sesuatu dari salah satu dua jalan (qubul atau dubur), baik berupa air kencing, tinja, angin (kentut), mazi, mani, cacing, darah.
   2. Hilangnya akal pikiran karena tidur pulas, mabuk, pingsan, gila, atau obat bius, KECUALI tidur dalam posisi duduk yang mantap pantatnya di lantai/kursi.
   3. Bersentuhan kulit antara laki-laki dan perempuan yang bukan mahram, keduanya telah mencapai batas usia syahwat, tanpa adanya penghalang kain.
   4. Menyentuh kemaluan manusia (qubul) atau lingkaran lubang dubur dengan telapak tangan bagian dalam atau bagian dalam jari-jemari tanpa penghalang.

6. **TAYAMUM SEBAGAI RUKHSHAH**:
   Rukhsah (keringanan) pengganti wudhu dan mandi besar apabila tidak ada air setelah berusaha mencari, atau berhalangan memakai air karena sakit/luka.
   - Syarat Tayamum: Menggunakan debu tanah yang suci (bukan debu musta'mal), sudah masuk waktu salat, menghilangkan najis terlebih dahulu, satu kali tayamum untuk satu kali salat fardhu.
   - Rukun Tayamum (Hanya 4): 1. Niat saat memindahkan dan mengusapkan debu ke wajah, 2. Mengusap seluruh wajah dengan debu, 3. Mengusap kedua tangan sampai kedua siku dengan debu, 4. Tertib.`,
    ayatAtauDalil: [
      {
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا قُمْتُمْ اِلَى الصَّلٰوةِ فَاغْسِلُوْا وُجُوْهَكُمْ وَاَيْدِيَكُمْ اِلَى الْمَرَافِقِ وَامْسَحُوْا بِرُءُوْسِكُمْ وَاَرْجُلَكُمْ اِلَى الْكَعْبَيْنِۗ',
        transliteration: 'Yā ayyuhallażīna āmanū iżā qumtum ilaṣ-ṣalāti fagsilū wujūhakum wa aidiyakum ilal-marāfiqi wamsaḥū biru\'ūsikum wa arjulakum ilal-ka\'bain...',
        translation: 'Wahai orang-orang yang beriman! Apabila kamu hendak melaksanakan salat, maka basuhlah wajahmu dan tanganmu sampai ke siku, dan usaplah kepalamu dan (basuh) kedua kakimu sampai ke kedua mata kaki... (QS. Al-Ma\'idah: 6)'
      }
    ],
    poinPenting: [
      '6 Rukun Wudhu: Niat, wajah, tangan siku, sebagian kepala, kaki mata kaki, tertib.',
      'Batal wudhu: Keluar sesuatu dari qubul/dubur, hilang akal (tidur/pingsan), bersentuhan kulit laki-laki dan perempuan bukan mahram tanpa penghalang, menyentuh kemaluan dengan telapak tangan.',
      'Rukun tayamum hanya 2 usapan: Wajah dan kedua tangan sampai siku.',
      'Debu tayamum harus berdebu suci dan belum dipakai (bukan debu musta\'mal).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana cara tayamum bagi penumpang di dalam pesawat terbang atau kereta api?',
        insight: 'Menempelkan kedua telapak tangan ke permukaan kursi/dinding yang berdebu suci, meniupnya perlahan, lalu mengusapkannya ke wajah, kemudian menepuk lagi dan mengusap kedua tangan sampai siku.',
        practicalExample: 'Mempraktikkan tayamum dengan benar saat bepergian jauh.'
      }
    ],
    tipsLomba: 'Kerap diuji: Mengurutkan 6 rukun wudhu secara presisi dan membedakan rukun tayamum vs rukun wudhu!'
  },
  {
    id: 'fiqih-8',
    nomor: 8,
    scopeId: 'fiqih',
    judul: 'Zikir kepada Allah SWT (Aż-Żikr)',
    subJudul: 'Mengingat Allah: Keutamaan, Adab & Penenang Hati',
    ringkasan: 'Zikir adalah sarana mengingat dan mendekatkan diri kepada Allah SWT dengan hati, lisan, dan perbuatan. Zikir menenteramkan jiwa yang gundah (QS. Ar-Ra\'d: 28).',
    kontenUtama: `Zikir berasal dari kata dzakara yang berarti mengingat atau menyebut. Allah SWT memerintahkan orang-orang beriman untuk berzikir sebanyak-banyaknya (żikran kaṡīrā).

Keutamaan Zikir:
- Orang yang berzikir diibaratkan orang hidup, sedangkan yang tidak berzikir diibaratkan bangkai/orang mati (HR. Bukhari).
- Zikir adalah penawar kegelisahan batin: "Alā biżikrillāhi taṭma’innul-qulūb" (Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram - QS. Ar-Ra'd: 28).

Bentuk-Bentuk Zikir:
1. Zikir Lisan: Mengucapkan tasbih, tahmid, takbir, tahlil, istigfar.
2. Zikir Qalbi (Hati): Merenungi kebesaran ciptaan Allah dan selalu merasa diawasi oleh-Nya.
3. Zikir Amali (Perbuatan): Melaksanakan segala perintah syariat seperti salat, menuntut ilmu, dan beramal saleh.`,
    ayatAtauDalil: [
      {
        arabic: 'اَلَا بِذِكْرِ اللّٰهِ تَطْمَىِٕنُّ الْقُلُوْبُ',
        transliteration: 'Alā biżikrillāhi taṭma\'innul-qulūb.',
        translation: 'Ingatlah, hanya dengan mengingat Allah hati menjadi tenteram. (QS. Ar-Ra\'d: 28)'
      }
    ],
    poinPenting: [
      'Hadis perumpamaan orang berzikir vs tidak berzikir: Bagaikan orang hidup vs orang mati.',
      'QS. Ar-Ra\'d: 28 penenteram hati.',
      'Waktu-waktu utama berzikir: Pagi dan petang (Al-Ma\'tsurat), setelah salat fardhu, saat hendak tidur.'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Mengapa harta dan hiburan mewah tidak selalu membuat hati bahagia tanpa zikir?',
        insight: 'Karena ruh manusia diciptakan dari tiupan ruh Allah, sehingga fitrah jiwa hanya dapat terpuaskan jika terhubung dengan Penciptanya melalui zikir.',
        practicalExample: 'Membaca istigfar dan shalawat saat cemas menghadapi ujian.'
      }
    ],
    tipsLomba: 'Hafalkan teks ayat QS. Ar-Ra\'d: 28 dan matan hadis matsalul-ladzi yadzkuru rabbahu walladzi la yadzkuru rabbahu.'
  },
  {
    id: 'fiqih-9',
    nomor: 9,
    scopeId: 'fiqih',
    judul: 'Doa Setelah Salat',
    subJudul: 'Wirid Sunnah & Urutan Doa Mustajab Ba\'da Salat Fardu',
    ringkasan: 'Waktu ba\'da salat fardu adalah salah satu waktu paling mustajab untuk berdoa. Menghafal urutan wirid: istigfar 3x, tahlil, tasbih 33x, tahmid 33x, takbir 33x, dan doa memohon kebaikan dunia akhirat.',
    kontenUtama: `Ketika Rasulullah SAW ditanya: "Doa manakah yang paling didengar (dikabulkan) Allah?" Beliau menjawab: "Di tengah malam bagian akhir, dan di dubur (setiap selesai) salat-salat fardhu." (HR. At-Tirmidzi).

Urutan Wirid Sunnah Setelah Salat Fardhu:
1. Membaca Istigfar 3 kali: "Astaghfirullāhal-‘aẓīm alladhī lā ilāha illā huwal-ḥayyul-qayyūmu wa atūbu ilaih".
2. Membaca: "Allāhumma antas-salām wa minkas-salām tabārakta yā żal-jalāli wal-ikrām".
3. Membaca tahlil lengkap dan memohon perlindungan dari api neraka (Allāhumma ajirnā minan-nār 3x/7x).
4. Membaca Ayat Kursi (QS. Al-Baqarah: 255) yang menjamin jalan ke surga.
5. Membaca Tasbih (Subhanallah) 33x, Tahmid (Alhamdulillah) 33x, Takbir (Allahu Akbar) 33x.
6. Menggenapkan yang ke-100 dengan kalimat Tauhid: "Lā ilāha illallāhu waḥdahū lā syarīka lah...".
7. Membaca Doa Rabbana Atina fid-dunya hasanah wa fil-akhirati hasanatan wa qina 'adzaban-nar.`,
    ayatAtauDalil: [
      {
        arabic: 'رَبَّنَآ اٰتِنَا فِى الدُّنْيَا حَسَنَةً وَّفِى الْاٰخِرَةِ حَسَنَةً وَّقِنَا عَذَابَ النَّارِ',
        transliteration: 'Rabbanā ātinā fid-dunyā ḥasanataw wa fil-ākhirati ḥasanataw wa qinā \'ażāban-nār.',
        translation: 'Ya Tuhan kami, berilah kami kebaikan di dunia dan kebaikan di akhirat, dan lindungilah kami dari azab neraka. (QS. Al-Baqarah: 201)'
      }
    ],
    poinPenting: [
      'Waktu setelah salat fardhu termasuk waktu mustajab doa.',
      'Wirid 33x tasbih, 33x tahmid, 33x takbir digenapkan 100 dengan tahlil menghapus dosa walau sebanyak buih di lautan (HR. Muslim).',
      'Keutamaan membaca Ayat Kursi setiap selesai salat fardhu: Tidak ada yang menghalanginya masuk surga selain kematian.',
      'Doa Sapu Jagad: QS. Al-Baqarah: 201.'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana adab berdoa setelah salat fardhu agar khusyuk dan terkabul?',
        insight: 'Mengangkat kedua tangan setinggi dada, menghadap kiblat, memuji Allah dan bershalawat atas Nabi di awal doa, serta mengamini dengan penuh harap dan rendah hati.',
        practicalExample: 'Tidak langsung beranjak pergi setelah salam, melainkan wirid sejenak dengan tertib.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal CBT: Urutan wirid 33x-33x-33x dan teks doa sapu jagat serta hadis mustajabnya ba\'da salat fardhu.'
  },
  {
    id: 'fiqih-10',
    nomor: 10,
    scopeId: 'fiqih',
    judul: 'Salat Sunah Rawātib',
    subJudul: 'Pengiring Salat Fardu: Mu’akkad & Ghairu Mu’akkad',
    ringkasan: 'Salat sunah rawatib adalah salat yang dikerjakan sebelum (Qabliyyah) atau sesudah (Ba\'diyyah) salat fardhu untuk menyempurnakan kekurangan dalam salat wajib.',
    kontenUtama: `Salat Rawātib terbagi menjadi dua kelompok:
1. **Rawātib Mu’akkad (Sangat Dianjurkan - 10 atau 12 Rakaat per Hari)**:
   - 2 rakaat sebelum Subuh (Qabliyyah Subuh - keutamaannya lebih baik dari dunia dan seisinya!).
   - 2 atau 4 rakaat sebelum Zuhur.
   - 2 rakaat setelah Zuhur.
   - 2 rakaat setelah Magrib.
   - 2 rakaat setelah Isya.
   Barangsiapa istiqamah menjaga 12 rakaat rawatib ini, Allah bangunkan baginya sebuah istana di surga (HR. Muslim).

2. **Rawātib Ghairu Mu’akkad (Kurang Ditekankan)**:
   - 2 rakaat tambahan sebelum Zuhur dan 2 rakaat setelah Zuhur.
   - 4 rakaat sebelum Asar.
   - 2 rakaat sebelum Magrib.
   - 2 rakaat sebelum Isya.

Catatan Penting:
- TIDAK ADA salat sunah Ba\'diyyah setelah salat Subuh.
- TIDAK ADA salat sunah Ba\'diyyah setelah salat Asar (waktu diharamkan salat sunah mutlak).`,
    ayatAtauDalil: [
      {
        arabic: 'رَكْعَتَا الْفَجْرِ خَيْرٌ مِنَ الدُّنْيَا وَمَا فِيهَا',
        transliteration: 'Rak\'atal-fajri khairum minad-dunyā wa mā fīhā.',
        translation: 'Dua rakaat (sebelum) fajar (subuh) itu lebih baik daripada dunia dan segala isinya. (HR. Muslim)'
      }
    ],
    poinPenting: [
      'Qabliyyah (sebelum salat fardhu) vs Ba\'diyyah (sesudah salat fardhu).',
      'Waktu terlarang salat rawatib: Ba\'da Subuh dan Ba\'da Asar.',
      'Keutamaan 2 rakaat fajar (Qabliyyah Subuh): Lebih baik dari dunia dan seisinya.',
      'Pahala menjaga 12 rakaat rawatib mu\'akkad: Dibangunkan rumah di surga.'
    ],
    wigginsFacets: [
      {
        facet: 'Penjelasan',
        questionPrompt: 'Mengapa salat rawatib dianjurkan dikerjakan berpindah tempat dari posisi salat fardhu?',
        insight: 'Agar semakin banyak petak tanah di bumi yang bersaksi atas sujud dan ibadah kita di hari kiamat kelak.',
        practicalExample: 'Menggeser posisi duduk sedikit sebelum mendirikan salat sunah ba\'diyyah di masjid.'
      }
    ],
    tipsLomba: 'Kerap diuji tabel: Menghitung total rakaat rawatib mu\'akkad (10-12 rakaat) dan larangan salat ba\'da asar dan subuh!'
  },
  {
    id: 'fiqih-11',
    nomor: 11,
    scopeId: 'fiqih',
    judul: 'Salat Jumat',
    subJudul: 'Kewajiban Mingguan Kaum Laki-Laki: Khutbah, Syarat & Adab',
    ringkasan: 'Salat 2 rakaat berjamaah pengganti salat Zuhur pada hari Jumat yang didahului 2 khutbah. Hukumnya fardhu \'ain bagi laki-laki muslim yang memenuhi syarat.',
    kontenUtama: `Salat Jumat adalah kewajiban fardhu \'ain bagi setiap muslim laki-laki merdeka, sehat, dan bermukim (tidak sedang safar). 

Syarat Wajib Salat Jumat:
1. Islam, 2. Balig, 3. Berakal, 4. Laki-laki (wanita tidak wajib, cukup salat Zuhur), 5. Sehat, 6. Menetap/mukim.

Syarat Sah Salat Jumat:
1. Dilaksanakan pada waktu Zuhur.
2. Dilaksanakan di satu tempat yang tetap (masjid/tempat pemukiman).
3. Dilaksanakan secara berjamaah (menurut mazhab Syafi\'i minimal 40 orang jamaah mukim yang wajib Jumat).
4. Didahului dua khutbah Jumat.

5 Rukun Khutbah Jumat:
1. Memuji Allah (Tahmid).
2. Membaca shalawat kepada Nabi Muhammad SAW.
3. Berwasiat takwa.
4. Membaca salah satu ayat Al-Qur'an pada salah satu khutbah.
5. Berdoa memohon ampunan bagi kaum mukminin pada khutbah kedua.

Adab Hari Jumat: Mandi sunnah Jumat, memotong kuku, memakai wangi-wangian (bagi pria), berpakaian putih bersih, berangkat lebih awal, salat tahiyyatul masjid, serta mendengarkan khutbah dengan diam tanpa berbicara (berbicara saat khutbah dapat menggugurkan pahala Jumat menjadi sia-sia / lagha).`,
    ayatAtauDalil: [
      {
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْٓا اِذَا نُوْدِيَ لِلصَّلٰوةِ مِنْ يَّوْمِ الْجُمُعَةِ فَاسْعَوْا اِلٰى ذِكْرِ اللّٰهِ وَذَرُوا الْبَيْعَ',
        transliteration: 'Yā ayyuhallażīna āmanū iżā nūdiya liṣ-ṣalāti miy yaumil-jumu\'ati fas\'au ilā żikrillāhi wa żarul-bai\'...',
        translation: 'Wahai orang-orang yang beriman! Apabila telah diseru untuk melaksanakan salat pada hari Jumat, maka segeralah kamu mengingat Allah dan tinggalkanlah jual beli... (QS. Al-Jumu\'ah: 9)'
      }
    ],
    poinPenting: [
      'Hukum: Fardhu \'ain bagi laki-laki mukallaf.',
      'Larangan saat khutbah: Berbicara bahkan mengingatkan orang lain dengan kata "diam" membuat ibadah jumatnya lagha (sia-sia).',
      '5 Rukun khutbah: Tahmid, Shalawat, Wasiat Takwa, Ayat Al-Qur\'an, Doa Mukminin.',
      'Hari Jumat adalah Sayyidul Ayyam (penghulu hari).'
    ],
    wigginsFacets: [
      {
        facet: 'Aplikasi',
        questionPrompt: 'Bagaimana sikap santri jika melihat teman berbicara saat khatib sedang berkhutbah?',
        insight: 'Tidak menegur dengan ucapan kata, melainkan memberi isyarat jari di bibir secara tenang tanpa bersuara agar pahala Jumat kita tidak batal.',
        practicalExample: 'Fokus mendengarkan isi khutbah dan mencatat pesan moralnya di hati.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal CBT: 5 rukun khutbah Jumat dan hadis larangan berkata "Anshit" (diamlah) saat khatib berkhutbah!'
  },
  {
    id: 'fiqih-12',
    nomor: 12,
    scopeId: 'fiqih',
    judul: 'Salat Sunah: Duḥā dan Tahajud',
    subJudul: 'Ibadah Penarik Rezeki & Pengangkat Derajat Maqaman Mahmuda',
    ringkasan: 'Dua salat sunah agung: Salat Duha dikerjakan saat matahari naik sepenggalah hingga menjelang zawal; Salat Tahajud dikerjakan pada malam hari setelah tidur sebagai sarana doa terkabul.',
    kontenUtama: `1. **Salat Sunah Duḥā**:
- Waktu: Dimulai sejak matahari terbit naik setinggi tombak (sekitar pukul 06.30 - 07.00 pagi) hingga menjelang waktu zawal (masuknya azan Zuhur). Waktu paling utama adalah saat anak unta kepanasan pasirnya (sekitar pukul 09.00).
- Rakaat: Minimal 2 rakaat, dapat dikerjakan 4, 6, hingga 8 atau 12 rakaat (salam setiap 2 rakaat).
- Keutamaan: Sebagai sedekah untuk 360 persendian tubuh manusia, mendatangkan kelapangan rezeki, dan dicatat sebagai orang yang bertaubat (shalatul awwabin).

2. **Salat Sunah Tahajud (Qiyāmul Lail)**:
- Syarat Khusus: Dilaksanakan pada malam hari **setelah bangun dari tidur** (walau hanya tidur sekejap). Jika belum tidur, disebut salat malam biasa (Lail).
- Waktu Paling Utama: Sepertiga malam terakhir (sekitar pukul 02.00 - 04.00 pagi) saat Allah turun ke langit dunia menyambut hamba yang berdoa.
- Rakaat: Minimal 2 rakaat tanpa batasan maksimal (biasanya ditutup dengan salat Witir ganjil).
- Keutamaan: Dijanjikan oleh Allah SWT kedudukan terpuji (Maqāman Maḥmūdā - QS. Al-Isra': 79), wajah bercahaya, dan doa mustajab.`,
    ayatAtauDalil: [
      {
        arabic: 'وَمِنَ الَّيْلِ فَتَهَجَّدْ بِهٖ نَافِلَةً لَّكَۖ عَسٰٓى اَنْ يَّبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُوْدًا',
        transliteration: 'Wa minal-laili fa tahajjad bihī nāfilatal laka \'asā ay yab\'aṡaka rabbuka maqāmam maḥmūdā.',
        translation: 'Dan pada sebagian malam, lakukanlah salat tahajud (sebagai suatu ibadah) tambahan bagimu; mudah-mudahan Tuhanmu mengangkatmu ke tempat yang terpuji. (QS. Al-Isra\': 79)'
      }
    ],
    poinPenting: [
      'Duha: Waktu pagi matahari sepenggalah; sedekah bagi 360 sendi tubuh.',
      'Tahajud: Wajib tidur terlebih dahulu; waktu paling afdhal sepertiga malam terakhir.',
      'Janji Tahajud: Maqāman Maḥmūdā (tempat yang mulia dan terpuji).',
      'Ditutup dengan salat Witir (witir = rakaat ganjil: 1, 3, dst).'
    ],
    wigginsFacets: [
      {
        facet: 'Refleksi',
        questionPrompt: 'Mengapa salat di keheningan sepertiga malam terakhir terasa sangat berkesan dan khusyuk?',
        insight: 'Karena di saat semua manusia tertidur lelap, seorang hamba bangun meninggalkan kenyamanan kasur semata demi berbisik dan mengadu kepada Tuhannya.',
        practicalExample: 'Memasang alarm untuk bangun sahur sekaligus salat tahajud dua rakaat.'
      }
    ],
    tipsLomba: 'Kerap diuji: Perbedaan salat malam biasa vs Tahajud (syarat tidur), dan dalil QS. Al-Isra\': 79 (Maqaman Mahmuda).'
  },
  {
    id: 'fiqih-13',
    nomor: 13,
    scopeId: 'fiqih',
    judul: 'Puasa (Aṣ-Ṣaum)',
    subJudul: 'Menahan Diri: Rukun, Syarat, Macam Puasa & Pembatal Puasa',
    ringkasan: 'Ibadah menahan diri dari lapar, dahaga, dan segala yang membatalkan puasa mulai terbit fajar shadiq (subuh) hingga terbenam matahari (magrib) disertai niat ikhlas demi takwa (QS. Al-Baqarah: 183).',
    kontenUtama: `Puasa secara bahasa artinya menahan (al-imsāk). Secara istilah syariat adalah menahan diri dari segala hal yang membatalkan puasa mulai dari terbit fajar shadiq hingga terbenam matahari dengan niat tertentu.

Syarat Wajib Puasa:
1. Islam, 2. Balig, 3. Berakal sehat, 4. Kuat/mampu berpuasa (tidak lansia pikun/sakit parah), 5. Suci dari haid dan nifas (bagi wanita).

Rukun Puasa:
1. **Niat** pada malam hari sebelum fajar untuk puasa fardhu ("Nawaitu shauma ghadin \'an adā'i fardhi syahri Ramadhāna...").
2. **Menahan diri (Imsak)** dari segala pembatal puasa sejak terbit fajar hingga matahari terbenam.

Hal-Hal yang Membatalkan Puasa:
1. Makan atau minum dengan sengaja (jika lupa tidak batal, itu rezeki dari Allah).
2. Memasukkan benda ke dalam lubang tubuh yang terbuka (rongga mulut, hidung, telinga, kemaluan, dubur) secara sengaja.
3. Muntah dengan sengaja.
4. Bersetubuh (jima\') di siang hari Ramadan (dikenai kaffarah berat: memerdekakan budak, atau puasa 2 bulan berturut-turut, atau memberi makan 60 orang miskin).
5. Keluar mani dengan sengaja (onani/masturbasi).
6. Keluar darah haid atau nifas.
7. Gila (hilang akal).
8. Murtad.

Macam-Macam Puasa:
- **Puasa Wajib**: Ramadan, Qadha, Nazar, Kaffarah.
- **Puasa Sunnah**: Senin-Kamis, Ayyamul Bidh (13, 14, 15 tiap bulan Hijriyah), Asyura (10 Muharram), Arafah (9 Zulhijjah bagi non-haji), 6 hari di bulan Syawal, Daud (sehari puasa sehari tidak).
- **Puasa Haram**: Hari Raya Idulfitri (1 Syawal), Iduladha (10 Zulhijjah), dan Hari Tasyrik (11, 12, 13 Zulhijjah).`,
    ayatAtauDalil: [
      {
        arabic: 'يٰٓاَيُّهَا الَّذِيْنَ اٰمَنُوْا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِيْنَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُوْنَۙ',
        transliteration: 'Yā ayyuhallażīna āmanū kutiba \'alaikumuṣ-ṣiyāmu kamā kutiba \'alal-lażīna min qablikum la\'allakum tattaqūn.',
        translation: 'Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa. (QS. Al-Baqarah: 183)'
      }
    ],
    poinPenting: [
      'Tujuan akhir puasa: La\'allakum tattaqun (meraih derajat takwa).',
      'Rukun puasa: Niat (malam hari untuk puasa wajib) dan Menahan diri (Imsak).',
      'Hari haram berpuasa: 2 hari raya (1 Syawal & 10 Zulhijjah) + 3 hari tasyrik (11, 12, 13 Zulhijjah).',
      'Puasa sunnah paling dicintai Allah: Puasa Nabi Daud a.s (sehari puasa sehari berbuka).',
      'Keutamaan puasa Arafah (9 Zulhijjah): Menghapus dosa 1 tahun lalu dan 1 tahun yang akan datang.'
    ],
    wigginsFacets: [
      {
        facet: 'Empati',
        questionPrompt: 'Bagaimana ibadah puasa menumbuhkan kepekaan sosial terhadap kaum dhuafa?',
        insight: 'Dengan menahan lapar dan haus dari terbit fajar hingga magrib, kita merasakan langsung perihnya derita orang miskin yang kelaparan bukan hanya sehari tapi berhari-hari.',
        practicalExample: 'Lebih gemar menyantuni fakir miskin dan tidak membuang-buang makanan sisa.'
      }
    ],
    tipsLomba: 'Kerap keluar di soal CBT: Hari-hari yang diharamkan berpuasa (termasuk 3 hari tasyrik) dan fadhilah puasa Arafah vs puasa Asyura!'
  }
];
