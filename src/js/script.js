// Modules
import { messageFormatter, clearInput } from "./helpers.js";

// DOM Elements
const showcaseMessage = document.querySelector(".showcase__message");

const tabButtonContainer = document.querySelector(".tab__button-container");
const tabButtons = document.querySelectorAll(".tab__button");
const tabContents = document.querySelector(".tab__content");

const chatButton = document.querySelector(".chat");

// Functions
const resizeTextArea = () => {
  if (showcaseMessage.value) showcaseMessage.style.height = "200px";
  if (!showcaseMessage.value) showcaseMessage.style.height = "";
};

const showClickedArea = (e) => {
  const clicked = e.target.closest(".tab__button");
  if (!clicked) return;

  // Remove the active class from on top of buttons
  tabButtons.forEach((button) =>
    button.classList.remove("tab__button--active")
  );

  const tabContainers = Array.from(tabContents.children);

  // Hide all containers for starter
  tabContainers.forEach((content) => content.classList.add("hidden"));

  clicked.classList.add("tab__button--active");

  document
    .querySelector(`.tab__content--${clicked.dataset.target}`)
    .classList.remove("hidden");
};

const sendMessage = function (e) {
  e.preventDefault();
  if (showcaseMessage.value) {
    const message = showcaseMessage.value;

    // Format the message as Whatsapp message structure to send it proper way.
    const formattedMessage = messageFormatter(message);
    clearInput(showcaseMessage);

    // Create new tab
    window.open(
      `https://wa.me/905422990181?text=${formattedMessage}`,
      "_blank"
    );
    // Enter the url
  }
};

// Event Listeners
showcaseMessage.addEventListener("focusout", resizeTextArea);
tabButtonContainer.addEventListener("click", showClickedArea);
chatButton.addEventListener("click", sendMessage);
