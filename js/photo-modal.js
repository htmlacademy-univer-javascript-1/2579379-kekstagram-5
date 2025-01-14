import { allPhotosContainer } from "./draw.js";
import { isEscKey } from "./utils.js";
import { renderBigPhoto } from "./render-full-size-photo.js";
import { loadComments, cleanComments } from "./render-comments.js";

const bigPhotoContainer = document.querySelector(".big-picture");
const closeBigPhotoButton = document.querySelector(".big-picture__cancel");
const body = document.querySelector("body");

const closeOnEscape = (event) => {
  if (isEscKey(event)) {
    event.preventDefault();
    closePhotoModal();
  }
};

const closeOnMouseClick = (event) => {
  event.preventDefault();
  closePhotoModal();
};

function closePhotoModal () {
  bigPhotoContainer.classList.add("hidden");
  document.removeEventListener("keydown", closeOnEscape);
  bigPhotoContainer.removeEventListener("click", closeOnMouseClick);
  body.classList.remove(".modal-open");
  cleanComments();
}

const openPhotoModal = (photo) => {
  closeBigPhotoButton.addEventListener("click", closeOnMouseClick);
  document.addEventListener("keydown", closeOnEscape);

  bigPhotoContainer.classList.remove("hidden");

  renderBigPhoto(photo);
  loadComments(photo);

  body.classList.add(".modal-open");
};

const handlePhotoClick = (photos) => {
  allPhotosContainer.addEventListener("click", (event) => {
    const clickedPhoto = event.target.closest(".picture");
    const currentPhoto = photos.find((photo) => photo.id === +clickedPhoto.dataset.id);
    if(currentPhoto) {
      event.preventDefault();
      openPhotoModal(currentPhoto);
    }
  });
};

export { handlePhotoClick };
