const utils = require("./utils");

function createElement(tagName, attrs, children) {
  return new Element(tagName, attrs, children)
}

class Element {
  constructor(tagName, attrs, children) {
    this.tagName = tagName;
    this.attrs = attrs;
    this.children = children
  }

  render() {
    let element = document.createElement(this.tagName);
    for(let attr of Object.keys(this.attrs)) {
      debugger;
      utils.setAttr(element, attr, this.attrs[attr]);
      console.log(element)
    }
    this.children.forEach(child => {
      let node = child instanceof Element ? child.render() : document.createTextNode(child);
      element.appendChild(node);
    })
    return element
  }
}

module.exports = { createElement }