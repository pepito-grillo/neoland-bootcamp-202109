var logger = {
    info (message) {
        console.log ('%cINFO %c' + new Date().toISOString() + '%c' + message, 'color:white' , 'color: gold' , 'color:white')
    }
}