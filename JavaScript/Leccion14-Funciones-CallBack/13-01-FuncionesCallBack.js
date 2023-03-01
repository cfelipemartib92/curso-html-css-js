//Es una funcion que se pasa como parametro a otra funcion 
//y dentro de una funcion se peude llamar otra funcion

function miFuncion1(){
    console.log('Funcion 1');
}

function miFuncion2(){
    console.log('Funcion 2');
}

//Las llamadas se realizan de manera secuencial - en posición del print

miFuncion1();
miFuncion2();

//Funcion tipo Callback

    function imprimir(mensaje){
        console.log(mensaje)
    }
    
    //creamos una función para imprimir mensaje
    function sumar (op1,op2,funcionCallback){
        let respuesta =op1+op2;
        funcionCallback(`Resultado: ${respuesta}`);
    }
    sumar(5,3,imprimir);

//Call back de otra manera
    let imp = function imprimir2(mensaje1){
        console.log(mensaje1);
    }

    //creamos una función para imprimir mensaje
    function sumar2 (op1,op2,funcionCallback2){
        let respuesta1 =op1+op2;
        funcionCallback2(`Resultado: ${respuesta1}`);
    }
    sumar(2,4,imp);

//Sirve para ejecutar procesos de manejra asincrona
//LLAMADAS ASINCRONAS CON USO DE FUNCION setTimeout
    function miFuncionCallBack(){
        console.log('saludo asincrono después de 3 seg')
    }

    setTimeout(miFuncionCallBack,5000/*ejecutar después de 3 segundos*/);
    //otra manera para settimeout
    setTimeout(function(){console.log('saludo asincrono 2')},3000);
    //otra manera con función flecha
    setTimeout(()=>console.log('saludo asincrono 3'),2000);
