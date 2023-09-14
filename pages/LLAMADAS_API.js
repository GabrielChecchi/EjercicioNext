
var defaut = 
    [
        {
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        }
    ]


export async function GetAPI(){
    // Retorna los datos de la API
    let resAPI = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            if (!response.ok) {
            return false;
            }
            return response.json();
        })
    
    if (response === false){
        return defaut 
    }else{
        return response
    }
}

export async function POSTtarea({nombre , detalles, userId = 1}){
    // Crea una tarea, si esta la devuelve significa que esta agregada

    let tareaJSON =  {
        title: nombre,
        body: detalles,
        userId: userId,
    }

    let resAPI = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(tareaJSON),
        headers: {'Content-type': 'application/json; charset=UTF-8'}})

        .then((response) => {
            if (!response.ok) {
            return tareaJSON;
            }
            return response.json();
        })


    return GetAPI().push(resAPI)
}



