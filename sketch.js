var serial;                             // variable to hold an instance of the serialport library
var portName = '/dev/ttyUSB0';  // fill in your serial port name here
var inData = 0;                         // for incoming serial data
var xPos = 0;                           // x position of the graph

function setup() {
  createCanvas(1000, 600);
  background(0x08, 0x16, 0x40);

  serial = new p5.SerialPort(document.location.hostname);       // make a new instance of the serialport library
  console.log(document.location.hostname);
  //serial = new p5.SerialPort('10.0.3.197');       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
}

function draw() {
   graphData(inData);
}

// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
    console.log(i + " " + portList[i]);
  }
}

function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}

function serialEvent() {
  // read a string from the serial port:
  var inString = serial.readStringUntil('\r\n');
  // check to see that there's actually a string there:
  if (inString.length > 0 ) {
  // convert it to a number:
  inData = Number(inString);
  console.log(inData);
  }
}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function graphData(newData) {
  // map the range of the input to the window height:
  background(0x08, 0x16, 0x40);
  
  var radius = 20;
  yPos=height*3/4;
  
  var xPos = map(newData, 0, 1023, 0, width);
  
  
  
  // draw the line in a pretty color:
  stroke(0xA8, 0xD9, 0xA7);
  line(xPos, height, xPos, height - yPos);
  
  // draw an ellipse
  //var radius = sqrt(random(pow(yPos / 2, 2)));
  fill(256,0,0);
  ellipse(xPos,height-yPos,radius);

}
