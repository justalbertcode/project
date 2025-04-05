'use strict';
const result = document.getElementById('result')
const data = document.getElementById('data')


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотерили?', '');

    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотерили?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [],
    privat: false
};



function rememberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', ''); 
        if (a != null && b != null && a != '' && b != '' && a.length <50){
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }     
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        result.innerText = 'Просмотрено довольно мало фильмов';
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <30) {
         result.innerText = 'Вы классический зритель';
    } else if (personalMovieDB.count >= 30){
         result.innerText = 'Вы киноман!';
    } else {
         result.innerText = 'Произошла ошибка';
    }
}

detectPersonalLevel();

// function showMyDB(hidden){
//     if(!hidden){
//         data.innerText = JSON(personalMovieDB)
//     }
// }
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i=1; i <=3; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номер ${i}`);
    }
}

writeYourGenres();
