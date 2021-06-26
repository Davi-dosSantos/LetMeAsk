<p align="center">
  <img alt="Letmeask" src=".github/logo.svg" width="160px">
</p>

<h1 align="center">
    <img alt="Letmeask" src=".github/cover.svg" />
</h1>

<br>

## 🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)
- [Firebase](https://firebase.google.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Executando

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone https://github.com/Davi-dosSantos/LetMeAsk
```

Para iniciá-lo, siga os passos abaixo:
```bash
$ yarn
# Instala as dependências

$ yarn start
# Inicia o projeto e abre o projeto em seu navegador no endereço http://localhost:3000
```
Será também necessario criar uma conta [Firebase](https://firebase.google.com/) e um projeto para poder usar o Realtime Database.

Foram usadas as seguintes regras no [Firebase](https://firebase.google.com/).
```json
{
  "rules": {
    "rooms": {
      ".read": false,
      ".write": "auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.uid)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.uid)",  
          }
        }
      }
    }
  }
}
```

## 💻 Projeto

  Este foi um projeto desenvolvido durante a **[Next Level Week Together](https://nextlevelweek.com/)**, apresentada dos dias 20 a 27 de Junho de 2021, durante o evento foi contruido grande parte da aplicação, mas muitas melhorias e funcionalidades ainda serão acrescentadas ao projeto 

  Hosting URL: https://letmeask-4781b.web.app

## 📝 License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com 💜 by Davi dos Santos Costa 

---

projeto em aprimoramento!
lista de implementações futuras: 

[] Otimização da escuta de atualização do firebase para novas perguntas
[] Refatoração do código css e organização de pastas/arquivos
[] Autenticações alternativas
[] implementação REact modal ( telas de confirmações ...etc)
[x] ordenação pergutas por numero de likes
[] Responsividade
[] Tema dark
[] versão PWA
[] Outros bancos de dados {supabase ou firestore} 
[] Styled Components
[] ESLint, Prettier
[] Readme Top
 