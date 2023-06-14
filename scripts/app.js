//clientes

let tabelaClientes = document.getElementById('clientes');
const formClientes = document.getElementById('formClientes')

async function getClientes(){
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('cpf').value;
    let estado = document.getElementById('estado').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let { data: clientes, error } = await _supabase
    .from('clientes')
    .select('*')
    .ilike('nome', '%' + nome +'%')
    .ilike('cpf', '%' + cpf +'%')
    .ilike('estado', '%' + estado +'%')
    .ilike('email', '%' + email +'%')
    .ilike('telefone', '%' + telefone +'%')
    console.table(clientes);
    if (error){
        console.log(error);
        return;
    } else {
        tabelaClientes.innerHTML = '';
        clientes.map((cliente) => {
            tabelaClientes.innerHTML += `
            <table>
                <tr>
                    <td>${cliente.id}</td>
                    <td>${cliente.nome}</td>
                    <td>${cliente.cpf}</td>
                    <td>${cliente.estado}</td>
                    <td>${cliente.email}</td>
                    <td>${cliente.telefone}</td>
                </tr>
            </table>`;
        })
    }
}

try{
    formClientes.addEventListener('submit', async (e) => {
        e.preventDefault();

        let nome = formClientes.nome.value;
        let cpf = formClientes.cpf.value;
        let estado = formClientes.estado.value;
        let email = formClientes.email.value;
        let telefone = formClientes.telefone.value;
        
        let data = {
            nome: nome,
            cpf: cpf,
            estado: estado,
            email: email,
            telefone: telefone
        }

        console.log(data);
        insertCliente(data);
    });
} catch (error) {
    console.log(error)
}

async function insertCliente(dado){
    const { data , error } = await _supabase
    .from('clientes')
    .insert([dado]);
    if (error) {
        console.log(error);
        return
    } else {
        alert("Dado salvo com sucesso!");
    }
}

//produtos

let tabelaProdutos = document.getElementById('produtos');
const formProdutos = document.getElementById('formProdutos')

async function getProdutos(){
    let descricao = document.getElementById('descricao').value;
    let codigo = document.getElementById('codigo').value;
    let categoria = document.getElementById('categoria').value;
    let { data: produtos, error } = await _supabase
    .from('produtos')
    .select('*')
    console.table(produtos);
    if (error){
        console.log(error);
        return;
    } else {
        tabelaProdutos.innerHTML = '';
        produtos.map((produto) => {
            tabelaProdutos.innerHTML += `
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

try{
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
} catch (error) {
    console.log(error)
}

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

//categorias

let tabelaCategorias = document.getElementById('categorias');
const formCategorias = document.getElementById('formCategorias')

async function getCategorias(){
    let descricao = document.getElementById('descricao').value;
    let { data: categorias, error } = await _supabase
    .from('categorias')
    .select('*')
    .ilike('descricao', '%' + descricao +'%')
    console.table(categorias);
    if (error){
        console.log(error);
        return;
    } else {
        tabelaCategorias.innerHTML = '';
        categorias.map((categoria) => {
            tabelaCategorias.innerHTML += `
            <table>
                <tr>
                    <td>${categoria.id}</td>
                    <td>${categoria.descricao}</td>
                </tr>
            </table>`;
        })
    }
}

try{
    formCategorias.addEventListener('submit', async (e) => {
        e.preventDefault();

        let descricao = formCategorias.descricao.value;
        
        let data = {
            descricao: descricao
        }

        console.log(data);
        insertCategoria(data);
    });
} catch (error) {
    console.log(error)
}

async function insertCategoria(dado){
    const { data , error } = await _supabase
    .from('categorias')
    .insert([dado]);
    if (error) {
        console.log(error);
        return
    } else {
        alert("Dado salvo com sucesso!");
    }
}

//estoques

let tabelaEstoques = document.getElementById('estoques');
const formEstoques = document.getElementById('formEstoques')

async function getEstoques(){
    let descricao = document.getElementById('descricao').value;
    let codigo = document.getElementById('codigo').value;
    let { data: estoques, error } = await _supabase
    .from('estoque')
    .select('*')
    .ilike('descricao', '%' + descricao +'%')
    console.table(estoques);
    if (error){
        console.log(error);
        return;
    } else {
        tabelaEstoques.innerHTML = '';
        estoques.map((estoque) => {
            tabelaEstoques.innerHTML += `
            <table>
                <tr>
                    <td>${estoque.codigo}</td>
                    <td>${estoque.descricao}</td>
                    <td>${estoque.saldo}</td>
                    <td>${estoque.categoria}</td>
                </tr>
            </table>`;
        })
    }
}

try{
    formEstoques.addEventListener('submit', async (e) => {
        e.preventDefault();

        let codigo = formEstoques.codigo.value;
        let descricao = formEstoques.descricao.value;
        let categoria = formEstoques.categoria.value;
        let quantidade = formEstoques.quantidade.value;
        
        let data = {
            codigo: codigo,
            descricao: descricao,
            categoria: categoria,
            saldo: quantidade,
        }

        console.log(data);
        insertEstoque(data);
    });
} catch (error) {
    console.log(error)
}

async function insertEstoque(dado){
    const { data , error } = await _supabase
    .from('estoque')
    .insert([dado]);
    if (error) {
        console.log(error);
        return
    } else {
        alert("Dado salvo com sucesso!");
    }
}