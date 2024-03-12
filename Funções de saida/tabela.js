//um objeto cujas propriedades são strings

function pessoa (nome, meio, sobrenome) {
  this.nome = nome;
  this.meio = meio;
  this.sobrenome = sobrenome;
}

var eu = new pessoa("Lucas","Ribeiro", "Guimarães");

console.table(eu);

// um array de arrays

var pessoa = [
  ["John", "Smith"],
  ["Jane", "Doe"],
  ["Emily", "Jones"],
];
console.table(pessoa);


// um array de objetos

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  var john = new Person("John", "Smith");
  var jane = new Person("Jane", "Doe");
  var emily = new Person("Emily", "Jones");
  
  console.table([john, jane, emily]);