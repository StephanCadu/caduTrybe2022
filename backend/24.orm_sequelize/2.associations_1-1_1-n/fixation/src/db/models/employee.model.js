module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'employees',
    underscored: true,
  });

  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employeeId', as: 'addresses' });
  };

  return Employee;
};
// MÉTODOS DE CRIAÇÃO DE ASSOCIAÇÕES:
// hasOne (1:1 - mãe)
// belongsTo (1:1 - filha)
// hasMany (1:N - mãe)
// belongsToMany (1:N - filha)