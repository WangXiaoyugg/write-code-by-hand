const { expect, it } = require('./expect');

function add(a, b) {
    return a + b;
}

function multiple(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

// expect(add(1,2)).toBe(3)
// expect(add(1,2)).toBe(0);

// const obj = { name: 'garen' };
// expect(obj).has('name');
// expect(obj).has('age');
// expect([1,2,3]).has(0);

it('测试加减乘除', () => {
    expect(add(1,2)).toBe(3)
    expect(subtract(2,1)).toBe(1)
    expect(multiple(1,2)).toBe(1)
    expect(divide(1,2)).toBe(0.5)
}) 