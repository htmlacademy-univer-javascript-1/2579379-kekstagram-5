import { allPhotosContainer, allPhotos } from "./draw.js";
import { isEscKey } from "./utils.js";
import { renderBigPhoto } from "./render-full-size-photo.js";
import { renderComments, cleanComments } from "./render-comments.js";

const bigPhotoContainer = document.querySelector(".big-picture");
const closeBigPhotoButton = document.querySelector(".big-picture__cancel");
const body = document.querySelector("body");

const commentsCount = document.querySelector(".social__comment-count");
const commentsLoader = document.querySelector(".comments-loader");

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
  const currentPhotoComments = currentPhoto.comments;

  bigPhotoContainer.classList.remove("hidden");

  renderBigPhoto(currentPhoto);
  renderComments(currentPhotoComments);

  body.classList.add(".modal-open");
  //commentsCount.classList.add("hidden");
  //commentsLoader.classList.add("hidden");
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
