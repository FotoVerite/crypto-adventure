#!/usr/bin/env node

const workshopper = require('workshopper')
    , path        = require('path')

workshopper({
    name     : 'crypto-adventure'
  , title    : '=U2FsdGVkX1+21O5RB08bavFTq7Yq'
  , subtitle : "My hat is awesome now that you can't read it"
  , appDir   : __dirname
  , menu     : {
        bg : 'magenta'
    }
  , helpFile : path.join(__dirname, 'help.txt')
}).init()