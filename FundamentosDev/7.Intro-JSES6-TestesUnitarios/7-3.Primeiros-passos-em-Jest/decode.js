function decode(string) {
  string = string.replaceAll(1, 'a');
  string = string.replaceAll(2, 'e');
  string = string.replaceAll(3, 'i');
  string = string.replaceAll(4, 'o');
  string = string.replaceAll(5, 'u');
  return string;
}

module.exports = decode; 