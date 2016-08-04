(function() {
	'use strict';
	angular.module('zoomableImageGallery').controller('zoomableImageGalleryController', zoomableImageGalleryController);

	function zoomableImageGalleryController($scope, $stateParams, $timeout, $ionicHistory, $ionicSlideBoxDelegate) {
		
		var customOptions = {};
		if(!angular.isUndefined($stateParams)){
			customOptions = $stateParams.data; //Pass the stateParams while navigating to this module
		}
		var _options = {
			imagesData : new Array(),
			allowSwipe : false,
			showCaption : true,
			isZoomable : true,
			isContinue : true,
			showStrip : true,
			showNavigationArrow : true,
			startIndex : 1
		};
		
		if(customOptions.isZoomable != undefined && customOptions.isZoomable == false){
			_options.allowSwipe = true; //When zommable is false then default allowswipe is true
		}
		
		if(customOptions.showNavigationArrow != undefined && customOptions.showNavigationArrow == false){
			_options.allowSwipe = true; //When showNavigationArrow is false then default allowswipe is true
		}
		
		$scope.options = $.extend(true, _options, customOptions);
		
		$scope.imagesData = $scope.options.imagesData;
		
		if($scope.options.showCaption == false && ($scope.options.showNavigationArrow == false ||   $scope.imagesData.length <= 1) ){
			$scope.options.showStrip = false;
		}
		
		if( $scope.imagesData.length <= 2) { //Ionic bug for 2 slides when does-continue is true (It shows 4 slides instead 2)
			$scope.options.isContinue = false;
		}
		
		$timeout(function(){
			$ionicSlideBoxDelegate.update();
		}, 1);	
		
		$scope.initSlideBox = function() {
			$scope.allowSwipe($scope.options.allowSwipe);
			$timeout(function(){
				$scope.goToSlide($scope.options.startIndex - 1);
			}, 10);
		};
		$scope.allowSwipe = function(allowSwipe){
			$ionicSlideBoxDelegate.$getByHandle('slider').enableSlide(allowSwipe);
		};
		$scope.nextSlide = function() {
		    $ionicSlideBoxDelegate.next();
		};
		$scope.previousSlide = function() {
		    $ionicSlideBoxDelegate.previous();
		};
		$scope.goToSlide = function(index) {
		    $ionicSlideBoxDelegate.slide(parseInt(index));
		};
		$scope.slideVisible = function(index){ // Not in use
			if(  index < $ionicSlideBoxDelegate.currentIndex() -1  || index > $ionicSlideBoxDelegate.currentIndex() + 1){
		      return false;
		    } else {
		    	return true;
		    }
		};
	}
})();
