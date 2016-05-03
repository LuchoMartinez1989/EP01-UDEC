window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 300;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};

	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter ,
									imagen	: 'img/jupiter.jpg'
							  }),
		escalaJupiter = true;
	escena.add(jupiter);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(jupiter.position);
	jupiter.position.x = 500;
	escena.add(camara);
/*	function renderizar()
	{
		jupiter.rotation.y += 0.1;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}*/


	//crear mercurio

	var mercurio = crearPlaneta({
									tamano 	: tamanoJupiter * 0.0252,
									imagen	: 'img/mercurio.jpg'
								}),
		escalaJupiter = true;
	escena.add(mercurio);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(mercurio.position);
	mercurio.position.x = -150;
	escena.add(camara);

	//Crear Venus
	var venus = crearPlaneta({
									tamano 	: tamanoJupiter * 0.0623,
									imagen	: 'img/venus.jpg'
								}),
		escalaJupiter = true;
	escena.add(venus);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(venus.position);
	venus.position.x = -75;
	escena.add(camara);
//crear tierra
var tierra = crearPlaneta({
								tamano 	: tamanoJupiter * 0.061,
								imagen	: 'img/tierra.jpg'
							}),
	escalaJupiter = true;
escena.add(tierra);
var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
camara.position.y = 160;
camara.position.z = 400;
camara.lookAt(tierra.position);
tierra.position.x = 0;
escena.add(camara);

//crear marte
var marte = crearPlaneta({
								tamano 	: tamanoJupiter * 0.04,
								imagen	: 'img/marte.jpg'
							}),
	escalaJupiter = true;
escena.add(marte);
var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
camara.position.y = 160;
camara.position.z = 400;
camara.lookAt(marte.position);
marte.position.x = 90;
escena.add(camara);
function renderizar()
{
	tierra.rotation.y += 0.01;
	venus.rotation.y += 0.01;
	mercurio.rotation.y += 0.01;
	jupiter.rotation.y += 0.001;
	marte.rotation.y += 0.01;
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}

	renderizar();
};
