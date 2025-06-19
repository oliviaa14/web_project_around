import {
  initialCards,
  cards,
  createElement,
  profileEditButton,
  profileAddButton,
  configForm,
  formAddImage,
  formProfile,
  textAbout,
  textName,
  inputName,
  inputAbout,
  inputNamePlace,
  inputLink,
} from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const userInfo = new UserInfo(".profile__name", ".profile__about");

const sectionCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createElement(item.name, item.link);
      sectionCards.addItem(cardElement);
    },
  },
  ".cards"
);
sectionCards.renderItems();

profileAddButton.addEventListener("click", () => {
  popupAddPlace.open();
});

const popupAddPlace = new PopupWithForm(".popup_add", ({ name, link }) => {
  const newCard = createElement(name, link);
  cards.prepend(newCard);
  popupAddPlace.close();
});

profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
});
const popupProfile = new PopupWithForm(".popup_profile", ({ name, about }) => {
  userInfo.setUserInfo(name, about);
  popupProfile.close();
});

const formValidatorProfile = new FormValidator(formAddImage, configForm);
formValidatorProfile.enableValidation();

const formValidatorAdd = new FormValidator(formProfile, configForm);
formValidatorAdd.enableValidation();
