// Банкоматы позволяют использовать 4- или 6-значные PIN-коды, а PIN-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

// Если функции передана допустимая строка PIN-кода, верните true, иначе верните false.
///////////////////////////////// litle wrong
// function validatePIN (pin) {
//   //return true or false
//  if (pin.length === 4 || pin.length === 6 && pin >= 0) {
//     return !isNaN(Number.parseInt(pin))
//   }
//   return false
// }
/////////////////second////////////////////
// function validatePIN(pin) {
//   return /^(\d{4}|\d{6})$/.test(pin)
// }
//////////////////////////third/////////////////////////
// function validatePIN (pin) {
//   return Array.from(pin).every(c => c >= '0' && c <= '9') && [4, 6].includes(pin.length);
// }
/////////////////////////////four//////////////////////////
// function validatePIN (pin) {
//     for (let i of pin) {
//         if (!isFinite(parseInt(i))) return false;
//     }
//     return pin.length === 4 || pin.length === 6;
// }
///////////////////////////////////////////five///////////////////////////////////
// function validatePIN (pin) {
//   if (pin.length === 4 || pin.length ===6) {
//     return pin.split('').every((num) => !isNaN(parseInt(num)));
//   }
//   return false;
// }

// console.log(validatePIN("00.0"))
// console.log(validatePIN("1233"))
// console.log(validatePIN("123342"))
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const numbers = [12, 3, 4, 5, 67]
// const sum = numbers.reduce((sum, el) => sum + el)
// console.log(sum)
///////////////////////////////////////////
// Дан массив целых чисел.
// Возвращает массив, где первый элемент — это количество положительных чисел, а второй элемент — сумма отрицательных чисел. 0 ни то, ни другое
// положительный, ни отрицательный.
// Если вход представляет собой пустой массив или имеет значение null, верните пустой массив.
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// function countPositivesSumNegatives(input) {
//   if (input === null || input.length === 0) {
//     return [];
//     }
//   const positiveNumber = [...input].filter(number => number > 0).reduce((total, number) => total + 1, 0)
//   const negativeNumber = [...input].filter(number => number < 0).reduce((total, number) => total + number, 0)
//   return [positiveNumber, negativeNumber];
// }
////////////////////////////////////////////////////////second/////////////////////////////
// function countPositivesSumNegatives(input) {
//     return input && input.length ? [input.filter(p => p > 0).length, input.filter(n => n < 0).reduce((a, b) => a + b, 0)] : [];
// }

// console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

// ///////////////////////////////////Завершите функцию, которая принимает строковый параметр и переворачивает
// каждое слово в строке.Все пробелы в строке должны быть сохранены///////////////////////////////////////////
// function reverseWords(str) {
//  console.log(str.split(" ").map(e => e.split("").reverse().join("")).join(" "))
// }
/////////////////////second//////////////////////

// function reverseWords(str) {
  
//   str = str.split(" ");
  
//   var res = [];
  
//   for (var i = 0; i < str.length; i++){
//       res.push (str[i].split("").reverse().join(""));
//   }
  
//   return res.join(" ");
// }
////////////////////////////third///////////////////////////////////////////
// function reverseWords(str) {
//   // Go for it
//   //split words into seperate arrays
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }
// console.log(reverseWords("This is an example!"))
// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))

//////////////////////////////////////////
// Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
// Каждая буква слова оценивается в баллах в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3и т. д.
//////////////////////////////////////////////////////////////////////
// function alphabetPosition(text) {
//   const newStr = text.toUpperCase().replace(/[^a-zа-яё]/gi, "").split("").join("")
  
//   let total = [];
//   for (let i = 0; i < newStr.length; i += 1) {
//     const num = newStr.charCodeAt(i) - 64;
// total.push(num)
// }
// return total.join(" ")
// }


function high(x) {
    const str = x.toUpperCase().replace(/[^a-zа-яё]/gi, " ").split(" ")
    console.log(str)
    const arr = []
    for (let i = 0; i < str.length; i+=1) {
        const wordArr = str.map((e, i, arr) => e.split())
        console.log(wordArr.map(v => console.log(v.reduce(acc, val, i, arr) => val[i]), 0))
    

    }

}

console.log(high(('man i need a taxi up to ubud')))