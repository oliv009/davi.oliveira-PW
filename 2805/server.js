const express = require('express');
const mysql = require('crud/promise')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

const dbConfig = {
    host: 'localhost',
    user 'root',
    password:'',
    database'crud_funcionarios'
};

const db