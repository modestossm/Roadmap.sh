const soma = require("../soma");

test("soma 1 + 2 o resultado tem que se 3", function() {
    expect(soma(1,2)).toBe(3);
})