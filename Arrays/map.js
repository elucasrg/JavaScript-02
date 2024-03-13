const n1 = [1,2,3,4,5]
const add1 = n1.map((number, index, array) => {
    console.log(`Índice ${index} - Number: ${number}`);
    console.table(array);
    return 2*number +1;
})
console.log(add1)
// Basicamente foi pedido para mostrar cada indicie da tabela com seu respectivo valor e posteriomente adicionado 1 em cada elemento surgindo então um novo array