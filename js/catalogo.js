'use strict'
window.addEventListener('load',function(){
    function carruselSenua(idseccion, juegoid,flechaizq,flechader,indi){
    var fila = document.querySelector(idseccion);
    var juegos = document.querySelectorAll(juegoid);

    var flechaIzquierda = document.querySelector(flechaizq);
    var flechaDerecha = document.querySelector(flechader);

    //Evento para la flecha derecha
    flechaDerecha.addEventListener('click', function(){
        fila.scrollLeft += fila.offsetWidth;
        var indicadorActivo = document.querySelector( indi+".indicadores .activo");
        if(indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    //Evento para la flecha izquierda
    flechaIzquierda.addEventListener('click', function(){
        fila.scrollLeft -= fila.offsetWidth;
        var indicadorActivo = document.querySelector(indi+".indicadores .activo");
        if(indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    //Paginas
    var numeroPaginas = Math.ceil(juegos.length / 5);
    for(let i =0; i<numeroPaginas;i++){
        var indicador = document.createElement('button');
        if(i==0){
            indicador.classList.add('activo');
        }
        document.querySelector(indi).appendChild(indicador);
        indicador.addEventListener('click',function(e){
            fila.scrollLeft = i*fila.offsetWidth;
            document.querySelector(indi+".indicadores .activo").classList.remove('activo');
            e.target.classList.add('activo')
        });
    }
    //hover
    juegos.forEach(function(juego){
        juego.addEventListener('mouseenter', function (e) {
            var elemento = e.currentTarget;
            setTimeout(function () {
                   juegos.forEach(juego => juego.classList.remove('hover') ) ;
                   elemento.classList.add('hover');
            });
        });
    });
    fila.addEventListener('mouseleave',function () {
        juegos.forEach(juego => juego.classList.remove('hover') ) ;
     })
    }
    carruselSenua("#indie","#juego-indie","#flecha-izquierda","#flecha-derecha","#indc");
    carruselSenua("#accion","#juego-accion","#flecha-izquierda2","#flecha-derecha2","#indc2");
    carruselSenua("#depor","#juego-depor","#flecha-izquierda3","#flecha-derecha3","#indc3");
    carruselSenua("#estra","#juego-estra","#flecha-izquierda4","#flecha-derecha4","#indc4");
    carruselSenua("#lucha","#juego-lucha","#flecha-izquierda5","#flecha-derecha5","#indc5");
    carruselSenua("#shooter","#juego-shooter","#flecha-izquierda6","#flecha-derecha6","#indc6");
    carruselSenua("#carrera","#juego-carrera","#flecha-izquierda7","#flecha-derecha7","#indc7");
    carruselSenua("#aventura","#juego-aventura","#flecha-izquierda8","#flecha-derecha8","#indc8");
});