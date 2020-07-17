$(document).ready(function () {
    var request = window.indexedDB.open("Cadastro", 2);
    var db;
    request.onerror = function (event) {
        console.log("Erro ao abrir o banco de dados", event);
    }
    request.onupgradeneeded = function (event) {
        console.log("Atualizando...");
        db = event.target.result;
        var objectStore = db.createObjectStore("Funcionarios", { keyPath: "Codigo" });
        var objectStore2 = db.createObjectStore("Produtos", { keyPath: "Produto"});
    };
    request.onsuccess = function (event) {
        console.log("Banco de dados aberto com sucesso.");
        db = event.target.result;
    }

    // cadastrar produtos
    $('#SaveProd').click(function () {
        var nomeProduto = $("#nomeProduto").val(); // string
        var valCompra = $("#ValorCompra").val(); //float
        var valVenda = $("#ValorVenda").val(); //float
        var Percent = $("#Porcentagem").val() //float
        String(Percent);

        var transaction = db.transaction(["Produtos"], "readwrite");
        transaction.oncomplete = function (event) {
            console.log("sucesso!!");
        };
        transaction.onerror = function (event) {
            console.log("Erro :(");
        };
        var ProdutosObjectStore = db.transaction("Produtos", "readwrite").objectStore("Produtos");
        ProdutosObjectStore.add({ Produto: nomeProduto, ValorDeCompra: valCompra, ValorDeVenda: valVenda, Porcentagem: Percent });
    });

    // mostrar Produtos
    function Mostrar() {
        var table = document.getElementById("ListaProd"),
            newRow = table.insertRow(table.length), ce111 = newRow.insertCell(0), ce112 = newRow.insertCell(1),
            ce113 = newRow.insertCell(2), ce114 = newRow.insertCell(3),
            nomeProduto = "nome", Preco = "12", valorRevenda = "123", Porcentagem = "12%";
        ce111.innerHTML = nomeProduto, ce112.innerHTML = Preco, ce113.innerHTML = valorRevenda, ce114.innerHTML = Porcentagem;
    };

    //remover Produto
    $('#RemoverProd').click(function () {
        var Produto = document.getElementById("SelectProdutos").val();
        String(Produto);
        var request = db.transaction(["Produtos"], "readwrite").objectStore("Produtos").delete(Produto);
        
        request.onsuccess = function (event) {
            // Pronto!
        };
    });

})
