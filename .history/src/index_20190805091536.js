const { createElement } = require("./element");

const uli = createElement("ul", { class: "list", id: "list" }, [
  createElement("li", { class: "item", id: "item" }, ["1"]),
  createElement("li", { class: "item", id: "item" }, ["2"]),
  createElement("li", { class: "item", id: "item" }, ["3"])
])

let ul = uli.render();

document.body.appendChild(ul)