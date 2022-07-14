const getName = (names) => {
  const amount = names.length;
  return names[Math.floor(Math.random() * amount)];
};

const createName = (names) => {
  const firstName = getName(names);
  const lastName = getName(names);
  return `${firstName} ${lastName}`;
};

export default createName;
