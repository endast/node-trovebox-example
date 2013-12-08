# Example usage for the node-Trovebox client

node-Trovebox is a node.js client library for Trovebox...

## Installation

    npm install trovebox 

## Usage
    Download the files:

    Install requierments

    cd trovebox-test && npm install

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

## Versions

0.0.1 - First version
