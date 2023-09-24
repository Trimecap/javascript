
console.log("%cWelcome to the application!",
"color: blue; font-size: 18px")

console.log("%cThis is an informational message",
"color: green; font-size: 16px")

console.warn("%cThis is a warning. Be cautious",
"font-size: 16px")

console.error("%cError! something went wrong",
"font-size: 16px")

let datos = [
    {name: 'John', age: 30, city: 'New York'},
    {name: 'Jane', age: 25, city: 'San francisco'},
    {name: 'Bob', age: 40, city: 'Chicago'},
]

console.table(datos)