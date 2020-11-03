"use strict";
var Leader = /** @class */ (function () {
    function Leader(name) {
        this.name = '';
        this.name = name;
        console.log(name + "\u662F\u4E00\u540D\u9996\u8111");
    }
    Leader.prototype.shopping = function () {
        var proxyObj = new ProxySecretary('B');
        proxyObj.proxyBehavior(this.name);
    };
    return Leader;
}());
var ProxySecretary = /** @class */ (function () {
    function ProxySecretary(name) {
        this.name = '';
        this.name = name;
        console.log(name + "\u662F\u4E00\u540D\u79D8\u4E66");
    }
    ProxySecretary.prototype.proxyBehavior = function (targetName) {
        console.log(this.name + "\u4EE3\u66FF" + targetName + "\u53BB\u4E70\u996E\u6599");
    };
    return ProxySecretary;
}());
var leader = new Leader('A');
leader.shopping();
