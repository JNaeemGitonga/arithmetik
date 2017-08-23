'use strict';

var _ = require('.');

test('numbers should add up', function () {
    expect((0, _.addition)([2, 4, 4, 5, 12])).toBe(27);
});

test('Throws on {}', function () {
    expect(function () {
        return (0, _.addition)({});
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throws on \'abc\'', function () {
    expect(function () {
        return (0, _.addition)('abc');
    }).toThrow("Please enter a valid array of numbers.");
});
test('Throws on \'null\'', function () {
    expect(function () {
        return (0, _.addition)(null);
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throws on functions', function () {
    expect(function () {
        return (0, _.addition)(function () {
            return 'hey world';
        });
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throw on undefined', function () {
    expect(function () {
        return (0, _.addition)(undefined);
    }).toThrow('Please enter a valid array of numbers.');
});

test('Throw on mixed array', function () {
    expect(function () {
        return (0, _.addition)([3, 2, 'apple', 4, undefined]);
    }).toThrow('All items in array must be numbers.');
});

test('numbers have product of', function () {
    expect((0, _.multiply)([1, 3, 3])).toBe(9);
});

test('Throw on string in multiply', function () {
    expect(function () {
        return (0, _.multiply)('abc');
    }).toThrow("Please enter a valid array of numbers.");
});
test('Throw on null in multiply', function () {
    expect(function () {
        return (0, _.multiply)(null);
    }).toThrow('Please enter a valid array of numbers.');
});

test('Throw on undefined in multiply', function () {
    expect(function () {
        return (0, _.multiply)(undefined);
    }).toThrow('Please enter a valid array of numbers.');
});

test('Throw on mixed array in multiply', function () {
    expect(function () {
        return (0, _.multiply)(['apple', 2, 4, undefined]);
    }).toThrow('All items in array must be numbers.');
});

test('Throw on {}, multiply', function () {
    expect(function () {
        return (0, _.multiply)({});
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throw on function in multiply', function () {
    expect(function () {
        return (0, _.multiply)(function () {
            return 'hey world';
        });
    }).toThrow("Please enter a valid array of numbers.");
});

test('numbers produce average of', function () {
    expect((0, _.average)([2, 5, 2, 1])).toBe(2.5);
});

test('Throw on string, average', function () {
    expect(function () {
        return (0, _.average)('abc');
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throw on {}, average', function () {
    expect(function () {
        return (0, _.average)({});
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throw on function, average', function () {
    expect(function () {
        return (0, _.average)(function () {
            return 'hey world';
        });
    }).toThrow("Please enter a valid array of numbers.");
});

test('Throw on null, average', function () {
    expect(function () {
        return (0, _.average)(null);
    }).toThrow('Please enter a valid array of numbers.');
});

test('Throw on undefined, average', function () {
    expect(function () {
        return (0, _.average)(undefined);
    }).toThrow('Please enter a valid array of numbers.');
});

test('Throw on mixed array, average', function () {
    expect(function () {
        return (0, _.average)(['apple', 2, 4, undefined]);
    }).toThrow('All items in array must be numbers.');
});

test('should return hypotneuse, pronumeral', function () {
    expect((0, _.pronumeral)(1, 3)).toBe(Math.sqrt(10).toFixed(2));
});

test('should return length, pronumeral', function () {
    expect((0, _.pronumeral)(2, undefined, 3)).toBe(Math.sqrt(5).toFixed(2));
});

test('should return length, pronumeral', function () {
    expect((0, _.pronumeral)(undefined, 3, 5)).toBe('4.00');
});

test('Throw when only given one number, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)(4);
    }).toThrow('Please enter a second value');
});

test('Throw on {}, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)({});
    }).toThrow('Please enter a second value');
});

test('Throw on function, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)(function () {
            return 'peace world';
        }, 9);
    }).toThrow('Needs to be given positive numbers greater than 0.');
});

test('Throw on negative number and null, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)(-1, null);
    }).toThrow('Needs to be given positive numbers greater than 0.');
});

test('Throw on 0 and string, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)(0, 'abc');
    }).toThrow('Needs to be given positive numbers greater than 0.');
});

test('Throw on three values, pronumeral', function () {
    expect(function () {
        return (0, _.pronumeral)(0, 'abc', 8);
    }).toThrow('Since you\'ve entered three values, I have nothing to calculate.');
});