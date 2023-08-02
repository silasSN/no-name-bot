const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'spff',
    description: '',
    async execute(message, args) {
        message.delete();

        let spffChannel = message.mentions.channels.first();
        let spffDescription = args.slice(2).join(' ');
        let messageType = args[1]
        
        const jack = '782692744380022794';
        const silas = '890576956054188083';
        const abby = '1013581916852715541' // In case Jack wants to add to accepted list of users for command.

        if(message.author.id == jack || message.author.id == silas) {
           if(!spffChannel) return message.channel.send('Please enter a channel.').then((msg) => {setTimeout(() => msg.delete(), 2000);}).catch();
           if(!messageType) return message.channel.send('Please enter a message type, "text" or "embed".').then((msg) => {setTimeout(() => msg.delete(), 2000);}).catch();
           if(!spffDescription) return message.channel.send('Please enter something you want me to send.').then((msg) => {setTimeout(() => msg.delete(), 2000);}).catch();
           if(messageType == 'text'){
            await spffChannel.send(spffDescription);
           }else if(messageType == 'embed'){
                const spffEmbed = new EmbedBuilder()
                .setDescription(`${spffDescription}`)
                .setColor('Random')
                await spffChannel.send({ embeds: [spffEmbed] });
           } else return message.channel.send('Please enter a valid message type.').then((msg) => {setTimeout(() => msg.delete(), 2000);}).catch();
        } else {
            message.channel.send('This command is under dev, do not use this command.').then((msg) => {setTimeout(() => msg.delete(), 2000);}).catch();
        }
        

        
       //await spffChannel.send(pollDescription);
        
       
    }
}