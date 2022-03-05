function numSwap(number) {
  let swapped = number.toString();
  let splitted = swapped.split("");
  let midlength = splitted.length/2;

    if (splitted.length % 2 === 0) {
        for (let i = 0; i < midlength; i++){
            [splitted[2 * i], splitted[2 * i + 1]] = [splitted[2 * i + 1], splitted[2 * i]];
        }
    }
    let joinSplitted = splitted.join("");
    console.log(joinSplitted);
  }

module.exports = numSwap
