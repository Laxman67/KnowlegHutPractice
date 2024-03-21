class Http {
  constructor(uri) {
    this.uri = uri;
    this.xhr = new XMLHttpRequest();
  }
  static serialize(obj) {
    let qs = [];
    for (let prop in obj) {
      qs = [
        ...qs,
        `${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`,
      ];
    }
    return qs.join("&");
  }

  static errorHandler(res) {
    if (!res.ok) throw new Error(res.error);
    return res;
  }
  get(path = "", qs) {
    return fetch(`${this.uri}${path}/?${Http.serialize(qs)}`).then(
      this.errorHandler
    );
  }

  post(path = "", data) {
    const req = new Request(`${this.uri}${path}`, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return fetch(req).then(this.errorHandler);
  }
  delete(id) {
    return new Promise((resolve, reject) => {
      this.xhr.addEventListener("load", function () {
        resolve({ status: this.statusText });
      });
      this.xhr.addEventListener("error", (error) => reject(error));
      this.xhr.open("DELETE", `${this.uri}/${id}`, true);
      this.xhr.send();
    });
  }
}

export default Http;
