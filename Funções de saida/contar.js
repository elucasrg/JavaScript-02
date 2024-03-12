let label = ""; //a variavel "label" foi decklarada como vazia

function consoleLabel(){ // foi declarada a função com nome de consolelabel()
    console.count(label);
    return "label: " + label; // o retorno vai ser o "label:" mais quantas vezes foi chamada
}

label = "lucas";
consoleLabel(); //camada lucas de label 1 vez
label = "celular";
consoleLabel();
consoleLabel(); // chamada celular de label 2 vezes 
consoleLabel();
console.count();  // quantas vezes foi contada as ações da função