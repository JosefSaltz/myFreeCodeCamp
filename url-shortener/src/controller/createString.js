function create_tiny_str() {
  return Math.random().toString(36).subString(2) + Dat.now().toString(36);
}



export default create_tiny_str;