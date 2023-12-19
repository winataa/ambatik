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
        description: 'Spesifikasi Produk \n- Foto produk real \n- Size lengkap \n- Full Furing  \n- Material 100% katun \n- Tidak mudah luntur \n- Jahitan rapi \n- Pesanan Kusus chat admin \n- Kain tebal \n- Welcome reseller / dropsiper \n- Peking Rapi \n- Kantong Saku Atas \n- Garansi tukar barang / pengembalian dana apabila barang yang di terima rusak / cacat',
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
        description: 'Laskala menghadirkan pesona tradisional dengan sentuhan modern dalam koleksi baju batik dan dengan cuttingan slimfit yang bertujuan untuk memberikan kesan bodyfit. \nBaju batik ini menggabungkan kemewahan dan kenyamanan dalam satu desain. Kenakan baju batik ini dengan rasa bangga dan hadirkan pesona budaya Indonesia dalam gaya Anda. Baik untuk acara formal, pertemuan bisnis, atau penampilan sehari-hari.',
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
        description: 'SELAMAT DATANG DI TOKO KAMI \nKami menjual Aneka ragam Batik Kekinian untuk Pria dan Wanita , dan berbagai macam motif batik yang selalu update tiap minggunya \nHATI - HATI BELI BATIK JANGAN TERJEBAK DENGAN HARGA MURAH gambar bisa di curi tapi Kwalitas bisa di Adu orang Cerdas pasti pilih yang berkelas',
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
        description: 'BLARAK BATIK \nPEKALONGAN BATIK CITY - PREMIUM & ORIGINAL \nDetail Produk : \n- Batik cutting Reguler \n- Bahan katun prima spesialis \n- Batik motif sambung \n- Panjang Baju : 67 cm \n- Dijamin adem, halus, tidak luntur serta jahitan rapi',
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
        description: 'DETAIL PRODUK: \n- Batik Print Cabut \n- Bahan Katun Premium \n- Cutting Slim Fit \n- Lapis Furing \n- Saku Dalam \n- Jahitan Rapi Kualitas Tailor \n- Tersedia Ukuran S, M, L, XL, XXL, XXXL',
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
        description: 'Kain Batik / Kain Panjang \nBahan 100% Katun Premium \nUkuran \nLebar 1,05 m x Panjang 2,25 m ( Cukup untuk kemeja lengan panjang XXL  \nGaransi tukar / refund dana 100% jika kualitas produk kami tidak premium (Best Quality)',
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
        description: 'Kain Batik / Kain Panjang \nBahan 100% Katun Premium \nUkuran  \nLebar 1,05 m x Panjang 2,25 m ( Cukup untuk kemeja lengan panjang XXL ) \nGaransi tukar / refund dana 100% jika kualitas produk kami tidak premium (Best Quality)',
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
      {
        name: 'Batik Adhirajasa lengan pendek lasem 6a abu-abu',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk50.png',
        description: '(-)Kemeja ini di produksi di Pekalongan Jawa tengah. Kemeja ini bisa di gunakan untuk kasual bisnis dan acara-acara formal atau non formal \n(-) Kemeja Lengan Pendek \n(-) Adem \n(-) Halus \n(-) Tidak Menggunakan Furing \n(-) Bahan Cotton \n(-) Terdapat 1 Kantong \n(-) Reguler Fit',
        price: 61830,
        rating: 5.0,
        product_sold: 2,
        store_name: 'Pradawita Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Arjuna Weda Kemeja Batik Pria Motif Parang Camelia',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk49.png',
        description: '1. Kemeja Batik By Arjuna Weda \n2. Bahan Semi Sutera \n3. Kerah Kemeja \n4. Lengan Panjang \n5. Kancing Depan \n6. Kantong Kiri Depan \n7. Batik Parang Camelia \n8. Regular Fit',
        price: 129000,
        rating: 5.0,
        product_sold: 2,
        store_name: 'ArjunaWeda Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dianputri - Kemeja batik pria lengan panjang motif BATIK DIANPUTRI - Batik kantor pria (Motif Cendrawasih)',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk48.png',
        description: 'BATIK DIANPUTRI menghadirkan motif batik berkualitas, yang diproses secara sempurna dengan corak khas batik Pekalongan. Buat penampilan kamu semakin menawan, kalem dan elegan dengen corak berkelas. \nLangsung produsen tangan pertama . jadi awas barang tiruan ya kak ',
        price: 129000,
        rating: 5.0,
        product_sold: 2,
        store_name: 'ArjunaWeda Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Arjuna Weda Kemeja Pria Batik Nitik Mahkota Raja',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk47.png',
        description: '- Kemeja untuk elegant formal look detail motif batik print klasik \n- Kombinasi warna cokelat dan hitam \n- Detail kerah \n- Unlined \n- Regular fit \n- Kancing depan \n- 1 kantong depan \n- Material katun primis tidak transparan, ringan dan tidak stretch \n- Tinggi model 184.7cm, lingkar dada 97.3cm, mengenakan ukuran L',
        price: 129000,
        rating: 5.0,
        product_sold: 2,
        store_name: 'ArjunaWeda Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Adikusuma Hem Pria Batik Kawung Prabu',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk46.png',
        description: '- Hem \n- Katun prima \n- Merah \n- Detail kerah \n- Lengan pendek \n- Hidden button \n- Kantong depan \n- Motif batik print \n- Regular',
        price: 75000,
        rating: 5.0,
        product_sold: 22,
        store_name: 'Adikusuma Official Shop',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'KAIN BATIK CAP POLENG/KAIN CAP MOTIF POLENG/KAIN POLENG/KAIN CAP SALUR/KAIN WONOGIREN POLENG SALUR',
        url_product: 'https://storage.googleapis.com/user-photo-profile/produk_photo/produk45.png',
        description: 'KAIN BATIK CAP MOTIF POLENG \nproses cap \nBahan : katun \nUkuran : 2meter x 1,15 meter \nHalus, adem, dan  nyaman dipakai \nMENERIMA PEMESANAN ECERAN/SERAGAM/DROPSHIP \nSetiap pembelian kalian bakal dapat FREE HADIAH MENARIK dari kita loh (selama persediaan masih ada)',
        price: 10000,
        rating: 5.0,
        product_sold: 16,
        store_name: 'omah_batik_solo ',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
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
