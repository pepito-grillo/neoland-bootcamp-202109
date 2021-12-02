BBDD

- Forma de pensar: Primero pensamos en etidades, luego en relacciones ntn, ntm, mtm, después en colecciones
y de ahí lo pasamos a hacer los schemas que necesitemos (schema = entidad)

- Los pasos a seguir para desarrollar una funcionalidad en back

Para más favoritos

- Lo primero hacer la función que recibe la petición (que dispara el evento o cadena, capa de presentación)
    qué necesito:
    Verbo: GET      PATH: api/vehicles/mostfavs     Reqs: token(header), numMostFavs(10, body)

    qué lógica aplico:
    Verifico el token, preparo los datos que necesita mi logic y llamo a mi logic pasándole por parámetros
    lo que necesite la función de la lógica(en el ejemplo los 10 más favoritos)
    Manejo la respuesta del logic, si hay un error devuelvo el error (res.status(4xx).send(err)) y si no devuelvo
    la respuesta a la petición del usuario(res.status(2xx).send(data))


- La función que maneja la lógica (lógica de negocio)

    qué necesito:
    Los parámetros que en este caso serán los 10 más favoritos y ya

    qué logica aplico:
    Valido que lo uqe me pasen es correcto (errores síncronos), y en este caso utilizando los métodos de los modelos
    buscaría los 10 vehículos más favoritos. Si hay algún error manejo el error y si no devuelvo el resultado
