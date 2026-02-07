'use strict'

const title = prompt("Как называется Ваш проект?");
const screens = prompt("Какие типы экранов нужно разработать?", "Пример: " + "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "Пример: " + "12000");
const adaptive = confirm("Нужен ли адаптив на сайте?");

const service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
const service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let rollback = 10;
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice * (1 - rollback / 100));

console.log("Итоговая стоимость за вычетом отката посреднику: " + servicePercentPrice);

if (fullPrice <= 0) {
    console.log("Что-то пошло не так");
} else if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000) {
    console.log("Даем скидку в 5%");
} else {
    console.log("Скидка не предусмотрена");
}