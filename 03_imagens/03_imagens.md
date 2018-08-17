% Introdução aos containers Docker
% Igor Neves Faustino

# Imagens

- Imagens são feitas de aplicativos binarios, dependencias e metadatas
- Não contem um OS completo
    - Sem Kernel ou outros modulos
    - Versão mais limpa possivel
- Geralmente criada por um `Dockerfile`
- Não persiste dados normalmente

# Docker Hub

- Github para containers
- Como achar boas imagens no site?

# Camadas de uma imagem

- Cada camada de uma imagem é apenas salva uma unica vez no computador
    - Salva espaço
- Um container é apenas uma camada de I/O no topo de uma imagem
- Cada camada representa uma linha no Dockerfile

# Dockerfile

``` Dockerfile
    FROM (imagem basica)
    ENV (variaveis de ambiente)
    RUN (comando shell)
    EXPOSE (abre uma porta do container)
    CMD (comando para executar quando o container é iniciado)
```

# Tags

- Referenciar imagens
- Padrão do docker hub:

`Usuario/Repositorio:versão`

- Comando: `docker image tag`

# Subindo imagens para o Docker Hub

- Semelhante ao github
- Comando: `docker login`
- Comando: `docker push IMAGE`

# Exercicio 01

- Crie uma imagem do seguinte repositorio: [text-adventure-swift](https://github.com/igornfaustino/text-adventure-swift)
- Imagem: swift:4
- copiar todos os arquivos do repositorio para a imagem
- executar o comando `swift run` quando um container for executado

# Exercicio 02

- Crie uma imagem do seguinte repositorio: [tamagotchi-web](https://github.com/igornfaustino/tamagotchi-web)
- Imagem: ubuntu:latest
- Atualize o sistema: `apt update && apt upgrade -y`
- Instale o ruby: `apt install ruby-full`
- Copie os arquivos do repositorio para dentro da imagem
- instale o bundle: `gen install bundle`
- instale as dependencias do sistema: `bundle install`
- execute o sistema: `rakeup --host 0.0.0.0 -p 80`