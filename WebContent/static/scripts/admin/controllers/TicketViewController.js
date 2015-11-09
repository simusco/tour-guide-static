define(['angular'], function(angular) {    
	
	var ctrl = ['$scope','$resource', function($scope, $resource){
		
		var Ticket = $resource('/tour-guide/ticket', {}, {'update': { method:'PUT' }}),
			ticket = $scope.ticket = {};
		
		$scope.saveTicket = function(){
			Ticket.save(ticket, function(resp){
				var data = resp.object;
				var flag = resp.flag;
				
				if(flag){
					print(data);
					alert("保存数据成功!");
				}
			});
		}
		
	}];
	
	return ctrl;
	
});