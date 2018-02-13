const server = require('./app/server');

const APP_PORT = process.env.PORT || 3001;

let serverApp = server();

const server = serverApp.listen(APP_PORT, function () {
    console.log(`Server start to listen on http://localhost:${server.address().port} ...`);
});
