import {BooksController} from '../../controllers/BooksController'
import {Express} from "express";

interface Route {
	controller: string,
	model: string,
	smart: boolean
}

interface Routes {
	books: Route,
	authors: Route
}

export const routesMap: Routes  = {
	'books': {
		'controller': 'BooksController',
		'model': 'Books',
		'smart': true
	},
	'authors': {
		'controller': 'AuthorsController',
		'model': 'Authors',
		'smart': true
	}
},

initRoutes = (app: Express) => {
	Object.keys(routesMap).map(async (item: string) => {
		let route: { controller: string; model: string; smart: boolean; methods?: string[] };
		// @ts-ignore
		route = routesMap[item]
		let CONTROLLER = `./../../controllers/${capitalizeFirstLetter(item)}Controller`,
			IMPORTED_CONTROLLER = await import(CONTROLLER),
			IMPORTED_CLASS = new IMPORTED_CONTROLLER[`${capitalizeFirstLetter(item)}Controller`](route.model, route.smart)

		app.get(`/api/v1/${item}`, IMPORTED_CLASS.index)
		app.get(`/api/v1/${item}/:id`, IMPORTED_CLASS.fetch)
		app.post(`/api/v1/${item}`, IMPORTED_CLASS.store)
		app.put(`/api/v1/${item}/:id`, IMPORTED_CLASS.update)
		app.delete(`/api/v1/${item}/:id`, IMPORTED_CLASS.delete)
	})
};

const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1)
}