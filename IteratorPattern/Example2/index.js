import { Matrix } from "./matrix.js";


const matrix2x2 = new Matrix ([
    ['11', '12'],
    ['21', '22']
]);
const iterator = matrix2x2[Symbol.iterator]();
let iteratorResult = iterator.next();

while (!iteratorResult.done) {
    console.log(iteratorResult.value);
    iteratorResult = iterator.next();
}