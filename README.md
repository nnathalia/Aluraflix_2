# Aluraflix 2
![Aluraflix 2](assets/img/image.png)

## 💻 Você pode acessar o projeto aqui

 [Link do site](https://nnathalia.github.io/Aluraflix_2/)

## Descrição
Este projeto foi desenvolvido durante a **7ª edição da Imersão Dev da Alura**, na aula intitulada **"Aluraflix e Filmes Preferidos"**. O objetivo é criar uma aplicação simples e interativa que permite ao usuário adicionar filmes favoritos à uma galeria, inserindo apenas o link de uma imagem (como pôster de filme).

Com apenas HTML, CSS e JavaScript básico, o projeto demonstra conceitos fundamentais de manipulação do DOM, entrada de dados e renderização dinâmica de conteúdo.

---

## Funcionalidades
- ✅ Adicionar filmes por URL de imagem
- ✅ Exibição em tempo real das imagens adicionadas
- ✅ Limpeza automática do campo após adicionar
- ✅ Interface responsiva e amigável
- ✅ Estilização personalizada

---

## Tecnologias Utilizadas
- **HTML5** – Estrutura da página
- **CSS3** – Estilização visual e responsividade
- **JavaScript** – Lógica de interação (adicionar filmes dinamicamente)

---

## Como Funciona

O funcionamento é simples:

1. O usuário insere uma **URL de imagem** (ex: `https://m.media-amazon.com/images/M/MV5B...jpg`) no campo de entrada.
2. Ao clicar em **"Adicionar Filme"**, a função `adicionarFilme()` é acionada.
3. O JavaScript captura o valor do campo, cria uma tag `<img>` com esse link e adiciona ao elemento `#listaFilmes`.
4. O campo de entrada é limpo automaticamente.

