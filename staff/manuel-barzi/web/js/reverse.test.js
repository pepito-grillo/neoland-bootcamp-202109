describe('TEST reverse')

// CASE 1

var array = [1, 2, 3]
var res = reverse(array)

if (res instanceof Array
&& res.length === 3
&& res === array
&& res[0] === 3
&& res[1] === 2
&& res[2] === 1)
    success('test ok')
else
    fail('test failed')

// CASE 2

var array = ['a', 'b', 'c']
var res = reverse(array)

if (res instanceof Array
&& res.length === 3
&& res === array
&& res[0] === 'c'
&& res[1] === 'b'
&& res[2] === 'a')
    success('test ok')
else
    fail('test failed')