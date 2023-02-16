const userBookService = require('../services/userBook.service');

const getUsersBooksById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userBookService.getUsersBooksById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(user);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Something went wrong' });
  }
};

module.exports = {
  getUsersBooksById,
};