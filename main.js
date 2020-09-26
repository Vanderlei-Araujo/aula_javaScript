//button
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por Clicar")
}
function link(){
    window.open("https://www.google.com.br/"); //nova aba
    //window.location.href = "https://www.google.com.br/"; //mesma janela
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Obrigado por passaar o mouse</b>";
    elemento.innerHTML = "<b>Obrigado por passar o mouse</b>";
    //alert("trocar texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b>Passe o mouse aqui!</b>";
    elemento.innerHTML = "<b>Passe o mouse aqui!</b>";
}
function load(){
    alert("pagina carregada");
}
function funcaoChenge(elemento){
    console.log(elemento.value);
}


//Funções
/*function soma(n1, n2){
    return n1 + n2;
}
 function setReplace(frase, nome, novo_nome){
     return frase.replace(nome, novo_nome)
 }

 alert(soma(5, 10));
 alert(setReplace("vai Japão", "Japão", "Brasil"));
*/ 
/*var validar = 0
function validaIdade(idade){
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade");
validaIdade(idade)
console.log(validar);
*/


//datas
/*var d = new Date();
alert(d.getDate());
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getSeconds());*/


//laços condicionai e de repetição
/*var count;
for(count = 0; count <= 5; count++){
    alert(count);
};*/

/*var count = 0;
while (count < 5){
    console.log(count)
    count = count + 1;
    //tambem alert(count)
    // ou count ++
};*/

/*var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade")
} else{
    alert("menor de idade")
};*/


/*var idade = 18;
if (idade >= 18){
    alert("maior de idade")
} else{
    alert("menor de idade")
}*/


//dicionario
//var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(frutas)
//alert(frutas[1].nome);

//array
//var lista = ["maçã", "pêra", "laranja"];
//console.log(lista[1]);
//lista.push("uva");coloca
//lista.pop();retira
//console.log(lista);
//console.log(lista.reverse()); inverte a lista
//console.log(lista.toString()); transforma em string
//console.log(lista.join( - )); transforma em string e o que fica no meio
//alert(lista[1]);


//var nome = "Vanderlei Araújo";
//alert("Bem vindo" + nome);
//var idade = 34;
//var idade2 = 10;
//alert(idade + idade2);
//var frase = "informatica é muito bom";
//console.log(nome);
//console.log(frase.replace("bom", "ruim"));
//alert(frase);
