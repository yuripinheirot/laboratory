const cpf = '123.123.123-01'
const cpfWithReplace = cpf.replaceAll('.', '').replaceAll('-', '')

console.log(cpfWithReplace)