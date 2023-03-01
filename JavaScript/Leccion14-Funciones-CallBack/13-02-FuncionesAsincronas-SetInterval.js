//Funcion reloj

let reloj =()=>{
    let fecha=new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

//llamar función reloj cada segundo
    //Funcion Call back sólo tengo que mandarla a llamar
setInterval(reloj,1000);//cada 1 seg


