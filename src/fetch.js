export class Consulta {
    constructor() {

    }
    consulta() {
        fetch("https://rickandmortyapi.com/api/character")
            .then(respuesta =>
                respuesta.json())
            .then(respuesta => {
                console.log(respuesta);
                let { results } = respuesta;
                let personajes = ``;
                let contador = 0;
                results.map(personaje => {
                    // console.log(personaje);
                    let {
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
                    if (contador < 5)
                        personajes += `
                        <div class="card">
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
                                        <a class="btn btn-outline-primary" href="${url}">Ver más</a>
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
    consultarEpisodio() {
        fetch("https://rickandmortyapi.com/api/episode")
            .then(respuesta =>
                respuesta.json())
            .then(respuesta => {
                console.log(respuesta);
                let { results } = respuesta;
                let episodios = ``;
                let contador = 0;
                results.map(episodio => {
                    // console.log(personaje);
                    let {
                        created,
                        id,
                        name,
                        air_date,
                        episode,
                        characters,
                        url
                    } = episodio;
                    if (contador < 5)
                        episodios += `
                        <div class="card">
                            <div class="card-title text-center">
                                <h1 class="display-4"> Episodio No. ${id}</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Creacion: </b>${created}</p>
                                        <p><b>Fecha de estreno: </b>${air_date}</p>
                                        <p><b>Nombre del episodio: </b>${name}</p>
                                        <p><b>Temporada: </b>${episode}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <a class="btn btn-outline-primary" href="${url}">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    contador++;
                });
                $(`#episodios`).html(episodios);
            })
            .catch(error => { // se atrapa un error en caso de que exista
                console.log(error); // se muestra el error
            });
    }
    consultarUbicacion() {
        fetch("https://rickandmortyapi.com/api/location")
            .then(respuesta =>
                respuesta.json())
            .then(respuesta => {
                console.log(respuesta);
                let { results } = respuesta;
                let ubicaciones = ``;
                let contador = 10;
                results.map(ubicacion => {
                    // console.log(ubicacion);
                    let {
                        created,
                        id,
                        name,
                        type,
                        dimension,
                        residents,
                        url
                    } = ubicacion;
                    if (contador > 9)
                        ubicaciones += `
                        <div class="card">
                            <div class="card-title text-center">
                                <h1 class="display-4">${name} | No. ${id}</h1>
                            </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-md-8 align-self-center">
                                        <p><b>Localizacion: </b>${type}</p>
                                        <p><b>Dimension: </b>${dimension}</p>
                                        <p><b>Creacion: </b>${created}</p>
                                    </div>
                                    <div class="col-md-4 align-self-center">
                                        <a class="btn btn-outline-primary" href="${url}">Ver más</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                    contador--;
                });
                $(`#ubicaciones`).html(ubicaciones);
            })
            .catch(error => { // se atrapa un error en caso de que exista
                console.log(error); // se muestra el error
            });
    }
}