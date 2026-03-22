# Remove Background 

Aplicação web para remover fundo de imagens usando a API do Remove.bg.

## Como usar

1. Instale as dependências: `npm install`
2. Inicie o servidor: `npm start`
3. Abra o navegador em `http://localhost:3001`
4. Selecione uma imagem e clique em "Remover Fundo"
5. A imagem processada será exibida e disponível para download

## Configuração

- Edite `configs/config.js` com sua API key válida do Remove.bg
- A API key atual é de exemplo e pode não funcionar

## Estrutura do Projeto

- `public/`: Arquivos estáticos (HTML, CSS, JS)
- `src/`: Código fonte do servidor
- `configs/`: Configurações (API key)
- `assets/`: Imagens de exemplo

## Dependências

- Express: Servidor web
- Multer: Upload de arquivos
- Node-fetch: Para requisições HTTP