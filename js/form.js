var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){    //--> passamos event como parâmetro da função. Com isso, incluímos um parâmetro que está sempre presente nas funções executadas quando ocorre um evento.
	event.preventDefault();                       //--> desativa o comportamento de recarregar a pagina para um de escrever no cosole log
	
	var form = document.querySelector("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	
	
	var erros = validaPaciente(paciente);

	console.log(erros);
	if(erros.length > 0) {
		exibeMensagensDeErro(erros);
		return;
	}

	// adicionando o paciente na tabela
	adicionaPacienteNaTabela(paciente);

	form.reset(); //---> limpa os campos do form após adicionar um paciente
	var mensagensErro = document.querySelector("#mensagens-erro");
	mensagensErro.innerHTML = "";
});


function adicionaPacienteNaTabela(paciente) {
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = ""; //---> permite controlar o html interno de um elemento

	erros.forEach(function(erro) { /// ------> "para cada item do meu array , faca alguma coisa"
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})

}

function obtemPacienteDoFormulario(form){

	var paciente = {                        //--> cria um objeto dentro do js , onde nome : (":" significa vale dentro do mundo dos objetos) form.nome.value
		nome: form.nome.value,                                                          //semelhante a var nome = form.nome.value               
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;


}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr"); //--> creatElement cria um elemento deseja passado pelos ()
	pacienteTr.classList.add("paciente");

	var nomeTd = montaTd(paciente.nome, "info-nome");
	var pesoTd = montaTd(paciente.peso,"info-peso");
	var alturaTd = montaTd(paciente.altura,"info-altura");
	var gorduraTd = montaTd(paciente.gordura,"info-gordura");
	var imcTd = montaTd(paciente.imc,"info-imc");

	pacienteTr.appendChild(nomeTd);         //---> utilizada para colocar um td dentro de um tr no js
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;


}

function montaTd(dado,classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente) {

	var erros = [];

	if( paciente.nome.length == 0) {
		erros.push("O nome não pode ser em branco");
	}


	if( paciente.gordura.length == 0) {
		erros.push("A gordura não pode ser em branco");
	}
	if( paciente.altura.length == 0) {
		erros.push("A altura não pode ser em branco");
	}

	if( paciente.peso.length == 0) {
		erros.push("A peso não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)) {
		erros.push("Peso é invalido"); //---> array.push coloca a mensagem de erro dentro do nosso array
	} 
	if(!validaAltura(paciente.altura)) {
		erros.push("Altura é inválida!");
	}
	return erros;
}

