//1
function stringReverse(str) {
    let resStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resStr += str.charAt(i);
    }
    return resStr;
}

function arraySqr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = arr[i]*arr[i];
    }
    return newArr;
}

function sumCost(arr){
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i].price * arr[i].count;
    }
    return res;
}

function evenOrOdd(num){
    if (num%2===0){
        return 'Even'
    } else{
        return 'Odd';
    }
}
const arr = [2,4,5,7]
const str = 'Hello World'
const objectsArr = [
    {name: 'Щётка', price: 300, count: 5},
    {name: 'Пила', price: 450, count: 12},
    {name: 'Отвёртка', price: 150, count: 9},
    {name: 'Дрель', price: 1500, count: 4},
    {name: 'Долото', price: 270, count: 14}
]
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

if ((age>=21 && creditScore>=650 && income>=50000) || (isExistingCustomer===true && creditScore>=650 && age>=18 && income>=50000) || (income>=100000 && creditScore>=850)){
    console.log("Кредит одобрен")
} else{
    console.log("Кредит не одобрен")
}