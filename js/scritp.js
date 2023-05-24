let userName = prompt(`Digite o Nome Completo: `); // nome
console.log(`Name: ${userName}`);

let getName = document.getElementById("name").innerHTML = `Nome Completo: ${userName}`;

let userAge = prompt(`Digite sua Idade: `); // idade
userAge = Number(userAge);
console.log(`Age: ${userAge}`);

let getAge = document.getElementById("age").innerHTML = `Idade: ${userAge}`;

let userBirth = prompt(`Digite o Ano do Nascimento: `); // ano do nascimento
console.log(`Birth: ${userBirth}`);

let getbirth = document.getElementById("birth").innerHTML = `Ano do Nascimento: ${userBirth}`;

let userNatural = prompt(`Naturalidade: `);  // naturalidade
console.log(`Natural: ${userNatural}`);

let getNatural = document.getElementById("natural").innerHTML = `Naturalidade: ${userNatural}`;

let userStatusM = prompt(`Digite Seu Estado Civil: `); // estado cvil
console.log(`Marital Status: ${userStatusM}`);

let getStatusM = document.getElementById("marital-status").innerHTML = `Estado Civil: ${userStatusM}`;

/*

- as variaveis que começam com (user) são responsaveis por capturar o texto vindo da função (promtp)

- as variaveis que começam com (get) são responsaveis por manipular o DOM e exibir os dados do user

o console também captura e exibe a informação no log

 */