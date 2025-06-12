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

//* BestSellingProducts

const bestSellingProducts = [
  {
    id: 1,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p1.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 2,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p2.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 3,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p3.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 4,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p4.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 5,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p5.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 6,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p6.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 7,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p7.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
  {
    id: 8,
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
    image: "./images/products/p8.png",
    discount: "12%",
    currentPrice: "154,000",
    oldPrice: "175,000",
  },
];

const renderBestSellers = () => {
  const wrapper = document.querySelector(".swiper-wrapper");

  bestSellingProducts.forEach((product) => {
    const template = `
      <div class="swiper-slide relative">
        <span class="flex-center font-dana-medium text-xs md:text-sm lg:text-base absolute right-2 md:right-4 lg:right-6 w-10 h-5 lg:w-13.5 lg:h-7.5 bg-orange-300 text-white dark:text-zinc-700 rounded-[100px] pt-1">
          ${product.discount}
        </span>

        <div class="size-32 sm:size-40 md:size-52 lg:size-65 mx-auto">
          <img src="${product.image}" alt="product-${product.id}" />
        </div>

        <h4 class="text-sm sm:text-base md:text-lg lg:text-xl line-clamp-2 h-14 mb-2.5 leading-7 dark:text-white">
          ${product.title}
        </h4>

        <div class="flex items-center gap-2.5">
          <div class="flex items-center text-teal-600 dark:text-emerald-500">
            <span class="text-base md:text-lg lg:text-xl">${product.currentPrice}</span>
            <span class="text-xs tracking-tighter">تومان</span>
          </div>

          <div class="flex items-center text-gray-400 relative after:absolute after:content-[''] after:inset-0 after:w-full after:h-px after:bg-red-500 after:rounded-2xl after:my-auto">
            <span class="text-xl">${product.oldPrice}</span>
            <span class="max-md:hidden text-sm tracking-tighter">تومان</span>
          </div>
        </div>

        <div class="flex items-center justify-between mt-5.5">
          <div class="flex items-center gap-x-2.5 md:gap-x-3">
            <div class="flex items-center justify-center size-9 text-gray-400 lg:hover:text-white transition-all bg-gray-100 lg:hover:bg-teal-600 dark:bg-zinc-800 lg:dark:hover:bg-emerald-500 rounded-full md:cursor-pointer">
              <svg class="size-4 md:size-4.75 lg:size-5.5">
                <use href="#shopping-cart"></use>
              </svg>
            </div>
            <svg class="size-4 md:size-4.75 lg:size-6 text-gray-400 lg:hover:text-teal-600 lg:dark:hover:text-emerald-500 transition-colors md:cursor-pointer">
              <use href="#arrows-right-left"></use>
            </svg>
          </div>

          <div class="flex *:size-4 md:*:size-5 lg:*:size-6 *:text-yellow-400">
            <svg><use href="#star"></use></svg>
            <svg><use href="#star"></use></svg>
            <svg><use href="#star"></use></svg>
            <svg><use href="#star"></use></svg>
            <svg><use href="#star"></use></svg>
          </div>
        </div>
      </div>
    `;

    wrapper.insertAdjacentHTML("beforeend", template);
  });
};

//* Blog Items

const blogItems = [
  {
    id: 1,
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "./images/blogs/blog-1.png",
    day: "21",
    month: "خرداد",
    year: "1404",
  },
  {
    id: 2,
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "./images/blogs/blog-2.png",
    day: "21",
    month: "خرداد",
    year: "1404",
  },
  {
    id: 3,
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "./images/blogs/blog-3.png",
    day: "21",
    month: "خرداد",
    year: "1404",
  },
  {
    id: 4,
    title: "طرز تهیه قهوه دمی با دستگاه اروپرس خط دوم اسم طولانی",
    image: "./images/blogs/blog-4.png",
    day: "21",
    month: "خرداد",
    year: "1404",
  },
];

const blogItemsHandler = () => {
  const wrapper = document.querySelector(".blog-body");

  blogItems.forEach((blogItem) => {
    const template = `<div class="flex sm:flex-col gap-x-2.5">
              <a
                class="group relative size-32.5 sm:w-full shrink-0 md:h-46.5 rounded-2xl rounded-bl-4xl overflow-hidden"
              >
                <!-- لایه پس‌زمینه -->
                <div
                  class="absolute inset-0 bg-gradient-to-r from-orange-200 to-orange-300 z-0 transition-all opacity-0 md:group-hover:opacity-80"
                ></div>

                <!-- تصویر -->
                <img
                  class="size-full object-cover z-10"
                  src="${blogItem.image}"
                  alt="blogs-img"
                />

                <!-- آیکون -->
                <svg
                  class="absolute inset-0 m-auto w-21 h-8.5 text-amber-900 z-20 transition-all opacity-0 md:group-hover:opacity-80"
                >
                  <use href="#app-logo-type"></use>
                </svg>
              </a>

              <div
                class="flex max-sm:flex-col justify-between sm:items-center w-full max-sm:pb-1.5 sm:mt-2.75"
              >
                <h4 class="font-dana-medium text-sm sm:text-base md:text-lg line-clamp-2 h-14 dark:text-white">${blogItem.title}</h4>
                <div
                  class="flex items-end sm:items-center justify-between font-dana-medium max-sm:text-xs"
                >
                  <div
                    class="text-teal-600 h-17.25 flex sm:flex-col items-end pl-4.5">
                    <span class="sm:text-2xl">${blogItem.day}</span>
                    <span class="sm:text-sm">${blogItem.month}</span>
                    <span class="sm:text-sm">${blogItem.year}</span>
                  </div>
                  <a
                    class="flex sm:hidden items-center justify-center gap-x-1 w-17.25 h-5 text-orange-300 bg-orange-300/20 rounded-md"
                    href="#"
                  >
                    <span>مطالعه</span>
                    <svg class="size-3.5">
                      <use href="#arrow-left"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>`;

    wrapper.insertAdjacentHTML("beforeend", template);
  });
};

toggleThemeBtn.addEventListener("click", themeHandler);
mobileMenuBtn.addEventListener("click", openOrCloseMenuHandler);
closeMenuIcon.addEventListener("click", openOrCloseMenuHandler);
storeElement.addEventListener("click", showSubMenu);
mobileThemeBtn.addEventListener("click", themeHandler);
mobileCartIcon.addEventListener("click", shoppingCartHandler);
closeCartIcon.addEventListener("click", shoppingCartHandler);
document.addEventListener("DOMContentLoaded", () => {
  renderBestSellers();
  blogItemsHandler();
});
