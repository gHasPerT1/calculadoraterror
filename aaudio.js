function dibujo(){
    document.getElementById("dibujo").style.display = "block"
   
}

let bailar = new Audio();{
    bailar.src = "./music/baterias.mp3"
   
}

function parar(){
    document.getElementById("dibujo").style.display = "none"
    
}

function alto1(){
    document.getElementById("dibujobaterista").style.display ="none"
}

function alto2(){
    document.getElementById("dibujobaterista2").style.display = "none"
}

function musicaparada(){
    bailar.src = "./music/baterias.mp3"
    bailar.pause()
}


function baterista(){
    document.getElementById("dibujobaterista").style.display="block"
}

function bateris(){
    document.getElementById("dibujobaterista2").style.display = "block"
}
// function dibujo(){
//     document.getElementById("dibujo").style.display = "block"
// }
 
