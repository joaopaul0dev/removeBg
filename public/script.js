document.getElementById('uploadForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData();
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Selecione uma imagem.');
        return;
    }

    formData.append('image', file);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            const blob = await response.blob();
            const url = URL.createObjectURL(blob);
            document.getElementById('processedImage').src = url;
            document.getElementById('processedImage').style.display = 'block';

            const downloadLink = document.getElementById('downloadLink');
            downloadLink.href = url;
            downloadLink.download = 'imagem-sem-fundo.png';
            downloadLink.style.display = 'inline-block';
            downloadLink.textContent = 'Baixar Imagem';
        } else {
            alert('Erro ao processar a imagem.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao enviar a imagem.');
    }
});