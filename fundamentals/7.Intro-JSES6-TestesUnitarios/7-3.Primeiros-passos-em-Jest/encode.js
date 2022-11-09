function encode(string) {
    string = string.replaceAll('a', 1);
    string = string.replaceAll('e', 2);
    string = string.replaceAll('i', 3);
    string = string.replaceAll('o', 4);
    string = string.replaceAll('u', 5);
    return string;
  }

module.exports = encode; 