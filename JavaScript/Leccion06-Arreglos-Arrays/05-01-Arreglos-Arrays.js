//Arrays
/*Se permiten guardar varios valores */

//Manera antigua
// let autos = new array ('mbw','mercedez','volvo') //no se recomienda

//Manera nueva
const auto = ['BMW','Mercedez Benz','Volvo'];
console.log(auto);

//Recorrer/acceder a los elementos de un array - empiezan desde 0
console.log (auto[1]);

//acceder a todos con for
for(let i=0; i<auto.length/*Para saber cuantos elementos hay en auto */;i++){
    console.log(i+":"+auto[i]); // se le concateno el indice
}

//Modificar elementos de un Arreglo en JS
auto[1]="Merceditas";
console.log(auto[1]);

//Agregar elementos a un arreglo
auto.push('Audi');
console.log(auto);

//Agregar elementos a un aray
    //Imprimir el largo del arreglo
    console.log(auto.length);

    //se agrega un 5to elemento y queda en el indice 4
    auto[auto.length] ="Cadilac";
    console.log(auto);

    //Agregar array en la parte superior y dejar huecos en el array
    auto[6]="Porsche";
    console.log(auto);

//Saber si se está trabajando con un arreglo
    console.log(typeof auto);
    /*1*/   console.log(Array.isArray(auto));

    /*2*/   console.log(auto instanceof Array);