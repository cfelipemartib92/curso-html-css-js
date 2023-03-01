//Condició de sentencia if else

let condicion =false;

if(condicion){
    console.log("Condición verdader");
}
else{
    console.log("Condición falsa");
}

//Ejemplo de numero a texto
    let numero=1;

    if (numero==1){
        console.log("Número uno");
    }
    else if(numero==2){
            console.log("Número dos");
        }
            else if(numero==3){
                console.log("Número tres");
            }
                else{
                    console.log("Número desconocido");
                }
// Ejemplo estación del año

    let mes=6;
    let estación;

        if (mes==1 ||mes ==2 ||mes ==12){
            estación ="Invierno";
        }
        else if (mes==3 ||mes ==4 ||mes ==5){
            estación ="Primavera";
        }
        else if (mes==6 ||mes ==7 ||mes ==8){
            estación ="Verano";
        }
        else if (mes==9 ||mes ==10 ||mes ==11){
            estación ="Otoño";
        }
        else{
            estación ="Valor incorrecto";
        }

    console.log(estación);

//Ejercicio calculo hora del día
    let hora="14";
    let mensaje;

    if (hora>=6 && hora<=11){
        mensaje="Buenos días";
    }
    else if (hora>=12 && hora<=18){
        mensaje="Buenas tardes";
    }
    else if (hora>=19 && hora<=24){
        mensaje="Buenas noches";
    }
    else if (hora>=0 && hora<6){
        mensaje="Durmiendo";
    }
    else{
        mensaje="Valor incorrecto";
    }

    console.log(mensaje);

//Estructura SWITCH
    let num=1;
    let numTexto="valor desconocido";

    switch(num){
        case 1:
            numTexto="Número uno";
            break;
        case 2:
            numTexto="Número dos";
            break;
        case 3:
            numTexto="Número tres";
            break;
        case 4:
            numTexto="Número cuatro";
            break;
        default:
            numTexto="Caso no encontrado";
            break;
    }

    console.log(numTexto);

//Ejercicio estaciones del año
    mes=10;
    let estacion= "estacion desconocida";

    switch(mes){
        case 1: case 2: case 12:
            estacion="Invierno";
            break;
        case 3: case 4: case 5:
            estacion="Primavera";
            break;
        case 6: case 7: case 8:
            estacion="Verano";
            break;
        case 9: case 10: case 11:
            estacion="Otoño";
            break;
        default:
            estacion="Valor incorrecto"; 
    }

    console.log(estacion);

//COMPARACIÓN ESTRICTA AL USAR SWITCH
    // Comparación de tipo estricto - tiene que ser num y string
