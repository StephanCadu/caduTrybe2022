module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    username: DataTypes.STRING,
    admin: { type: DataTypes.BOOLEAN, default: false },
    password: DataTypes.STRING,
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'user',
  });
  return User;
};