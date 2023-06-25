function enter(){
    /*
    1.Дістати данні з локального сховища і записати в змінну
    2.дістати данні з полів і запписати їх в змінні
    3. зробити перевірку if чи данні з пункту 1 і 2 однакові
    4.Якщо однакові писати повідомлення успіх, якщо ні то ні
    */
   let email = document.getElementById(`email`).value;
   let password = document.getElementById(`password`).value;
   let user = JSON.parse(localStorage.getItem("user"))
   
   if(email == user.email && password == user.password){
    document.getElementById("message").innerHTML = `
    <div class="alert alert-success col-6">Успіх</div>
    `
    user.loged = true;
    localStorage.setItem("user", JSON.stringify(user))
   }else{
    document.getElementById("message").innerHTML = `
        <div class="alert alert-danger col-6">Помилка</div>
        `
        
   }
}