const showGetDataErrorMessage = (message) => {
  const messageContainer = document.createElement("div");
  messageContainer.style.zIndex = "100";
  messageContainer.style.position = "absolute";
  messageContainer.style.left = "0";
  messageContainer.style.top = "0";
  messageContainer.style.right = "0";
  messageContainer.style.padding = "10px 3px";
  messageContainer.style.fontSize = "30px";
  messageContainer.style.textAlign = "center";
  messageContainer.style.backgroundColor = "red";

  messageContainer.textContent = message;

  document.body.append(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, 3000);
};

const showMessageModal = (messageTemplate) => {
  const body = document.body;
  const messageModal = messageTemplate.cloneNode(true);
  body.appendChild(messageModal);

  const closeMessageButton = messageModal.querySelector(".close__button");
  const closeOnEscKey = (event) => event.key === "Escape" && closeMessageModal();
  const closeOnOutsideClick = (event) => !event.target.closest(".inner") && closeMessageModal();

  function closeMessageModal () {
    messageModal.remove();
    document.removeEventListener("keydown", closeOnEscKey);
    document.removeEventListener("click", closeOnOutsideClick);
  }

  closeMessageButton.addEventListener("click", closeMessageModal);
  document.addEventListener("keydown", closeOnEscKey);
  document.addEventListener("click", closeOnOutsideClick);
};

export { showGetDataErrorMessage, showMessageModal };
