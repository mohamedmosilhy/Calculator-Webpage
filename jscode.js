
let plus = document.querySelector('.plus');
let mult = document.querySelector('.multiplication');
let div = document.querySelector('.division');
let percent = document.querySelector('.percent');
let dot = document.querySelector('.dot');
let minus = document.querySelector('.minus');

let equal = document.querySelector('.equal');
let del = document.querySelector('.DEL');
let ac = document.querySelector('.AC');

let open_bracket = document.querySelector('.open-square-brackets');
let closed_bracket = document.querySelector('.closed-square-brackets');
let power = document.querySelector('.power');
let root = document.querySelector('.root');


let input = document.querySelector('input');
let grid_element = document.querySelectorAll('.input')

grid_element.forEach(element => {
    if(element === power){
        element.addEventListener('click',function(){
            input.value += element.textContent.slice(1) ;
        });
        return;  
    }
    element.addEventListener('click',function(){
        input.value += element.textContent;
    });
});

ac.addEventListener('click',()=>{
    input.value = '';
});

del.addEventListener('click',()=>{
    input.value = input.value.slice(0,input.value.length - 1);
});


equal.addEventListener('click',()=>{
    input.value = eval(input.value);
});


