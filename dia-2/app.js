let nombre = prompt('¿Cuál es tu nombre?');
console.log(nombre);

let anios = prompt('¿Cuántos años tienes?');
console.log(anios);

let lenguaje = prompt('¿Qué lenguaje de programación estás estudiando?');
console.log(lenguaje);

alert(`Hola ${nombre}, tienes ${anios} años y ya estás aprendiendo ${lenguaje}!`);


let pregunta =  Number(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));
console.log(typeof(pregunta))


if (pregunta == 1) {
    alert('¡Muy bien! Sigue estudiando y tendrás mucho éxito.')
} 
if (pregunta == 2){
    alert('Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?')
}