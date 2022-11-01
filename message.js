const messageSpan = document.getElementById("success-message");

const submitButton = document.getElementById("submit-button");

const text = document.createTextNode("Message has been submitted.");

submitButton.addEventListener("click", () => {
  messageSpan.appendChild(text);

  setTimeout(() => {
    messageSpan.removeChild(text);
  }, 3000);
});
