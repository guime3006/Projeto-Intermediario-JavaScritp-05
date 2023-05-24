let userName = prompt(`Digite o Nome Completo: `);
console.log(`Name: ${userName}`);

let getName = document.getElementById("name").innerHTML = `Nome Completo: ${userName}`;

let userAge = prompt(`Digite sua Idade: `);
userAge = Number(userAge);
console.log(`Age: ${userAge}`);

let getAge = document.getElementById("age").innerHTML = `Idade: ${userAge}`;

let userBirth = prompt(`Digite o Ano do Nascimento: `);
console.log(`Birth: ${userBirth}`);

let getbirth = document.getElementById("birth").innerHTML = `Ano do Nascimento: ${userBirth}`;

let userNatural = prompt(`Naturalidade: `);
console.log(`Natural: ${userNatural}`);

let getNatural = document.getElementById("natural").innerHTML = `Naturalidade: ${userNatural}`;

let userStatusM = prompt(`Digite Seu Estado Civil: `);
console.log(`Marital Status: ${userStatusM}`);

let getStatusM = document.getElementById("marital-status").innerHTML = `Estado Civil: ${userStatusM}`;
