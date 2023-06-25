let pass = 1234;
let k_p = 3;
for(i=1; i<4; i++){

    let popitka = prompt(`Введіть ваш пароль. Залишилось спроб - ${k_p} .`);
    k_p--;
    if(pass == popitka){
        alert(`Вітаю, пароль вірний.`);
        break;
    }
    if(k_p == 1){
        alert(`Пароль 1234`);
    }
}