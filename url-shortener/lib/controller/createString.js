"use strict";

function create_ustr() {
  return Math.random().toString(36).subString(2) + Date.now().toString(36);
}

export default create_ustr;