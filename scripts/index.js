const textName = document.querySelector(".profile__name");
const textAbout = document.querySelector(".profile__about");

const inputName = document.querySelector(".form__input_name");
const inputAbout = document.querySelector(".form__input_about");

const form = document.querySelector(".form");
const formPlace = document.querySelector(".form__place");
const inputNamePlace = formPlace.querySelector(".form__input_name");
const inputLink = formPlace.querySelector(".form__input_link");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const popupProfile = document.querySelector(".popup_profile");
const popupAddPlace = document.querySelector(".popup_add");
const popupCloseIm = popupAddPlace.querySelector(".popup__close-button");
const popupClose = document.querySelector(".popup__close-button");

const popupImage = document.querySelector(".popup_image");
const popupImageClose = popupImage.querySelector(".popup__close-button");

const cards = document.querySelector(".cards");
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

initialCards.forEach((item) => {
  const card = createElement(item.name, item.link);
  cards.append(card);
});

function createElement(name, link) {
  const cardNode = document
    .querySelector(".template")
    .content.querySelector(".card")
    .cloneNode(true);
  cardNode.querySelector(".card__image").src = link;
  cardNode.querySelector(".card__image").alt = name;
  cardNode.querySelector(".card__name").textContent = name;

  const likeButton = cardNode.querySelector(".card__like");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("card__like_active");
  });

  const trashButton = cardNode.querySelector(".card__trash");

  trashButton.addEventListener("click", function () {
    cardNode.remove();
  });

  const image = cardNode.querySelector(".card__image");
  image.addEventListener("click", function () {
    popupImage.classList.add("popup_open");
    popupImage.querySelector(".popup__image").src = link;
    popupImage.querySelector(".popup__title").textContent = name;
  });

  popupImageClose.addEventListener("click", function () {
    popupImage.classList.remove("popup_open");
  });

  return cardNode;
}

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

formPlace.addEventListener("submit", function (event) {
  event.preventDefault();
  const card = createElement(inputNamePlace.value, inputLink.value);
  cards.prepend(card);
  formPlace.reset();
});

profileAddButton.addEventListener("click", function () {
  popupAddPlace.classList.add("popup_open");
});

popupCloseIm.addEventListener("click", function () {
  popupAddPlace.classList.remove("popup_open");
});
