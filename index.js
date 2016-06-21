var app = require("koa")();

app.use(function *(){
    this.body = "Koa says Hi!";
});

var port = process.env.PORT || (process.argv[2] || 3000);
port = (typeof port === "number") ? port : 3000;

var server = app.listen(port); 

console.log("Application started. Listening on port:" + port);

module.exports = {
    server : server,
    app : app
};
