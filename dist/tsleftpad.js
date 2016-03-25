"use strict";
var leftpad = function (str, len, ch) {
    if (ch === void 0) { ch = " "; }
    str = String(str);
    var i = -1;
    len = len - str.length;
    while (++i < len) {
        str = ch + str;
    }
    return str;
};
module.exports = leftpad;
