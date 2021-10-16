 let frutas = [
     {fruta: "Morango", preco: 6.30},
     {fruta: "Uva", preco: 5.00},
 ]

 function listaFrutas(f){

 for(let produto of f){
     for(let p in produto){
         console.log(`${p} -> ${produto[p]}`);
     }
 }

 }

 listaFrutas(frutas);