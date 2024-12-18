export interface Info {
  id: number;
  img: string;
  title: string;
  description: string;
}

export const info = [
  {
    id: 1,
    img: '/info/1.png',
    title: 'Setup Your wallet',
    description: 'Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.',
  },
  {
    id: 2,
    img: '/info/2.png',
    title: 'Create Collection',
    description: 'Upload your work and setup your collection. Add a description, social links and floor price.',
  },
  {
    id: 3,
    img: '/info/3.png',
    title: 'Start Earning',
    description: 'Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.',
  }
];