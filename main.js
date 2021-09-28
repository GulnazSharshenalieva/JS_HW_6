// LESSON 34, JS 6, TASK 1/1
// let letters = prompt("Введите любую букву латинского алфавита:");

// switch (letters) {
//     case "a":
//         alert("эта буква гласная");
//         break;
//     case "e":
//         alert("эта буква гласная");
//         break;
//     case "i":
//         alert("эта буква гласная");
//         break;
//     case "u":
//         alert("эта буква гласная");
//         break;
//     case "y":
//         alert("эта буква может быть как гласной, так и согласной");
//         break;
//     default:
//         alert("введена согласная буква");
//         break;
    
// }

// LESSON 34, JS 6, TASK 1/2 Burul's solution

// let letters = prompt("Введите любую букву латинского алфавита:");
// switch(letters){
//     case "a" || "e" || "o" || "i" || "u":
//         alert("эта буква гласная");
//         break;
//         case "y":
//             alert("эта буква может быть как гласной, так и согласной");
//             break;
//             default:
//                 alert("введена согласная буква");
//                 break;
            
// }

// LESSON 34, JS 6, TASK 1/3, Cholpon's solution
// let vowels = ["a", "o", "i", "u", "e"];
// let letter = prompt("Enter any latin character:");

// if (vowels.includes(letter)) {
//     document.write("vowels");
// } else if(letter === "y") {
//     document.write("This letter is vowel and consonant");
// } else {
//     document.write("This letter is consonant");
// }



// LESSON 34, JS 6, TASK 2, Aisuluu's solution
// let numbers = [1, 101, 45, 28, 70, 55, 69];
// numbers.sort(function(a, b) {
//     return a - b;
// })
// console.log(numbers);


// LESSON 34, JS 6, TASK 3

// let sound = prompt("уровень шума в децибелах");

// const molotok = 130;
// const kosilka = 106;
// const alarm = 70;
// const silentRoom = 40;

// if(sound < silentRoom){
//     alert("etot zvuk tishe zvuka tihoy komnaty!");
// }else if(sound == silentRoom){
//     alert("eto zvuk tihoi komnaty");
// }else if(sound > silentRoom && sound < alarm){
//     alert("etot zvuk gromche tihoi komnaty, no tishe budilnika!");
// }else if(sound == alarm){
//     alert("eto zvuk budilnika!");

// }else if(sound > alarm && sound < kosilka){
//     alert("etot zvuk gromche budilnika, no tishe kosilki!");
// }else if(sound == kosilka){
//     alert("eto zvuk kosilki!");
// }else if(sound > kosilka && sound < molotok){
//     alert("etot zvuk gromche kosilki, no tishe molotka!");
// }else if(sound == molotok){
//     alert("eto zvuk molotka!");
// }else if(sound > molotok){
//     alert("etot zvuk gromche molotka!");
// }else {
//     alert("eto gromko!");
// }

// LESSON 34, JS 6, TASK 6
// let nominal = prompt("Введите номинал банкноты:");

// switch (nominal) {
//     case "1$":
//     document.write("Джордж Вашингтон");
//     break;
//     case "2$":
//         document.write("Томас Джефферсон");
//         break;
//     case "5$":
//         document.write("Авраам Линкольн");
//         break;
//     case "10$":
//         document.write("Александр Гамильтон");
//         break;
//     case "20$":
//         document.write("Эндрю Джексон");
//         break;
//     case "50$":
//         document.write("Улисс Грант");
//         break;
//     case "100$":
//         document.write("Бенджамин Франклин");
//         break;
//     default:
//         document.write("Error!");
// }


//  LESSON 34, JS 6, TASK 6
// let userDay = 29;
// let userMonth = "february";
// let userYear = 2020;

// let outputDate;
// let outputMonth;
// let outputYear = userYear;

// switch (userMonth) {
//   case "february":
//     if (userYear % 4 === 0 && userDay === 29) {
//       outputDate = 1;
//       outputMonth = "march";
//     } else if (userYear % 4 !== 0 && userDay === 28) {
//       outputDate = 1;
//       outputMonth = "march";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "january":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "february";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "march":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "april";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "july":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "august";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "august":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "september";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "october":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "november";
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   case "december":
//     if (userDay === 31) {
//       outputDate = 1;
//       outputMonth = "january";
//       outputYear = userYear + 1;
//     } else {
//       outputDate = userDay + 1;
//       outputMonth = userMonth;
//     }
//     break;
//   default:
//     outputDate = userDay + 1;
//     outputMonth = userMonth;
//     break;
// }

// let message = `Следующая дата: ${outputDate} ${outputMonth} ${outputYear}`;

// document.write(message);


