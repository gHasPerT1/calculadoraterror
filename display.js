class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActaul ='';
        this.valorAnterior = '';
        this.signos = {
            sumar: "+",
            dividir: "÷",
            multiplicar: "x",
            restar: "-",

        }
    }
    borrar(){
        this.valorActaul = this.valorActaul.toString().slice(0,-1);
        this.imprimirValores();
    }
    borrartodo(){
        this.valorActaul = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoOperacion !== "igual" && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActaul || this.valorAnterior;
        this.valorActaul = "";
        this.imprimirValores();


    }
    agregarNumero(numero){
        if(numero === "." && this.valorActaul.includes(".")) return
        this.valorActaul = this.valorActaul.toString() + numero.toString();
        this.imprimirValores();


    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActaul;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;
    }  
    
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActaul = parseFloat(this.valorActaul);
        if( isNaN(valorActaul)  || isNaN(valorAnterior)) return
        this.valorActaul = this.calculador[this.tipoOperacion](valorAnterior,valorActaul);
    }

}