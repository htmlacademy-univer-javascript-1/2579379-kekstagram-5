import { getUniqueRandomValue, getMessage, getRandomInteger} from "./utils";
import { NAMES, TEXT_FOR_MESSAGE} from "./constants";


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
    description: "This is photo description",
    comments: comments
  };
};

export {getComment, getPhotoDescription};
