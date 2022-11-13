const EmployeeService = require('../services/employee.service');
const AddressService = require('../services/address.service');

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { includeAddresses } = req.query;
  const employee = await EmployeeService.getById(id);
  if (!employee) return res.staus(404).json({ message: 'Employee not found' });
  if (includeAddresses === 'true') {
    const addresses = await AddressService.getAllEmployeeId(id);
    return res.status(200).json({ employee, addresses });
  }
  return res.status(200).json(employee);
};

module.exports = {
  getAll,
  getById,
};