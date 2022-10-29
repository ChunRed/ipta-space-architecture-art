

let pointLight;
const scene = new THREE.Scene();
scene.background = new THREE.Color('rgb(255,255,255)' );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const normalMap = new THREE.TextureLoader().load('https://cdn.glitch.global/55b89521-ecac-41fd-a3df-9ffb619de5b2/normal.png?v=1666119849965');
const colorMap = new THREE.TextureLoader().load('https://cdn.glitch.global/0e6f1b8e-8c27-4821-ab85-1f0efd803749/0001.JPG?v=1666632646502');
var mouse = new THREE.Vector2();
var raycaster = new THREE.Raycaster();
let INTERSECTED;
var X=0, Y=0;
var touchevent = false;


const renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor('rgb(0, 0, 0)');
renderer.setClearAlpha(0.0);
renderer.shadowMap.enable = true;
document.body.appendChild( renderer.domElement );
camera.position.z = 5;
camera.position.y = 1;
camera.rotation.x = -0.3;





//-------------------------------------------------------------------------------------------------------------



function Light(){
  // 建立光源
  let AmbientLight = new THREE.AmbientLight('rgb(100,100,100)');
  AmbientLight.position.set(0, 0, 0);
  scene.add(AmbientLight);

  pointLight = new THREE.PointLight('rgb(150,150,150)');
  pointLight.position.set(0, 2, 1);
  scene.add(pointLight);  
}

function Mesh(){

}

function animate() {

  if(window.screen.width < 500){
    sphere.position.set(X , 0 , 0);
    if(!touchevent){
      if(X>0.1) X -=0.1;
      else if(X<-0.1) X +=0.1;
      else X = 0;
    }
  }
  else{
    sphere.position.set(-mouse.x*0.5, -mouse.y*0.5 - 0.9, 0);
    sphere2.position.set(-mouse.x*0.5-0.6, -mouse.y*0.5 - 0.9, 0);
    cube.position.set(-mouse.x*0.5, -mouse.y*0.5 - 1, 0);
  }
  
  requestAnimationFrame( animate );
  
  render();
};

function onMouseMove( event ) {
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

}

function render() {

  // 透過滑鼠點的位置和當前相機的矩陣計算出 raycaster值
  raycaster.setFromCamera( mouse, camera );

  // 取得 raycaster 射線和所有物件相交的陣列集合
  var intersects = raycaster.intersectObjects(scene.children);
  //scene.getObjectByName
  
  // 計算後，將所有有相交的物件的顏色改變為紅色，如果只需要將第一個觸發事件，那就陣列的第一個物件改變顏色即可

  if ( intersects.length > 0 ) {
	  if ( INTERSECTED != intersects[ 0 ].object ) {
		  if ( INTERSECTED ) {
        INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
      }
			INTERSECTED = intersects[ 0 ].object;
			INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
			INTERSECTED.material.emissive.setHex( 0xff0000 );
      
      //INTERSECTED.scale.setScalar( 1 );
      obj_name.innerHTML = intersects[ 0 ].object.name;
      
		}
	}
  
  else {
    obj_name.innerHTML = "";
		if ( INTERSECTED ) {
      INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
     }
		INTERSECTED = null;
	}

  
  
  renderer.render( scene, camera );

}


// -------------------------------------------------------------------------------建立物體-1
const geometry2 = new THREE.BoxGeometry( 3.5, 0.1, 3.5 );
const material2 = new THREE.MeshPhongMaterial({
    color:new THREE.Color('rgb(255,255,255)'),
    map:colorMap,
    //normalMap:normalMap,
    normalScale:new THREE.Vector2(1,1)
  });
const skinmat2 = new THREE.MeshStandardMaterial({
    roughness: 0.1, // 粗糙度
    metalness: 100, // 金屬感
    side: THREE.DoubleSide, // 雙面材質
    map: material2 // 皮膚貼圖
  });
  
const cube = new THREE.Mesh( geometry2, material2 );
cube.name = "cube";
scene.add( cube );



// -------------------------------------------------------------------------------建立物體-2
const geometry = new THREE.SphereGeometry( 0.08, 40, 40 );
const material = new THREE.MeshPhongMaterial({
    color:new THREE.Color('rgb(255,0,0)'),
    normalScale:new THREE.Vector2(1,1)
  });
const skinmat = new THREE.MeshStandardMaterial({
    roughness: 0.5, // 粗糙度
    metalness: 0.5, // 金屬感
    side: THREE.DoubleSide, // 雙面材質
    map: material // 皮膚貼圖
  });

const sphere = new THREE.Mesh( geometry, material );
sphere.name = "sphere";
scene.add( sphere );


// -------------------------------------------------------------------------------建立物體-3
const geometry3 = new THREE.SphereGeometry( 0.08, 40, 40 );


const sphere2 = new THREE.Mesh( geometry3, material );
sphere2.name = "sphere2";
scene.add( sphere2 );





//-------------------------------------------------------------------------------------------------------------



Light();

animate();




//-------------------------------------------------------------------------------------------------------------




// 監聽螢幕寬高來做簡單 RWD 設定
window.addEventListener('resize', function() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})
window.addEventListener( 'mousemove', onMouseMove, false );
window.addEventListener('touchmove', function(event) {
  if (event.targetTouches.length == 1) {
    var touch = event.targetTouches[0];
    X = (touch.pageX- window.innerWidth/2)/200;
    Y = (touch.pageY/200- window.innerHeight/2)/200; 
  }
}, false); 
window.addEventListener('touchstart', function(event) {
  touchevent = true;
},false);
window.addEventListener('touchend', function(event) {
  touchevent = false;
},false);

window.requestAnimationFrame(render);
