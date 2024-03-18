class Produto {
    private nome: string;
    private preco: number;
    private quantidadeEmEstoque: number;

    constructor(nome: string, preco: number, quantidadeEmEstoque: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    // Getters e Setters
    get Nome(): string {
        return this.nome;
    }

    set Nome(nome: string) {
        this.nome = nome;
    }

    get Preco(): number {
        return this.preco;
    }

    set Preco(preco: number) {
        this.preco = preco;
    }

    get QuantidadeEmEstoque(): number {
        return this.quantidadeEmEstoque;
    }

    set QuantidadeEmEstoque(quantidade: number) {
        this.quantidadeEmEstoque = quantidade;
    }

    // Métodos
    calcularValorTotalEmEstoque(): number {
        return this.preco * this.quantidadeEmEstoque;
    }

    reporEstoque(quantidade: number): void {
        this.quantidadeEmEstoque += quantidade;
    }

    vender(quantidade: number): void {
        if (quantidade <= this.quantidadeEmEstoque) {
            this.quantidadeEmEstoque -= quantidade;
        } else {
            throw new Error("Não há estoque suficiente para vender.");
        }
    }
}

// Teste da classe
const produto = new Produto("Camiseta", 25.99, 50);

console.log("Valor total em estoque:", produto.calcularValorTotalEmEstoque()); // Deve imprimir 1299.5

produto.reporEstoque(10);
console.log("Quantidade em estoque após reposição:", produto.QuantidadeEmEstoque); // Deve imprimir 60

produto.vender(20);
console.log("Quantidade em estoque após venda:", produto.QuantidadeEmEstoque); // Deve imprimir 40

try {
    produto.vender(50); // Tentando vender mais do que há em estoque
} catch (error) {
    console.log(error); // Exibir o objeto de erro completo
}