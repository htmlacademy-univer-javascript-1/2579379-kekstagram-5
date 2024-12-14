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

const isEscKey = (evt) => evt.key === "Escape";

export {getRandomInteger, getUniqueRandomValue, getMessage, isEscKey};
