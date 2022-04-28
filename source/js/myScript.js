"use strict"
var person;
if(confirm("Пройти тест?")){
    person = prompt("Как Вас зовут?");
    alert("Привет, " + person);
}
var answer2;
if(confirm("Доступно 2 вида сайта: лендинг (5000р), верстка по макету (10000р)")){
    answer2 = prompt("Выберите тип сайта?");
}
var answer3;
if(confirm("Включать дополнительную услугу, адаптивности")){
    answer3 = prompt("Ответ: Да/Нет")
}
var answer4;
if(confirm("Сбор данных.Форма обратной связи?")){
   answer4 = prompt("Ответ: Да/Нет");
}
console.log(person);
