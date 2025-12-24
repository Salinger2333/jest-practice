function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, shift) {
  shift = shift % 26;
  let arrs = string.split("");
  arrs = arrs.map((s) => {
    let code = s.charCodeAt(0);
    if (code >= 65 && code <= 90) {
      return String.fromCharCode(((code - 65 + shift + 26) % 26) + 65);
    }
    if (code >= 97 && code <= 122) {
      return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
    }
    return s;
  });
  return arrs.join("");
}

function analyzeArray(array) {
  const arr = [...array];
  let sum = arr.reduce((prev, cur) => prev + cur, 0);
  let min = arr.toSorted((a, b) => a - b)[0];
  let max = arr.toSorted((a, b) => b - a)[0];
  return {
    average: sum / arr.length,
    min,
    max,
    length: arr.length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
