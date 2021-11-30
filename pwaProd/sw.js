// Archivo: C:\xampp\htdocs\pwa4\sw.js
var nombreCache = 'cuatro';
self.addEventListener(
	'install', 
	evento => {
		evento.waitUntil( 
			caches.open(nombreCache) 
			.then(	
				cache => { 
					cache.addAll( 
						[ 
							//'./bootstrap-5.0.2-dist/css/bootstrap.min.css',
							//'./img/sw.jpg'//,
							'./script.js'
						]
					);
				}
			)
		);
	}
);

self.addEventListener(
	'fetch', 
	function(evento) { 
		console.log("Se produjo evento fetch: " + evento.request.url);
		evento.respondWith(
			caches.match(evento.request)
			.then(
				function(respuesta){
					if(respuesta){ 
						console.log("La respuesta se toma de la caché");
						return respuesta; 
					}
					console.log("La respuesta se toma del servidor");
					return fetch(evento.request);
				}
			)
		);
	}
);