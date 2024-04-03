import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Caneta } from "./src/model/Caneta";
import { Lapis } from "./src/model/Lapis";

export function main() {

    let opcao, id, tipo, preco: number;
    let nome, lapiseira, corDaCaneta: string;
    let tipoProduto = ['Caneta','Lapis'];

    const produtoController: ProdutoController = new ProdutoController();

    produtoController.cadastrar(new Caneta(produtoController.gerarId(),
        "Caneta BIC Azul", 1, 3.50, "Azul"));

    produtoController.cadastrar(new Caneta(produtoController.gerarId(),
        "Caneta BIC Vermelha", 1, 3.50, "Vermelha"));

    produtoController.cadastrar(new Lapis(produtoController.gerarId(),
        "Lápis Faber Castell", 2, 1.50, "Não"));

    produtoController.cadastrar(new Lapis(produtoController.gerarId(),
        "Lapiseira Faber Castell", 2, 4.50, "Sim"));

    while (true) {

        console.log(colors.fg.greenstrong, 
                    "*****************************************************");
        console.log("                                                     ");
        console.log("            SEJA BEM VINDO A CALUNGA COM C           ");
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
            console.log("\nSISTEMAS CALUNGA COM C");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\n\nCriar Produtos\n\n");

                nome = readlinesync.question("Digite o nome do Produto: ");

                tipo = readlinesync.keyInSelect(tipoProduto, "", { cancel: false }) + 1;

                preco = readlinesync.questionFloat("Digite o preco: ");

                switch (tipo){
                    case 1:
                        corDaCaneta = readlinesync.question("Digite a cor da Caneta: ");
                        produtoController.cadastrar(new Caneta(produtoController.gerarId(),
                            nome, tipo, preco, corDaCaneta));
                        break;
                    case 2:
                        lapiseira = readlinesync.question("É uma lapiseira?: ");
                        produtoController.cadastrar(new Lapis(produtoController.gerarId(),
                            nome, tipo, preco, lapiseira));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.greenstrong,
                    "\n\nListar todos os Produtos\n\n", colors.reset);

                produtoController.listarTodos();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.greenstrong,
                    "\n\nConsultar dados do Produto - por Id\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.procurarPorId(id);

                keyPress()
                break;
            case 4:
                console.log(colors.fg.greenstrong,
                    "\n\nAtualizar dados do Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    
                    let produto = produtoController.buscarNoArray(id);

                    if (produto !== null){

                        nome = readlinesync.question("Digite o Nome do Produto: ");

                        tipo = produto.tipo;
        
                        preco = readlinesync.questionFloat("Digite o preco: ");
        
                        switch (tipo) {
                            case 1:
                                corDaCaneta = readlinesync.question("Digite a cor da Caneta: ");
                                produtoController.atualizar(new Caneta(id, nome, tipo, preco, corDaCaneta));
                                break;
                            case 2:
                                lapiseira = readlinesync.question("Digite a frangancia do Cosmetico: ");
                                produtoController.atualizar(new Lapis(id, nome, tipo, preco, lapiseira));
                                break;
                        }

                    }else
                        console.log("Produto não Encontrado!")

                keyPress()
                break;
            case 5:
                console.log(colors.fg.greenstrong,
                    "\n\nApagar um Produto\n\n", colors.reset);

                    id = readlinesync.questionInt("Digite o Id do Produto: ");
                    produtoController.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.greenstrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
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

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();