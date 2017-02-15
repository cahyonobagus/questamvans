# QuesTamvans
A simple QA web app built with NodeJS, ExpressJS, MongoDB, and VueJS.

## Current Status
Still in a very early development phase.

## Packages dependencies
```
{
  "name": "questamvans",
  "version": "0.0.1",
  "private": false,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.1",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "dotenv": "^4.0.0",
    "express": "~4.13.4",
    "express-jwt": "^5.1.0",
    "mongoose": "^4.8.2",
    "morgan": "~1.7.0",
    "passport": "^0.3.2",
    "passport-local": "^1.0.0",
    "passport-local-mongoose": "^4.0.0",
    "serve-favicon": "~2.3.0"
  }
}
```
### File & Directory Structures
```
.
├── README.md
├── app.js
├── bin
│   └── www
├── package.json
└── routes
    ├── index.js
    └── users.js
```
## Installation and running
All you need to do is clone this repository into your machine, rename ```template-env``` file to ```.env```. Fill all your credentials neede in that file.

Then execute ```npm i``` command on your terminal, it will automatically install all of the dependencies of this app.

You can run this app by simply execute ```npm start``` command, and access this app on [http://localhost:3000](http://localhost:3000).

## API routes
You can view lists of API Routes of this app by running this app, and accessing [http://localhost:3000](http://localhost:3000), it will send JSON file that contains the information about this app's API endpoints along with it's method.

## The MIT License (MIT)
Copyright © 2017 Septian Adhi Tama

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
