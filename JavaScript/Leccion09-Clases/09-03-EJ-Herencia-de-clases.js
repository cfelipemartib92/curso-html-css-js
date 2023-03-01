class Persona {
    static contadorPersonas=0;
    constructor(nombre,apellido,edad){
        this._idPersona=++Persona.contadorPersonas;
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }
    get idPersona(){
        return this._idPersona;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre=nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido=apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad=edad;
    }
    toString(){
        return `${this._idPersona}, 
        ${this._nombre} 
        ${this._apellido}, 
        edad: ${this._edad} años`;
    }

}
class Empleado extends Persona {
    static contadorEmpleados=0;
    constructor(nombre,apellido,edad,sueldo){
        super(nombre,apellido,edad);
        this._idEmpleado=++Empleado.contadorEmpleados;
        this._sueldo=sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo=sueldo;
    }
    toString(){
        return `${super.toString()}, 
        idEmpleado: ${this._idEmpleado}, 
        sueldo: ${this._sueldo}`;
    }
}
class Cliente extends Persona{
    static contadorClientes=0;
    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad);
        this._idCliente=++Cliente.contadorClientes;
        this._fechaRegistro=fechaRegistro;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro=fechaRegistro;
    }
    toString(){
        return `${super.toString()}, 
                idCliente: ${this._idCliente},
                Fecha: ${this._fechaRegistro}`;
    }
}

let persona1= new Persona('Felipe','Martinez',30);
console.log(persona1);
console.log(persona1.toString());
console.log(Persona.contadorPersonas);

let persona2= new Persona('Juan','Perez',27);
console.log(persona2);
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

let empleado1 = new Empleado('Sebastian','Martinez',28,5000);
console.log(empleado1);
console.log(empleado1.toString());
console.log(Empleado.contadorEmpleados);
console.log(Persona.contadorPersonas);

let empleado2 = new Empleado('Eduardo','Camargo',67,7000);
console.log(empleado2);
console.log(empleado2.toString());
console.log(Empleado.contadorEmpleados);
console.log(Persona.contadorPersonas);

let cliente1 = new Cliente('Eduardo','Camargo',67,new Date());
console.log(cliente1);
console.log(cliente1.toString());
console.log(Cliente.contadorClientes);
console.log(Persona.contadorPersonas);

let cliente2 = new Cliente('Patricia','Betancurt',60,new Date());
console.log(cliente2);
console.log(cliente2.toString());
console.log(Cliente.contadorClientes);
console.log(Persona.contadorPersonas);


//FUNCION POLIMORFISMO
    function imprimir(tipo){
        console.log(tipo.toString());
        //INSTANCEOF
        if(tipo instanceof Empleado){//de menor a mayor jerarquia
            console.log('Es un objeto de tipo Empleado');
        }
        else if (tipo instanceof Cliente){
            console.log('Es un objeto de tipo Cliente');
        }
        else if (tipo instanceof Persona){
            console.log('Es un objeto de tipo Persona');
        }
        else if (tipo instanceof Object){
            console.log('Es un objeto de tipo Object');//Muestra todos los tipos y sus padres: Empleado-Persona-Object
        }
    }
    //polimorfismo - se puede usar de varias maneras con diferentes objetois y metodos
        //apunta a cualauier tipo de datos
    imprimir(persona1);
    imprimir(empleado1);
    imprimir(cliente1);



