#FROM node:lts-buster
#Build step, on a heavier linux version.

FROM node:14.15.3-buster as build
COPY . /var/app/aws-cloud

WORKDIR /var/app/aws-cloud
RUN npm install
RUN npm run build

#lighter server image
FROM node:14.15.3-alpine
WORKDIR /var/app/aws-cloud

#Copy package.json
COPY ./package*.json ./
#Copy prebuild dist
COPY --from=build /var/app/aws-cloud/dist ./dist
#Copy npm pacakges with prod flag
RUN npm install --production