/*Napiši funkciju obrniString(tekst) koja prima string i vraća isti string obrnut koristeći petlju(HOF).

Ulaz: 

	console.log(obrniString("programiranje"));
console.log(obrniString("javascript"));

Izlaz: 

"ejranimargorp"
"tpircsavaj"

*/


const obrniString = (tekst) =>{
    let obrnuti="";

    tekst=tekst.split("").reduceRight((acc,e)=>obrnuti+=e,0);

    return obrnuti;
};

console.log(obrniString("programiranje"));
console.log(obrniString("javascript"));
