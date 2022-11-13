const { Address, Employee } = require('../db/models');

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
}

module.exports = {
  getAll,
  getById,
};