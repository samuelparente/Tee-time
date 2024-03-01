/* 
Licenciatura em Engenharia Informática
Laboratório de Sistemas e Serviços Web | e-fólio B
Samuel Parente, aluno n.º2104178 
*/

//espera que o DOM esteja totalmente carregado
document.addEventListener("DOMContentLoaded", function(event) {
	
	var imagemThumbs = document.getElementById("imagens-thumbs"); //selecciona o elemento que vai conter as miniaturas
	var imagemAtual = document.getElementById("imagem-atual"); //selecciona o elemento com a imagem atual

//loop para criar 8 miniaturas e definir as suas propriedades
	for(var i=1;i<=8;i++){
		
		var thumb=document.createElement("img"); //cria um elemento tipo img
		
		thumb.src="./imagens/galeria/imagem"+i+".jpg"; //pasta das imagens armazenadas.
		thumb.alt = "Imagem "+i;
		
		//fica à "escuta" de clique
		thumb.addEventListener(
			"click", function() {
				imagemAtual.src = this.src;
				imagemAtual.alt = this.alt;
		}
		);
		
		thumb.classList.add("thumb"); //adiciona o nome da classa ao elemento criado
		imagemThumbs.appendChild(thumb); //adiciona o elemento filho ao elemento pai
	}
})