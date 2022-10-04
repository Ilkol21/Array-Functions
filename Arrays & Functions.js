// task 1
// function isEmpty(obj) {
//     for (let key in obj) {
//       // если тело цикла начнет выполняться - значит в объекте есть свойства
//       return false;
//     }
//     return true;
//   }

// task 2
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }

// task 3
// let userNum=+prompt('Напишіть числове значення');
// function readNumber(userNum){
// do{
//    userNum;
// }while (userNum===null && userNum==="");
// }
// readNumber();

// task4
// function random(min, max){
//     return min + Math.random() * (max-min);
// }
// alert( random(1, 5) );
// alert( random(1, 5) );
// alert( random(1, 5) );

// task 5
// function randomInteger(min, max){
//     let rand=min + Math.random() * (max + 1 - min);
//     return Math.round(rand);
// }
// alert(randomInteger(1, 3));

// task 6
// function ucFirst(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }
  
//   alert( ucFirst("вася") ); // Вася

// task 7
// function checkSpam(str){
// let lowerStr =str.toLowerCase();
// return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }
// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// task8
// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }


// task9
// function extractCurrencyValue(str) {
//     return +str.slice(1);
//   }

// task 10
// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("Введите число", 0);
  
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );

// task11
//Різниці не буде, адже вікно про дозвіл з'явиться в обох випадках тоді, коли перша умова є недійсна.

// task12
// function checkAge (age) {
//   return(age>18) ? true: confirm('Батьки дозволили?');
// }
// function checkAge(age) {
//     return (age > 18) || confirm('Батьки дозволили?');
//   }

// task13
// function min(a, b) {
//     return a < b ? a : b;
//   }

// task14
// function pow(x, n) {
//     let result = x;
  
//     for (let i = 1; i < n; i++) {
//       result *= x;
//     }
  
//     return result;
//   }
  
//   let x = prompt("",);
//   let n = prompt("",);
  
//   if (n < 1) {
//     alert(`Натуральне число!!!`);
//   } else {
//     alert( pow(x, n) );
//   }

// task15
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Ви згодні?",
//     () => alert("Погодились."),
//     () => alert("Не погодились")
//   );

// task 16
// function countParrots(income, needs,aim, free){
// income=+3333;
// needs=+1750;
// aim=+8000;
// free=Number;
//     free= (income)-(needs);
//     alert(Math.round((aim)/(free)));
// }
// countParrots();

//task17