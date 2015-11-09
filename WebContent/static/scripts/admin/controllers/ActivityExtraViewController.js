define(['angular'], function(angular) {    
	
	var ctrl = ['$scope','$resource', function($scope, $resource){
		
		var ActivityExtra = $resource('/tour-guide/activity/extra', {}, {'update': { method:'PUT' }}),
			extra = $scope.activityExtra = {};
		
		$scope.saveRec = function(){
			extra.type = 'REC_PLAN';
			
			ActivityExtra.save(extra, function(resp){
				
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