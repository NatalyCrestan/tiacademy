// function Pessoa(nome){

// this.nome = nome;

// // this.msg = function(){
// //     alert("Olá")
// }


// Pessoa.prototype.msg = function(){
//     alert("Olá" + this.nome);
// }

// let NovaPessoa = new Pessoa("José");
// let OutraPessoa = new Pessoa("Maria");



//  NovaPessoa.msg();
//  OutraPessoa.msg();

// // console.log(NovaPessoa.nome);

// console.log(NovaPessoa);


// let Pessoa2 = {
//     'nome':'',
//     'idade':''

// }

// //console.log(Pessoa2);
// Pessoa2._proto_.msg = function(){
//     alert("Olá" + Pessoa2.nome);
// }
// let P = Pessoa2;
// P.nome = "Marcelo";
// P.msg();
// console.log(P);


let Pessoa3 = [
    {
        'nome': 'Marcelo',
        'idade': 36,
        'sexo': 'M'
    },
    {
        'nome': 'Suelem',
        'idade': 36,
        'sexo': 'F'

    },
    {
        'nome': 'Marcos',
        'idade': 40,
        'sexo': 'M'
    },

    {
        'nome': 'Danubia',
        'idade': 32,
        'sexo': 'F'
    }
]

let NPessoa = Pessoa3;

console.log(`Existe ${NPessoa.length} cadstradas`);

console.log(NPessoa[1].nome);


