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

let spiner = document.getElementById('spiner');
let list = document.getElementById('list');
let statti = [];

db.collection('articles').get().then(function(res){
    res.forEach(function(title){
        statti.push(title.data())
        spiner.innerHTML = '';
        drawArticle(title.data())
    })

})
console.log(statti)

function drawArticle(data){
    let article = document.createElement('article');

    let title = document.createElement('h2');
    let text = document.createElement('div');
    let avtor = document.createElement('a');

    title.innerHTML = data.title;
    text.innerHTML = data.article;

    avtor.innerHTML = 'Оригінальна стаття'
    avtor.href = data.author

    article.appendChild(title)
    article.appendChild(text)
    article.appendChild(avtor)

    list.appendChild(article)
}

let vazon = {
    name: 'орхідея',
    height: '40см',
    width: 30,
    color: 'зедений',
    age: 10,
    listichki: 150,
}
console.log(vazon.color)
let vazon2 = {
    name: 'орхідея',
    height: '40см',
    width: 30,
    color: 'зедений',
    age: 10,
    listichki: 150,
}
let x = 0;
let masive = [
    {
    name: 'орхідея',
    height: '40см',
    width: 30,
    color: 'зедений',
    age: 10,
    listichki: 150},
    {
        name: 'орхідея',
        height: '40см',
        width: 30,
        color: 'зедений',
        age: 10,
        listichki: 150},
        {
            name: 'орхідея',
            height: '40см',
            width: 30,
            color: 'зедений',
            age: 10,
            listichki: 150},
            {
                name: 'орхідея',
                height: '40см',
                width: 30,
                color: 'зедений',
                age: 10,
                listichki: 150},
                {
                    name: 'орхідея',
                    height: '40см',
                    width: 30,
                    color: 'зедений',
                    age: 10,
                    listichki: 150}

]
