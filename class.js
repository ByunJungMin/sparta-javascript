class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    printInfo() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

const notebook = new product('Macbook', 2000000)

notebook.printInfo()





const computer = {
    name: 'Macbook',
    price: 2000000,
    printInfo: function() {
        console.log(`name: ${this.name}, price: ${this.price}`)
    }
}

computer.printInfo()