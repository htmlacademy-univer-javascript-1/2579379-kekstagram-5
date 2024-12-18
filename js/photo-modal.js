import { allPhotosContainer, allPhotos } from "./draw.js";
import { isEscKey } from "./utils.js";
import { renderBigPhoto } from "./render-full-size-photo.js";
import { onCommentsLoaderClick, cleanComments } from "./render-comments.js";

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

const openPhotoModal = (photoId) => {
  closeBigPhotoButton.addEventListener("click", closeOnMouseClick);
  document.addEventListener("keydown", closeOnEscape);

  const currentPhoto = allPhotos.find((photo) => photo.id === +photoId);

  bigPhotoContainer.classList.remove("hidden");

  renderBigPhoto(currentPhoto);
  onCommentsLoaderClick(currentPhoto);

  body.classList.add(".modal-open");
};

const handlePhotoClick = () => {
  allPhotosContainer.addEventListener("click", (event) => {
    const clickedPhoto = event.target.closest(".picture");
    if(clickedPhoto) {
      event.preventDefault();
      openPhotoModal(clickedPhoto.dataset.id);
    }
  });
};

export {handlePhotoClick};
