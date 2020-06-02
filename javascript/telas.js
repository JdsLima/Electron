var app = angular.module("meuApp", ["ngRoute"]);
  app.config(function($routeProvider) {
    $routeProvider
    .when("/cadastro", {
      templateUrl : "html/cadastro.html"
      })
    .when("/calcular", {
      templateUrl : "html/calcular.html"
    })
    .when("/status", {
      templateUrl: "html/status.html"
    })
    .when("/cadastroProd", {
      templateUrl : "html/cadastrarProd.html"
    })
    .when("/removeFunc", {
      templateUrl : "html/removeFunc.html"
    })
    .when("/listarProd", {
      templateUrl : "html/listarProdutos.html"
    });
  });