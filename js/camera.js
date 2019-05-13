function Camera() {
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.x = 0;
	this.y = 0;
	this.imgWidth = 3072;
    this.imgHeight = 1536;	
	this.img = new Image(); 
	this.img.src = "img/background.png";
	
	
	
	


	this.left = function(ctx) {			
			if(this.x > 0) {
				ctx.translate(2,0);	
				this.x -=2;							
			}				
	}

	this.right = function(ctx) {			
			if(this.x < 1200 && this.x < 50) {
				ctx.translate(-2,0);								
				this.x +=2;
			}
				
	}

	this.up = function(ctx) {								
			if(this.y > 0) {
				ctx.translate(0,2);		
				this.y -=2;
			}
				
	}

	this.down = function(ctx) {
			
			if(this.y < 1000) {
				ctx.translate(0,-2);									
				this.y +=2;
			}
			
	}
	//OK!
	// this.forward = function(delta) {
	// 	this.row = 0;
	// 	this.counter+=delta;
	// 	if(this.counter > this.delay) {
	// 		this.counter = 0;
	// 		this.column++;
	// 		if(this.column > 3) {
	// 			this.column = 0;				
	// 		}
	// 	}
	// 	this.y += 2;
		
	// }
	// this.left = function(delta) {
	// 	this.row = 1;
	// 	this.counter+=delta;
	// 	if(this.counter > this.delay) {
	// 		this.counter = 0;
	// 		this.column++;
	// 		if(this.column > 3) {
	// 			this.column = 0;				
	// 		}
	// 	}
	// 	this.x -= 2;		
	// }

	// this.right = function(delta) {
	// 	this.row = 2;
	// 	this.counter+=delta;
	// 	if(this.counter > this.delay) {
	// 		this.counter = 0;
	// 		this.column++;
	// 		if(this.column > 3) {
	// 			this.column = 0;				
	// 		}
	// 	}
	// 	this.x += 2;		
	// }

	// this.back = function(delta) {
	// 	this.row = 3;
	// 	this.counter+=delta;
	// 	if(this.counter > this.delay) {
	// 		this.counter = 0;
	// 		this.column++;
	// 		if(this.column > 3) {
	// 			this.column = 0;				
	// 		}
	// 	}
	// 	this.y -= 2;
	// }


	this.draw = function(ctx) {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height, this.x, this.y, this.width, this.height);	
	}
}