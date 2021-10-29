const app = new Vue({
    el: '#seccion',

    data:{
        mostrar:false,
        mensaje:'',
        resultados: false,
        numan:0,
        lenguajes:[],
        leng:'',

    },
    methods: {
        muestraPregunta: function(n){
            if(n)
                this.mostrar = true;
                else
                this.mostrar = false;
                this.mensaje = this.mostrar ? '' : 'Gracias por apoyarnos';
        },

        agregar: function(){
            this.lenguajes.push(this.leng);
        },

        muestraResultados: function(){
            this.resultados = !this.resultados;

        },

    },
})