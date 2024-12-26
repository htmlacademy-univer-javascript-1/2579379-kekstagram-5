import { renderMiniatures } from "./draw.js";
import { getData } from "./api.js";
import { handlePhotoClick } from "./photo-modal.js";
import { openEditor } from "./form.js";
import { showGetDataErrorMessage } from "./error-message.js";

const data = async () => {
  try {
    const photos = await getData();
    renderMiniatures(photos);
    handlePhotoClick(photos);
    openEditor();
  } catch (err) {
    showGetDataErrorMessage(err.message);
  }
};

data();
