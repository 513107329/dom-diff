const { createElement } = require("./element");

const uli = createElement("ul", { className: "list", id: "list" }, [
  createElement("li", { className: "item", id: "item" }, ["1"]),
  createElement("li", { className: "item", id: "item" }, ["2"]),
  createElement("li", { className: "item", id: "item" }, ["3"])
])

let ul = uli.render();

document.body.appendChild(ul)