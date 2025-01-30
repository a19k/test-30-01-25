/*Napisi funkciju koja za ulaze ++x i x++ povecava vrijednost pocetne varijable, a za ulaze -–x i x-– smanjuje vrijednost varijable 
za 1. Pocetna vrijednost je 0.

Primjer:
Ulaz: ["--X","X++","X++", “X++”]
Izlaz: 2
*/


let startingValue=0;

const input=["--X","X++","X++", "X++"];

input.forEach(currentInput=>{
    if(currentInput.toLowerCase()==="++x" || currentInput.toLowerCase()==="x++") startingValue++;
    if(currentInput.toLowerCase()==="--x" || currentInput.toLowerCase()==="x--") startingValue--;
})

console.log(startingValue);
