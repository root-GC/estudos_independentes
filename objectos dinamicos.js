
/*
     15/09/2025
     @Criação dinâmica de objectos em javaScript

*/

//Criação de um objecto vazio

const pessoa = {};//objecto vazio

//pessoa não tem nada dentro ainda.
//As propriedades e métodos podem ser adicionados dinamicamente

//#Adicionar propriedades
pessoa.nome="Ana";
pessoa.idade=25;

console.log(pessoa.nome); //Ana
console.log(pessoa.idade); //25

//   #Permite adicionar ou modificar propriedade a qualquer momento
pessoa.idade=26; //actualiza idade
//O nome da propriedade nunca muda quando alteras o valor.
//Só estás a atualizar o conteúdo daquela propriedade existente.

//--------------------------------------------------
//Adicionar métodos
//
pessoa.falar = function(){
     console.log("Oi, eu sou "+this.nome);
};
pessoa.falar(); //Oi, eu sou Ana

// this-> refere-se ao objecto actual, mesmo que o método tenha sido adiconado depois

//--------------------------------------------------
//
//Herança dinâmica(modo prototípico)
//
const estudante = Object.create(pessoa); // estudante hera de pessoa
estudante.curso = "JS Avançado";

console.log(estudante.nome); // Ana -> herdado
estudante.falar(); // Oi, eu sou Ana -> herdado
console.log(estudante.curso); //JS Avançado
//estudante não copia  pessoa, ele simplesmente aponta para pessoa como protótipo.

//Se adicionares algo novo em pessoa, estudante tambem terá.
//
pessoa.saudacao = function(){
     console.log("Olá! Bom dia!");
}
estudante.saudacao(); //Olá! Bom dia!

//---------------------------------------
//Sintaxe com colchetes
//
// Adicionar novas propriedades dinâmicas

const prop = "altura";
pessoa[prop] = 170;
console.log(pessoa.altura);//170


//-----------------------------------------------------------
///Resumindo
//
//Objetos em JS são dinâmicos por natureza.
//Propriedades e métodos podem ser adicionados ou alterados a qualquer momento.
//O encadeamento de protótipos permite herança sem classes.
//this funciona como referência ao objeto que chamou o método.


