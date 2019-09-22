
let hostname = '192.168.1.106';
let port = 8081;
//"wss://192.168.0.106:8081/mqtt"
// Create client instance
// version 1.0.3: let client = new Paho.MQTT.Client()
// version 1.1.0: let client = new Paho.Client()
let client = new Paho.Client(hostname, port, "clientJs");

console.log(client.path);

// define callback method
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect client
// connect(options)
// options is in object notation

const options = {
  userName: "username",
  password: "password",
  useSSL: true, // cert must be first accepted via browser on https://address:port/ 
  onSuccess: onConnect,
  onFailure: onConnectFail
}

console.log("connecting..");
client.connect(options)

client.onMessageArrived = onMessageArrived;
client.onConnected = onConnected // call after successful connection with server



// Callback method
function onConnectionLost(responseObject){
  console.log(responseObject);
  if (responseObject.errorCode !== 0){
    console.log("onConnectionLost: " + responseObject.errorMessage);
  }
}

function onConnectFail(responseObject){
  console.log(responseObject)
  switch(responseObject.errorCode) {
    case 7:
      console.log("Error Code " + responseObject.errorCode + ": Certificate Error.");
      break;
    case 8:
      console.log("Error Code " + responseObject.errorCode + ": Credentials Error.");
      break;
  }
}

function onConnected(reconnect, uri){
  console.log(reconnect);
  // calling invalid variable seems to disconnect and give error code 5
  console.log("connected to: " + uri);
  
}

let subscribeOpts = {
  qos: 1,
  onSuccess:onSubscribedSuccess,
}

function onConnect(response){
  console.log('onConnect:');
  // console.log(response); // empty object, it actually pass nothing
  client.subscribe('#', subscribeOpts);
  client.subscribe('$device/#', subscribeOpts);
  client.subscribe('$SYS/broker/clients/connected', subscribeOpts);
  client.subscribe('$SYS/broker/clients/#', subscribeOpts);
}



function onSubscribedSuccess(response){
  // not much we can do with this
}

function onMessageArrived(message){
  console.log("onMessageArrived: ");
  console.log(message.topic + " " + message.payloadString);
  //console.log(message)

  // this is workaround to filter message by topic
  // switch(message.topic){
  //   case "$SYS/broker/clients/connected":
  //     onConnectedStatus(message)
  // }


  function onConnectedStatus(message){
    console.log(message.topic + " " + message.payloadString);
  }

  /**
   * message or response property
   * - payloadString (string)
   * - topic (string)
   * - qos (number)
   * - payloadBytes
   * - retained (true/false)
   * - destinationName (seems same as topic)
   */
}