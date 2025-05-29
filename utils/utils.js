import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

const popupImage = document.querySelector(".popup_image");
const popupCloseButtons = Array.from(
  document.querySelectorAll(".popup__close-button")
);

const overlays = document.querySelectorAll(".popup__overlay");

const formProfile = document.querySelector(".form");
const formAddImage = document.querySelector(".form_place");
const textName = document.querySelector(".profile__name");
const textAbout = document.querySelector(".profile__about");

const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const inputNamePlace = formAddImage.querySelector(".form__input_name");
const inputLink = formAddImage.querySelector(".form__input_link");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

const cards = document.querySelector(".cards");

const popupProfile = document.querySelector(".popup_profile");
const popupAddPlace = document.querySelector(".popup_add");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");

function openPopup(popup) {
  popup.classList.add("popup_open");
}

function closePopup() {
  popupImage.classList.remove("popup_open");
  popupAddPlace.classList.remove("popup_open");
  popupProfile.classList.remove("popup_open");
}

function createElement(name, link) {
  const card = new Card(name, link, ".template");
  return card.render();
}

popupCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    closePopup();
  });
});

overlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    closePopup();
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});

function openImagePopup(name, link) {
  openPopup(popupImage);
  popupImage.querySelector(".popup__image").src = link;
  popupImage.querySelector(".popup__image").alt = name;
  popupImage.querySelector(".popup__image").textContent = name;
}

const configForm = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
  initialCards,
  cards,
  createElement,
  openPopup,
  closePopup,
  openImagePopup,
  profileEditButton,
  profileAddButton,
  popupProfile,
  popupAddPlace,
  configForm,
  formProfile,
  formAddImage,
  textAbout,
  textName,
  inputName,
  inputAbout,
  inputNamePlace,
  inputLink,
};
