let klava1 = {
    name: "Клавіатура дротова Logitech G2 Prodigy USB",
    otziv: 204,
    price: 1399,
    akci: true,
    img: "a1.jpg"
}
let klava2 = {
    name: "Клавіатура Cougar Vantar",
    otziv: 6,
    price: 1286,
    akci: false,
    img: "a2.jpg"
}
let bal1 = 0;
let bal2 = 0;
if(klava1.price < klava2.price){
bal1 = klava2.price - klava1.price;
}else{
bal2 = klava1.price - klava2.price;
}
bal1= bal1 + klava1.otziv*0.5;
bal2= bal2 + klava2.otziv*0.5;
let card = document.getElementById(`products`);
let info = `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava1.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava1.name}
    </div>
    
    <div class="reviews">
        ${klava1.otziv} відгуки
    </div>
    
    <div class="price">
        ${klava1.price}&#8372;<br>${bal1}
    </div>
</div>
</div>`;
info += `<div class="card">
<div class="header">
    <div class="action">Акція</div>
</div>

<div class="card_image">
    <img src="${klava2.img}" alt="">
</div>

<div class="card_info">
    <div class="name">
        ${klava2.name}
    </div>
    
    <div class="reviews">
        ${klava2.otziv} відгуки
    </div>
    
    <div class="price">
        ${klava2.price}&#8372;<br> ${bal2} 
    </div>
</div>
</div>`;
card.innerHTML = info;

