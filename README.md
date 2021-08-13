# Instalações necessárias
npm install express
npm install ejs
npm install nodemon
npm install mysql
npm install consign@0.1.6 --save
npm install body-parser@1.17.2 --save

# Comandos
create database portal_noticias;

create table noticias(
	id_noticia int primary key auto_increment,
    	titulo varchar(100),
    	noticia text,
    	data_criacao timestamp default current_timestamp
);

insert into noticias(titulo, noticia) values ('Titulo da noticia', 'Conteudo da noticia');
insert into noticias(titulo, noticia) values ('Titulo 2', 'Conteudo 2');