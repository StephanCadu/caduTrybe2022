require('dotenv').config();
const app = require('./app');
// const connection = require('./db/connection');

app.listen(3001, () => {
  console.log('API TrybeCash está sendo executada na porta 3001');
  // usando uma variável de ambiente
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
});

// código para testar a conexão com mysql
// app.listen(3001, async () => {
//   console.log('API TrybeCash está sendo executada na porta 3001');
//   const [result] = await connection.execute('SELECT 1');
//   if (result) console.log('MySQL connection OK');
// });


