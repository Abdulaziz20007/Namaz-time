const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4f378a932msh39e3a3465e0289ap166efejsn9d26a0dbfbed',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};
let city = 'tashkent'
if(localStorage.getItem('city') == null) {
	localStorage.setItem('city', city);
}
else {
	city = localStorage.getItem('city');
}
function tas() {
	city = 'tashkent'
	open()
}
function and() {
	city = 'andijan'
	open()
}
function nam() {
	city = 'namangan'
	open()
}
function far() {
	city = 'fergana'
	open()
}
function kok() {
	city = 'kokand'
	open()
}
function bux() {
	city = 'bukhara'
	open()
}
function nav() {
	city = 'navoiy'
	open()
}
function sam() {
	city = 'samarkand'
	open()
}
function sir() {
	city = 'sirdaryo'
	open()
}
function qas() {
	city = 'qarshi'
	open()
}
function xor() {
	city = 'urgench'
	open()
}
function open() {
	fetch('https://muslimsalat.p.rapidapi.com/'+city+'.json', options)
	.then(response => response.json())
	.then(response => {console.log(response),
		document.getElementById('b-time').innerHTML = response.items[0].fajr
		document.getElementById('p-time').innerHTML = response.items[0].dhuhr
		document.getElementById('a-time').innerHTML = response.items[0].asr
		document.getElementById('s-time').innerHTML = response.items[0].maghrib
		document.getElementById('x-time').innerHTML = response.items[0].isha
		document.getElementById('q-time').innerHTML = response.items[0].shurooq
	})
	document.getElementById('current-city').innerHTML = city;
	localStorage.setItem('city', city)
}
function openloader() {
	setTimeout(() => {
		document.querySelector('.loader').style.opacity = '0';
		document.querySelector('#div').style.display = 'block';
		setTimeout(() => {
		document.querySelector('#div').style.opacity = 1;
		}, 15);
		setTimeout(() => {
		document.querySelector('.loader').style.display = 'none';
		}, 500);
	}, 2000);
}
open()
