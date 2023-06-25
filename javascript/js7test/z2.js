let massive = [];
massive.push(15);
console.log(massive);

let array = [];
for(i=0; i<10; i++){
array.push(prompt(`Введіть якесь число`));
}
array.shift();


array.pop();


let sproba = prompt(`спробуйте вгадати число`);


let index = array.indexOf(sproba);
if(index == -1){
    alert(`невгадано`);
}else{
    alert(`вгадано`);
}

console.log(array);