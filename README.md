# Ckeditor Angular Example

A very small example project which shows how you can use Ck editor with Angular version 13.3.0.

![image](https://user-images.githubusercontent.com/25041735/159127909-adaab7c8-af6c-4dfb-81f1-7a0f24dab118.png)

See a live deployment here:
https://jake-thomas-hall.github.io/ckeditor-angular-example/

Has `@ckeditor/ckeditor5-build-classic` installed, if you want to use a different one of the predefined builds follow ckeditor's guides, see [here](https://ckeditor.com/docs/ckeditor5/latest/installation/advanced/alternative-setups/predefined-builds.html).

Note that this also has `@types/ckeditor__ckeditor5-build-classic` installed. This **is not** an official npm package from Ck Editor, this is from the [Definitely typed project](https://github.com/DefinitelyTyped/DefinitelyTyped), which is a project aiming to provide typescript typings to projects that do not yet feature them. If you are looking at this in the future, and Ck Editor has now included typings, then remove this package.

You do not necessarily *need* typings, however, they make life much easier by providing intellisense.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0

## Development server

Run `ng serve --open` for a dev server, and open automatically.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
