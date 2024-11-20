/*Функция для проверки длины строки*/
function checkLength (inputString, maxLength) {
  if(inputString.length <= maxLength) {
    return true;
  }
  return false;
}

checkLength('i am string', 11);

/* Для тестирования в консоли
console.log(`-Строка короче максимальной длины? - ${checkLength('hello', 10)}`);
console.log(`-Строка короче максимальной длины? - ${checkLength('hellooooooooooooooooo', 20)}`);
console.log(`-Строка короче максимальной длины? - ${checkLength('hello!', 6)}`);*/

/*Функция для проверки, является ли строка палиндромом*/
function checkPalindrom (inputString) {
  const newStr = inputString.toLowerCase().replaceAll(' ', '');
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr[newStr.length - 1 - i]) {
      return true;
    }
    return false;
  }
}

checkPalindrom('mem');

/*Для тестирования в консоли
console.log(`-Строка является палиндромом? - ${checkPalindrom('топот')}`);
console.log(`-Строка является палиндромом? - ${checkPalindrom('До ВоД')}`);
console.log(`-Строка является палиндромом? - ${checkPalindrom('Кекс')}`);
console.log(`-Строка является палиндромом? - ${checkPalindrom('аааааа')}`);
console.log(`-Строка является палиндромом? - ${checkPalindrom('А роза упала на лапу Азора ')}`);*/

/*Функция для извлечения цифр из строки*/
const extractNumbers = (str) => {
  let res = '';
  if(typeof str === 'number') {
    if(str < 0) {
      str = -str;
    }
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if(!Number.isNaN(parseInt(str[i], 10))) {
      res += parseInt(str[i], 10);
    }
  }

  return res === '' ? NaN : Number(res);
};

extractNumbers('123hi');

/*Для тестирования в консоли
console.log('Извлечение цифр из строки:');
console.log(extractNumbers('124 gh'));
console.log(extractNumbers(123));
console.log(extractNumbers(-23));
console.log(extractNumbers('675 fgh 0 56'));
console.log(extractNumbers('hi, i have no numbers'));*/
