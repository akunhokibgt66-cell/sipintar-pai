export interface AkhlakTerm {
  id: string;
  namaArab: string;
  namaLatin: string;
  tipe: 'Mahmudah' | 'Mazmumah';
  artiSingkat: string;
  definisiLengkap: string;
  dalilAtauHadis: string;
  contohKehidupan: string;
  caraMenghindariAtauMeraih: string;
}

export const akhlakTermsData: AkhlakTerm[] = [
  // AKHLAK MAHMUDAH (TERPUJI)
  {
    id: 'term-m1',
    namaArab: 'قَنَاعَة',
    namaLatin: 'Qanā‘ah',
    tipe: 'Mahmudah',
    artiSingkat: 'Rela & merasa cukup dengan rezeki pemberian Allah',
    definisiLengkap: 'Sikap rela menerima dan merasa cukup atas rezeki halal yang telah dianugerahkan Allah SWT, tidak serakah terhadap apa yang dimiliki orang lain, serta tetap berikhtiar dengan tawakal.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Kekayaan hakiki bukanlah banyaknya harta benda, melainkan kekayaan jiwa (ghina an-nafs)" (HR. Bukhari & Muslim).',
    contohKehidupan: 'Tidak merengek meminta barang mewah yang belum mampu dibeli orang tua, melainkan mensyukuri apa yang ada dengan gembira.',
    caraMenghindariAtauMeraih: 'Melihat ke bawah dalam urusan materi duniawi (melihat orang yang lebih susah) dan selalu membiasakan hamdalah.'
  },
  {
    id: 'term-m2',
    namaArab: 'شَجَاعَة',
    namaLatin: 'Syajā‘ah',
    tipe: 'Mahmudah',
    artiSingkat: 'Keberanian membela kebenaran & keadilan',
    definisiLengkap: 'Keteguhan hati dan keberanian moral seorang muslim untuk menegakkan kebenaran, membela yang lemah, dan mengakui kesalahan karena takut hanya kepada Allah SWT, bukan keberanian nekat berbuat onar.',
    dalilAtauHadis: '"Katakanlah kebenaran itu walaupun pahit rasanya (Qulil-ḥaqqa walau kāna murran)" (HR. Ibnu Hibban).',
    contohKehidupan: 'Berani melapor kepada guru ketika melihat teman sekelas dirundung (di-bully), dan berani mengakui jika diri sendiri berbuat salah.',
    caraMenghindariAtauMeraih: 'Menanamkan tauhid kuat bahwa hidup mati dan rezeki ada di tangan Allah SWT semata.'
  },
  {
    id: 'term-m3',
    namaArab: 'تَوَاضُع',
    namaLatin: 'Tawāḍu‘',
    tipe: 'Mahmudah',
    artiSingkat: 'Rendah hati & tidak sombong',
    definisiLengkap: 'Sikap batin yang merendahkan diri di hadapan keagungan Allah dan bersikap ramah sopan terhadap sesama manusia tanpa memandang rendah martabat orang lain.',
    dalilAtauHadis: '"Barang siapa yang merendahkan hati karena Allah, maka Allah akan mengangkat derajatnya" (HR. Muslim).',
    contohKehidupan: 'Mendapat juara 1 lomba MAPSI namun tetap santun menyalami teman, tidak pamer di medsos, dan mau mengajari teman yang belum paham.',
    caraMenghindariAtauMeraih: 'Menyadari bahwa seluruh kepintaran, rupa menawan, dan harta semata pinjaman titipan Allah.'
  },
  {
    id: 'term-m4',
    namaArab: 'أَمَانَة',
    namaLatin: 'Amānah',
    tipe: 'Mahmudah',
    artiSingkat: 'Dapat dipercaya & bertanggung jawab',
    definisiLengkap: 'Menjaga dan menunaikan apa yang dititipkan atau dipercayakan orang lain atau Allah SWT kepada kita, baik berupa barang, jabatan, rahasia, maupun tugas kewajiban.',
    dalilAtauHadis: 'QS. An-Nisa: 58: "Innallāha ya’murukum an tu’addul-amānāti ilā ahlihā" (Sungguh Allah menyuruhmu menyampaikan amanah kepada pemiliknya).',
    contohKehidupan: 'Menjaga uang kas kelas dengan jujur tanpa mengambil sepeser pun untuk jajan pribadi.',
    caraMenghindariAtauMeraih: 'Selalu merasa diawasi Allah (muraqabah) dan malaikat Raqib-Atid.'
  },
  {
    id: 'term-m5',
    namaArab: 'صَبْر',
    namaLatin: 'Ṣabr',
    tipe: 'Mahmudah',
    artiSingkat: 'Ketabahan & menahan gejolak hawa nafsu',
    definisiLengkap: 'Kemampuan mengendalikan diri dari keluhan, keputusasaan, dan amarah. Terbagi 3: Sabar dalam ketaatan beribadah, Sabar menjauhi maksiat, dan Sabar menghadapi musibah pahit.',
    dalilAtauHadis: 'QS. Al-Baqarah: 153: "Innallāha ma‘aṣ-ṣābirīn" (Sesungguhnya Allah bersama orang-orang yang sabar).',
    contohKehidupan: 'Tetap bangun pagi subuh tepat waktu walau mengantuk, dan tetap tabah berobat saat jatuh sakit.',
    caraMenghindariAtauMeraih: 'Meyakini ada pahala tanpa batas (ajrun bighairi hisab) di balik kesabaran.'
  },
  {
    id: 'term-m6',
    namaArab: 'إِخْلَاص',
    namaLatin: 'Ikhlāṣ',
    tipe: 'Mahmudah',
    artiSingkat: 'Memurnikan niat semata mencari ridha Allah',
    definisiLengkap: 'Membersihkan segala amal perbuatan dari keinginan mendapat pujian, sanjungan, imbalan, atau kedudukan dari manusia, semata-mata mengharap ridha Allah SWT.',
    dalilAtauHadis: 'QS. Al-Bayyinah: 5: "Wa mā umirū illā liya‘budullāha mukhliṣīna lahud-dīn".',
    contohKehidupan: 'Menyapu ruang kelas atau bersedekah tanpa menunggu dipuji wali kelas atau teman.',
    caraMenghindariAtauMeraih: 'Menyembunyikan sedekah tangan kiri seperti kata hadis: sedekah rahasia memadamkan murka Tuhan.'
  },
  {
    id: 'term-m7',
    namaArab: 'حُسْنُ الظَّنِّ',
    namaLatin: 'Ḥusnuẓ-ẓann',
    tipe: 'Mahmudah',
    artiSingkat: 'Berprasangka baik kepada Allah & sesama',
    definisiLengkap: 'Berpikir positif dan menaruh prasangka baik terhadap takdir Allah serta tidak cepat berprasangka buruk terhadap niat atau ucapan saudara sesama mukmin.',
    dalilAtauHadis: 'Hadis Qudsi: "Aku berada dalam prasangka hamba-Ku terhadap-Ku" (HR. Bukhari & Muslim).',
    contohKehidupan: 'Ketika teman terlambat mengembalikan buku, berpikir bahwa ia mungkin sedang repot atau lupa, bukan berniat mencuri.',
    caraMenghindariAtauMeraih: 'Mencari 70 alasan pembenaran positif sebelum menghakimi orang lain.'
  },
  {
    id: 'term-m8',
    namaArab: 'عِفَّة',
    namaLatin: '‘Iffah',
    tipe: 'Mahmudah',
    artiSingkat: 'Menjaga kehormatan diri & kesucian',
    definisiLengkap: 'Menahan diri dari hal-hal yang tidak halal, menjauhi perbuatan keji syahwat, dan menjaga harga diri dari meminta-minta kepada orang lain.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Barang siapa menjaga kehormatan dirinya (\'iffah), maka Allah akan memeliharanya" (HR. Bukhari).',
    contohKehidupan: 'Menundukkan pandangan (ghadhul bashar) dari konten asusila di internet dan tidak mengemis uang jajan teman.',
    caraMenghindariAtauMeraih: 'Membentengi diri dengan puasa sunnah, zikir, dan pergaulan yang saleh.'
  },

  // AKHLAK MAZMUMAH (TERCELA)
  {
    id: 'term-c1',
    namaArab: 'أَنَانِيَّة',
    namaLatin: 'Anāniyyah',
    tipe: 'Mazmumah',
    artiSingkat: 'Egois & mementingkan diri sendiri',
    definisiLengkap: 'Sifat tercela yang hanya memikirkan kepentingan dan keuntungan pribadi (aku-sentris) tanpa memedulikan nasib, hak, dan perasaan orang lain di sekitarnya.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Tidak beriman salah seorang di antara kalian hingga ia mencintai saudaranya sebagaimana ia mencintai dirinya sendiri" (HR. Bukhari & Muslim).',
    contohKehidupan: 'Menghabiskan makanan sendirian tanpa membagi teman yang lapar, atau memonopoli mainan kelas.',
    caraMenghindariAtauMeraih: 'Melatih empati (kal jasadil wahid), gemar berbagi, dan mendahulukan orang lain (itsar).'
  },
  {
    id: 'term-c2',
    namaArab: 'حَسَد',
    namaLatin: 'Ḥasad',
    tipe: 'Mazmumah',
    artiSingkat: 'Dengki / iri atas nikmat orang lain',
    definisiLengkap: 'Penyakit hati berupa rasa benci dan tidak senang melihat orang lain memperoleh nikmat atau prestasi, disertai keinginan agar nikmat tersebut hilang dari orang itu.',
    dalilAtauHadis: '"Jauhilah hasad, karena hasad memakan kebaikan sebagaimana api melahap kayu bakar" (HR. Abu Dawud).',
    contohKehidupan: 'Merasa kesal dan mendiamkan teman yang terpilih menjadi ketua OSIS atau juara kelas.',
    caraMenghindariAtauMeraih: 'Mendoakan keberkahan (Ghibthah diperbolehkan: ingin berprestasi seperti teman tanpa mengharapkan nikmat teman hilang).'
  },
  {
    id: 'term-c3',
    namaArab: 'رِيَاء',
    namaLatin: 'Riyā’',
    tipe: 'Mazmumah',
    artiSingkat: 'Pamer ibadah demi sanjungan manusia',
    definisiLengkap: 'Melakukan suatu amal ibadah atau kebajikan dengan maksud ingin dilihat dan dipuji oleh orang lain, bukan murni karena Allah SWT. Disebut juga Syirik Kecil (Asy-Syirkul Ashghar).',
    dalilAtauHadis: 'QS. Al-Ma\'un: 6: "Alladzīna hum yurā’ūn" (Yaitu orang-orang yang berbuat riya\').',
    contohKehidupan: 'Salatnya diperlama dan dikhusyuk-khusyukkan hanya saat diperhatikan oleh guru atau mertua.',
    caraMenghindariAtauMeraih: 'Menyembunyikan amal sunnah, terus memurnikan niat, dan berdoa memohon perlindungan dari syirik khafi.'
  },
  {
    id: 'term-c4',
    namaArab: 'سُمْعَة',
    namaLatin: 'Sum‘ah',
    tipe: 'Mazmumah',
    artiSingkat: 'Memperdengarkan amal agar disanjung',
    definisiLengkap: 'Menceritakan atau memperdengarkan amal kebajikan yang telah dikerjakan secara rahasia kepada orang banyak agar memperoleh ketenaran, pujian, dan penghormatan.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Barang siapa mencari popularitas (sum\'ah), niscaya Allah akan mempermalukan aibnya" (HR. Bukhari).',
    contohKehidupan: 'Membuat status di medsos menceritakan dirinya baru saja bangun tahajud atau menyantuni sekian anak yatim.',
    caraMenghindariAtauMeraih: 'Mengubur amal kebajikan sebagaimana kita mengubur aib masa lalu.'
  },
  {
    id: 'term-c5',
    namaArab: 'عُجْب',
    namaLatin: '‘Ujub',
    tipe: 'Mazmumah',
    artiSingkat: 'Bangga & kagum pada diri sendiri',
    definisiLengkap: 'Merasa kagum atas kelebihan, amal, atau kemampuan diri sendiri dan lupa bahwa segala kelebihan tersebut semata karunia rahmat dari Allah SWT.',
    dalilAtauHadis: 'Ibnu Mas\'ud r.a berkata: "Kebinasaan ada pada dua hal: putus asa dan \'ujub (merasa puas bangga diri)".',
    contohKehidupan: 'Merasa diri paling saleh, paling pintar di kelas, dan menganggap remeh orang lain yang nilainya di bawahnya.',
    caraMenghindariAtauMeraih: 'Selalu mengingat dosa-dosa masa lalu dan menyadari bahwa tanpa taufik Allah kita tidak berdaya apa-apa.'
  },
  {
    id: 'term-c6',
    namaArab: 'كِبْر / تَكَبُّر',
    namaLatin: 'Kibr / Takabbur',
    tipe: 'Mazmumah',
    artiSingkat: 'Sombong & menolak kebenaran',
    definisiLengkap: 'Puncak kesombongan hati yang dicirikan dalam hadis Nabi SAW: "Batharul-ḥaqqi wa gamṭun-nās" (Menolak kebenaran yang datang padanya dan meremehkan/merendahkan orang lain).',
    dalilAtauHadis: '"Tidak akan masuk surga orang yang di dalam hatinya terdapat seberat biji zarrah dari sifat sombong" (HR. Muslim).',
    contohKehidupan: 'Menolak dinasihati teman yang lebih muda meskipun nasihatnya benar dari Al-Qur\'an.',
    caraMenghindariAtauMeraih: 'Mengingat asal usul manusia dari sari pati tanah dan air mani yang hina, serta kelak kembali ke tanah.'
  },
  {
    id: 'term-c7',
    namaArab: 'نَمِيْمَة',
    namaLatin: 'Namīmah',
    tipe: 'Mazmumah',
    artiSingkat: 'Adu domba demi memicu permusuhan',
    definisiLengkap: 'Menyampaikan perkataan seseorang kepada pihak lain dengan maksud merusak hubungan, memecah belah persahabatan, atau menimbulkan kebencian (provokasi).',
    dalilAtauHadis: 'Sabda Nabi SAW: "Lā yadkhulul-jannata qattāt / nammām" (Tidak akan masuk surga tukang adu domba) (HR. Bukhari & Muslim).',
    contohKehidupan: 'Mengatakan kepada Farhan: "Tadi si Budi menjelek-jelekkan kamu lho", padahal tujuannya agar mereka berdua bertengkar.',
    caraMenghindariAtauMeraih: 'Menolak mendengar desas-desus, menasihati pembawa kabar, dan menjaga lisan dari tabayyun negatif.'
  },
  {
    id: 'term-c8',
    namaArab: 'بُهْتَان',
    namaLatin: 'Buhtān',
    tipe: 'Mazmumah',
    artiSingkat: 'Fitnah / tuduhan palsu tanpa dasar',
    definisiLengkap: 'Menuduhkan suatu kejahatan, cela, atau keburukan kepada orang lain padahal orang tersebut sama sekali tidak melakukannya. Dosa fitnah lebih kejam dari ghibah biasa.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Jika apa yang engkau katakan itu tidak ada pada saudaramu, maka engkau telah melakukan buhtan (fitnah)" (HR. Muslim).',
    contohKehidupan: 'Menuduh teman mencuri pulpen tanpa bukti nyata hingga ia dikucilkan teman-teman sekelas.',
    caraMenghindariAtauMeraih: 'Menerapkan tabayyun (verifikasi kebenaran - QS. Al-Hujurat: 6) dan takut akan azab fitnah.'
  },
  {
    id: 'term-c9',
    namaArab: 'طَمَع',
    namaLatin: 'Ṭama‘',
    tipe: 'Mazmumah',
    artiSingkat: 'Tamak / serakah harta & kekuasaan',
    definisiLengkap: 'Sifat rakus dan haus akan kenikmatan duniawi, selalu merasa tidak puas dengan rezeki halal yang ada, sehingga rela menabrak aturan hukum syariah demi memperkaya diri.',
    dalilAtauHadis: 'Sabda Nabi SAW: "Seandainya anak Adam memiliki dua lembah emas, niscaya ia akan mencari lembah ketiga" (HR. Bukhari).',
    contohKehidupan: 'Mengambil makanan jatah teman lain saat acara sekolah karena merasa porsi miliknya kurang banyak.',
    caraMenghindariAtauMeraih: 'Membiasakan hidup qana\'ah dan memperbanyak sedekah.'
  },
  {
    id: 'term-c10',
    namaArab: 'إِسْرَاف & تَبْذِيْر',
    namaLatin: 'Isrāf & Tabżīr',
    tipe: 'Mazmumah',
    artiSingkat: 'Boros & menghamburkan harta sia-sia',
    definisiLengkap: 'Israf adalah berlebih-lebihan dalam hal yang mubah (seperti makan terlalu kenyang hingga sakit); Tabdzir adalah membelanjakan harta untuk maksiat atau hal yang sama sekali tidak bermanfaat.',
    dalilAtauHadis: 'QS. Al-Isra: 27: "Innal-mubażżirīna kānū ikhwānasy-syayāṭīn" (Sesungguhnya pemboros-pemboros itu adalah saudara-saudara setan).',
    contohKehidupan: 'Membeli makanan banyak lalu dibuang ke tempat sampah karena tidak habis, atau membeli mainan mahal tak terpakai.',
    caraMenghindariAtauMeraih: 'Membuat perencanaan belanja kebutuhan primer dan menabung untuk infaq sedekah.'
  }
];
