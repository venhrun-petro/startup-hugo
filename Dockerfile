#### Build Static ####
FROM kfeofantov/bootstrap-gulp-jquery:latest as static-builder
MAINTAINER Konstantin Feofantov <kfeofantov@gmail.com>

WORKDIR /site
COPY . .

RUN node node_modules/gulp/bin/gulp.js build

#### Build WEB ####
FROM dettmering/hugo-build:0.40 as web-builder

COPY --from=static-builder /site /site
WORKDIR /site

RUN /usr/bin/hugo

#### Run Server ####
FROM nginx:1.12

ARG LANG=ru

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=web-builder /site/public/$LANG/ /usr/share/nginx/html/
