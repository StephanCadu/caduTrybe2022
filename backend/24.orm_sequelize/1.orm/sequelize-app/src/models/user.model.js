const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    const mario = await User.create({ fullName: "Mario Bors" });

    console.log(mario.fullName); // "Mario Bors"

    await mario.destroy();

    // Agora essa entrada não existe mais no banco de dados!
  })();

  return User;
};

module.exports = UserModel;