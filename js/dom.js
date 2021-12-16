// pegar id
const dados1 = document.getElementById('dados');
console.log(dados1);
//querySelector pega qualquewr coisa
const dados2 = document.querySelector('#dados');
console.log(dados2);
// pegar pela class
const personagem1 = document.getElementsByClassName('personagem');
console.log(personagem1);
// querySelector  retorna o primeiro que ele encontra - 
// para pegar todos use querySelectorAll
const personagem2 = document.querySelectorAll('.personagem');
console.log(personagem2);
// pegar pela tag
const getTD1 = document.getElementsByTagName('td');
console.log(getTD1);
const getTD2 = document.querySelectorAll('td');
console.log(getTD2);
console.log(getTD2[8]);
getTD2[8].textContent = 'Princesa Leia';