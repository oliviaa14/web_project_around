import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const formProfile = document.querySelector(".form");
const formAddImage = document.querySelector(".form_place");
const textName = document.querySelector(".profile__name");
const textAbout = document.querySelector(".profile__about");

const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");
const inputNamePlace = formAddImage.querySelector(".form__input_name");
const inputLink = formAddImage.querySelector(".form__input_link");

const avatar = document.querySelector(".form_avatar");
const linkAvatar = avatar.querySelector(".form__input_link");

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
const removeButton = document.querySelector(".card__trash");
//const popupRemove = document.querySelector(".popup_remove");
//const popupAvatar = document.querySelector(".popup_avatar");
const avatarButton = document.querySelector(".avatar__edit-button");

const popupImageObj = new PopupWithImage(".popup_image");
function createElement(name, link, cardData) {
  const card = new Card(name, link, cardData, ".template", {
    handleCardImageClick: (name, link) => {
      popupImageObj.open(name, link);
    },
    handleCardImageLike: (cardId, isLiked) => {
      if (isLiked) {
        return api.deleteLikeCard(cardId);
      } else {
        return api.likeCard(cardId);
      }
    },
    handleCardImageRemove: (cardId, callback) => {
      popupRemove.open(() => {
        api.deleteCard(cardId).then(() => {
          callback();
          popupRemove.close();
        });
      });
    },
  });
  return card.render();
}

const popupRemove = new PopupWithConfirmation(".popup_remove");

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
  profileEditButton,
  profileAddButton,
  popupProfile,
  //popupAddPlace,
  configForm,
  formProfile,
  formAddImage,
  textAbout,
  textName,
  inputName,
  inputAbout,
  inputNamePlace,
  inputLink,
  removeButton,
  //popupRemove,
  avatarButton,
  //popupAvatar,
  avatar,
  linkAvatar,
};
