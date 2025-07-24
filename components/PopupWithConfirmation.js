import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(callback) {
    super.open();
    this._callback = callback;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector("form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callback();
    });
  }
}
