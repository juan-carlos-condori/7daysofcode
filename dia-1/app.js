let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'

/* if (COMPARAR numeroUn y stringUn) {

  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')

} */ 

if (numeroUn == stringUn) {
    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes');
    console.log('nummeroUn es de tipo:  ',typeof(numeroUn), ',', 'valor = ',numeroUn);
    console.log('stringUn es de tipo: ', typeof(stringUn), ',', 'valor = ',stringUn);
    
} else {
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor');
}

/** if (COMPARAR numeroTreinta y stringTreinta) {

  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')

} else {

  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')

} */

  if (numeroTreinta === Number(stringTreinta)) {
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
    console.log('nummeroTreinta es de tipo:  ',typeof(numeroTreinta), ',', 'valor = ',numeroTreinta);
    console.log('stringTreinta es de tipo: ', typeof(Number(stringTreinta)), ',', 'valor = ',Number(stringTreinta));
  } else {
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
  }

  /**if (COMPARAR numeroDiez y stringDiez) {

  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')

} else {

  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')

} */

  if (numeroDiez == stringDiez) {
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes');
    console.log('nummeroDiez es de tipo:  ',typeof(numeroDiez), ',', 'valor = ',numeroDiez);
    console.log('stringDiez es de tipo: ', typeof(stringDiez), ',', 'valor = ',stringDiez);
  } else {
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
  }
