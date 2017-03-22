
var Name = "";
var Company = "";

function User(name, company) {

    this.Name = name;
    this.Company = company;

}

User.prototype.Update = function (name, company) {

    this.Name = name;
    this.Company = company;

};




module.exports = User;