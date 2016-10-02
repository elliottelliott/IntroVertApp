(function(){

	angular
		.module('introvert', []);

	angular
		.module('introvert')
		.controller('IntrovertCtrl',IntrovertCtrl);

	function IntrovertCtrl() {
		var introvertvm = this;

		//Variables
		introvertvm.images = [
			'img//buildingOne.jpg',
			'img//buildingTwo.jpg',
			'img//buildingThree.jpg',
			'img//buildingFour.jpg'

		];
		introvertvm.imageIndex = 0;
		//Function bindings
		introvertvm.next = next;
		introvertvm.previous = previous;

		//functions
		function next(){
			introvertvm.imageIndex = (introvertvm.imageIndex + 1) % introvertvm.images.length;
		}

		function previous(){
			introvertvm.imageIndex = (introvertvm.imageIndex - 1) % introvertvm.images.length;
		}
	}

})();

