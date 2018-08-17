% Introdução aos containers Docker
% Igor Neves Faustino

# O que são containers?

- Pacotes leves contendo todo o necessario para a execução de uma determinada aplicação!

- O que pode ser colocado em um container?
	- Codigo
	- Softwares
	- Ferramentas de sistema
	- Bibliotecas
	- Configurações
	- etc...

- Containers isolam um software do que está a sua volta

# Containers Docker vs Maquinas Virtuais

## Maquinas Virtuais
- Sistemas Operacionais Completos Isolados

## Containers
- Bibliotecas de kernel em comum
- Recursos isolados

# Containers Docker vs Maquinas Virtuais

![Containers vs VM](./Images/container_vm.png){#id .class width=390}

# O que é Docker?

- Plataforma Open Source
- Escrito em GO
- Possibilita o empacotamento de aplicações ou ambiente de desenvolvimentos

# Vantagens de utilizar o Docker

- Facilidade para portar o sistema para um novo Host
- Evitar conflitos entre diferentes versões
- Facilidade para unificar um ambiente de desenvolvimento
- Baixo consumo de recursos
- "Boot" rapido
- É muito legal!!

# Instalando o Docker

[Documentação oficial da instalação](https://docs.docker.com/install/)

# Testando a versão do Docker

Comando : `$ docker version`

Verifica a versão do docker

# Referencias

- [Site Oficial Docker](https://www.docker.com/what-container)
- [Mundo Docker](https://www.mundodocker.com.br/o-que-e-docker/)