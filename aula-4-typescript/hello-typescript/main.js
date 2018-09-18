//Exemplo de variável em javaScript
var minhaVar = 'minha Variável';
function minhaFunc(x, y) {
    return x + y;
}
//Exemplo de código ES6 ou ES2015   
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//ES6
numeros.map(function (valor) { return valor * 3; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
