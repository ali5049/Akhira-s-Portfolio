const useProgressBar = () => {
  const data = {donations: 450, target: 1000};
  const donationsPercentage = `${(data.donations / data.target) * 100}%`;
  return {data, donationsPercentage};
};

export {useProgressBar};
