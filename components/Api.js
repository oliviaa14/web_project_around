class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getUser() {
    return this._makeRequest("users/me");
  }

  getCards() {
    return this._makeRequest("cards");
  }

  updateUser(name, about) {
    return this._makeRequest("users/me", "PATCH", { name, about });
  }

  createCard(name, link) {
    return this._makeRequest("cards", "POST", { name, link });
  }

  deleteCard(cardId) {
    return this._makeRequest(`cards/${cardId}`, "DELETE");
  }

  updateAvatar(avatar) {
    return this._makeRequest("users/me/avatar", "PATCH", { avatar });
  }

  likeCard(cardId) {
    return this._makeRequest(`cards/${cardId}/likes`, "PUT");
  }

  deleteLikeCard(cardId) {
    return this._makeRequest(`cards/${cardId}/likes`, "DELETE");
  }

  _makeRequest(path, method = "GET", body = {}) {
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: this._token,
      },
    };
    if (method != "GET" && method != "DELETE") {
      config["body"] = JSON.stringify(body);
    }
    return fetch(`${this._url}${path}`, config).then(async (response) => {
      console.log(response);
      if (response.ok) {
        return response.json();
      }
      const json = await response.json();
      throw new Error(json.message);
    });
  }
}

const api = new Api(
  "https://around-api.es.tripleten-services.com/v1/",
  "f630d240-a99c-4a09-82e1-a789c8d1d81a"
);

export default api;
