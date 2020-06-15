programa
{
	
	funcao inicio()
	{
		real janeiro, fevereiro, marco, abril, media, total;
		cadeia nome;

		escreva("Digite seu nome: ");
		leia(nome);
		escreva("Digite as vendas em janeiro:");
		leia(janeiro);
		escreva("Digite as vendas em fevereiro");
		leia(fevereiro);
		escreva("Digite as vendas em março:");
		leia(marco);
		escreva("Digite as vendas em abril");
		leia(abril);

		media = (janeiro + fevereiro + marco + abril) / 4;
		total = janeiro + fevereiro + marco + abril; 

		escreva("Seu nome é " + nome +  " sua media foi de " + media + " com o total de " + total);
		
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 569; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */