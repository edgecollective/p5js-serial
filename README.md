# p5js-serial

## Overview

This code (based on the NYU ITP tutorial [here](https://itp.nyu.edu/physcomp/labs/labs-serial-communication/lab-arduino-and-p5js-using-a-raspberry-pi/)) allows p5js to talk to microcontroller hardware via the serial port. 

The basic setup assumed here is:  
- you are running this code on a laptop or e.g. a Raspberry Pi 
- you have an Arduino or similar microcontroller that is plugged into USB
- that microcontroller is sending a single ASCII integer followed by a return character, e.g. '42\n'
- you know the name of the 'port' on which that microcontroller is connected, e.g. '/dev/ttyACM0' or '/dev/ttyUSB0'

This setup requires running NodeJS version 6 (and not higher), so we'll be using Node Version Manager (NVM) to install that (covered below).

It will additionally require installing and running 'p5.serialserver', a NodeJS server that listens to the serialport and passes along any information via a websocket (covered below).   

## Install NVM

Install the latest version of [nvm](https://github.com/nvm-sh/nvm), using the instructions [here](https://github.com/nvm-sh/nvm#installation-and-update). 

As of May 2019, an easy way to do this is to use 'curl':

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
``` 

## Use NVM to install Node 6

```
nvm install 6
nvm use 6
```

## Install p5.serialserver

```
npm install -g p5.serialserver --unsafe-perm --build-from-source
```

## Run p5serial

You'll need to run p5serial in a separate process.  Open a new terminal window and type:
 
```
p5serial
```

and hit return.  You should see a message indicating that p5serial is running.

## Modify sketch.js to include your serialport name

You'll need to modify line #2 of 'sketch.js' to reflect the name of the serialport to which your microcontroller is connected:

```
var portName = '/dev/ttyUSB0';  // fill in your serial port name here
```

## Run SimpleHTTPServer

You also need to start a Python server for your web page.  Open a new terminal window and type:

```
python -m SimpleHTTPServer 8080
```

## Open webpage in browser 

Using Chrome, Firefox, or equivalent, open your browser to 'localhost:8080'

You should see a vertical bar with a dot, where the position of the graphic reflects the integers being sent to the serialport by your microcontroller.

