// 1. Ознакомиться с методом Math.random.
// 2. Заполнить массив из 10 элементов случайными целыми числами от 100 до 200.
// 3. Создать функцию, которая принимает amout - количество создаваемых объектов,
// создает указанное кол-во объектов пользователей с полями email, age, isMale.
// Поле email заполняется последовательно в формате user${i}@gmail.com. i - счетчик цикла.
// Поле age заполняется рандомно от 12 до 50 лет. (Только целые числа).
// Поле isMale заполняется рандомно значениями true или false.


function generateUsers(number) {
    const users = [];
    for (let i = 0; i < number; i++){
        users.push({
            email: `user${i}@gmail.com`,
            age: Math.floor(Math.random() * 38 + 12),
            isMale: Math.floor(Math.random() * 2) === 0,
        })
    }
    return users; 
}

function randomNumber(){
    const Randomaizer = [];
    for(let i = 0; i < 10; i++ ){
        Randomaizer.push(Math.floor(Math.random() * 100 + 100));
    }
    return Randomaizer;
}

const users = generateUsers(6);
console.log(users);

const randomNumbers = randomNumber();
console.log(randomNumbers);

