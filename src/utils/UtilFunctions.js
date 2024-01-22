export const todayDate = () => {
  const today = new Date();

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  return today.toLocaleDateString('en-US', options);
};
