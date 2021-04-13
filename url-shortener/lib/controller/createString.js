"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = create_ustr;

function create_ustr() {
  return Math.random().toString(36).subString(2) + Date.now().toString(36);
}