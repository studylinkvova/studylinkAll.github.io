
let mas1 = [];
let zm = true;
while(zm == true){
mas1.push(prompt(`Введіть число від 1 до 10`));
zm = confirm(`Чи хочете ви введите ще числа?`);
}


console.log(mas1);
mas1.sort();
console.log(mas1);
mas1.reverse();
console.log(mas1);

