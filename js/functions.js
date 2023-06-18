/*
  Функция для проверки длины строки.
  Она принимает строку, которую нужно проверить,
  и максимальную длину и возвращает true,
  если строка меньше или равна указанной длине,
  и false, если строка длиннее.
*/

function checkedLengthString (checkString, valideLength) {

  checkString = String(checkString).length;

  const collation = checkString <= valideLength;

  return collation;
}

checkedLengthString(30, 20); // true
checkedLengthString('проверяемая строка', 20); // true
checkedLengthString('проверяемая строка', 18); // true
checkedLengthString('проверяемая строка', 10); // false


/*
  Функция для проверки, является ли строка палиндромом.
  Палиндром — это слово или фраза, которые
  одинаково читаются и слева направо и справа налево.
*/

function checkedPalindrome (checkString) {

  const normalizedString = checkString.replaceAll(/ /g,'').toUpperCase();
  let invertedString = '';

  for (let i = normalizedString.length; i > 0; i--) {
    invertedString += normalizedString[i - 1];
  }

  const collation = invertedString === normalizedString;

  return collation;
}

checkedPalindrome('топот'); // true
checkedPalindrome('ДовОд'); // true
checkedPalindrome('Кекс'); // false
checkedPalindrome('Лёша на полке клопа нашёл '); // true
