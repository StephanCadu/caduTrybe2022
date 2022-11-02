const connect = require('./connection');

const insert = (person) => {
  console.log(person);
  return connect.execute(
    `INSERT INTO people
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone]
  );
}

const findAll = () => connect.execute('SELECT * FROM people;');

const findById = (id) => connect.execute('SELECT * FROM people WHERE id = ?', [id]);

const update = (person, id) => connect.execute(
  `UPDATE people
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => connect.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
