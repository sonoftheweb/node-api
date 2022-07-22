interface Route {
	controller: string,
	model: string,
	smart: boolean,
	methods?: string[]
}

interface Routes {
	books: Route,
	authors: Route
}

export const routesMap: Routes  = {
	'books': {
		'controller': 'BooksController',
		'model': 'Books',
		'smart': true,
		'methods': ['get', 'post', 'put', 'patch', 'delete']
	},
	'authors': {
		'controller': 'AuthorsController',
		'model': 'Authors',
		'smart': true
	}
},

initRoutes = async () => {
	Object.keys(routesMap).map((item: string) => {
		let route: { controller: string; model: string; smart: boolean; methods?: string[] };
		// @ts-ignore
		route = routesMap[item];
		if (route.hasOwnProperty('methods')) {
			// map to all routes
		}
	})
};