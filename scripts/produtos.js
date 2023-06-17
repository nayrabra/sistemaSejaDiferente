let tabelaProdutos = document.getElementById('produtos');
const formProdutos = document.getElementById('formProdutos')

async function getProdutos(){
    let descricao = document.getElementById('nome produto').value;
    let codigo = document.getElementById('codigo produto').value;
    let valor = document.getElementById('valor produto').value;
    let categoria = document.getElementById('categoria produto').value;
    let { data: produtos, error } = await _supabase
    .from('produtos')
    .select('*')
    .ilike('id', '%' + codigo +'%')
    .ilike('descricao', '%' + descricao +'%')
    .ilike('valor', '%' + valor +'%')
    .ilike('categoria', '%' + categoria +'%')
    console.table(produtos);
    if (error){
        console.log(error);
        return;
    } else {
        tabelaProdutos.innerHTML = '';
        produtos.map((produto) => {
            tabelaClientes.innerHTML += `
            <table>
                <tr>
                    <td>${produto.id}</td>
                    <td>${produto.descricao}</td>
                    <td>${produto.valor}</td>
                    <td>${produto.categoria}</td>
                </tr>
            </table>`;
        })
    }
}

formProdutos.addEventListener('submit', async (e) => {
    e.preventDefault();

    let descricao = formProdutos.descricao.value;
    let valor = formProdutos.valor.value;
    let categoria = formProdutos.categoria.value;
    
    let data = {
        descricao: descricao,
        valor: valor,
        categoria: categoria,
    }

    console.log(data);
    insertProduto(data);
});

async function insertProduto(dado){
    const { data , error } = await _supabase
    .from('produtos')
    .insert([dado]);
    if (error) {
        console.log(error);
        return
    } else {
        alert("Dado salvo com sucesso!");
    }
}