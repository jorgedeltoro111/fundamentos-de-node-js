let nombre = process.env.NOMBRE || 'Sin nombre';

console.log(`Hola ${nombre}`);

//Para asignarle un valor desde afuera podemos utilizar el siguiente comando

//NOMBRE=jorge node conceptos/entorno.js

//Pero tambien podemos ponerle una condicion en el caso de que no tenga contenido la 
//variable

/**TODAS LAS VARIABLES DE ENTORNO PONERLAS EN MAYUSCULAS POR ESTANDAR */