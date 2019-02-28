const socket = require("../socket");
const { Command, flags } = require("@oclif/command");

class VolumeCommand extends Command {
  async run() {
    const { flags } = this.parse(VolumeCommand);
    const value = flags.value;
    if (value) {
      this.log(`Youtube Volume Control: ${value}`);
      socket.send({
        actionType: "volume",
        clientType: "slave",
        value
      });
    } else {
    }
  }
}

VolumeCommand.description = `Set Volume
😘  >> How to Use <<
  $ watube volume -v 0
  $ watube volume -v 50
  $ watube volume -v 100
`;

VolumeCommand.flags = {
  value: flags.string({ char: "v", description: "Volume Value" })
};

module.exports = VolumeCommand;
