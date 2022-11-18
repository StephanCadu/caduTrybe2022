module.exports = (req, res) => {
  const user = req.body;
  return res.status(200).json(user);
};