# Carpeta components
    - Contiene varias subcarpetas y cada una de esas carpetas contiene todos los
        archivos del componente específico en excepción de App que no necesita carpeta

# Carpeta assets
    - Contiene todos los ficheros de imágenes, fuentes y logos

# Carpeta logic
    - Contiene en ficheros individuales las integraciones con las APIs, estas
        integraciones no continen nada de la capa de presentación
    - Contiene un archivo index o exports que tiene todas las importaciones
        preparadas para utilizarse como un único objeto

# Carpeta utils
    - Contiene en ficheros individuales las funciones reutilizables de nuestra
        aplicación como por ejemplo el logger