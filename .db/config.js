var request = window.indexedDB.open("Config", 1);
var db;
request.onerror = event => {
    console.log("Erro ao abrir o banco de dados", event);
}
request.onupgradeneeded = event => {
    console.log("Atualizando...");
    db = event.target.result;
    var objectStore = db.createObjectStore("Configuracoes", { keyPath: "Config" });
};
request.onsuccess = event => {
    console.log("Configurações abertas com sucesso.");
    db = event.target.result;
}