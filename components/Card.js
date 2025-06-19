
export default class Card {
  constructor(
    name,
    link,
    templateSelector,
    { handleCardImageClick, handleCardImageLike, handleCardImageRemove }
  ) {
    this._name = name;
    this._link = link;
    this._handleCardImageClick = handleCardImageClick;
    this._templateSelector = templateSelector;
  }

  remove() {
    this._element.remove();
  }

  toggleLike() {
    const cardLike = this._element.querySelector(".card__like");
    cardLike.classList.toggle("card__like_active");
  }

  clickCard() {

    this._handleCardImageClick(this._name, this._link);
  }

  _setEventListeners() {
    const cardImage = this._element.querySelector(".card__image");
    const cardLike = this._element.querySelector(".card__like");
    const cardTrash = this._element.querySelector(".card__trash");

    cardImage.addEventListener("click", () => {
      this.clickCard();
    });

    cardLike.addEventListener("click", () => {
      this.toggleLike();
    });

    cardTrash.addEventListener("click", () => {
      this.remove();
    });
  }

  _getTemplate() {
    this._element = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__name").textContent = this._name;
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._element;
  }
}
