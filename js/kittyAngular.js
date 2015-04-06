var app = angular.module('app', ['firebase']);

app.controller('moneyCtrl', function($scope, $firebase, $firebaseSimpleLogin){
		$scope.secondsTravelExpire = 0;
		$scope.secondsBeforeExpire = 0;
		$scope.crimeUpgrade = 0;
		$scope.travelUpgrade = 0;

	var ref = new Firebase('https://kittywars.firebaseio.com/'); // url for firebase database


	var loginObj = $firebaseSimpleLogin(ref, function(error,user){
		if(error){
			console.log(error);
			return;
		}
		else if (user){
			$scope.SignIn(user);
		}
		else{
			showLoginBox();
		}
	});

	$scope.RegisterAccount = function(){
		var email = $scope.user1.email;
		var password = $scope.user1.password;
		loginObj.$createUser(email,password).then(function(user){
			var userSync = $firebase(ref.child("user")); 
			var uid = user.uid; 
			var userInfo = {
				userId: uid,
				date: Firebase.ServerValue.TIMESTAMP,
				userEmail: $scope.user1.email,

			}
			userSync.$set(user.uid, userInfo);
			$scope.login= true;
			$scope.signUp= false;
			alert("Your account has been created using the email address " + userInfo.userEmail + "! Now sign in!");
		});
	}

	$scope.Register = function(){
		$scope.login = false;
		$scope.signUp = true; 
	}
	$scope.signInInstead = function(){
		$scope.login = true;
		$scope.signUp = false;
	}

	$scope.SignIn = function(event){
		var username = $scope.user.email;
		var password = $scope.user.password;
		loginObj.$login('password', {
			email: username,
			password: password
		})
		.then(function(user){
			$scope.All = true;
			$scope.login= false; 
			$scope.openPage = false;
			remember: "sessionOnly"
			console.log("Authentication of " + user.uid + " successful");
			var userId = user.uid;
			$scope.userId = userId;
		

// this fucking works!!!

//http://code.tutsplus.com/tutorials/creating-a-web-app-from-scratch-using-angularjs-and-firebase--cms-22391



	var sync = $firebase(ref.child("user").child(userId).child("money"));
	
	$scope.moneyFire = sync.$asObject();
	var Savechanges = function(){;
		$scope.moneyFire.$save();
		console.log(user.uid);
	};

		
//jail save function
	var syncJail = $firebase(ref.child("user").child(userId).child("Jail"));
	$scope.JailTimer = syncJail.$asObject();
	var JailTimer = function(){
		$scope.JailTimer.$save();
	};

		

		setInterval(function(timer){
			if($scope.JailTimer.amount == null){
				$scope.JailTimer.amount = $scope.secondsBeforeExpire;
			}
				if ($scope.JailTimer.amount == 0){
				clearInterval(timer);
				$scope.jailRelease = false;
				JailTimer();

 		}
 		else{
 				$scope.jailShow();
				$scope.JailTimer.amount--;
				$scope.$apply();
				$scope.jailTimer = true;
				$scope.jailRelease = true;
				JailTimer();
				console.log($scope.JailTimer.amount);
				}
			}, 1000);




	//travel class save function	

	var syncTravel = $firebase(ref.child("user").child(userId).child("travel").child("travelLocation"));
	$scope.TravelLocation = syncTravel.$asObject();
		var SaveTravelLocation = function(){
				$scope.TravelLocation.$save();
				console.log($scope.TravelLocation.place);
			
		};
	// travel timer save function is not working now. 

	var syncTravelTimer = $firebase(ref.child("user").child(userId).child("travel").child("travelTimerSaved"));
	$scope.TravelTimerSaved = syncTravelTimer.$asObject();
		

		var saveTravelTimer = function(){
			$scope.TravelTimerSaved.$save();

		};

		setInterval(function(Traveltimer){

			if($scope.TravelTimerSaved.amount == null){
				$scope.TravelTimerSaved.amount = $scope.secondsTravelExpire;
			}

				if ($scope.TravelTimerSaved.amount == 0){
				clearInterval(Traveltimer);
				$scope.travelTimer = false;
				saveTravelTimer();
			 	}
 		else{
				$scope.TravelTimerSaved.amount--;
				$scope.$apply();
				$scope.travelTimer = true;
				saveTravelTimer();
				}
			}, 1000);





		//boxes save function
 	var sync1 = $firebase(ref.child("user").child(userId).child("tradeable").child("tradeM"));
 	$scope.dataM = sync1.$asObject();
 	var SavedrugM = function(){
 		$scope.dataM.$save();
 		console.log($scope.dataM.amount);
 	};

 		//
 	var sync2 = $firebase(ref.child("user").child(userId).child("tradeable").child("tradeC"))
 	$scope.dataCoke = sync2.$asObject();
 	$scope.dataCoke.amount = 0;
 	var SavedrugC = function(){
 		$scope.dataCoke.$save();
 		console.log($scope.dataCoke.amount);
 	};

 	var sync3 = $firebase(ref.child("user").child(userId).child("tradeable").child("tradeE"));
 	$scope.dataExes = sync3.$asObject();
 	var SavedrugE = function(){
 		$scope.dataExes.$save();
 		console.log($scope.dataExes.amount);
 	};

 	var sync4 = $firebase(ref.child("user").child(userId).child("tradeable").child("tradeH"));
 	$scope.dataHer = sync4.$asObject();
 	var SaveDrugH = function(){
 		$scope.dataHer.$save();
 		console.log($scope.dataHer.amount);
 	};

 	var sync5 = $firebase(ref.child("user").child(userId).child("tradeable").child("tradeY"));
 	$scope.dataMeff = sync5.$asObject();
 	$scope.dataMeff.amount = 0;
 	var SaveDrugY = function(){
 		$scope.dataMeff.$save();
 		console.log($scope.dataHer.amount);
 	};


var syncUpgrade1 = $firebase(ref.child("user").child(userId).child("upgrades").child("guns"));
$scope.UpgradeCrime = syncUpgrade1.$asObject();
 var saveGun = function(){
 	$scope.UpgradeCrime.$save();
 	console.log($scope.UpgradeCrime.total);
 };

var syncUpgrade2 = $firebase(ref.child("user").child(userId).child("upgrades").child("travel"));
$scope.UpgradeTravel = syncUpgrade2.$asObject();
var upgradeTravel = function(){
	$scope.UpgradeTravel.$save();
};
	


	//adds new shit as an object from firebase.
// only main middle part needs to have class of main. side bar does not
$scope.drugCountM= 
	{drug:"Boxes", amount: 0};
$scope.drugCountc = 
	{drug:"Catnip", amount: 0};
$scope.drugCounte = 
	{drug:"Tuna Can", amount: 0};
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


	$scope.pistolPurchase = function(){
		if ($scope.moneyFire.total >= 1500){
			if ($scope.UpgradeCrime.total == null){
			$scope.UpgradeCrime.total =  $scope.crimeUpgrade + 1; 
		}else{
			$scope.UpgradeCrime.total =$scope.UpgradeCrime.total +1;
			}
			$scope.moneyFire.total= $scope.moneyFire.total - 1500;
			Savechanges();
			saveGun();
		}
	};
	$scope.akPurchase = function(){
		if ($scope.moneyFire.total >= 4000){
			if ($scope.UpgradeCrime.total == null){
			$scope.UpgradeCrime.total =  $scope.crimeUpgrade + 3; 
		}else{
			$scope.UpgradeCrime.total =$scope.UpgradeCrime.total +3;
			}
			$scope.moneyFire.total = $scope.moneyFire.total - 4000;
			Savechanges();
			saveGun();
		}
	};

	$scope.travelUpgrade = 0;
	$scope.carBuy = function(){
		if ($scope.moneyFire.total >= 5000){
			if($scope.UpgradeTravel.total == null){
			$scope.UpgradeTravel.total = $scope.travelUpgrade +100;
				} else{
					$scope.UpgradeTravel.total = $scope.UpgradeTravel.total + 100
				}
			$scope.moneyFire.total = $scope.moneyFire.total - 5000;
			Savechanges();
			upgradeTravel();
		}
	};
	$scope.planeBuy = function(){
		if ($scope.moneyFire.total >= 10000){
			if($scope.UpgradeTravel.total == null){
			$scope.UpgradeTravel.total = $scope.travelUpgrade +200;
				} else{
					$scope.UpgradeTravel.total = $scope.UpgradeTravel.total + 200
				}
			$scope.moneyFire.total = $scope.moneyFire.total - 10000;
			Savechanges();
			upgradeTravel();
		}
	};


// haven't finished upgrades yet. only done AK


	$scope.petty = function(){
		var petty1 = Math.floor(Math.random() * 5 +1);
			if(petty1 >= 1){
				$scope.crimeWin();
				var pettyPaid = Math.floor(Math.random() *(120 -80) +80);
				if ($scope.moneyFire.total == null){
				$scope.moneyFire.total = $scope.money.total + pettyPaid;
				Savechanges();
			}
			else{
				$scope.moneyFire.total = $scope.moneyFire.total + pettyPaid;
				$scope.win = pettyPaid;
				console.log($scope.win);
				Savechanges();
			}
			}
			else{				
				$scope.jail0 = true;
				$scope.jailShow();
				var pettyTimer = 2;
				$scope.secondsBeforeExpire = $scope.secondsBeforeExpire + pettyTimer;
				$scope.JailTimer.amount= $scope.secondsBeforeExpire;
				$scope.moneyFire.total
				$scope.countDown();
				$scope.pettyFail = true;
				console.log(petty1);
				JailTimer();
			}

			};
		$scope.middle = function(){
		var middle1 = Math.floor(Math.random() * 9 +1) +$scope.UpgradeCrime.total;
		if (middle1 >= 5){
			$scope.crimeWin();
			var middlePaid = Math.floor(Math.random() *(300 -250) +250);
			$scope.moneyFire.total = $scope.moneyFire.total + middlePaid;
			$scope.win = middlePaid; 
			Savechanges();
			}
		else{
			$scope.jail1 = true;
			$scope.pettyFail1 = true;
			$scope.jailShow();
			var middleTimer = 30;
			$scope.secondsBeforeExpire = $scope.JailTimer.amount;
			$scope.JailTimer.amount = $scope.secondsBeforeExpire + middleTimer;
			$scope.countDown();
			JailTimer();
		}
	};

	$scope.high =function(){
			var high1 = Math.floor(Math.random() * 10 +1) +$scope.UpgradeCrime.total;
			if (high1 >= 6){
				var highPaid = Math.floor(Math.random() *(500 -460) +460);
				$scope.moneyFire.total = $scope.moneyFire.total +highPaid;
				$scope.win = highPaid;
				$scope.crimeWin();
				Savechanges();
			}

			else{
				$scope.jail2 = true;
				$scope.jailShow();
				var highTimer = 45;
				$scope.pettyFail2 = true;
				$scope.secondsBeforeExpire = $scope.JailTimer.amount;
				$scope.JailTimer.amount = $scope.secondsBeforeExpire + highTimer;
				$scope.countDown();
				JailTimer();
			}
		};

		$scope.most = function(){
		var most1 = Math.floor(Math.random() * 12 +1) +$scope.UpgradeCrime.total;
		console.log($scope.UpgradeCrime.total);
		if (most1 >= 10){
			$scope.crimeWin();
			var mostPaid = Math.floor(Math.random() *(720 -680) +680);
			$scope.moneyFire.total = $scope.moneyFire.total + mostPaid;
			$scope.win = mostPaid;
			Savechanges();
			}
		else{
			$scope.jail3 = true;
			$scope.jailShow();
			$scope.pettyFail3 = true;
			var mostTimer = 60;
			$scope.secondsBeforeExpire = $scope.JailTimer.amount;
			$scope.JailTimer.amount = $scope.secondsBeforeExpire + mostTimer;
			$scope.countDown();
			JailTimer();
		}
	};

	$scope.crimeWin = function(){
	$scope.Crime = false;
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
		SaveTravelLocation();
		console.log($scope.TravelLocation.place);
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
				$scope.pettyFail=false;
				$scope.pettyFail1=false;
				$scope.pettyFail2=false;
				$scope.pettyFail3=false;
			};

			
	$scope.countDown = function(){
		if($scope.JailTimer.amount == null){
		$scope.JailTimer.amount = $scope.secondsBeforeExpire;
	}
		else{$scope.JailTimer.amount = $scope.JailTimer.amount;}				
			};
	$scope.bribe = function(){
		var bribe = 400;
					if(($scope.moneyFire.total - bribe) >= 0){
						$scope.JailTimer.amount = 0;
						$scope.clearJails();
						$scope.Main = true;
						$scope.Return = false;
						$scope.moneyFire.total = $scope.moneyFire.total - bribe;
						$scope.bribeNo = false;
					}
					else{
						$scope.bribeNo = true;
					}
	};


		$scope.changeClassLondon = function(){
				$scope.classWoo = "london";
				$scope.TravelLocation.place = $scope.classWoo;
				$scope.London = true;
				$scope.Tokyo = false;
				$scope.LA = false;
				$scope.NY = false;
			SaveTravelLocation();
			$scope.travelChange();
			};
		$scope.changeClassTokyo = function(){
			$scope.classWoo = "tokyo";
			$scope.TravelLocation.place = $scope.classWoo;
			SaveTravelLocation();
			$scope.Tokyo = true;
			$scope.London = false;
			$scope.LA = false;
			$scope.NY = false;
			$scope.travelChange();
		};
		$scope.changeClassLA = function(){
			$scope.classWoo = "LA";
			$scope.TravelLocation.place = $scope.classWoo;
			$scope.LA = true;
			$scope.Tokyo = false;
			$scope.London = false;
			$scope.NY = false;
			$scope.travelChange();
			SaveTravelLocation();
		};
		$scope.changeClassNY = function(){
			$scope.classWoo = "NY";
			$scope.TravelLocation.place = $scope.classWoo;
			$scope.NY = true;
			$scope.Tokyo = false;
			$scope.London = false;
			$scope.LA = false;
			$scope.travelChange();
			SaveTravelLocation();
		};	

		$scope.travelCountdown = function(){
			$scope.secondsTravelExpire = 2;
			$scope.TravelTimerSaved.amount = 300;

			if ($scope.TravelTimerSaved.amount == null){
				$scope.TravelTimerSaved.amount = $scope.secondsTravelExpire;
			}
			else{$scope.TravelTimerSaved.amount == $scope.TravelTimerSaved.amount;}

		};

			$scope.travelChange = function(){
				$scope.travel = false;
				$scope.Main = true;
				$scope.open = false;
				$scope.Return = false;
				$scope.travelCountdown();
			};
		
			// this is fucked up

		$scope.trade = function(){
			console.log($scope.TravelLocation.place);
			$scope.Main = false;
			$scope.Trade = true;
			$scope.Return = true;
			if ($scope.TravelLocation.place == "london"){
				$scope.tradeMoney((10/8),(10/10),(7/8),(12/10),(10/8));
				console.log($scope.TravelLocation.place);
			}
			else if ($scope.TravelLocation.place == "tokyo"){
				$scope.tradeMoney((12/10),(9/10),(11/10),(11/10),(9/8));
				console.log($scope.TravelLocation.place);
			}
			else if($scope.TravelLocation.place == "LA"){
				$scope.tradeMoney((9/8),(12/10),(9/10),(10/10),(9/10));
				console.log($scope.TravelLocation.place);
			}
			else if($scope.TravelLocation.place == "NY"){
				$scope.tradeMoney((10/11),(7/8),(11/10),(9/10),(9/8));

			}
		};


		$scope.tradeMoney = function(weed,coke,x,heroin,meth){
				$scope.mCost = Math.floor((Math.random() * (220 - 190) +190) * weed);
				$scope.cCost = Math.floor((Math.random() * (450 - 420) +420) * coke);
				$scope.eCost = Math.floor((Math.random() * (340 - 320) +320) * x);
				$scope.hCost = Math.floor((Math.random() * (400 - 380) +380) * heroin);
				$scope.yCost = Math.floor((Math.random() * (320 - 290) +290) * meth);
		};

		// this is fucked up


			$scope.Buym = function(){
				if ((($scope.moneyFire.total - ($scope.mCost * $scope.drugCostm)) > 0) && ($scope.drugCostm>=0)){
				$scope.mAction();
				}
				$scope.drugCostm = 0;
			};
			$scope.Sellm = function(){
				if(($scope.dataM.amount>0) && (( ($scope.drugCostm) * (-1) ) <= $scope.dataM.amount) && ($scope.drugCostm<=0)){
					$scope.mAction();
				}
				$scope.drugCostm = 0;
			};
			$scope.Buyc = function(){
				if ((($scope.moneyFire.total - ($scope.cCost * $scope.drugCostc)) > 0) && ($scope.drugCostc>=0)){
				$scope.cAction();
				}
				$scope.drugCostc= 0;
			};
			$scope.Sellc = function(){
				if(($scope.dataCoke.amount>0) && (( ($scope.drugCostc) * (-1) ) <= $scope.dataCoke.amount) && ($scope.drugCostc<=0)){
					$scope.cAction();
				}
				$scope.drugCostc= 0;
				console.log($scope.dataCoke.amount);
			};

			$scope.Buyh = function(){
				if ((($scope.moneyFire.total - ($scope.hCost * $scope.drugCosth)) > 0) && ($scope.drugCosth>=0)){
				$scope.hAction();
				}
				 $scope.drugCosth= 0;
			};
			$scope.Sellh = function(){
				if(($scope.dataHer.amount>0) && (( ($scope.drugCosth) * (-1) ) <= $scope.dataHer.amount) && ($scope.drugCosth<=0)){
					$scope.hAction();
				}
				$scope.drugCosth= 0;
				console.log($scope.dataHer.amount);
			};

			$scope.Buye = function(){
				if ((($scope.moneyFire.total - ($scope.eCost * $scope.drugCoste)) > 0) && ($scope.drugCoste >= 0)){
				$scope.xAction();
				}
				$scope.drugCoste = 0;
			};
			$scope.Selle = function(){
				if (($scope.dataExes.amount> 0) && (( ($scope.drugCoste) * (-1) ) <= $scope.dataExes.amount) && ($scope.drugCoste<=0)){
					$scope.xAction();
				}
				$scope.drugCoste= 0;
				console.log($scope.dataExes.amount);
			};

			$scope.Buyy = function(){
				if ((($scope.moneyFire.total - ($scope.yCost * $scope.drugCosty)) > 0) && ($scope.drugCosty>=0)){
				$scope.methAction();
				}
				$scope.drugCosty = 0;
				console.log($scope.dataMeff.amount);
			};
			$scope.Selly = function(){
				if(($scope.dataMeff.amount>0) && (( ($scope.drugCosty) * (-1) ) <= $scope.dataMeff.amount) && ($scope.drugCosty<=0)){
					$scope.methAction();
				}
				$scope.drugCosty = 0;
				console.log($scope.dataMeff.amount);
			};
$scope.methAction = function(){
	$scope.moneyFire.total = $scope.moneyFire.total - ($scope.yCost * $scope.drugCosty);
	if($scope.dataMeff.amount == null){
		$scope.dataMeff.amount = $scope.drugCounty.amount;
	}
	else{
	$scope.dataMeff.amount = $scope.dataMeff.amount + $scope.drugCosty;
	}
	Savechanges();
	SaveDrugY();
};
$scope.xAction = function(){
	$scope.moneyFire.total = $scope.moneyFire.total - ($scope.eCost * $scope.drugCoste);
	if($scope.dataExes.amount == null){
		$scope.dataExes.amount = $scope.drugCounte.amount;
	}
	else{
	$scope.dataExes.amount = $scope.dataExes.amount + $scope.drugCoste;
	}
	console.log($scope.dataExes.amount);
	Savechanges();
	SavedrugE();
};
$scope.hAction = function(){
	$scope.moneyFire.total = $scope.moneyFire.total - ($scope.hCost * $scope.drugCosth);
	if($scope.dataHer.amount == null){
		$scope.dataHer.amount = $scope.drugCounth.amount;
	}
	else{
	$scope.dataHer.amount = $scope.dataHer.amount + $scope.drugCosth;
	}
	Savechanges();
	SaveDrugH();
};
$scope.cAction= function(){
	$scope.moneyFire.total = $scope.moneyFire.total - ($scope.cCost * $scope.drugCostc);
	if($scope.dataCoke.amount == null){
		$scope.dataCoke.amount = $scope.drugCountc.amount;
	}
	else{
	$scope.dataCoke.amount = $scope.dataCoke.amount + $scope.drugCostc;
	}
	Savechanges();
	SavedrugC();
	};
$scope.mAction = function(){
	$scope.moneyFire.total = $scope.moneyFire.total - ($scope.mCost * $scope.drugCostm);
	if($scope.dataM.amount == null){
		$scope.dataM.amount = $scope.drugCountM.amount;
	}
	$scope.dataM.amount = $scope.dataM.amount + $scope.drugCostm;
	Savechanges();
	SavedrugM();
};

}, function(error){
			console.log('Authentication failure');
		})
	}
	$scope.openPage = true;
	$scope.signUp = false;
	$scope.login = true;
	$scope.All = false;
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
	$scope.open = false;
	$scope.jail0= false;
	$scope.jail1 = false;
	$scope.jail2= false;
	$scope.jail3= false;
	$scope.pettyWins = false;

});