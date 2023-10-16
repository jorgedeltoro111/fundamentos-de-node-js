function hola(nombre, callback){
    console.log('Hola soy una funcion asincrona');
    setTimeout(function () {
        console.log(`Hola soy ${nombre}`);
        callback();
    }, 3000)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('bla bla bla');
        callbackHablar();
    }, 2000)
}

function despedida(nombre, otroCallback){
    setTimeout(function(){
        console.log(`Hasta la proxima ${nombre}`);
        otroCallback();
    }, 3000)
}

console.log('iniciando proceso . . .');

/*como evitar el callbackHell.js*/
/*
hola('Jorge', function () {
    hablar(function(){
        hablar(function(){
            despedida('Jorge', function (){
                console.log('terminando proceso');
            });
        });
    });
});*/

function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function (){
            conversacion(nombre, --veces, callback);
        })
    }else{
        despedida(nombre, callback);
    }
}

hola('Jorge', function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado');
    });
});
