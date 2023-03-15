const splitName = (name) => {
  const names = name.split(" ");
  const firstName = names[0];
  const lastName = names.slice(1).join(" ") || null;
  return { firstName, lastName };
};

export default splitName;
