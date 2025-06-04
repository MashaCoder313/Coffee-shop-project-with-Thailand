const toggleThemeBtn = document.querySelector("#toggle-theme");
const mobileThemeBtn = document.querySelector(".mobile-theme");
const shoppingCartIcon = document.querySelector("#shopping-cart");
const shoppingCartContent = document.querySelector("#shopping-cart-content");
const mobileMenuBtn = document.querySelector("#mobile-menu-toggle");
const mobileCartIcon = document.querySelector("#mobile-cart-toggle");
const mobileMenuContent = document.querySelector("#mobile-menu-content");
const overlayElem = document.querySelector(".overlay");
const closeMenuIcon = document.querySelector(".close-menu");
const closeCartIcon = document.querySelector(".close-cart");
const storeElement = document.querySelector("#store");
const subMenuElem = document.querySelector(".sub-menu");
const mobileCart = document.querySelector("#mobile-cart");

const themeHandler = () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

// //* بجای این تابع فعلا از هاور استفاده می‌کنیم
// const shoppingCartHandler = () => {
//   const cls = ["opacity-0", "invisible", "opacity-100", "visible"];

//   cls.forEach((className) => {
//     shoppingCartContent.classList.toggle(className);
//   });
// };

const openOrCloseMenuHandler = () => {
  mobileMenuContent.classList.toggle("-right-64");
  mobileMenuContent.classList.toggle("right-0");
  overlayHandler();
};

const showSubMenu = () => {
  subMenuElem.classList.toggle("max-h-0");
  subMenuElem.classList.toggle("max-h-96");
};

const shoppingCartHandler = () => {
  mobileCart.classList.toggle("-left-64");
  mobileCart.classList.toggle("left-0");

  overlayHandler();
};

const overlayHandler = () => {
  overlayElem.classList.toggle("hidden");
};

toggleThemeBtn.addEventListener("click", themeHandler);
mobileMenuBtn.addEventListener("click", openOrCloseMenuHandler);
closeMenuIcon.addEventListener("click", openOrCloseMenuHandler);
storeElement.addEventListener("click", showSubMenu);
mobileThemeBtn.addEventListener("click", themeHandler);
mobileCartIcon.addEventListener("click", shoppingCartHandler);
closeCartIcon.addEventListener("click", shoppingCartHandler);
