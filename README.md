# WS-Connection-Load-Tester

Version 0

# What Is It?

Test & measure concurrent websockets load.

# Requirements

* [Node](https://nodejs.org/en/)
* [Bower](http://bower.io/)
* [Angular](https://angularjs.org/)
* [Jade](http://jade-lang.com/)
* [Gulp](http://gulpjs.com/)

# Installation

If you would like to contribute to our project please fork
this repository or clone it down locally using the GitHub clone link
provided. All pull requests will be reviewed by our team and we'll reach
out to you if we'd like to incorporate your work. :)

# Quickstart

Once you have the repo in your local machine simply run the following commands (make sure you're using node version 6.9.2 or later):

* run `nvm use 8.5.0` if necessary.
* run `npm install` to install the required dependencies and devdependencies.
* run `bower install` to install bower
* run `gulp serve` to launch a browser sync server on your source files
* run `gulp test` to run your unit tests with Karma in watch mode

# Development Server

Source code includes the awesome gulp-plugin BrowserSync as the development server.

This allows you to serve your web resources locally to be more reactive and be able to have features like automatic reload of your page when you make a modification.

# Live Reload Of Sources

When you launch your dev server with `gulp serve`, it will launch BrowserSync along with the file watching and pre-processing feature.

When gulp detects a change, it will send a reload command to Browser Sync. Depending on which files have changed (html/js or css) it will reload the whole page or just reload the css and keep your page context up.

# Developer User Guide

[A closer look at the features present in the source code for contributors](user-guide.md)
