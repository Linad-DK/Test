'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
    }
}

start();

//Ниже мы создаём и используем объект personalMovieDB
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
//Используем циклы

//Используем цикл do...while
/* let i = 0;
do {
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его?", ''); 
        i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} while (i < 2); */

//Используем цикл while
/* let i = 0;
while (i < 2) {
    const a = prompt("Один из последних просмотренных фильмов?", ''),
          b = prompt("На сколько оцените его?", ''); 
        i++;

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
} */


//Использование цикла for
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ''),
              b = prompt("На сколько оцените его?", '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
          
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`); Вариант написания
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();