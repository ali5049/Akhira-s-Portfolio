import {Bolt, Card, PieChart, Repeat} from '../assets';

const useMenu = () => {
  const menuOptions = [
    {
      title: 'Round up',
      description: '$25 round up last month',
      icon: Card,
    },
    {
      title: 'Quick Donate',
      description: '5 days since last donation',
      icon: Bolt,
    },
    {
      title: 'Akhirah Portfolio',
      description: '5 campaigns supported',
      icon: PieChart,
    },
    {
      title: 'Auto Donate',
      description: 'Next donation: Palestine Relief',
      icon: Repeat,
    },
  ];

  return {
    menuOptions,
  };
};

export {useMenu};
