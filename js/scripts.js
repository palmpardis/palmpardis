appLoad();

function appLoad() {
  emailjs.init({
    publicKey: "t0QyWq2xHcc_OFwU5",
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
    window.location.replace("/index.html");
  } else {
    window.location.replace("/index-en.html");
  }
}

function onSubmitForm(e) {
  e.preventDefault();

  form.submit.setAttribute("disabled", true);

  emailjs.sendForm("service_yib78sa", "template_t3i6yu5", "#form").then(
    (response) => {
      if (document.documentElement.lang === "fa") {
        alert("پیام شما با موفقیت ارسال شد.");
      } else {
        alert("Your message has been sent successfully.");
      }

      form.submit.removeAttribute("disabled");
      form.reset();
    },
    (error) => {
      if (document.documentElement.lang === "fa") {
        alert("خطا در ارسال پیام. لطفا دوباره تلاش کنید.");
      } else {
        alert("Failed to send your message. Please try again.");
      }

      form.submit.removeAttribute("disabled");
    }
  );
}
