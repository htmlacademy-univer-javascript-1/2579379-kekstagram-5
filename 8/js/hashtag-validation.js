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

const validateHashtags = (value) => {
  const inputValue = value.toLowerCase().trim();

  const hashtags = inputValue.split(" ");

  if (hashtags.some((tag) => tag[0] !== "#")) {
    return "Хэштег должен начинаться с символа #";
  }

  if (!isHashtagUnique(hashtags)) {
    return "Хэштеги не должны повторяться";
  }

  if (hashtags.some((tag) => tag.slice(1).includes("#"))) {
    return "Хэштеги должны разделяться пробелами";
  }

  return true;
};

export { validateHashtags };
