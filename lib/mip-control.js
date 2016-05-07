var Cylon = require('cylon');
var myMip;
var interval;
var flip =  false;

var random = function(){
	var max = 4,
		min = 0;
	return Math.random() * (max - min) + min;
};

var crazyEyes = function(){
	interval = setInterval(function(){
		if(flip){
			myMip.setHeadLED(4, 0, 4, 0);
		}else{
			myMip.setHeadLED(0, 4, 0, 4);
		}
		flip = !flip;
	}, 500);
};

module.exports = {
	init: function(){
		Cylon.robot({
		  name: 'Tooooony',
		  connections: { 
		  	bluetooth: {
		  		adaptor: 'central', 
		  		uuid: 'b4994c4a8798', 
		  		module: 'cylon-ble'
		  	}
		  }, 
			devices:{ 
				'mip': {driver: 'mip'} 
		  },


		  work:function(my){ 
		  	myMip = my.mip;
		  	console.log('starting up');

		    my.mip.setHeadLED(4,4,4,4);
		  }
		});

		Cylon.start();
	},

	work: function(){
		console.log(myMip);
	},

  loveMe: function() {
  	//myMip.flashChestLED()
  },

	driveForward: function(){
		//myMip.driveDistance()
	},

	turnLeft: function(){
		//myMip.turnLeft()
	},

	turnRight: function(){
		//myMip.turnRight()
	},

	dance: function(){
		//myMip.setGameMode()
	},

	stop: function(){
		myMip.stop(function(){
			if(interval){
				clearInterval(interval);
			}
			myMip.setGameMode(myMip.Games.Default, function(){
			});
		});
	}
}
