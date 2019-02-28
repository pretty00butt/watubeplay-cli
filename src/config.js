require("dotenv").config();

const { WATUBE_WS_HOST, WATUBE_WS_PORT } = process.env;

module.exports = {
  socket: {
    host: WATUBE_WS_HOST,
    port: WATUBE_WS_PORT
  }
};
