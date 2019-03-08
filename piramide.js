var char='*';
var base =10;
var linea='';

// prompt(base)
// alert

for(let i=0;i<base;i++){
    // linea=char+linea
    console.log(linea);
    linea+=char
}

// piedra papel o tijera se pusa promt y numero

minimo=0;
maximo=10;

function Random(){
    var numero=Math.floor(Math.random()*(maximo - minimo +1) + minimo);
    return numero
}

// hacer piedra papel o tijera