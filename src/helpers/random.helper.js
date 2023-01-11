const generateRandomTwoDigitNumber = (start, end) => {
  const difference = end - start + 1;
  const randomNumber = Math.round(Math.random() * 100) % difference;
  return start + randomNumber;
};

export default generateRandomTwoDigitNumber;
