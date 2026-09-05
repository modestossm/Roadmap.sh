const { soma, soma3 } = require("../soma");

test("soma 1 + 2 o resultado tem que se 3", function() {
    expect(soma(1,2)).toBe(3);
})

test("soma 1 + 2 + 3 o resultado tem que se 6", function() {
    expect(soma3(1,2,3)).toBe(6);
})