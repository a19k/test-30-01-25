/*Napisi funkciju koja za kvadratnu matricu, vraca sumu brojeva na dijagonalama.

Primjer:
Ulaz: [[1,2,3], [4,5,6], [7,8,9]]
Izlaz: 25 (1 + 5 + 9 + 3 + 7)
*/


let matrix = [
    [1,  2,  3,  4],
    [5,  6,  7,  8],
    [9,  10, 11, 12],
    [13, 14, 15, 16]
];


const diagonalSum=(matrix)=>{
    let sum=0;

    matrix.forEach((row,i) => {
        row.forEach((e,j)=>{
            if(i===j || i+j===matrix.length-1){console.log(e);sum+=e;}
        })
    });

    return sum;
}

console.log(diagonalSum(matrix));
