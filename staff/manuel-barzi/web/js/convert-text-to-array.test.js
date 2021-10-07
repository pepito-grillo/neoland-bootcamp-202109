console.log('TEST convertTextToArray')

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