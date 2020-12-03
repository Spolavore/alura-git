var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click" , function(){	
	var xhr = new XMLHttpRequest(); // objeto do js responsavel de fazer requisicoes http

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //configura qual tipo de requisicao queremos (nesse caso GET que é para acessar alguma página)e onde acha-la (link)
	
	xhr.addEventListener("load", function(){ //evento especialista em escutar se a respota ja foi carregada
		
		var mensagemDeErro = document.querySelector("#erro-ajax")

		if ( xhr.status == 200) {
		mensagemDeErro.classList.add("invisivel");
		var resposta = xhr.responseText; // conteudo da página requisitada
		var pacientes = JSON.parse(resposta); // traduz para objetos do js
		
		pacientes.forEach( function(paciente) {
			adicionaPacienteNaTabela(paciente);
			});
		}else {
			
			mensagemDeErro.classList.remove("invisivel");
			console.log(xhr.status);
			console.log(xhr.responseText);
		}
	});

	xhr.send(); //pega a requisicao que acabamos de criar e envia ela


});

