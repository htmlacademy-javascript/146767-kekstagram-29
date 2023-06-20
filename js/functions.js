/*
  Функция для проверки длины строки.
  Она принимает строку, которую нужно проверить,
  и максимальную длину и возвращает true,
  если строка меньше или равна указанной длине,
  и false, если строка длиннее.
*/

const checkedLengthString = (checkString, valideLength) => {
  checkString = String(checkString).length;
  return checkString <= valideLength;
};

checkedLengthString(30, 20); // true - ожидаемые значения при вызове функции.
checkedLengthString('проверяемая строка', 20); // true
checkedLengthString('проверяемая строка', 18); // true
checkedLengthString('проверяемая строка', 10); // false


/*
  Функция для проверки, является ли строка палиндромом.
  Палиндром — это слово или фраза, которые
  одинаково читаются и слева направо и справа налево.
*/

const checkedPalindrome = (checkString) => {

  const normalizedString = checkString.replaceAll(' ','').toUpperCase();
  let invertedString = '';

  for (let i = normalizedString.length; i > 0; i--) {
    invertedString += normalizedString[i - 1];
  }

  return invertedString === normalizedString;
};

checkedPalindrome('топот'); // true - ожидаемые значения при вызове функции.
checkedPalindrome('ДовОд'); // true
checkedPalindrome('Кекс'); // false
checkedPalindrome('Лёша на полке клопа нашёл '); // true
