const textName = document.querySelector(".profile__name");
const textAbout = document.querySelector(".profile__about");
const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const form = document.querySelector(".form");
const profileEditButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupClose = document.querySelector(".popup__close-button");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputName.value !== "" && inputAbout.value !== "") {
    textName.textContent = inputName.value;
    textAbout.textContent = inputAbout.value;
    popupProfile.classList.remove("popup_open");
  } else {
    alert("Es necesario ingresar datos");
  }
});

profileEditButton.addEventListener("click", function () {
  popupProfile.classList.add("popup_open");
});

popupClose.addEventListener("click", function () {
  popupProfile.classList.remove("popup_open");
});
