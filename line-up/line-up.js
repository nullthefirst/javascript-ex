//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  /**
   * 1 = st
   * 2 = nd
   * 3 = rd
   * 4, ... 20 = th
   * 21 = st,
   * 22 = nd
   * 23 = rd,
   * 24, ... 30 = th
   */

  let numString = `${number}`;

  const numStringArray = numString.split("");

  const lastDigit = numStringArray[numStringArray.length - 1];
  const secondToLastDigit = numStringArray[numStringArray.length - 2];

  let suffix;

  if (Number(secondToLastDigit) === 1) {
    suffix = "th";
  } else {
    const suffixAssignment = {
      1: "st",
      2: "nd",
      3: "rd",
      0: "th",
      4: "th",
      5: "th",
      6: "th",
      7: "th",
      8: "th",
      9: "th",
    };

    suffix = suffixAssignment[lastDigit];
  }

  const text = `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
  return text;
};
