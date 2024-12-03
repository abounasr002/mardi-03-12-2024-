// GET


fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => response.json())
    .then((json) => console.log('GET Todo:', json))
    .catch((error) => console.error('Error en la solicitud GET:', error));



//POST

fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify({
        userId: 1,
        title: 'ACGD POST',
        completed: false,
        }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log('POST Todo:', json))
    .catch((error) => console.error('OH lala error:', error));
    