require('dotenv').config();

var knex =  require('knex')({
	client: 'mysql',
	connection: {
		host : process.env.DB_HOTS,
		user : process.env.DB_USERNAME,
		password : process.env.DB_PASSWORD,
		database: process.env.DB_NAME
	},
	pool : {min: 0, max:3}
})

module.exports = knex
