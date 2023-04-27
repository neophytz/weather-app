/**
 * ES-
 * Ecma script
 * 
 * ES-5
 * ES-6
 * ES-7
 */


// array - java, c++, c : collection of elemenet with similar datatype.
const arr = [1,3,4,5,6];

// since variables in js do not have a type.
// array is just a collection of elements, with same or different DTs.
// console.log(arr)
// console.log(arr[1])

// time complexity -> O(1)

function square(number) {
    // return number ** 2
    return number * number
}

// ! ARROW FUNCTION : 2015.
// modern way of writing function as per ES-6
// arrow functions.
const _sqaure = (number) => {
    return number * number
}

// advantage or cool stuff 1:
// if you want to accept only 1 argument, no need of ()
let cube = number => {
    return number ** 3
}
// study the different between normal and arrow function.

// console.log(_sqaure(3))
// console.log(square(2))

// ! important methods on javascript.
// .map()
// one of the most important method that you will in react.
// it's like foreach, but it is used to create a new modified array.

// time - O(N) -> it iterates on each element.
const square_array = arr.map(square)

const _cube = (number) => {
    return number ** 3
}

// we defined a _cube function and given passed function as an argument to a method, 
// thus making it a callback function.
// ? we are defining a variable, _cube.
const cube_array_1 = arr.map(_cube)


// in method 2: we used the function directly instead of function name.
const cube_array_2 = arr.map(
    (number) => {
        return number ** 3
    }
)

// since number is the only argument, we can remove '()'
const cube_array_3 = arr.map(
    number => {
        return number ** 3
    }
)

// since function body contain only 1 statement, we can remove '{ }'
const cube_array_modern = arr.map(number => number ** 3)

// if we want to do this with standard for loop?
const final_cube = [];
for (let i = 0; i < arr.length; i++) {
    const __cube = arr[i] ** 3;
    final_cube.push(__cube)
}

// what about forEach?
// forEach is not used for modification, it's used for iteration!!
// forEach does not return anything!!
const result = [];
const res = arr.forEach(number => result.push(number ** 3))
// console.log(res)

// // if you are writing only one state inside function body, no need of {}
// console.log(arr)
// console.log(square_array)


const numbers = [1,2,3,4]
/**
 * {
 *    1: 1,
 *    2: 4,
 *    3: 9,
 *    4: 16
 * }
*/

const numbers_obj = {}
// mixed two topics?
numbers.forEach(
    number => {
        numbers_obj[number] = number ** 2
    }
)

// console.log(numbers_obj)



const clg_students = [
    {
        email: 'sapna@gmail.com',
        name: 'sapna',
        age: 8
    },
    {
        email: 'sachin@gmail.com',
        name: 'sachin',
        age: 10,
    },
    {
        email: 'anji@gmail.com',
        name: 'anji',
        age: 13
    },
    {
        email: 'sharma@gmail.com',
        name: 'sharma',
        age: 9
    },
]

const send_email = (emails) => {
    console.log('emails send');
}

// const email_list = [];
// for (let i = 0; i < clg_students.length; i++) {
//     const student = clg_students[i]
//     email_list.push(student.email)
// }

// better way is 
const email_list = clg_students.map(student => student.age)
// console.log(email_list)

// We recieve data from api and want to send email to all students?
// 


// pythonish way of doing things.
let total_age = 0
for (let i = 0; i < clg_students.length; i++) {
    const student = clg_students[i];
    total_age += student.age
}
// console.log(total_age/clg_students.length)


// console.log(clg_students)

let marks = new Array(4)
// const marks2 = new Array([1,2,3,4])
// const standard = [1,2,3,4];
marks.fill(2)
marks = marks.concat([1,2])


// readability.
const filtered_students = clg_students.filter(student => {
    if (student.name == 'sapna') {
        return true
    }
    return student.age >= 10
})

// time complexity -> O(N)
// filtered_students = clg_students.filter(student => student.name === 'sapna' || student.age >= 10)
// console.log(filtered_students)


// very useful array method used for conditions.
// ? check if everyone in the class is adult?
let isClassAdult = true;
for (let i = 0; i < clg_students.length; i++) {
    const student = clg_students[i];
    if (student.age < 18){
        isClassAdult = false;
        break;
    }
}

// console.log(isClassAdult)
// shorter way please...
const isClassAdult2 = clg_students.every(student => student.age >= 18)
// console.log(isClassAdult2)

// every check for all elements?
const doesMinorExist = clg_students.some(student => student.age < 18)

// console.log(doesMinorExist)



// find -> if no element found, it returns undefined else element.
const minorStudent = clg_students.find(student => student.age === 18)
// console.log(minorStudent)

// findIndex.
const minorStudentIdx = clg_students.findIndex(student => student.age === 18)
// console.log(minorStudentIdx)


// 
console.log(
    clg_students.at(-clg_students.length-1)
)


