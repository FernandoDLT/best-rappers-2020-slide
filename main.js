let bestRappers = ['Tupac Shakur', 'Biggie Smalls', 'Dr. Dre']

let removed = bestRappers.shift()
let removedAgain = bestRappers.pop()

// bestRappers.unshift()
// bestRappers.push('Dr. Dre')

// console.log( bestRappers )
// console.log( removedAgain)
// console.log( removed )
// console.log( bestRappers )

// Using the map() method

let bestRapperOfAllTime = bestRappers.map(x => 'Tupac Shakur')
console.log( bestRappers )

// bestRapperOfAllTime.unshift('Tupac Shakur')
// bestRapperOfAllTime.push('Tupac Shakur')

// console.log( bestRapperOfAllTime )