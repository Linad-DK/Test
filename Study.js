/*Изучаю Условия сравнения if...else и switch 

// Ниже пример использования if...else
const num = 50;

if (num < 49) {
    console.log("Error!");
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log('Ok!');
}

(num === 50) ? console.log('Ok!') : console.log('Error!'); */

// Ниже пример использования switch
/* const num =  '50';

switch (num) {
    case '49':
        console.log('Неверно');
        break;
    case '100':
        console.log('Неверно');
        break;
    case '50':
        console.log('В точку!');
        break;
    default:
        console.log('Не в этот раз');
        break;
} */

// Ниже пример использования Циклов

let num = 50;
//Первый вариант цикла
 /* while (num <= 55) {
     console.log(num);
     num++;
 } */
//Второй вариант цикла
/*  do {
    console.log(num);
    num++;
 }
 while (num <= 55); */
 /*Третий вариант цикла если мы в цикле ставим условия if то при 
 break произойдёт прерывание цикла, а при использовании continue
произойдёт пропуск указанного условия в if.
 */
 for (let i = 1; i < 10; i++) {
    if (i === 6) {
        //break;
        continue;
    }

    console.log(i);
 }