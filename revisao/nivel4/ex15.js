//15. Funções Estatísticas

let numeros = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

function achaMaior(numeros){
    let maior = numeros[0];
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] > maior){
            maior = numeros[i];
        }
    }
    return maior;
}

function achaMenor(numeros){
    let menor = numeros[0];
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] < menor){
            menor = numeros[i];
        }
    }
    return menor;
}

function achaSoma(numeros){
    let soma = 0;
    for (i = 0; i < numeros.length; i++){
        soma += numeros[i];
    }
    return soma;
}

function achaMedia(numeros){
    let media = achaSoma(numeros) / numeros.length;
    return media;
}

console.log(`Maior: ${achaMaior(numeros)}`);
console.log(`Menor: ${achaMenor(numeros)}`);
console.log(`Soma: ${achaSoma(numeros)}`);
console.log(`Média: ${achaMedia(numeros)}`);
