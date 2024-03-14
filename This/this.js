/*function exemplo(){
    let c = 10;
    return console.log(c);
}
exemplo();
console.log(c);
// Espera-se recebermos um erro de que "C" não está definida.

/*Agora faremos um exemplo elevando o escopo da variável c,
 permitindo que ela seja acessada fora do escopo da função */

 function Exemplo() {
    this.c = 10;
    return console.log(c);
  }
  Exemplo();
  console.log(c);