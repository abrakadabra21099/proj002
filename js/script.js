"use strict";

// do {
// let numberOfFilms;
// } while ( numberOfFilms );

// function start() {
//     do {
//         numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');
//     } while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) { 
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
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },
    detectPersonalLevel: function () {
        do {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели', '');
        } while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count));

        if (personalMovieDB.count < 10)
            alert('Вы посмотрели слишком мало фильмов!')
        else if (personalMovieDB.count >= 30)
            alert('Да вы киноман!')
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
            alert('Вы классический зритель!')
        else alert('Ошибка!');
    },
    writeYourGenres: function () {
        for (let i = 0; i<3; i++) {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '') {
                i--;
            };
        };
        personalMovieDB.genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${value}.`);
        })
    },
    showMyDB: function () {
        if (!personalMovieDB.privat)
            console.log(personalMovieDB);
    }
};

personalMovieDB.detectPersonalLevel();
personalMovieDB.rememberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();


// function rememberMyFilms() {

//     for (let i = 0; i < 2; i++) { 
//         const a = prompt('Один из роследних просмотренных фильмов?', ''),
//               b = prompt('На сколько вы его оцениваете?','');
//         if (a == null || b == null || a.length > 50 || a.length < 1 || b.length > 50 || b.length < 1) {
//             console.log('Error');
//             i--;
//             continue;
//         }
//         console.log('done');
//         personalMovieDB.movies[a] = b;
//     }
//     // console.log(personalMovieDB);
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10)
//         alert('Вы посмотрели слишком мало фильмов!')
//     else if (personalMovieDB.count >= 30)
//         alert('Да вы киноман!')
//     else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30)
//         alert('Вы классический зритель!')
//     else alert('Ошибка!');
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) console.log(personalMovieDB);
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 0; i<3; i++) 
//         personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}?`, '');
    
// }

// writeYourGenres();

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
