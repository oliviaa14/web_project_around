export default class Card {
  constructor(
    name,
    link,
    cardData,
    templateSelector,
    { handleCardImageClick, handleCardImageLike, handleCardImageRemove }
  ) {
    this._name = name;
    this._link = link;
    this._cardData = cardData;
    this._handleCardImageClick = handleCardImageClick;
    this._handleCardImageRemove = handleCardImageRemove;
    this._handleCardImageLike = handleCardImageLike;
    this._templateSelector = templateSelector;
  }

  remove() {
    this._handleCardImageRemove(this._name, this._link, this._cardData, () => {
      this._element.remove();
    });
  }

  toggleLike() {
    this._handleCardImageLike(this._cardData._id, this._cardData.isLiked).then(
      (cardData) => {
        this._cardData = cardData;
        const likeButton = this._element.querySelector(".card__like");
        likeButton.classList.toggle("card__like_active");
      }
    );
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
      this._handleCardImageRemove(this._cardData._id, () => {
        this._element.remove();
      });
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

    if (this._cardData.isLiked) {
      const likeButton = this._element.querySelector(".card__like");
      likeButton.classList.toggle("card__like_active");
    }
  }

  render() {
    this._getTemplate();
    this._setEventListeners();
    return this._element;
  }
}
