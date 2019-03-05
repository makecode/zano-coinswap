export const heroTitle = [
  { title: 'Zano' },
  { title: 'Coin', blue: true },
  { title: 'Swap' }
];

export const heroDescription = 'Boolberry holders can swap their coins to Zano, learn more in wp and stats below.';

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
  { title: 'To' },
  { title: 'Swap' },
  { title: 'Your' },
  { title: 'Coins', blue: true }
];

export const stepsDescription = 'Every Boolberry holder is invited to participate. It can be done with both the Boolberry wallet and the exchange wallet; you follow the steps described on the cards to the left. Swapped coins will no longer exist in the Boolberry network, and this action is irreversible.';

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
    description: 'Create the wallet, its address you’ll use to swap your Boolberry (BBR) coins. Make sure you store your seed phrase in a safe place.'
  },
  {
    icon: 'step-three',
    title: 'Step 3',
    subtitle: 'Swap the coins',
    description: 'Send the swap transaction from your BBR wallet; it’ll be marked as a Zano transaction in your wallet. After this step, your BBR coins will be no longer accessible.'
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
    title: 'What is Coinswap?', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim repellat id numquam excepturi cum commodi beatae similique recusandae omnis quaerat, quam corrupti odit est dolorem eligendi ad molestias qui facere. Rem doloribus excepturi eos veniam, ipsam sapiente eligendi laborum numquam maiores?',
    active: true
  },
  { 
    id: 1, 
    title: 'How Can I Get Some Tokens?', 
    description: 'Ab expedita in nemo magni dolores, consectetur nesciunt veritatis dignissimos reiciendis, sequi ea excepturi cupiditate. Sequi ratione libero, iste eius vel nesciunt vero! Quos, ratione asperiores. Ea quasi provident placeat nostrum earum ab magnam voluptatum, tempore eveniet veniam? '
  },
  { 
    id: 2, 
    title: 'How Can I Use My Tokens?', 
    description: 'Voluptas fuga necessitatibus nihil vitae blanditiis iusto corrupti. Provident, recusandae. Accusantium molestiae quo deleniti vitae laudantium voluptatibus accusamus culpa, et minus sapiente expedita voluptatum optio nobis est. Sit enim saepe qui accusamus tempore provident odit quae iure quos ipsum dolorum facilis, cupiditate quia quis quas nostrum temporibus, nesciunt expedita assumenda eum!'
  }
];
