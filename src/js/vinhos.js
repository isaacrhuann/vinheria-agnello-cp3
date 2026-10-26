const vinhos = [
    {nome: "Cabernet Sauvignon", tipo: "Tinto", safra: "2020", estoque: 120},
    {nome: "syrah Rosé", tipo: "Rosé", safra: "1994", estoque: 12},
    {nome: "Chardonnay", tipo: "Branco", safra: "2005", estoque: 20},
    {nome: "Merlot reserva ", tipo: "Tinto", safra: "2023", estoque: 10},
];

function adicionarVinhos(nome, tipo, safra, estoque) {
    const novoVinho = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        estoque: estoque
    };
    vinhos.push(novoVinho);
    console.log(`Vinho ${nome} adicionado com sucesso!`);
}

function listarVinhos() {
    console.log("Lista de Vinhos:");
    vinhos.forEach(function(vinho) {
        console.log(`Nome: ${vinho.nome}, Tipo: ${vinho.tipo}, Safra: ${vinho.safra}, Estoque: ${vinho.estoque}`);
    });
}

function mostrarBaixoEstoque() {
    console.log("Vinhos com baixo estoque (menos de 5 unidades):");
    const vinhosBaixoEstoque = vinhos.filter(function(vinho) {
        return vinho.estoque < 5;
    });
    
    vinhosBaixoEstoque.forEach(function(vinho){
        console.log (`Nome: ${vinho.nome},  Estoque: ${vinho.estoque}`);
    });
}

function CalcularEstoqueTotal() {
    const estoqueTotal = vinhos.reduce(function(acumulador, vinho) {
        return acumulador + vinho.estoque;
        
    }, 0);
    console.log(`Estoque Total: ${estoqueTotal}`);
    return estoqueTotal;
}

function nomesCaixaAlta() {
    console.log("Nomes dos vinhos em caixa alta:");
    const nomesCaixaAlta = vinhos.map(function(vinho) {
        return vinho.nome.toUpperCase();
    });
    console.log(nomesCaixaAlta);
}


adicionarVinhos("Pinot Noir", "Tinto", "2018", 3);

listarVinhos();
mostrarBaixoEstoque();
nomesCaixaAlta();

const total = CalcularEstoqueTotal();
console.log(`Estoque total de vinhos: ${total}`);

alert(`Sistema Vinheria Agnello carregado!\nEstoque total atual: ${total} garrafas.\nVerifique o console (F12) para ver os relatórios completos usando map, filter e forEach.`);