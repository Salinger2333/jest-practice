import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("check capitalize", () => {
  expect(capitalize("qwerty")).toBe("Qwerty");
  expect(capitalize("deep-seek")).toBe("Deep-seek");
});
test('check reverse',() => {
  expect(reverseString("abcde")).toBe("edcba");
  expect(reverseString('12345678')).toBe('87654321');
})

describe('check calculator', () => {
  test('add', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, 5)).toBe(4);
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test('divide', () => {
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('multiply', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});

test('check caesar cypher', () => {
  expect(caesarCipher('abcd',1)).toBe('bcde');
});
