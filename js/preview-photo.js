const preview = document.querySelector(".img-upload__preview img");
const effectsPreview = document.querySelectorAll(".effects__preview");

const showPreview = (file) => {
  const imgURL = URL.createObjectURL(file);
  preview.src = imgURL;
  effectsPreview.forEach((item) => {
    item.style.backgroundImage = `url(${imgURL})`;
  });
};

export {showPreview};
