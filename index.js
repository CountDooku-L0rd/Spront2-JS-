//1
function stringReverse(str) {
    return str.split('').reverse().join('')
}

function arraySqr(arr) {
    return arr.map(num => num ** 2)
}

function sumCost(arr) {
    return arr.reduce(function (sum, currentProduct) {
        return sum + currentProduct.price * currentProduct.count;
    }, 0);
}

function evenOrOdd(num) {
    return (num % 2 === 0) ? 'Even' : 'Odd'
}

const arr = [2, 4, 5, 7]
const str = 'Hello World'
const objectsArr = [{name: 'Щётка', price: 300, count: 5}, {name: 'Пила', price: 450, count: 12}, {
    name: 'Отвёртка', price: 150, count: 9
}, {name: 'Дрель', price: 1500, count: 4}, {name: 'Долото', price: 270, count: 14}]
const num = 2
const results = document.querySelectorAll(".result")
results[0].textContent = stringReverse(str)
results[1].textContent = arraySqr(arr)
results[2].textContent = sumCost(objectsArr)
results[3].textContent = evenOrOdd(num)

//2
const age = 16
const income = 100000
const creditScore = 850
const isExistingCustomer = false
const notABankClient = age >= 21 && creditScore >= 650 && income >= 50000
const bankClient = isExistingCustomer === true && creditScore >= 650 && age >= 18 && income >= 50000
const highIncome = income >= 100000
const highCreditRating = income >= 50000 && creditScore === 850
if (notABankClient || bankClient || highIncome || highCreditRating) {
    console.log("Кредит одобрен")
} else {
    console.log("Кредит не одобрен")
}