// class Queue {
//     private _Array: number[][]
//     public _F_lim: number
//     public _O_F_lim: number
//     public _T_lim: number
//     public _N_op: number

//     constructor(quantity: number) {
//         this._Array = []
//         this._F_lim = Math.floor(1+( 11+Math.log2(quantity)*quantity*16)*(quantity-1))
//         this._O_F_lim = Math.floor(Math.log2(quantity)*quantity**2) 
//         this._T_lim = 0
//         this._N_op = 0
//     }
//     Push(num: number[]){//1
//         this._Array.push(num)
//     } 
//     Shift(){//1
//         return this._Array.shift()!
//     }
//     First(){//1
//         return this._Array.at(0)!
//     }
//     Length(){//1
//         return this._Array.length
//     }
//     Merger() {
//         const timer = Date.now()
//         while (this.Length() != 1){ //2 + Σ

//             const A1 = this.Shift()//2

//             const A2 = this.Shift()//2

//             const limit = A1.length + A2.length//4

//             let retA :number[] = []//1

//             for (let i = 0; i < limit; i++){// 1 + Σ
//                 if(A1.length > 0 && A2.length > 0){//3

//                     A1 > A2 ? retA.push( A2.shift()! ) : retA.push( A1.shift()! )//5
//                 }
//                 else if(A2.length === 0){//2

//                     retA.push( A1.shift()! )//2
//                 }
//                 else if(A1.length === 0){//2

//                     retA.push( A2.shift()! )//2
//                 }
//             }
//             this.Push( retA.flat())//2
//         }
//         this._T_lim = Number((Date.now()-timer).toFixed(3))
//     }
// }

// //for (let i = 300; i < 9001; i+=300) {
//     let Quantity = 300//i
//     let queue = new Queue(Quantity)

//     for (let i = 0; i < Quantity; i++)
//         queue.Push([Math.random()])  

//     queue.Merger()
//     console.log('Сортировка №' + Quantity/300)
//     console.log('F(n)= ' +queue._F_lim)
//     console.log('O(F(n))= ' +queue._O_F_lim)
//     console.log('T(n)= ' +queue._T_lim)
//     console.log('N_op= ' +queue._N_op)
//     console.log()
//     //console.log(queue)
//     // console.log("C1 = " + queue._F_lim / queue._T_lim)
//     // console.log("C2 = " + queue._O_F_lim / queue._T_lim)
//     // console.log("C3 = " + queue._F_lim / queue._N_op)
//     // console.log("C4 = " + queue._O_F_lim / queue._N_op)
//     console.log()
// //}