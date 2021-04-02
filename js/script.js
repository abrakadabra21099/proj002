"use strict";

// do {
    const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
// } while ( numberOfFilms );

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//1// for (let i = 0; i < 2; i++) 

//2// let i = 0;
//2// while (i <2 ) {
//2//    i++;

let i = 0;
do { //3//
    i++; //3//
    const a = prompt('Один из роследних просмотренных фильмов?', ''),
          b = prompt('На сколько вы его оцениваете?','');
    if (a == null || b == null || a.length > 50 || a.length < 1 || b.length > 50 || b.length < 1) {
        console.log('Error');
        i--;
        continue;
    }
    console.log('done');
    personalMovieDB.movies[a] = b;
}
while (i < 2); //3//
console.log(personalMovieDB);

if (personalMovieDB.count < 10)
    alert('Вы посмотрели слишком мало фильмов!')
else if (personalMovieDB.count >= 30)
    alert('Да вы киноман!')
else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
    alert('Вы классический зритель!')
else alert('Ошибка!')

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

// let num = 50;

// while (num <= 55){
//     console.log(num++);
// }
// --num;
// console.log();
// do {
//     console.log(num--);
// } while (num >=50);
// console.log();
// for (let i = 1; i < 8; i++) {    
//     if (i === 6) {
//         console.log();
//         continue;
//     };
//     //   break
//     console.log(i);
// };
