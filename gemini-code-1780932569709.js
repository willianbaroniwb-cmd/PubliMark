document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura os dados do formulário
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const productionTime = document.getElementById('productionTime').value;
    const description = document.getElementById('description').value;

    // Captura os canais selecionados
    const checkboxes = document.querySelectorAll('input[name="platform"]:checked');
    const platforms = Array.from(checkboxes).map(cb => cb.value);

    if (platforms.length === 0) {
        alert('Por favor, selecione pelo menos um marketplace!');
        return;
    }

    // Objeto JSON pronto para o Back-end receber
    const produtoDados = {
        titulo: title,
        preco: parseFloat(price),
        estoque: parseInt(stock),
        prazoProducaoDias: parseInt(productionTime),
        descricao: description,
        canais: platforms
    };

    // Exibe no console do navegador para testes
    console.log('Dados formatados para envio:', produtoDados);
    
    // Alerta de sucesso temporário
    alert(`Sucesso! "${title}" cadastrado com ${productionTime} dias de prazo de fabricação e enviado para as lojas.`);
});