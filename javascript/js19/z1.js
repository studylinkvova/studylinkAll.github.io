
function napusatu(){
let input = document.getElementById(`test`).value
let h1 = document.getElementById(`zagolovok`)
h1.innerHTML = input;
}


function local(){
	let test = document.getElementById(`test`).value
	localStorage.setItem(`slovo`, test);
}

function getlocal(){
	document.getElementById(`zagolovok`).innerHTML = 
	localStorage.getItem(`slovo`)
}
