let respuesta;
let primerNumero;
let segundoNumero;
let operacion;
let bandera = "1";
 /** Función Calculadora */
function calculadora(){
    while (bandera = "1") {
        primerNumero = parseFloat(prompt('Ingrese el primer número'));
        segundoNumero = parseFloat(prompt('Ingrese el segundo número'));
        operacion = prompt('Introduce un signo aritmético (+,-,*,/)');
        switch (operacion) {
            
            case "+":
                sumar(primerNumero, segundoNumero);        
                break;
            case "-":
                restar(primerNumero, segundoNumero);
                break;
            case "*":
                multiplicar(primerNumero, segundoNumero);
                break;
            case "/":
                dividir(primerNumero, segundoNumero);
                break;
            default:
                break;
        }    
        bandera = prompt('¿Desea relizar otra operación aritmetica?, digíte "1" para otra operacion y "2" para terminar')
        if (bandera != "1") {
            alert('Hasta la próxima...')
            return;
        }
    }
}
calculadora();


/** Funciones */
function sumar(numero1, numero2) {
    respuesta = numero1 + numero2;
    alert(`La suma es: ${respuesta}`);
    return;
}
function restar(numero1, numero2) {
    respuesta = numero1 - numero2;
    alert(`La resta es: ${respuesta}`);
    return;
}
function multiplicar(numero1, numero2) {
    respuesta = numero1 * numero2;
    alert(`La multiplicación es: ${respuesta}`);
    return;
}
function dividir(numero1, numero2) {
    if (numero2 > 0) {
        respuesta = numero1 / numero2;
        alert(`La división es: ${respuesta}`);
        return;   
    } else {
        alert('no es posible realizar la división...')
    }
}
