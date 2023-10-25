//exe 24
function mostrarNumeros() {
    var numerosInput = document.getElementById("numeros").value;
    var numeros = numerosInput.split(",").map(parseFloat);
    var mensagem = "<ul>";

    for (var i = 0; i < numeros.length; i++) {
        var numeroAtual = numeros[i];

        if (numeroAtual > 0) {
            mensagem += "<li>Positivo</li>";
        } else if (numeroAtual < 0) {
            mensagem += "<li>Negativo</li>";
        } else {
            mensagem += "<li>Zero</li>";
        }
    }

    mensagem += "</ul>";

    var display = document.getElementById("resultado");
    display.innerHTML = mensagem;
}

//exe 25
function mostrar(){
    var n1 = document.getElementById("n1").value;
    var n2 = document.getElementById("n2").value;
    var display = document.getElementById("display");
    if (n1 == n2) {
        display.innerHTML = "Os numeros são iguais";
    }
    else if ( n1 > n2){
        display.innerHTML = `O maior número é ${n1}`
    }
    else {
        display.innerHTML = `O maior número é ${n2}`
    }
}

//exe 26

function escreverNumero(){
    var n26 = parseInt(document.getElementById("n26").value);
    var display2 = document.getElementById("display2");

    switch (n26) {
        case 1:
            display2.innerHTML = "O número por extenso é : UM"
            break;
        case 2:
            display2.innerHTML = "O número por extenso é : DOIS"
            break;
        case 3:
            display2.innerHTML = "O número por extenso é : TRÊS"
            break;
        case 4:
            display2.innerHTML = "O número por extenso é : QUATRO"
            break;
        case 5:
            display2.innerHTML = "O número por extenso é : CINCO"
            break;
        case 0:
            display2.innerHTML = "O número por extenso é : ZERO"
            break;
        default:
            display2.innerHTML = "número inválido"
            break;
    }
}

function calcular() {
    var carro = document.getElementById("n27").value;
    var combustivel = parseFloat(document.querySelector("input[name='comb']:checked").value);
    var calculoDesconto = carro * combustivel;
    var calculoCarro = carro - calculoDesconto;
    var display3 = document.getElementById("display3");
    display3.innerHTML = "Desconto: R$" + calculoDesconto.toFixed(2) + " Valor a ser pago: R$" + calculoCarro;
}

function calcularSalario() {
    var nome = document.getElementById("name").value;
    var salario = Number(document.getElementById("salario").value);
    var resultado = "";

    if (salario < 1320) {
        resultado = salario * 0.50;
    } else if (salario >= 3960 && salario <= 13200) {
        resultado = salario * 0.20;
    } else if (salario >= 13200 && salario <= 26400) {
        resultado = salario * 0.15;
    } else {
        resultado = salario * 0.10;
    }

    var novoSalario = resultado + salario;

    var display4 = document.getElementById("display4");
    display4.innerHTML = `Olá ${nome}, seu salário após o reajuste será de: ${novoSalario}`;
}

function mostrarMes() {
    var numeroMes = Number(document.getElementById("Numeromes").value);
    var display7 = document.getElementById("display7");

    switch (numeroMes) {
        case 1:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : JANEIRO "
            break;
        case 2:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : FEVEREIRO"
            break;
        case 3:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : MARÇO"
            break;
        case 4:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : ABRIL"
            break;
        case 5:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : MAIO"
            break;
        case 6:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : JUNHO"
            break;
        case 7:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : JULHO"
            break;
        case 8:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : AGOSTO"
            break;
        case 9:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : SETEMBRO"
            break;
        case 10:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : OUTUBRO"
            break;
        case 11:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é :NOVEMBRO "
            break;
        case 12:
            display7.innerHTML = "MÊS VÁLIDO! O mês correspondente ao número digitado é : DEZEMBRO"
            break;
        default:
            display7.innerHTML = "MÊS inválido!!"
            break;
        
    }
}

function mostrarSalario() {
    var nome1 = document.getElementById("nome1").value;
    var idade = Number(document.getElementById("idade").value);
    var salariofixo = Number(document.getElementById("salariofix").value);
    var sexo = document.getElementById("sexo").value;
    var final = "";

    if (sexo === "M" && idade >= 30) {
        final = salariofixo + 100;
    }
    else if (sexo === "M" && idade < 30) {
        final = salariofixo + 50;
    }
    else if (sexo === "F" && idade >= 30) {
        final = salariofixo + 200;
    }
    else if (sexo === "F" && idade < 30) {
        final = salariofixo + 80;
    }

    var display5 = document.getElementById("display5");
    display5.innerHTML = `Olá ${nome1}, seu salário líquido é de: ${final}`;
}

function mostrarOrdem() {
    var numeros  = [
    Number(document.getElementById("numero1").value),
    Number(document.getElementById("numero2").value),
    Number(document.getElementById("numero3").value)
    ];

    numeros.sort(function(a, b) {
        return a - b;
    });

    numeros.reverse();

    var resultado = "";
    for ( var i = 0; i < numeros.length; i++) {
        resultado += numeros[i] + " ";
    }

    display6.innerHTML = "Os números em ordem decrescente será: " + resultado;

    }

function mostrarOperacao() {
    var A = Number(document.getElementById("A").value);
    var B = Number(document.getElementById("B").value);
    var operador = document.getElementById("OPERADOR").value;

    switch (operador) {
        case "+": 
          var resultado = A + B;
          display8.innerHTML = ("O resultado da adição é: " + resultado);
          break;
        case "-": 
          var resultado = A - B;
          display8.innerHTML = ("O resultado da subtração é: " + resultado);
          break;
        case "*": 
          var resultado = A * B;
          display8.innerHTML = ("O resultado da multiplicação é: " + resultado);
          break;
        case "/": 
          var resultado = A / B;
          display8.innerHTML = ("O resultado da divisão é: " + resultado);
          break;
        default:
          
          display8.innerHTML = ("Erro: operador inválido!");
          break;
      }
}

function mostrarTriangulo() {
    var A = Number(document.getElementById("ladoA").value);
    var B = Number(document.getElementById("ladoB").value);
    var C = Number(document.getElementById("ladoC").value);
    
    if (A + B > C && B + C > A && C + A > B) {
        if (A === B && B === C) {
        display9.innerHTML = ("Triângulo Equilátero");
        } else if (A === B || B === C || C === A) {
        display9.innerHTML = ("Triângulo Isósceles");
        } else {
        display9.innerHTML = ("Triângulo Escaleno");
        }
      } else {
        display9.innerHTML = ("Não é um triângulo");
    }
}

function exe34() {
    var horas = Number(document.getElementById("horaPro").value);
    var nivel = parseFloat(document.querySelector("input[name='nivel']:checked").value);
    var salarioDia = horas * nivel;
    var salario = salarioDia * 30;
    var display10 = document.getElementById("display10");
    display10.innerHTML = `O valor recebido por dia trabalhado é de ${salarioDia} reais <br> e o salário dele é de ${salario} reais.`
}

function exe35() {
    var idadeNadador = Number(document.getElementById("nadador").value);
    display11 = document.getElementById("display11");
    switch (true) {
        case idadeNadador >= 5 && idadeNadador <=7 :
            display11.innerHTML = `infantil A`
        break;
        case idadeNadador >= 8 && idadeNadador <=10 :
            display11.innerHTML = `infantil B`
        break;
        case idadeNadador >= 11 && idadeNadador <=13 :
            display11.innerHTML = `juvenil A`
        break;
        case idadeNadador >= 14 && idadeNadador <=17 :
            display11.innerHTML = `juvenil B`
        break;
        case idadeNadador >= 18 && idadeNadador <=25 :
            display11.innerHTML = `Sênior`
        break;
        default:
            display11.innerHTML = `Idade fora da faixa etária`
        break;
    }
}

function exe36() {
    var energia = parseFloat(document.querySelector("input[name='energia']:checked").value);
    var Pordia = energia * 24;
    var conta = Math.round(Pordia * 30);
    var display = display12;
    display12.innerHTML = `A sua conta de energia será de ${conta}`
}

function exe37() {
    var NomePeso = document.getElementById("NomePeso").value;
    var SEXO = document.getElementById("SEXO").value;
    var IDADE = Number(document.getElementById("IDADE").value);
    var ALTURA = Number(document.getElementById("ALTURA").value);
    var PesoIdeal = '';
    var display13 = document.getElementById("display13");

    switch (true) {
        case SEXO === "M" && ALTURA > 1.70 && IDADE <= 20:
            PesoIdeal = (72.7 * ALTURA) - 58;
        break;
        case SEXO === "M" && ALTURA > 1.70 && IDADE >= 40 && IDADE <= 39:
            PesoIdeal = (72.7 * ALTURA) - 53;
        break;
        case SEXO === "M" && ALTURA > 1.70 && IDADE >= 40:
            PesoIdeal = (72.7 * ALTURA) - 45;
        break;

        case SEXO === "M" && ALTURA <= 1.70 && IDADE <= 40:
            PesoIdeal = (72.7 * ALTURA) - 50;
        break;
        case SEXO === "M" && ALTURA <= 1.70 && IDADE > 40:
            PesoIdeal = (72.7 * ALTURA) - 58;
        break;

        case SEXO === "F" && ALTURA <= 1.50 && IDADE >= 35:
            PesoIdeal = (62.1 * ALTURA) - 45;
        break;
        case SEXO === "F" && ALTURA <= 1.50 && IDADE < 35:
            PesoIdeal = (62.1 * ALTURA) - 49;
        break;
        default:
            PesoIdeal = (62.1 * ALTURA) - 44.7;
        break;
    }

    display13.innerHTML = `Olá ${NomePeso} seu peso ideal é ${Math.round(PesoIdeal)}`
}

