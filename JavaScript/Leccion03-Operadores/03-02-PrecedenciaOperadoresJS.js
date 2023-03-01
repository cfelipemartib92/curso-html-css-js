// Precedencia de operadores

let a =3, b=2; c=1, d=4;

//Se lee de izquierda a derecha
let z = a*b+c;
console.log(z);


z =c+a*b; //1+3*2 ->Se de precedencia a ciertos operadores
console.log(z);

let y=a*b+c/d;
//(a*b)+(c/d)
console.log(y);

y=c+a*b/d;
//c+((a*b)/d)
console.log(y);

y=(c+a)*(b/c);
console.log(y);