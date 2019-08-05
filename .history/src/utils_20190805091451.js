module.exports = {
  setAttr(element, attr, value) {
    switch(attr) {
      case "style":
        element.style.cssText = value;
        break;
      case "className":
        element.class = value;
        break;
      case "value":
        let tagName = element.tagName.toLowerCase();
        if(tagName === 'input' || tagName === 'textarea') {
          element.value = value
        } else {
          element.setAttribute(attr, value)
        };
        break;
      default:
        debugger;
        element.setAttribute(attr, value);
        break;
    }
  }
}