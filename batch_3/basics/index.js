/*
    ? INETERVIEW: WHAT IS RESERVED KEYWORD. Ex! let, const, var.
    Reserved keywords.
    -> let, const, var
    ! NEVER USE 'var'.
*/

{
    var amazing = 23;
    let variable_1 = 'duhan';
    // console.log(variable_1)
    const jaadu = '23';
}

// console.log(variable_1)

// mutable? - value can be changed.
let variable_4 = 'sachin';

// immutable - value cannot be changed (constant)
const variable_2 = 'duhan';



// -----------

// there isn't any concept of pointers.
// default value of uninitialized variables is undefined.
let var_1;
// console.log(var_1)

let var_2 = null;


// == === 
/**
 * =    : assignement operator
 * ==   : comparision operator (value is being compared)
 * ===  : comparision operator (value & data type is being compared.)
 */

// == : both value and data type.

// console.log(2 === '2')

// how do we get datatype of a variable in javascript?
// keyword -> typeof
// console.log(typeof 'sachin')
// console.log(typeof(3))


// console.log(typeof undefined)
// console.log(typeof null)


// struct : User defined datatype.

// map | hashmap | dictionary in python.
// red-black tree -> self-balancing binary search tree.

// if you want to access any value, you can do that using the key.
const name_age = {
    'sachin': 25,
    'yartharth': 20,
    'sapna': 16,
    'anji': 24,
    'satya': 0.1,
}

// allowed values of key -> string | number 
// object -> key: value.
const scores = {
    '121780': [1,2,3],
    '12121': 'sachin',
    '3278e2': 34,
    '237023': false,
    '347890': undefined,
    12: [12,23,232,233],
    "sac": 3232,
}

// does char exist in js? - NO




// ! OBJECTS -> DICTIONARY
// key : value (anything!) : 
// key is either number os string.
/**
 * primitive -> string, number, boolean, double, char
 * non-primitive -> array, stack etc?
 * 
 * access value -> O(1)
 * 
 */
const _obj = {
    'five_star' : ['taj', 'crown plaza', 'mariate'],
    'four_star': ['sadesh'],
    'key_1': false,
    'key_2': 2,
    'key_3': "sachin"    
}

// accessing properties of object.
// console.log(_obj.five_star)
// console.log(_obj['five_star'])

// const some_key = 'four_star'
// console.log(_obj[some_key])

const marks = [1,2,3,4];
// const marks_2 = new Array(3)


// real-world use case of objects.
const student = {
    name: 'sachin',
    rollNo: 23,
    phone: 237892732,
    email: 'sachin@gmail.com'
}

// storing information is way more intuitive and easy.
// console.log(student.name)


// but how assign new keys after initialization.
student.course = 'B.tech';
student['program'] = 'Mathematics and computer science.'
student.name = 'anjii'
// console.log(student.name)


// using new operator.
const student_2 = new Object();


// print all the keys of an object?

// ! this is a very important hack that will be used a lot.
// Object.keys() // return the array of keys.
const keys = Object.keys(student)
// console.log(keys)

// for(const key in student){
//     console.log(key)
// }

// console.log('----- for in with array ---- ')

// const arr = [1,2,4,5,5]

// for(const key in arr){
//     console.log(key)
// }

// for(const value of arr){
//     console.log(value)
// }


// how to delete a key from object?
delete student.name
// student.name = undefined;


/**
 * <return_type> function_name(args){
 *      
 *      
 * }
 * 
 * def name(args):
 *    pass
 * 
 */

// what is function?
// function is reserved keword.
// function is_male(){
//     return false;
// }


// // append all values of array to object.
// const names = ['sachin', 'sandesh', 'imam', 'sid', 'sapna']

// const name_obj = new Object();
// // when you pass a function as a argument to a function or method, 
// // it's called callback.

// function append_to_dict(name){
//     console.log(name)
//     name_obj[name] = 0
// }

// // names.forEach(append_to_dict)

// names.forEach(
//     function(name, index){
//         name_obj[name] = index
//     }
// )

// console.log(name_obj)




// trick -> 21221cfa12 
const trick = {
    key: 'duhan'
}

trick.key2 = 23;
// trick = 23;
console.log(trick)



const class_marks = [1,2,4];
class_marks[2] = 5;
// if you want to remove all element from an array.
class_marks.length = 0;

class_marks = []; // this will throw error.
console.log(class_marks)


