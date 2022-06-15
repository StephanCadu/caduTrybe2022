function sum(a, b) {
  try {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
    return a + b;
  } catch (e) {
    return e.message;
  }
}
module.exports = {sum};