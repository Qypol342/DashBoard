
const ctx = document.getElementById('myChart');

console.log(ctx);
console.log(document.querySelectorAll('*[id]'));
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
/*

console.log('booted');
console.error('1');
console.warn('2')

let age2=24;
let age;
age = 50;
console.log(age, age2);

const naissance = 2021;
console.log(naissance);


const name = 'Jean';
const old = true;
const note = 4.5;
const x = null;
const y = undefined;


console.log(name,old,note, x,y);
console.log(typeof name,typeof old,typeof note,typeof x, typeof y);

console.log('here is the variable '+name);

console.log(`new version ${name} damn work well ${old}`);

console.log(`len,gnht of ${name} is ${name.length}`);

console.log(`name  ${name} en majuscule ${name.toUpperCase()}`);

console.log(`name  ${name} en minucule ${name.toLowerCase()}`);

console.log(`name  ${name} premeir lettre ${name.substring(0,1)}`);


// array
const ar = ['text1', 'text2','text3'];

// commentaire



console.log(ar, typeof ar);
ar[1] = 1;
ar.push('text2');
console.log(ar[0], ar.length);


console.log(ar, typeof ar, ar.indexOf(1), Array.isArray(ar));

// object/ dicnoaire

const person = {
	age_: 30,
	name: 'Jean'

};
const groupofperson = {
	1:person,
	2:person,
	3:person
}
console.log(person, person.age);

person.email ='email@gmail.com'

const {age_} = person;

console.log(age_,person);


const personJSON =JSON.stringify(person);

console.log(personJSON);


// for loop
for (let i =0; i<10; i++){
	console.log(i);
}

// while loop

let i = 0;
while(i<10){
	console.log(i);
	i++
}

// for in array
for (let i =0; i< ar.length; i++){
	console.log(ar[i]);
}

for (let i in groupofperson){
	console.log(i);
}


let nb = 8;
let nb2 = 20;
if (nb != 100 ){
	console.log("dfoferent");
}
if (nb > 9){
	console.log('true')
}
else if (nb === 8 && nb2 === 20){
	console.log('true, rteu');
}
else{
	print("none")
}
if (nb === 8 || nb2 == 21){
	console.log("or true");
}


console.log(nb)
const color = nb < 3 ?'red': 'blue';

console.log(color)


switch(color){
	case 'red':
		console.log('red');
		break;
	case 'blue':
		console.log('blue');
		break;
	default:
		console.log('default');
		break;

} 

//////////// fonction


function addNums(num1, num2){
	console.log(num1, num2);

	return num2+num1;

}

const res = addNums(4,9);

console.log(res)

const add = (num1 =0 , num2 = 0) => num1+num2

console.log(add(5,564))

////////////////class
class Person{
	constructor (fname, lname, dob){
		this.fname = fname;
		this.lname =lname;
		this.dob = new Date(dob);


	}
	getBirthYear(){
		return this.dob.getFullYear();
	}
	getFullName(){
		return `${this.fname} ${this.lname}`
	}
}


person1 = new Person('Jean', 'Marie', '4-3-1950');
person2 = new Person('Jean', 'Bob', '14-1-1940');
console.log(person1.getBirthYear());
console.log(person1.getFullName());


console.log(document.getElementById('name'));

console.log(document.querySelector('.navbarclass'));

// multiple element

const items = document.querySelectorAll('a');

items.forEach((item) => console.log(item));


items[0].remove();

items[items.length -1].textContent = 'Hello';
//items[4].innerHTML = '<p>HELLO</p>'
const it = document.querySelector('.navbarclass');

it.style.background = 'orange';

const is = document.querySelector('#navbar');

is.style.background = 'orange';

const Hello = function(){
	console.log('Hello');
	const readedclass = document.querySelector('.box-1');
	console.log(readedclass);
	console.log(readedclass.style);
	console.log(readedclass.style.background);
	readedclass.style.background = 'pink';
	console.log(readedclass.style);
}




let iss = document.querySelectorAll('.item');
iss = iss[iss.length -1];
iss = iss.children[0];

iss.addEventListener('mouseover',Hello ); //mouseout     

/*
let btn = document.querySelector('#btn');
btn.addEventListener('click',(e) => {
	e.preventDefault();
	console.log(e);
	console.log('By');
});



const nameInput = document.querySelector('#name');
let btn = document.querySelector('#btn');
btn.addEventListener('click',onSubmit);
const msg = document.querySelector('#errorfrom')
function onSubmit(e){
	e.preventDefault();
	if(nameInput.value == ''){
		msg.classList.add('error'); // nameInput.value='';
		msg.innerHTML='Veuillez remplir le champs';

		setTimeout(() => msg.remove(), 3000);


	}else{
	console.log(nameInput.value);
	const ll = document.createElement('li');
	//ll.classList.add('box-1')
	ll.appendChild(document.createTextNode(`${nameInput.value} is the name` ));

	let search = document.querySelectorAll('.box-1');
	search = search[2];
	search.appendChild(ll);

}
}


*/








