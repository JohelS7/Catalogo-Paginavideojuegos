var reproductor = videojs('fm-video', {
    fluid: true 
});

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
    carruselSenua("#nuevo","#juego-nuevo","#flecha-izquierda","#flecha-derecha","#indc");
    carruselSenua("#proximo","#juego-proximo","#flecha-izquierda2","#flecha-derecha2","#indc2");
    carruselSenua("#top","#juego-top","#flecha-izquierda3","#flecha-derecha3","#indc3");
    
});