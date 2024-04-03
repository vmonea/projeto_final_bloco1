import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";

export function main() {

    let opcao: number;

    while (true) {

        console.log(colors.fg.greenstrong, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("                    CALUNGA COM C                    ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produtos                       ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar Produtos por ID               ");
        console.log("            4 - Atualizar Dados de Produto           ");
        console.log("            5 - Apagar Produtos                      ");
        console.log("            6 - Sair                                 ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {
            console.log("\nObrigado por comprar na CALUNGA COM C");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produtos\n\n");

                break;
            case 2:
                console.log("\n\nListar todos os produtos\n\n");

                break;
            case 3:
                console.log("\n\nBuscar Produtos por ID\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar Dados de Produto\n\n");

                break;
            case 5:
                console.log("\n\nApagar um Produto\n\n");

                break;
            case 6:
                console.log("\n\nSair\n\n");

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log('****************************************');
    console.log('Projeto Desenvolvido por:              ');
    console.log('Vitor Monea - vitormonea2000@gmail.com ');
    console.log('https://github.com/vmonea               ');
    console.log('****************************************');
}

main();