var cap = prompt("Digite o valor do capital: ");
var i = prompt("Digite o valor da taxa de juros aplicada(EX: 0.74): ");
var temp = prompt("Digite o tempo em mês total pra pagar: ")
var mont = cap * Math.pow((1 + i/100), temp);
var montfinal = parseFloat(mont.toFixed(2));
alert("O valor final será de: " +montfinal);
