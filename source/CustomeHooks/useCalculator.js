import {Donations, Empathy, Sheep} from '../assets';

const useCalculator = () => {
  const calculators = [
    {
      title: 'Zikat',
      icon: Donations,
    },
    {
      title: 'Fidya',
      icon: Empathy,
    },
    {
      title: 'Aqiah',
      icon: Sheep,
    },
    {
      title: 'Zikat',
      icon: Donations,
    },
    {
      title: 'Fidya',
      icon: Empathy,
    },
    {
      title: 'Aqiah',
      icon: Sheep,
    },
  ];

  return {
    calculators,
  };
};

export {useCalculator};
