var createTag = function(tag, content) {
    return '<' + tag + '>' + content + '</' + tag + '>'
}

var createList = function(values) {
    var list = '<ul>'

    for (var i = 0; i < values.length; i++) {
        var value = values[i]

        list = list + createTag('li', value)
    }

    list = list + '</ul>'

    return list
}

var students = ['Sergio', 'Nico', 'Adrian', 'Gerard', 'Riccardo', 'Xavier', 'Noelia']

var list = createList(students)

document.write(list)

// TODO build a <table> with headers in <thead> all items from cart and the total in the <tfoot>

function createTableHead(headers) {
    var heads = ''

    for (var i = 0; i < headers.length; i++) {
        var header = headers[i]

        heads = heads + createTag('th', header)
    }

    var head = createTag('thead', createTag('tr', heads))

    return head
}

function createTableData(content) {
    return createTag('td', content)
}

function createTableRow(clazz, content) {
    return '<tr class="' + clazz + '">' + content + '</tr>'
}

function createTableFoot(content) {
    return createTag('tfoot', content)
}

var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }
var melons = { name: 'Melon', quantity: 1, price: 2 }

var cart = [bananas, oranges, kiwis, melons]
var total = 0

var table = '<table class="table">' + createTableHead(['name', 'quantity', 'price'])


for (var i = 0; i < cart.length; i++) { // i++ => i = i + 1
    var item = cart[i]

    total = total + item.quantity * item.price

    var datas = createTableData(item.name) + createTableData(item.quantity) +  createTableData(item.price)
    var row = createTableRow('table__row', datas)

    table = table + row
}

table = table + '</tbody>'

var foot = createTableFoot('<tr><th colspan="2">total</th><td>' + total + '</td></tr>')

table = table + foot + '</table>'

document.write(table)

//document.write('<table class="table"><tr><th>name</th></tr><tr><td>Pepito</td></tr></table>')