const n1 = [1,2,3,4,5]
const nimpar = n1.filter((numero, indice, array) => {
    return numero % 2 !== 0; // no filter eu separo os numeros já existentes não os modifico
});
console.log(nimpar)