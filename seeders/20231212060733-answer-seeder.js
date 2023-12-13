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
    await queryInterface.bulkInsert('answers', [
      //QUIZ TYPE 1

      // Question 1
      { answer: 'Batik Tambal', truth: '0', questionId: '1' },
      { answer: 'Batik Truntum', truth: '1', questionId: '1' },
      { answer: 'Batik Sogan', truth: '0', questionId: '1' },
      { answer: 'Batik Simbut', truth: '0', questionId: '1' },

      // Question 2
      { answer: 'Atik', truth: '0', questionId: '2' },
      { answer: 'Titik', truth: '0', questionId: '2' },
      { answer: 'Ambatik', truth: '1', questionId: '2' },
      { answer: 'Nitik', truth: '0', questionId: '2' },

      // Question 3
      { answer: '1 Oktober', truth: '0', questionId: '3' },
      { answer: '2 Oktober', truth: '1', questionId: '3' },
      { answer: '3 Oktober', truth: '0', questionId: '3' },
      { answer: '4 Oktober', truth: '0', questionId: '3' },

      // Question 4
      { answer: 'Nitik', truth: '0', questionId: '4' },
      { answer: 'Insang', truth: '1', questionId: '4' },
      { answer: 'Lasem', truth: '0', questionId: '4' },
      { answer: 'Cendrawasih', truth: '1', questionId: '4' },
    
      // Question 5
      { answer: 'Cap', truth: '0', questionId: '5' },
      { answer: 'Lukis', truth: '0', questionId: '5' },
      { answer: 'Tulis', truth: '1', questionId: '5' },
      { answer: 'Cetak ', truth: '0', questionId: '5' },
  
      // QUIZ TYPE 2

      // Question 1
      { answer: 'Tambal', truth: '0', questionId: '6' },
      { answer: 'Lasem', truth: '0', questionId: '6' },
      { answer: 'Poleng', truth: '1', questionId: '6' },
      { answer: 'Nitik ', truth: '0', questionId: '6' },

      //Question 2
      { answer: 'Nitik', truth: '1', questionId: '7' },
      { answer: 'Poleng', truth: '0', questionId: '7' },
      { answer: 'Truntum', truth: '0', questionId: '7' },
      { answer: 'Lasem ', truth: '0', questionId: '7' },

      //Question 3
      { answer: 'Kawung', truth: '0', questionId: '8' },
      { answer: 'Mega mendung', truth: '1', questionId: '8' },
      { answer: 'Geblek renteng', truth: '0', questionId: '8' },
      { answer: 'Sekar jagad ', truth: '0', questionId: '8' },
    
      //Question 4
      { answer: 'Cemplung', truth: '0', questionId: '9' },
      { answer: 'Malam', truth: '0', questionId: '9' },
      { answer: 'Tulis', truth: '0', questionId: '9' },
      { answer: 'Canting ', truth: '1', questionId: '9' },
  
      //Question 5
      { answer: 'Sekar jagad', truth: '1', questionId: '10' },
      { answer: 'Mega mendung', truth: '0', questionId: '10' },
      { answer: 'Poleng', truth: '0', questionId: '10' },
      { answer: 'Kawung ', truth: '0', questionId: '10' },

      // QUIZ TYPE 3

      //Question 1
      { answer: 'Motif', truth: '0', questionId: '11' },
      { answer: 'Warna', truth: '0', questionId: '11' },
      { answer: 'Bahan kain', truth: '0', questionId: '11' },
      { answer: 'Metode pewarnaan ', truth: '1', questionId: '11' },
      
      //Question 2
      { answer: 'Logam', truth: '1', questionId: '12' },
      { answer: 'Kayu', truth: '0', questionId: '12' },
      { answer: 'Kain', truth: '0', questionId: '12' },
      { answer: 'Plastik', truth: '0', questionId: '12' },
      
      //Question 3
      { answer: 'Menyemprotkan cat', truth: '0', questionId: '13' },
      { answer: 'Mencelupkan kain ke dalam larutan pewarna', truth: '1', questionId: '13' },
      { answer: 'Melukis langsung di atas kain', truth: '0', questionId: '13' },
      { answer: 'Menggunakan spidol permanen', truth: '0', questionId: '13' },

      //Question 4
      { answer: 'Asal-usul manusia', truth: '0', questionId: '14' },
      { answer: 'Keharmonisan dan kekompakan keluarga', truth: '0', questionId: '14' },
      { answer: 'Cinta Sejati', truth: '1', questionId: '14' },
      { answer: 'Pembawa keberuntungan ', truth: '0', questionId: '14' },
      
      //Question 5
      { answer: 'Gajah', truth: '0', questionId: '15' },
      { answer: 'Singa', truth: '0', questionId: '15' },
      { answer: 'Matahari', truth: '1', questionId: '15' },
      { answer: 'Pohon Beringin ', truth: '0', questionId: '15' },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('answers', null, {});
  }
};
