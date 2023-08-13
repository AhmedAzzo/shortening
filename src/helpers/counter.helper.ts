
/**
 * Creates a counter function that increments its value with each call.
 * 
 * @param {number} initialValue - The initial value for the counter. Default is 0.
 * @returns {() => number} A function that, when called, increments and returns the counter value.
 * 
 * @example
 * const counter = createCounter();
 * console.log(counter()); // Output: 1
 * console.log(counter()); // Output: 2
 * 
 * const counterWithInitialValue = createCounter(10);
 * console.log(counterWithInitialValue()); // Output: 11
 * console.log(counterWithInitialValue()); // Output: 12
 */

export const createCounter = (initialValue: number = 0) => {
    let count = initialValue;
    return function () {
        count++;
        return count;
    };

};



