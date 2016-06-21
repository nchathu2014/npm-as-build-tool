var app = require("../").app;
var server = require("../").server;
var request = require("supertest").agent(server);

describe("Our amazing site", function () {
    after(function (done) {
        server.close();
        done();
    });

    it("has a nice welcoming message", function (done) {
        request
            .get("/")
            .expect("Koa says Hi!")
            .end(done);
    });
}); 