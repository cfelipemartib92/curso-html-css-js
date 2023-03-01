//Ciclo while
    //Variable contador
    let contador =0;
    while(contador<=3){
        console.log(contador);
        contador++;
    }

    console.log("Fin ciclo while");

//Ciclo do while
    //Do - hace el bloque y luego while para loop o break
    do{
        console.log(contador);
        contador++;
    }while(contador<6);
    console.log("Fin ciclo while");
    console.log(contador);

//Ciclo for 
    for ( let cont=0; cont<3; cont++){ // {variables, condición, incremento}
        console.log(cont);
    }
    console.log("Fin ciclo for");
//Palabra Break
    //print # pares de 0 a 10
    for(let conta=0; conta<=10; conta++){
        if (conta%2==0){
            console.log(conta);
            break;//para terminar con el primer número que se encuentre
        }        
    }
    console.log("Fin del siclo for");

//Palabra continue

inicio:
    for (let contad=0; contad<=10;contad++){
        //No Imprimir los no pares
        if(contad%2!==0){
            continue inicio;//ejectuar siguiente interación ciclo for (ir a siguiente interación)
            //ignorar este de aquí para aplicar el otro
        }
        else{
            console.log(contad);
        }
    }

//Etiquetas en JS - uso de go to no recomendada

