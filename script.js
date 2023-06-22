//Index
const form = document.getElementById('form');
const register = document.getElementById('register');
const activo = document.getElementById('activo');


form.addEventListener ('submit', async (e) =>  {
    e.preventDefault(); //Al presionar el submit no se refresca la pagina.

    try{
        //Connection url, method, mode, json, valores a subir
        await fetch('https://sheet.best/api/sheets/ca6724ff-d1b8-4d0a-907b-bc683a18b462', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //Transforma el objeto de js a Json para madarle al servidor.
                "Nombre": form.name.value,
                "Apellido": form.lastname.value,
                "Ciudad": form.city.value,
                "Cupo": form.cupo.value,
                "Telefono": form.telefono.value,
                "Estado": form.estado.value,
            })
        });

    }catch(e){
        console.log(e);
    }

    register.classList.remove('activo');
    exito.classList.add('activo');

    // Leer Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5');

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Eliminar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5/0', {
	// 		method: 'DELETE'
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Actualizar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/e1bf0443-8bca-42a4-afc2-4f36b4e8fbd5/3', {
	// 		method: 'PATCH',
	// 		mode: 'cors',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 	    "Nombre": "cualquierNombre",
    //      "Apellido": "cualquierDato",
    //      "Cupo": "4000000",

	// 		})
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);

});
