import { keyGenerator } from "helpers/key.generator.helper";


describe('keyGenerator', () => {
    it('should generate correct keys', async () => {
        const testCases = [
            { number: 0, expected: '0' },
            { number: 61, expected: 'Z' },
            { number: 62, expected: '10' },
            { number: 3843, expected: 'ZZ' },
        ];

        for (const testCase of testCases) {
            const { number, expected } = testCase;
            const result = await keyGenerator(number);
            expect(result).toBe(expected);
        }
    });
});