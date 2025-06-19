export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._setEventListeners();
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _setEventListeners() {
    const closeButton = this._popup.querySelector(".popup__close-button");
    const overlay = this._popup.querySelector(".popup__overlay");

    closeButton.addEventListener("click", () => {
      this.close();
    });

    overlay.addEventListener("click", () => {
      this.close();
    });
  }
}
