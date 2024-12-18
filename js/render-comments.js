const commentsList = document.querySelector(".social__comments");
const commentTemplate = document.querySelector(".social__comment");
commentsList.innerHTML = "";

const renderComments = (comments) => {
  comments.forEach((comment) => {
    const oneComment = commentTemplate.cloneNode(true);
    oneComment.querySelector(".social__picture").src = comment.avatar;
    oneComment.querySelector(".social__picture").alt = comment.name;
    oneComment.querySelector(".social__text").textContent = comment.message;
    commentsList.appendChild(oneComment);
  });
};

const cleanComments = () => {
  commentsList.innerHTML = "";
};

export {renderComments, cleanComments};
