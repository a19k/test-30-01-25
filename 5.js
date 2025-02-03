/*Napisi funkciju koja pronalazi ukupnu frekvenciju elemenata koji imaju najveću frekvenciju. 
Frekvencija elementa je broj njegovih pojavljivanja u nizu.

Primjer 1:
Ulaz: nums = [1,2,2,3,1,4]
Izlaz: 4

Objašnjenje: Brojevi 1 i 2 imaju frekvenciju 2, što je najveća frekvencija u nizu.
Ukupan broj elemenata sa tom frekvencijom je 4.

Primjer 2:
Ulaz: nums = [1,2,3,4,5]
Izlaz: 5

Objašnjenje: Svi elementi niza imaju frekvenciju 1, što je najveća frekvencija.
Ukupan broj elemenata sa tom frekvencijom je 5.

*/

let nums = [1,2,3,100,100,100,4,5,1,1];

const countMaxFrequency = (nums) => {
    nums.sort();

    console.log(nums);
    

    let maxFrequency = 0;
    let sum = 0;

    nums.reduce((acc, e, i, arr) => {
        if (acc === 0 || e === arr[i - 1]) acc++;
        else {
            if (acc > maxFrequency) maxFrequency = acc;
            acc = 1;
        }

        if (i = arr.length - 1 && acc > maxFrequency) maxFrequency = acc;
        

        return acc;
    }, 0)
   
    nums.reduce((acc, e, i, arr) => {
        if (acc === 0 || e === arr[i - 1]) acc++;
        else if (acc === maxFrequency) {
            sum+=acc;
            acc = 1;
        }
        else acc=1;

        return acc;
    },1)

    return sum;
}

console.log(countMaxFrequency(nums));
