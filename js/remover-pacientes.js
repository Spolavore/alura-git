
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick" , function(event){
	/*var alvo = event.target //quem esta atrelado ou sofre o dbl
	var paiDoAlvo = alvo.parentNode.classList.add("fadeOut"); // eh o pai do alvo , se o alvo eh uma td o pai sera a tr
	paiDoAlvo.remove();*/

	event.target.parentNode.classList.add("fadeOut");

	setTimeout(function(){                       //---- metodo do js para esperar um tempo em milissegundos antes de executar uma funcao
		event.target.parentNode.remove();
	}, 500)

	
})

/*var pacientes = document.querySelectorAll(".paciente");
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick", function() {
        this.remove(); // dono do evento
    });
});*/