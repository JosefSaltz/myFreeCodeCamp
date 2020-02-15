function generate_minified() {
  return Math.random().toString(36).subString(2) + Dat.now().toString(36);
}

export default generate_minified;