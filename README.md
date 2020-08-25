# Teste técnico para Nave.rs
Projeto realizado para empresa Nave.rs com objetivo de construir uma aplicação consumindo APIs reais, visando comprovar e mostrar meu nivel técnico para vaga que estou aplicando.


## Tecnologias usadas neste projeto
* React
* Typescript

### Pacotes usados no projeto
* Icomoon
* React router
* Babel
* Styled-components
* Css
* Axios
* Eslint
* Husky

### Sobre o projeto
Projeto foi criado e projetado utilizando atomic design como pattern de desenvolvimento principal em seus components.
Em sua source possui além da pasta de components outras pastas que possuem como objetivo isolar cada parte do projeto para que qualquer alteração seja facil. Todos os components tem suas interfaces de props e todos os serviço da api possuem as suas respectivamente por tanto qualquer alteração que tenha que ser feita tantos nos components quanto nos serviços não irão causar nenhuma anomalia pois estão seguindo os padrões de solid em sua  construção. Como Intermediário de comunicação entre os components eu optei por fazer um simples Eventbus pois creio que seria a solução mais ideal no momento já que se trata de um projeto bem simples.

### Entendendo sua estruturação 

```
├── App.tsx
├── Router
│   ├── index.tsx *******Configuração de rotas e uso de midlewares
│   └── midleware
│       └── routeControl.tsx
│       └── *******Todo midleware que o projeto precisa fica aqui, exemplo acima do routeControl usado para authenticar o user
├── _docs
│   └── selection.json
│   └──  *******Todos documentos do projetos, como por exemplo os icons do icomoon no selection.json acima
├── api
│   ├── index.ts *******Arquivo de configuração do axios(exporta a mesma instância(APIService) para todos os serviços)
│   └── services
│       ├── *******Serviços que utilizam a APIService para suas requests
├── assets
│   └── fonts
│       ├── *******Fontes
├── components
│   ├── *******Atomic design pattern
├── constants
│   ├── path.ts
│   └── theme.ts
│   └── ******* Todas as consts do projeto como cores, temas e paths devem ficar assim
├── css
│   ├── Icons
│   │   └── index.css
│   └── ResetCss
│       └── index.css
│        └── *******Se você está se perguntando porque temos css no projeto se estamos usando styled-component, o motivo é simples, toda hora temos que implementar um novo icone então a maneira mais facil é apenas usar o que o icomoon já nos da de resultado. Mesmo caso no resetCss
├── index.tsx
├── interfaces
│   ├── IAPIServcice.interface.ts
│   ├──******* Obecendo o COP (close, open principle) todos arquivos possuem sua interface que ficam aqui.
├── modules
│   ├── ReactInputMask.d.ts
│   ├── *******Declaração de modules pro typescript entender alguns imports como o que imagens.

└── utils
    ├── DateUtils.ts
    ├── *******Utils para o projeto
``` 


# Scripts

## npm start
Inicia ambiente de desenvolvimento

## npm run lint
Verifica erros de prettier, types e de construção de componentes (roda antes de cada commit).

## npm run lint:fix
Verifica erros de prettier, types e de construção de componentes, já corrigi os que podem ser fixados automaticamente .

## npm run test
Roda todos os tests do projeto.

## npm run build
Gera versão de produção do projeto.



