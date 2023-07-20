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


/*
  Функция, которая принимает время начала и конца рабочего дня,
  а также время старта и продолжительность встречи в минутах
  и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

  Время указывается в виде строки в формате часы:минуты.
  Для указания часов и минут могут использоваться как две цифры, так и одна.
  Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

  Продолжительность задаётся числом. Гарантируется, что и рабочий день,
  и встреча укладываются в одни календарные сутки.
*/

const timeToMinutes = (time) => {
  const timeArray = time.split(':');
  const hours = Number(timeArray[0]);
  const minutes = Number(timeArray[1]);
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
};

const getCompareTime = (startWorkingDay, endWorkingDay, startMeeting, lengthMeeting) => {

  startWorkingDay = timeToMinutes(startWorkingDay);
  const durationMeeting = timeToMinutes(startMeeting) + lengthMeeting;
  endWorkingDay = timeToMinutes(endWorkingDay);

  return (startWorkingDay < durationMeeting) && (durationMeeting <= endWorkingDay);
};

getCompareTime('08:00', '17:30', '14:00', 90); // true
getCompareTime('8:0', '10:0', '8:0', 120); // true
getCompareTime('08:00', '14:30', '14:00', 90); // false
getCompareTime('14:00', '17:30', '08:0', 90); // false
getCompareTime('8:00', '17:30', '08:00', 900); // false
