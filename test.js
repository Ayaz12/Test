/**
 * Created by aali on 3/21/2017.
 */

var user = require("./New/main");
var chai = require("chai");
var assert = chai.assert;

describe("UpdateTest", function () {


    it("Update User Test", function () {
        console.log("Update");

        var defaultUser = new user("Abeer", "Scayle");

        var updatedUser = new user();
        updatedUser.Update("Abeer", "Scayle");



        assert.equal(defaultUser.Name, updatedUser.Name);
        assert.equal(defaultUser.Company, updatedUser.Company);

    });


});

describe("CheckTest", function () {
    it("Check User Test", function () {
        console.log("Check");

        var checkDefaultUser = new user("Abeer", "Scayle");

        var checkUpdatedUser = new user();

        checkUpdatedUser.Check("Abeer", "Scayle");


        assert.equal(checkDefaultUser.Name, checkUpdatedUser.Name);
        assert.equal(checkDefaultUser.Company, checkUpdatedUser.Company);

    });
});
