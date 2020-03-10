module.exports = function transform(arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    throw Error("Передан не массив");
  }

  if (
    arr[arr.length - 1] == "--discard-next" ||
    arr[arr.length - 1] == "--double-next"
  ) {
    arr.pop();
  } else if (arr[0] == "--discard-prev" || arr[0] == "--double-prev") {
    arr.shift();
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      i++;
    } else if (arr[i] == "--discard-prev") {
      newArr.pop();
    } else if (arr[i] == "--double-next") {
      newArr.push(arr[i + 1]);
    } else if (arr[i] == "--double-prev") {
      newArr.push(arr[i - 1]);
    } else {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] == undefined) {
      newArr.splice(i, 1);
    }
  }
  return newArr;
};
