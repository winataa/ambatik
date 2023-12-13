'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('articles', [
      {
        title: 'Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja',
        url_banner: 'https://storage.googleapis.com/user-photo-profile/artikel_banner/artikel1.png',
        author: 'Devi Puspitasari - detikNews',
        content: 'Jakarta - Presiden Joko Widodo (Jokowi) hadiri acara Istana Berbatik di depan Istana Merdeka, Jalan Medan Merdeka Utara, Jakarta Pusat. Presiden Jokowi mengenakan batik coklat dengan motif Parang Barong yang biasa dikenakan raja. \nBerdasarkan keterangan dari Biro Pers Sekretariat Presiden, Minggu (1/10/2023), nama motif yang dipakai Presiden Jokowi adalah Batik Parang Barong Seling Kembang atau lengkapnya Parang Barong Seling Kembang Udan Riris. \nMotif batik yang dipakai oleh Jokowi memiliki makna, Motif Parang atau Memerangi. Motif itu memiliki makna seorang pemimpin harus berani bersikap tegas memerangi ketidak benaran yang ada. Motif batik Parang biasa dikenakan oleh Para Raja. \nKemudian, motif Udan Riris. Motif Hujan Gerimis memberikan kesejukan di tengah kondisi yang gersang/kering. Sementara itu, Ibu Negara Iriana Jokowi mengenakan kain batik motif truntum sebagai atasan, dan motif parang sebagai bawahan.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Jokowi: Kita Harus Berani Perkenalkan Batik ke Acara Internasional',
        url_banner: 'https://storage.googleapis.com/user-photo-profile/artikel_banner/artikel2.png',
        author: 'Yodie Hardiyan - Bisnis.com',
        content: 'Bisnis.com, JAKARTA--- Presiden Joko Widodo menyatakan masyarakat Indonesia harus berani memperkenalkan batik ke acara-acara internasional. Pernyataan itu disampaikan oleh Jokowi dalam acara peringatan Hari Batik Nasional ke-10 di Puro Mangkunegaran, Kota Surakarta, Rabu, (2/10/2019). \n“Kita juga harus berani memperkenalkan batik ke acara-acara internasional dan menjadikan batik sebagai duta budaya Indonesia pada masyarakat dunia,” tuturnya. Dalam kesempatan itu, Jokowi bercerita pertemuannya dengan mantan Perdana Menteri Australia, Malcolm Turnbull, beberapa waktu lalu. Saat itu, Turnbull datang dengan mengenakan batik yang telah disiapkan oleh Ibu Negara Iriana. Presiden mengaku dibuat pangling dengan penampilan Turnbull itu. “Saya pangling karena batiknya bagus sehingga betul-betul mengubah (gambaran) bahwa beliau bukan dari Australia, kelihatan dari Solo,” ucapnya.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Menjadikan sebagai Souvenir, Cara UMKM Batik di Tuban Tingkatkan Penjualan',
        url_banner: 'https://storage.googleapis.com/user-photo-profile/artikel_banner/artikel3.png',
        author: 'Humas BAZNAS RI',
        content: 'Berbagai cara kreatif dilakukan oleh Usaha Mikro Kecil Menengah (UMKM) untuk meningkatkan penjualan, salah satunya dengan menjadikan produk sebagai souvenir. Seperti yang dilakukan oleh UMKM binaan Badan Amil Zakat Nasional (BAZNAS) di Tuban Jawa Timur, Putri Berdikari Batik. \n"Kali ini, kami mendapatkan pesanan souvenir dari BAZNAS. Inilah salah satu cara kami meningkatkan penjualan, yaitu dengan menjadikan produk batik kami sebagai souvenir lembaga atau perusahaan tertentu," kata Warsimah, divisi pemasaran Koperasi Produksi Putri Berdikari Batik di sela-sela melakukan proses packaging batik, Senin (18/9/2023) di Galeri Mustahik Dusun Bongkol 1 RT 4 RW 1 Sumurgung, Tuban. \n Menurut Warsimah, pesanan berupa souvenir dapat meningkatkan penjualan produk karena biasanya dalam jumlah yang cukup banyak.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Sejarah Batik di Indonesia',
        url_banner: 'https://storage.googleapis.com/user-photo-profile/artikel_banner/artikel4.png',
        author: 'Verelladevanka Adryamarthanino , Tri Indriawati ',
        content: 'Batik adalah salah satu hasil karya perpaduan antara seni dan teknologi oleh leluhur bangsa Indonesia. Indonesia yang terdiri atas sekitar 17.000 pulau telah memiliki motif batik beraneka ragam dengan keunikannya tersendiri. Maka dari itu, batik masuk ke dalam Warisan Kemanusiaan untuk Budaya Lisan dan Nonbendawi atau Masterpieces of the Oral and Intangible of Humanity sejak 2 Oktober 2009, oleh UNESCO. Sejak saat itu, 2 Oktober ditetapkan sebagai Hari Batik Nasional. \nLalu, bagaimana sejarah batik di Indonesia? Asal-usul nama batik berasal dari Bahasa Jawa, yaitu amba yang berarti tulis, dan nitik yang berarti titik. Jika digabungkan, maka artinya adalah menulis dengan lilin. Hal ini sesuai dengan bagaimana proses pembuatan batik berlangsung, yaitu di atas sebuah kain menggunakan canting yang ujungnya berukuran kecil, sehingga memberikan kesan "orang sedang menulis titik-titik."',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hadiri Puncak Peringatan Hari Batik Nasional, Ketua Dekranas Dukung Peningkatan Edukasi Ragam Batik',
        url_banner: 'https://storage.googleapis.com/user-photo-profile/artikel_banner/artikel5.png',
        author: 'DAS/AS - BPMI Setwapres',
        content: 'Jakarta, wapresri.go.id - Hari Batik Nasional diperingati setiap tanggal 2 Oktober sejak ditetapkannya Batik Indonesia sebagai Warisan Budaya Tak Benda oleh UNESCO pada tahun 2009. Hal ini menjadi bentuk pengakuan internasional terhadap karya budaya milik bangsa, yang meningkatkan citra positif Indonesia di mata dunia. \nUntuk itu, Ketua Dewan Kerajinan Nasional (Dekranas) Ibu Hj. Wury Maruf Amin mendukung penuh upaya peningkatan edukasi kepada masyarakat, utamanya kepada generasi muda dalam memperkaya wawasan keragaman batik tanah air.',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      const condition = {
        title: ['Istana Berbatik, Jokowi Pakai Batik Parang yang Biasa Dikenakan Raja', 
        'Jokowi: Kita Harus Berani Perkenalkan Batik ke Acara Internasional',
        'Menjadikan sebagai Souvenir, Cara UMKM Batik di Tuban Tingkatkan Penjualan',
        'Sejarah Batik di Indonesia',
        'Hadiri Puncak Peringatan Hari Batik Nasional, Ketua Dekranas Dukung Peningkatan Edukasi Ragam Batik'
      ]
      };
      // await queryInterface.bulkDelete('likes', null, {});

     // Then remove records from the parent table (e.g., users)
      await queryInterface.bulkDelete('articles', condition, {});
  }
};
