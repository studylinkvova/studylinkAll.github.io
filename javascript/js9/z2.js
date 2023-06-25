let mas_pov = [10, 1, 3, 5, 6, 1, 1, 1, 4, 6, 10, 10, 10, 1, 5, 4, 6, 1, 1];

let mas = [];
for(i=0; i < mas_pov.length;i++){
if(mas.indexOf(mas_pov[i]) == -1){
mas.push(mas_pov[i]);
}
}
console.log(mas_pov);
console.log(mas);

