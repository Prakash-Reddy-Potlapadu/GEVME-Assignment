#base image (os,node)
FROM node:alpine   

#working directory
WORKDIR 'F:/GEVME UI Assignmenet Docker Image'

#copying application
COPY ./ ./

#Resolving dependencies
RUN npm install

#default command to start app
CMD ['npm','start']