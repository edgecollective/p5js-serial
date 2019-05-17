# p5js-serial

## Overview

This code allows p5js to talk to microcontroller hardware via the serial port. 

The basic setup assumed here is:  
- you are running this code on a laptop or e.g. a Raspberry Pi 
- you have an Arduino or similar microcontroller that is plugged into USB
- that microcontroller is sending a single ASCII integer followed by a return character, e.g. '42\n'
- you know the name of the 'port' on which that microcontroller is connected, e.g. '/dev/ttyACM0' or '/dev/ttyUSB0'

This setup requires running NodeJS version 6 (and not higher), so we'll be using Node Version Manager (NVM) to install that (covered below).

It will additionally require installing and running 'p5.serialserver', a NodeJS server that listens to the serialport and passes along any information via a websocket (covered below).   

## Install NVM

## Install Node 6

## Install p5.serialserver

npm install -g p5.serialserver --unsafe-perm --build-from-source

## Run p5.serialserver

## Run SimpleHTTPServer

## Open webpage in browser 


