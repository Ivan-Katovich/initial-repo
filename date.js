const moment = require('moment');

const obj = {
    bar: function (format) {
        return moment().format(format);
    },
    b: 51
};

module.exports = obj;