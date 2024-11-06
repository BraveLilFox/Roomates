const { Pool } = require('pg');

const pool = new Pool({
  username = 'doadmin',
  password = 'AVNS_aWzkNgnWCugyGo59q8Y',
  host = 'app-94ff3144-07f5-4290-a51a-6f786a35a630-do-user-18113833-0.f.db.ondigitalocean.com',
  port = 25060,
  database = 'defaultdb',
  sslmode = require
});

module.exports = {
  query: (text, params) => pool.query(text, params);
};
