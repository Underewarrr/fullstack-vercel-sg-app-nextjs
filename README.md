### Health Status
...
### Vercel
- As funções [Serverless](https://vercel.com/docs/concepts/functions/serverless-functions) permitem que os desenvolvedores escrevam funções em JavaScript e outras linguagens para lidar com autenticação de usuário, envios de formulários, consultas de banco de dados  e muito mais.

![image](https://github.com/thetibiaking/pxa-fullstack-nextjs-serverless/assets/74227915/43f3fcaf-2fbb-4983-a4c7-855e92f4d8af)

- Logs nas funções Serverless.
![image](https://github.com/thetibiaking/pxa-fullstack-nextjs-serverless/assets/74227915/f1c2f9a7-6f8f-415f-bb94-673fa762c7cd)

### NextJS
- Seguindo o padrão da documentação da [vercel + nextjs](https://vercel.com/docs/frameworks/nextjs), você pode entender melhor sobre a organização das rotas da api ou paginas.


#### Front-end Routes :
##### OBS : Para as rotas e as requisições a pasta pages não será incluida a rota final sendo : /user/pagename.

`/pages/user/pagename`
- OBS: Observe que nesse exemplo teriamos um arquivo pagename.ts

- OBS: Se o nome do arquivo/pagina for index.ts então será carregado com o nome da pasta do arquivo exemplo :
`/pages/user/login`
- OBS: Observe que nesse caso teriamos um arquivo index.ts

#### Back-end Routes :
##### OBS : Para as rotas e as requisições a pasta pages não será incluida a rota final sendo : /api/user/pagename.

`/pages/api/user/pagename`
- OBS: Observe que nesse exemplo teriamos um arquivo pagename.ts

- OBS: Se o nome do arquivo/pagina for index.ts então será carregado com o nome da pasta do arquivo exemplo :
`/pages/api/user/login`
- OBS: Observe que nesse caso teriamos um arquivo index.ts

## Como rodar
### (Vercel-Pro-Way)
Fork o respositorio, entre no site da [vercel](https://vercel.com/) e importe o projeto, pronto agora é só esperar a vervel criar o dominio e colocar o app online!


O sistema de proteção de rotas funciona com uma hoc [(High Order Component)](https://github.com/thetibiaking/pxa-fullstack-nextjs-serverless/blob/main/pages/hoc/withAuth.tsx), como esse component é recarregado apenas nas rotas que o usuario tem permissão então algumas verificações e dados podem ser salvos e usados nesse component quando necessario!
Para proteger uma rota inicie o component `<ProtectedRoute />`

#### OBS : Ainda esta faltando configurar corretamente o middleware do Jsonwebtoken.

#### 

# Ferramentas
## Front-End
### Frameworks
- React 
- Bootstrap
### JustLibs
- jsonWebToken
- mdb-react-ui-kit
- axios
- react-dom
## Back-End
### Frameworks
- NextJS
### SDK's
- MercadoPago
### JustLibs
- Sequelize
- Mysql2
### Languages
Typescript, Javascript

# Configuração de ORM (Database)
 - [x] [User](https://github.com/Underewarrr/fullstack-vercel-sg-app-nextjs/blob/master/database/models/User.ts)
## Rotas Front-End
- /user
  - /login
  - /register
  - /panel
    - /instagram
      - /list
  - /balance
    - /add
## Rotas Back-end
- /api
  - /user
    - /login
    - /register
    - /balance
      - /add
