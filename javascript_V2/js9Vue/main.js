const test = {
    text: 'Привіт, вьою працює',
    clicks: 0,
    users: [],

}

const FirstApp = {
    data(){
        return test
    },
    methods: {
        clicksFarm(){
            this.clicks++
        }
    },
    mounted(){
        
db.collection('users').get()
  .then((res) => {
    res.forEach((doc) => {

      this.users.push(doc.data());
    });
    
  })

  дістатвайте статті тут
}

}
Vue.createApp(FirstApp).mount('#vue')