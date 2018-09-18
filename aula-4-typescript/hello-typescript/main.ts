//Exemplo de variável em javaScript
var minhaVar = 'minha Variável';

function minhaFunc(x, y){
    return x + y;
}

//Exemplo de código ES6 ou ES2015   
let num = 2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function(valor){
    return valor * 2;
});

//ES6
numeros.map(valor => valor *3)

class Matematica{
    soma(x, y){
        return x + y;   
    }
}