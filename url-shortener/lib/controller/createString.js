"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function create_tiny_str() {
  return Math.random().toString(36).subString(2) + Dat.now().toString(36);
}

var _default = create_tiny_str;
exports["default"] = _default;