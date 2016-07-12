"use strict";
var userModel = {
    attributes: {
        name: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    }
};
module.exports = userModel;
