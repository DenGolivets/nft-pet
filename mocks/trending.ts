export interface TrendingItem {
  img: string;
  subImg: string[];
  title: string;
  avatarImg: string;
  authorName: string;
}

export const trending = [
  {
    img: '/nft/1.jpg',
    subImg: ['/nft/1-1.jpg', '/nft/1-2.jpg'],
    title: 'DSGN Animals',
    avatarImg: '/avatars/6.svg',
    authorName: 'MrFox',
  },
  {
    img: '/nft/2.jpg',
    subImg: ['/nft/2-1.jpg', '/nft/2-2.jpg'],
    title: 'Magic Mushrooms',
    avatarImg: '/avatars/7.svg',
    authorName: 'Shroomie',
  },
  {
    img: '/nft/3.jpg',
    subImg: ['/nft/3-1.jpg', '/nft/3-2.jpg'],
    title: 'Disco Machines',
    avatarImg: '/avatars/12.svg',
    authorName: 'BeKind2Robots',
  },
];