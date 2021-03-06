module.exports = {
  setAttr(element, attr, value) {
    switch(attr) {
      case "style":
        element.style.cssText = value;
        break;
      case "value":
        let tagName = element.tagName.toLowerCase();
        if(tagName === 'input' || tagName === 'textarea') {
          element.value = value
        } else {
          element.setAttrribute(attr, value)
        };
        break;
      default:
        element.setAttrribute(attr, value);
        break;
    }
  }
}