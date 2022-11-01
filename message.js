const messageSpan = document.getElementById("success-message");

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const text = document.createTextNode("Message has been submitted.");
  messageSpan.appendChild(text);

  setTimeout(() => {
    messageSpan.removeChild(text);
  }, 3000);
});
