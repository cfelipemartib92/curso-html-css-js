//Clases es un framework
    //Las clases deberían de emepzar con letra mayuscula
    class Persona{//cuerpo
    //se agrega el constructor
        constructor(nombre, apellido){
            this.nombre = nombre; //this.parametro = atributo
            this.apellido = apellido;
        }
    }
    
    //Vamos a crear un objeto
    let persona1 = new Persona('Felipe','Martinez');
    // console.log(persona1);

    let persona2 = new Persona ('Sebastian','Martinez');
    console.log(persona2);

//GET(leer info) SET(modificar info) en propiedades de clase
    //No se puede llamar igual que la propiedad por eso usar _
    class ObjetosCocina{
        constructor(nombre, utilidad){
            this._nombre = nombre;
            this._utilidad = utilidad;
        }

        get nombre(){//buenas practicas en atributos 
            return this._nombre;
        }

        set nombre(nombre){
            this._nombre = nombre;
        }
    }

    //uso get
        let objeto1 = new ObjetosCocina('Cuchara','Servir alimentos');
            console.log(objeto1.nombre); //se usa el metodo get "Nombre" - no necesita get
    
    //uso set para modificar valor
        objeto1.nombre = 'Tenedor';//no necesita set, automaticamente se pasa la info
        console.log(objeto1.nombre);//Get nombre

//HOISTING Y CLASES EN JS
    //cin clases no funciona el hoisting
        //No es posible crear objetos antes de declarar clase
        let objeto2 = new ObjetosCocina('Sarten','Fritar');
        console.log(objeto2);

//HERENCIA EN JS
    //Clase padre (Persona) - clase hija (Empleado)
        //Agregando extends herada las caracteristicas
        //Usar diagrama uml

    class Ciudadano{
        constructor(nombre, apellido, id){
            this._nombre = nombre;
            this._apellido = apellido;
            this._id = id;
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido=this.apellido;
        }
        get id(){
            return this._id;
        }
        set id(id){
            this._id=id;
        }
    }

    class Empleado extends Persona{ //extends hereda propeidades de clase "Persona"
        constructor(nombre, apellido, id, departamento){
            super(nombre, apellido, id);//Se manda a llamar al constructor de la clase padre
            this._departamento = departamento; //en get y set la propiedad no se puede llamar igual que el argumento por eso usamos el _
        }
        get departamento(){
            return this._departamento = this.departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
    }

    let ciudadano1 = new Ciudadano('Chris','Martinez','1017204555');
    console.log(ciudadano1);

    let empleado1 = new Empleado('Maria','Jimenez','7895412','Contabilidad');
    console.log(empleado1); 
    console.log(empleado1.nombre);


//HEREDAR METODOS EN JS
    class Trabajador{
        constructor (nombre,id){
            this._nombre = nombre;
            this._id = id;
        }
        get nombre(){
            return this._nombre=nombre;
        }
        set nombre(nombre){
            this._nombre=nombre;
        }
        get id(){
            return this._id=id;
        }
        set id(id){
            this._id=id;
        }
        idCompleta(){//se sobre entiende que es una funcion
            return this._nombre + ' '+ this._id;
        }
    }
    
    class Area extends Trabajador{
        constructor(nombre,id,departamento){
            super(nombre, id);
            this._departamento = departamento;
        }
        get departamento(){
            return this._id=departamento;
        }
        set departamento(departamento){
            this._departamento=departamento;
        }
    }

    let area1 = new Area('Felipe','111','Ingeniería');
    console.log(area1.idCompleta());
    
//SOBREESCRITURA EN JS --UTILIZAR METODO EN CLASE PADRE EN CLASE HIJA CON SUS ATRIBUTOS
    class habitantesAlfaro{
        constructor (apellido,apto){
            this._apellido = apellido;
            this._apto = apto;
        }
        get apellido(){
            return this._apellido = apellido;
        }
        set apellido(apellido){
            this._apellido.apellido;
        }
        get apto(){
            return this._apto = apto;
        }
        set apto(apto){
            this._apto=apto;
        }
        idCompleto(){
            return this._apellido + ' ' + this._apto;
        }
    }

    class Categoria extends habitantesAlfaro{
        constructor(apellido, apto, categoria){
            super(apellido, apto);
            this._categoria=categoria;
        }
        get categoria(){
            return this._categoria = categoria;
        }
        set categoria(categoria){
            this._categoria=categoria;
        }
        //SOBREESCRITURA
        idCompleto(){
            // return this._apellido + ', ' + this._apto + ', ' + this._categoria; (EJEMPLO DE SOBREESCRITURA)
            return super.idCompleto() + ', ' + this._categoria; // ajustar metodo reutilizando metodo clase padre
        }
    }

    let categoria1 = new Categoria('Martinez','306','AAA');
    console.log(categoria1.idCompleto());

//CLASE OBJECT - METODO STRING - SOBREESCRITURA - POLIFORMISMO
    //Object es una clase padre de todas las clases y tiene metodos que podemos utilizar
    //una de esos metodos es TOSTRING
    class Colegio{
        constructor (nombre,id){
            this._nombre=nombre;
            this._id=id;
        }
        get nombre(){
            return this.nombre=nombre;
        }
        set nombre(nombre){
            this._nombre=nombre;
        }
        get id(){
            return this._id=id;
        }
        set id(id){
            this._id=id;
        }
        idCompleto(){
            return this._nombre + ', ' + this._id;
        }
        //  Sobnreescribiendo metodo de la clase padre (Object)
        toString(){
            //  Se aplica polimorfismo - usamos el metodo anterior - lo hereda a clase hija
            //  polimorfismo: multiples formas en tiempo de ejecucion
            //  El metodo se ejecuta depende si es una referencia tipo padre o tipo hijo
            return this.idCompleto();
        }
    }
    class Curso extends Colegio{
        constructor(nombre,id,curso){
            super(nombre, id);
            this._curso=curso;
        }
        get curso(){
            return this._curso=curso;
        }
        set curso(curso){
            this._curso=curso;
        }
        idCompleto(){
            return super.idCompleto() + ', ' + this._curso;
        }
    }

    let colegio1 = new Colegio ('Calasanz',01)
    let curso1 = new Curso ('Calasanz', 01, '10c');

    console.log(curso1.idCompleto());
    //sobreescribir comportamiento metodo tostring de object.prototype
        //El metodo to string está en colegio-llamamos idCompelto desde toString
        //Polimorfimso está usando una lcase hija para llmaar algo de la clase padre y la reutiliza
    console.log(curso1.toString()); 
        //Aqui usamos la clase padre
    console.log(colegio1.toString()); 

    