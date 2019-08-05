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
    
  }
}