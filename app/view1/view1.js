'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {

	$scope.typePlace = [
	  { typeValue: 'accounting', label: 'contabilidade' },
	  { typeValue: 'airport', label: 'aeroporto'},
	  { typeValue: 'amusement_park', label: 'Parque de diversões' },
	  { typeValue: 'aquarium', label: 'aquário'},
	  { typeValue: 'art_gallery', label : 'galeria de Arte'},
	  { typeValue: 'atm', label: 'ATM'},
	  { typeValue: 'bakery', label: 'padaria'},
	  { typeValue: 'bank', label: 'banco'},
	  { typeValue: 'bar', label: 'Bar'},
	  { typeValue: 'beauty_salon', label: 'salão de beleza'},
	  { typeValue: 'bicycle_store', label: 'Loja de bicicletas'},
	  { typeValue: 'book_store', label: 'livraria'},
	  { typeValue: 'bowling_alley', label: 'Pista de boliche'},
	  { typeValue: 'bus_station', label: 'estação de onibus'},
	  { typeValue: 'cafe', label: 'lanchonete'},
	  { typeValue: 'campground', label: 'área de camping'},
	  { typeValue: 'car_dealer', label: 'venda de carros'},
	  { typeValue: 'car_rental', label: 'Aluguel de carro'},
	  { typeValue: 'car_repair', label: 'reparo de carro'},
	  { typeValue: 'car_wash', label: 'lava-jato'},
	  { typeValue: 'casino', label: 'casino'},
	  { typeValue: 'cemetery', label: 'cemitério'},
	  { typeValue: 'church', label: 'Igreja'},
	  { typeValue: 'city_hall', label: 'Prefeitura'},
	  { typeValue: 'clothing_store', label: 'loja de roupas'},
	  { typeValue: 'convenience_store', label: 'loja de conveniência'},
	  { typeValue: 'courthouse', label: 'Tribunal'},
	  { typeValue: 'dentist', label: 'dentista'},
	  { typeValue: 'department_store', label: 'loja de departamento'},
	  { typeValue: 'doctor', label: 'médico'},
	  { typeValue: 'electrician', label: 'eletricista'},
	  { typeValue: 'electronics_store', label: 'loja de eletrônicos'},
	  { typeValue: 'embassy', label: 'embaixada'},
	  { typeValue: 'fire_station', label: 'Corpo de Bombeiros'},
	  { typeValue: 'florist', label: 'florista'},
	  { typeValue: 'funeral_home', label: 'Casa funerária'},
	  { typeValue: 'furniture_store', label: 'loja de móveis'},
	  { typeValue: 'gas_station', label: 'posto de gasolina'},
	  { typeValue: 'grocery_or_supermarket', label: 'Supermercado'},
	  { typeValue: 'gym', label: 'Academia'},
	  { typeValue: 'hair_care', label: 'cuidado capilar'},
	  { typeValue: 'hardware_store', label: 'Loja de ferragens'},
	  { typeValue: 'health', label: 'saúde'},
	  { typeValue: 'hindu_temple', label: 'Templo hindu'},
	  { typeValue: 'home_goods_store', label: 'Loja de artigos para o lar'},
	  { typeValue: 'hospital', label: 'hospital'},
	  { typeValue: 'insurance_agency', label: 'agência de seguros'},
	  { typeValue: 'jewelry_store', label: 'Loja de jóias'},
	  { typeValue: 'laundry', label: 'lavanderia'},
	  { typeValue: 'lawyer', label: 'advogado'},
	  { typeValue: 'library', label: 'biblioteca'},
	  { typeValue: 'liquor_store', label: 'Loja de bebidas alcoólicas'},
	  { typeValue: 'local_government_office', label: 'Escritório do governo local'},
	  { typeValue: 'locksmith', label: 'chaveiro'},
	  { typeValue: 'lodging', label: 'alojamento'},
	  { typeValue: 'movie_theater', label: 'cinema'},
	  { typeValue: 'moving_company', label: 'Empresa de mudanças'},
	  { typeValue: 'museum', label: 'museum'},
	  { typeValue: 'night_club', label: 'Boate'},
	  { typeValue: 'park', label: 'parque'},
	  { typeValue: 'parking', label: 'estacionamento'},
	  { typeValue: 'pet_store', label: 'loja de animais'},
	  { typeValue: 'pharmacy', label: 'farmacia'},
	  { typeValue: 'physiotherapist', label: 'fisioterapeuta'},
	  { typeValue: 'plumber', label: 'encanador'},
	  { typeValue: 'police', label: 'polícia'},
	  { typeValue: 'post_office', label: 'Agência dos Correios'},
	  { typeValue: 'real_estate_agency', label: 'Agência imobiliária'},
	  { typeValue: 'restaurant', label: 'restaurante'},
	  { typeValue: 'school', label: 'escola'},
	  { typeValue: 'shoe_store', label: 'loja de sapatos'},
	  { typeValue: 'shopping_mall', label: 'Centro de compras'},
	  { typeValue: 'spa', label: 'spa'},
	  { typeValue: 'stadium', label: 'estádio'},
	  { typeValue: 'storage', label: 'armazenamento'},
	  { typeValue: 'store', label: 'loja'},
	  { typeValue: 'subway_station', label: 'estação de metrô'},
	  { typeValue: 'taxi_stand', label: 'ponto de taxi'},
	  { typeValue: 'train_station', label: 'estação de trem'},
	  { typeValue: 'travel_agency', label: 'agência de viagens'},
	  { typeValue: 'university', label: 'universidade'},
	  { typeValue: 'veterinary_care', label: 'veterinário'},
	  { typeValue: 'zoo', label: 'jardim zoológico'}
	];

	$scope.places = [];
	$scope.lat;
	$scope.lng;
	$scope.typePlaceFind;

	$scope.searchPlace = function() {
		$http({
		  method: 'GET',
		  url: 'http://localhost:8080/placeSearchs',
		  headers: {
	   		'lat': '-7.105171',
	   		'lng': '-34.839',
	   		'type': $scope.typePlaceFind
	 	  }
		}).then(function successCallback(response) {
		    console.log(response.data);
		    $scope.places = response.data;
		}, function errorCallback(response) {
		    console.log(response);
		});
	}
});