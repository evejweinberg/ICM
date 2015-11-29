// Your 3d scene will always need one of each of these
    var scene, camera, renderer;
    var moveforward = 100;
    
    // And let's save a couple of objects as global variables
    var sun, earth;
    
    // Set up some init function (I like to call it when the window loads)
    window.onload = function() {
      // Create a basic scene
      scene = new THREE.Scene();
      
      // Create a basic perspective camera
      var aspectRatio = window.innerWidth / window.innerHeight;
      camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 1000);
    
      renderer = new THREE.WebGLRenderer();
     renderer.setSize( window.innerWidth, window.innerHeight );
      // Attach it to the body HTML element
      document.getElementById("container").appendChild( renderer.domElement );
      
      
      // At this point, you'd probably want to create some objects or lights
      // First, make a sphere that we can re-use
      var sphereGeometry = new THREE.SphereGeometry(5, 30, 30);
      
      // Now, create an empty object for the sun
      sun = new THREE.Object3D();
      
      // Create a mesh for the sun object. We're using a basic material, because
      // the sun doesn't need shading.
      var geometry = new THREE.BoxGeometry( 1, 1, 1 );
      var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
      var sunMaterial = new THREE.MeshBasicMaterial({ color: 0xCCCCCC });
      var sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
      var cube = new THREE.Mesh( geometry, material );
      
      // Add it to our sun object
      sun.add(sunMesh);
        camera.position.z = moveforward;
      
      
      // Add a point light to the center of the world, for the sunlight
      var sunlight = new THREE.PointLight(0xff0040, 20, 100 );
      var light2 = new THREE.PointLight( 0x0040ff, 10, 100 );
      
      // Add it to our scene
      scene.add(sunlight);
      scene.add(light2);
      light2.position.z=0;
  
      
      
      // Create an empty object for the earth. This will rotate around the sun.
      earth = new THREE.Object3D();
      // Offset the earth's position so that it rotates at a distance.
      earth.position.x = -15;
      
      // Create a mesh for the earth
      // var earthTexture = THREE.ImageUtils.loadTexture("demo/tex/noise.png");
      var earthMaterial = new THREE.MeshPhongMaterial({ color: 0x99CCFF });
      var earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
      // This should be smaller than the sun, so scale it down uniformly.
      earthMesh.scale.set(0.7, 0.3, 0.3);
      earth.add(earthMesh);
      
      
      // Now, create a moon that rotates around the earth.
      var moonMaterial = new THREE.MeshLambertMaterial({ color: 0xCCCCCC });
      var moonMesh = new THREE.Mesh(sphereGeometry, moonMaterial);
      // Scale it down and offset its position.
      moonMesh.scale.set(0.1, 0.1, 0.1);
      moonMesh.position.x = -3;
      
      // Add the moon object to our earth container, add our earth container to the
      // sun container, and add that to the scene. This sets up our object hierarchy.
      earth.add(moonMesh);
      sun.add(earth);
      scene.add(sun);
      
      
      // Now, set up a loop function for animation
      requestAnimationFrame( animate );
    }
    
    // Now, set up a looping function
    function animate() {
      // Update the rotation of our sun and earth
      sun.rotation.y += 0.01;
      earth.rotation.y += 0.01;
         moveforward = moveforward;
      camera.position.z = moveforward;
      
      // Finish with a new render call
      renderer.render( scene, camera );
      
      // Tell our function to loop again on the next frame
      requestAnimationFrame( animate );
    }