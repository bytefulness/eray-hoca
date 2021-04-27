export const messageFormatter = (message) => {
  const formattedMessage = message.replaceAll(" ", "%20");
  return formattedMessage;
};

export const clearInput = function (element) {
  element.value = "";
};
