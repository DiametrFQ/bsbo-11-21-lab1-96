"use strict";
class Queue {
    _Array;
    constructor(quantity) {
        this._Array = [];
    }
    Push(num) {
        this._Array.push(num);
    }
    Shift() {
        return this._Array.shift();
    }
    First() {
        return this._Array.at(0);
    }
    Length() {
        return this._Array.length;
    }
    Merger() {
        const timer = Date.now();
        while (this.Length() != 1) {
            const A1 = this.Shift();
            const A2 = this.Shift();
            const limit = A1.length + A2.length;
            let retA = [];
            for (let i = 0; i < limit; i++) {
                if (A1.length > 0 && A2.length > 0) {
                    A1 > A2 ? retA.push(A2.shift()) : retA.push(A1.shift());
                }
                else if (A2.length === 0) {
                    retA.push(A1.shift());
                }
                else if (A1.length === 0) {
                    retA.push(A2.shift());
                }
            }
            this.Push(retA.flat());
        }
    }
}
for (let i = 5; i < 10; i += 1) {
    let Quantity = i;
    let queue = new Queue(Quantity);
    for (let i = 0; i < Quantity; i++)
        queue.Push([Math.random()]);
    console.log("Не россортированное");
    console.log(queue);
    queue.Merger();
    console.log("Россортированное");
    console.log(queue);
    console.log();
}
//# sourceMappingURL=labaNop.js.map