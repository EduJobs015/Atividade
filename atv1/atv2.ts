class Carro {
    private _anoFabricacao: number;

    constructor(anoFabricacao: number) {
        this._anoFabricacao = anoFabricacao;
    }

    // Getter para obter o ano de fabricação do carro
    get anoFabricacao(): number {
        return this._anoFabricacao;
    }

    // Setter para definir o ano de fabricação do carro
    set anoFabricacao(ano: number) {
        this._anoFabricacao = ano;
    }

    // Método para calcular a idade do carro com base no ano atual
    calcularIdadeDoCarro(): number {
        const anoAtual: number = new Date().getFullYear();
        const idadeDoCarro: number = anoAtual - this._anoFabricacao;
        return idadeDoCarro;
    }
}

// Criando uma instância de Carro e usando os métodos
const meuCarro = new Carro(2010);
console.log("Ano de fabricação do carro:", meuCarro.anoFabricacao);
console.log("Idade do carro:", meuCarro.calcularIdadeDoCarro(), "anos.");
