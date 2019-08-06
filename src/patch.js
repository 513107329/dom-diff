const { ATTRS, REPLACE, TEXT, REMOVE } = require('./action');
const util = require("./utils");
let Index = 0;
let allPatches;

function patch(node, patches) {
  allPatches = patches;
  walk(node);
}

function walk(node) {
  let currentPatch = allPatches[Index++];

  (node.childNodes || []).forEach(child => {
    walk(child)
  })

  if (currentPatch) {
    doPatch(node, currentPatch)
  }
}

function doPatch(node, currentPatches) {
  currentPatches.forEach(patch => {
    switch (patch.type) {
      case ATTRS:
        for (let key in patch.attrs) {
          if (patch.attrs[key]) {
            util.setAttr(node, key, patch.attrs[key])
          } else {
            node.removeAttribute(key)
          }
        }
        break;
      case REPLACE:
        let newNode = (typeof patch.newNode === 'string') ? document.createTextNode(patch.newNode) : patch.newNode.render();
        node.parentNode.replaceChild(node, newNode);
        break;
      case TEXT:
        node.textContent = patch.text
        break;
      case REMOVE:
        node.parentNode.removeChild(node)
        break;
      default:
        break;
    }
  })
}

module.exports = patch