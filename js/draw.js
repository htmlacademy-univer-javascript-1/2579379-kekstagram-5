const allPhotosContainer = document.querySelector(".pictures");

const photoElementTemplate = document.querySelector("#picture").content.querySelector(".picture");

const renderMiniatures = (photos) => {

  const photoFragment = document.createDocumentFragment();

  photos.forEach(({id, url, likes, description, comments}) => {
    const photoElement = photoElementTemplate.cloneNode(true);

    photoElement.dataset.id = id;
    photoElement.querySelector(".picture__img").src = url;
    photoElement.querySelector(".picture__img").alt = description;
    photoElement.querySelector(".picture__likes").textContent = likes;
    photoElement.querySelector(".picture__comments").textContent = comments.length;

    photoFragment.appendChild(photoElement);
  });

  allPhotosContainer.appendChild(photoFragment);
};

export { allPhotosContainer, renderMiniatures };
