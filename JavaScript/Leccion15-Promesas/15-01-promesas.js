//PROMESAS
    /*PROMISE< .then() or .catch() > PRIMISE  */
    //dos parametros tipo callback - en caso resuelta en caso de que no
    let miPromesa = new Promise((resolved,rejected)=>{

        let expresion = false/*true*/;
        if (expresion)
            resolved('Resolvió correcto');
        else
            rejected('Se produjo un error');
    });

    //variable.then(metodo)(se manda a llamar la variable promesa), si es verdadero recibe parametro valor, falso la recibe parametro error
    
    /*EJ 1 LINEA*/miPromesa.then(valor=>console.log(valor),error=>console.log(error));

    /*EJ CON CATCH*/
    miPromesa
    .then(correcto=>console.log(correcto))
    .catch(erroneo=>console.log(erroneo));

    //USO DE TIMEOUT CON PROMESAS
    let promesa = new Promise ((resolved)=>{
        console.log('Inicio promesa');
        setTimeout(()=>resolved('saludos con promesa y timeout'),3000);
        console.log('fin promesa');
    }); 

    promesa.then(valor=>console.log(valor));

//ASYNC FACILITA USOP DE PROMESAS, ASYNC ANTES DE METODO ESTÁ AOBLIGADO A HACER UNA PROMESA

    //Async indica que una funciñón regreesa una promesa
    async function miFuncionConPromesa(){
        return 'saludos con promesa y async';
    }

    miFuncionConPromesa().then(valor=>console.log(valor));

//Palabra await y async
    //AWAIT ESPERA RESULTADO DE UNA PROMESA
    //ASYNC CON AWAIT
    async function funcionPromesaAwait(){
        let LaPromesa=new Promise(resolved => {
            resolved('Promise con await')
        });

        console.log(await LaPromesa);
    }

    funcionPromesaAwait();

//PROMESAS + ASYNC + AWAIT + SETTIMEOUT -- sin ASYNC NO SIRVE AWAIT
    async function funcionPromesaAsyncAwaitSetTimeout(){
        console.log('inicio hiper promise');
        let thePromise = new Promise(resolved=>{
            setTimeout(()=>resolved('Super Hiper Mega Promesa'),3500);
        });
        console.log(await thePromise);
        console.log('Fin hiper promise');
    }

    funcionPromesaAsyncAwaitSetTimeout();