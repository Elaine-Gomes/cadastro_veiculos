USE comercio_automoveis;

CREATE TABLE IF NOT EXISTS Veiculos (
  id_veiculo INT AUTO_INCREMENT PRIMARY KEY,
  marca VARCHAR(50),
  modelo VARCHAR(50),
  ano INT,
  preco DECIMAL(10, 2),
  quilometragem INT,
  especificacoes TEXT
);
