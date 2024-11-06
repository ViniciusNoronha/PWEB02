const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuração para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Rota para a página de serviços
app.get('/servicos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'servicos.html'));
});

// Rota para a página sobre
app.get('/sobre', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'sobre.html'));
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
