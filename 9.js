/*Napiši funkciju jesuAnagrami(str1, str2), koja provjerava da li su dva stringa anagrami
 (sadrže iste karatkere ali u drugačijem redosljedu).

	Ulaz: 

console.log(jesuAnagrami("listen", "silent"));
console.log(jesuAnagrami("hello", "world"));

	Izlaz: 
	
true
false
*/

const jesuAnagrami=(str1,str2)=>{
    str1=str1.split("").sort().join();
    str2=str2.split("").sort().join();

    return str1 === str2;
}


console.log(jesuAnagrami("listen", "silent"));
console.log(jesuAnagrami("hello", "world"));