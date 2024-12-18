import { getUniqueRandomValue, getMessage, getRandomInteger} from "./utils.js";
import { NAMES, TEXT_FOR_MESSAGE} from "./constants.js";


const getCommentId = getUniqueRandomValue(0, 3000000);

const getComment = () => {
  const avatarPart = getUniqueRandomValue(1, 6);
  return {
    id: getCommentId(),
    avatar: `img/avatar-${avatarPart()}.svg`,
    message: getMessage(TEXT_FOR_MESSAGE),
    name: NAMES[getRandomInteger(0, NAMES.length - 1)]
  };
};

const getPhotoId = getUniqueRandomValue(1, 25);
const getUrlPart = getUniqueRandomValue(1, 25);

const getPhotoDescription = () => {
  const comments = Array.from({length: getRandomInteger(0, 30)}, getComment);
  return {
    id: getPhotoId(),
    url: `photos/${getUrlPart()}.jpg`,
    likes: getRandomInteger(15, 200),
    description: "This is photo description",
    comments: comments
  };
};

const getAllPhotoDescriptions = () => {
  const photos = Array.from({length: 25}, getPhotoDescription);
  return photos;
};

export {getComment, getPhotoDescription, getAllPhotoDescriptions};
