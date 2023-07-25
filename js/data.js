import { getRandomInteger, getRandomArrayElement } from './util.js';

const POSTS_COUNT = 25;
const AVATARS_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENTS_COUNT = 30;

const DESCRIPTIONS = [
  'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать..... / I\'ve bought some potatoes.',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Тестим новую камеру! #camera #test #new #newcameratest #pic #photo #instaphoto',
  'Летний чил на югах. #тай #отдых #лето #чил #travel #travelgram #summergram #chill',
  'Хорошо, когда в жизни есть #друзья, которые вместе со мной могут зайти в #барнарубинштейна и бахнуть #пивка'
];

const MESSAGE_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = ['Алекс', 'Иван', 'Константин', 'Олег', 'Артём', 'Даниил', 'Дмитрий', 'Андрей'];

const createIdGenerator = () => {
  let lastGenerateId = 0;

  return () => {
    lastGenerateId += 1;
    return lastGenerateId;
  };
};

const generateCommentId = createIdGenerator;

const createMessage = () => Array.from(
  { length: getRandomInteger(1,2) },
  () => getRandomArrayElement(MESSAGE_LINES),
).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1,AVATARS_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createPosts = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT,LIKE_MAX_COUNT),
  comments:
    Array.from(
      { length: getRandomInteger(0,COMMENTS_COUNT) },
      createComment,
    )
});

const getPosts = () => Array.from(
  { length: POSTS_COUNT },
  (_item, postIndex) => createPosts(postIndex + 1),
);

export { getPosts };
