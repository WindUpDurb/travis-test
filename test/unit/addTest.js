"use strict";

var expect = require("chai").expect;

var math = require("../../math");

//also know as a suite
describe("Math", function () {
    describe(".add()", function () {
       //the test; also know as a spec
        it("should add two numbers", function () {
            expect(math.add(2, 2)).to.equal(4);
            expect(math.add(10, 10)).to.equal(20);
        });
    });
});

