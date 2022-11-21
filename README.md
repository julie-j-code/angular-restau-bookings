# AngularRestaurant

This project was generated with [Angular CLI](https://github.com/angular/angular-cli)

# Additionals info for memo

ng generate @angular/material:dashboard <component-name>
ng generate @angular/material:dashboard --name=main-dash
qui est un component avec un tableau d'objets qui utilise côté rendu un mat-list-grid et une directive structurelle pour itérer dans le tableau
ng generate @angular/material:table <component-name>
ng generate @angular/material:table --name=dish-table
qui est un component plus complexe puisqu'il a besoin d'un dataSource fortement typé via une interface

## Additional install for ghpages

npm install angular-cli-ghpages --save-dev
ng build --prod --base-href "https://julie-j-code.github.io/angular-restau-bookings" 
npx angular-cli-ghpages --dir=dist/restaurangular\wamp\restaurangular>



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## For transforming your application to PWA

`ng add @angular/pwa@0.6.8`
It will install a manifest.json + ngsw-config.json

run : `ng build --prod`
It will create files under dist/angular-pwa folder.

A PWA only runs on https and localhost environment. The Angular CLI is limited because the service worker do not work with the ng serve command. You have to create a build and host it separately, perhaps using http-server !!!! 

To see a PWA in action, follow the below steps.

Navigate to that folder using cd dist/restaurangular
Run http-server command (npm i -g http-server)
Open
We can create a script to shorten this process. Open a terminal and run npm run start-pwa command.

"start-pwa": "ng build --prod && http-server -p 8080 -c-1 dist/restaurangular"
