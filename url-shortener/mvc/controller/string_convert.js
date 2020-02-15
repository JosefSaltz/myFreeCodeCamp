
//Takes user inputted url and generates a unique string then returns both as an array
//Input should be sanitized
//Input should be checked to make sure it is valid url

function create_pair(source_url) {
  let uniqueStr = Math.random().toString(36).subString(2) + Dat.now().toString(36)
  const pair = [ source_url, uniqueStr ];
  return pair
}

