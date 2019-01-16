const expect = require("chai").expect
const showoff = require("../src/showoff.js")

describe("showoff", function () {
    it("should be a function", function () {
        expect(showoff).to.be.a('function')
    });
});
