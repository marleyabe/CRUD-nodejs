# Começo
- organizar pastas em um estrutura
```
project
│   README.md
│   package.json
└─── src
│   │   server.js
│   └───config
│       │   database.js
│       │   sequelize.js
│   └───models
│       │   index.js
│       │   model.js
│   └───routes
│       │   model.routes.js
```
# Primeiras urls
- Em server.js temos a url padrão da api e qual porta nossa aplicação vai rodar e as conexões com outras rotas, exemplo:
    ```
    // rotas de todo
    app.use(todosRoutes)
    
    // rota padrão
    app.get("/api", (request, response) => {
    return response.json("up")
    })
    ```
- O express faz as conexões da url acessada com o código pelo request e response

# Model Routes
- Todas as urls são feitas dentro de model.routes.js. Aqui o CRUD é feito e as ações que o express e sequelize tem que tomar com base nas necessidades de cada requisição.

# Configurar banco
- nas pasta config temos os arquivos de configuração de banco
- onde database.js é onde as chaves de acesso ao banco e sequelize.js faz o backend se conectar o banco de dados
- em server.js inicializamos o banco de dados:
    ``` 
    sequelize.sync().then(() => {
        console.log('db funcionando')
    })
    ```