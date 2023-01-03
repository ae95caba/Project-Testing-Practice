import calculator from "./calculator";
it("calculate", () => expect(calculator.divide(15, 3)).toBe(5));
it("calculate", () => expect(calculator.multiply(15, 3)).toBe(45));
it("calculate", () => expect(calculator.sum(15, 3)).toBe(18));
it("calculate", () => expect(calculator.substract(15, 3)).toBe(12));
