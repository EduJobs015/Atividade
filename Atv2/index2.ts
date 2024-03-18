class Calculadora {
    private valor1: number;
    private valor2: number;

    constructor(valor1: number, valor2: number) {
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    // Getters e Setters
    get Valor1(): number {
        return this.valor1;
    }

    set Valor1(valor: number) {
        this.valor1 = valor;
    }

    get Valor2(): number {
        return this.valor2;
    }

    set Valor2(valor: number) {
        this.valor2 = valor;
    }

    // Operações matemáticas
    soma(): number {
        return this.valor1 + this.valor2;
    }

    subtracao(): number {
        return this.valor1 - this.valor2;
    }

    multiplicacao(): number {
        return this.valor1 * this.valor2;
    }

    divisao(): number {
        if (this.valor2 !== 0) {
            return this.valor1 / this.valor2;
        } else {
            throw new Error("Divisão por zero não é permitida.");
        }
    }

    porcentagem(): number {
        return (this.valor1 * 100) / this.valor2;
    }
}

// Teste da classe
const calculadora = new Calculadora(10, 5);

console.log("Soma:", calculadora.soma()); 
console.log("Subtração:", calculadora.subtracao()); 
console.log("Multiplicação:", calculadora.multiplicacao()); 
console.log("Divisão:", calculadora.divisao()); 
console.log("Porcentagem:", calculadora.porcentagem()); 

