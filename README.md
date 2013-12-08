# node-Trovebox client Example app

This is an example of how you can use my trovebox node.js client
https://github.com/endast/node-Trovebox

It's very basic, but should work as a starting point for people who want to play with trovebox 
and node but don't know where to start.


## Usage
    Download the and unzip files:
    https://github.com/endast/node-trovebox-example/archive/master.zip

    Install requirements

    cd node-trovebox-example-master && npm install

    Edit the oauth/host parameters in routes/index.js:
    // configure oauth
    var serveropts = {
        host: "http://photo.example.com",
        consumer_key: "consumer_key",
        consumer_secret: "consumer_secret",
        token: "token",
        token_secret: "token_secret"
    }

    node app.js

    surf to http://localhost:3000

    profit

## Versions

0.0.1 - First version
