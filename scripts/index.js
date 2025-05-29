import {
  initialCards,
  cards,
  createElement,
  profileEditButton,
  profileAddButton,
  openImagePopup,
  openPopup,
  popupProfile,
  popupAddPlace,
  configForm,
  formAddImage,
  formProfile,
  textAbout,
  textName,
  inputName,
  inputAbout,
  inputNamePlace,
  inputLink,
  closePopup,
} from "../utils/utils.js";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";

initialCards.forEach((item) => {
  cards.append(createElement(item.name, item.link));
});

profileAddButton.addEventListener("click", () => {
  openPopup(popupAddPlace);
});

profileEditButton.addEventListener("click", () => {
  openPopup(popupProfile);
});

const formValidatorProfile = new FormValidator(popupProfile, configForm);
formValidatorProfile.enableValidation();

const formValidatorAdd = new FormValidator(popupAddPlace, configForm);
formValidatorAdd.enableValidation();

formProfile.addEventListener("submit", function (event) {
  event.preventDefault();
  if (inputName.value !== "" && inputAbout.value !== "") {
    textName.textContent = inputName.value;
    textAbout.textContent = inputAbout.value;
    popupProfile.classList.remove("popup_open");
  }
});

formAddImage.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createElement(inputNamePlace.value, inputLink.value);
  cards.prepend(card);
  formAddImage.reset();
  closePopup();
});
