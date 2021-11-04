var logger = {
    info(message) {
        console.log('%cINFO %c' + new Date().toISOString() + ' %c' + message, 'color: blue;', 'color: gold;' , 'color: blue;')
    }
}