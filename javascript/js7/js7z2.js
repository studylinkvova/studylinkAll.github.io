let igra = [1, 5, 7];
for(i=1; i<6; i++){
    let chislo = prompt(`Введіть число`);
    let chislo_true = Number(chislo);
    let index = igra.indexOf(chislo_true);
    if(index == -1){
        igra.push(chislo_true);
    }else{
        
    }
}
console.log(igra);