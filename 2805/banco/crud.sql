create database crud_funcionarios;
use crud_funcionarios;
create table funcionarios( 
id int auto_increment primary key,
nome varchar(50) not null,
funcao varchar(20) not null,
salario decimal(10.2) not null,
create_at timestamp default current_timestamp
);