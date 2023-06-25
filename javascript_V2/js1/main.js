const firebaseConfig = {
    apiKey: "AIzaSyCwggfU2P75f6gw89Uat4S1QgntlWqWPjc",
    authDomain: "nd14-firebase.firebaseapp.com",
    projectId: "nd14-firebase",
    storageBucket: "nd14-firebase.appspot.com",
    messagingSenderId: "197757744798",
    appId: "1:197757744798:web:a3723a5d6f551a991cad8f"
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
let massive = []
db.collection('users').get().then(function(res){
    res.forEach(function(doc){
        
        massive.push(doc.data())
    });
})
console.log(massive)

function drawUsers(){
    let tbody = document.getElementById('tbody');
    let users_tbody = '';
    massive.map(function(user){
        users_tbody += `
        <tr>
            <td>${user.name}</td>
            <td>авіавіа</td>
            <td>фіафіва</td>
            <td>фівфіва</td>
        </tr>
        `
    })

    tbody.innerHTML = users_tbody;
}


