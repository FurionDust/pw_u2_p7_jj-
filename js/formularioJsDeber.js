const personas=[]
    
const app = Vue.createApp({

    methods: {
        agregarPersona(){
            console.log(this.nombre);
            console.log(this.apellido);
            console.log(this.hobbie);
            console.log(this.lugarNacimiento);
        
            const nuevaPersona ={

                nombre:this.nombre,
                apellido:this.apellido,
                hobbie:this.hobbie,
                lugarNacimiento:this.lugarNacimiento
            }

            this.listaPersonas.unshift(nuevaPersona);

            this.nombre = null,
            this.apellido = null,
            this.hobbie = null,
            this.lugarNacimiento= null;
        }

    },
    data() {
        return {
            listaPersonas: personas,
            nombre: null,
            apellido: null,
            hobbie: null,
            lugarNacimiento: null
        }
    }
})

app.mount('#myApp')