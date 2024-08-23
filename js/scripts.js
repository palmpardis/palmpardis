appLoad();

function appLoad() {
  emailjs.init({
    publicKey: "r2IDO4f27YdTO0KRV",
  });

  let selectLang = document.querySelector("#lang");
  let form = document.querySelector("#form");
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

  if (form) {
    form.addEventListener("submit", onSubmitForm);
  }
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

function onSubmitForm(e) {
  e.preventDefault();

  form.submit.setAttribute("disabled", true);

  emailjs.sendForm("service_s4t4stf", "template_1tg8otl", "#form").then(
    (response) => {
      if (document.documentElement.lang === "fa") {
        alert("ایمیل با موفقیت ارسال شد");
      } else {
        alert("email successfully sent");
      }

      form.submit.removeAttribute("disabled");
      form.reset();
    },
    (error) => {
      if (document.documentElement.lang === "fa") {
        alert("خطا در ارسال اطلاعات");
      } else {
        alert("FAILED...");
      }

      form.submit.removeAttribute("disabled");
    }
  );
}
