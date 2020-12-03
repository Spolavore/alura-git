var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //----------> retorna uma rede desse classe//

for (var i = 0 ; i < pacientes.length ; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura")
	var altura = tdAltura.textContent;

	var tdImc= paciente.querySelector(".info-imc");


	var pesoEhValido = validaPeso(peso); //true ou false
	var alturaEhValida = validaAltura(altura);



	if(!pesoEhValido) { //---> inverte os sinais no js, o codigo sera executado se pesoEhValido for uma variavel false, devido a !
		console.log("Peso Inválido")
		pesoEhValido = false;
		tdImc.textContent = "Peso Inválido!"
		paciente.classList.add("paciente-invalido")    // em aspecto visual da pagina DEVEMOS utilizar o css, assim , a classe .classeList.add("nome da classe css") nos permite adicionar classes css no js
		//style.backgroundColor = "lightcoral";  ----- em backgroundColor , temos que utilizar o Camel case nao podemos escrever background-color (isso vale para todas as palavras compostas)
	} 

	if(!alturaEhValida) {
		console.log("altura Inválida")
		alturaEhValida = false; 
		tdImc.textContent = "Altura Inválida!";
		paciente.classList.add("paciente-invalido");
		//paciente.style.backgroundColor = "orange";

	} 



		if(alturaEhValida && pesoEhValido){
			var imc = calculaImc(peso,altura);
			tdImc.textContent = imc;   //----> nos permite escolher quantas casas decimais queremos//
			
	}

}

function calculaImc(peso,altura) {      //----> eh uma boa pratica trazer para funcoes externas quando o codigo sera reutilizado
	var imc = 0;
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaAltura(altura) {
	if(altura >=0 && altura <= 3.0) {
		return true;
	}else{
		return false;
	}
}

function validaPeso(peso) {
	if(peso >= 0 && peso < 1000) {
		return true;
	} else{
		return false;
	}
}