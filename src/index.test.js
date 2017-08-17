import {average, addition, multiply, pronumeral} from '.';


test('numbers should add up', () => {
    expect(addition([2,4,4,5,12])).toBe(27)
})

test('Throws on {}', () => {
    expect(() => addition({})).toThrow("Please enter a valid array of numbers.")
})

test('Throws on \'abc\'', () => {
    expect(() => addition('abc')).toThrow("Please enter a valid array of numbers.")
})
test('Throws on \'null\'', () => {
    expect(() => addition(null)).toThrow("Please enter a valid array of numbers.")
})

test('Throws on functions', () => {
    expect(() => addition(() => 'hey world')).toThrow("Please enter a valid array of numbers.")
})

test('Throw on undefined', () => {
    expect(() => addition(undefined)).toThrow('Please enter a valid array of numbers.')
})

test('Throw on mixed array', () => {
    expect(() => addition([3, 2, 'apple',4, undefined])).toThrow('All items in array must be numbers.')
})

test('numbers have product of', () => {
    expect(multiply([1,3,3])).toBe(9)
})

test('Throw on string in multiply', () => {
    expect(() => multiply('abc')).toThrow("Please enter a valid array of numbers.")
})
test('Throw on null in multiply', () => {
    expect(() => multiply(null)).toThrow('Please enter a valid array of numbers.')
})

test('Throw on undefined in multiply', () => {
    expect(() => multiply(undefined)).toThrow('Please enter a valid array of numbers.')
})

test('Throw on mixed array in multiply', () => {
    expect(() => multiply(['apple', 2, 4, undefined])).toThrow('All items in array must be numbers.')
})

test('Throw on {}, multiply', () => {
    expect(() => multiply({})).toThrow("Please enter a valid array of numbers.")
})

test('Throw on function in multiply', () => {
    expect(() => (multiply(() => 'hey world'))).toThrow("Please enter a valid array of numbers.")
})

test('numbers produce average of', () => {
    expect(average([2,5,2,1])).toBe(5)
})

test('Throw on string, average', () => {
    expect(() => average('abc')).toThrow("Please enter a valid array of numbers.")
})

test('Throw on {}, average', () => {
    expect(() => average({})).toThrow("Please enter a valid array of numbers.")
})

test('Throw on function, average', () => {
    expect(() => average(() => 'hey world')).toThrow("Please enter a valid array of numbers.")
})

test('Throw on null, average', () => {
    expect(() => average(null)).toThrow('Please enter a valid array of numbers.')
})

test('Throw on undefined, average', () => {
    expect(() => average(undefined)).toThrow('Please enter a valid array of numbers.')
})

test('Throw on mixed array, average', () => {
    expect(() => average(['apple', 2, 4, undefined])).toThrow('All items in array must be numbers.')
})

test('should return hypotneuse, pronumeral', () => {
    expect(pronumeral(1,3)).toBe(Math.sqrt(10).toFixed(2))
})

test('should return length, pronumeral', () => {
    expect(pronumeral(2,undefined,3)).toBe(Math.sqrt(5).toFixed(2))
})

test('should return length, pronumeral', () => {
    expect(pronumeral(undefined,3,5)).toBe('4.00')
})

test('Throw when only given one number, pronumeral', () => {
    expect(() => pronumeral(4)).toThrow('Please enter a second value')
})

test('Throw on {}, pronumeral', () => {
    expect(() => pronumeral({})).toThrow('Please enter a second value')
})

test('Throw on function, pronumeral', () => {
    expect(() => pronumeral(() => 'peace world',9)).toThrow('Needs to be given positive numbers greater than 0.')
})

test('Throw on negative number and null, pronumeral', () => {
    expect(() => pronumeral(-1, null)).toThrow('Needs to be given positive numbers greater than 0.')
})

test('Throw on 0 and string, pronumeral', () => {
    expect(() => pronumeral(0, 'abc')).toThrow('Needs to be given positive numbers greater than 0.')
})

test('Throw on three values, pronumeral', () => {
    expect(() => pronumeral(0, 'abc', 8)).toThrow(`Since you've entered three values, I have nothing to calculate.`)
})