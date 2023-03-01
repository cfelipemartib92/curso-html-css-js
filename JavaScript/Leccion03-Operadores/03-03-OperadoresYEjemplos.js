//Operadores de asignación

let a= 1;

//operador asignación compuesto
a+=3; //a=a+3
console.log(a);

a-=2; //a=a-2
console.log(a);

a*=3;
console.log(a);

a/=2;
console.log(a);

a%=1;
console.log(a);

a+=3;
console.log(a);

a**=2;
console.log(a);



/*
*= multiplicación
/= division
%= modo
**= expònente
*/

//Operadores de comparación 
    //preguntar si dos valores son iguales o no

        let b=3, c=2, d="3";

        let z= b==c; // se revisa el valor sin importar el tipo
        //Le pregunta si es verdad, la rta es falso o true
        console.log(z);
        //z = false

    //Comparación de manera estricta 
        z=b===d;//revisa si los valores son iguales y los tipos (num y string)
        console.log(z);

//Operador distinto A
        let Z=a!=c; //Es distinto? sin tipo
        console.log(Z);

        Z= 3!=3;
        console.log(Z);

        Z=b!==d;
        console.log(Z);

//Operadores relacionales
        Z=c<=b;
        console.log(Z);

        Z=b>=d;
        console.log(Z);

//Ejercicio número par
        a=10;

        if ((a%2)==0){
            console.log("Es un número par");
        }
        else{
            console.log("Es un número impar")
        }
//Ejercicio si es mayor de edad o no
        let edad=18, adulto=18;

        if(edad>=adulto){
            console.log("Es un adulto");
        }
        else{
            console.log("Es menor de edad");
        }
//Operador AND (&&) en JS
        //&&=AND
        a=5;
        let max=10,min=0;

        if(a>=min && a<=max){
            console.log("Dentro del rango");
        }
        else{
            console.log("Fuera del rango");
        }
//Operador OR (||) en JS
        // ||=OR
        //Puiede un padre ir al juego del hijo (tiene descanso o vacaciones)
        let vacaciones=true, descanso=false;

        if(vacaciones || descanso){
            console.log("El padre puede ir");
        }
        else{
            console.log("El padre no puede ir");
        }
//Operador ternario
        //if else
        let resultado=(1<2)?"así es mijito":777;//tiene tres partes
                    //Bool(v/f) - v - f
        console.log(resultado);

        //un numero es par?
        let numero=9;
        resultado = (numero%2==0)?"es par":"no ser par";
        console.log(resultado);

//Convertir de string a number en JS
        let MiNumero ="18";
        console.log(MiNumero);
        console.log(typeof MiNumero);

        //Volverlo number
        edad=Number (MiNumero);
        console.log(typeof edad);

        if (edad>=18){
            console.log("Puede votar");
        }
        else{
            console.log("Muy joven para votar");
        }

        //Operador ternario
        CapacidadVotación = (edad>=18)?"Puede votar":"No puede votar";
        console.log(CapacidadVotación);

        let l="5";
        console.log(l);
        let ñ= Number(l);
        console.log(typeof ñ);
        console.log(ñ);

//Funcion isNaN - verificar que sea de tipo numero
        let MiNumero1 ="19x";
        console.log(MiNumero1);
        console.log(typeof MiNumero1);

        //Volverlo number
        edad=Number (MiNumero1);
        console.log(edad); //NOT A NUMBER NO SE PUEDE CONVERTIR A#
        console.log(typeof edad);

        //PREGUNTAR SI ESTÁ ALMACENANDO UN VALOR NO NUMERICO 
        if (isNaN(edad)){
            console.log("No es un número");
        }
        else{
            console.log("Es un requetenúmero");
                if (edad>=18){
                    console.log("Puede votar");
                }
                else{
                    console.log("Muy joven para votar");
                }
        }

        //Operador ternario
        if (isNaN(edad)){
            console.log("No es un número");
        }
        else{
            CapacidadVotación = (edad>=18)?"Puede votar":"No puede votar";
            console.log(CapacidadVotación);
        }

//PRECEDENCIA DE OPERADORES EN JS
        let x=5;
        let y=10;
        let k=++x + y--;

        console.log(x);
        console.log(y);
        console.log(k);

        let result = 4+5*6/3
        console.log(result);

        result = (4+5)*6/3;
        console.log(result);
        
        




