const nav = document.querySelector(".Nav");
const juego = document.getElementById("Campaña");
const dinero = document.getElementById("Dinero");
const preguntas = document.getElementById("Preguntas");
const comentarios = document.getElementById("Comentarios");
const flechaAbajoJ = document.getElementById("abajoJuego");
const flechaArribaJ = document.getElementById("arribaJuego");
const flechaAbajoD = document.getElementById("abajoDinero");
const flechaArribaD = document.getElementById("arribaDinero");
const flechaAbajoP = document.getElementById("abajoPreguntas");
const flechaArribaP = document.getElementById("arribaPreguntas");
const flechaAbajoC = document.getElementById("abajoComents");
const flechaArribaC = document.getElementById("arribaComents");
const síguenos = document.getElementById("Síguenos");
var paddingSíguenos = new Boolean(true);


flechaArribaJ.style.display = "none";
flechaArribaD.style.display = "none";
flechaArribaP.style.display = "none";
flechaArribaC.style.display = "none";
preguntas.style.display = "none";
juego.style.display = "none";
dinero.style.display = "none";
comentarios.style.display = "none";
Pregunta1.style.display = "none";
Pregunta2.style.display = "none";
Pregunta3.style.display = "none";
Pregunta4.style.display = "none";
Pregunta5.style.display = "none";

síguenos.classList.toggle("active", paddingSíguenos);

window.addEventListener("scroll", function(){
	nav.classList.toggle("active", window.scrollY > 0);
})


function hacerVisibleJuego(){
	juego.style.display = "initial";
	flechaArribaJ.style.display = "initial";
	flechaAbajoJ.style.display = "none";
}

function ocultarJuego(){
	if(juego.style.display == "none"){
		juego.style.display = "initial";
		flechaAbajoJ.style.display = "none";
		flechaArribaJ.style.display = "initial";
	} else{
		juego.style.display = "none";
		flechaArribaJ.style.display = "none";
		flechaAbajoJ.style.display = "initial";
	}
}




function hacerVisibleDinero(){
	dinero.style.display = "initial";
	flechaArribaD.style.display = "initial";
	flechaAbajoD.style.display = "none";
}

function ocultarDinero(){
	if(dinero.style.display == "none"){
		dinero.style.display = "initial";
		flechaAbajoD.style.display = "none";
		flechaArribaD.style.display = "initial";
	} else{
		dinero.style.display = "none";
		flechaArribaD.style.display = "none";
		flechaAbajoD.style.display = "initial";		
	}
}




function hacerVisiblePreguntas(){
	preguntas.style.display = "initial";
	flechaArribaP.style.display = "initial";
	flechaAbajoP.style.display = "none";
}

function ocultarPreguntas(){
	if(preguntas.style.display == "none"){
		preguntas.style.display = "initial";
		flechaAbajoP.style.display = "none";
		flechaArribaP.style.display = "initial";
	} else{
		preguntas.style.display = "none";
		flechaArribaP.style.display = "none";
		flechaAbajoP.style.display = "initial";
	}
}



function hacerVisibleComentarios(){
	comentarios.style.display = "initial";
	flechaArribaC.style.display = "initial";
	flechaAbajoC.style.display = "none";
}

function ocultarComentarios(){
	if(comentarios.style.display == "none"){
		comentarios.style.display = "initial";
		flechaAbajoC.style.display = "none";
		flechaArribaC.style.display = "initial";
		paddingSíguenos = false;
		síguenos.classList.toggle("active", paddingSíguenos);
	} else{
		comentarios.style.display = "none";
		flechaArribaC.style.display = "none";
		flechaAbajoC.style.display = "initial";
		paddingSíguenos = true;
		síguenos.classList.toggle("active", paddingSíguenos);
	}
}


function alternarRespuesta(num){
	if(num == 1){
		pregunta = document.getElementById("Pregunta1");
	} else if(num == 2){
		pregunta = document.getElementById("Pregunta2");
	} else if(num == 3){
		pregunta = document.getElementById("Pregunta3");
	} else if(num == 4){
		pregunta = document.getElementById("Pregunta4");
	} else if(num == 5){
		pregunta = document.getElementById("Pregunta5");
	}
	
	if(pregunta.style.display == "none"){
		pregunta.style.display = "block";
	} else{
		pregunta.style.display = "none";
	}	
}







