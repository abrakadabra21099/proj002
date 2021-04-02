"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из роследних просмотренных фильмов?', ''),
      b = +prompt('На сколько вы его оцениваете?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько вы его оцениваете?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);