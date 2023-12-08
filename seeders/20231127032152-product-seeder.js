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
    await queryInterface.bulkInsert('products', [
      {
        name: 'Kemeja Batik Pria Biru',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-6548951/batik_sri_batik_sri_kemeja_batik_pria_full01_dyq6v1vz.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 50,
        rating: 4.5,
        product_sold: 100,
        store_name: 'Store A',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 2',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-8377295/batik_awan_kaos_batik_moderen_pria_lengan_panjang_batik_pekalongan_premium_klp_12002_full00.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 75,
        rating: 4.2,
        product_sold: 80,
        store_name: 'Store B',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 4',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-8377295/batik_awan_kaos_batik_moderen_pria_lengan_panjang_batik_pekalongan_premium_klp_12002_full00.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 115,
        rating: 4.9,
        product_sold: 180,
        store_name: 'Store C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 5',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-8377295/batik_awan_kaos_batik_moderen_pria_lengan_panjang_batik_pekalongan_premium_klp_12002_full00.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 115,
        rating: 4.9,
        product_sold: 180,
        store_name: 'Store C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 6',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-8377295/batik_awan_kaos_batik_moderen_pria_lengan_panjang_batik_pekalongan_premium_klp_12002_full00.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 115,
        rating: 4.9,
        product_sold: 180,
        store_name: 'Store C',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Product 7',
        url_product: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-8377295/batik_awan_kaos_batik_moderen_pria_lengan_panjang_batik_pekalongan_premium_klp_12002_full00.jpg',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: 115,
        rating: 4.9,
        product_sold: 180,
        store_name: 'Store C',
        createdAt: new Date(),
        updatedAt: new Date(),
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
     */
    await queryInterface.bulkDelete('products', null, {});
  }
};
