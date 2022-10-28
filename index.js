const TOKEN = "5792780347:AAF4Vp3-iCkae1tIAjAPZnkjw4xmJ5PKz7o";
const CHAT_ID = "-1001513275231";
const TG_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

const success = document.getElementById("success");
const fail = document.getElementById("error");
const form = document.getElementById("contact-form-id");

document.getElementById("tg").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = `<b>Заявка с сайта!</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value}\n`;
  message += `<b>Телефон: </b> ${this.phone.value}\n`;
  message += `<b>Почта: </b> ${this.email.value}\n`;
  message += `<b>Текст: </b> ${this.text.value}`;

  axios
    .post(TG_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      this.name.value = "";
      this.phone.value = "";
      this.email.value = "";
      this.text.value = "";
      success.innerHTML =
        "Cпасибо за заявку. Сообщение получено. В ближайшее время с вами свяжутся.";
      success.style.display = "block";
      setTimeout(() => {
        success.style.display = "none";
      }, 3000);
    })
    .catch((err) => {
      fail.innerHTML = "Что-то пошло не так, попробуйте еще раз.";
      fail.style.display = "block";
    })
    .finally(() => {
      console.log("Конец");
    });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
