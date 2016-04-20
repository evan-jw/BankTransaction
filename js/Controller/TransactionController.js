var TransactionController= function($scope){
	
	// Hardcoded value for account no, available balance and current balance example
	$scope.accountNo = '123456789';
	$scope.availBal = '$7,200,200.00';
	$scope.curBal = '$7,231,200.00';
	
	var dummyData1 = [
		{
			Date: '01/01/2016',
			Description: 'Transaction in new year',
			Transaction: '-$50.31',
			Balance: '50'
		}
	];
	
	$scope.transactions = dummyData1;
}