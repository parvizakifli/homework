// 1. Функцию которая принимает цифру от 1 до 7 и возвращает в ответ строку с названием дня недели 

function getWeekDay(day) {
    switch (day) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
        default:
            console.log('you entered the wrong form');
    };
};
getWeekDay(3);

// 2.  Функцию которая принимает два параметра. Первым параметром число, а вторым параметром строку factorial, square или abs. 

function getResult(x, y) {
    if (y === 'squar') {
        return x * x
    };
    if (y === 'abs') {
        if (x > 0) {
            return x
        } else {
            // console.log('wrong');
        }
    }
    if (y === 'factorial') {
        let key = 1
        for (let i = 1; i <= x; i++) {
            key = key * i
        };
        console.log(key);
    }
    else if (!x == Number()) {
        console.log('you entered the wrong form');
    }
}
let res = getResult(6, 'abs');
console.log(res);

//3. Напишите функцию, которая будет принимать первым параметром символ и вторым параметром число и будет выводить в консоль этот символ в столько строк и столбцов, сколько указано число.

function getSquare(x, y) {

    for (let i = 1; i <= y; i++) {

        let key = '';

        for (j = 1; j <= y; j++){
            key += x;
        }
        console.log(key);
    };
}
getSquare('a', 3);

// 4. Функцию которая принимает число и в ответ выводит в консоль, четное оно или нет.

function getNumber(a) {
    if (a % 2 === 0) {
        console.log('Четное число');
    } else {
        console.log('Нечетное число');
    }
}
getNumber(4);

// 5. Функцию которая принимает число и выводит в консоль его делители.

function getDelimeters(x) {
    for (let i = 1; i <= x; i++){
        if (x % i == 0) {
            console.log(i)
        }
    }
};
getDelimeters(8);

// 6.Функцию которая принимает в параметрах число и вторым вызовом принимает второе число и в результате возвращает первое число возведенное в степень второго.

function getPow(x) {
    function get(y) {
        return x ** y
    }
    return get;
}
let $result = getPow(5)(3)
console.log($result);


