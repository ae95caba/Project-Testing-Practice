import analyzeArray from "./analyzeArray";

it("average", () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4));

it("min", () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1));

it("max", () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8));

it("length", () => expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6));
