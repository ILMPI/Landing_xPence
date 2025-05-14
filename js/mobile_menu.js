const menu = document.querySelector(".header__nav");
// const menuButton = document.querySelector(".menu_button");

// menuButton.addEventListener("click", () => {
//   if (menu.style.display == "flex") {
//     menu.style.display = "";
//   } else {
//     menu.style.display = "flex";
//   }
// });

// menuButton.addEventListener("click", () => {
//   menu.classList.toggle("active");
// });

const checkbox = document.getElementById("checkbox4");

// checkbox.addEventListener("change", () => {
//   if (checkbox.checked) {
//     menu.style.display = "flex";
//   } else {
//     menu.style.display = "";
//   }
// });

checkbox.addEventListener("change", () => {
  menu.classList.toggle("active", checkbox.checked);
});
