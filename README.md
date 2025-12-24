# jest-practice

[中文](#中文) | [English](#english)

---

## 中文

一个用于学习和掌握 Jest 测试框架的练习项目。本项目实现了常用的工具函数，并配有完整的测试用例。

## 功能特性

- **capitalize** - 将字符串首字母大写
- **reverseString** - 反转字符串
- **calculator** - 包含基本四则运算的计算器对象（加、减、除、乘）
- **caesarCipher** - 使用凯撒密码技术加密/解密文本
- **analyzeArray** - 分析数组并返回平均值、最小值、最大值和长度

## 代码示例

```javascript
// 字符串首字母大写
capitalize("qwerty") // => "Qwerty"

// 字符串反转
reverseString("abcde") // => "edcba"

// 计算器运算
calculator.add(1, 2)      // => 3
calculator.subtract(5, 3) // => 2

// 凯撒密码
caesarCipher("Hello, World!", 3) // => "Khoor, Zruog!"

// 数组分析
analyzeArray([1, 8, 3, 4, 2, 6])
// => { average: 4, min: 1, max: 8, length: 6 }
```

## 技术栈

- [Jest](https://jestjs.io/) - 测试框架
- [Babel](https://babeljs.io/) - JavaScript 编译器

---

## English

A practice project for learning and mastering the Jest testing framework. This project implements common utility functions with comprehensive test cases.

## Features

- **capitalize** - Capitalizes the first character of a string
- **reverseString** - Reverses a given string
- **calculator** - A calculator object with basic arithmetic operations (add, subtract, divide, multiply)
- **caesarCipher** - Encrypts/decrypts text using Caesar cipher technique
- **analyzeArray** - Analyzes an array and returns average, minimum, maximum, and length

## Code Examples

```javascript
// String capitalization
capitalize("qwerty") // => "Qwerty"

// String reversal
reverseString("abcde") // => "edcba"

// Calculator operations
calculator.add(1, 2)    // => 3
calculator.subtract(5, 3) // => 2

// Caesar cipher
caesarCipher("Hello, World!", 3) // => "Khoor, Zruog!"

// Array analysis
analyzeArray([1, 8, 3, 4, 2, 6])
// => { average: 4, min: 1, max: 8, length: 6 }
```

## Technologies

- [Jest](https://jestjs.io/) - Testing Framework
- [Babel](https://babeljs.io/) - JavaScript Compiler
