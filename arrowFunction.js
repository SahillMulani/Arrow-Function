function sum(a,b)
{
    return a+b
}

// Arrow Function

let sum2 = (a,b) =>  a + b;

function isPositive(number)
{
    return number >= 0 ;
}

// Arrow Function

let isPositivee = (number) => number >=0 ;

var a = isPositivee(-1);

console.log(a);


function randomNumber()
{
    return Math.random();
}

// Arrow Functions

let randomNumberr = () => Math.random();

console.log(randomNumberr());

document.addEventListener('click', function() {
    console.log('click');
})

// Arrow Function

document.addEventListener('click', () => console.log('click'));