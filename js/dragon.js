function Dragon() {
	this.x = 100;
	this.y = 100;
	

	this.img = new Image(); 
	this.img.src = "img/bahamut.png";
	
	
	this.column = 0;
	this.row = 0;
	this.frameWidth = 96;
	this.frameHeight = 96;
	this.counter = 0;
	this.delay = 120;
	
	


	this.update = function() {

	}


	//OK!
	this.forward = function(delta) {
		this.row = 0;
		this.counter+=delta;
		if(this.counter > this.delay) {
			this.counter = 0;
			this.column++;
			if(this.column > 3) {
				this.column = 0;				
			}
		}
		this.y += 2;
		
	}
	this.left = function(delta) {
		this.row = 1;
		this.counter+=delta;
		if(this.counter > this.delay) {
			this.counter = 0;
			this.column++;
			if(this.column > 3) {
				this.column = 0;				
			}
		}
		if(this.x > 50)
			this.x -= 2;		
	}

	this.right = function(delta) {
		this.row = 2;
		this.counter+=delta;
		if(this.counter > this.delay) {
			this.counter = 0;
			this.column++;
			if(this.column > 3) {
				this.column = 0;				
			}
		}
		if(this.x < window.innerWidth - 50)
			this.x += 2;		
	}

	this.back = function(delta) {
		this.row = 3;
		this.counter+=delta;
		if(this.counter > this.delay) {
			this.counter = 0;
			this.column++;
			if(this.column > 3) {
				this.column = 0;				
			}
		}
		if (this.y > 50) {
			this.y -= 2;	
		};
	}


	this.draw = function(ctx) {
		ctx.drawImage(this.img, this.column*this.frameWidth, this.row*this.frameHeight, this.frameWidth, this.frameHeight, this.x, this.y, this.frameWidth, this.frameHeight);	
	}
}