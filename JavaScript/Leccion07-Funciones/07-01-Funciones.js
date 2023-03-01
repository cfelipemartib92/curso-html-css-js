//Funcion codigo reutilizable

        /*Hoisting - funciona en cualquier parte del codigo 
        MiFuncion(3,5);*/

    //Se puede llamar cuantas veces lo necesitemos
    //Mejores practicas con camello
        //() se agregan los ARGUMENTOS de la funcion (info de entrada-opcionales,)
    
    //Declaración función (luego se puede llamar)
    function MiFuncion(a,b){
        //cuerpo de la funcion
        console.log("Suma: "+(a+b));
    }

    //Se tiene que llamar la función para que se ejecute
        //Se agregan los valores para a y b
    MiFuncion(2,3);
    MiFuncion(4,7);
    // --Hoisting se peude llamar desde cualquier parte del programa - la declarara y funciona)

//Return el valor de la suma
    function funcion2(a,b){
        console.log(arguments.length);//son a y b=2 (solo dentro de la funcion)
        return a+b;
    }

    let resultado= funcion2(2,3);
    console.log(resultado);

//Funciones de tipo expresión JS
    //declaración de una función de tipo expresión
    let sumar=function(c,d){return c+d};

    resultado= sumar(1,2);
    console.log(resultado);

//Funciones de tipo self invoking - se llama a si misma - no reutilizable
    (function(a,b){
        console.log('Ejecutando la funcion: '+(a+b));
    })(3,4);

//Funciones como objetos
    var miFuncionTexto= MiFuncion.toString();
    console.log(miFuncionTexto);

//Funciones TIPO FLECHA
    //1.Es más recomendable en func flecha
    //2.En lugar de usar llaves usamos flecha
    //3.No necesita el return
    const SumarFuncTpoFlecha = (a,b) => a * b ;
    resultadoFlecha= SumarFuncTpoFlecha(2,5);

    console.log(resultadoFlecha);

//Parametros y argumentos en JS
    //Parametros-ejemplo: function (a,b "Estos son los PARAMETROS=las variables")
    //Argumentos-ejemplo: function (2,5 "Estos son los ARGUMENTOS=los valores") 
    let sumar2=function(c=4,d=5){//por default se podría pasar los valores (c=4,d=5)
        arguments[0]; //esto es un arreay/arreglo 
        arguments[1]; //imprimir los valores
        console.log(arguments[0]);
        console.log(arguments[1]);
        console.log(arguments[2]); //se pueden agregar más argumentos-no necesitan coincidir 
        return c+d+arguments[2];
    };

    resultado= sumar2(3,6,7);//se peude agregar otros valores para cambiar por default (2,5)
    console.log(resultado);



//Ejemplo sumar todos los argumentos
    let resultado2 = sumartodo(5,4,13,10,9);
    console.log(resultado2);

    function sumartodo(){
        let suma3=0;
        for(let i=0; i<arguments.length;i++){
            suma3+=arguments[i];
        }
        return suma3;
    }


//Paso por valor y por referencia en JS - usar tipos que no son objetos num-bool
    //PRIMITIVOS - NO SE PUEDEN AJUSTAR
    let xy=10; //valor primitivo - no propiedades ni metodos a este valor
                //objeto tiene atributos y metodos
    function cambiarValor(aa){
        aa=20;
        return;
    }

    cambiarValor(xy);//se le está pasando el valor de 10
    //no sufrio ningun cambio al ser un valor prmimitivo
    console.log(xy);
    //Se hizo un paso por valor
   // console.log(aa); = es un argumento por lo que se destruye al no usarse en la funcion 

//PASO POR REFERENCIA -SI SE PUEDE AJUSTAR LOS ATRIBUTOS
    //Creamos un objeto
    const persona={//añadir atributos a objeto
        nombre: 'Juan',
        apellido: 'Perez'
    }
        console.log(persona);

    //definir un metodo
    function cambiarValorObjeto(p1)/*parametro*/{
        p1.nombre ='Carlos';/*.argumento.atributo=ajuste*/
        p1.apellido='Lara';
    }
        //las variables o parametros existen solo mientras se ejecuta un metodo

    //Ejecutar el metodo para cambiar la info del objeto
    //PASO POR REFRENCIA
    cambiarValorObjeto(persona);
        console.log(persona);
    

//EJEMPLO - EJERCICIO
    //1.
    let exe = function(f,g){
        console.log(arguments[0]);
        console.log(arguments[1]);
        return f/g;
    };

    equal=exe(1,2);
    console.log(equal);

//2.
    const exe1 = (f,g)=>f/g;
    equal1=exe1(1,2);
    console.log(equal1);
    
