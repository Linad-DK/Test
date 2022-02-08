"use strict";

//alert("Hello");

//const result = confirm("Are you here?");
//console.log(result);

const answer = +prompt("Вам есть 18?", "18");
console.log(typeof(answer));

//Далее мы пишем МАССИВ с выводом через document.write
const answers = [];

answers[0] = prompt('Как Ваше имя?', '');
answers[1] = prompt('Как Ваша фамилия?', '');
answers[2] = prompt('Сколько Вам лет?', '');

console.log(typeof(answers));
//console.log(typeof(null));