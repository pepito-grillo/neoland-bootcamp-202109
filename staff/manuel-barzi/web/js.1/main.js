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

var bananas = { name: 'Banana', quantity: 4, price: 2 }
var oranges = { name: 'Orange', quantity: 10, price: 2 }
var kiwis = { name: 'Kiwi', quantity: 2, price: 6 }

var cart = [bananas, oranges, kiwis]
var total = 0

for (var i = 0; i < cart.length; i++) { // i++ => i = i + 1
    var item = cart[i]

    total = total + item.quantity * item.price
}

document.write('total is ', total)
document.write('<table class="table"><tr><th>name</th></tr><tr><td>Pepito</td></tr></table>')