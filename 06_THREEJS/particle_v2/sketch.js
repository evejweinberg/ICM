// the main three.js components
	var camera1, scene, renderer,
 
	// to keep track of the mouse position
		mouseX = 0, mouseY = 0,
 
	// an array to store our particles in
		particles = [];
 
	// let's get going! 
	init();
	
	function init() {
 
	// Camera params : 
	// field of view, aspect ratio for render output, near and far clipping plane. 
	camera1 = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 1, 4000);
	//fov, aspect ratio, near=1 far = 4000
	//negative goes back in space
	 //For performance intensive apps, you can also give setSize smaller values, 
	 //like window.innerWidth/2 and window.innerHeight/2, which will make the app render at half size.
 
	// move the camera backwards so we can see stuff! 
	// default position is 0,0,0. 
	camera1.position.z = 1000;
	}
	
	scene = new THREE.Scene();
	scene.add(camera1);
	
	// and the CanvasRenderer figures out what the 
	// stuff in the scene looks like and draws it!
 
	renderer = new THREE.CanvasRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
 
	// the renderer's canvas domElement is added to the body
	document.body.appendChild( renderer.domElement );