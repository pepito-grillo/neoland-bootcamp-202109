# Carpeta src
    - Esta carpeta tiene todo nuestro código de desarrollo
    - Contiene el archivo index.js
    - Contiene el archivo styles.css
    - Contiene la carpeta de /components
    - Contiene la carpeta de /assets
    - Contiene la carpeta /logic
    - Contiene la carpeta /utils

# Carpeta public
    - Contiene el HTML
    - Contiene nuestro favicon
    - Contiene el archivo Robots

# Archivo .gitignore
    - Aquí indicamos a git las carpetas y los archivos que no queremos subir a nuestro repositorio
    - Mínimo tendremos: `/node_modules` `env` `.DS_Store` `.vscode` `vscode`
    - Opcional: `package-lock.json`

# Archivo package.json
    - dependencies: aquí tendremos todas las dependencias directas para nuestro proyecto
    - devDependencies: aquí tendremos todas las dependencias necesarias exclusivamente para el desarrollo
    - scripts: definimos los comandos más utilizados o básicos de nuestro desarrollo
    - Este archivo es indispensable

# Archivo package-lock.json
    - Guarda todas las subdependencias que tiene nuestro proyecto, este archivo lo podemos eliminar