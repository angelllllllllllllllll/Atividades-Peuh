function valores{
     window.prompt("Insira qual o valor do seu pagamento");
}
function calcularTroco() 
     //obter o valor do produto selecionado
     var produtoSelecionado=
     document.getElementById("produto").val
     ue ;
     var ValorProduto;
     //definir o valor do produto com base na seleção do usúario 
     switch 
     (produtoSelecionado) {
          case "1":
               ValorProduto =
       10.00;
           break;
           case "2":
               ValorProduto =
       15.00;   
           break
           case "3"
               ValorProduto =
       20.00; 
              break;
              default: 
              ValorProduto = 0;
             }
             //obter o valor do pagamento inserido pelo usuário 
             var troco =valorPagamento
             -ValorProduto;
             //exibir o troco
             if (troco >=0) {}