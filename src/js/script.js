// DOM Elements
const showcaseMessage = document.querySelector(".showcase__message");

showcaseMessage.addEventListener("focusout", function () {
  if (showcaseMessage.value) this.style.height = "200px";
  if (!showcaseMessage.value) this.style.height = "";
});
