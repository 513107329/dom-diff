const { createElement } = require("./element");

let uli = createElement("ul", { className: "list" }, [
  createElement("li", { className: "item" }, ["1"],
  createElement("li", { className: "item" }, ["2"],
  createElement("li", { className: "item" }, ["3"]
])