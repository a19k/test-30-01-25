/*Napisi funkciju koja za date rijeci i prefix, vraca rijeci koje imaju taj prefix.


Primjer:
Ulaz: words = ["pay","attention","practice","attend"], prefix = "at"
Izlaz: [“attention”, “attend”]
*/

let words = ["pay","attention","practice","attend"];
let prefix = "at";

const returnByPrefix=(words,prefix)=>{
    return filtered=words.filter(e=>e.startsWith(prefix));
}

console.log(returnByPrefix(words,prefix));


