/*Napisi funkciju koja izbacuje svaki drugi najmanji element niza, i ubacuje u novi niz. 
Pretpostaviti da su elementi u nizu unikatni.
Primjer:
Ulaz: [5, 1, 9 , 3, 7 ,2]
Izlaz: [2, 5, 9]
*/


const filtrirajSvakiDrugiNajmanji=(arr)=>{
    
    arr.sort();
    
    let filteredElements=[];
    
    arr.forEach((e,i)=>{
        if(i%2===1)
            filteredElements.push(e);
    })

    
    
    return filteredElements;
}

let arr = [5, 1, 9, 3, 7, 2];
console.log(filtrirajSvakiDrugiNajmanji(arr));



