const WebSocket = require("ws");
const config = require("./config");

function connect() {
  return new WebSocket(`ws://${config.socket.host}:${config.socket.port}`);
}

function send(data) {
  const ws = connect();
  ws.on("open", () => {
    ws.send(stringify(data));
    ws.close();
  });
}

function stringify(data) {
  return JSON.stringify(data);
}

module.exports = {
  send
};
