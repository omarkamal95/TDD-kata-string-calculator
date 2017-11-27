const app = require("../../app");
const request = require("supertest");
var chai = require("chai");
var expect = chai.expect;
describe("Smoketest", function() {
    describe("GET /", function() {
        it("should respond with 200 ok", function(done) {
            request(app)
                .get("/")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });
    });
});