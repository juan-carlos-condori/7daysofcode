const listaTecnologias = [];
let cantidadTecnologias = 0;

while(cantidadTecnologias == 0) {

    let area = prompt('¿Que área seguira? digita 1 si es Front-End y 2 si es Back-End');

    if (area == 1) {
        let tecnologia = prompt('¿Que quiere aprender en Front-End? digita 3 si es React 4 si es Vue');
        if (tecnologia == 3) {
            alert('Aprendera React');
            listaTecnologias.push("React");
        } 
        if (tecnologia == 4) {
            alert('Aprendera Vue');
            listaTecnologias.push("Vue");  
        }
    } 

    if (area == 2) {
        let tecnologia = prompt('¿Que quiere aprender en Back-End? digita 5 si es C# 6 si es Java');
        if (tecnologia == 5) {
            alert('Aprendera C#');
            listaTecnologias.push("C#");
        } 
        if (tecnologia == 6) {
            alert('Aprendera Java'); 
            listaTecnologias.push("Java"); 
        }
    }

    let continuarEligiendo = prompt('¿Desea elegir mas herramientas? digita "si" para continuar y "no" para terminar');
    if(continuarEligiendo == "si") {
        cantidadTecnologias = 0;
    } else {
        cantidadTecnologias = -1;
    }

}


    alert(`Aprendera: ${listaTecnologias}`);
    
