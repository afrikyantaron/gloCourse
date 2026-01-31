const title = 'Проект интенсива Glo Academy';
const screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 50;
const rollback = 10;
let fullPrice = 100;
const adaptive = true;

alert('Предупреждение с любым текстом');
console.log(title, fullPrice, adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов:', screenPrice, 'рублей', 'и Стоимость разработки сайта:', fullPrice, 'рублей');
console.log(screens.toLowerCase().split(', '));
console.log('Процент отката посреднику за работу', (fullPrice * (rollback/100)));