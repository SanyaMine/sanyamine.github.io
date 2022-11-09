// находим в теле HTML контейнер, куда будем выводить результат
var res = document.getElementById("experience_total");

// объявляем наши даты
var current = new Date(); // сегодня
var old = new Date("2022-04-01"); // !!! год-месяц-день !!!

// сначала находим количество дней между датами
var days = Math.ceil(Math.abs(old.getTime() - current.getTime()) / (1000 * 3600 * 24));
var year = Math.floor(days / 365); // вычисляем кол-во лет. Math.floor убирает остаток.
var months = Math.floor((days - (year * 365)) / 30); // отняв года, вычисляем месяцы

// осталось вывести полученную информацию в контейнер:
res.innerHTML = 'Experience in IT: ' + year + ' years, ' + months + ' months';


// <p id="experience_total">Experience in IT % JS TIME TODO% </p>
