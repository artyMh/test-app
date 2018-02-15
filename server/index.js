const server = require('./app/server');

const APP_PORT = process.env.PORT || 3001;

const serverApp = server();

serverApp.listen(APP_PORT, function () {
    console.log(`Server start to listen on http://localhost:${APP_PORT} ...`);
});
