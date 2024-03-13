if(1 == 1) {
    var x = 'Ela foi criada e inicializada no escopo global da aplicação.'
  }

  console.log(x) /*
  conseguimos acessar a variável pois blocos de instrução não criam escopo.

  Se fizermos a mesma verificação e declarar a variável x usando let, conseguimos criar um escopo local para ela:

  */

  if(1 == 1) {
    let x = 'Agora ela possui um escopo local.'
  }

  console.log(x) /* <- não conseguimos mais ter acesso a variável. */