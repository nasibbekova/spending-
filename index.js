// Найти ту компанию которая больше всех тратит и найти ту которая меньше всех тратит 

// Найти средний расход всех компаний 

// Найти общую сумму  расходов всех компаний
let arr = [
    {
        company: 'artel',
        budget: 1000,
        spending: 500
    },
    {
        company: 'uztelecom',
        budget: 4000,
        spending: 1700
    },
    {
        company: 'uzmotors',
        budget: 8000,
        spending: 3500
    },
    {
        company: 'chopar',
        budget: 5000,
        spending: 4000
    },
]


// 1
let maxSpend = spending.reduce ((a,b ) => {
    if (a>b) {
        return a
    } else {
        return  b 
    }
})
console.log (maxSpend)

let minSpend = spending.reduce ((a,b ) => {
    if (a<b) {
        return a
    } else {
        return  b 
    }
})
console.log (minSpend)

// 2
 let total = arr.reduce ((a,b ) =>{
    return a + b.spending  
 } , 0)

console.log (total / arr.length )

// 3
let allSum = 0
arr.filter (item =>allSum +=  item )
console.log (allSum)