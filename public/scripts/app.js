const toggleThemeBtn = document.querySelector("#toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
});

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

function renderBestSellers() {
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
}

// حتما بعد از لود صفحه اجرا شود
document.addEventListener("DOMContentLoaded", renderBestSellers);
