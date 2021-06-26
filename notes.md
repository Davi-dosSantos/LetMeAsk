# NLW¨6




## Regras de autorização do firebase 

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

Hosting URL: https://letmeask-4781b.web.app

### Desafios adiconais a serem feitos:
 [] modo escuro
 [] Otimização da escuta de atualização do firebase para novas perguntas
 [] Refatoração do código css e organização de pastas/arquivos
 [] Autenticações alternativas
 [] implementação REact modal ( telas de confirmações ...etc)
 [x] ordenação perguta por numero de likes
 
 
 
 []Responsividade
 []Tema dark
 []versão PWA
 []Outros bancos de dados {supabase ou firestore}
 []Styled Components
 []ESLint, Prettier
 []Readme Top