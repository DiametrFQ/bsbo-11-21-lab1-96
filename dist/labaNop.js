"use strict";
class Queue {
    _Array;
    _F_lim;
    _O_F_lim;
    _T_lim;
    _N_op;
    constructor(quantity) {
        this._Array = [];
        this._F_lim = Math.floor(1 + (11 + Math.log2(quantity) * 16) * (quantity - 1));
        this._O_F_lim = Math.floor(Math.log2(quantity) * quantity);
        this._T_lim = 0;
        this._N_op = 0;
    }
    Push(num) {
        this._N_op++;
        this._Array.push(num);
    }
    Shift() {
        this._N_op++;
        return this._Array.shift();
    }
    First() {
        this._N_op++;
        return this._Array.at(0);
    }
    Length() {
        this._N_op++;
        return this._Array.length;
    }
    Merger() {
        while (this.Length() != 1) {
            const A1 = this.Shift();
            this._N_op += 1;
            const A2 = this.Shift();
            this._N_op += 1;
            const limit = A1.length + A2.length;
            this._N_op += 3;
            let retA = [];
            this._N_op += 1;
            for (let i = 0; i < limit; i++) {
                if (A1.length > 0 && A2.length > 0) {
                    this._N_op += 8;
                    A1 > A2 ? retA.push(A2.shift()) : retA.push(A1.shift());
                }
                else if (A2.length === 0) {
                    this._N_op += 4;
                    retA.push(A1.shift());
                }
                else if (A1.length === 0) {
                    this._N_op += 4;
                    retA.push(A2.shift());
                }
            }
            this._N_op += 1;
            this.Push(retA.flat());
        }
        this._T_lim = performance.now();
    }
}
for (let i = 60; i < 6061; i += 60) {
    let Quantity = i;
    let queue = new Queue(Quantity);
    for (let i = 0; i < Quantity; i++)
        queue.Push([Math.random()]);
    queue.Merger();
    console.log('Сортировка №' + i / 60);
    console.log('F(n)= ' + queue._F_lim);
    console.log('O(F(n))= ' + queue._O_F_lim);
    console.log('T(n)= ' + queue._T_lim);
    console.log('N_op= ' + queue._N_op);
    console.log();
}
//# sourceMappingURL=labaNop.js.map