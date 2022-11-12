const displayVarlorAnterior = document.getElementById("valor-anterior")
const displayVarlorActual = document.getElementById("valor-actual")
const botonesNumero = document.querySelectorAll('#numero')
const botonesOperadores = document.querySelectorAll('#operador')
const display = new Display(displayVarlorAnterior,displayVarlorActual);

botonesNumero.forEach(boton =>{
    boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener("click", () => display.computar(boton.value))
})


