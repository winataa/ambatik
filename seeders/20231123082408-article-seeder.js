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
    return queryInterface.bulkInsert('Articles', [
      {
        title: 'Yuk, Rayakan Hari Batik Nasional dalam Rangkaian Acara Keren GANTARI!',
        url_banner: 'https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-rayakan-hari-batik-nasional-dalam-rangkaian-acara-keren-gantari/gantari-artikel-1.jpg',
        author: 'Wiguna Wijaya',
        content: 'Dalam penyelenggaraan kali ini, LAKON Indonesia akan mempresentasikan koleksi yang lebih matang dan lebih dalam, berupa 125 koleksi pakaian siap pakai yang akan diperagakan oleh 100 orang model. Nggak hanya pagelaran busana, GANTARI turut menggerakan para artisan dan pengrajin di daerah Jawa, khususnya Yogyakarta dan Jawa Tengah, berupa batik, jumputan, dan tenun lurik dari bahan baku serat natural Rangkaian acara menarik seperti, Video Presentasi ‘Metamorfosa’ dan pertunjukan wayang kulit akan menjadi segmen lainnya dari acara inti fashion show. Yang menariknya, peragaan busana ini juga bakal diiringi oleh musik Gamelan dan diselingi dengan tarian dari kesultanan di Jawa, Surakarta atau Yogyakarta lho. Untuk desainernya, GANTARI berkolaborasi dengan Irsan dari The House of Irsan. Keren banget, kan?',
        total_like: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'FESTIVAL BATIK 2022 “Batik Jogja Istimewa Mendunia” (19-23 Oktober 2022)',
        url_banner: 'https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/ide-liburan/yuk-rayakan-hari-batik-nasional-dalam-rangkaian-acara-keren-gantari/gantari-artikel-1.jpg',
        author: 'Adi',
        content: 'Persembahan Dinas Perindustrian Dan Perdagangan Daerah Istimewa Yogyakarta. Kegiatan Ini didanai dari Dana Keistimewaan Daerah Istimewa Yogyakarta Tahun 2022',
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
        title: ['FESTIVAL BATIK 2022 “Batik Jogja Istimewa Mendunia” (19-23 Oktober 2022)', 'Yuk, Rayakan Hari Batik Nasional dalam Rangkaian Acara Keren GANTARI!']
      };
      // await queryInterface.bulkDelete('likes', null, {});

     // Then remove records from the parent table (e.g., users)
      await queryInterface.bulkDelete('Articles', condition, {});
  }
};
