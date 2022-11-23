require('dotenv').config();

const myApp = require('./app');

const PORT = process.env.PORT || 3001;

myApp.listen(PORT, () => console.log(`Server running on port ${PORT}`));