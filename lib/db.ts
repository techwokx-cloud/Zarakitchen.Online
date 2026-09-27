import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'agbchrtz_ZarakitchenOnline',
  password: 'rEYAygZiu9p3k7j',
  database: 'agbchrtz_ZarakitchenOnline',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
