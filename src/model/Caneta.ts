import { colors } from "../util/Colors";
import { Produto } from "./Produto";

export class Caneta extends Produto{
    
    private _corDaCaneta: string;

	constructor(id: number, nome: string, tipo: number, preco: number, corDaCaneta: string) {
        super(id, nome, tipo, preco) // Atributos da Classe Produto
		this._corDaCaneta = corDaCaneta;
	}


    /**
     * Getter corDaCaneta
     * @return {string}
     */
	public get corDaCaneta(): string {
		return this._corDaCaneta;
	}

    /**
     * Setter corDaCaneta
     * @param {string} value
     */
	public set corDaCaneta(value: string) {
		this._corDaCaneta = value;
	}


    public visualizar(): void {
        super.visualizar();
        console.log(colors.fg.greenstrong, `Cor da Caneta: ${this._corDaCaneta}`);
    }
}