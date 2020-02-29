const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(finalActivity) {
  let num = parseFloat(finalActivity);
  if (
    finalActivity === "undefined" ||
    typeof finalActivity !== "string" ||
    isNaN(num) ||
    num <= 0 || num > 15
  ) {
    return false;
  } else {
    const s = 0.693;
    let K = s / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / num) / K;
    return Math.ceil(t);
  }
};
