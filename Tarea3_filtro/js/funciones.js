Vue.filter('alReves', (valor) => valor.split('').reverse().join(''));

new Vue({
    el: '#cont',
    data:{
        busqueda:'',
        totales:0,
        minimo:5,
        juegos:[{
            titulo: 'left dead',
            genero: 'terror',
            puntuacion:10,
        },
        {
            titulo: 'fornite',
            genero: 'Batalla',
            puntuacion:9,
        },
        {
            titulo: 'blur game',
            genero: 'carreras',
            puntuacion:7,
        },
        {
            titulo: 'god of War',
            genero: 'historia',
            puntuacion:10,
        },
        {
            titulo: 'Call of Duty: Warzone',
            genero: 'Combate',
            puntuacion:8,
        },
        ]
    },
    computed:{
        mejoresJuegos(){
            return this.juegos.filter((juego)=>juego.puntuacion >= this.minimo);
        },

        buscarJuego(){
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        },
        coincidencias(){
            return this.buscarJuego.length;
        }
    }
});