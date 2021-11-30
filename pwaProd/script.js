// Archivo: C:\xampp\htdocs\pwa6\script.js
//alert('Bienvenido');
console.log('Bienvenido');

document.getElementById('btnMostrar').addEventListener('click', obtenerFactoresPrimos);

/*function exhibir(){
    var numerador = document.querySelector('#txtnum').value;
    var denominador = document.querySelector('#txtden').value;
    var cadunos = "";
    var cadfrac = "";
    var i;
    for(i=1; i<=denominador; i++){
        if(i==denominador){
            cadunos += "1";
            cadfrac += 1 + "/" + denominador;
        } 
        else{
            cadunos+="1,";
            cadfrac += 1 + "/" + denominador + "|";
        } 
    } 
    // https://chart.googleapis.com/chart?cht=p3&chd=t:1,1,1&chs=250x100&chl=1/3|1/3|1/3
    var url = "https://chart.googleapis.com/chart?cht=p3&chd=t:" + cadunos + "&chs=250x100&chl=" + cadfrac;
    document.getElementById('message').innerHTML = '<img src="'+ url + '">';
}*/
let numero = Number(document.querySelector('#txtnum').value);


function esPrimo() {
    
    for(let i = 2; i <= Math.sqrt(numero); ++i) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function obtenerFactoresPrimos()
{
    let numero = Number(document.querySelector('#txtnum').value);
    console.log(document.querySelector('#txtnum').value);
    console.log(typeof numero);
    console.log(Number.isInteger(numero));
    if (typeof numero === 'number' && Number.isInteger(numero)) {
        if (numero > 0) {
            let primos = [];
            for(let i = 2; i <= numero; ++i) {
                while(esPrimo(i) && numero % i === 0) {
                    if (!primos.includes(i)) {
                        primos.push(i);
                    }

                    numero /= i;
                }
            }

            return document.getElementById('message').innerHTML = '<label>Los factores primos del número que ingresaste son: '+ primos + '</label>';
        } else {
            
            return null;
        }
    } else {
        return document.getElementById('message').innerHTML = '<label> El argumento debe ser un número entero </label>'; 
    }
}