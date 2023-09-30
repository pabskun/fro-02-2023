const obtenerPersonas = async () =>{
    let listaPersonas = [];
    await axios({
        'url': 'http://localhost:3000/obtener-personas',
        'method': 'get',
        'responseType': 'json'
    }).then(response=>{
        listaPersonas = response.data;
    });

    return listaPersonas;
};

