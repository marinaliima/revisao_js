//14. Biblioteca Matemática

let opcao = Number(prompt("Escolha a operação: \n(1) Soma \n(2) Subtração \n(3) Multiplicação \n(4) Divisão \n(5) Potenciação \n(6) Fatorial"));

function soma(numero1, numero2){
     return numero1 + numero2;
}

function subtracao(numero1, numero2){
    return numero1 - numero2;
}

function multiplicacao(numero1, numero2){
    return numero1 * numero2;
}

function divisao(numero1, numero2){
    return numero1 / numero2;
}

function potenciacao(numero1, numero2){
    return numero1 ** numero2;
}

function fatorial(numero1){
    let resultado = 1;
    for (i = 0; i < numero1 - 1; i++){
        resultado *= numero1 - i;
    }
    return resultado;
}

if ((opcao > 0) && (opcao < 6)){
    let numero1 = Number(prompt("Digite o primeiro número: "));
    let numero2 = Number(prompt("Digite o segundo número: "));

    switch (opcao) {
        case 1:
            alert(`${numero1} + ${numero2} = ${soma(numero1, numero2)}`);
            break;
        case 2:
            alert(`${numero1} - ${numero2} = ${subtracao(numero1, numero2)}`);
            break;
        case 3:
            alert(`${numero1} * ${numero2} = ${multiplicacao(numero1, numero2)}`);
            break;
        case 4:
            alert(`${numero1} / ${numero2} = ${divisao(numero1, numero2)}`);
            break;
        case 5:
            alert(`${numero1} ^ ${numero2} = ${potenciacao(numero1, numero2)}`);
            break;
    }
} else if (opcao === 6){
    let numero1 = Number(prompt("Digite o número: "));
    alert(`${numero1}! = ${fatorial(numero1)}`);
} else {
    alert("Opção inválida.");
}
