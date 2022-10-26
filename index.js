const products = [{
    id: 10, name: 'Chinelo', price: 125.00, category: 'Roupas'
}, {
    id: 11, name: 'PS5', price: 2500.00, category: 'Video games'
}, {
    id: 15, name: 'Computador Gamer', price: 3685.12, category: 'Eletrônicos'
}]

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', submit)

function initCart() {
    products.forEach((element, index) => {
        document.getElementById('cart').innerHTML += `
            <div>Produto ${index} - ${element.name}</div>
            Quantidade: <input type="number" name="${element.id}" />
            <div>Valor do produto: ${parseFloat(element.price).toFixed(2)}</div>
        `
    })
}

function submit(e) {
    e.preventDefault()
    let total = 0
    const productsBought = []
    const formData = new FormData(document.getElementById('formOrder'))
    formData.forEach((quantity, index) => {
        const product = products.find(val => val.id == index)
        if (quantity > 0) {
            total += product.price * quantity
            productsBought.push({name: product.name, quantity})
        }
    })
    document.getElementById('totalOrder').innerHTML = `Total do pedido: ${parseFloat(total).toFixed(2)}`
    console.log('Parabéns pelo seu pedido!')
    console.log({
        productsBought,
        total: parseFloat(total).toFixed(2)
    })
}

window.onload = () => {
    initCart()
}
