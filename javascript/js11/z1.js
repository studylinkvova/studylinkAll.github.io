let month = document.getElementById(`month`);
let zag = document.getElementById(`zag`);
let day = ` `;
let user_month = prompt(`Для якого місяця календар?`);
zag.innerHTML = `Календар місяця ${user_month}`;
let x = 0;
if(user_month == `Січень` || user_month == `Березень`){
x = 32;
alert(` В цьому місяці 31 день`);
}else if(user_month == `Лютий`){
x = 29;
}else if( user_month == `Квітень`){
x = 31;
}else{

}
















for(i=1; i<x; i++){

if(i % 7 == 0 || (i+1) % 7 == 0){
day += `<div class="day vihidni">${i} <br>${user_month}</div>`;
}else{
day += `<div class="day">${i}<br> ${user_month}</div>`;
}

}
month.innerHTML = day;

