// ДАННЫЕ ДЛЯ ВЫЧЕСЛЕНИЯ offer

const LATITUDE_MIN = 35.65000;
const LATITUDE_MAX = 35.70000;

const LONGITUDE_MIN = 139.70000;
const LONGITUDE_MAX = 139.80000;

const NUMBER_AFTER_DECIMAL = 5;

const MIN_ROOM_NUMBER = 1;
const MAX_ROOM_NUMBER = 10;

const MIN_PRICE = 5000;
const MAX_PRICE = 20000;

const MIN_GUESTS_NUMBER = 3;
const MAX_GUESTS_NUMBER = 12;

const ARRAY_LENGTH = 10;

const ARRAY_MIN_INDEX = 0;

const TITLE_ARRAY = [
  'Сдесь и сейчас - халупа!',
  'Поместье графа Акулы.',
  'Домик у моря.',
  'Горы и лес - снял кто долез!',
  'У Озера.',
  'Быстро и недорого.',
  'Дорого и небыстро.',
  'Озера нет, совсем.',
  'Домик у гор.',
  'Домик у свалки.'
];

const TYPE_ARRAY = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const TIME_ARRAY = [
  '12:00',
  '13:00',
  '14:00'
];

const DESCRIPTION_ARRAY = [
  'Пыльно и темно',
  'Cветло и чисто',
  'С дыркой в полу'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

//  ОБЩИЕ ФУНКЦИИ

//Получение случайного целого числа в заданном интервале, включительно.
function getRandomInt(min, max) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);

    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  }

  return null;
}

//Получение случайного числа с плавающей точкой в заданном интервале включительно, с указанным "количеством знаков после запятой".
function getRandomIntFloat(min, max, afterDecimal) {
  if (min >=0 && max > 0 && min !== max && max > min) {
    const intFloat = Math.random() * (max - min + 1) + min;

    return +intFloat.toFixed(afterDecimal);
  }

  return null;
}

//Получить случайный элемент массива
function getRandomArrayItem(array) {
  return array[getRandomInt(ARRAY_MIN_INDEX, array.length - 1)];
}

//Получить массив случайной длины
function getRandomArray(array) {
  const newArray = array.slice(getRandomInt(ARRAY_MIN_INDEX, array.length - 1));

  return newArray;
}

//ВЫЧЕСЛЕНИЯ НА ОСНОВЕ ОБЩИХ ФУНКЦИЙ И ДАННЫХ.

function getLocation() {
  return {
    lat: getRandomIntFloat(LATITUDE_MIN, LATITUDE_MAX, NUMBER_AFTER_DECIMAL),
    lng: getRandomIntFloat(LONGITUDE_MIN,LONGITUDE_MAX, NUMBER_AFTER_DECIMAL)
  };
}

function createOffer(_,index) {
  const coordinates = getLocation();
  const avatarNumber = String(index + 1).padStart(2, '0');

  return {
    author: {
      avatar: `img/avatars/user${avatarNumber}.png`,
    },
    offer: {
      title: getRandomArrayItem(TITLE_ARRAY),
      adress: `${coordinates.lat}, ${coordinates.lng}`,
      price: getRandomInt(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayItem(TYPE_ARRAY),
      rooms: getRandomInt(MIN_ROOM_NUMBER, MAX_ROOM_NUMBER),
      guests: getRandomInt(MIN_GUESTS_NUMBER, MAX_GUESTS_NUMBER),
      checkin: getRandomArrayItem(TIME_ARRAY),
      checkout: getRandomArrayItem(TIME_ARRAY),
      features: getRandomArray(FEATURES),
      description: getRandomArrayItem(DESCRIPTION_ARRAY),
      photos: getRandomArray(PHOTOS)
    },
    location: coordinates,
  };
}

//Cоздать массив из 10 обьектов
function createObjectsArray (arrayLength) {
  return Array.from({length: arrayLength},createOffer);
}

createObjectsArray(ARRAY_LENGTH);
