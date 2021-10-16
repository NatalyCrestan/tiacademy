// let i=2;//var global
// for(let x=0; x <=10; x++){
//     console.log(`O valor da interação é ${x} o x mais ele mesmo ${i++} `);
// }

// let Pessoas = {
//     nome: "Steven Rogers",
//     idade: 90,
//     heroi: "Capitão América",

// }

// for(let propriedades in Pessoas){
//     console.log(Pessoas.nome);
//     console.log(Pessoas.idade);


// }

// arr  =["nome"=> "Marcelo"]
// arr[nome]

//console.log(Pessoas.nome);



// let frutas =["Melancia", "Manga", "Banana", "Uva"];

// for(let nomeFruta of frutas){
//     console.log(nomeFruta);
// } //usar esse em vez do outro abaixo.

// for(let x=0; x < frutas.length; x++){
//        console.log(`O nome da fruta é ${frutas[x]} `);
// }

let Herois = [
    {
     identidadeSecreta: "Steven Rogers",
     heroi: "Capitão América",
     
}, 
{ 
    identidadeSecreta: "Tony Stark",
    heroi: "Homem de Ferro",

}
];

Herois.push({identidadeSecreta:"Diana", heroi: "Mulher Maravilha"});
Herois.push({identidadeSecreta:"Bruce Baner", heroi: "Hulk"});

//  let marvel = Heróis[1].identidadeSecreta;
//  console.log(marvel);

for(let marvel of Herois){
    for(let m in marvel){
        console.log(`${marvel[m]}`);
    }

}