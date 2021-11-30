// Archivo: C:\xampp\htdocs\pwa4\rsw.js
if ('serviceWorker' in navigator) {  
	navigator.serviceWorker.register('./sw.js')
	.then(
		function(registro) { 
			alert('Registro de Service Worker exitoso con alcance: ' + registro.scope);   
		}
	)
	.catch(
		function(error) {  
			alert('Error en el registro de ServiceWorker: ' + error);
		}
	);
}
