const { createElement } = require("./element");

let uli = createElement("ul", { className: "list" }, [
  createElement("ul", { className: "item" }, ["1"]
])