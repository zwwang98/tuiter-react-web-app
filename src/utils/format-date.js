const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  const suffix = getOrdinalSuffix(day);
  return `${month} ${day}${suffix}, ${year}`;
};

function getOrdinalSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  } else {
    const lastDigit = day % 10;
    switch (lastDigit) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }
}

export default formatDate;
