let user = {
	name: `Петро`,
	lastname: 'Петрикович',
	age: '8',
	email: 'petya8@gmail.com',
	misto: 'Хмельницький'
}

function showUser(){
	document.getElementById(`table`).innerHTML = `<table>
	<tr>
		<th>Ім'я</th>
		<th>Прізвище</th>
		<th>Вік</th>
		<th>Емейл</th>
		<th>Місто</th>
	</tr>
	<tr>
		<td>${user.name}</td>
		<td>${user.lastname}</td>
		<td>${user.age}</td>
		<td>${user.email}</td>
		<td>${user.misto}</td>
	</tr>
</table>`;

}



function changeName(x,y,t,i,zminna){ 
	user.name = x;

	showUser()
}
function changeLastname(x){ 
	user.lastname = x;

	showUser()
}
function changeAge(x){ 
	user.age = x;

	showUser()
}
function changeEmail(x){ 
	user.email = x;

	showUser()
}
function changeMisto(x){ 
	user.misto = x;

	showUser()
}
function delUser(){
	document.getElementById(`table`).innerHTML = ``;
}