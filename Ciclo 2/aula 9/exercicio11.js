let nomes = ["Nataly", "Silvana", "Larissa", "Erika", "Lázaro"];

 const coisaNomes = (name, novoNome, index)=>{

    console.log("Quantidade de elementos do array...", name.length);
    console.log(`Você escolheu o indice ${index} que é o elemento ${name[index]} `);
    console.log(`O nnome ${novoNome} foi inserido no array`);
    name.push(novoNome);
    console.log("A quantidade de elementos atual do array é de...:", name.length);
 }

 coisaNomes(nomes, "Nataly", 4);
 coisaNomes("Maria", 2);