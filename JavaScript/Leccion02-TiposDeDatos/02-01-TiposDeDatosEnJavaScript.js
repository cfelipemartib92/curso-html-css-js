/*Comentario de varias lineas
    Ejemplos de tipos de datos en JS*/

//Tipo de dato string
    var nombre ="Felipe";
    console.log(typeof nombre);
    console.log(nombre);

    nombre=10;
    console.log(typeof nombre);

//Tipo de dato numerico
    var numero =1000;
    console.log(numero);

//Tipo de dato objet - objeto
    var objeto ={
        nombre: "Juan",
        apellido: "perez",
        telegono: "3137482577"
    }
    console.log(objeto);
    console.log(typeof objeto);

    var object ={
        nombre:"Dios",
        apodo:"Papi",
        Poder:"Infinito"
    }
    console.log(object);

//Tipo de dato booleano (true/false)

    var bandera = false;
    console.log(bandera);
    console.log(typeof bandera);

//tipo de datos funciones - function
    function mifuncion(){}
    console.log(mifuncion);
    console.log(typeof mifuncion);

//tipo de dato Symbol
    var simbolo =Symbol("Mi simbolo");
    console.log(simbolo);
    console.log(typeof simbolo);

//tipo de dato clase es una funcion
    class persona{
        constructor(nombre,apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    console.log(persona)
    console.log(typeof persona);

//Tipo de dato undefined
    var x;
    console.log(x);
    console.log(typeof x);

    x=undefined;
    console.log(x);
    console.log(typeof x);

//null = ausencia de valor
    var y=null;
    console.log(y);
    console.log(typeof y);

// Arrays - arreglos tipo object
    var autos =['MBW','Audi','Volvo', '472'];
    console.log(autos);
    console.log(typeof autos);

//Valores vacios sería undefined o valor vacio
    var z = '';
    console.log(z);
    console.log(typeof z);