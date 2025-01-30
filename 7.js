/*
Napiši funkciju jePalindrom(niz), koja provjerava da li se niz čita isto sprijeda i straga.

	Ulaz: 
	
console.log(jePalindrom([1, 2, 3, 2, 1]));
console.log(jePalindrom([1, 2, 3, 4, 5]));

	Izlaz: 
	
true
false
*/

const jePalindrom=(arr)=>{
    let arrReverse=[...arr].reverse();
    let isSame=true;

    arr.forEach((e,i,arr)=>{
        if(e!==arrReverse[i])isSame=false;
    })

    return isSame;
}

console.log(jePalindrom([1, 2, 3, 2, 1]));
console.log(jePalindrom([1, 2, 3, 4, 5]));