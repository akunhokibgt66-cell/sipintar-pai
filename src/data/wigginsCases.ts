import { WigginsFacet } from '../types';

export interface WigginsCase {
  id: string;
  facet: WigginsFacet;
  title: string;
  scenario: string;
  question: string;
  options: {
    text: string;
    isBest: boolean;
    feedback: string;
  }[];
  theologicalPrinciple: string;
  deepInsight: string;
}

export const wigginsCases: WigginsCase[] = [
  {
    id: 'case-1',
    facet: 'Penjelasan',
    title: 'Hakikat Di Balik Penciptaan Bersuku-Suku',
    scenario: 'Dalam sebuah diskusi di kelas, seorang murid bertanya: "Jika Allah Mahakuasa untuk menjadikan semua manusia satu suku bangsa dan satu warna kulit saja di dunia ini, mengapa Allah sengaja menciptakan manusia beraneka ragam suku, bangsa, dan bahasa?"',
    question: 'Berdasarkan QS. Al-Hujurat ayat 13 dan Hadis Haji Wada\', penjelasan ilmiah dan teologis paling tepat adalah...',
    options: [
      {
        text: 'Keragaman diciptakan agar suku yang lebih maju teknologinya dapat menguasai dan membimbing suku yang terbelakang.',
        isBest: false,
        feedback: 'Kurang tepat. Ajaran Islam tidak membenarkan dominasi atau penjajahan satu suku atas suku lain.'
      },
      {
        text: 'Keragaman adalah sunnatullah dan tanda kebesaran Allah (Ayatullah) agar manusia saling mengenal (Li ta\'arafu), berkolaborasi, dan membuktikan bahwa kemuliaan sejati di sisi Allah bukanlah ras atau fisik melainkan ketakwaan.',
        isBest: true,
        feedback: 'Sempurna! Penjelasan ini merangkum hakikat "Lita\'arafu" dan "Inna akramakum \'indallahi atqakum".'
      },
      {
        text: 'Keragaman terjadi semata-mata karena pengaruh mutasi genetik geografis tanpa ada hikmah spiritual di dalamnya.',
        isBest: false,
        feedback: 'Kurang tepat karena mengabaikan dimensi ketauhidan dan hikmah ayat-ayat Allah di alam semesta.'
      }
    ],
    theologicalPrinciple: 'QS. Al-Hujurat: 13 & QS. Ar-Rum: 22',
    deepInsight: 'Penjelasan (Explanation) dalam Wiggins & McTighe menuntut kemampuan menjelaskan fakta secara logis, komprehensif, berbasis data/dalil shahih, dan mengungkap hubungan sebab-akibat yang mendalam.'
  },
  {
    id: 'case-2',
    facet: 'Interpretasi',
    title: 'Menyingkap Kiasan "Bangkai Saudara" pada Ghibah',
    scenario: 'Ahmad heran mengapa Al-Qur\'an mengumpamakan membicarakan keburukan orang lain (ghibah) dengan analogi mengerikan "memakan daging bangkai saudara sendiri" (Al-Hujurat: 12). Ia bertanya apa rahasia sastra di balik analogi tersebut.',
    question: 'Bagaimana penafsiran (interpretasi) yang paling tepat terhadap majas perumpamaan tersebut?',
    options: [
      {
        text: 'Karena orang yang dighibahi tidak berada di tempat sehingga tidak berdaya membela diri, persis seperti orang mati (bangkai) yang tidak bisa melawan saat dagingnya dimakan.',
        isBest: true,
        feedback: 'Tepat sekali! Interpretasi ini menyentuh inti psikologis mengapa perbuatan ghibah sangat licik dan keji.'
      },
      {
        text: 'Karena memakan daging bangkai menyebabkan keracunan makanan secara biologis.',
        isBest: false,
        feedback: 'Tinjauan biologis kurang menyentuh substansi makna metaforis etika Al-Qur\'an.'
      },
      {
        text: 'Perumpamaan tersebut hanyalah hiperbola sastra Arab tanpa makna mendalam.',
        isBest: false,
        feedback: 'Salah. Setiap kata dalam Al-Qur\'an memiliki presisi makna yang sarat hikmah moral.'
      }
    ],
    theologicalPrinciple: 'QS. Al-Hujurat: 12',
    deepInsight: 'Interpretasi (Interpretation) adalah kemampuan menafsirkan teks, memahami makna tersirat, metafora, konteks budaya, dan menghubungkan narasi dengan nilai-nilai hakiki.'
  },
  {
    id: 'case-3',
    facet: 'Aplikasi',
    title: 'Dilema Kejujuran di Ruang Ujian',
    scenario: 'Faris sedang mengerjakan ujian sekolah. Sahabat dekatnya yang duduk di sampingnya berbisik meminta bantuan jawaban untuk nomor soal sulit. Sahabatnya beralasan tadi malam ibunya sakit sehingga tidak sempat belajar. Sahabatnya mengingatkan prinsip "Ta\'awun" (saling menolong).',
    question: 'Bagaimana tindakan aplikasi fiqih dan akhlak yang paling tepat dilakukan Faris saat itu?',
    options: [
      {
        text: 'Memberikan selembar kertas jawaban karena sahabat wajib dibantu saat kesusahan keluarga.',
        isBest: false,
        feedback: 'Keliru. Memberi sontekan adalah tolong-menolong dalam kebatilan dan kecurangan.'
      },
      {
        text: 'Menolak memberikan contekan secara tenang, tetap fokus mengerjakan ujiannya, lalu setelah ujian selesai menjenguk ibu sahabatnya dan menawarkan belajar bersama untuk ujian berikutnya.',
        isBest: true,
        feedback: 'Luar biasa! Faris membedakan antara ta\'awun fil itsmi (dilarang) dan empati sosial yang nyata.'
      },
      {
        text: 'Berteriak di depan pengawas agar sahabatnya langsung dikeluarkan dari ruangan.',
        isBest: false,
        feedback: 'Kurang bijak karena mempermalukan teman di depan umum tanpa menjaga adab berteman.'
      }
    ],
    theologicalPrinciple: 'QS. Al-Ma\'idah: 2 (Tolong menolong dalam kebajikan dan takwa, bukan dosa)',
    deepInsight: 'Aplikasi (Application) adalah kecakapan menggunakan ilmu dan kaidah hukum syariat secara luwes dan berprinsip dalam memecahkan situasi konkret kehidupan nyata.'
  },
  {
    id: 'case-4',
    facet: 'Perspektif',
    title: 'Sudut Pandang Multidimensi atas Ibadah Zakat',
    scenario: 'Seorang ekonom non-muslim menilai zakat 2,5% hanyalah beban pajak keagamaan yang mengurangi kekayaan individu. Guru PAI meminta para santri membedah ibadah zakat dari berbagai sudut pandang (perspektif).',
    question: 'Sudut pandang komprehensif apa yang membuktikan bahwa zakat justru menguntungkan perekonomian dan masyarakat?',
    options: [
      {
        text: 'Zakat menyucikan jiwa muzakki dari ketamakan, mengalirkan daya beli kepada kaum dhuafa (8 asnaf) sehingga roda ekonomi berputar, serta mencegah kesenjangan sosial ekstrem.',
        isBest: true,
        feedback: 'Sangat komprehensif! Menyatukan perspektif spiritual, sosiologis, dan ekonomi makro.'
      },
      {
        text: 'Zakat hanya berguna untuk membangun fasilitas megah tempat ibadah di kota-kota besar.',
        isBest: false,
        feedback: 'Kurang tepat. Sasaran utama zakat adalah 8 golongan mustahiq, terutama fakir dan miskin.'
      },
      {
        text: 'Zakat membuat orang miskin tidak perlu bekerja lagi karena terus disubsidi setiap tahun.',
        isBest: false,
        feedback: 'Salah total. Zakat produktif justru bertujuan memberdayakan mustahiq agar menjadi muzakki.'
      }
    ],
    theologicalPrinciple: 'QS. At-Taubah: 103 & QS. Al-Hasyr: 7 (Supaya harta tidak hanya beredar di kalangan orang kaya)',
    deepInsight: 'Perspektif (Perspective) adalah kemampuan melihat suatu isu dari berbagai sudut pandang kritis, melampaui anggapan dangkal, dan memahami dampak sistemik.'
  },
  {
    id: 'case-5',
    facet: 'Empati',
    title: 'Menyelami Kesedihan Anak Yatim di Hari Raya',
    scenario: 'Menjelang Hari Raya Idulfitri, seluruh anak di kampung mengenakan baju baru bersama ayah mereka. Di sudut serambi masjid, tampak seorang anak yatim duduk termenung dengan tatapan kosong memandangi sepatunya yang lusuh.',
    question: 'Berdasarkan teladan Surah Adh-Dhuha ayat 9 dan sabda Nabi SAW "Ana wa kafulul yatimi fil jannah kahatain", bagaimana sikap santri berempati sejati?',
    options: [
      {
        text: 'Memamerkan pakaian baru kita kepadanya agar ia termotivasi untuk giat menabung.',
        isBest: false,
        feedback: 'Sangat menyakitkan hatinya dan bertentangan dengan ajaran akhlak karimah.'
      },
      {
        text: 'Mendekatinya dengan hangat, menyapanya ramah, mengajaknya bermain bersama keluarga kita, serta menyisihkan hadiah atau baju layak dengan penuh takzim tanpa membuatnya merasa rendah diri.',
        isBest: true,
        feedback: 'Tepat sekali! Memuliakan anak yatim harus disertai penghormatan pada martabat hatinya.'
      },
      {
        text: 'Memotret kesedihannya lalu mengunggahnya ke media sosial demi mendapatkan banyak likes dan simpati.',
        isBest: false,
        feedback: 'Ini mengeksploitasi penderitaan sesama dan merusak kemurnian niat sedekah.'
      }
    ],
    theologicalPrinciple: 'QS. Adh-Dhuha: 9 & Hadis Kedudukan Pengasuh Anak Yatim di Surga',
    deepInsight: 'Empati (Empathy) adalah kesanggupan merasakan penderitaan dan perspektif batin orang lain, meruntuhkan keegoisan, serta bertindak dengan kelembutan kasih sayang.'
  },
  {
    id: 'case-6',
    facet: 'Refleksi',
    title: 'Muhasabah Atas Amanah Waktu dan Usia Balig',
    scenario: 'Rian baru saja genap berusia 15 tahun dan telah mengalami tanda balig. Ia menyadari bahwa kini catatan amal baik dan buruknya tidak lagi ditanggung orang tuanya, melainkan langsung dicatat malaikat Raqib dan Atid.',
    question: 'Bentuk refleksi diri (muhasabah) yang paling mendalam bagi seorang remaja mukallaf adalah...',
    options: [
      {
        text: 'Merasa terbebani dan berharap bisa kembali menjadi anak balita agar bebas dari dosa.',
        isBest: false,
        feedback: 'Sikap ini menunjukkan ketidaksiapan mental menghadapi amanah kematangan hidup.'
      },
      {
        text: 'Menyadari bahwa balig adalah anugerah kehormatan dari Allah, lalu mengevaluasi kebiasaan harian, memperbaiki salat 5 waktu, membatasi diri dari konten maksiat di gawai, dan merencanakan target hidup yang berkah.',
        isBest: true,
        feedback: 'Sempurna! Inilah hakikat refleksi diri: introspeksi, kesadaran tanggung jawab, dan tekad perbaikan diri.'
      },
      {
        text: 'Bersikap santai saja karena menganggap usia 15 tahun masih terlalu dini untuk memikirkan akhirat.',
        isBest: false,
        feedback: 'Sikap melalaikan yang berbahaya karena ajal tidak mengenal batasan usia tua atau muda.'
      }
    ],
    theologicalPrinciple: 'QS. Al-Hasyr: 18 (Hendaklah setiap diri memperhatikan apa yang telah diperbuatnya untuk hari esok)',
    deepInsight: 'Refleksi Diri (Self-Knowledge) adalah kemampuan mengenali kekurangan, bias prasangka, dan batas pengetahuan diri, serta melakukan muhasabah demi perbaikan moral spiritual yang berkelanjutan.'
  }
];
