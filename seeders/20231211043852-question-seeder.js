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
    await queryInterface.bulkInsert('questions', [
      {
        question: 'Batik ini berasal dari Daerah Istimewa Yogyakarta, makna batik ini ialah cinta yang tumbuh kembali. Batik ini biasanya dipakai oleh orang tua pengantin pada hari pernikahan. Batik yang dimaksud adalah ….',
        quizId: '1'
      },
      {
        question: 'Batik berasal dari kata …', 
        quizId: '1'
      },
      {
        question: 'Hari batik nasional diperingati setiap tanggal …', 
        quizId: '1'
      },
      {
        question: 'Motif batik ini menggambarkan kekayaan, keindahan dan keanggunan alam dan fauna Papua. Motif batik yang di maksud adalah motif …', 
        quizId: '1'
      },
      {
        question: 'Proses membatik dengan canting dinamakan batik …', 
        quizId: '1'
      },
      {
        question: 'Batik yang memiliki corak kotak-kotak dengan warna yang berulang-ulang serta batik ini berasal dari Bali, batik yang dimaksud adalah batik….', 
        quizId: '2'
      },
      {
        question: 'Batik dengan motif yang tersusun dari ribuan titik-titik dan berasal dari Yogyakarta bernama batik …', 
        quizId: '2'
      },
      {
        question: 'Konon inspirasi motif batik ini adalah bentuk awan pada genangan air hujan dan cuaca mendung. Batik ini berasal dari Cirebon, Jawa Barat. Batik yang dimaksud adalah batik …', 
        quizId: '2'
      },
      {
        question: 'Alat yang dipakai untuk memindahkan atau mengambil cairan yang khas digunakan untuk membuat batik tulis disebut …', 
        quizId: '2'
      },
      {
        question: 'Batik yang mengandung makna kecantikan, ungkapan cinta dan keindahan umumnya sering dikenakan dalam pesta pernikahan adalah batik …', 
        quizId: '2' 
      },
      {
        question: 'Apa yang membedakan batik tulis dengan batik cap dalam proses pembuatannya?', 
        quizId: '3' 
      },
      {
        question: 'Proses pembuatan batik cap melibatkan penggunaan cetakan yang terbuat dari bahan apa?',
        quizId: '3' 
      },
      {
        question: 'Bagaimana cara tradisional pewarnaan batik dilakukan?', 
        quizId: '3' 
      },
      {
        question: 'Batik motif  “Truntum” melambangkan apa dalam tradisi Jawa?', 
        quizId: '3' 
      },
      {
        question: 'Batik “Kawung” sering dikaitkan dengan simbol apa dalam budaya Jawa?', 
        quizId: '3' 
      },
      // Add more product objects as needed
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
    await queryInterface.bulkDelete('questions', null, {});

  }
};
