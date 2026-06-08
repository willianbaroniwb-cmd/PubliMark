// Array para guardar temporariamente os arquivos de imagem selecionados
let fotosSelecionadas = [];

// Gerencia a seleção de arquivos e mostra as miniaturas na tela
document.getElementById('fileInput').addEventListener('change', function(e) {
    const files = e.target.files;
    const previewContainer = document.getElementById('previewContainer');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        fotosSelecionadas.push(file); // Adiciona na nossa lista global

        // Código que lê o arquivo local e transforma em imagem na tela
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = document.createElement('img');
            img.src = event.target.result;
            img.classList.add('preview-image');
            previewContainer.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});

// Envio do formulário
document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value;
    const productionTime = document.getElementById('productionTime').value;
    const description = document.getElementById('description').value;

    const checkboxes = document.querySelectorAll('input[name="platform"]:checked');
    const platforms = Array.from(checkboxes).map(cb => cb.value);

    if (platforms.length === 0) {
        alert('Por favor, selecione pelo menos um marketplace!');
        return;
    }

    // Estrutura dos dados final
    const produtoDados = {
        titulo: title,
        preco: parseFloat(price),
        estoque: parseInt(stock),
        prazoProducaoDias: parseInt(productionTime),
        descricao: description,
        canais: platforms,
        totalImagens: fotosSelecionadas.length // No futuro, aqui enviaremos os arquivos binários
    };

    console.log('Dados formatados prontos para envio:', produtoDados);
    
    alert(`Sucesso! Anúncio "${title}" pronto para envio com ${fotosSelecionadas.length} fotos salvas.`);
});
