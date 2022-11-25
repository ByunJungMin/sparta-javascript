class Notebook {
    constructor(name, price, company) {
        this.name = name
        this.price = price
        this.company = company
    }
}


const notebook1 = new Notebook('Mackbook', 2000000, 'Apple')

console.log(notebook1)
console.log(notebook1.name)
console.log(notebook1.price)
console.log(notebook1.company)