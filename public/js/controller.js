app.controller('GalleryController',['$scope','$firebaseArray', function($scope, $firebaseArray){
  var honorsRef = new Firebase("https://honorgift.firebaseio.com/honors");
  $scope.honors = $firebaseArray(honorsRef);
  //ng-repeat honor in honors on gallery.html



}]);

app.controller('HonorController',['$scope','$firebaseArray', function($scope, $firebaseArray){
  var honorsRef = new Firebase("https://honorgift.firebaseio.com/honors");
  $scope.honors = $firebaseArray(honorsRef);
  $scope.userInfo = function(){


    $scope.honors.$add($scope.formData).then(function(data){
    });
  };



}]);
// window.onload = function() {
// 		var fileInput = document.getElementById('fileInput');
// 		var fileDisplayArea = document.getElementById('fileDisplayArea');
//
// 		fileInput.addEventListener('change', function(e) {
// 			var file = fileInput.files[0];
// 			var textType = /text.*/;
//
// 			if (file.type.match(textType)) {
// 				var reader = new FileReader();
//
// 				reader.onload = function(e) {
// 					fileDisplayArea.innerText = reader.result;
// 				}
//
// 				reader.readAsText(file);
// 			} else {
// 				fileDisplayArea.innerText = "File not supported!"
// 			}
// 		});
// }
