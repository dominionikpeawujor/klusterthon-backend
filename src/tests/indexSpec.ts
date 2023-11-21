const tester = (num: number) => num * 5;

console.log("testeteing");

describe('first test',  () => {
    it('should return the correct value for a given input', () => {
        expect(tester(10)).toBe(50);
    })
})