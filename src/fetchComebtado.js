export class Consulta {
    constructor() {

    }
    consulta() {
        fetch(" https://rickandmortyapi.com/api/character") // recibe un parametro de URL
            .then(respuesta =>
                respuesta.json()) //los datos recibidos  seran convertidos a formato json
            .then(respuesta => { // se reciben los datos  en formato json
                console.log(respuesta); // se muestran los datos  obtenidos
                let { results } = respuesta;
                let personajes = ``;
                let contador = 0;
                results.map(personaje => {
                    // console.log(personaje);
                    let { // variables  que se encuentra en la api la convertimos en nustras variables
                        created,
                        gender,
                        id,
                        image,
                        location,
                        name,
                        origin,
                        species,
                        status,
                        url
                    } = personaje;
                    if (contador < 20) // agregamos un contador para ver que personajes queremos que se vean 
                        personajes += `
                        <div class="card"> //agremos estilo a la pagina 
                            <div class="card-title text-center">
                                <h1 class="display-4">${name} | No. ${id}</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Creacion: </b>${created}</p>
                                        <p><b>Genero: </b>${gender}</p>
                                        <p><b>Localizacion: </b>${location.name}</p>
                                        <p><b>Origen: </b>${origin.name}</p>
                                        <p><b>Especie: </b>${species}</p>
                                        <p><b>Estado: </b>${status}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <img class="img-fluid mb-3" src="${image}" alt="">
                                        <a class="btn btn-outline-primary" href="${url}">Ver mas</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    contador++;
                });
                $(`#personajes`).html(personajes);
            })
            .catch(error => { // se atrapa un error en caso de que exista
                console.log(error); // se muestra el error
            });

        // .then((respuesta) => {
        //     if (respuesta.status == 200) {
        //         console.log("Todo bien");
        //         console.log(respuesta.json());
        //     }
        //     if (respuesta.status == 404) {
        //         console.log("No se encontro la pagina");
        //     }
        //     if (respuesta.status == 500) {
        //         console.log("Error de servidor");
        //     }
        // })
        // .catch();
    }
}