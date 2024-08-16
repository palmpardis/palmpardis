appLoad();

function appLoad() {
  let selectLang = document.querySelector("#lang");
  if (selectLang) {
    selectLang.addEventListener("change", changeLang);
    if (localStorage.getItem("lang") === null) {
      localStorage.setItem("lang", selectLang.value);
    }

    selectLang.value = localStorage.getItem("lang");
  }

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
}

function changeLang(e) {
  let lang = e.target.value;
  localStorage.setItem("lang", lang);

  if (lang === "fa") {
    window.location.replace("/index-fa.html");
  } else {
    window.location.replace("/index.html");
  }
}
