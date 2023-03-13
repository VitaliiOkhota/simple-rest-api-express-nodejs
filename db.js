const Pool = require('pg').Pool //Експортуємо постгрес 
const pool = new Pool({ //Створюємо пул для підключення до БД
	user: "postgres",
	password: "root",
	host: "localhost",
	port: 5432,
	database: "node_postgres"
})

module.exports = pool