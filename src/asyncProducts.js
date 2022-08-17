const products = [
  {
    id: "1",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro 14 2021",
    description:
      "Uncompromising performance for the most demanding users, it's the MacBook Pro 14 M1 Pro 2021. Its durable chassis made of aluminum encloses a stunning Apple M1 Pro chip to deliver blazing fast performance.",
    price: 1699,
    stock: 12,
    priceBefore: 2999,
    discount: "-40% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002854402/377600/macbook-pro-14-m1-pro-2021-512gb-space-grey--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "2",
    brand: "Samsung",
    category: "tv",
    model: "Samsung 65 4K TV (2022)",
    description:
      "Enjoy everything you watch in spectacularly balanced colors with the Samsung 65 Q83B 4K UHD Smart TV featuring Quantum Dot technology, powerful processor, virtual surround sound and Direct Full Array brightness control.",
    price: 2599,
    stock: 12,
    priceBefore: 3699,
    discount: "-35%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002970388/431107/samsung-65-q83b-4k-qled-tv-2022--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "3",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung Galaxy S22+ 5G",
    description:
      "The slim bezels of the Samsung Galaxy S22+ along with a polished bezel feel like a work of art in your hands. The frame in Armor Aluminum protects the phone from falls and IP68 certification provides protection against water and dust.",
    price: 2499,
    stock: 12,
    priceBefore: 2999,
    discount: "-20%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021037500/414952/samsung-galaxy-s22-5g-smartphone-8256gb-green--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "4",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Air 13",
    description:
      "MacBook Air 13 M1 2020 combines minimalism and powerful performance, delivered by the octa-core Apple M1 chip. It has a sharp 13-inch Retina display with True Tone technology. When you buy a MacBook, you get Apple TV+ free for 3 months.",
    price: 1999,

    stock: 12,
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002599659/254406/macbook-air-13-m18256-2020-guld--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "5",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro 14 2021",
    description:
      "Uncompromising performance for the most demanding users, it's the MacBook Pro 14 M1 Pro 2021. Its durable chassis made of aluminum encloses a stunning Apple M1 Pro chip to deliver blazing fast performance.",
    price: 1699,
    stock: 12,
    priceBefore: 2999,
    discount: "-40% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002854402/377600/macbook-pro-14-m1-pro-2021-512gb-space-grey--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "6",
    brand: "Samsung",
    category: "tv",
    model: "Samsung 65 4K TV (2022)",
    description:
      "Enjoy everything you watch in spectacularly balanced colors with the Samsung 65 Q83B 4K UHD Smart TV featuring Quantum Dot technology, powerful processor, virtual surround sound and Direct Full Array brightness control.",
    price: 2599,
    stock: 12,
    priceBefore: 3699,
    discount: "-35%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002970388/431107/samsung-65-q83b-4k-qled-tv-2022--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "7",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung Galaxy S22+ 5G",
    description:
      "The slim bezels of the Samsung Galaxy S22+ along with a polished bezel feel like a work of art in your hands. The frame in Armor Aluminum protects the phone from falls and IP68 certification provides protection against water and dust.",
    price: 2499,
    stock: 12,
    priceBefore: 2999,
    discount: "-20%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021037500/414952/samsung-galaxy-s22-5g-smartphone-8256gb-green--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "8",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Air 13",
    description:
      "MacBook Air 13 M1 2020 combines minimalism and powerful performance, delivered by the octa-core Apple M1 chip. It has a sharp 13-inch Retina display with True Tone technology. When you buy a MacBook, you get Apple TV+ free for 3 months.",
    price: 1999,

    stock: 12,
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002599659/254406/macbook-air-13-m18256-2020-guld--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "9",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro 14 2021",
    description:
      "Uncompromising performance for the most demanding users, it's the MacBook Pro 14 M1 Pro 2021. Its durable chassis made of aluminum encloses a stunning Apple M1 Pro chip to deliver blazing fast performance.",
    price: 1699,
    stock: 12,
    priceBefore: 2999,
    discount: "-40% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002854402/377600/macbook-pro-14-m1-pro-2021-512gb-space-grey--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "10",
    brand: "Samsung",
    category: "tv",
    model: "Samsung 65 4K TV (2022)",
    description:
      "Enjoy everything you watch in spectacularly balanced colors with the Samsung 65 Q83B 4K UHD Smart TV featuring Quantum Dot technology, powerful processor, virtual surround sound and Direct Full Array brightness control.",
    price: 2599,
    stock: 12,
    priceBefore: 3699,
    discount: "-35%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002970388/431107/samsung-65-q83b-4k-qled-tv-2022--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "11",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung Galaxy S22+ 5G",
    description:
      "The slim bezels of the Samsung Galaxy S22+ along with a polished bezel feel like a work of art in your hands. The frame in Armor Aluminum protects the phone from falls and IP68 certification provides protection against water and dust.",
    price: 2499,
    stock: 12,
    priceBefore: 2999,
    discount: "-20%",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021037500/414952/samsung-galaxy-s22-5g-smartphone-8256gb-green--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "12",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Air 13",
    description:
      "MacBook Air 13 M1 2020 combines minimalism and powerful performance, delivered by the octa-core Apple M1 chip. It has a sharp 13-inch Retina display with True Tone technology. When you buy a MacBook, you get Apple TV+ free for 3 months.",
    price: 1999,

    stock: 12,
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002599659/254406/macbook-air-13-m18256-2020-guld--pdp_zoom-3000--pdp_main-960.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === id));
    }, 500);
  });
};
