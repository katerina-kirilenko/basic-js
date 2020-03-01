module.exports = function getSeason(date) {
    if (date === undefined) {
      return "Unable to determine the time of year!";
    } else if (isNaN(date)) {
        throw new Error("Хитрый момент!");
    } else {
      let monthNumber = date.getMonth();
      let monthString = "";

      switch (monthNumber) {
        case 0:
        case 1:
        case 11:
          monthString = "winter";
          break;
        case 2:
        case 3:
        case 4:
          monthString = "spring";
          break;
        case 5:
        case 6:
        case 7:
          monthString = "summer";
          break;
        default:
          monthString = "autumn";
      }
      return monthString;
    } 
};
