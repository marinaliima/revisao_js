//17. Ranking

const alunos = [
    {nome: "Ana", nota: 10},
    {nome: "Beatriz", nota: 8.5},
    {nome: "Carlos", nota: 9},
    {nome: "Daniel", nota: 7},
    {nome: "Ester", nota: 7.5},
    {nome: "Felipe", nota: 6},
    {nome: "Gabriela", nota: 5},
    {nome: "Henrique", nota: 8},
    {nome: "Isabela", nota: 4.5},
    {nome: "João", nota: 3}
];

let ordemDecrescente = [];
let alunosFaltando = [];

for (i = 0; i < alunos.length; i++){
    alunosFaltando.push({nome: alunos[i].nome, nota: alunos[i].nota});
}

for (i = 0; i < alunos.length; i++){
    let iMaior = 0;

    for (i2 = 0; i2 < alunos.length; i2++){
        if (alunosFaltando[i2].nota >= alunosFaltando[iMaior].nota){
            iMaior = i2;
        }
    }

    ordemDecrescente.push({nome: alunosFaltando[iMaior].nome, nota: alunosFaltando[iMaior].nota});
    alunosFaltando[iMaior].nota = -1;
}

console.table(ordemDecrescente);
