const socket = require("../socket");
const { Command, flags } = require("@oclif/command");

class StopCommand extends Command {
  async run() {
    this.log("Stop Youtube");
    socket.send({
      actionType: "stop",
      clientType: "slave"
    });
  }
}

StopCommand.description = `Stop Current Video
😘  >> How to Use <<
  $ watube stop
`;

StopCommand.flags = {};

module.exports = StopCommand;
