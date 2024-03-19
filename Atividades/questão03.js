function calcularSalario(horas, valor){
    let salariobruto = horas*valor
    let salario = salariobruto- salariobruto*(30/100)
    return `Salário líquido é igual a R$ ${salario}!`
}