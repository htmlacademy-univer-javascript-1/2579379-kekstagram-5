const NAMES = [
  "Sofia", "Egor", "Oleg", "Alexandra", "Semion", "Valentina", "Ksenia", "Vadim", "Vika", "Kirill",
  "Denis", "Alexandr", "Nikita", "Nastya", "Sergey", "Tanya", "Sveta", "Olga", "Veronika", "Yana",
  "Lena", "Zhenya", "Timur", "Svyatozar", "Fillimon", "David", "Murat", "Leonid", "Masha", "Vera"
];

const TEXT_FOR_MESSAGE = "Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!";

const ERRORS = {
  NOT_HASH: "Хэштег должен начинаться с символа #",
  REPEATS: "Хэштеги не должны повторяться",
  NOT_SPACES: "Хэштеги должны разделяться пробелами"
};

const MAX_COMMENT_LENGTH = 140;

const FILE_TYPES = ["jpg", "jpeg", "png"];

export { NAMES, TEXT_FOR_MESSAGE, MAX_COMMENT_LENGTH, FILE_TYPES, ERRORS };
