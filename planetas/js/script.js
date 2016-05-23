window.onload = function()
{
	var ancho = window.innerWidth;
	var alto = window.innerHeight;
	var lienzo = new THREE.WebGLRenderer({alpha: true});
	lienzo.setSize(ancho, alto);
	document.body.appendChild(lienzo.domElement);
	var escena 		  = new THREE.Scene,
		tamanoJupiter = 100;
	var crearPlaneta = function(data)
	{
		var geometria = new THREE.SphereGeometry(data.tamano,data.tamano,data.tamano);
		var textura = THREE.ImageUtils.loadTexture(data.imagen);
		var material = new THREE.MeshBasicMaterial( { map: textura } );
		return new THREE.Mesh(geometria, material);
	};
/*
	var jupiter = crearPlaneta({
									tamano 	: tamanoJupiter ,
									imagen	: 'img/jupiter.jpg'
							  }),
		escalaJupiter = true;
	escena.add(jupiter);*/
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	//camara.lookAt(jupiter.position);
//	jupiter.position.x = 500;
	escena.add(camara);
/*	function renderizar()
	{
		jupiter.rotation.y += 0.1;
		lienzo.render(escena, camara);
		requestAnimationFrame(renderizar);
	}*/


	//crear mercurio
	var planetas = [
				{
					imagen 	 : "Sol",
											 nombre      : "Sol",
										 //  vista       : false,
											 position    : { x : -950, y : 160},
											 tamano 	:tamanoJupiter * 4.8,
					objeto		 : 0,
					descripcion :"El Sol es una estrella de tipo-G de la secuencia principal y clase de luminosidad V que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario."
				//	botobjeto : document.write("<button id=prueba>prueba</button>")
				},
 					 {
 						 imagen 	 : "Mercurio",
                          nombre      : "Mercurio",
                        //  vista       : false,
                          position    : { x : -300, y : 160},
													tamano 	:tamanoJupiter * 0.0341157052537347,
 						 objeto		 : 0,
						 lunas  		:0,
						 objlunas :0,
						 descripcion : "Mercurio es el planeta del Sistema Solar más próximo al Sol y el más pequeño. Forma parte de los denominados planetas interiores o terrestres y carece de satélites al igual que Venus."
 					 },
					 //
             {
               imagen 	 : "Venus",
                           nombre      : "Venus",
                          // vista       : false,
                           position    : {x : -275, y : 160},
													 tamano 	:tamanoJupiter * 0.0846248531304202,
               objeto		 : 0,
							 lunas  		:0,
							 objlunas :0,
							 descripcion : "Venus es el segundo planeta del Sistema Solar en orden de distancia desde el Sol, y el tercero en cuanto a tamaño, de menor a mayor, junto con Mercurio, carece de satélites naturales. Recibe su nombre en honor a Venus, la diosa romana del amor"
						//
             },
              {
                imagen 	 : "tierra",
                            nombre      : "Tierra",
                        //    vista       : false,
                            position    : { x : -235, y : 160},
														tamano 	:tamanoJupiter * 0.0892127790522017,
                objeto		 : 0,
								lunas  		:1,
								objlunas :0,
								descripcion : "La Tierra es un planeta del Sistema Solar que gira alrededor de su estrella -el Sol- en la tercera órbita más interna. Es el más denso y el quinto mayor de los ocho planetas del Sistema Solar. También es el mayor de los cuatro terrestres."
							//
              },
							{
                imagen 	 : "Luna",
                            nombre      : "Tierra",
                        //    vista       : false,
                            position    : { x : -230, y : 130},
														tamano 	:(tamanoJupiter * 0.0892127790522017)* 0.3,
                objeto		 : 0,
								lunas  		:1,
								objlunas :0,
								descripcion : "Luna Terrestre"
							//
              },
               {
                 imagen 	 : "Marte",
                             nombre      : "marte",
                          //   vista       : false,
                             position    : {x : -214, y : 160},
														 tamano 	:tamanoJupiter * 0.0474668494376993,
                 objeto		 : 0,
								 lunas  		:0,
								 objlunas :0,
							 descripcion : "Marte es el cuarto planeta del sistema solar en orden de distancia al Sol. Llamado así por el dios de la guerra de la mitología romana Marte, recibe a veces el apodo de planeta rojo debido a la apariencia"
               },
							 {
                 imagen 	 : "Jupiter",
                             nombre      : "Jupiter",
                          //   vista       : false,
                             position    : {x : -80, y : 160},
														 tamano 	:tamanoJupiter ,
                 objeto		 : 0,
								 lunas  		:0,
								 objlunas :0,
							descripcion : "Júpiter es el quinto planeta del Sistema Solar. Forma parte de los denominados planetas exteriores o gaseosos. Recibe su nombre del dios romano Júpiter. Se trata del planeta que ofrece un mayor brillo a lo largo del año dependiendo de su fase"
               },
							 {
                 imagen 	 : "Saturno",
                             nombre      : "Saturno",
                          //   vista       : false,
                             position    : {x : 120, y : 160},
														 tamano 	:tamanoJupiter * 0.843003412969283,
                 objeto		 : 0,
								 objlunas :0,
								 descripcion : "Saturno es el sexto planeta del Sistema Solar, el segundo en tamaño y masa después de Júpiter y el único con un sistema de anillos visible desde nuestro planeta. Su nombre proviene del dios romano Saturno."
               },
							 {
                 imagen 	 : "Urano",
                             nombre      : "Urano",
                          //   vista       : false,
                             position    : {x : 260, y : 160},
														 tamano 	:tamanoJupiter * 0.357438594528059,
                 objeto		 : 0,
								 lunas  		:0,
								 objlunas :0,
								 descripcion : "Urano es el séptimo planeta del Sistema Solar, el tercero de mayor tamaño, y el cuarto más masivo. Se llama así en honor de la divinidad griega del cielo Urano el padre de Crono y el abuelo de Zeus."
               },
							 {
                 imagen 	 : "Pluton",
                             nombre      : "Pluton",
                          //   vista       : false,
                             position    : {x :360, y : 160},
														 tamano 	:tamanoJupiter * 0.346458344989649,
                 objeto		 : 0,
								 lunas  		:0,
								 objlunas :0,
								 descripcion : "Plutón o Pluto es un planeta enano del sistema solar situado a continuación de la órbita de Neptuno. Su nombre se debe al dios mitológico romano Plutón"
               }
          ];

	/*var mercurio = crearPlaneta({
									tamano 	: tamanoJupiter * 0.0252,
									imagen	: 'img/mercurio.jpg'
								}),
		escalaJupiter = true;
	escena.add(mercurio);
	var camara = new THREE.PerspectiveCamera(50,(ancho / alto),0.1, 10000);
	camara.position.y = 160;
	camara.position.z = 400;
	camara.lookAt(mercurio.position);
	mercurio.position.x = -380;
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
	venus.position.x = -305;
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
tierra.position.x = -230;
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
marte.position.x = -155;
escena.add(camara);*/
for (var i = 0; i < planetas.length;i++)
        {
        //  geometria = new THREE.SphereGeometry(30,30,30);
          //texture = THREE.ImageUtils.loadTexture('img/planetas/' + planetas[i].imagen + '.jpg');
          planetas[i].objeto =
          crearPlaneta({
          tamano 	: planetas[i].tamano,
					imagen	: 'img/' + planetas[i].imagen + '.jpg'

        });

        escena.add(planetas[i].objeto);
				//escena.add(("<input type='button' value ='prueba'>"));
				//escena.add(document.write("<input type='button' id= "+planetas[i].nombre+"  onclick='mostrar("+ planetas[i].nombre +")' value=\'" + planetas[i].nombre + "\' >"));
        planetas[i].objeto.position.x = planetas[i].position.x;
          planetas[i].objeto.position.y = planetas[i].position.y;

            //planetas[i].objeto.position.z = planetas[i].position.z;

          //var nom1 = planetas[i].nombre
          //scene.add(nom1);

        console.log(i)
        }
				//aca crea las lunas
			/*	for (var i = 0; i < planetas.length;i++)
				        {
				        //  geometria = new THREE.SphereGeometry(30,30,30);
				          //texture = THREE.ImageUtils.loadTexture('img/planetas/' + planetas[i].imagen + '.jpg');

									for (var j =0;j<=planetas[i].lunas;j++){
									planetas[i].objlunas =
				          crearPlaneta({
				          tamano 	: 35,
									imagen	: 'img/luna.jpg'
										}
				        });

				        escena.add(planetas[i].objeto);

				        planetas[i].objlunas.position.x = planetas[i].position.x + () ;
				          planetas[i].objlunas.position.y = planetas[i].position.y;


				        //console.log(i)
				        }
*/
function renderizar()
{
	for  (var i = 0; i < planetas.length;i++){
		planetas[i].objeto.rotation.y += 0.01;
//document.write("<input type='button' id= "+planetas[i].nombre+"  onclick='mostrar("+ planetas[i].nombre +")' value=\'" + planetas[i].nombre + "\' >");
	}


	/*tierra.rotation.y += 0.01;
	venus.rotation.y += 0.01;
	mercurio.rotation.y += 0.01;
	jupiter.rotation.y += 0.001;
	marte.rotation.y += 0.01*/
	lienzo.render(escena, camara);
	requestAnimationFrame(renderizar);
}



	renderizar();


};

function mostrar(dato){
    alert(dato);
}
