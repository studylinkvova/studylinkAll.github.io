let imya = prompt(`Введіть своє ім'я`);
let email = prompt(`Введіть свій email`);
let username = document.getElementById(`username`);
username.innerHTML = `<a>${imya}</a>`;
let text = document.getElementById(`text`);
text.innerHTML= `<br><br><br><h2 align="center">Вітаю ${imya}! На вашу електронну пошту<br> ${email} відправленно лист із підтвердженням!</h2>`;

