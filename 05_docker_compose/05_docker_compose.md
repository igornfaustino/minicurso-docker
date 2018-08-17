% Introdução aos containers Docker
% Igor Neves Faustino

# Docker Compose

- Ferramenta CLI para auxiliar a criação de containers
- Simplifica as opçoes do `docker container run`
- Não é recomendado para ambientes de produção

# Comandos Principais

- `docker-compose up`
    - Inicia todos os containers, cria networks e volumes
- `docker-compose down`
    - remove todos os containers, networks e volumes

# Vantagem!!

``` bash
git clone github.com/algum/software
docker-compose up
```

# Exercicio 1

- Criar um docker-compose.yml para o tamagotchi em ruby
- Deverá ser usada a imagem feita anteriormente e a imagem oficial do `mongo`
- O jogo deverá rodar na porta `80`