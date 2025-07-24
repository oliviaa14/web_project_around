import {
  cards,
  createElement,
  profileEditButton,
  profileAddButton,
  configForm,
  formAddImage,
  formProfile,
  inputName,
  inputAbout,
  avatarButton,
  avatar,
} from "../utils/utils.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";

import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import api from "../components/Api.js";

const userInfo = new UserInfo(".profile__name", ".profile__about");
const avatarNode = document.querySelector(".profile__image");
api.getCards().then((cards) => {
  const sectionCards = new Section(
    {
      items: cards,
      renderer: (item) => {
        const cardElement = createElement(item.name, item.link, item);
        sectionCards.addItem(cardElement);
      },
    },
    ".cards"
  );
  sectionCards.renderItems();
});

api.getUser().then((user) => {
  userInfo.setUserInfo(user.name, user.about);
  avatarNode.src = user.avatar;
});

profileAddButton.addEventListener("click", () => {
  popupAddPlace.open();
});
const popupAddPlace = new PopupWithForm(".popup_add", ({ name, link }) => {
  api
    .createCard(name, link)
    .then((card) => {
      const newCard = createElement(name, link, card);
      cards.prepend(newCard);
      popupAddPlace.close();
    })
    .catch((error) => {
      console.log(error);
    });
});

profileEditButton.addEventListener("click", () => {
  const { name, about } = userInfo.getUserInfo();
  inputName.value = name;
  inputAbout.value = about;
  popupProfile.open();
});

const popupProfile = new PopupWithForm(".popup_profile", ({ name, about }) => {
  api.updateUser(name, about).then(() => {
    userInfo.setUserInfo(name, about);
    popupProfile.close();
  });
});

avatarButton.addEventListener("click", () => {
  popupAvatar.open();
});
const popupAvatar = new PopupWithForm(".popup_avatar", ({ link }) => {
  api.updateAvatar(link).then(() => {
    avatarNode.src = link;
    popupAvatar.close();
  });
});

const formValidatorProfile = new FormValidator(formAddImage, configForm);
formValidatorProfile.enableValidation();

const formValidatorAdd = new FormValidator(formProfile, configForm);
formValidatorAdd.enableValidation();

const formValidatorAvatar = new FormValidator(avatar, configForm);
formValidatorAvatar.enableValidation();
