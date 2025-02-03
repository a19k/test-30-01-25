
let niz = [1,3,5,7,9];
let niz2 = [3,6,9,15];
let niz3 = [2,4,6,8,10]


const jeAritmeticki = (niz)=>{
    let aritmeticki=true;

    niz.reduce((acc,e,i,arr)=>{
        console.log(e,acc);

        if(i===1)return e-acc;

        if(acc!==e-arr[i-1]) aritmeticki=false;

        return e-arr[i-1];
    })

    return aritmeticki;
}


console.log(jeAritmeticki(niz3));
