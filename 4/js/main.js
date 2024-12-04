import {getPhotoDescription} from "./data";

const getAllPhotoDescriptions = () => {
  const photosArray = Array.from({length: 25}, getPhotoDescription);
  return photosArray;
};

getAllPhotoDescriptions();
