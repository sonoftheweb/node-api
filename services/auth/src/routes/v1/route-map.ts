export interface Route {
    controller: string,
    model: string,
    smart: boolean
}

export interface Routes {
    books: Route,
    authors: Route
}

export const routeMap: Routes = {
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
}