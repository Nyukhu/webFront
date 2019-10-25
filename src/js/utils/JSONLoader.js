/* eslint-disable */
export default class JSONLoader {
  get(url){
    let items = [];
    const req = new XMLHttpRequest();

    req.onreadystatechange = function(event) {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (this.status === 200) {
          console.log("Réponse reçue: %s", this.responseText);
          items = JSON.parse(this.responseText)
        } else {
          console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
          items = [{"status": this.status, "message": this.statusText }]
        }
      }
    };

    req.open('GET', url, false);
    req.send(null);
    return items
  }
}
