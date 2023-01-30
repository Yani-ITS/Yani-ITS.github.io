/*creo un evento que me permite ubicar el texto about me*/
document.getElementById('boton').onclick = function () {
    document.getElementById('about').scrollIntoView();
}

/*evento para volver a la parte supeior del cv*/ 
document.getElementById('inicio').onclick = function arriba(){
    document.documentElement.scrollTop = 0 ;
}