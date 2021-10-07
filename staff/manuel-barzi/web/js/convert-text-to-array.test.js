console.log('TEST convertTextToArray')

// CASE 1

var res = convertTextToArray('hola')

if (res instanceof Array 
    && res.length === 4 
    && res[0] === 'h' 
    && res[1] === 'o' 
    && res[2] === 'l' 
    && res[3] === 'a') {
    console.log('test ok')
} else {
    console.error('test failed')
}

// CASE 2

var res = convertTextToArray('mundo')

if (res instanceof Array 
    && res.length === 5
    && res[0] === 'm' 
    && res[1] === 'u' 
    && res[2] === 'n' 
    && res[3] === 'd'
    && res[4] === 'o') {
    console.log('test ok')
} else {
    console.error('test failed')
}