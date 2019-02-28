const socket = require("../socket");
const { Command, flags } = require("@oclif/command");

class PauseCommand extends Command {
  async run() {
    this.log("Pause Youtube");
    socket.send({
      actionType: "pause",
      clientType: "slave"
    });
  }
}

PauseCommand.description = `Pause Current Video
😘  >> How to Use <<
  $ watube pause
`;

PauseCommand.flags = {};

module.exports = PauseCommand;
