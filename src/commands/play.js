const socket = require("../socket");
const { Command, flags } = require("@oclif/command");

class PlayCommand extends Command {
  async run() {
    const { flags } = this.parse(PlayCommand);
    const value = flags.value;
    if (value) {
      this.log(`Play Youtube: ${value}`);
      socket.send({
        actionType: "play",
        clientType: "slave",
        value
      });
    } else {
    }
  }
}

PlayCommand.description = `Play Youtube Video with ID
😘  >> How to Use <<
  $ watube play -v 5vheNbQlsyU
`;

PlayCommand.flags = {
  value: flags.string({ char: "v", description: "Youtube ID" })
};

module.exports = PlayCommand;
