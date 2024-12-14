const bigPhotoUrl = document.querySelector(".big-picture__img img");
const bigPhotoLikes = document.querySelector(".likes-count");
const bigPhotoCommentsCount = document.querySelector(".comments-count");
const bigPhotoDescription = document.querySelector(".social__caption");

const renderBigPhoto = (photo) => {
  bigPhotoUrl.src = photo.url;
  bigPhotoLikes.textContent = photo.likes;
  bigPhotoCommentsCount.textContent = photo.comments.length;
  bigPhotoDescription.textContent = photo.description;
};

export {renderBigPhoto};
