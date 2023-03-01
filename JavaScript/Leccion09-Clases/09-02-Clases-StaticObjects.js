//PALABRA STATIC EN JS
    class Unidad {

        //DEFINIR ATRIBUTOS ESTATICOS
            static contadorUnidad=0; // Atributo de la clase
        //ATRIBUTO NO ESTATICOS FUERA DEL CONSTRUCTOR
            email='Valor default email'; //es una tributo de los objetos 
        //METODO ESTATICO - LEER VALOR -NO MODIFICABLE - SERÁ CONSTANTE ESTATICO
            static get MAX_OBJ(){
                return 5;
            }

        constructor (nombre,id){
            this._nombre=nombre;
            this._id=id;
            // Unidad.contadorUnidad++;//Se usa el nombre de la clase para que pueda aplicar a todos los nuevos objetos
            //vamos a asignar el contador al id:
                // this.idConjunto= Unidad.contadorUnidad;
            // console.log('Se incrementa contador: '+Unidad.contadorUnidad);
            //Que no supere la constatne MAX_OBJ de la fila 9
            if(Unidad.contadorUnidad<Unidad.MAX_OBJ){
                this.idConjunto= ++Unidad.contadorUnidad;
            }
            else {
                console.log('Se han superado el máximo de objetos permitidos');
            }
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
        idCompleto(){
            return this.idConjunto+', ' + this._nombre + ', '+ this._id;
        }
        toString(){
            return this.idCompleto(); 
        }
        static saludar(){
            console.log('Slaudos desde metodo static'); // se asocia con una clase pero no con objetos
        }
        //A un metodo estatico se le puede pasar como argumentos un objeto
        static saludar2(Unidad){
            console.log(Unidad._nombre + ' ' + Unidad._id);
        }
    }
    class Apto extends Unidad{
        constructor (nombre,id,apto){
            super(nombre,id);
            this._apto=apto;
        }
        get apto(){
            return this._apto=apto;
        }
        set apto(apto){
            this._apto=apto;
        }
        idCompleto(){
            return super.idCompleto() + ', '+ this._apto;
        }
    }

    let apto1 = new Apto('El Alfaro','101','306');
    

    console.log(apto1.idCompleto());
    console.log(apto1.toString());
    //PROBAMOS STATIC DESDE OBJETO
    // console.log(apto1.saludar()); -> no es posible llamar un metodo static desde objeto, pero si desde clase

    //UTILIZAR STATIC DESDE LA CLASE
    Unidad.saludar();

    //UTILIZAR STATIC PARA PASAR COMO ARGUMENTOS UN OBJETO
    let unidad1 = new Unidad ('El Alfaro','101');
    let unidad2 = new Unidad('Metropolis','102');

    console.log(unidad1);
    Unidad.saludar2(unidad1);

    Apto.saludar();
    Apto.saludar2(apto1);

//DEFINIR ATRIBUTOS ESTATICOS
    //Se accede a ella no desde el objeto sino desde la clase:
        /*NO  console.log(unidad1.contadorObjetosUnidad);  (Es un objeto)*/
        /*SI*/console.log(Unidad.contadorUnidad); /*(Es una clase)*/
    //Revisarla desde la clase hija también hereda atributo estatico
        console.log(Apto.contadorUnidad);
//OBJETOS NO ESTATICOS * ATRIBUTOS POR FUERA DEL CONSTRUCTOR
    console.log(unidad1);
    console.log(unidad1.email);
    //Desde el objeto de clase hijo
    console.log(apto1);
    console.log(apto1.email);
    console.log(Unidad.email);/*No lee pero está creando un atributo estatico de email*/
    console.log(Apto.email);//También está creando nueva variable estatica en la clase Apto

//ver el nuevo idconjunto
    console.log(apto1.idConjunto);

    console.log(unidad1.idConjunto);
    console.log(unidad1.toString());
    
    console.log(unidad2.idConjunto);
    console.log(Unidad.contadorUnidad);

//CREAR VARIABLES ESTATICAS QUE NO SEAN +--
    console.log(Unidad.MAX_OBJ);
    Unidad.MAX_OBJ=10;
    console.log(Unidad.MAX_OBJ);
        //vamos a crear otras dos variables
        let unidad3 = new Unidad('Lomas','105');
        console.log(unidad3);
        let unidad4 = new Unidad('Castillo','106');
        console.log(unidad4);

        let unidad5 = new Unidad('Montañas','107');
        console.log(unidad5);

        
        console.log(unidad2.idConjunto);

        