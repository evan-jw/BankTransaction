describe('transaction', function () {
	beforeEach(module('transaction-app'));

	var $controller;

	beforeEach(inject(function(_$controller_){
	$controller = _$controller_;
	}));

	describe('controller', function () {
		it('should return array with search term', function () {
			var $scope = {};
			var controller = $controller('TransactionController', { $scope: $scope });
			var dummyData1 = [
				{
					Date: '21/04/2016',
					Description: 'Buying dinner',
					Transaction: '-$15.00',
					Balance: '$6105.00'
				},
				{
					Date: '01/04/2016',
					Description: 'Buying clothes',
					Transaction: '-$150.00',
					Balance: '$4150.00'
				},
				{
					Date: '25/03/2016',
					Description: 'Buying groceries',
					Transaction: '-$50.00',
					Balance: '$4300.00'
				}
			];
			
			var expectedResult = [
				{
					Date: '25/03/2016',
					Description: 'Buying groceries',
					Transaction: '-$50.00',
					Balance: '$4300.00'
				}
			];
			$scope.transactions = dummyData1;
			$scope.searchTerm = 'grocer';
			$scope.searchDesc();
			
			expect($scope.transactions).toEqual(expectedResult);
		});	
		
		it('should return nothing', function () {
			var $scope = {};
			var controller = $controller('TransactionController', { $scope: $scope });
			var dummyData1 = [
				{
					Date: '21/04/2016',
					Description: 'Buying dinner',
					Transaction: '-$15.00',
					Balance: '$6105.00'
				},
				{
					Date: '01/04/2016',
					Description: 'Buying clothes',
					Transaction: '-$150.00',
					Balance: '$4150.00'
				},
				{
					Date: '25/03/2016',
					Description: 'Buying groceries',
					Transaction: '-$50.00',
					Balance: '$4300.00'
				}
			];
			
			var expectedResult = [];
			$scope.transactions = dummyData1;
			$scope.searchTerm = 'RandomString';
			$scope.searchDesc();
			
			expect($scope.transactions).toEqual(expectedResult);
		});	
		
		it('should load more array', function () {
			var $scope = {};
			var controller = $controller('TransactionController', { $scope: $scope });
			var dummyData1 = [
				{
					Date: '25/03/2016',
					Description: 'Buying groceries',
					Transaction: '-$50.00',
					Balance: '$4300.00'
				}
			]
			
			var dummyData2 = [
				{
					Date: '20/03/2016',
					Description: 'Win Lottery',
					Transaction: '$100.00',
					Balance: '$4350.00'
				},
				{
					Date: '15/03/2016',
					Description: 'Pay rent',
					Transaction: '-$250.00',
					Balance: '$4250.00'
				},
				{
					Date: '05/03/2016',
					Description: 'Initial deposit',
					Transaction: '$4500.00',
					Balance: '$4500.00'
				} 
			];
			$scope.additionalData = dummyData2;
			$scope.transactions = dummyData1;
			var expectedResult = dummyData1.concat(dummyData2);
			
			$scope.loadMore();
			expect($scope.transactions).toEqual(expectedResult);
		});
	});
});