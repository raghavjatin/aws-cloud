#FROM node:lts-buster
# Install node dependencies and sync folders

FROM node:14.15.3-buster as build
COPY . /var/app/aws-cloud

WORKDIR /var/app/aws-cloud
RUN npm install