const errorHandler = async (err, _req, res, _next) => {
  console.log(err.stack);
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;