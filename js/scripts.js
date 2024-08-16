window.addEventListener("scroll", function (e) {
  let navbar = document.querySelector("#navbar");
  let logoFilter = document.querySelector("#logo");

  if (window.pageYOffset > 2) {
    navbar.classList.add("scrolled");
    logoFilter.classList.add("logo");
  } else {
    navbar.classList.remove("scrolled");
    logoFilter.classList.remove("logo");
  }
});
