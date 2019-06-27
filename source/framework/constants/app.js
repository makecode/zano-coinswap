export const MENU_ITEMS = [
  { title: 'Home',        link: 'https:/zano.org'                   },
  { title: 'Blog',        link: 'https://medium.com/@zano_project'  },
  { title: 'Roadmap',     link: 'https://zano.org/roadmap.html'     },
  { title: 'Downloads',   link: 'https://zano.org/downloads.html'   },
  { title: 'Rescources',  link: 'https://docs.zano.org/'            },
  { title: 'Explorer',    link: 'https://explorer.zano.org/'        }
];

export const SOCIAL_ICONS = [
  { title: 'twitter',     link: 'https://twitter.com/zano_project'  },
  { title: 'medium',      link: 'https://medium.com/@zano_project'  },
  { title: 'discord',     link: 'https://discord.gg/wE3rmYY'        },
  { title: 'telegram',    link: 'https://t.me/zanocoin'             }
];

export const TITLES = {
  hero: [
    { title: 'Zano' },
    { title: 'Coin', blue: true },
    { title: 'Swap' }
  ],
  how: [
    { title: 'How' },
    { title: 'to' },
    { title: 'Swap' },
    { title: 'Your' },
    { title: 'Coins', blue: true }
  ],
  faq: [
    { title: 'FAQ', blue: false }
  ]
};

export const STEPS = [
  {
    icon: 'step-one',
    title: 'Step 1',
    subtitle: 'Download the wallet',
    description: 'Download the appropriate wallet app for your OS.',
    button: {
      title: 'Download'
    }
  },
  {
    icon: 'step-two',
    title: 'Step 2',
    subtitle: 'Create the wallet',
    description: 'Create your wallet, this is the address you’ll use to swap your Boolberry (BBR) coins. Make sure you store your seed phrase in a safe place.'
  },
  {
    icon: 'step-three',
    title: 'Step 3',
    subtitle: 'Swap the coins',
    description: 'Send the swap transaction from your BBR wallet; it will be marked as a Zano transaction in your wallet. After this step, your BBR coins will be no longer accessible.'
  },
  {
    icon: 'step-four',
    title: 'Step 4',
    subtitle: 'Confirm the receipt of your coins in your Zano wallet',
    description: 'After 20 confirmations your Zano coins will arrive at the address you specified.'
  }
];

export const QUESTIONS = [
  {
    title: 'What is Zano total supply?',
    description: 'Total Zano supply is equal to Total Boolberry supply which is 18,446,744. Initial exchange ratio is 1:1.'
  },
  {
    title: 'What’s the ratio?',
    description: 'For the first three month of the swap ratio is fixed at 1:1 and later will gradually decrease until the end of the swap period, that should be one-year total. More details could be found in Coinswap Whitepaper available here.'
  },
  {
    title: 'How long coins swap will run?',
    description: 'One year.'
  },
  {
    title: 'How long coins swap will run?',
    description: 'One year.'
  },
  {
    title: 'How many coins reserved for the swap?',
    description: 'Current Boolberry supply +20% premine for a development fund.'
  },
  {
    title: 'What will happen with unswapped coins?',
    description: 'After the swap is concluded the remaining unswapped coins will be added back to emission to be later distributed as block reward and 20% of it will be kept for developer fund.'
  },
  {
    title: 'Why aren’t the unswapped coins being burned?',
    description: 'Lower supply means low liquidity and higher risk of PoW double spend attack due to cheap hash power. This is less critical for a Hybrid PoW/PoS blockchain such as Zano but it’s still an important factor.'
  },
  {
    title: 'What if I store my coins on exchange?',
    description: 'You can still send them to your Zano address, it doesn’t matter where they came from.'
  },
  {
    title: 'Is swap reversable?',
    description: 'No, this is irreversible transaction so please make sure you absolutely understand what are you doing before sending your BBR coins to your Zano wallet.'
  }
];
