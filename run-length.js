const runLength = ({ string }) => {
  let result = "";
  let previous = "";
  let count = 0;
  for (var i = 0; i < string.length; i++) {
    let current = string[i];

    if (current === previous && count < 9) {
      let sliceSize = result.length - 2;
      let slice = result.slice(0, sliceSize)
      count++;
      result = `${slice}${count}${current}`;
    } else {
      count = 1;
      previous = current
      result = `${result}1${current}`;
    }
  }
  return result;
};


console.log(runLength({ string: "AAAAAAAAAAAAABBCCCCDD" })); // === "9A4A2B4C2D");
console.log(runLength({ string: "aA" })) // === "1a1A");
console.log(runLength({ string: "122333" })) // === "112233");
