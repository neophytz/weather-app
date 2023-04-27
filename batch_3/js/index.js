// accessing dom elements.
const elements = document.getElementsByTagName('h2') // getElements
const method2 = document.getElementById('my_heading') // used  a lot.
const method3 = document.getElementsByClassName('container') // used a lot.
const method4 = document.getElementsByName('duhan')

// we can specify CSS type of queries. // used a lot.
const method5 = document.querySelector("#my_heading")
const method6 = document.querySelectorAll("#my_heading") 

// acesssing values inside the element.
const result = document.querySelector('#my_heading')

// result.innerHTML -> returns the html inside the element.
// result.innerText -> return the text inside the element without HTML tags.

result.innerText = 'Sachin duhan'
// console.log(result.innerText)


// method 1: using eventlisters.
// this method is expensive.

// show modal code.

const toggle_modal = () => {
    const modal = document.querySelector('#modal')
    // if present, remove it else add it.
    modal.classList.toggle('d-none')
}

const toggle_button = document.querySelector('#modal_toggle')
toggle_button.addEventListener('click', toggle_modal)



// in some website, we get a pop in 5-10 seconds.

// Abi nai thodi der k baad.
// setTimeout(toggle_modal, 5000);

// run a function at a fixed interval of time.
// setInterval(toggle_modal, 10000);


const onMouseEnter = () => {
    const move_btn = document.querySelector("#move_me_btn")
    move_btn.style.color = 'white'
    move_btn.style.transform = 'translateX(50px)'
    move_btn.style.background = 'red'
}

const onMouseLeave = () => {
    const move_btn = document.querySelector("#move_me_btn")
    move_btn.style.color = 'black'
    move_btn.style.transform = 'translateX(0px)'
    move_btn.style.background = 'transparent'
}