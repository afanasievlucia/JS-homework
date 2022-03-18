// example 1
const array = ['unul', 'doi', 'trei'];

array.sort(( item1, item2 ) => {
    if( item1 < item2 ) {
        return -1;
    }
    if( item1 > item2 ) {
        return 1;
    }
    return 0;
})
// .filter( item => item.charAt(0) === 'u' || item.charAt(0) === 'b').forEach( item => console.log(item))
console.log(array.sort());
console.log(array.filter( item => item.charAt(0) === 'u' || item.charAt(0) === 't')); 


const arrayObj = [{value:'mare'}, {value: 'colort'}, {value: 'alb'}];

arrayObj.sort(( item1, item2 ) => {
    if( item1.value < item2.value ) {
        return -1;
    }
    if( item1.value > item2.value ) {
        return 1;
    }
    return 0;
})
// .filter( ({value}) => value.charAt(0) === 'a' || value.charAt(0) === 'b').forEach( ({value}) => console.log((value)))

console.log(arrayObj.sort()); 
console.log(arrayObj.filter( ({value}) => value.charAt(0) === 'a' || value.charAt(0) === 'b')); 

// example 2 
class Button {
    constructor(color, text) {
        this.color = color
        this.text = text
    }
    setColor(newColor) {
        this.color = newColor
    }
    render() {
        return `<button style="color: ${this.color}">${this.text}</button>`
    }
}
// const button = new Button("blue", "Button");
//     document.body.innerHTML = button.render()

// HW 1: cu ajutorul forEach() sa se afiseze toate butoanele
let buttons = [new Button("blue", "Blue"), new Button("purple", "Purple"), new Button("red", "Red"), new Button("blue", "Another Blue")]

buttons.forEach(element => {
    document.getElementById('allButtons').innerHTML += element.render()
});


// *  sa se afiseze doar butoanele care au o anumita culoare
buttons.filter( item => item.color === "blue").forEach(element => {document.getElementById('filterButton').innerHTML += element.render()})


// example 3
const executor = (cb) => {
    cb(5)
    let r = cb(2)
    console.log(`${executor.name} is running...`, r);
}
executor((value) => {
    console.log(value, 'callback is executing');
    return value *10

})



//example 4
const callbacks = [];

// HW3 gasiti o solutie in JS sa blocheze modificarea array
Object.freeze(callbacks) // this method help to make the array immutable


callbacks.push(()=>{console.log('first function');})

callbacks.push(()=>{console.log('second function');})

//callbacks[0]()
callbacks.forEach((item)=> item())