// let age = 60
// let days = 1

// while (age < 60) {
//     days++
//     console.log('I am working (while) ' + days);

//     if (days >= 365) {
//         age++
//         console.log('yohoo pensiya');
//     }
// }

// do {
//     days++
//     console.log('I am working (do while)' + days);

//     if (days >= 365) {
//         age++
//         console.log('yohoo pensiya');
//     }
// } while (age < 60)


// let pwd
// let i = 3

// do {
//     pwd = +prompt('added your password')
//     i--
//     if(i > 0 && pwd !== 7777) {
//         alert(`У вас осталось ${i} попытки`)
//     }
// } while(pwd !== 7777 && i > 0)

// if (i === 0) {
//     alert('Good bye!')
// } else {
//     alert('Welcome')
// }



// 12.10.2023
// lesson 23 


// console.error()
// console.table()


// let students = ['baxt', 'islom', 'safka', 'manon', 'xojik', 'aza', 'azaf', 'xafiz', 'tyoma', 'alsaf', 'ismoil']


// for (let name of students) {
//     if (name.length > 5) {
//         console.log('You have a long name');
//     } else {
//         console.log("You don't have a long name");
//     }
// }



// students[0]

// let [a, b, c, d, f, k, t, o, l, r, y] = students



//  Двойной цикл for // циклы циклов // Циклы в цикле

// let products = [
//     {
//         name: "milk",
//         type: "milk",
//         price: 16000
//     },
//     {
//         name: "cheese",
//         type: "milk",
//         price: 25999
//     },
//     {
//         name: "tvorog",
//         type: "milk",
//         price: 12000
//     },
//     {
//         name: "govyadina",
//         type: "meat",
//         price: 90000
//     },
//     {
//         name: "baranina",
//         type: "meat",
//         price: 94000
//     },
//     {
//         name: "kuryatina",
//         type: "meat",
//         price: 45000
//     },
//     {
//         name: "vodka",
//         type: "alcohol",
//         price: 20000
//     },
//     {
//         name: "tekila",
//         type: "alcohol",
//         price: 50000
//     },
//     {
//         name: "pivo",
//         type: "alcohol",
//         price: 17000
//     },
//     {
//         name: "champain",
//         type: "alcohol",
//         price: 100000
//     },
// ]



// let categories = [
//     {
//         type: "milk",
//         count: 0,
//         total: 0
//     },
//     {
//         type: "meat",
//         count: 0,
//         total: 0
//     },
//     {
//         type: "alcohol",
//         count: 0,
//         total: 0
//     }
// ]


// for (let product of products) {
//     for (let item of categories) {
//         if (product.type === item.type) {
//             item.count++
//             item.total += product.price
//         }
//     }
// }

// console.table(categories);





// Нужно знать

// console.log("%c GeeksforGeeks", "color:green;"); // покрасить указаяйщий код // дает color

// console.log('%cThis text has a yellow background!', 'background-color: yellow'); // дает background-color

// var css = "text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue; font-size: 40px;" 
// console.log("%cHello world", css); // сделано с помощью css покажет в console что мы сделали на css




// Дз

// let arr = [
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },

//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
// ]



// let categories = [
//     {
//         course: ' SMM',
//         count: 0
//     },
//     {
//         course: 'PROGRAMMING',
//         count: 0
//     },
//     {
//         course: '     3DSMAX',
//         count: 0
//     },
//     {
//         course: ' DIZAYN',
//         count: 0
//     },
//     {
//         course: '   BACKEND',
//         count: 0
//     },
// ]

// Описание задачи Найти количество людей одного типа из массива и сохранить их в массив категории В массиве категорий специально допущены ошибки (исходный массив менять нельзя)


// let updatedCategories = [];

// for (let category of categories) {
//     let count = 0;
//     for (let item of arr) {
//         if (item.info.faculity.toUpperCase().trim() === category.course.trim()) {
//             count++;
//         }
//     }
//     updatedCategories.push({ course: category.course.trim(), count: count });
// }

// console.table(updatedCategories);



// 14.10.2023
// lesson 24
// for (let item of categories) {
//     item.std = []
// }

// for (let item of arr) {
//     let faculity = item.info.faculity.trim().toLowerCase()

//     for (let categ of categories) {
//         let categF = categ.course.trim().toLowerCase()

//         if (faculity === categF) {
//             categ.count++
//             categ.std.push(item.name)
//         }
//     }
// }

// console.table(categories)



// let user = {
//     name: "alex",
//     surname: "adams",
//     age: 29
// }

// console.log(user, 'do');

// user.isMarried = false

// console.log(user, 'posle');



// document.write(`2 * ${i} = ${2 * i} <br/>`)
// i , j ,k

// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 3; k++) {
//         document.write(`${i}]. ${k} <br/>`)
//     }
//     document.write(`<hr/>`)
// }


// for (let i = 1; i <= 10; i++) {

//     for (let k = 1; k <= 3; k++) {
//         document.write(i)
//     }
// }



// for (let i = 1; i <= 10; i++) {
//     for (let k = 1; k <= 10; k++) {
//         document.write(`${i} * ${k} = ${i * k} <br/>`)
//     }
//     document.write(`<hr/>`)
// }

// переменный i отвечает за столбике
// переменный k отвечает за количество



// *
// * *
// * * *
// * * * *
// * * * * *

// for (let i = 0; i <= 5; i++) {
//     for (let k = 0; k < i; k++) {
//         document.write(' *')
//     }
//     document.write('<br/>')
// }

// document.write('<br/>')

// for (let i = 5; i > 0; i--) {
//     for (let k = 0; k < i; k++) {
//         document.write(' *')
//     }
//     document.write('<br/>')
// }

// * * * * *
// * * * *
// * * *
// * *
// *



// Дз

let companies = [
    {
        id: 1,
        name: 'baxtMen',
        budget: 200000,
        tax: 19,
        expenses: [10000, 2000, 60000]
    },
    {
        id: 2,
        name: 'nosfrush',
        budget: 1000,
        tax: 0,
        expenses: [50, 100, 10]
    },
    {
        id: 3,
        name: 'artyomida',
        budget: 400000,
        tax: 23,
        expenses: [5000, 14000, 3000]
    },
    {
        id: 4,
        name: 'azizas',
        budget: 150000,
        tax: 0,
        expenses: [5000, 6000, 4000]
    },
    {
        id: 5,
        name: 'openBobur',
        budget: 500,
        tax: 12,
        expenses: [10, 30, 5]
    },
    {
        id: 6,
        name: 'IS_buildings',
        budget: 1000000,
        tax: 21,
        expenses: [500000, 25000, 10000]
    },
    {
        id: 7,
        name: 'XOJIK_RADAR',
        budget: 40000,
        tax: 12,
        expenses: [500, 2500, 1000]
    },
]


// arr[i] достает из массива


// 1. Посчитать общие расходы каждой компании
for (let i = 0; i < companies.length; i++) {
    let totalExpenses = 0;
    for (let k = 0; k < companies[i].expenses.length; k++) {
        totalExpenses += companies[i].expenses[k];
    }
    console.log(`Total expenses of ${companies[i].name}: ${totalExpenses}`);
}



// 2. Показать чистую прибыль каждой компании вычитав расходы и налоги
let netProfits = [];
for (let i = 0; i < companies.length; i++) {
    let expensesSum = companies[i].expenses.reduce((acc, cur) => acc + cur, 0);
    let taxAmount = companies[i].budget * (companies[i].tax / 100);
    let netProfit = companies[i].budget - expensesSum - taxAmount;
    netProfits.push(netProfit);
}

console.table(netProfits)