//Concatenación JS

//ej 1
    var nombre ="Felipe";
    var Apellido="Martinez";
    var NombreCompleto = nombre +' ' + Apellido;
    console.log(NombreCompleto);

//ej 2
    var NombreCompleto2 = 'Christian' + ' ' + 'Betancurt';
    console.log(NombreCompleto2);

//ej 3 - concatenar string con número
    var x= nombre + 219;
    console.log(x);

    var y=219 + nombre;
    console.log(y);

//ej 4 suma string con () ya que JS lee de izquierda a derecha
    x=nombre + (2+4);
    console.log(x);

//Ej 5 suma y string - contexto string o de cadena
    x=2+4+nombre;
    console.log(x);

