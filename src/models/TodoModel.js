const {Model} = require('objection');
const knex = require('../../connection');

Model.knex(knex);

class TodoModel extends Model {
	static get tableName(){
		return 'todos';
	}
}

module.exports = TodoModel
