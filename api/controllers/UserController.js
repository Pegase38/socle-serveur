"use strict";
var controller = {
    hello: function (req, res) {
        return res.send("Hi there!");
    }
};
module.exports = controller;
