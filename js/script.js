'use strict';

// Task #1
let x = 4, y = 7;
let result = x > y ? 'x больше, чем y' : 'x не больше, чем y';
console.log(result)


// Task #2
let num = prompt('Введите число');
if(isNaN(+num) || num == null || num === '') {
    alert('Нужно ввести число');
} else if(num % 2 === 0) {
    alert('Число '+ num +' четное');
} else {
    alert('Число '+ num +' нечетное');
}

// // Task #3
let a = prompt('Введите положительное или отрицательное максимально трехзначное число');
let b, c;

switch (true) {
    case (a == 0 && a.length === 1):
        b = 'положительно';
        c = 'однозначное';
        break;
    case (a > 0 && a.length === 1):
        b = 'положительно';
        c = 'однозначное';
        break;
    case (a > 0 && a.length === 2):
        b = 'положительно';
        c = 'двухначное';
        break;
    case (a > 0 && a.length === 3):
        b = 'положительно';
        c = 'трехзначное';
        break;
    case (a < 0 && a.length === 2):
        b = 'отрицательное';
        c = 'однозначное';
        break;
    case (a < 0 && a.length === 3):
        b = 'отрицательное';
        c = 'двухначное';
        break;
    case (a < 0 && a.length === 4):
        b = 'отрицательное';
        c = 'трехзначное';
        break;
    default:
}
if ( a === undefined || b === undefined || c === undefined || a === isNaN(+a) || a === '' ) {
    alert(`Ошибка`);
} else {
    alert(`Ваше число ${a} ${b} ${c}`);
}


// Task #4
let first = +prompt('Введите первое число');
let second = +prompt('Введите второе число');
let third = +prompt('Введите третье число');

if(first > second && first >third) {
    alert(first +' максимальное число')
} else if(second > first && second >third) {
    alert(second +' максимальное число')
} else if(third > first && third > first) {
    alert(third +' максимальное число')
} else {
    alert('Нужно ввести число')
}


// Task #5
let one = +prompt('Введите первое число');
let two = +prompt('Введите второе число');
let three = +prompt('Введите третье число');

if( (one + two) !== three && (one + three) !== two && (two + three) !== one ) {
    alert('Треугольник получится');
}  else {
    alert('Треугольник не получится')
}