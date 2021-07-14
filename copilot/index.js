const calculateDaysBetweenDates = (startDate, endDate) => {
  const startDateObj = new Date(startDate)
  const endDateObj = new Date(endDate)
  const days = (endDateObj - startDateObj) / 1000 / 60 / 60 / 24
  return Math.floor(days)
}

function isEven (number) {
  return number % 2 === 0
}
