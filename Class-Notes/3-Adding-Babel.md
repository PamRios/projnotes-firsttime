# Introduction

Let's start by giving a quick definition of what and how Babel works.

Babel, as defined on its [web site]( https://babeljs.io/docs/) is a toolchain that allows transpiling code, and transpiling in a technical way can be defined as converting one higher level language to another higher level language. What Babel does is that it transpiles or converts code written in the current JavaScript language to a version of the language that is understood by less up to date browsers, this allows you as a developer to use the best features of the language in its latest version without worrying if it will be understood and executed by a browser.

# Results

The process to install Babel is as follows

From the terminal (console) run the following commands

- npm i -D D @babel/core @babel/cli@7.21.0

- npm i -D @babel/preset-env@7.20.2

Although Babel is a powerful tool, it is also a bit slow, so we install babel Watch, which will prevent all its deps from loading every time we start or re-run the project, the following line of code will help with this

- npm i babel-watch@7.7.2

In this Project we use plugins like minify that what it does is to compact the code, to configure it is necessary to create a modification file where the presets of each plugin will be added, this is seen later in the [file number 6]( https://github.com/PamRios/projnotes-firsttime/blob/main/Class-Notes/6-Babel-plugins.md)

# Bibliography

1. [Transpilation]( https://dev.to/kealanparr/compiling-vs-transpiling-3h9i)

2. [Babel Watch](https://www.npmjs.com/package/babel-watch)