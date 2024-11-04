interface Product {
    name: string,
    price: number,
    isAvaliable: boolean
}

function showDetails(product: Product) {
    console.log(`O produto ${product.name} custa R$${product.price} `)
    if (product.isAvaliable) {
        console.log('O produto está disponivel')
    }
}

const shirt:Product = {
    name: 'Camisa',
    price: 19.99,
    isAvaliable: true,
}