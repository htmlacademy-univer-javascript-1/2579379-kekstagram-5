import { ERRORS, MAX_COMMENT_LENGTH } from "./constants.js";

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

const commentValidate = (value) => value.length <= MAX_COMMENT_LENGTH;

const validatorCreation = (form) => {
  const pristine = new Pristine (form,
    {
      classTo: "form__item",
      errorClass: "form__item--invalid",
      successClass: "form__item--valid",
      errorTextParent: "form__item",
      errorTextTag: "span",
      errorTextClass: "form__error"
    }
  );

  const addValidators = (hashtagsInput, commentInput) => {

    pristine.addValidator(hashtagsInput, isHashSymbol, ERRORS.NOT_HASH, 1);
    pristine.addValidator(hashtagsInput, isSpaceBetween, ERRORS.NOT_SPACES, 1);
    pristine.addValidator(hashtagsInput, isRepeat, ERRORS.REPEATS, 1);

    pristine.addValidator(commentInput, commentValidate, "Комментарий не должен содержать более 140 символов");
    commentInput.addEventListener("input", (event) => {
      event.preventDefault();
      pristine.validate();
    });
  };

  return {
    pristine,
    addValidators,
    validate: () => pristine.validate()
  };
};

export { validatorCreation };
