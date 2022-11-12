console.log(Vue)
const app = Vue.createApp({
    // template: `
    
    // `
    data(){
        return{
            quote: "I'm Batman",
            author: "Bruce Wayne",
        }
    },

    methods: {
        changeQuote( event ){
            // console.log("Hola mundo")
            // console.log(event)
            this.quote = "Spiderman"
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
    
})
app.mount('#myApp')