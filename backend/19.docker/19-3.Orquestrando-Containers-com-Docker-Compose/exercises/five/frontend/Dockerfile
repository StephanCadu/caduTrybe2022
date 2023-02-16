FROM node:alpine AS development

WORKDIR /usr/app

COPY ./package*.json .
COPY . .

RUN npm i

# esse comando NÃO define a porta que rodará no container, quem faz isso é a tag -p
# ele serve apenas para comunicação entre quem cria o Dockerfile e quem roda o container
EXPOSE 8080

ENTRYPOINT ["npm", "start"]

# define o responsável por criar a imagem
LABEL manteiner="Carlos Eduardo Stephan <cdauk@hotmail.com>"