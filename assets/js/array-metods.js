// Метод pop() удаляет последний элемент из массива и возвращает его знач.

const MyArray = [1, 2, 3, 4, 5];
const MyArray2 = [2, 3, 4, 5, 7, 8, 6, 1, 15, 10, 20];

console.log(MyArray);

// Array.prototype.push() добавляет один или более элементов в конец массива и возвращает новую длину массива.

function push(arr) {
    const array = [...arr];
    array.push(1, 3);
    console.log(`push = ${array}`)
}

// pop() удаляет последний елемент массива

function pop(arr) {
    const array = [...arr];
    array.pop();
    console.log(`pop = ${array}`)
}

// Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.

function shift(arr) {
    const array = [...arr];
    array.shift();
    console.log(`shift = ${array}`)
}

// Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.

function unshift(arr) {
    const array = [...arr];
    array.unshift('elemUnshift');
    console.log(`unshift = ${array}`)
}

// reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.

function reverse(arr) {
    const array = [...arr];
    array.reverse();
    console.log(`reverse = ${array}`)
}

// Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.

function splice(arr) {
    const array = [...arr];
    array.splice(6, 1, 'numb is delete');
    console.log(`splice = ${array}`)
}

 // Метод slice() возвращает новый массив, содержащий копию части исходного массива.

function slice(arr) {
    const array = [...arr];
    array.slice(1, 3);
    console.log(`slice = ${array}`)
}

// Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. 

function sort(arr) {
    const array = [...arr];
    array.sort();
    console.log(`sort = ${array}`)
}

// ----------------------------------------------------------------------------------------------------------------------------------------

//Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.

function filterFunc(value) {
    return value >= 10;
  }

function filter(arr) {
    const array = [...arr];
    const res = array.filter(filterFunc);
    console.log(`filter = ${res}`)
}


// Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

function maxElement6(element, index, arr){
    return element > 6;
}

    function some(arr) {
        const array = [...arr];
        const res2 = array.some(maxElement6);
        console.log(`some = ${res2}`);
    }

// Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

function mapFunc(arr){
    return arr * 2;
}

    function map(arr) {
        const array = [...arr];
        const res3 = array.map(mapFunc);
        console.log(`map = ${res3}`);
    }

// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

function reduceFunc(firstValue, secondValue, index, array) {
    return firstValue + secondValue;
  }
  function reduce(arr) {
    const array = [...arr];
    const res4 = array.reduce(reduceFunc);
    console.log(`reduce = ${res4}`);
}

// Array.prototype.forEach() Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.

// for (let i = 0; i < MyArray.length; i++) {
//     copy.push(MyArray[i])
//   }

MyArray2.forEach(function(elem){
    const copy = MyArray2.push(elem);
    console.log(copy);
});


// ---------------------------------------------------------------------------------------------------------------------------------------------
pop(MyArray);
shift(MyArray);
unshift(MyArray);
reverse(MyArray);
slice(MyArray);
splice(MyArray);
sort(MyArray2);
filter(MyArray2);
some(MyArray);
map(MyArray2);
reduce(MyArray2);


