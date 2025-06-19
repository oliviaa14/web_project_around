import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSumbit = handleSubmit;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector("form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleSumbit(inputValues);

      this._form.reset();
    });
  }

  _getInputValues() {
    const inputValues = {};
    const elementsForm = Array.from(this._form.elements);
    elementsForm.forEach((element) => {
      if (element.name) {
        inputValues[element.name] = element.value;
      }
    });
    return inputValues;
  }
}
