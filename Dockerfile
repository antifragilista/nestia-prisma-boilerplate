# Todo: cleanup

###################
# Install dependencies
###################

FROM node:18 As dependencies

USER node

WORKDIR /home/node

COPY --chown=node:node package*.json ./
COPY --chown=node:node prisma/ ./prisma/
#COPY --chown=node:node src/database/prisma ./prisma/

RUN npm ci && npm cache clean --force

COPY --chown=node:node . .

###################
# Build for local development
###################

FROM node:18-alpine As build-local

USER node

WORKDIR /home/node

COPY --chown=node:node --from=dependencies /home/node/package*.json ./
COPY --chown=node:node --from=dependencies /home/node/node_modules ./node_modules

RUN npm ci && npm cache clean --force

RUN npm run prisma-gen:local

RUN npm run build

COPY --chown=node:node . .


###################
# Run local development
###################

FROM node:18-alpine As local

USER node

WORKDIR /home/node

COPY --chown=node:node --from=build-local /home/node/node_modules ./node_modules
COPY --chown=node:node --from=build-local /home/node/dist ./dist

#CMD [ "node", "./dist/main.js" ]



#COPY --chown=node:node . .

##RUN npm run prisma-gen:local
##
##RUN npm run build

#RUN npm run prisma-gen:local

####################
## BUILD FOR LOCAL DEVELOPMENT
####################
#
#FROM node:18 as dev-local
#
#USER node
#
#WORKDIR /home/node
#
#COPY --chown=node:node package*.json ./
#
#
#
##COPY --chown=node:node  ./scripts/wait-for-it.sh /home/node/wait-for-it.sh
#
#
##RUN npm ci && npm cache clean --force
#
#RUN npm install
#
#COPY --chown=node:node . .
#
#ENV NODE_ENV local
#
#RUN npm run prisma-gen:local
#
#RUN npm run build
#
##RUN chmod +x /home/node/wait-for-it.sh
#
#
##CMD [ "node", "./dist/main.js" ]
#
#####################
### BUILD FOR Local Development
#####################
##
##FROM node:18-alpine As build-local
##
##USER node
##
##WORKDIR /home/node
##
##COPY --chown=node:node package*.json ./
##
###COPY --chown=node:node --from=development /home/node/node_modules ./node_modules
##
##COPY --chown=node:node . .
##
##RUN npm install
##
##RUN npm run prisma-gen:local
##
##RUN npm run build
##
##
##RUN #npm ci && npm cache clean --force
##
##
##
#####################
### BUILD FOR PRODUCTION
#####################
##
##FROM node:18-alpine As build
##
##USER node
##
##WORKDIR /home/node
##
##COPY --chown=node:node package*.json ./
##
##COPY --chown=node:node --from=development /home/node/node_modules ./node_modules
##
##COPY --chown=node:node . .
##
##RUN npm run prisma-gen:local
##
##RUN npm run build
##
##
##RUN npm ci && npm cache clean --force
##
##
##
#####################
### Local Development
#####################
##
##FROM node:18-alpine As local
##
##USER node
##
##WORKDIR /home/node
##
##COPY --chown=node:node --from=build-local /home/node/node_modules ./node_modules
##COPY --chown=node:node --from=build-local /home/node/dist ./dist
##
##ENV NODE_ENV local
##
##CMD [ "node", "./dist/main.js" ]
##
##
##
##
##
#####################
### PRODUCTION
#####################
##
##FROM node:18-alpine As production
##
##USER node
##
##WORKDIR /home/node
##
##COPY --chown=node:node --from=build /home/node/node_modules ./node_modules
##COPY --chown=node:node --from=build /home/node/dist ./dist
##
##ENV NODE_ENV production
##
##CMD [ "node", "./dist/main.js" ]
##
##
