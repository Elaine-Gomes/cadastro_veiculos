// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors'); 
const db = require('./config');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3857',
  database: 'comercio_automoveis'
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

app.post('/cadastroVeiculo', (req, res) => {
  const { marca, modelo, ano, preco, quilometragem, especificacoes } = req.body;
  const sql = 'INSERT INTO Veiculos (marca, modelo, ano, preco, quilometragem, especificacoes) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(sql, [marca, modelo, ano, preco, quilometragem, especificacoes], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
