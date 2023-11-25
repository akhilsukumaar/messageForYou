const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

function showToast(message) {
  const toastContainer = document.getElementById('toast-container');
  toastContainer.textContent = message;
  toastContainer.style.display = 'block';

  // Hide the toast after 10 seconds
  setTimeout(() => {
    toastContainer.style.display = 'none';
  }, 10000);
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 28th!";
  gif.src =
    "https://media.giphy.com/media/idFxmiV2dayJEqzXaW/giphy.gif";

    showToast('Message sent to Akhil Sukumaran');
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});