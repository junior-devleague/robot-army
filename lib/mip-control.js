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
		  	// console.log(myMip);
		  	console.log('do work');

		    my.mip.setHeadLED(4,4,4,4);

		  }
		});

		Cylon.start();
	},
	work: function(){
		console.log(myMip);
	},

  getUp: function(){
    myMip.getUp(1, function(){
      console.log('standing');
    }); 
  },

  loveMe: function() {
		myMip.flashChestLED(220, 20, 60, 10, 0, function(){
			console.log('loved');
			myMip.setHeadLED(1, 0, 1, 0);
			setTimeout(function(){
				myMip.setChestLED(0, 255, 0, function() {
					myMip.setHeadLED(1, 1, 1, 1);
				});
			}, 2000);
		});
  },

	driveForward: function(){
		myMip.driveDistance(0, 10, 0, 0, function(){
			console.log('drove forward');
		});
	},

	turnLeft: function(){
		myMip.turnLeft(10, 100, function(){
			console.log('turned left');
		});
	},

	turnRight: function(){
		myMip.turnRight(10, 100, function(){
			console.log('turned right');
		});
	},

	crazyEyes: function(){
		crazyEyes();
	},

	dance: function(){
		myMip.setGameMode(myMip.Games.Dance, function(){
			console.log('dancing');
		});
	},

	stop: function(){
		myMip.stop(function(){
			console.log('stopped');
			if(interval){
				clearInterval(interval);
			}
			myMip.setGameMode(myMip.Games.Default, function(){
			});
		});
	}
}
