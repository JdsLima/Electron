// Mascaras
function Mask() {
    console.log("mascara ativada");
    $("#cpf").mask("000.000.000-00");
    $("#telefone").mask("(00) 00000-0000");
    $("#Porcentagem").mask("000%", { reverse: true });
    $("#nomeFunc").change(function () {
        console.log("maiusculo");
        $(this).val($(this).val().toUpperCase());
    });
}

function addTableRow() {
    var table = document.getElementById("table-vendas"),
        newRow = table.insertRow(table.length), ce111 = newRow.insertCell(0), ce112 = newRow.insertCell(1),
        produtos = document.getElementById("select-produtos").value,
        quantidade = document.getElementById("UniProd").value;
    ce111.innerHTML = produtos; ce112.innerHTML = quantidade;
}

function Minimizar(){
    const app = require('electron').remote.app;
    const { remote } = require('electron');
    remote.BrowserWindow.getFocusedWindow().minimize(); 
}

function Maximizar(){
    const app = require('electron').remote.app;
    const { remote } = require('electron');
    if (remote.BrowserWindow.getFocusedWindow().isMaximized()) {
        remote.BrowserWindow.getFocusedWindow().restore();
        img = document.getElementById("MAXIMIZAR");
        img.src = "docs/assets/img/maximizar semfundo1.png";
    }else{
        remote.BrowserWindow.getFocusedWindow().maximize();
        img = document.getElementById("MAXIMIZAR");
        img.src = "docs/assets/img/maximizar semfundo.png";
    }
}

function Sair() {
    const app = require('electron').remote.app;
    const { remote } = require('electron');
    var r = confirm("VOCÊ DESEJA SAIR?");
    if (r == true) { remote.BrowserWindow.getFocusedWindow().close(); }
}