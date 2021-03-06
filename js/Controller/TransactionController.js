var TransactionController= function($scope){
	
	// Hardcoded value for account no, available balance and current balance example
	$scope.accountNo = '123456789';
	$scope.availBal = '$7,200,200.00';
	$scope.curBal = '$7,231,200.00';
	
	// Flag to signal whether user can load more data or not
	var loadMoreFlag = 0;
	
	// Assign empty string in order to avoid undefined value
	$scope.searchTerm = '';
	
	// Sample data 1
	var dummyData1 = [
		{
			Date: '21/04/2016',
			Description: 'Buying dinner',
			Transaction: '-$15.00',
			Balance: '$6105.00'
		},
		{
			Date: '19/04/2016',
			Description: 'Win a bet',
			Transaction: '$20.00',
			Balance: '$6120.00'
		},
		{
			Date: '10/04/2016',
			Description: 'Salary from xxxxxxxx',
			Transaction: '$2000.00',
			Balance: '$6100.00'
		},
		{
			Date: '09/04/2016',
			Description: 'Give donation for world peace',
			Transaction: '-$50.00',
			Balance: '$4100.00'
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
	
	// Sample data 2 for load more function
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
	
	$scope.transactions = dummyData1;
	
	$scope.searchDesc = function(){
		/*
		*	Whenever additional data is not loaded, use only dummyData1 for search function
		*	If additional data is loaded, then concat dummyData2 to scope.transactions	
		*/
		if(loadMoreFlag !== 1){
			$scope.transactions = dummyData1;
		}else{
			$scope.transactions = dummyData1.concat(dummyData2);
		}
		
		var searchResult = $.grep($scope.transactions, function (item) { return item.Description.toLowerCase().indexOf($scope.searchTerm.toLowerCase()) >= 0 });
		$scope.transactions = searchResult;
	}
	
	$scope.loadMore = function(){
		// Use a flag to load. 
		// In real world scenario, we can use $http.get to get the data and pass the date and number of data needed as parameters
		if(loadMoreFlag !== 1){
			$scope.additionalData = dummyData2;
			$scope.transactions = $scope.transactions.concat($scope.additionalData);
			loadMoreFlag = 1;
		}
	}
}