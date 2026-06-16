const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração de middlewares
app.use(cors()); // Permite que seu site HTML acesse esta API externa
app.use(express.json()); // Permite que o Express entenda requisições com dados em formato JSON

// Configuração da conexão com o Banco de Dados MySQL
const db = mysql.createConnection({
    host: crud.sql,       // Endereço do seu banco de dados (mude se estiver na nuvem)
    user: 'root',            // Seu usuário do MySQL
    password: 'SuaSenhaAqui', // ATENÇÃO: COLOQUE A SENHA DO SEU MYSQL AQUI
    database: 'crud_funcionarios'
});

// Conectando ao banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado com sucesso ao banco de dados MySQL!');
});


app.post('/funcionarios', (req, res) => {
    const { nome, funcao, salario } = req.body;
    const query = 'INSERT INTO funcionarios (nome, funcao, salario) VALUES (?, ?, ?)';
    
    db.query(query, [nome, funcao, salario], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Funcionário cadastrado com sucesso!', id: result.insertId });
    });
});


app.get('/funcionarios', (req, res) => {
    const query = 'SELECT * FROM funcionarios';
    
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
});


app.put('/funcionarios/:id', (req, res) => {
    const { id } = req.params;
    const { nome, funcao, salario } = req.body;
    const query = 'UPDATE funcionarios SET nome = ?, funcao = ?, salario = ? WHERE id = ?';
    
    db.query(query, [nome, funcao, salario, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Dados do funcionário atualizados com sucesso!' });
    });
});


app.delete('/funcionarios/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM funcionarios WHERE id = ?';
    
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Funcionário removido com sucesso!' });
    });
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
