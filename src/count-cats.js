module.exports = function countCats(backyard) {
  if (!(backyard instanceof Array)) {
    throw "Not an array";
  }
  return backyard.flat().filter(item => item === "^^").length;  
};
