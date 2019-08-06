const ATTRS = "ATTRS";
const REPLACE = "REPLACE";
const TEXT = "TEXT";
const REMOVE = "REMOVE";
let Index = 0;

function diff(oldNode, newNode) {
  let patches = {};
  let index = 0;
  walk(oldNode, newNode, index, patches);
  return patches
}

function isString(node) {
  return Object.prototype.toString.call(node) === "[object String]"
}

function walk(oldNode, newNode, index, patches) {
  let currentPatch = [];
  if (!newNode) {
    currentPatch.push({ type: REMOVE, index })
  } else if (isString(oldNode) && isString(newNode)) {
    if (oldNode !== newNode) {
      currentPatch.push({ type: TEXT, text: newNode })
    }
  } else if (oldNode.tagName === newNode.tagName) {
    let attrs = diffAttr(oldNode.attrs, newNode.attrs);
    if (Object.keys(attrs).length > 0) {
      currentPatch.push({ type: ATTRS, attrs })
    }
    diffChildren(oldNode.children, newNode.children, patches)
  } else {
    currentPatch.push({ type: REPLACE, newNode })
  }

  if (currentPatch.length > 0) {
    patches[index] = currentPatch;
    console.log(patches)
  }
}

function diffAttr(oldAttrs, newAttrs) {
  let patch = {};
  for (let key in oldAttrs) {
    if (oldAttrs[key] !== newAttrs[key]) {
      patch[key] = newAttrs[key]
    }
  }

  for (let key in newAttrs) {
    if (!oldAttrs.hasOwnProperty(key)) {
      patch[key] = newAttrs[key]
    }
  }

  return patch
}

function diffChildren(oldChildren, newChildren, patches) {
  oldChildren.forEach((child, idx) => {
    walk(child, newChildren[idx], ++Index, patches)
  })
}

module.exports = diff