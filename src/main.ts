//npx tsc
//node srcjs/main.js
import { listaDuplamente } from "./estrutura/listaDuplamente";
import * as readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lista = new listaDuplamente<number>();

console.log("Lista Duplamente Encadeada !");
console.log("Comandos disponiveis:");
console.log("1: Adiciona no inicio");
console.log("2: Adiciona no final");
console.log("3: Remove o primeiro elemento");
console.log("4: Remove o ultimo elemento");
console.log("5: Remove um elemento pelo indice");
console.log("6: Imprime a lista atual");
console.log("7: Limpa a lista");
console.log("8: Encerra o programa");
console.log("");

const valor = (comando: string) => {
  rl.question("Digite o valor: ", (valor) => {
    finalizar(comando, valor);
  });
};

const finalizar = (comando: string, valor?: string) => {
  switch (comando) {
    case "1":
      if (valor) {
        lista.addPrimeiroNo(Number(valor));
        console.log(`Adicionado ${valor} no início.`);
      } else {
        console.log("Insira um valor para adicionar.");
      }
      break;

    case "2": 
      if (valor) {
        lista.addUltimoNo(Number(valor));
        console.log(`Adicionado ${valor} no final.`);
      } else {
        console.log("Insira um valor para adicionar.");
      }
      break;

    case "3": 
      const removePrimeiroNo = lista.removePrimeiroNo();
      if (removePrimeiroNo !== null) {
        console.log(`Removido do início: ${removePrimeiroNo}`);
      } else {
        console.log("A lista esta vazia.");
      }
      break;

    case "4": 
      const removeUltimoNo = lista.removeUltimoNo();
      if (removeUltimoNo !== null) {
        console.log(`Removido do final: ${removeUltimoNo}`);
      } else {
        console.log("A lista esta vazia.");
      }
      break;

    case "5": 
      if (valor && !isNaN(Number(valor))) {
        const index = Number(valor);
        const removeNoIndice = lista.removeNoIndice(index);
        if (removeNoIndice) {
          console.log(`Elemento no índice ${index} removido com sucesso.`);
        } else {
          console.log(`Indice ${index} fora do alcance ou lista vazia.`);
        }
      } else {
        console.log("Insira um índice valido para remover.");
      }
      break;

    case "6": 
      console.log("Lista atual:");
      lista.imprimir();
      break;

    case "7": 
      lista.limpar();
      console.log("A lista foi completamente limpa.");
      break;

    case "8": 
      console.log("Encerrando o programa...");
      rl.close();
      return;

    default:
      console.log("Comando invalido. Tente novamente.");
  }

  comandoNovo();
};

// Função para solicitar um novo comando
const comandoNovo = () => {
  console.log("\nDigite um comando:");
  rl.question("> ", (comandoInput) => {
    if (comandoInput === "1" || comandoInput === "2" || comandoInput === "5") {
      valor(comandoInput); 
    } else if (comandoInput === "8") {
      finalizar(comandoInput); 
    } else {
      finalizar(comandoInput); 
    }
  });
};

comandoNovo();

