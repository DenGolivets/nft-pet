export interface Creator {
  id: number;
  img: string;
  name: string;
  totalSales: string;
  code: string;
  content: Content[];
};

export interface Content {
  id: number;
  img: string;
  name: string;
  price: string;
  hBid: string;
  authorName: string;
}

export const creators = [
  {
    id: 1,
    img: '/avatars/1.svg',
    name: 'Keepitreal',
    totalSales: '34.53',
    code: '0xc0E3...B79C',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Keepitreal',
      }
    ],
  },
  {
    id: 2,
    img: '/avatars/2.svg',
    name: 'DigiLab',
    totalSales: '34.53',
    code: '0xr0E3...A79C',
    content: [
      {
        id: 1,
        img: '/content/10.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 2,
        img: '/content/11.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 3,
        img: '/content/12.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 4,
        img: '/content/13.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 5,
        img: '/content/14.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 6,
        img: '/content/15.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 7,
        img: '/content/16.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 8,
        img: '/content/17.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      },
      {
        id: 9,
        img: '/content/18.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'DigiLab',
      }
    ],
  },
  {
    id: 3,
    img: '/avatars/3.svg',
    name: 'GravityOne',
    totalSales: '34.53',
    code: '0x0sE3...B79C',
    content: [
      {
        id: 1,
        img: '/content/19.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 2,
        img: '/content/20.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 3,
        img: '/content/21.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 4,
        img: '/content/22.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 5,
        img: '/content/23.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 6,
        img: '/content/24.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 7,
        img: '/content/25.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 8,
        img: '/content/26.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'GravityOne',
      }
    ],
  },
  {
    id: 4,
    img: '/avatars/4.svg',
    name: 'Juanie',
    totalSales: '34.53',
    code: '0x00E3...BswC',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Juanie',
      }
    ],
  },
  {
    id: 5,
    img: '/avatars/5.svg',
    name: 'BlueWhale',
    totalSales: '34.53',
    code: '0100ES...Bq9C',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'BlueWhale',
      }
    ],
  },
  {
    id: 6,
    img: '/avatars/6.svg',
    name: 'mr fox',
    totalSales: '34.53',
    code: '0x00W1...B7aC',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'mr fox',
      }
    ],
  },
  {
    id: 7,
    img: '/avatars/7.svg',
    name: 'Shroomie',
    totalSales: '34.53',
    code: 'sx0012...B79C',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Shroomie',
      }
    ],
  },
  {
    id: 8,
    img: '/avatars/8.svg',
    name: 'robotica',
    totalSales: '34.53',
    code: '0x563...B75B',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'robotica',
      }
    ],
  },
  {
    id: 9,
    img: '/avatars/9.svg',
    name: 'RustyRobot',
    totalSales: '34.53',
    code: 'Lp00E3...B19C',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'RustyRobot',
      }
    ],
  },
  {
    id: 10,
    img: '/avatars/10.svg',
    name: 'animakid',
    totalSales: '34.53',
    code: '0x0sA3...B71n',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'animakid',
      }
    ],
  },
  {
    id: 11,
    img: '/avatars/11.svg',
    name: 'Dotgu',
    totalSales: '34.53',
    code: '0x0s43...B79C',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Dotgu',
      }
    ],
  },
  {
    id: 12,
    img: '/avatars/12.svg',
    name: 'Ghiblier',
    totalSales: '34.53',
    code: '0x113...B7GC',
    content: [
      {
        id: 1,
        img: '/content/1.jpg',
        name: 'Distant Galaxy',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 2,
        img: '/content/2.jpg',
        name: 'Life On Edena',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 3,
        img: '/content/3.jpg',
        name: 'AstroFiction',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 4,
        img: '/content/4.jpg',
        name: 'CryptoCity',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 5,
        img: '/content/5.jpg',
        name: 'ColorfulDog 0524',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 6,
        img: '/content/6.jpg',
        name: 'Space Tales',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 7,
        img: '/content/7.jpg',
        name: 'Cherry Blossom Girl 037',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 8,
        img: '/content/8.jpg',
        name: 'Dancing Robots 0987',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      },
      {
        id: 9,
        img: '/content/9.jpg',
        name: 'IceCream Ape',
        price: '1.63',
        hBid: '0.33',
        authorName: 'Ghiblier',
      }
    ],
  },
];