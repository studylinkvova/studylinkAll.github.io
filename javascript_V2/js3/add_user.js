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

function add_user(){
    let new_user = {
        name: document.getElementById('user_name').value,
        lastname: document.getElementById('user_lastname').value,
        email: document.getElementById('user_email').value,
        password:document.getElementById('user_password').value
    }
    db.collection('usersNew').add(new_user).then(function(){
        console.log('Успіх')
    })
}