const numeros = [1,2,3,4,5]
const somaDeTodosOsValoresDoArray = numeros.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual
});
console.log(somaDeTodosOsValoresDoArray);


const nome = ['L','u','c','a','s'];
const nomeConcatenado = nome.reduce((acumulador, letra) => {
    return acumulador + letra;
});
console.log(nomeConcatenado);