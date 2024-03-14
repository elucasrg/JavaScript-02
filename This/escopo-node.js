this.Object.prototype = {
    A: "Nova variável";
  }

  /*O this é uma palavra poderosa dentro do Javascript, porém perigosa. O uso dele deve ser restrito a cenários onde é necessário acessar uma variável que está acima e deve se evitar ao máximo chegar no escopo do módulo. Isso porque o uso excessivo do this pode causar uma confunção no código sobre responsabilidades e localização conforme a aplicação for escalonando.

É preferível que crie-se classes ou componentes e os importe ( via sistema de módulos) do que usar descontroladamente o this.*/