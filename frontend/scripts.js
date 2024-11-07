document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value,
    preco: document.getElementById('preco').value,
    quilometragem: document.getElementById('quilometragem').value,
    especificacoes: document.getElementById('especificacoes').value,
  };

  fetch('http://localhost:3000/cadastroVeiculo', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.error) {
      document.getElementById('resultado').innerText = `Erro: ${data.error}`;
    } else {
      document.getElementById('resultado').innerText = `Veículo cadastrado com sucesso! ID: ${data.id}`;
      // Limpar os campos após o sucesso
      document.getElementById('cadastroForm').reset();
    }
  })
  .catch(error => {
    console.error('Erro ao cadastrar veículo:', error);
    document.getElementById('resultado').innerText = 'Erro ao cadastrar veículo';
  });
});

  