//aula- introdução ao javascript

//var name = "Jhonatan de Oliveira";
//var idade = 22;
//var idade2 = 10;
//var frase = "Japão é o melhor time do mundo"
//
//var n1 = 5;
//var n2  = 3;
//
//alert("Bem vindo" + name);
//alert(nome + "tem" + idade + "anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Japão" , "Brasil"));
//alert(frase.replace("Japão" , "Brasil"));
//
//console.log(frase.toLocaleUpperCase());
//console.log(frase.toLocaleLowerCase());
//
//console.log(n1 * n2);



//array e dicionário

//var frutas = [{nome:"maça", cor: "vermelha"}, {nome:"uva", cor: "roxa" }]
//console.log(frutas.nome);
//alert(frutas[1].nome);
//
//
//var fruta = {nome:"maça", cor: "vermelha"}
//console.log(fruta.nome);
//alert(fruta.nome);
//
//var lista = ["maça", "pêra", "laranja"];
//
//lista.push("uva");
//lista.pop();
//
//alert(lista[1]);
//console.log(lista[1]);
//console.log(lista.toString()[1]);
//
//console.log(lista.length());
//console.log(lista.reverse()); 
//
//console.log(lista.join(" - "));


//Condicionais, laços de repetição e date

/*
var idade = prompt("Qual sua idade");
if (idiade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade")
}
*/

/*
var count = 0;
while (count <= 0){
    console.log(count);
    alert(count);
    count++;
}
*/

/*
var count;
for(count= 0; count <= 5; count++){
    alert(count);
};
*/

/*
var d = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

//página web com javascript

/*
function soma (n1, n2){
    return n1 + n2
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

var validar = 0; //global

function validaIdade(idade){
    var validar; //local
    if (idade >= 18){
        validar = true
    }else{
        var validar = false
    }
    return validar;
}

alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//nova 

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar!");
}

function redirecionar(){
    windows.open("https://globallabs.academy/");
    //windows.location.href = "https://globallabs.academy/";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
    //alert("trocar texto");
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}