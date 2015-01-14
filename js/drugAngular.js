var app = angular.module('app', []);

function moneyCtrl($scope){

$scope.drugCountm = 
	{drug:"Marijuana", amount: 0};
$scope.drugCountc = 
	{drug:"Cocaine", amount: 0};
$scope.drugCounte = 
	{drug:"Ecstacy", amount: 0};
$scope.drugCounth = 
	{drug:"Heroine", amount: 0};
$scope.drugCounty = 
	{drug:"Crystal Meth", amount: 0};

	$scope.money = {
	total : 0};
	
		$scope.secondsBeforeExpire = 0;
	$scope.petty = function(){
		var petty1 = Math.floor(Math.random() * 5 +1);
			if(petty1 >= 3){
				$scope.pettyWins = true;
				$scope.jail = false;
				var pettyPaid = Math.floor(Math.random() *(120 -80) +80);
				$scope.money.total = $scope.money.total + pettyPaid;
				$scope.win = pettyPaid;
				$scope.Crime = false;
				$scope.Return = true;
			}
			else{				
				$scope.jail = true;
				$scope.pettyWins = false;
				$scope.Crime = false;
				$scope.jailTimer = true;
				$scope.Return = false;
				$scope.jailRelease = true;
				var pettyTimer = 15;
				$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + pettyTimer;
				$scope.countDown();
			}

			};
		$scope.middle = function(){
		var middle1 = Math.floor(Math.random() * 9 +1);
		if (middle1 >= 5){
			$scope.pettyWins = true;
			$scope.jail = false;
			var middlePaid = Math.floor(Math.random() *(300 -250) +250);
			$scope.money.total = $scope.money.total + middlePaid;
			$scope.win = middlePaid; 
			$scope.Return = true;
			$scope.Crime = false;

	}
		else{
			$scope.jail = true;
			$scope.pettyWins = false;
			$scope.Crime = false;
			$scope.jailTimer = true;
			$scope.jailRelease = true;
			$scope.Return = false;
			var middleTimer = 30;
			$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + middleTimer;
			$scope.countDown();
		}
	};

	$scope.high =function(){
			var high1 = Math.floor(Math.random() * 10 +1);
			if (high1 >= 6){
				$scope.pettyWins = true;
				$scope.jail = false;
				var highPaid = Math.floor(Math.random() *(500 -460) +460);
				$scope.money.total = $scope.money.total +highPaid;
				$scope.win = highPaid;
				$scope.Crime = false;
				$scope.Return = true;
			}

			else{
				$scope.jail = true;
				$scope.pettyWins = false;
				$scope.Crime = false;
				$scope.Return = false;
				$scope.jailTimer = true;
				$scope.jailRelease = true;
				var highTimer = 45;
				$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + highTimer;
				$scope.countDown();
			}
		};


		$scope.most = function(){
		var most1 = Math.floor(Math.random() * 12 +1);
		if (most1 >= 10){
			$scope.pettyWins = true;
			$scope.jail = false;
			var mostPaid = Math.floor(Math.random() *(720 -680) +680);
			$scope.money.total = $scope.money.total + mostPaid;
			$scope.win = mostPaid;
			$scope.Crime = false;
			$scope.Return = true;

	}
		else{
			$scope.jail = true;
			$scope.pettyWins = false;
			$scope.Crime = false;
			$scope.Return = false;
			$scope.jailTimer = true;
			var mostTimer = 60;
			$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + mostTimer;
			$scope.countDown();
		}
	};
	$scope.goBack = function(){
		$scope.Main = true;
		$scope.pettyWins = false;
		$scope.Return = false;
		$scope.Crime = false;
		$scope.travel = false;
		$scope.Trade = false;
	};
	$scope.JailRelease = function(){
				$scope.jail = false;
				$scope.Main = true;
			};

			
	$scope.countDown = function(){
				var timer = setInterval(function(){
				if ($scope.secondsBeforeExpire <= 0){
				clearInterval(timer);
				$scope.jailRelease = false;

 		}
 		else{
				$scope.secondsBeforeExpire--;
				$scope.$apply();
				$scope.jailTimer = true;
				$scope.jailRelease = true;
				console.log($scope.secondsBeforeExpire);
				}
			}, 1000);
			};
	$scope.bribe = function(){
		var bribe = 400;
		var secondsBeforeExpire = 0;
					if(($scope.money.total - bribe) >= 0){
						$scope.secondsBeforeExpire = 0;
						$scope.jail = false;
						$scope.Main = true;
						$scope.Return = false;
						$scope.money.total = $scope.money.total - bribe;
					}
					else{
						$scope.bribeNo = true;
					}
	}

	$scope.classWoo = "tokyo";

		$scope.changeClassLondon = function(){
				$scope.classWoo = "london";
				$scope.travel = false;
				$scope.Main = true;
				$scope.Return = false;
				$scope.travelCountdown();
			};
		$scope.changeClassTokyo = function(){
			$scope.classWoo = "tokyo";
			$scope.travel = false;
			$scope.Main = true;
			$scope.Return = false;
			$scope.travelCountdown();
		};
		$scope.changeClassLA = function(){
			$scope.classWoo = "LA";
			$scope.travel = false;
			$scope.Main = true;
			$scope.Return = false;
			$scope.travelCountdown();
		};
		$scope.changeClassNY = function(){
			$scope.classWoo = "NY";
			$scope.travel = false;
			$scope.Main = true;
			$scope.Return = false;
			$scope.travelCountdown();
		};	

		$scope.travelCountdown = function(){
			$scope.secondsTravelExpire = 600;
			var Traveltimer = setInterval(function(){
				if ($scope.secondsTravelExpire <= 0){
				clearInterval(timer);

 			}
 		else{
				$scope.secondsTravelExpire--;
				$scope.travelTimer = true;
				$scope.$apply();
				console.log($scope.secondsTravelExpire);
				}
			}, 1000);
			};

		$scope.trade = function(classWoo){
			$scope.Main = false;
			$scope.Trade = true;
			$scope.Return = true;
			 if($scope.classWoo == "london"){
				$scope.mCost = Math.floor(Math.random() * (220 - 190) +190);
				$scope.cCost = Math.floor(Math.random() * (450 - 420) +420);
				$scope.eCost = Math.floor(Math.random() * (340 - 320) +320);
				$scope.hCost = Math.floor(Math.random() * (400 - 380) +380);
				$scope.yCost = Math.floor(Math.random() * (320 - 290) +290);
				}
			else if ($scope.classWoo == "tokyo"){
				$scope.mCost = Math.floor(Math.random() * (180 - 150) +150);
				$scope.cCost = Math.floor(Math.random() * (350 - 320) +320);
				$scope.eCost = Math.floor(Math.random() * (500 - 480) +480);
				$scope.hCost = Math.floor(Math.random() * (620 - 600) +600);
				$scope.yCost = Math.floor(Math.random() * (280 - 260) +260);
			}
			else if ($scope.classWoo == "LA"){
				$scope.mCost = Math.floor(Math.random() * (90 - 70) +70);
				$scope.cCost = Math.floor(Math.random() * (550 - 530) +530);
				$scope.eCost = Math.floor(Math.random() * (420 - 390) +390);
				$scope.hCost = Math.floor(Math.random() * (300 - 280) +280);
				$scope.yCost = Math.floor(Math.random() * (160 - 140) +140);
				}
			else if ($scope.classWoo == "NY"){
				$scope.mCost = Math.floor(Math.random() * (290 - 270) +270);
				$scope.cCost = Math.floor(Math.random() * (700 - 670) +670);
				$scope.eCost = Math.floor(Math.random() * (600 - 550) +550);
				$scope.hCost = Math.floor(Math.random() * (400 - 380) +380);
				$scope.yCost = Math.floor(Math.random() * (80 - 60) +60);
			}
		};


			$scope.Buym = function(){
				if ((($scope.money.total - ($scope.mCost * $scope.drugCostm)) > 0) && ($scope.drugCostm>=0)){
				$scope.money.total = $scope.money.total - ($scope.mCost * $scope.drugCostm);
				$scope.drugCountm.amount = $scope.drugCountm.amount + $scope.drugCostm;
				console.log($scope.drugCountm.amount);
				}
			};
			$scope.Sellm = function(){
				if(($scope.drugCountm.amount>0) && (( ($scope.drugCostm) * (-1) ) <= $scope.drugCountm.amount) && ($scope.drugCostm<=0)){
					$scope.money.total = $scope.money.total - ($scope.mCost * $scope.drugCostm);
					$scope.drugCountm.amount = $scope.drugCountm.amount + $scope.drugCostm;
				}
			};
			$scope.Buyc = function(){
				if ((($scope.money.total - ($scope.cCost * $scope.drugCostc)) > 0) && ($scope.drugCostc>=0)){
				$scope.money.total = $scope.money.total - ($scope.cCost * $scope.drugCostc);
				$scope.drugCountc.amount = $scope.drugCountc.amount + $scope.drugCostc;
				console.log($scope.drugCountc.amount);
				}
			};
			$scope.Sellc = function(){
				if(($scope.drugCountc.amount>0) && (( ($scope.drugCostc) * (-1) ) <= $scope.drugCountc.amount) && ($scope.drugCostc<=0)){
					$scope.money.total = $scope.money.total - ($scope.cCost * $scope.drugCostc);
					$scope.drugCountc.amount = $scope.drugCountc.amount + $scope.drugCostc;
				}
			};

			$scope.Buyh = function(){
				if ((($scope.money.total - ($scope.hCost * $scope.drugCosth)) > 0) && ($scope.drugCosth>=0)){
				$scope.money.total = $scope.money.total - ($scope.hCost * $scope.drugCostc);
				$scope.drugCounth.amount = $scope.drugCounth.amount + $scope.drugCostc;
				console.log($scope.drugCountc.amount);
				}
			};
			$scope.Sellh = function(){
				if(($scope.drugCounth.amount>0) && (( ($scope.drugCosth) * (-1) ) <= $scope.drugCounth.amount) && ($scope.drugCosth<=0)){
					$scope.money.total = $scope.money.total - ($scope.hCost * $scope.drugCosth);
					$scope.drugCounth.amount = $scope.drugCounth.amount + $scope.drugCosth;
				}
			};

			$scope.Buye = function(){
				if ((($scope.money.total - ($scope.eCost * $scope.drugCoste)) > 0) && ($scope.drugCoste >= 0)){
				$scope.money.total = $scope.money.total - ($scope.eCost * $scope.drugCoste);
				$scope.drugCounte.amount = $scope.drugCounte.amount + $scope.drugCoste;
				console.log($scope.drugCounte.amount);
				}
			};
			$scope.Selle = function(){
				if (($scope.drugCounte.amount> 0) && (( ($scope.drugCoste) * (-1) ) <= $scope.drugCounte.amount) && ($scope.drugCoste<=0)){
					$scope.money.total = $scope.money.total - ($scope.eCost * $scope.drugCoste);
					$scope.drugCounte.amount = $scope.drugCounte.amount + $scope.drugCoste;
				}
			};

			$scope.Buyy = function(){
				if ((($scope.money.total - ($scope.yCost * $scope.drugCosty)) > 0) && ($scope.drugCosty>=0)){
				$scope.money.total = $scope.money.total - ($scope.yCost * $scope.drugCosty);
				$scope.drugCounty.amount = $scope.drugCounty.amount + $scope.drugCosty;
				console.log($scope.drugCounty.amount);
				}
			};
			$scope.Selly = function(){
				if(($scope.drugCounty.amount>0) && (( ($scope.drugCosty) * (-1) ) <= $scope.drugCounty.amount) && ($scope.drugCosty<=0)){
					$scope.money.total = $scope.money.total - ($scope.yCost * $scope.drugCosty);
					$scope.drugCounty.amount = $scope.drugCounty.amount + $scope.drugCosty;
				}
			};


// new error. if you try to subtract more than you have, it subtracts to negative. 


	$scope.Main = true;
	$scope.Crime = false;
	$scope.Return = false;
	$scope.jailRelease = false;
	$scope.jailTimer = false;
	$scope.bribeNo = false;
	$scope.Trade = false;
	$scope.LosA = false;
	$scope.NewY = false;
	$scope.Travel = false;
	$scope.Tokyo = false;
	$scope.London = false;
};

