const toggleThemeBtn = document.querySelector("#toggle-theme");
const shoppingCartIcon = document.querySelector("#shopping-cart");
const shoppingCartContent = document.querySelector("#shopping-cart-content");
const mobileMenuBtn = document.querySelector("#mobile-menu-toggle");
const mobileMenuContent = document.querySelector("#mobile-menu-content");
const overlay = document.querySelector(".overlay");
const xMark = document.querySelector(".x-mark");
const storeElement = document.querySelector("#store");
const subMenuElem = document.querySelector(".sub-menu");

const themeHandler = () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

//* بجای این تابع فعلا از هاور استفاده می‌کنیم
const shoppingCartHandler = () => {
  const cls = ["opacity-0", "invisible", "opacity-100", "visible"];

  cls.forEach((className) => {
    shoppingCartContent.classList.toggle(className);
  });
};

const openOrCloseMenuHandler = () => {
  mobileMenuContent.classList.toggle("-right-64");
  mobileMenuContent.classList.toggle("right-0");
  overlay.classList.toggle("hidden");
};

const showSubMenu = () => {
  subMenuElem.classList.toggle("max-h-0");
  subMenuElem.classList.toggle("max-h-96");
};

toggleThemeBtn.addEventListener("click", themeHandler);
mobileMenuBtn.addEventListener("click", openOrCloseMenuHandler);
xMark.addEventListener("click", openOrCloseMenuHandler);
storeElement.addEventListener("click", showSubMenu);
