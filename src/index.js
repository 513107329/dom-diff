const { createElement } = require("./element");
const diff = require("./diff");

const uli = createElement("ul", { class: "list", id: "list" }, [
  createElement("li", { class: "item", id: "item" }, ["1"]),
  createElement("li", { class: "item", id: "item" }, ["2"]),
  createElement("li", { class: "item", id: "item" }, ["3"])
])
const uli1 = createElement("ul", { class: "list-group", id: "list-group" }, [
  createElement("li", { class: "item", id: "item" }, ["2"]),
  createElement("li", { class: "item", id: "item" }, ["3"]),
  createElement("li", { class: "item", id: "item" }, ["3"])
])

let ul = uli.render();

document.body.appendChild(ul)

const patches = diff(uli, uli1);