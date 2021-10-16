window.onload = function(){

    function calcular(idProduto,resultado){

        const preco = document.querySelectorAll(`#${idProduto} > 1`);
        const resultado = document.querySelector(`#${resultado}`);
        let totalzinho=0;

        for(let i of preco){
            totalzinho += Number(i.dataset.preco);

        }

        valorResultado.value = totalzinho;
    } 

    function removerProdutos(id){

        const lista = document.querySelectorAll(`#${id} > li`);

        for(let produto of lista){
            produto.addEventListener('click', function(){
                produto.remove();
                calcular('produtos','Somatotal');

            });
        }
    }
}

    export{calcular, removerProdutos};