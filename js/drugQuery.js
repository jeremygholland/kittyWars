var money = {
	total : 0,
	addTotal: function(newMoney){
		this.total += newMoney;
	},
	subtcractTotal: function(newMoney){
		this.total -= newMoney;
	}
};

//try to make the time expire thing a function


var secondsBeforeExpire = '';
$(document).ready(function(){
	$('div.crimes').hide();
	$('.containTravel').hide();
	$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
	$('div.jail').hide();
	$('table#drugs').hide();
	$('button#return').hide();
	$('div#crimes').click(function(){
		$('div.main').hide('fast');
		$('.contain').append("<div class='crimes'><div class='row'><div class='col-md-2 col-md-offset-3'><button id = 'petty' class = 'radAnswer'> Steal and pawn the bike. </button><button id = 'middle' class = 'radAnswer1'> Steal the car. </button><button id = 'high' class = 'radAnswer1'> Sounds like free money to me... </button> <button id= 'most' class = 'radAnswer3'> Go time. </button></div><div class='col-md-6'><div class = 'crime'> <h3>There's a 12 year old paper boy riding up the street. With a good looking bike.. Steal then pawn off his bike. </h3> </div><div class = 'crime'> <h3>Fancy car at the end of the block.. steal it.</h3>  </div><div class = 'crime'><h3> There's an armored car at the end of the block. The driver is eating his 4th donut. Sounds like free money to me...</h3> </div><div class = 'crime'> <h3> Let's rob a bank.</h3> </div></div></div></div><div class='crimeResult'><div class='row'><div class='col-md-4 col-md-offset-4'></div></div>");
		$('button#petty').one('click', function(){ 
				$('div.crimes').hide('fast');
				var petty = Math.floor(Math.random() * 5 +1);
			if (petty >= 2){
				var pettyPaid = Math.floor(Math.random() *(120 -80) +80);
				var pettyWin = money.addTotal(pettyPaid);
				$('div.crimeResult').html("<p> You were succesful in your endevour. You earned " + pettyPaid + " dollars! You now have " + money.total + " dollars to spend! <p>");
				$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
				$('button#return').fadeIn('fast');
				$('button#return').click(function(){
					$('button#return').hide('fast');
					$('div.crimeResult').hide('fast');
					$('div.main').fadeIn('fast');
				});
			}
			//http://jsfiddle.net/97704gb9/11/ ***check this out!!!****
			else{
				$('div.crimes').hide('fast');
				$('div.jail').fadeIn('fast');
				$('#bribeJail').click(function(){
					var bribe = 400;
					if((money.total - bribe) >= 0){
						var secondsBeforeExpire = 0;
						$('div.jail').hide('fast');
						$('div.main').fadeIn('fast');
						var bribePaid = money.subtcractTotal(bribe);
						$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
					}
					else{
						$('div.bribeResult').html("<p> You don't have enough money to bribe this respectable man.");
					}
				})
				var secondsBeforeExpire = 15;
				var timer = setInterval(function(){
			if (secondsBeforeExpire <= 0){
				clearInterval(timer);
			$('button#jailRelease').prop('disabled', false);
			$('button#crimes').prop('disabled', false);
			$('button#jailRelease').click(function(){
				$('div.jail').hide('fast');
				$('div.main').fadeIn('fast');
			});
				}
			else{
				secondsBeforeExpire--;
			$('div#jailTimer').html("<h5> You have " + secondsBeforeExpire + " seconds until you are out of jail.</h5>");
				}
			}, 1000);

				// was working when you had this!
			}


		});
		$('button#middle').one('click', function(){ 
				$('div.crimes').hide('fast');
				var middle = Math.floor(Math.random() * 9 +1);
			if (middle >= 5){
				var middlePaid = Math.floor(Math.random() *(300 -250) +250);
				var middleWin = money.addTotal(middlePaid);
				$('div.crimeResult').html("<p> You were succesful in your endevour. You earned " + middlePaid + " dollars! You now have " + money.total + " dollars to spend! <p>");
				$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
				$('button#return').fadeIn('fast');
				$('button#return').click( function(){
					$('button#return').hide('fast');
					$('div.crimeResult').hide('fast');
					$('div.main').fadeIn('fast');
				});
			}
			else{
				$('div.crimes').hide('fast');
				$('div.jail').fadeIn('fast');
				$('#bribeJail').click(function(){
					var bribe = 400;
					if((money.total - bribe) >= 0){
						$('div.jail').hide('fast');
						var secondsBeforeExpire = 0;
						$('div.main').fadeIn('fast');
						var bribePaid = money.subtcractTotal(bribe);
						$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
					}
					else{
						$('div.bribeResult').html("<p> You don't have enough money to bribe this respectable man.");
					}
				})
				var secondsBeforeExpire = 30;
				var timer = setInterval(function(){
			if (secondsBeforeExpire <= 0){
				clearInterval(timer);
			$('button#jailRelease').prop('disabled', false);
			$('button#crimes').prop('disabled', false);
			$('button#jailRelease').one('click', function(){
				$('div.jail').hide('fast');
				$('div.main').fadeIn('fast');
			});
				}
			else{
				secondsBeforeExpire--;
			$('div#jailTimer').html("<h5> You have " + secondsBeforeExpire + " seconds until you are out of jail.</h5>");
				}
			}, 1000);
//when page refreshes, remove all classes
//try to run most of this in angularJS

			}


			});
			$('button#high').one('click', function(){ 
				$('div.crimes').hide('fast');
				var high = Math.floor(Math.random() * 10 +1);
			if (high >= 6){
				var highPaid = Math.floor(Math.random() *(500 -460) +460);
				var highWin = money.addTotal(highPaid);
				$('div.crimeResult').html("<p> You were succesful in your endevour. You earned " + highPaid + " dollars! You now have " + money.total + " dollars to spend! <p>");
				$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
				$('button#return').fadeIn('fast');
				$('button#return').click( function(){
					$('button#return').hide('fast');
					$('div.crimeResult').hide('fast');
					$('div.main').fadeIn('fast');
				});
			}
			//http://jsfiddle.net/97704gb9/11/ ***check this out!!!****
			else{
				$('div.crimes').hide('fast');
				$('div.jail').fadeIn('fast');
				$('#bribeJail').click(function(){
					var bribe = 400;
					var secondsBeforeExpire = 0;
					if((money.total - bribe) >= 0){
						$('div.jail').hide('fast');
						$('div.main').fadeIn('fast');
						var bribePaid = money.subtcractTotal(bribe);
						$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
					}
					else{
						$('div.bribeResult').html("<p> You don't have enough money to bribe this respectable man.");
					}
				})
				var secondsBeforeExpire = 45;
				var timer = setInterval(function(){
			if (secondsBeforeExpire <= 0){
				clearInterval(timer);
			$('button#jailRelease').prop('disabled', false);
			$('button#crimes').prop('disabled', false);
			$('button#jailRelease').one("click", function(){
				$('div.jail').hide('fast');
				$('div.main').fadeIn('fast');
			});
				}
			else{
				secondsBeforeExpire--;
			$('div#jailTimer').html("<h5> You have " + secondsBeforeExpire + " seconds until you are out of jail.</h5>");
				}
			}, 1000);

				// was working when you had this!
			}


		});
			$('button#most').one('click', function(){ 
				$('div.crimes').hide('fast');
				var most = Math.floor(Math.random() * 12 +1);
			if (most >= 10){
				var mostPaid = Math.floor(Math.random() *(720 -680) +680);
				var mostWin = money.addTotal(mostPaid);
				$('div.crimeResult').html("<p> You were succesful in your endevour. You earned " + mostPaid + " dollars! You now have " + money.total + " dollars to spend! <p>");
				$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
				$('button#return').fadeIn('fast');
				$('button#return').click( function(){
					$('button#return').hide('fast');
					$('div.crimeResult').hide('fast');
					$('div.main').fadeIn('fast');
				});
			}
			//http://jsfiddle.net/97704gb9/11/ ***check this out!!!****
			else{
				$('div.crimes').hide('fast');
				$('div.jail').fadeIn('fast');
				$('#bribeJail').click(function(){
					var bribe = 400;
					if((money.total - bribe) >= 0){
						$('div.jail').hide('fast');
						var secondsBeforeExpire = 0;
						$('div.main').fadeIn('fast');
						var bribePaid = money.subtcractTotal(bribe);
						$('div#moneyTotal').html("<h5> You have $" + money.total + "</h5>");
					}
					else{
						$('div.bribeResult').html("<p> You don't have enough money to bribe this respectable man.");
					}
				})
				var secondsBeforeExpire = 60;
				var timer = setInterval(function(){
			if (secondsBeforeExpire <= 0){
				clearInterval(timer);
			$('button#jailRelease').prop('disabled', false);
			$('button#crimes').prop('disabled', false);
			$('button#jailRelease').one("click", function(){
				$('div.jail').hide('fast');
				$('div.main').fadeIn('fast');
			});
				}
			else{
				secondsBeforeExpire--;
			$('div#jailTimer').html("<h5> You have " + secondsBeforeExpire + " seconds until you are out of jail.</h5>");
				}
			}, 1000);

				// was working when you had this!
			}

		});
		});
		$('div#travel').click(function(){
			$('div.main').hide();
			$('div.containTravel').fadeIn('fast');
			$('#tokyo').click(function(){
				$('div.main').fadeIn('fast');
				$('div.travelNotice').html("<h2> You traveled to Tokyo</h2>");
				$('div.main').addClass('tokyo');
				$('.containTravel').hide();
				var secondsBeforeExpire1 = 1200;
				var Traveltimer = setInterval(function(){
				if (secondsBeforeExpire1 <= 0){
				clearInterval(timer);
			$('#travel').prop('disabled', false);
				}
			else{
				secondsBeforeExpire1--;
			$('div#travelTimer').html("<h5> You have " + secondsBeforeExpire1 + " seconds until you can travel again.</h5>");
				}
			}, 1000);
				//have this working. next step is to apply this to trade function
			});
			$('#london').click(function(){
				$('div.main').fadeIn('fast');
				$('div.travelNotice').html("<h2> You traveled to London</h2>");
				$('div.main').addClass('london');
				$('.containTravel').hide();
				var secondsBeforeExpire1 = 1200;
				var Traveltimer = setInterval(function(){
				if (secondsBeforeExpire1 <= 0){
				clearInterval(Traveltimer);
			$('#travel').prop('disabled', false);
				}
			else{
				secondsBeforeExpire1--;
			$('div#travelTimer').html("<h5> You have " + secondsBeforeExpire1 + " seconds until you can travel again.</h5>");
				}
			}, 1000);
			});
			$('#losAngeles').click(function(){
				$('div.main').fadeIn('fast');
				$('.travelNotice').html("<h2> You traveled to Los Angeles</h2>")
				$('div.main').addClass('LA');
				$('.containTravel').hide();
				var secondsBeforeExpire1 = 1200;
				var Traveltimer = setInterval(function(){
				if (secondsBeforeExpire1 <= 0){
				clearInterval(timer);
			$('#travel').prop('disabled', false);
				}
			else{
				secondsBeforeExpire1--;
			$('div#travelTimer').html("<h5> You have " + secondsBeforeExpire1 + " seconds until you can travel again.</h5>");
				}
			}, 1000);
			});
			$('#newYork').click(function(){
				$('div.main').fadeIn('fast');
				$('.travelNotice').html("<h2> You traveled to New York</h2>");
				$('div.main').addClass('NY');
				$('.containTravel').hide();
				var secondsBeforeExpire1 = 1200;
				var Traveltimer = setInterval(function(){
				if (secondsBeforeExpire1 <= 0){
				clearInterval(timer);
			$('#travel').prop('disabled', false);
				}
			else{
				secondsBeforeExpire1--;
			$('div#travelTimer').html("<h5> You have " + secondsBeforeExpire1 + " seconds until you can travel again.</h5>");
				}
			}, 1000);
			});
		});
		$('div#trade').click(function(){
			$('.main').hide();
			$('table#drugs').fadeIn();
			if($('div.main').hasClass('tokyo')){
				$('.containTrade').append("<table id = 'tokyo' width = '100%'><tr><td> Marijuana</td><td id = 'mCost'></td><td> <input type='number'  id = 'mInput' class = 'amount'></td></tr><tr><td> Cocaine</td><td id = 'cCost'></td><td><input type='number' id = 'cInput' class = 'amount'> </td></tr><tr><td> Heroine</td><td id = 'hCost'></td><td> <input type='number' id = 'cInput' class = 'amount'></td></tr><tr><td> Ecstacy</td><td id = 'eCost'></td><td><input type='number' id = 'eInput' class = 'amount'></td></tr><tr><td> Crystal Meth</td><td id = 'yCost'></td><td><input type='number' id = 'yInput' class = 'amount'></td></tr></table>");
				var mCost = Math.floor(Math.random() * (180 - 150) +150);
				var cCost = Math.floor(Math.random() * (350 - 320) +320);
				var eCost = Math.floor(Math.random() * (500 - 480) +480);
				var hCost = Math.floor(Math.random() * (620 - 600) +600);
				var yCost = Math.floor(Math.random() * (280 - 260) +260);
				$('#mCost').html(mCost);
				$('#cCost').html(cCost);
				$('#eCost').html(eCost);
				$('#hCost').html(hCost);
				$('#yCost').html(yCost);
			}
			else if($('div.main').hasClass('london')){
				$('.containTrade').append("<table id = 'tokyo' width = '100%'><tr><td> Marijuana</td><td id = 'mCost1'></td><td> <input type='number'  id = 'mInput' class = 'amount'></td></tr><tr><td> Cocaine</td><td id = 'cCost1'></td><td><input type='number' id = 'cInput' class = 'amount'> </td></tr><tr><td> Heroine</td><td id = 'hCost1'></td><td> <input type='number' id = 'cInput' class = 'amount'></td></tr><tr><td> Ecstacy</td><td id = 'eCost1'></td><td><input type='number' id = 'eInput' class = 'amount'></td></tr><tr><td> Crystal Meth</td><td id = 'yCost1'></td><td><input type='number' id = 'yInput' class = 'amount'></td></tr></table>");
				var mCost2 = Math.floor(Math.random() * (220 - 190) +190);
				var cCost2 = Math.floor(Math.random() * (450 - 420) +420);
				var eCost2 = Math.floor(Math.random() * (340 - 320) +320);
				var hCost2 = Math.floor(Math.random() * (400 - 380) +380);
				var yCost2 = Math.floor(Math.random() * (320 - 290) +290);
				$('#mCost1').html(mCost2);
				$('#cCost1').html(cCost2);
				$('#eCost1').html(eCost2);
				$('#hCost1').html(hCost2);
				$('#yCost1').html(yCost2);

			}
			else if($('div.main').hasClass('LA')){
				$('.containTrade').append("<table id = 'tokyo' width = '100%'><tr><td> Marijuana</td><td id = 'mCost2'></td><td> <input type='number'  id = 'mInput' class = 'amount'></td></tr><tr><td> Cocaine</td><td id = 'cCost2'></td><td><input type='number' id = 'cInput' class = 'amount'> </td></tr><tr><td> Heroine</td><td id = 'hCost2'></td><td> <input type='number' id = 'cInput' class = 'amount'></td></tr><tr><td> Ecstacy</td><td id = 'eCost2'></td><td><input type='number' id = 'eInput' class = 'amount'></td></tr><tr><td> Crystal Meth</td><td id = 'yCost2'></td><td><input type='number' id = 'yInput' class = 'amount'></td></tr></table>");
				var mCost3 = Math.floor(Math.random() * (90 - 70) +70);
				var cCost3 = Math.floor(Math.random() * (550 - 530) +530);
				var eCost3 = Math.floor(Math.random() * (420 - 390) +390);
				var hCost3 = Math.floor(Math.random() * (300 - 280) +280);
				var yCost3 = Math.floor(Math.random() * (160 - 140) +140);
				$('#mCost2').append(mCost3);
				$('#cCost2').append(cCost3);
				$('#eCost2').append(eCost3);
				$('#hCost2').append(hCost3);
				$('#yCost2').append(yCost3);
			}
			else if($('div.main').hasClass('NY')){
				$('.containTrade').append("<table id = 'tokyo' width = '100%'><tr><td> Marijuana</td><td id = 'mCost3'></td><td> <input type='number'  id = 'mInput' class = 'amount'></td></tr><tr><td> Cocaine</td><td id = 'cCost3'></td><td><input type='number' id = 'cInput' class = 'amount'> </td></tr><tr><td> Heroine</td><td id = 'hCost3'></td><td> <input type='number' id = 'cInput' class = 'amount'></td></tr><tr><td> Ecstacy</td><td id = 'eCost3'></td><td><input type='number' id = 'eInput' class = 'amount'></td></tr><tr><td> Crystal Meth</td><td id = 'yCost3'></td><td><input type='number' id = 'yInput' class = 'amount'></td></tr></table>");
				var mCost4 = Math.floor(Math.random() * (290 - 270) +270);
				var cCost4 = Math.floor(Math.random() * (700 - 670) +670);
				var eCost4 = Math.floor(Math.random() * (600 - 550) +550);
				var hCost4 = Math.floor(Math.random() * (400 - 380) +380);
				var yCost4 = Math.floor(Math.random() * (80 - 60) +60);
				$('#mCost3').append(mCost4);
				$('#cCost3').append(cCost4);
				$('#eCost3').append(eCost4);
				$('#hCost3').append(hCost4);
				$('#yCost3').append(yCost4);
			}
		})
	});



