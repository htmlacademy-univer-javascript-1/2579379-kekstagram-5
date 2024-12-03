const NAMES = [
  "Sofia", "Egor", "Oleg", "Alexandra", "Semion", "Valentina", "Ksenia", "Vadim", "Vika", "Kirill",
  "Denis", "Alexandr", "Nikita", "Nastya", "Sergey", "Tanya", "Sveta", "Olga", "Veronika", "Yana",
  "Lena", "Zhenya", "Timur", "Svyatozar", "Fillimon", "David", "Murat", "Leonid", "Masha", "Vera"
];

const TEXT_FOR_MESSAGE = "Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!";

const getRandomInteger = (min, max) => {
  const minLimit = Math.ceil(min);
  const maxLimit = Math.floor(max);

  const randomResult = Math.floor(Math.random() * (maxLimit - minLimit + 1) + minLimit);

  return randomResult;
};

const getUniqueRandomValue = (min, max) => {
  const allId = [];

  return function () {
    let currentId = getRandomInteger(min, max);
    if (allId.length >= (max - min + 1)) {
      return null;
    }
    while (allId.includes(currentId)) {
      currentId = getRandomInteger(min, max);
    }
    allId.push(currentId);

    return currentId;
  };
};

const getMessage = (text) => {
  const sentencesArray = [];
  let sentence = "";
  let message = "";
  for (let i = 0; i < text.length; i++) {
    sentence += text[i];
    if(text[i] === "!" || text[i] === ".") {
      sentencesArray.push(sentence);
      sentence = "";
    }
  }
  let sentencesCount = getRandomInteger(1, 2);
  while (sentencesCount > 0) {
    message += sentencesArray[getRandomInteger(0, sentencesArray.length - 1)];
    sentencesCount--;
  }

  return message.trim();
};

const commentId = getUniqueRandomValue(0, 3000000);

const getComment = () => {
  const avatarPart = getUniqueRandomValue(1, 6);
  return {
    id: commentId(),
    avatar: `img/avatar-${avatarPart()}.svg`,
    message: getMessage(TEXT_FOR_MESSAGE),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const photoId = getUniqueRandomValue(1, 25);
const urlPart = getUniqueRandomValue(1, 25);

const getPhotoDescription = () => {
  const comments = Array.from({length: getRandomInteger(0, 30)}, getComment);
  return {
    id: photoId(),
    url: `photos/${urlPart()}.jpg`,
    description: "This is photo description",
    comments: comments
  };
};

const getAllPhotoDescriptions = () => {
  const photosArray = Array.from({length: 25}, getPhotoDescription);
  return photosArray;
};

getAllPhotoDescriptions();
