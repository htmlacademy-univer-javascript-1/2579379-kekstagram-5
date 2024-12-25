import { isEscKey } from "./utils.js";
import { isHashSymbol, isRepeat, isSpaceBetween } from "./hashtag-validation.js";
import { MAX_COMMENT_LENGTH, FILE_TYPES, ERRORS } from "./constants.js";
import { showPreview } from "./preview-photo.js";

const fileUploadControl = document.querySelector(".img-upload__input");
const photoEditForm = document.querySelector(".img-upload__overlay");
const closeEditorButton = document.querySelector(".img-upload__cancel");
const uploadForm = document.querySelector(".img-upload__form");
const hashtagsInput = document.querySelector(".text__hashtags");
const commentInput = document.querySelector(".text__description");
const body = document.body;

const onCloseButtonClick = () => closeUploadForm();

const closeOnEsc = (event) => {
  if (isEscKey(event)) {
    event.preventDefault();
    if (document.activeElement === hashtagsInput
      || document.activeElement === commentInput) {
      event.stopPropagation();
    } else {
      uploadForm.reset();
      closeUploadForm();
    }
  }
};

const openEditor = () => {
  fileUploadControl.addEventListener("change", (event) => {
    event.preventDefault();
    photoEditForm.classList.remove("hidden");
    body.classList.add("modal-open");

    const file = fileUploadControl.files[0];
    const fileName = file.name.toLowerCase();
    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      showPreview(file);
    } else {
      fileUploadControl.value = "";
    }

    closeEditorButton.addEventListener("click", onCloseButtonClick);
    document.addEventListener("keydown", closeOnEsc);
    uploadForm.addEventListener("submit", onSubmitForm);
  });
};

function closeUploadForm () {
  photoEditForm.classList.add("hidden");
  body.classList.remove("modal-open");
  fileUploadControl.value = "";
  document.removeEventListener("keydown", closeOnEsc);
  closeEditorButton.removeEventListener("click", onCloseButtonClick);
}

const commentValidate = (value) => value.length <= MAX_COMMENT_LENGTH;

const pristine = new Pristine (uploadForm,
  {
    classTo: "form__item",
    errorClass: "form__item--invalid",
    successClass: "form__item--valid",
    errorTextParent: "form__item",
    errorTextTag: "span",
    errorTextClass: "form__error"
  }
);

const hashtagsValidation = () => {
  pristine.addValidator(hashtagsInput, isHashSymbol, ERRORS.NOT_HASH, 1);
  pristine.addValidator(hashtagsInput, isSpaceBetween, ERRORS.NOT_SPACES, 1);
  pristine.addValidator(hashtagsInput, isRepeat, ERRORS.REPEATS, 1);
};

hashtagsValidation();

pristine.addValidator(commentInput, commentValidate, "Комментарий не должен содержать более 140 символов");

commentInput.addEventListener("input", (event) => {
  event.preventDefault();
  pristine.validate();
});

function onSubmitForm (event) {
  event.preventDefault();
  if (pristine.validate()) {
    hashtagsInput.value = hashtagsInput.value.trim().replace(/\s+/g, " ");
    uploadForm.submit();
  }
}

export { openEditor };
