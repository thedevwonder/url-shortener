const getBase62Char = (index) => {
  const base62MapString =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return base62MapString[index - 1].toString();
};

export default getBase62Char;
