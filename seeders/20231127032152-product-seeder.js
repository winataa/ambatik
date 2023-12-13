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
        name: 'KAIN BATIK TULIS ASLI BAKARAN PATI',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk1.png',
        description: 'BATIK TULIS ASLI \nBatik Tulis Khas Bakaran Juwana Pati \nMohon Tanyakan Stok Sebelum Order \nBahan : Katun Prima \nUkuran : -+215x115',
        price: 135000,
        rating: 4.9,
        product_sold: 206,
        store_name: 'Deny Batik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hadinata Batik Pria Kemeja Panjang Furing Semi Sutra Zafeer Zahra',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk2.png',
        description: '-Batik Print \n- Material Semi Sutra , Ringan , Tidak melar dan Tidak Menerawang \n- Cutting Reguler Fit \n- Forward Point Collar ( Kerah Kemeja) \n- Hidden Button \n- Lengan Panjang \n- Memakai Furing \n- Warna Hitam \n- Model menggunakan size M TB 182',
        price: 419000,
        rating: 4.9,
        product_sold: 259,
        store_name: 'Hadinata Batik Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Batik Pria WAYANG SOGAN Full Furing Bahan Katun Halus High Quality',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk3.png',
        description: 'Spesifikasi Produk \n -Foto produk real \n Size lengkap \n Full Furing  \n Material 100% katun ]\nTidak mudah luntur \nJahitan rapi \nPesanan Kusus chat admin \nKain tebal \nWelcome reseller / dropsiper \n Peking Rapi \nKantong Saku Atas \nGaransi tukar barang / pengembalian dana apabila barang yang di terima rusak / cacat',
        price: 120000,
        rating: 4.7,
        product_sold: 461,
        store_name: 'Batik Dewa Ruci',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laskala Batik Premium Slimfit Sandro 2.0 K08A331',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk4.png',
        description: 'Laskala menghadirkan pesona tradisional dengan sentuhan modern dalam koleksi baju batik dan dengan cuttingan slimfit yang bertujuan untuk memberikan kesan bodyfit. \n Baju batik ini menggabungkan kemewahan dan kenyamanan dalam satu desain. Kenakan baju batik ini dengan rasa bangga dan hadirkan pesona budaya Indonesia dalam gaya Anda. Baik untuk acara formal, pertemuan bisnis, atau penampilan sehari-hari.',
        price: 495000,
        rating: 4.8,
        product_sold: 3200,
        store_name: 'Laskala Batik Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Couple Batik Terbaru motif Wibisana  Slimfit Kwalitas Premium  Katun  Puring Original Batik Prabuseno Lengan Lengan Panjang',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk5.png',
        description: 'SELAMAT DATANG DI TOKO KAMI \nKami menjual Aneka ragam Batik Kekinian untuk Pria dan Wanita , dan berbagai macam motif batik yang selalu update tiap minggunya \n HATI - HATI BELI BATIK JANGAN TERJEBAK DENGAN HARGA MURAH gambar bisa di curi tapi Kwalitas bisa di Adu orang Cerdas pasti pilih yang berkelas',
        price: 750000,
        rating: 4.9,
        product_sold: 8,
        store_name: 'Batik Prabuseno Colection',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Baju Batik Pria Seno Dyadmiko Hijau',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk6.png',
        description: 'BLARAK BATIK \n PEKALONGAN BATIK CITY - PREMIUM & ORIGINAL \n Detail Produk : \n- Batik cutting Reguler \n- Bahan katun prima spesialis \n- Batik motif sambung \n- Panjang Baju : 67 cm \n- Dijamin adem, halus, tidak luntur serta jahitan rapi',
        price: 159000,
        rating: 4.8,
        product_sold: 51,
        store_name: 'Blarak Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Handara Batik Pria Lengan Panjang Slim Fit Premium Tarumanegara Hitam HB-341',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk7.jpg',
        description: 'DETAIL PRODUK: \n - Batik Print Cabut \n - Bahan Katun Premium \n - Cutting Slim Fit \n - Lapis Furing \n - Saku Dalam \n - Jahitan Rapi Kualitas Tailor \n - Tersedia Ukuran S, M, L, XL, XXL, XXXL',
        price: 159000,
        rating: 4.8,
        product_sold: 51,
        store_name: 'Handara Batik Official Store',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Laskala Premium Batik Batavia 2.0 K09A479',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk8.jpg',
        description: 'Kain Batik / Kain Panjang \n Bahan 100% Katun Premium \n Ukuran \n Lebar 1,05 m x Panjang 2,25 m ( Cukup untuk kemeja lengan panjang XXL  \n Garansi tukar / refund dana 100% jika kualitas produk kami tidak premium (Best Quality)',
        price: 384000,
        rating: 4.8,
        product_sold: 1600,
        store_name: 'Laskala Batik Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'KAIN BATIK PREMIUM Bahan Katun Motif Burung Cokrominoto',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk9.jpg',
        description: 'Kain Batik / Kain Panjang \n Bahan 100% Katun Premium \n Ukuran  \n Lebar 1,05 m x Panjang 2,25 m ( Cukup untuk kemeja lengan panjang XXL ) \n Garansi tukar / refund dana 100% jika kualitas produk kami tidak premium (Best Quality)',
        price: 104000,
        rating: 4.9,
        product_sold: 2200,
        store_name: '72 Batik',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hadinata Batik Pria Kemeja Pendek Damar Dahayu Daniar',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk10.png',
        description: '- Batik Print \n- Material 100% Katun Primis 40S, Ringan, Tidak melar dan Tidak Menerawang \n- Cutting Reguler Fit \n- Forward Point Collar ( Kerah Kemeja) \n- Hidden Button \n- Lengan Pendek \n- Tapa Furing \n- Warna Navy \n- Model menggunakan size M TB 182',
        price: 355000,
        rating: 4.8,
        product_sold: 686,
        store_name: 'Hadinata Batik',
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
      const condition = {
          name: ['KAIN BATIK TULIS ASLI BAKARAN PATI', 
          'Hadinata Batik Pria Kemeja Panjang Furing Semi Sutra Zafeer Zahra',
          'Batik Pria WAYANG SOGAN Full Furing Bahan Katun Halus High Quality',
          'Laskala Batik Premium Slimfit Sandro 2.0 K08A331',
          'Couple Batik Terbaru motif Wibisana  Slimfit Kwalitas Premium  Katun  Puring Original Batik Prabuseno Lengan Lengan Panjang',
          'Baju Batik Pria Seno Dyadmiko Hijau',
          'Handara Batik Pria Lengan Panjang Slim Fit Premium Tarumanegara Hitam HB-341',
          'Laskala Premium Batik Batavia 2.0 K09A479',
          'KAIN BATIK PREMIUM Bahan Katun Motif Burung Cokrominoto',
          'Hadinata Batik Pria Kemeja Pendek Damar Dahayu Daniar'
        ]
      };
    await queryInterface.bulkDelete('products', condition, {});
  }
};
