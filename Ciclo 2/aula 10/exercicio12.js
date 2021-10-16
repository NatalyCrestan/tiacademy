 palavra = 'Dulcineia'

 (function(){

   document.write(`Esta palavra tem ${palavra.lenght} caracteres <br>`);
   document.write(`Esta palavra ${palavra} ficou ${palavra.toUpperCase()} <br>`);
   document.write(`A letra ${palavra[3]} é o caracteres <br>`);
   document.write(`${palavra} ficou ${palavra.replace(palavra[3], 'X')}`);

 }) (palavra);