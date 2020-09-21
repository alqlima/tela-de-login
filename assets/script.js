
console.log('Olá Mundo!')

document.getElementById('btn-submit').addEventListener('click', e => {
	console.log('O botão foi clicado')
});
document.getElementById('form-login').addEventListener('mouseenter', e => {
	console.log('O mouse está sobre o formuário')
});
document.querySelector('#form-login').addEventListener('mouseleave', e => {
	console.log('O mouse está fora do formulário')
});
document.querySelector('#form-login').addEventListener('submit', e => {
	
	e.preventDefault();
	
	let email = document.querySelector('#email').value;
	
	let password = document.querySelector('#password').value;
	
	//console.log(email, password);
	
	let json = {
		email,
		password
	}
	
	//console.log(json);
	
	//let stringJSON = JSON.stringify(json);
	
	//console.log(stringJSON);
	
	//let jsonParse = JSON.parse(stringJSON);
	
	//console.log(jsonParse);
	
	if(!json.email) {
		console.error('O campo de email precisa ser preenchido');
	}else if (!json.password){
		console.error('O campo de password precisa ser preenchido');
	}else {
		console.info('Dados validados com sucesso!');
	}
	
	
});