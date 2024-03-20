function array(elemento,vezes){
    var arrayResultado = [];// Cria um array vazio para armazenar o resultado
    // Loop for para repetir o elemento o número de vezes especificado
    for (var i = 0; i < vezes; i++){
        arrayResultado.push(elemento);// Adiciona o elemento ao array resultado
    }
    return arrayResultado;
}


//function repetir(item, qtd) {
  //  return Array(qtd).fill(item);
//}