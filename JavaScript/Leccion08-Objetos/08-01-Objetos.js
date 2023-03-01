//El objeto tipo primitivo no tiene variables/propiedades ni tampoco metodos

    let x=10;
    console.log(x.length); //no tiene propiedadaes

//UN OBJETO PUEDE TENER PROPIEDADES Y METODOS

    let persona = {
        nombre:"Felipe",
        apellido:"Martinez",
        edad: 30,
        email:'fmarti@hotmail.com'
    } //se crea un objeto en memoria el cual tiene una referencia (codigo)

    //PROPIEDADES DEL OBJETO
    console.log(persona.nombre);
    console.log(persona.apellido);
    console.log(persona.edad);
    console.log(persona.email);
    console.log(typeof persona);
        //IMPRIMIR TODO EL OBJETO
        console.log(persona);
    
    //AGREGAR METODOS AL OBJETO (FUNCION = METODO)
    //-Ejemplo: Agregar metodo para imprimir nombre completo

    let persona2={
        nombre:"Sebastian",
        apellido:"Martinez",
        edad:28,
        email:"smartib@gmail.com",
        //Metodo funcion de tipo expresión
        nombreCompleto: function(){
            //operador this que apunta a las propiedades del objeto padre
            return this.nombre + ' ' + this.apellido;
        }
    }

    //IMPRIMIR LA PROPIEDAD METODO DEL OBJETO
    console.log(persona2.nombreCompleto());

//OTRA MANERA CREACION OBJETOS EN JS
    //Usamos new para separar en nuevo espacio en memoria
    let persona3 =new Object();
    persona3.nombre='Carlos';
    persona3.apellido='Betancurt';
    persona3.direccion='Poblado 16';
    persona3.telefono=3154785;

    console.log(persona3.telefono);

//Acceder a propiedades de los objetos - como array o como for in
    console.log(persona3['apellido']);

    //Acceder usando un ciclo for in
    for (Nompropiedades in persona3 )/*Recorrer propiedades in object persona3 */{
        console.log(Nompropiedades); 
        console.log(persona3[Nompropiedades]);
    }

//Agregar o eliminar propeidades de objeto
    //Agregar
    persona3.ciudad='Pereira';
    console.log(persona3.ciudad);

    //Eliminar propiedades de objeto
    delete persona3.ciudad;
    console.log(persona3.ciudad);

//Distintas formas de imprimir un object en JS
    //En un navegador web no sirve en la wweb
    
    //1. Concatenar cada valor de cada propiedad
    console.log(persona3.nombre+', '+persona3.apellido+', '+persona3.direccion+', '+persona3.telefono);

    //Usando metodo for in
    for( nombrePropiedad in persona3){ /*for variable in nombre de objeto */
        console.log(persona3[nombrePropiedad]);
    }

    //Usando funciones como un array
    let persona3Array = Object.values(persona3);
    console.log(persona3Array); 

    //Usar cadena y metodo json
    let persona3String = JSON.stringify(persona3); //Json maneja objetos - stringyfy convierte todas propiedades en cadena
    console.log(persona3String);

//METODOS GET Y SET para acceder y ajustar propiedades de los objetos
    console.log(persona2.nombreCompleto());
    
    //GET
        let persona4={
            nombre:"Eduardo",
            apellido:"Martinez",
            edad:67,
            idioma: 'es',
            get lang(){
                return this.idioma.toUpperCase();
            },
    //SET
            //Modificar el valor del idioma en mayuscula
            set lang(lang){
                this.idioma=lang.toUpperCase(); //nos aseguramos que el idioma esté setiando en uppercase
            },
            email:"edu@gmail.com",
            get nombreCompleto(){ //USAMOS GET Y YA ES UN METODO GET
                return this.nombre + ' ' + this.apellido;
            }
        }
        console.log(persona4.nombreCompleto);
        console.log(persona4.lang); //recuperar la info en mayuscula
        
        persona4.lang='en';
        console.log(persona4.lang);
        console.log(persona4.idioma); //se almaceno en mayus
    
//-THE BEST WAY- METODO CONSTRUCTOR DE OBJETOS EN JS - LA MEJOR MANERA
        //Nos permite crear varios objetos de tipò persona con sus atributos
    
    //Funcion constructor - EMPEZARLAS CON MAYUS
    //Funcion constructor de objetos de tipo persona
    function Persona(nombre, apellido='Martinez', email='@gmail.com'){
        this.nombre =nombre;//Nombre de la propiedad y del parametro que se está recibiendo
        this.apellido=apellido;
        this.email=email;
        //AGREAR METODOS EN FUNCIONES CONSTRUCTOR
        this.nombreCompleto= function(){
            return this.nombre + ' ' + this.apellido;
        }
    }

    let padre = new Persona('Eduardo','Martinez','umartinez@hotmail.com');
    console.log(padre);
    //Las funciones se tienen que llamar como unciones
    console.log(padre.nombreCompleto());

    let madre = new Persona ('Patricia','Betancurt','pebatorm@hotmail.com')
    console.log(madre);
    console.log(madre.nombreCompleto());

    //CAMBIO EN OBJETO PADRE
    padre.nombre='Uriel';
    console.log(padre);
    console.log(padre.nombreCompleto());

    let hermano = new Persona('Sebastian', 'Martinez','smb@gmail.com');
    console.log(hermano);

//DISTINTAS FORMAS DE CREAR OBJETOS EN JS
    /*1.*/let miObjeto = new Object();//Crear un nuevo objeto - Opcion más formal
          let miObjeto2 = {}; //Opción más breve
    /*2.*/let miCadena1 = new String('Hola'); //Se crea un Objeto de tipo String - formal
          let miCadena2 = 'Hola' //Más sencillo - sintax simplificada
    /*3.*/let miNumero1 = new Number(1); //Sintax formal no recomendable
          let miNumero2 = 2; // Más sencillo
    /*4.*/let miBoolean1 = new Boolean(true); //formal
          let miBoolean2 = true; //sencillo - recomendable
    /*5.*/let miArreglo1 = new Array(3,4);
          let miArreglo2 = [2,3];
    /*6.*/let miConstructor1 = new Function();
          let miConstructor2 = function(){};

//USO DE PROTOTYPE EN JS - AGREGAR PROPIEDADES EN TODOS LOS OBJETOS DE UN TIPO FUERA DEL CONSTRUCTOR
    //Agregar propiedad postal code a todos los objetos tipo persona

    Persona.prototype.postalcode='050021'; //se le agregan a todos

    console.log(padre.postalcode);
    console.log(madre.postalcode);

    //Ajustar propiedad para padre
    padre.postalcode='05022';
    console.log(padre.postalcode);

//USAR METODO CALL - LLAMAR UN OBJETO DENTRO DE UN OBJETO
    let person1 ={
        nombre: 'Juan',
        apellido: 'Perez',
        nombreCompleto: function(){
            return this.nombre + ' ' + this.apellido;
        }
    }

    //creamos otro objeto
    let person2 ={
        nombre: 'Carlos',
        apellido: 'Lara',
        //vamos a reutilizar la funcion nombreCompleto con metodo Call
    }
        
    //Uso de call para usa nombreCompleto de person1 con datos person2
    console.log(person1.nombreCompleto());

    console.log(person1.nombreCompleto.call (person2));

    //Con función call también se pueden pasar argumentos directamente
    let person3 ={
        nombre: 'Luis',
        apellido: 'Osa',
        nombreCompleto: function(titulo,tel){
            return titulo + ' ' + this.nombre + ' ' + this.apellido + ' '+ tel;
        }
    }

    //Agregar call
    let person4 ={
        nombre: 'Dani',
        apellido: 'Dann',
        //vamos a reutilizar la funcion nombreCompleto con metodo Call
    }

    console.log(person3.nombreCompleto('Lic','789'));
    console.log(person3.nombreCompleto.call (person4, 'Ing.', 313));

//USAR METODO APPLY - UTILIZAR PARA HACER LLAMADAS - llamar metodo en un objeto con un metodo sin definir
    //Caso 1
        let person5 ={
            nombre: 'Pati',
            apellido: 'Beta',
            nombreCompleto: function(){
                return this.nombre + ' ' + this.apellido;
            }
        }

        //Agregar 
        let person6 ={
            nombre: 'Edu',
            apellido: 'Marti',
            //vamos a reutilizar la funcion nombreCompleto con metodo Call
        }

        console.log(person5.nombreCompleto());
        console.log(person5.nombreCompleto.apply (person6));
    //Caso 2
        let person7 ={
            nombre: 'Pati',
            apellido: 'Beta',
            nombreCompleto: function(titulo,tel){
                return titulo + ' ' + this.nombre + ' ' + this.apellido + ' '+ tel;
            }
        }

        //Agregar 
        let person8 ={
            nombre: 'Edu',
            apellido: 'Marti',
            //vamos a reutilizar la funcion nombreCompleto con metodo Call
        }

        console.log(person7.nombreCompleto('lic.',748));
        //Aquí apply se pasa como arreglo
            let arreglo = ['Ing.','747884']
            console.log(person7.nombreCompleto.apply (person8, arreglo));
            //o también sirve:
            console.log(person7.nombreCompleto.apply (person8, ['Ing.','747884']));


