const products = [
  {
    id: "1",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro 14 2021",
    description:
      "Uncompromising performance for the most demanding users, it's the MacBook Pro 14 M1 Pro 2021. Its durable chassis made of aluminum encloses a stunning Apple M1 Pro chip to deliver blazing fast performance.",
    price: "$1699",
    priceBefore: "$2999",
    discount: "-40% ",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002854402/377600/macbook-pro-14-m1-pro-2021-512gb-space-grey--pdp_zoom-3000--pdp_main-960.jpg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
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

/* 
,
  {
    id: "2",
    brand: "Samsung",
    category: "tv",
    model: "AU7175 LED",
    price: "$2599",
    priceBefore: "$3699",
    discount: "-35%",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "3",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung s22",
    price: "$2499",
    priceBefore: "$2999",
    discount: "-20%",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "4",
    brand: "Apple",
    category: "laptop",
    model: "Macbook air",
    price: "$1999",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },

  {
    id: "5",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro",
    price: "$2499",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "6",
    brand: "Samsung",
    category: "tv",
    model: "AU7175 LED",
    price: "$3299",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "7",
    brand: "Apple",
    category: "laptop",
    model: "Macbook air",
    price: "$1999",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "8",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "9",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro",
    price: "$2499",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "10",
    brand: "Samsung",
    category: "tv",
    model: "AU7175 LED",
    price: "$3299",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "11",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "12",
    brand: "Apple",
    category: "laptop",
    model: "Macbook air",
    price: "$1999",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "13",
    brand: "Apple",
    category: "laptop",
    model: "MacBook Pro",
    price: "$2499",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "14",
    brand: "Samsung",
    category: "tv",
    model: "AU7175 LED",
    price: "$3299",
    image:
      "https://www.elgiganten.se/image/dv_web_D180001002868757/293463/samsung-85-au7175-4k-led-2021--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "15",
    brand: "Apple",
    category: "laptop",
    model: "Macbook air",
    price: "$1999",
    image:
      "https://www.elgiganten.se/image/dv_web_D1800010021018658/474931/macbook-air-m2-2022-8512gb-midnight--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: "16",
    brand: "Samsung",
    category: "smartphone",
    model: "Samsung s22",
    price: "$2400",
    image:
      " https://www.elgiganten.se/image/dv_web_D180001002929923/414961/samsung-galaxy-s22-5g-smartphone-8128gb-phantom-black--pdp_zoom-3000--pdp_main-960.jpg",
  },



*/
