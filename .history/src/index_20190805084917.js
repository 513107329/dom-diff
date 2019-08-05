const { createElement } = require("./element");

let uli = createElement("ul", { className: "list" }, [
  createElement("li", { className: "item" }, ["1"]
])