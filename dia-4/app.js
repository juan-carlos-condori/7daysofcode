function adivinaElNumero() {
let numeroSecreto = Math.floor(Math.random() * 11);
let intentos = 3;
while (intentos > 0) {
    let numero = parseInt(prompt(`Adivina el número entre 1 y 10, te quedan ${intentos} intentos`));
    if(numero === numeroSecreto) {
        alert('¡Felicidades acertaste el número!');
        return;
    } else {
        alert('No acertaste, Intenta de nuevo')
    }
    intentos--;
}
alert(`Se acabaron los intentos. El numero secreto fue: ${numeroSecreto}`);
}

adivinaElNumero();  
