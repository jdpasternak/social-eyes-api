module.exports = (date) => {
  const dateString = date.toLocaleDateString();
  const timeString = date.toLocaleTimeString();

  return `at ${timeString} on ${dateString}`;
};
