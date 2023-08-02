const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "author",
  Description: "",
  execute(message, args, Discord, client) {
      message.delete();

      const authorEmbed = new EmbedBuilder()
        .setColor('#5e0be0')
        .setDescription('The author of this bot is <@890576956054188083>. If you have any ideas dm him. If you have any issues with me dm him. This will have more info in future updates.')

        message.channel.send({ embeds: [authorEmbed] });

     

     
     
  }
};