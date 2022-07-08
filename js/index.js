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


//////////////////////////////sumation///////////////////
// var summation = function (num) {
//   let total = 0
//   // Code here
//   for (let i = 1; i <= num; i += 1) {
    
//      total += i
//     }
    
//     return total
// }


// console.log(summation(8))
// console.log(summation(1))

//////////////////////////////////////////////////////////////////////////////////
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"
// function bmi(weight, height) {
//   let bmiIndex = weight / Math.pow(height, 2)
//   console.log(bmiIndex)
//   if (bmiIndex <= 18.5) {
//      return "Underweight"
//   }
//   if (bmiIndex <= 25.0) {
//     return  "Normal"
//   }
//   if (bmiIndex <= 30.0) {
//     return "Overweight"
//   }
//   return "Obese"
// }

// console.log(bmi(100, 1.8))

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

//////////////////////////////////////////task
// Учитывая строку слов, вам нужно найти слово с наивысшим баллом.
// Каждая буква слова оценивается в баллах в соответствии с ее положением в алфавите: a = 1, b = 2, c = 3и т. д.

// function alphabetPosition(text) {
//   const alph = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
//    const textSplit = text.toLowerCase().split(" ")
//    let array = [];
//   for (let i = 0; i < textSplit.length; i += 1) {
//     const word = textSplit[i].replace(/[^a-zа-яё]/gi, "").split("")
//     const indexLetter = word.reduce((summ, letter) => (alph.indexOf(letter) + 1) + summ, 0)
//     console.log(indexLetter)
//     array.push(indexLetter)
//   }
//   return  textSplit.filter(w => array.indexOf(Math.max(...array)) === textSplit.indexOf(w))
// }
// console.log(alphabetPosition("The word is ended soon"))

///////////////////////////////////////////////////////task///////////////////////////////////////////////
// По городу движется автобус, и на каждой остановке он берет и высаживает несколько человек.
// Вам предоставляется список(или массив) целочисленных пар.Элементы каждой пары представляют количество людей, садящихся в
// автобус(первый элемент) и количество людей, выходящих из автобуса(второй элемент) на автобусной остановке.
// Ваша задача — вернуть количество людей, оставшихся в автобусе после последней автобусной остановки(после последнего массива).
// Несмотря на то, что это последняя автобусная остановка, автобус не пустой, и некоторые люди все еще в автобусе, и они, вероятно, спят там: D
// Взгляните на тест-кейсы.
// Имейте в виду, что тестовые примеры гарантируют, что количество людей в автобусе всегда >= 0. Таким образом,
// возвращаемое целое число не может быть отрицательным.
// Второе значение в первом целочисленном массиве равно 0, так как автобус на первой остановке пуст.
// var number = function(busStops){
//   const pass = busStops.map(e => (e[0] - e[1]))
//   const res = pass.reduce((acc, v) => acc + v, 0)
//   //////////////////////////////second
//   const res2 = busStops.reduce((acc, prev, next, i, arr) => acc + (prev[0] - prev[1]), 0)
//   return res2
// }


// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

/////////////////////////////////////////////////////task
// function positiveSum(arr) {
//   return arr.filter(e => e > 0).reduce((acc, v) => acc + v, 0)
////////////////////////////second
// return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
// }

// console.log(positiveSum([1,-2,3,4,5]))

/////////////////////////////////////task
// function betterThanAverage(classPoints, yourPoints) {
//   console.log(classPoints.reduce((acc, e, arr) => (acc + e) / arr.length))
  
// }

// console.log(betterThanAverage([2, 3], 5))

/////////////////////////////////////////

const str = "camelCasing"
const str2 = "indentifier"
  let indexUpper = 0
function space(v) {
  const arr = v.split("")
  for (let i = 0; i < arr.length; i+=1) {
    let isUpperCase = arr[i].toUpperCase() === arr[i]
    if (isUpperCase) {
      const index = arr.indexOf(arr[i])
      arr.splice(index, 0, " ")
      return arr.join("")
    }
  }
  return arr.join("")
    
}
console.log(space(str2))

