console.log(Vue);

const app = Vue.createApp({/* backtick ALT + 96*/
 

   methods:{
        cambiarMensaje(){
            this.mensaje="Nuevo Mensaje";
            this.edad=30;
        }
   },
   data(){
    return{
        mensaje: 'Hola mundo PWeb',
        edad: 35
    }
   }
})

app.mount('#myApp')