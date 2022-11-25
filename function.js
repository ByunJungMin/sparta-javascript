function calculateAvg(price1, price2, price3) {
    const avg = (price1 + price2 + price3) / 3
    return avg
}

const priceA = 1000
const priceB = 2000
const priceC = 3000
const avg = calculateAvg(priceA, priceB, priceC)
console.log(`평균: ${avg}`)

