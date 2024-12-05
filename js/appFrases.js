
const frases = [
    {frase:'El que madruga Dios le ayuda',Autor:'Pepito Perez'},
    {frase:'Si el rio suena es porque piedras trae',Autor:'Juan Palomino'},
    {frase:'El que mucho abarca poco aprieta',Autor:'Jhon Tevez'},
    {frase:'Mas vale pajaro en mano que ciento volando',Autor:'Alexis Canada'},
    {frase:'Perro que ladra no muerte',Autor:'Juan Tevez'},
    {frase:'Los saposs mueren aplastados',Autor:'Alexis Texas'}
]



const app = Vue.createApp({/* backtick ALT + 96*/


    methods: {
        
    },
    data() {
        return {
            listafrases:frases
        }
    }
})

app.mount('#myApp')