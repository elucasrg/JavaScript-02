//Para adicionar porteriormente uma key num objeto já criado, basta usar o ponto (.). Exemplo:
let obj = {
    key1: "Ativa",
    key2: "off"
};
console.log(obj) 
// ADICIONANDO UMA NOVA KEY
obj.key = "add on"
console.log(obj) 

//Outra forma de adicionar objetos, é usando [ ].

let obj = {
    key1: "Ativa",
    key2: "off"
};

obj["nome"] = "Lucas"

console.log(obj)

//Agora que conseguimos declara-los em hard code, um vazio, e adicionar uma chave em um objeto já declarado, como remover? 

let he4rt = {
    comunidade: "Ativa",
    devs: "Incríveis"
};
console.log(he4rt) // {comunidade: "Ativa", devs: "Incríveis"}

delete he4rt.devs;
console.log(he4rt) // {comunidade: "Ativa"}