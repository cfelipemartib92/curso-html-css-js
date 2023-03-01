
//Usa modo stricto
"use strict"

//Usar try-catch para capturar el error
    //try{}catch{}finally - try{lo que probamos}catch{el error}finally{lo que haga pra marcar} 
//TRY CON ERROR
        try{
            x=10;
            //usar clausula throw
            throw 'mi error';
        }
        catch(error){
                //Muestra el error con uin objeto
            console.log(error);
        }

//TRY BUENO
        try{
            let y=10;
            throw 'mi error';
        }
        catch(error){
                //No hay errores, se mandó bien la variable-objeto
            console.log(error);
        }

//Try ERROR con un metodo
        try{
            miFuncion();
        }
        catch(error){
                //Muestra el error de un metodo
            console.log(error);
        }

        //bloque finally -siempre se ejecuta
        finally{
            console.log('termina la revisión de errores');
        }

// x=10;//agregar var/let/const
        console.log('Continuamos...');
//Para arreglar los errores usamos la linea try-catch

//EJEMPLO 2 VALIDACIÓN NÚMERO -- reportando errores con throw
        let resultado=-7;
        try{
            //p=10;
            if ( isNaN(resultado))throw'No es un número';
            else if (resultado==='')throw 'Es cadena vacia';
            else if (resultado>=0)throw 'valor positivo';
            else if (resultado<=0)throw 'valor negativo';
        }
        catch(error){
            console.log(error);
            console.log(error.name);
            console.log(error.message);
        }
        finally{
            console.log('Termina revision de errores')
        }