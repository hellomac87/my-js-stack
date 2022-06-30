const Stack = require('../my_stack.js');

describe('stack', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    });

    function callback() {}

    it('init', () => {
        expect(stack.data).toEqual([]);
    });

    it('push', () => {
        stack.push(callback);
        expect(stack.data).toHaveLength(1);
    });

    it('push push pop', () => {
        stack.push(callback);
        stack.push(callback);
        stack.pop();
        expect(stack.data).toHaveLength(1);
    });

    it('push push pop pop', () => {
        stack.push(callback);
        stack.push(callback);
        stack.pop();
        stack.pop();
        expect(stack.data).toHaveLength(0);
    });

    it('push push pop pop pop', () => {
        stack.push(callback);
        stack.push(callback);
        stack.pop();
        stack.pop();
        stack.pop();
        expect(stack.data).toHaveLength(0);
    });
});
