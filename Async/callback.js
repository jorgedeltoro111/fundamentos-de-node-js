function hola(nombre, callback){
    console.log('Hola soy una funcion asincrona');
    setTimeout(function () {
        console.log(`Hola soy ${nombre}`);
        callback();
    }, 3000)
}

function despedida(nombre, otroCallback){
    setTimeout(function(){
        console.log(`Hasta la proxima ${nombre}`);
        otroCallback();
    }, 3000)
}

console.log('iniciando proceso . . .');

/*Se pasa como parametro una funcion a la funcion 'soyAsincrono' y esta se baja a ejecutar dentro de nuestro
setTimeout de nuestra funcion para dar un ejemplo de asincronia y de que termino del proceso dentro de dicha
funcion*/

hola('Jorge', function () {
    despedida('Jorge', function (){
        console.log('terminando proceso');
    })
});
//una callback es una funcion pasada a otra funcion como parametro