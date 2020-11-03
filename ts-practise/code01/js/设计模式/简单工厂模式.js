"use strict";
var Animal = /** @class */ (function () {
    function Animal(type) {
        this.type = '';
        this.name = '';
        this.type = type;
    }
    Animal.prototype.setName = function (name) {
        this.name = name;
    };
    Animal.prototype.detail = function () {
        if (!this.name) {
            console.log('give name');
            return;
        }
        console.log("type:" + this.type + ",name:" + this.name);
    };
    Animal.getInstance = function (type) {
        return new Animal(type);
    };
    return Animal;
}());
var cat = Animal.getInstance('cat');
cat.setName('tom');
cat.detail();
