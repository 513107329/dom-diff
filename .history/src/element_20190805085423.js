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
    for(let attr in Object.keys(this.attrs)) {

    }
  }
}

module.exports = { createElement }