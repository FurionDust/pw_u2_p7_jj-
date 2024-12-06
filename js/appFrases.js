
const frases = [
    { frase: 'El que madruga Dios le ayuda', autor: 'Pepito Perez' },
    { frase: 'Si el rio suena es porque piedras trae', autor: 'Juan Palomino' },
    { frase: 'El que mucho abarca poco aprieta', autor: 'Jhon Tevez' },
    { frase: 'Mas vale pajaro en mano que ciento volando', autor: 'Alexis Canada' },
    { frase: 'Perro que ladra no muerte', autor: 'Juan Tevez' },
    { frase: 'Los saposs mueren aplastados', autor: 'Alexis Texas' }
]


const app = Vue.createApp({

    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.unshift(nuevaFrase);
        },

        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);

            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }

            this.listaFrases.push(nuevaFrase);
        },
        eventoKeyPress({charCode,cancelable,keyCode,key,target}) {
            if (key === 'Enter') {
                console.log('Evento');
                console.log(charCode);
                console.log(cancelable);
                console.log(keyCode);
                console.log(key);

                console.log(target.baseURI);
                this.agregarFraseFinal();


            }
        },
        eventoKeyPressModificador() {
         
            this.agregarFraseFinal();
    }

    },
    data() {
        return {
            listaFrases: frases,
            frase: null,
            //autor: 'sin autor'
            autor: null
        }
    }
})

app.mount('#myApp')
