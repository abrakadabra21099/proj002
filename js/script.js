"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из роследних просмотренных фильмов?', ''),
//       b = +prompt('На сколько вы его оцениваете?',''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = +prompt('На сколько вы его оцениваете?','');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);
// let a=1/0;
// if (a) {
//     console.log('Ok!');
// } else {
//     console.log('Error!');
// };

// const num = 50;
// (num === 50) ? console.log("ok") : console.log("Err");

// switch (num){
//     case 49:
//         console.log("Неверно!");
//         break;
//     case 100:
//         console.log("Неверно!!!");
//         break;
//     case 50:
//         console.log("Точняк");
//         break;
//     default:
//         console.log("Брррр, Вжу!");
//         break;
// };

let num = 50;

while (num <= 55){
    console.log(num++);
}
--num;
console.log();
do {
    console.log(num--);
} while (num >=50);
console.log();
for (let i = 1; i < 8; i++) {    
    if (i === 6) {
        console.log();
        continue;
    };
    //   break
    console.log(i);
};
