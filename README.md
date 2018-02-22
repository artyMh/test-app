# Technical test

### How to launch
* Server `cd server && npm install && npm run start`
* Client `cd client && npm install && npm run start`

### Server
Made from scratch without any help of starter packs.
Not implemented because it was not mentioned(or overkill):
* Using https://www.npmjs.com/package/express-validator for express validation data.
* Using babel for ES6 to use features which node at the moment don't support(v6+)
* DB for catalogue
* Authentication

### Client
Made from scratch without any help of starter packs.
Not implemented because it was not mentioned(or overkill):
* Pagination (router module for react)
* Checkout page - is it clear stub or there is needs to have a separate page
* Authentication

### TODOs
Client:
* ✔ add linter
* ✔ add coverage
* ✔ rename folder 'app' to 'src'
* ✔ recheck props type
* ✔ recheck code
* ✔ make service api class
* add tests (enzyme, jest)
* fix paths in imports
* rework redux (REQUEST, more clean api calls handling at redux store, confirm actions to redux not axios, actions constants)
* update react to v16
	
Server:
* specify nodejs version
* change test foldering
* clean eslint config
* require to import
* add mongodb (?)
		
Both:
* ✔ remove 'sky' mentions
* auth (?)