// !!!
// fichier si on utilise postgresql comme database
// !!!

const {Pool} = require('pg');

const config = {
  connectionString: process.env.DATABASE_URL
}

const pool = new Pool(config);

module.exports = pool;