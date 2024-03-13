function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }
  
  function getMonthName(mes) {
    mes = mes - 1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
    var meses = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  
    if (meses[mes] !== undefined) {
      return meses[mes];
    } else {
      throw new UserException("MesInvalido");
    }
  }
  
  try {
    // statements to try
    var meuMes = 15; // 15 não é um valor válido.
    nomeMes = getMonthName(meuMes);
  } catch (e) {
    nomeMes = "não informado";
    console.log(e.message, e.name); // mostra no console a mensagem e o erro que foram pegos.
  }

/*try - permite definir um bloco de código a ser testado quanto a erros enquanto ele está sendo executado.

catch - instrução permite definir um bloco de código a ser executado, se ocorrer um erro no bloco try.

throw permite criar erros personalizados.

finally permite executar o código, após tentar e capturar, independentemente do resultado.*/

//valido para reparar ou apontar erros