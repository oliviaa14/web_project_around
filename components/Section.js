export default class Section {
  constructor({ items, renderer }, cardSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._card = document.querySelector(cardSelector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this._card.prepend(element);
  }
}
