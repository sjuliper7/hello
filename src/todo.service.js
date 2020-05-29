"use strict";
const todoModel = require('./models/TodoModel');

module.exports = {
	name: "todos",

	dependencies: [],

	actions: {

		todos: {
			async handler(ctx, route, req, res) {
				let todos = await todoModel.query()
				return todos
			}
		},
		todo: {
			async handler(ctx) {
				let id = ctx.params.id
				const todo = await todoModel.query().findById(id)
				return todo
			}
		},
		create: {
			async handler(ctx){
				const todo = await todoModel.query().insert({name: ctx.meta.body.name, description: ctx.meta.body.description})
				return todo
			}
		},
		update: {
			async handler(ctx){
				let id = ctx.params.id
				const todo = await  todoModel.query().findById(id).patch({name: ctx.meta.body.name, description: ctx.meta.body.description})
				return todoModel.query().findById(id)
			}
		},
		delete: {
			async handler(ctx){
				let id = ctx.params.id
				console.log( id)
				const todo = await todoModel.query().deleteById(id)
				console.log("todo: ", todo)
				return "success"
			}
		}
	},
}
