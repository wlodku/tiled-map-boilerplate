import { Dragon } from './dragon.js';
import { Camera } from './camera.js';
import { World  } from './world.js';


window.addEventListener('load', () => {
	const canva = document.getElementById('qwe');
	canva.width = window.innerWidth;
  canva.height = window.innerHeight;

	const c = canva.getContext('2d');

  window.addEventListener('keydown', pressKey,false);
  window.addEventListener('keyup',releseKey,false);

	let left, right, up, down = false;

	function pressKey(event) {
        let keyCode = event.keyCode;
        switch (keyCode) {
            case 37: //d
                left = true;
                // up = false;
                right = false;
                // down = false;
                break;
            case 38: //s
                up = true;
                down = false;
                // right = false;
                // left = false;
                break;
            case 39: //a
                right = true;
                left = false;
                // up = false;
                // down = false;
                break;
            case 40: //w
                down = true;
                up = false;
                // left = false;
                // right = false;
                break;
        }
        event.stopPropagation();
        event.preventDefault();
    }

    function releseKey(event) {
        let keyCode = event.keyCode;
        switch (keyCode) {
            case 37:
                left = false;
                break;
            case 38:
                up = false;
                break;
            case 39:
                right = false;
                break;
            case 40:
                down = false;
                break;
        }
    }

    const dragon = new Dragon();
    const camera = new Camera();
    const world = new World();

	function update(delta) {
		if(down) {
            dragon.forward(delta);
            camera.down(c);
        }

		if(up) {
            dragon.back(delta);
            camera.up(c);
        }

		if(left) {
            dragon.left(delta);
            camera.left(c);
        }

		if(right) {
            dragon.right(delta);
            camera.right(c);
        }
	}

	function draw() {
		c.clearRect(0, 0, canva.width, canva.height);
    world.draw(c);
		dragon.draw(c);
	}

	MainLoop.setUpdate(update).setDraw(draw).start();

});
