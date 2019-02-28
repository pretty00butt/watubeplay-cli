require("dotenv").config();

const { WS_HOST, WS_PORT } = process.env;

module.exports = {
  socket: {
    host: WS_HOST,
    port: WS_PORT
  }
};
