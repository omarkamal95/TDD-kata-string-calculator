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
    describe("POST /multiply-strings", function() {
        it("should respond with 200 and output when format is correct", function(done) {
            request(app)
                .post("/multiply-strings")
                .send({
                    strings: ["1,2", "3", "4,6"]
                })
                .expect("Content-Type", /json/)
                .expect(200, {
                    result: 90
                }, done);
        });
        it("should respond with 400 and error when format is incorrect", function(done) {
            request(app)
                .post("/multiply-strings")
                .send({ strings: ["1,2", "3", "4,6,"] })
                .expect(400, "Wrong string format", done);
        });
        it("should respond with 400 and error when there is negative", function(done) {
            request(app)
                .post("/multiply-strings")
                .send({ strings: ["1,2", "3", "4,6,-4"] })
                .expect(400, "Negative numbers are not allowed, the string contains: -4", done);
        });
    });

})