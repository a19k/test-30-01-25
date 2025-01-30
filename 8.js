/*Napiši funkciju pomjeriNule(niz), koja premješta sve nule u nizu na kraj, ali zadržava redoslijed ostalih brojeva.

	Ulaz: 

	console.log(pomjeriNule([0, 1, 0, 3, 12]));
console.log(pomjeriNule([0, 0, 5, 0, 7, 0, 9]));

	Izlaz: 
	
[1, 3, 12, 0, 0]
[5, 7, 9, 0, 0, 0, 0]
*/


const pomjeriNule=(arr)=>{

    arr.forEach(e=>{
        arr.forEach((e,i,arr)=>{
            if(e===0){arr.push(...arr.splice(i,1))};
        });
    })

    return arr;
}


console.log(pomjeriNule([0, 1, 0, 3, 12]));
console.log(pomjeriNule([0, 0, 5, 0, 7, 0, 9]));