class Camera {
	
	constructor(){
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.x = 0;
		this.y = 0;
	}

	left(ctx) {
		if(this.x > 0) {
			ctx.translate(2,0);
			this.x -=2;
		}
	}

	right(ctx) {
		if(this.x < 1200 && this.x < 50) {
			ctx.translate(-2,0);
			this.x +=2;
		}
	}

	up(ctx) {
		if(this.y > 0) {
			ctx.translate(0,2);
			this.y -=2;
		}
	}

	down(ctx) {
		if(this.y < 1000) {
			ctx.translate(0,-2);
			this.y +=2;
		}
	}

}

export { Camera }
