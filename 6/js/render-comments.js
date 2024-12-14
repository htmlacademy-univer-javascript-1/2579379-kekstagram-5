const commentsList = document.querySelector(".social__comments");
commentsList.innerHTML = "";

const renderComments = (comments) => {
  comments.forEach((comment) => {
    const oneComment = document.createElement("li");
    oneComment.classList.add("social__comment");
    const commentAvatar = document.createElement("img");
    commentAvatar.classList.add("social__picture");
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentAvatar.width = "35";
    commentAvatar.height = "35";
    oneComment.appendChild(commentAvatar);
    const commentMessage = document.createElement("p");
    commentMessage.classList.add("social__text");
    commentMessage.textContent = comment.message;
    oneComment.appendChild(commentMessage);
    commentsList.appendChild(oneComment);
  });
};

export {renderComments};
