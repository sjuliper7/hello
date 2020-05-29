"use strict";

const ApiGateway = require("moleculer-web");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 * @typedef {import('http').IncomingMessage} IncomingRequest Incoming HTTP Request
 * @typedef {import('http').ServerResponse} ServerResponse HTTP Server Response
 */

module.exports = {
	name: "api",
	mixins: [ApiGateway],

	// More info about settings: https://moleculer.services/docs/0.14/moleculer-web.html
	settings: {
		port: process.env.PORT || 3000,

		ip: "0.0.0.0",

		use: [],

		routes: [
			{
				path: '/api/todos',
				bodyParsers: {
					json: {
						strict: false,
						limit: "1MB"
					},
					urlencoded: {
						extended: true,
						limit: "1MB"
					}
				},

				onBeforeCall(ctx, route, req, res) {
					// Set request headers to context meta
					ctx.meta.body = req.$params
				},

				aliases: {
					'POST /': 'todos.create',
					'GET /': 'todos.todos',
					'GET /:id': 'todos.todo',
					'PUT /:id': 'todos.update',
					'DELETE /:id': 'todos.delete'
				},
				logging: true
			}
		],

		// Do not log client side errors (does not log an error response when the error.code is 400<=X<500)
		log4XXResponses: false,
		// Logging the request parameters. Set to any log level to enable it. E.g. "info"
		logRequestParams: null,
		// Logging the response data. Set to any log level to enable it. E.g. "info"
		logResponseData: null,


		// Serve assets from "public" folder. More info: https://moleculer.services/docs/0.14/moleculer-web.html#Serve-static-files
		assets: {
			folder: "public",

			// Options to `server-static` module
			options: {}
		}
	},

};
