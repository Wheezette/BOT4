const Command = require("../base/Command.js");

class MyLevel extends Command {
  constructor(client) {
    super(client, {
      name: "mylevel",
      description: "Wyświetli twój poziom uprawnień na tym serwerze.",
      usage: "mylevel",
      guildOnly: true
    });
  }

  async run(message, args, level) {
    const friendly = this.client.config.permLevels.find(l => l.level === level).name;
    message.channel.send(`Twój poziom uprawnień to: **${friendly}** (**${level}**)`);
  }
}

module.exports = MyLevel;