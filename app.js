const app = Vue.createApp({
    //data, functions
    data(){
        return{
            showBooks : true,
            title: 'The Final Empire',
            age: 10
        }
    },
    methods: {
        toggleHideBooks(){
            this.showBooks = !this.showBooks
        },

        handleEvent(){
            console.log('event')
        }

    },
})

app.mount('#app')