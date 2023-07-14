class Person
{
    constructor(name)
    {
        this.name = name;
    }


printArrow()
{
    setTimeout(() => {
        console.log(this.name)
    }, 1000)
}

 printNameFunction()
{
    setTimeout(function() {
        console.log(this.name)
    }, 1000)
}
}

const person = new Person('Bob');

person.printArrow();
person.printNameFunction();