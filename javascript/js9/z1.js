let massive = [4, 2, 88, 1, 75, 53, 43, 153];
let min = massive[0];
let max = massive[0];
for(i=0; i < massive.length;i++){


if(max < massive[i]){
    max = massive[i];
}

if(min > massive[i]){
    min = massive[i];
}



}
console.log(massive);
console.log(`MAx -  ${max}`);
console.log(`MIN -  ${min}`);