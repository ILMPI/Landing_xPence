const popupButtons = document.querySelectorAll("[data-popup-button]");
const popup = document.querySelector("[data-popup]");
const popupClose = document.querySelector("[data-popup-close]");

// popupBtn.addEventListener("click", () => {
//   popup.classList.add("active");
// });

// popupButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     document.querySelector(".div").classList.add("active");
//   });
// });

popupClose.addEventListener("click", () => {
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
});

popupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popupId = button.getAttribute("data-popup-button");
    const popup = document.getElementById(popupId);

    if (popup) {
      popup.classList.add("active");
      popup.setAttribute("aria-hidden", "false");
    }
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
  }
});

const overlay = document.querySelectorAll("[data-popup-overlay]");

overlay.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    popup.classList.remove("active");
    popup.setAttribute("aria-hidden", "true");
  });
});
