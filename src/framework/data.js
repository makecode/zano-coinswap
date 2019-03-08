export const heroTitle = [
  { title: 'Zano' },
  { title: 'Coin', blue: true },
  { title: 'Swap' }
];

export const heroDescription = 'Boolberry holders can swap their coins for Zano, learn more in the whitepaper and FAQ below.';

export const CHART_SECTION = {
  counterTotal: {
    text: [{ title: 'Total' }],
    shadow: 'Total',
    counter: '18,446,744'
  },
  counterDone: {
    text: [{ title: 'Coins' }, { title: 'Swapped' }],
    shadow: 'Swapped',
    counter: '0'
  },
  periodCurrent: {
    title: {
      text: [{ title: 'Now' }],
      shadow: 'Now'
    },
    periodNum: 2,
    monthFirst: {
      title: 'April',
      day: 1
    },
    monthSecond: {
      title: 'May',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 50
    }
  },
  periodNext: {
    title: {
      text: [{ title: 'Next' }],
      shadow: 'Next'
    },
    periodNum: 3,
    monthFirst: {
      title: 'July',
      day: 1
    },
    monthSecond: {
      title: 'September',
      day: 31
    },
    ratio: {
      bbr: 1,
      zan: 25
    }
  }
};

export const stepsTitle = [
  { title: 'How' },
  { title: 'to' },
  { title: 'Swap' },
  { title: 'Your' },
  { title: 'Coins', blue: true }
];

export const stepsDescription = 'Every Boolberry holder is invited to participate. It can be done with either the Boolberry wallet or the exchange wallet; simply follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network and this action is irreversible.';

export const steps = [
  {
    icon: 'step-one',
    title: 'Step 1',
    subtitle: 'Download the wallet',
    description: 'Download the appropriate wallet app for your OS.'
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

export const faqTitle = [
  { title: 'FAQ', blue: false }
];

export const faq = [
  {
    id: 0,
    title: 'What is Zano total supply?',
    description: 'Total Zano supply is equal to Total Boolberry supply which is 18,446,744. Initial exchange ratio is 1:1.',
    active: true
  },
  {
    id: 1,
    title: 'What’s the ratio?',
    description: 'For the first three month of the swap ratio is fixed at 1:1 and later will gradually decrease until the end of the swap period, that should be one-year total. More details could be found in Coinswap Whitepaper available here.'
  },
  {
    id: 2,
    title: 'How long coins swap will run?',
    description: 'One year.'
  },
  {
    id: 3,
    title: 'How long coins swap will run?',
    description: 'One year.'
  },
  {
    id: 4,
    title: 'How many coins reserved for the swap?',
    description: 'Current Boolberry supply +20% premine for a development fund.'
  },
  {
    id: 5,
    title: 'What will happen with unswapped coins?',
    description: 'After the swap is concluded the remaining unswapped coins will be added back to emission to be later distributed as block reward and 20% of it will be kept for developer fund.'
  },
  {
    id: 6,
    title: 'Why aren’t the unswapped coins being burned?',
    description: 'Lower supply means low liquidity and higher risk of PoW double spend attack due to cheap hash power. This is less critical for a Hybrid PoW/PoS blockchain such as Zano but it’s still an important factor.'
  },
  {
    id: 7,
    title: 'How can I make sure that swapped BBR aren’t available anymore?',
    description: '?'
  },
  {
    id: 8,
    title: 'What if I store my coins on exchange?',
    description: 'You can still send them to your Zano address, it doesn’t matter where they came from.'
  },
  {
    id: 9,
    title: 'Is swap reversable?',
    description: 'No, this is irreversible transaction so please make sure you absolutely understand what are you doing before sending your BBR coins to your Zano wallet.'
  }
];
