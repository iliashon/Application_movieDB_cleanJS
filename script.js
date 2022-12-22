/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

        'film1': 'ocenka1',
        'film2': 'ocenka2'

    },
    actors: {

    },
    genres: [],
    privat: false

};

personalMovieDB.movies.film1 = prompt('Какой фильм смотрели предпоследним?', '');
personalMovieDB.movies.ocenka1 = prompt('Какую оценку поставите?', '');
personalMovieDB.movies.film2 = prompt('Какой фильм смотрели последним?', '');
personalMovieDB.movies.ocenka2 = prompt('Какую оценку поставите фильму?', '');

console.log(personalMovieDB.movies.film1 + ' ' + 'Оценка:' + personalMovieDB.movies.ocenka1);
console.log(personalMovieDB.movies.film2 + ' ' + 'Оценка:' + personalMovieDB.movies.ocenka2);
console.log('Просмотренно' + ' ' + numberOfFilms + ' ' + 'фильмов');





