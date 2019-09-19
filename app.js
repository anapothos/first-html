const dog = {
    name: 'fido',
    color: 'brown',
    weight: 3,
}
console.log(dog.name);

dog.name = 'rover'

console.log(dog.name);


if (dog.name === 'rover') {
    console.log('red rover, come over');
} else if (dog,name === 'timothy') {
    console.log(dog.name === 'timothy');

}


// count up to ten 

for (let i = 0; i<= 10; i++) {
    console.log(i);
}

function showAlert() {
    alert('you clicked the button');
}

function logHello() {
    console.log("Hello");
}