import { createCounter } from "helpers/counter.helper";

describe('createCounter', () => {
    it('should create a counter that increments correctly', () => {
        const counter = createCounter();
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
        expect(counter()).toBe(3);
    });

    it('should create a counter with custom initial value', () => {
        const counter = createCounter(10);
        expect(counter()).toBe(11);
        expect(counter()).toBe(12);
        expect(counter()).toBe(13);
    });
});