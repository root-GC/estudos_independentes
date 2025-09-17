/**
 * @Funcoes principais no javascript
 */

//Funções tradicionais(function)

function somar(a,b){
     return a + b;
}

console.log(somar(2,3));//5

//Importancia:
//Em node, usadas para modularizar código
//Em React, usadas em eventos e funcoes auxiliares


//
//Funcoes anônimas
//Funcoes sem nome, geralmente atribuidas a uma variável
//
const multiplicar = function(x, y){
     return x * y;
};
console.log(multiplicar(4,5));// 20

//É simplesmente uma função sem nome.
//Normalmente, tu atribuis ela a uma variável ou passas diretamente como argumento
//para outra função.

//Quando usar?
//   #Quando não precisas reaproveitar a função em outro lugar.
//   #Quando ela é criada só para ser passada a outra função, como nos eventos do React.
//
//React: 
<button onClick={function(){alert("clicou!"); }}>
     clique aqui
</button>

//Ou tambem com arrow function
<button onClick={() => alert("Clicou!")}>
  Clique aqui
</button>

//Importância
//Muito usadas em callbacks, principalmente no React (onClick={()=>...}).

//Continuar a pesquisar sobre funcions


