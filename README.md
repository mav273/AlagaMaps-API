# Servidor_PI


# AlagaMaps

- O Alagamaps é um app de monitoramento de pontos de alagamento com cluster de mapas e função de login. Pensando naqueles que precisam transitar pelas cidades em dias de fortes chuvas ou aqueles que enfrentam trânsito e precisam reportar locais alagados. 


## Features

- Faça um reporte de local alagado
- Consulte pontos de alagamento
- Poste fotos do local alagado desejado
- Ligue para contatos úteis
- Entre com ou sem login 

## Tecnologias Utilizadas

- nodeJS - 18.12.1
- express - 4.18.12


## Métodos
-Requisições para a API devem seguir os padrões: 

| Método | Descrição |
| --- | --- |
| `GET` | Lista pontos  |
| `POST` | Posta pontos ou entra na conta do user |

## Resposta

|Categoria | Método | Descrição |
| --- | --- | --- |
|PONTOS| `GET` | Mostra os pontos de alagamento em conjunto |
|PONTOS| `GET` | Mostra os pontos de alagamento separados |
|PONTOS| `POST` | Cria um ponto de alagamento com a coordenada marcada |
|USUÁRIO| `POST` | Cria um usuário |
|USUÁRIO| `POST` | Entra na conta do usuário por login|

## Rotas

- Endpoint URL: https://servidor-alagamaps.vercel.app/

|Categoria | Método | Descrição |
| --- | --- | --- |
|PONTOS| `GET` | /api/pontos/todos |
|PONTOS| `GET` | /api/pontos/todosSeparados |
|PONTOS| `POST` | /api/pontos/criar |
|USUÁRIO| `POST` | /api/usuarios/checar |
|USUÁRIO| `POST` |/api/usuarios/criar |
