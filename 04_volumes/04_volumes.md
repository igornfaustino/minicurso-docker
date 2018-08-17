% Introdução aos containers Docker
% Igor Neves Faustino

# Volumes: Persistencia de dados

- `Volume` no Dockerfile
- Indica qual parte do container será salvo de forma externa
- Volumes possuem um ID, mas podem receber nomes para facil identificação

- Comandos para gerenciar Volumes
    - `docker volume <sub-comando>`

- Comandos para volume em containers (Associar um nome)
    - `docker run ... -v <name>:/path/in/container ....`


# Bind mount

- Associa um diretorio local a um diretorio dentro do container
    - Utilizado quando arquivos dentro de um container podem mudar
    - Exemplo: Codigo em desenvolvimento

- Comandos
    - `docker run ... -v /path/user:/path/container`
    - O docker se vira para saber o que é um nome e o que é um caminho

# Exercicio 1

- Executar a imagem `postgres:9.6.1` com o volume chamado `postgres-data`
- Executar a imagem `postgres:9.6.2` com o mesmo volume
- Olhar os logs de cada container

# Exercicio 2

- Executar a imagem `igornfaustino/static-web-server`
    - `docker container run -d -p 80:80 -v $(pwd):/site igornfaustino/static-web-server`
- Editar o arquivo `index.html` e verificar as modificações no `http://localhost`