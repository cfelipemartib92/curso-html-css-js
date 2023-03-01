
//Definir una funcuioin corta
    //miFuncion();    - Hoisting
    
    function miFuncion(){
        console.log('Saludos desde mi funcion');
    }

    miFuncion();
    //Le sirve el hoisting

//Transformación de la función a un objeto que tiene un metodo 
    
    let miFuncion2 = function(){
        console.log('Saludos desde mi funcion2');
    }

    miFuncion2();

//Transformaci´çon a funcion flecha

    //No aplica Hoistiung en funciones flecha //miFuncionFlecha();

    //let permite modificar la referencia 
    let miFuncionFlechaLet = () =>{console.log('Saludos desde mi funcion Felcha Let')};

    miFuncionFlechaLet();
    
    //const no permite modificar ninguna referencia - MAS COMUN - Funciones no se cambian generalmente
    let miFuncionFlechaConst = () =>{console.log('Saludos desde mi funcion Felcha Const')};

    miFuncionFlechaConst();

//FUNCION FLECHA SIMPLIFICADO

    const miFuncionFlechaCorta = () => console.log('Saludos desde mi funcion Felcha Corta');
        //No necesita{} si es de una sola linea
    miFuncionFlechaCorta();

//FUNCION FLECHA REGRESA UN VALOR

    const saludar = () => {
        return 'Saludos impresos desde funcion flecha'
    }
    //Mandamos a imprimir
    console.log(saludar());

    //Una sola linea de código
        const saludarCorto = () => 'Saludos impresos una sola linea de codigo';
        //Mandamos a imprimir
        console.log(saludarCorto());
    //Regresar un Objeto con funcion flecha
        const regrsarObjeto =()=>({nombre: 'Juan',apellido:'Lara'});
        console.log(regrsarObjeto());
    
//RECIBIR PARAMETROS FUNCION FLECHA
    const funcionConParametros = (mensaje)=>console.log(mensaje);
    funcionConParametros('Saludos con parametros');
    //Si sólo tiene un parametro se le pueden quitar los ()
    const funcionConParametros2 = mensaje =>console.log(mensaje);
    funcionConParametros2('Parametros sin parentesis');
    //Funcion con varios parametros
    const funcionConVariosParametros = (op1,op2)=> op1 + op2;//si mas complicado usar {}
    console.log(funcionConVariosParametros(1,2));
    //funcion compleja y varios parametros
    const funcionComplejaConVariosParametros=(op1,op2)=>{
        let resultado = op1+op2;
        return `El Gran Resultado Es: ${resultado}`;
    } 
    console.log(funcionComplejaConVariosParametros(5,5));

    //Funcion clasica  
        const funcionConParametrosClasica= function(mensaje){
            console.log(mensaje);
        }
        funcionConParametrosClasica('La mera funcion clasica');
    //Funcion re clasica
        function funcionConParametrosReClasica(mensaje){
            console.log(mensaje);
        }
        funcionConParametrosReClasica('La mera funcion reclasica');


    