export interface DiscoverItem {
  id: number;
  img: string;
  title: string;
  avatarImg: string;
  authorName: string;
  price: string;
  hBid: string;
}

export const discover = [
  {
    id: 1,
    img: '/discover/1.jpg',
    title: 'Distant Galaxy',
    avatarImg: '/avatars/16.svg',
    authorName: 'MoonDancer',
    price: '1.63',
    hBid: '0.33',
  },
  {
    id: 2,
    img: '/discover/2.jpg',
    title: 'Life On Edena',
    avatarImg: '/avatars/10.svg',
    authorName: 'NebulaKid',
    price: '1.63',
    hBid: '0.33',
  },
  {
    id: 3,
    img: '/discover/3.jpg',
    title: 'AstroFiction',
    avatarImg: '/avatars/15.svg',
    authorName: 'Spaceone',
    price: '1.63',
    hBid: '0.33',
  }
];