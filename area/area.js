var x = prompt("informe um numero para o lado do quadradro e base do triangulo e retangulo:");
var y = prompt("informe um numero para a altura do retangulo e triangulo: ");
var z = prompt("informe o raio de um circulo: ");

let area_quadrado = (x*x);
let area_retangulo = (x*y);
let area_triangulo = ((x*y)/2);
let area_circulo = ((z^2)*3.14);

alert("a area do quadrado é "+area_quadrado);
alert("a area do retangulo é "+ area_retangulo);
alert("a area do triangulo é "+ area_triangulo);
alert(" a area do circulo é "+ area_circulo);