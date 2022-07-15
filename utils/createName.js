const getName = (names) => {
  const amount = names.length;
  return names[Math.floor(Math.random() * amount)];
};

const createName = (names) => {
  let firstName = '';
  let lastName = '';

  do {
    firstName = getName(names);
    lastName = getName(names);
  } while (`${firstName} ${lastName}`.length > 12);

  return `${firstName} ${lastName}`;
};

export default createName;
