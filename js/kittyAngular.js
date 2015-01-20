var app = angular.module('app', []);

function moneyCtrl($scope){
// only main middle part needs to have class of main. side bar does not
$scope.drugCountm = 
	{drug:"Boxes", amount: 0};
$scope.drugCountc = 
	{drug:"Catnip", amount: 0};
$scope.drugCounte = 
	{drug:"Can of Tuna", amount: 0};
$scope.drugCounth = 
	{drug:"Scratching Post", amount: 0};
$scope.drugCounty = 
	{drug:"Laser Pointer", amount: 0};

	$scope.money = {
	total : 0};
	$scope.UpgradeSwitch = function(){
		$scope.Main= false;
		$scope.upgrades = true;
		$scope.Return = true;
	};




	$scope.crimeUpgrade = 0;
	$scope.pistolPurchase = function(){
		if ($scope.money.total >= 1500){
			$scope.crimeUpgrade = $scope.crimeUpgrade + 1; 
			$scope.money.total= $scope.money.total - 1500;
		}
	};
	$scope.akPurchase = function(){
		if ($scope.money.total >= 4000){
			$scope.crimeUpgrade = $scope.crimeUpgrade +3;
			$scope.money.total = $scope.money.total - 4000;
		}
	};

	$scope.travelUpgrade = 0;
	$scope.carBuy = function(){
		if ($scope.money.total >= 5000){
			$scope.travelUpgrade = $scope.travelUpgrade +100;
			$scope.money.total = $scope.money.total - 5000;
		}
	};
	$scope.planeBuy = function(){
		if ($scope.money.total >= 10000){
			$scope.travelUpgrade = $scope.travelUpgrade + 200;
			$scope.money.total = $scope.money.total - 10000;
		}
	};


// haven't finished upgrades yet. only done AK


		$scope.secondsBeforeExpire = 0;
	$scope.petty = function(){
		var petty1 = Math.floor(Math.random() * 5 +1) +$scope.crimeUpgrade;
			if(petty1 >= 3){
				$scope.crimeWin();
				var pettyPaid = Math.floor(Math.random() *(120 -80) +80);
				$scope.money.total = $scope.money.total + pettyPaid;
				$scope.win = pettyPaid;
				$scope.crimeCountdown();
			}
			else{				
				$scope.jail0 = true;
				$scope.jailShow();
				var pettyTimer = 15;
				$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + pettyTimer;
				$scope.countDown();
				$scope.pettyFail = true;
			}

			};
		$scope.middle = function(){
		var middle1 = Math.floor(Math.random() * 9 +1) +$scope.crimeUpgrade;
		if (middle1 >= 5){
			$scope.crimeWin();
			var middlePaid = Math.floor(Math.random() *(300 -250) +250);
			$scope.money.total = $scope.money.total + middlePaid;
			$scope.win = middlePaid; 
			$scope.crimeCountdown();
			}
		else{
			$scope.jail1 = true;
			$scope.jailShow();
			var middleTimer = 30;
			$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + middleTimer;
			$scope.countDown();
		}
	};

	$scope.high =function(){
			var high1 = Math.floor(Math.random() * 10 +1) +$scope.crimeUpgrade;
			if (high1 >= 6){
				var highPaid = Math.floor(Math.random() *(500 -460) +460);
				$scope.money.total = $scope.money.total +highPaid;
				$scope.win = highPaid;
				$scope.crimeWin();
				$scope.crimeCountdown();
			}

			else{
				$scope.jail2 = true;
				$scope.jailShow();
				var highTimer = 45;
				$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + highTimer;
				$scope.countDown();
			}
		};

		$scope.most = function(){
		var most1 = Math.floor(Math.random() * 12 +1) +$scope.crimeUpgrade;
		if (most1 >= 10){
			$scope.crimeWin();
			var mostPaid = Math.floor(Math.random() *(720 -680) +680);
			$scope.money.total = $scope.money.total + mostPaid;
			$scope.win = mostPaid;
			$scope.crimeCountdown();
			}
		else{
			$scope.jail3 = true;
			$scope.jailShow();
			var mostTimer = 60;
			$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + mostTimer;
			$scope.countDown();
		}
	};

	$scope.crimeWin = function(){
	$scope.Crime = false;
	$scope.Return = true;
	$scope.pettyWins = true;
	$scope.jail = false;
	};

	$scope.jailShow = function(){
				$scope.pettyWins = false;
				$scope.Crime = false;
				$scope.Return = false;
				$scope.jailTimer = true;
				$scope.jailRelease = true;
			};


	$scope.goBack = function(){
		$scope.Main = true;
		$scope.pettyWins = false;
		$scope.Return = false;
		$scope.Crime = false;
		$scope.travel = false;
		$scope.Trade = false;
		$scope.upgrades = false;
	};
	$scope.JailRelease = function(){
				$scope.clearJails();
				$scope.Main = true;
			};

	$scope.clearJails = function(){
		$scope.jail0 = false;
				$scope.jail1= false;
				$scope.jail2= false;
				$scope.jail3 = false;
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
						$scope.clearJails();
						$scope.Main = true;
						$scope.Return = false;
						$scope.money.total = $scope.money.total - bribe;
						$scope.bribeNo = false;
					}
					else{
						$scope.bribeNo = true;
					}
	};

	$scope.classWoo = "Main";

		$scope.changeClassLondon = function(){
				$scope.classWoo = "london";
				$scope.London = true;
				$scope.Tokyo = false;
				$scope.LA = false;
				$scope.NY = false;
				$scope.tradeMoney((9/8),(10/10),(7/8),(12/10),(10/8));
				$scope.travelChange();
			};
		$scope.changeClassTokyo = function(){
			$scope.classWoo = "tokyo";
			$scope.Tokyo = true;
			$scope.London = false;
			$scope.LA = false;
			$scope.NY = false;
			$scope.tradeMoney((12/10),(9/10),(11/10),(11/10),(9/8));
			$scope.travelChange();
		};
		$scope.changeClassLA = function(){
			$scope.classWoo = "LA";
			$scope.LA = true;
			$scope.Tokyo = false;
			$scope.London = false;
			$scope.NY = false;
			$scope.tradeMoney((7/8),(12/10),(9/10),(10/10),(9/10));
			$scope.travelChange();
		};
		$scope.changeClassNY = function(){
			$scope.classWoo = "NY";
			$scope.NY = true;
			$scope.Tokyo = false;
			$scope.London = false;
			$scope.LA = false;
			$scope.tradeMoney((10/11),(7/8),(11/10),(9/10),(9/8));
			$scope.travelChange();
		};	

		$scope.travelCountdown = function(){
			$scope.secondsTravelExpire = 300 - $scope.travelUpgrade;
			var Traveltimer = setInterval(function(){
				if ($scope.secondsTravelExpire <= 0){
				clearInterval(Traveltimer);

 			}
 		else{
				$scope.secondsTravelExpire--;
				$scope.travelTimer = true;
				$scope.$apply();
				console.log($scope.secondsTravelExpire);
				}
			}, 1000);
			};

			$scope.travelChange = function(){
				$scope.travel = false;
				$scope.Main = true;
				$scope.open = false;
				$scope.Return = false;
				$scope.travelCountdown();
			};

		$scope.trade = function(classWoo){
			$scope.Main = false;
			$scope.Trade = true;
			$scope.Return = true;
		};
		$scope.tradeMoney = function(weed,coke,x,heroin,meth){
				$scope.mCost = Math.floor((Math.random() * (220 - 190) +190) * weed);
				$scope.cCost = Math.floor((Math.random() * (450 - 420) +420) * coke);
				$scope.eCost = Math.floor((Math.random() * (340 - 320) +320) * x);
				$scope.hCost = Math.floor((Math.random() * (400 - 380) +380) * heroin);
				$scope.yCost = Math.floor((Math.random() * (320 - 290) +290) * meth);
		};


			$scope.Buym = function(){
				if ((($scope.money.total - ($scope.mCost * $scope.drugCostm)) > 0) && ($scope.drugCostm>=0)){
				$scope.mAction();
				}
			};
			$scope.Sellm = function(){
				if(($scope.drugCountm.amount>0) && (( ($scope.drugCostm) * (-1) ) <= $scope.drugCountm.amount) && ($scope.drugCostm<=0)){
					$scope.mAction();
				}
			};
			$scope.Buyc = function(){
				if ((($scope.money.total - ($scope.cCost * $scope.drugCostc)) > 0) && ($scope.drugCostc>=0)){
				$scope.cAction();
				}
			};
			$scope.Sellc = function(){
				if(($scope.drugCountc.amount>0) && (( ($scope.drugCostc) * (-1) ) <= $scope.drugCountc.amount) && ($scope.drugCostc<=0)){
					$scope.cAction();
				}
			};

			$scope.Buyh = function(){
				if ((($scope.money.total - ($scope.hCost * $scope.drugCosth)) > 0) && ($scope.drugCosth>=0)){
				$scope.hAction();
				}
			};
			$scope.Sellh = function(){
				if(($scope.drugCounth.amount>0) && (( ($scope.drugCosth) * (-1) ) <= $scope.drugCounth.amount) && ($scope.drugCosth<=0)){
					$scope.hAction();
				}
			};

			$scope.Buye = function(){
				if ((($scope.money.total - ($scope.eCost * $scope.drugCoste)) > 0) && ($scope.drugCoste >= 0)){
				$scope.xAction();
				}
			};
			$scope.Selle = function(){
				if (($scope.drugCounte.amount> 0) && (( ($scope.drugCoste) * (-1) ) <= $scope.drugCounte.amount) && ($scope.drugCoste<=0)){
					$scope.xAction();
				}
			};

			$scope.Buyy = function(){
				if ((($scope.money.total - ($scope.yCost * $scope.drugCosty)) > 0) && ($scope.drugCosty>=0)){
				$scope.methAction();
				}
			};
			$scope.Selly = function(){
				if(($scope.drugCounty.amount>0) && (( ($scope.drugCosty) * (-1) ) <= $scope.drugCounty.amount) && ($scope.drugCosty<=0)){
					$scope.methAction();
				}
			};
$scope.methAction = function(){
	$scope.money.total = $scope.money.total - ($scope.yCost * $scope.drugCosty);
	$scope.drugCounty.amount = $scope.drugCounty.amount + $scope.drugCosty;
};
$scope.xAction = function(){
	$scope.money.total = $scope.money.total - ($scope.eCost * $scope.drugCoste);
	$scope.drugCounte.amount = $scope.drugCounte.amount + $scope.drugCoste;
};
$scope.hAction = function(){
	$scope.money.total = $scope.money.total - ($scope.hCost * $scope.drugCosth);
	$scope.drugCounth.amount = $scope.drugCounth.amount + $scope.drugCosth;
};
$scope.cAction= function(){
	$scope.money.total = $scope.money.total - ($scope.cCost * $scope.drugCostc);
	$scope.drugCountc.amount = $scope.drugCountc.amount + $scope.drugCostc;
};
$scope.mAction = function(){
	$scope.money.total = $scope.money.total - ($scope.mCost * $scope.drugCostm);
	$scope.drugCountm.amount = $scope.drugCountm.amount + $scope.drugCostm;
};
	$scope.Main = true;
	$scope.Crime = false;
	$scope.Return = false;
	$scope.jailRelease = false;
	$scope.jailTimer = false;
	$scope.bribeNo = false;
	$scope.Trade = false;
	$scope.LosA = false;
	$scope.NY = false;
	$scope.Travel = false;
	$scope.Tokyo = false;
	$scope.London = false;
	$scope.upgrades = false;
	$scope.open = true;
	$scope.jail0= false;
	$scope.jail1 = false;
	$scope.jail2= false;
	$scope.jail3= false;
	$scope.pettyWins = false;

};