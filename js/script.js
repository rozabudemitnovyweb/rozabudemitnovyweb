////// MOBILE-NAVIGATION //////
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector("#nav-bar");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// const allLinks = document.querySelectorAll(".lin");

// allLinks.forEach(function (link) {
//   link.addEventListener("click", function (e) {
//     if (link.classList.contains("lin")) headerEl.classList.toggle("nav-open");
//   });
// });

////// ANIMATION //////
// animation-nav //
// const options = {
//   root: document.querySelector(".wrapper"),
//   rootMargin: "200px",
//   treshold: 0.5,
// };
// const callback = (entries, observerNav) => {
//   for (const entry of entries) {
//     const { section } = entry.target.dataset;
//     const tab = document.querySelector(`a[data-section="${section}"]`);

//     tab.classList.toggle("active", entry.isIntersecting);
//   }
// };
// const observerNav = new IntersectionObserver(callback, options);

// document.querySelectorAll("section").forEach((elem) => {
//   observerNav.observe(elem);
// });

// // animation-other //
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((el) => observer.observe(el));

const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-left");
    }
  });
});

const hiddenElementLeft = document.querySelectorAll(".hidden-left");
hiddenElementLeft.forEach((el) => observerLeft.observe(el));

const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right");
    }
  });
});

const hiddenElementRight = document.querySelectorAll(".hidden-right");
hiddenElementRight.forEach((el) => observerRight.observe(el));
