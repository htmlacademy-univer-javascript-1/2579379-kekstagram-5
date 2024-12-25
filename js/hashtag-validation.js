const isHashtagUnique = (hashtags) => {
  for (const hashtag of hashtags) {
    if(hashtags.reduce((i, currentValue) => {
      if (currentValue === hashtag) {
        return ++i;
      }
    }, 0) > 1) {
      return false;
    }
  }
  return true;
};

const getValue = (value) => {
  const inputValue = value.toLowerCase().trim();

  const hashtags = inputValue.split(" ");

  return hashtags;
};

const isHashSymbol = (value) => {
  const hashtags = getValue(value);

  if (!hashtags.some((tag) => tag[0] !== "#")) {
    return true;
  }
  return false; // "Хэштег должен начинаться с символа #"
};

const isRepeat = (value) => {
  const hashtags = getValue(value);

  if (isHashtagUnique(hashtags)) {
    return true;
  }
  return false; //"Хэштеги не должны повторяться"
};

const isSpaceBetween = (value) => {
  const hashtags = getValue(value);

  if (!hashtags.some((tag) => tag.slice(1).includes("#"))) {
    return true;
  }
  return false; // "Хэштеги должны разделяться пробелами"
};

export { isHashSymbol, isRepeat, isSpaceBetween };
