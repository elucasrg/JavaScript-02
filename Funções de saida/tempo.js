const label = 'tempo';

console.time(label); // contador de tempo label tem o nome tempo agora
for(let i = 0; i < 100; ++i) {
}; //rodando os numeros entre 1 e 100 contando de 1 em 1
console.timeEnd(label);