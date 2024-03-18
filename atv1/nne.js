"use strict";
/*Lista de Exercícios Funções
Exercício 1
Crie uma função que receba uma lista de números como parâmetro e retorne o
maior número da lista.*/
function maiorNumero(Lista) {
    return Math.max.apply(Math, Lista);
}
/*
Exercício 2
Desenvolva uma função que receba um número como parâmetro e verifique se
ele é par ou ímpar. Retorne true se for par e false se for ímpar.
*/
function isPar(numero) {
    return numero % 2 === 0;
}
/*
Exercício 3
Implemente uma função que calcule a média aritmética de um array de números
e retorne o resultado. Utilize essa função para calcular a média de diferentes
conjuntos de números.*/
function mediaAritmetica(lista) {
    let soma = 0;
    for (let numero of lista) {
        soma += numero;
    }
    return soma / lista.length;
}
/*
Exercício 4
Crie uma função que receba uma string como parâmetro e retorne a mesma
string com todas as letras em caixa alta. Utilize essa função para converter
diferentes strings.*/
function caixaAlta(palavra) {
    return palavra.toUpperCase();
}
/*
Exercício 5
Desenvolva uma função que determine se um número é primo ou não. Retorne
true se for primo e false se não for.
*/
function isPrimo(numero) {
    if (numero < 2)
        return false;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0)
            return false;
    }
    return true;
}
/*
Exercício 6
Implemente uma função que inverta a ordem dos elementos em um array.
Utilize essa função para inverter a ordem de diferentes conjuntos de elementos.
*/
function inverterArray(lista) {
    return lista.reverse();
}
/*
Exercício 7
Crie uma função que receba um valor e uma porcentagem como parâmetros. A
função deve retornar o valor acrescido da porcentagem indicada.
*/
function acrescimoPorcentagem(valor, porcentagem) {
    return valor + (valor * porcentagem / 100);
}
/*
Exercício 8
Crie uma função que receba uma string e retorne a mesma string, mas com as
palavras em ordem reversa.
*/
function inverterPalavras(frase) {
    return frase.split(' ').reverse().join(' ');
}
/*
Exercício 9
Implemente uma função que retorne a soma de todos os números pares em um
array.
*/
function somaPares(lista) {
    let soma = 0;
    for (let numero of lista) {
        if (numero % 2 === 0)
            soma += numero;
    }
    return soma;
}
/*
Exercício 10
Crie uma função que calcule o fatorial de um número. Utilize essa função para
calcular o fatorial de diferentes números.*/
function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}
