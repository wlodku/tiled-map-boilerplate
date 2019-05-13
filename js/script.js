window.onload = function(){
	var canvas = document.getElementById('qwe');
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');

    window.addEventListener('keydown',wcis,false);
    window.addEventListener('keyup',odcis,false);
	
	var lewo, prawo, gora, dol = false;

	function wcis(event) {
        var keyCode = event.keyCode;
        switch (keyCode) {
            case 37: //d
                lewo = true;
                // gora = false;
                prawo = false;
                // dol = false;
                break;
            case 38: //s
                gora = true;
                dol = false;
                // prawo = false;
                // lewo = false;
                break;
            case 39: //a
                prawo = true;
                lewo = false;
                // gora = false;
                // dol = false;
                break;
            case 40: //w
                dol = true;
                gora = false;
                // lewo = false;
                // prawo = false;
                break;
        }
        event.stopPropagation();
        event.preventDefault();
    }

    function odcis(event) {
        var keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                lewo = false;
                break;
            case 38:
                gora = false;
                break;
            case 39:
                prawo = false;
                break;
            case 40:
                dol = false;
                break;
        }
    }

    var smok = new Dragon();

    var camera = new Camera();

    var world = new World();

	

	function update(delta) {
		if(dol) {
            smok.forward(delta);
            camera.down(c);
        }
			
		if(gora) {
            smok.back(delta);
            camera.up(c);
        }
			
		if(lewo) {
            smok.left(delta);
            camera.left(c);
        }
			
		if(prawo) {
            smok.right(delta);
            camera.right(c);
        }
		
	}

	function draw() {
		c.clearRect(0, 0, canvas.width, canvas.height);
        // camera.draw(c);
        world.draw(c);
		smok.draw(c);
        // console.log('rysuje');
		// c.drawImage(img, 0, 0, 100, 90, 100, 100, 100, 90);
		// s.draw(c);
	}

	

	MainLoop.setUpdate(update).setDraw(draw).start();

	
}





