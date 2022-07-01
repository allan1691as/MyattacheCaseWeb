const typed = new Typed('.typedd',{
    strings: [
        
        '<i class="descrip">I am { Allan Amador}</i>',
        '<i class="descrip">I am a Systems engineer </i>',
        '<i class="descrip">and a passionate Web developer</i>'],
        typeSpeed:75,
        startDelay:500,
        backSpeed:75,
        smartBackspace:true,
        shuffle:false,
        backDelay:1500,
        loop:true,
        loopCount:false,
        showCursor:true,
        cursorChar:'|',
        //contentType:'html',// 'html' o 'null' para texto sin formato

    });


    let animado = document.querySelectorAll(".cont-skils");

function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for(var i=0; i < animado.length; i++){
      let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado -400 < scrollTop){
            animado[i].style.opacity= 1;
            animado[i].classList.add("mostrarArriba");
        }
    }
}
window.addEventListener('scroll',mostrarScroll);