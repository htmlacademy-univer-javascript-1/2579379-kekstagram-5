const commentsList = document.querySelector(".social__comments");
const commentTemplate = document.querySelector(".social__comment");

const shownCommentsCount = document.querySelector(".social__comment-count");
const totalCommentsCount = document.querySelector(".comments-count");
const commentsLoader = document.querySelector(".comments-loader");

commentsList.innerHTML = "";

const RENDER_STEP = 5;
let currentVisibleCount = 0;
let allPhotoComments = [];

const renderComments = () => {
  const visibleComments = allPhotoComments.slice(currentVisibleCount, currentVisibleCount + RENDER_STEP);
  const visibleCommentsLength = visibleComments.length + currentVisibleCount;
  visibleComments.forEach((comment) => {
    const oneComment = commentTemplate.cloneNode(true);
    oneComment.querySelector(".social__picture").src = comment.avatar;
    oneComment.querySelector(".social__picture").alt = comment.name;
    oneComment.querySelector(".social__text").textContent = comment.message;
    commentsList.appendChild(oneComment);
  });

  totalCommentsCount.textContent = allPhotoComments.length;
  if (totalCommentsCount.textContent === "1" || totalCommentsCount.textContent === "21") {
    shownCommentsCount.textContent = `${visibleCommentsLength} из ${totalCommentsCount.textContent} комментария`;
  } else {
    shownCommentsCount.textContent = `${visibleCommentsLength} из ${totalCommentsCount.textContent} комментариев`;
  }

  if (visibleCommentsLength >= allPhotoComments.length) {
    commentsLoader.classList.add("hidden");
  }

  currentVisibleCount += RENDER_STEP;
};

const loadComments = (photo) => {
  allPhotoComments = photo.comments;
  renderComments();
  commentsLoader.addEventListener("click", renderComments);

};

const cleanComments = () => {
  commentsList.innerHTML = "";
  currentVisibleCount = 0;
  commentsLoader.classList.remove("hidden");
  commentsLoader.removeEventListener("click", renderComments);
};

export { loadComments, cleanComments };
