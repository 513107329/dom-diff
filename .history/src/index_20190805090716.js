const { createElement } = require("./element");

const uli = createElement("ul", { className: "list" }, [
  createElement("li", { className: "item" }, ["1"],
  createElement("li", { className: "item" }, ["2"],
  createElement("li", { className: "item" }, ["3"]
])

let ul = uli.render();

document.body.appendChild(ul)