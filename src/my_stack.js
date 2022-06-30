class Stack {
    constructor() {
        this.data = [];
    }
    push(func) {
        this.data.push(func);
    }

    pop() {
        if (this.data.legnth === 0) {
            return;
        }

        if (this.data.length > 0) {
            this.data[this.data.length - 1]();
            this.data.pop();
        }
    }
}

module.exports = Stack;
