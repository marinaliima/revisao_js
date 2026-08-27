//16. Sistema Bancário

let saldo = 2500;
let valorDeposito = 0;
let valorSaque = 0;
let opcao = Number(prompt("Sistema Bancário - Menu \n\n1) Depósito \n2) Saque \n3) Saldo \n4) Sair \n"));

function depositar(saldo, valorDeposito){
    saldo += valorDeposito;
    return saldo;
}

function sacar(saldo, valorSaque){
    saldo -= valorSaque;
    return saldo;
}

function consultarSaldo(saldo){
    return saldo;
}

while ((opcao > 0) && (opcao < 4)){
    
    switch (opcao){
        
        case 1:
            valorDeposito = Number(prompt("Digite o valor do depósito: "));
            saldo = depositar(saldo, valorDeposito);
            alert("Depósito efetivado com sucesso!");
            break;

        case 2:
            valorSaque = Number(prompt("Digite o valor do saque: "));
            if (valorSaque <= saldo){
                saldo = sacar(saldo, valorSaque);
                alert("Saque efetivado com sucesso!");
            } else {
                alert("Saldo insuficiente.");
            }
            break;

        case 3:
            alert(`Saldo: ${consultarSaldo(saldo)}`);
            break;
    }

    opcao = Number(prompt("Sistema Bancário - Menu \n\n1) Depósito \n2) Saque \n3) Saldo \n4) Sair \n"));
}

if (opcao === 4){
    alert("Você saiu.");
} else {
    alert("Opção inválida.");
}