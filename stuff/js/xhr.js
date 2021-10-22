var xhr = new XMLHttpRequest

xhr.onload = function() {
    console.log(xhr.responseText)
}

// xhr.open('GET', 'https://b00tc4mp.com/index.html')
// xhr.open('GET', 'https://www.google.com/search?q=hola+mundo')

//xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users')
// xhr.open('POST', 'https://b00tc4mp.herokuapp.com/api/v2/users/auth')
xhr.open('GET', 'https://b00tc4mp.herokuapp.com/api/v2/users')

// xhr.setRequestHeader('Content-Type', 'application/json')
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MTcyOTJhMGVmMzQ3ZDAwMTc4ZGRiM2MiLCJpYXQiOjE2MzQ5MDA4MzYsImV4cCI6MTYzNDkwNDQzNn0.x6tdEKD9Udct_7bg1SAlQbqmjg90FrO5m4u6QPxXyqE')

//xhr.send('{ "name": "Pepito Grillo", "username": "pepigri2@mail.com", "password": "123123123" }')
// xhr.send('{ "username": "pepigri2@mail.com", "password": "123123123" }')
xhr.send()