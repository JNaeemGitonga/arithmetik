'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNumericArray = function _isNumericArray(arr) {
    if (Array.isArray(arr) === true) {
        if (arr.length < 2) {
            throw new Error('Please enter a valid array of numbers.');
        }
        for (var a = 0; a < arr.length; a++) {
            if (typeof arr[a] !== 'number') {
                throw new Error('All items in array must be numbers.');
            }
        }
    } else {
        throw new Error('Please enter a valid array of numbers.');
    }
};

var addition = exports.addition = function addition(arr) {
    var num = 0;

    _isNumericArray(arr);
    for (var i = 0; i < arr.length; i++) {
        num = num + arr[i];
    }
    return num;
};

var multiply = exports.multiply = function multiply(arr) {
    var num = 1;

    _isNumericArray(arr);
    for (var i = 0; i < arr.length; i++) {
        num = num * arr[i];
    }
    return num;
};

var average = exports.average = function average(arr) {
    var num = 0;

    _isNumericArray(arr);
    for (var i = 0; i < arr.length; i++) {
        num = num + arr[i];
    }
    return num / 2;
};

var pronumeral = exports.pronumeral = function pronumeral() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
    var hypotenuse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;


    if (a === undefined && b === undefined) {
        throw new Error('Please enter a second value');
    }

    if (b === undefined && hypotenuse === undefined) {
        throw new Error('Please enter a second value');
    }

    if (a === 'string' || b === 'string' || hypotenuse === 'string') {
        throw new Error('Please enter numbers');
    }

    if (a !== undefined && b !== undefined && hypotenuse !== undefined) {
        throw new Error('Since you\'ve entered three values, I have nothing to calculate.');
    }

    if (hypotenuse === undefined && a !== undefined && b !== undefined) {
        if (typeof a === 'number' && typeof b === 'number') {
            if (a >= 1 && b >= 1) {
                return Math.sqrt(a * a + b * b).toFixed(2);
            } else {
                throw new Error('A right triangle should have positive numbers for length.');
            }
        } else {
            throw new Error('Needs to be given positive numbers greater than 0.');
        }
    }

    if (a === undefined && b !== undefined && hypotenuse !== undefined) {
        if (typeof hypotenuse === 'number' && typeof b === 'number') {
            if (hypotenuse >= 1 && b >= 1) {
                return Math.sqrt(hypotenuse * hypotenuse - b * b).toFixed(2);
            } else {
                throw new Error('A right triangle should have positive numbers for length.');
            }
        } else {
            throw new Error('Needs to be given positivenumbers greater than 0.');
        }
    }

    if (b === undefined && a !== undefined && hypotenuse !== undefined) {
        if (typeof a === 'number' && typeof hypotenuse === 'number') {
            if (hypotenuse >= 1 & a >= 1) {
                return Math.sqrt(hypotenuse * hypotenuse - a * a).toFixed(2);
            } else {
                throw new Error('A right triangle should have positive numbers for length.');
            }
        }
    }
};