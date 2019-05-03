We are using 2 SERVER FILES 
& SEPARATE ROUTES FOLDER FOR EACH SERVER FILE

	one for simple server on port 3000
		server.js
		server/routes

		Inside server.js
			// Api file for interacting with MongoDB
			const api = require('./server/routes/api');
			const apiz = require('./server/routes/apiz');
		
	one for starting a cluster on port 3000 
		server_cluster.js
		server/routes_cluster

		Inside server_cluster.js
			// Api file for interacting with MongoDB
			const api = require('./server/routes_cluster/api');
			const apiz = require('./server/routes_cluster/apiz');









# Ngapp
Two ways of starting application!

1) 	use "ng build" and then run server.js 
	as we are pointing all routes to dist/index.html
	Go to http://localhost:3000


	OR


2) start api with server.js
   start front end with ng-server
   Go to http://0.0.0.0:4200
   Fixed Headers issue by modifying server.js with: 

   	app.use(function (req, res, next) {

	    // Website you wish to allow to connect
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

	    // Request methods you wish to allow
	    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	    // Request headers you wish to allow
	    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

	    // Set to true if you need the website to include cookies in the requests sent
	    // to the API (e.g. in case you use sessions)
	    res.setHeader('Access-Control-Allow-Credentials', true);

	    // Pass to next layer of middleware
	    next();
	});








This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
