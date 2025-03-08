function listaCompras() {
    let continuar = "si";
    let tipoAlimento = 0; 
    let nombreAlimento = '';
    let frutas = [];
    let lacteos = [];
    let congelados = [];
    let dulces = [];
    let pregunta = prompt('deseas agregar un alimento a tu lista de compras, responder con "sí" o "no"');
    while (pregunta === continuar) {
        tipoAlimento = parseInt(prompt('¿Que tipo de alimeto desea agregar, digite 1 para frutas, 2 para lácteos, 3 congelados y 4 para dulces?'));
        if (tipoAlimento === 1) {
            nombreAlimento = prompt('Escriba el nombre de la fruta')
            frutas.push(nombreAlimento);
        }
        if (tipoAlimento === 2) {
            nombreAlimento = prompt('Escriba el nombre del lácteo')
            lacteos.push(nombreAlimento);
        }
        if (tipoAlimento === 3) {
            nombreAlimento = prompt('Escriba el nombre del congelado')
            congelados.push(nombreAlimento);
        }
        if (tipoAlimento === 4) {
            nombreAlimento = prompt('Escriba el nombre del dulce')
            dulces.push(nombreAlimento);
        }
        pregunta = prompt('deseas agregar un alimento a tu lista de compras, responder con "sí" o "no"');
    }    
    alert(`Frutas:  ${frutas}`);
    alert(`Lacteos: ${lacteos}`);
    alert(`Congelados: ${congelados}`);
    alert(`Dulces: ${dulces}`);
}

listaCompras();

