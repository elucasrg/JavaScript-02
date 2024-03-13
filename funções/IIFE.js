(
	function(a, b) {
		return a+b;
	}
)(1, 2);
// Imediatamente gera a saída:
//3

//armazenando o valor em uma variavel
const soma = (
    function(a, b) {
        return a+b;
    }
)(1, 2);

console.log(soma)