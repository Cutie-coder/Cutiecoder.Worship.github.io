document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".dropdown-menu");

  if (toggleButton && menu) {
    toggleButton.addEventListener("click", function () {
      menu.classList.toggle("active");
    });
  } else {
    console.warn("Menu toggle button or dropdown menu not found in the DOM.");
  }
});