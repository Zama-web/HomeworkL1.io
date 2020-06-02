
// JavaScript - HomeWork - lesson_1

let rootElem = document.getElementById('root');

// Создаем все ноебходимые теги.
let container = document.createElement('div');
let labelElem = document.createElement('label');
let inputElem = document.createElement('input');
let btnElem = document.createElement('button');

labelElem.innerText = `Распорядок дня в армии: - Дальнейший распорядок дня, зависит от Вас  ${'\u{1F466}'}`;
btnElem.innerText = 'Добавить';

container.appendChild(labelElem);
container.appendChild(inputElem);
container.appendChild(btnElem);

let ulElem = document.createElement('ul'); 
ulElem.classList.add('points'); // задаем класс.

container.appendChild(ulElem);
container.classList.add('container'); // задаем класс.

rootElem.appendChild(container);


// '►'.charCodeAt() - таким образом узнали код данного символа;
// String.fromCharCode(9658) - после получения кода, вставили перед - title;


function addForm(title) {
	let liElem = document.createElement('li');
	let pElem = document.createElement('p');
	
	pElem.innerText = `${String.fromCharCode(9658)} ${title}`;
	liElem.appendChild(pElem);
	ulElem.appendChild(liElem);
	
}

for (let i = 0; i < data.length; i++) {
	let element = data[i].title;
	console.log(element); // проверка связи в консоле.
	addForm(element);
}

// событие клик на кнопку и добавляем новый пункт.
btnElem.addEventListener('click', function(){
	let curText = inputElem.value; // считываем текст с поле.
	console.log(curText); // проверка связи в консоле.
	addForm(curText);
	inputElem.value = '';
})
