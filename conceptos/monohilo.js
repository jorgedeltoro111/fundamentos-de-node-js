//Si no tenemos cuidado al momento de desarrollar podemos provocar 
// bloqueos en el event loop y por ende en el monohilo de node.js
//En el siguiente ejemplo podremos observar que al entrar al if y tratar de realizar
//una operacion con una variable inexistente vamos a provocar un error.
console.log('Hola node');
let i = 0;
setInterval(function(){
    console.log(i);

    if(i === 5){
        let z = r + i;
    }

    i++;
}, 1000);
//si agrego una instruccion al final podemos observar el asincronismo
console.log('Final del programa');