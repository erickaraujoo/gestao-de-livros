<h1 align="center">
    <img alt="SENAI" title="#senai" src=".github/senai-logo.png" width="280px" />
</h1>


<h4 align="center"> 
  :rocket: Projeto desenvolvido para avaliação prática :rocket:
</h4>

<p align="center">
  <a href="#books-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-configuração">Configuração</a>
</p>

## :books: Tecnologias

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=ts-node&logoColor=white)
![Knex](https://img.shields.io/badge/Knex-E16426?style=for-the-badge&logoColor=white)


## :information_source: Configuração

Primeiro, realize o clone do projeto com o comando abaixo:

``` bash
git clone <>
```

entre na pasta gerada após o clone do projeto:

```bash 
cd ./gestao-de-livos
```

Faça a instalação dos pacotes inserindo o comando abaixo:

```bash
yarn install
```

Para inicalizar a API, utilize o comando abaixo

```bash
yarn dev
```

## Exemplos

---

## 1 - Listagem de livros

### Método: GET

### URL: http://localhost:3333/books

### Authorization: Bearer < token >

### Retorno

```bash
{
	"success": true,
	"message": "request successfull",
	"payload": [
		{
			"id": 1,
			"title": "Game Of Thrones - 1ª Edição",
			"price": "50.00",
			"thumbnailUrl": "ad04a8844de53091046dbdd21b220e81.jpg",
			"wallpaperUrl": "d3f79c78fe9522c4c4b372355481f213.jpg",
			"details": "Um livro da mitologia moderna"
		},
		{
			"id": 2,
			"title": "Game Of Thrones - 1ª Edição",
			"price": "50.00",
			"thumbnailUrl": "c59494d05b103e3fdaf376607efe9c3b.jpg",
			"wallpaperUrl": "f23956e7dd69a82782fa63647b00efeb.jpg",
			"details": "Um livro da mitologia moderna"
		},
		{
			"id": 3,
			"title": "Game Of Thrones - 1ª Edição",
			"price": "50.00",
			"thumbnailUrl": "daa9dde07b799490ffb081d600af6c77.jpg",
			"wallpaperUrl": "0a6c2e327a69219f252dbbc0d83c6e11.jpg",
			"details": "Um livro da mitologia moderna"
		},
	],
	"errors": []
}
```

## 2 - Cadastro de livros


### Método: POST

### URL: http://localhost:3333/books

### Authorization: Bearer < token >

### Body

```bash
{
	"title": "Game Of Thrones - 1ª Edição",
	"details": "Um livro da mitologia moderna",
	"price": 50.00,
	"thumbnail": < base64 >,
	"wallpaper": < base64 >
}
```

### Retorno

```bash
{
	"success": true,
	"message": "request successfull",
	"payload": [
		<cod_livro>
	],
	"errors": []
}
```
