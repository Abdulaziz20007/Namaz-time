const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b4f378a932msh39e3a3465e0289ap166efejsn9d26a0dbfbed',
		'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
	}
};

fetch('https://muslimsalat.p.rapidapi.com/kokand.json', options)
	.then(response => response.json())
	.then(response =>
        
        console.log(response))