import { isEscKey } from "./utils.js";
import { validatorCreation } from "./validation.js";
import { FILE_TYPES, BUTTON_STATE } from "./constants.js";
import { showPreview } from "./preview-photo.js";
import { setData } from "./api.js";
import { showMessageModal } from "./error-message.js";

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
  const validator = validatorCreation(uploadForm);
  validator.addValidators(hashtagsInput, commentInput);

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

  const submitButton = document.querySelector(".img-upload__submit");

  const successTemplate = document.querySelector("#success").content.querySelector(".success");
  const errorTemplate = document.querySelector("#error").content.querySelector(".error");

  const sendForm = (elementForm) => {
    const isFormValid = validator.validate();

    if (isFormValid) {
      const formData = new FormData(elementForm);
      hashtagsInput.value = hashtagsInput.value.trim().replace(/\s+/g, " ");
      submitButton.textContent = BUTTON_STATE.SENDING;
      submitButton.disabled = true;

      setData(formData).then(() => {
        showMessageModal(successTemplate);
        closeUploadForm();
        uploadForm.reset();
      }).catch (() => {
        showMessageModal(errorTemplate);
      }).finally (() => {
        submitButton.textContent = BUTTON_STATE.IDLE;
        submitButton.disabled = false;
      });
    }
  };

  function onSubmitForm (event) {
    event.preventDefault();
    sendForm(event.target);
  }
};

function closeUploadForm () {
  photoEditForm.classList.add("hidden");
  body.classList.remove("modal-open");
  fileUploadControl.value = "";
  document.removeEventListener("keydown", closeOnEsc);
  closeEditorButton.removeEventListener("click", onCloseButtonClick);
}

export { openEditor };
