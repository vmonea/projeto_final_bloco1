import { colors } from "../util/Colors";
import { Produto } from "./Produto";

export class Lapis extends Produto{
    
    private _lapiseira: string;

	constructor(id: number, nome: string, tipo: number, preco: number, lapiseira: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._lapiseira = lapiseira;
	}


    /**
     * Getter lapiseira
     * @return {string}
     */
	public get lapiseira(): string {
		return this._lapiseira;
	}

    /**
     * Setter lapiseira
     * @param {string} value
     */
	public set lapiseira(value: string) {
		this._lapiseira = value;
	}

    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.greenstrong,`É Lapiseira?: ${this._lapiseira}`);
    }
}