const toggleThemeBtn = document.querySelector("#toggle-theme");
const shoppingCartIcon = document.querySelector("#shopping-cart");
const shoppingCartContent = document.querySelector("#shopping-cart-content");

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

toggleThemeBtn.addEventListener("click", themeHandler);
