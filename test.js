/**
 * Created by aali on 3/21/2017.
 */

var user = require("./New/main");
var chai = require("chai");
var assert = chai.assert;

describe("UserTest", function () {


    it("Update User Test", function () {
        //console.log("Hello there");

        var defaultUser = new user("Abeer", "Scayle");

        var updatedUser = new user();
        updatedUser.Update("Abeer", "Scayle");



        assert.equal(defaultUser.Name, updatedUser.Name);
        assert.equal(defaultUser.Company, updatedUser.Company);

    });
});