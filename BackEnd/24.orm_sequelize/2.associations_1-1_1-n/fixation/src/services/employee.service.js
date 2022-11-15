const { Address, Employee } = require('../db/models');
const Sequelize = require('sequelize');
const config = require('../db/config/config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const getAll = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return employees;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [{
    //   model: Address,
    //   as: 'addresses',
    //   attributes: { exclude: ['number'] },
    // }],
  });
  return employee;
};

// unmanaged transaction example
// const insert = async ({ firstName, lastName, age, ...address }) => {
//   const trans = await sequelize.transaction();
//   try {
//     const employee = await Employee.create(
//       { firstName, lastName, age },
//       { transaction: trans },
//     );
//     await Address.create(
//       { ...address, employeeId: employee.id },
//       { transaction: trans },
//     );
//     await trans.commit();
//     return employee;
//   } catch (e) {
//     await trans.rollback();
//     console.error(e);
//     throw e;
//   }
// };

// managed transaction example
const insert = async ({ firstName, lastName, age, ...address }) => {
  const trans = await sequelize.transaction();
  try {
    const result = await sequelize.transaction(async (t) => {
      const employee = await Employee.create(
        { firstName, lastName, age },
        { transaction: trans },
      );
      await Address.create(
        { ...address, employeeId: employee.id },
        { transaction: trans },
      );
      return employee;
    });
    return result;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

module.exports = {
  getAll,
  getById,
  insert,
};