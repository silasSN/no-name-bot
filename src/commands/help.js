const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: 'help',
    discription: 'sends  lists of commands and info on commands',
    execute(message, args) {
        message.delete();
        const parm1 = args[0];
        
        const serverIcon = message.guild.iconURL();
        const messageAuhor = message.author.username;
        const userAvatar = message.author.displayAvatarURL({ dynamic: true });
        const jack = '782692744380022794';
        const silas = '890576956054188083';
        const abby = '1013581916852715541' // In case Jack wants to add to accepted list of users for command.
         
        const helpEmbed = new EmbedBuilder() // Main help directory
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Help Command')
        .setDescription(`
        .help general
        .help admin
        .help games
        .help jack
        .help info-general
        .help info-admin
        .help info-games
        .help jack-info
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const generalHelpEmbed = new EmbedBuilder() // General Command list
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('General Command List')
        .setDescription(`
        .adpoll
        .author
        .copy
        .cursed
        .hello
        .help
        .mania
        .ping
        .weather
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const gameHelpEmbed = new EmbedBuilder() // Games command list
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Games Command List')
        .setDescription(`
        .chance
        .coin
        .math
        .number
        .pick
        .roll
        .rps
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const adminHelpEmbed = new EmbedBuilder() // Admin command list
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Help')
        .setDescription(`
        .ban
        .kick
        .clear
        .timeout
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const jackHelpEmbed = new EmbedBuilder() // Admin command list
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Jack\'s Custom Admin Commands.')
        .setDescription(`
        These commands only work for Jack and Silas Including this one.
        .spff
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        // =-----------------------Start info embeds----------------------------\\
        const generalHelpInfoEmbed = new EmbedBuilder() // General Command list with Info
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('General Command List')
        .setDescription(`
        .adpoll <question> <emoji> = <emoji meaning> - you can add as many emojis as you want but you must put them before a = sign for it to work.
        .author - sends embed about author
        .copy - copies your message
        .cursed - try and see
        .hello - send Hello World Message
        .help - sends help menu
        .mania - sends random characters
        .ping - pings the bot for status on connection
        .weather <city> - sends weather info about a city
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const gameHelpInfoEmbed = new EmbedBuilder() // Games command list with Info
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Games Command List')
        .setDescription(`
        .chance - pick a ticket and see if you win
        .coin - flips a coin
        .math <equation> - calculates your equation 
        .number - picks a random number while you try to guess it within 5 secs
        .pick <choices> - picks from your choices 
        .roll - rolls a die
        .rps - play rock, paper, scissors with the bot
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const adminHelpInfoEmbed = new EmbedBuilder() // Admin command list with info
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Help')
        .setDescription(`
        .ban <user> - bans a user
        .kick <user> - kicks a user
        .clear <1-99> - deleted messages newer than 14 days old.
        .timeout <user> <time> <reason> - timeouts a user
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()

        const jackHelpInfoEmbed = new EmbedBuilder() // Admin command list
        .setColor('#A84300')
        .setThumbnail(serverIcon)
        .setTitle('Jack\'s Custom Admin Commands.')
        .setDescription(`
        These commands only work for Jack and Silas Including this one.
        .spff <channel> text <message> - sends text message to certian channel.
        .spff <channel> embed <message> - sends embed to certian channel.
        `)
        .setAuthor({ name: `${messageAuhor}`, iconURL: `${userAvatar}`, })
        .setTimestamp()


        if(!parm1) return message.channel.send({ embeds: [helpEmbed] });
        if(parm1 == 'general') {
            return message.channel.send({embeds: [generalHelpEmbed] });
        } else if(parm1 == 'games') {
            return message.channel.send({embeds: [gameHelpEmbed] });
        } else if(parm1 == 'admin' && message.member.roles.cache.has('1127838335566626816')) {
            return message.channel.send({embeds: [adminHelpEmbed] });
        } else if(parm1 == 'admin' && !message.member.roles.cache.has('1127838335566626816')) {
            return message.channel.send('You can not use that commnad.');
        } else if(parm1 == 'general-info') {
            return message.channel.send({embeds: [generalHelpInfoEmbed] });
        } else if(parm1 == 'games-info') {
            return message.channel.send({embeds: [gameHelpInfoEmbed] });
        } else if(parm1 == 'admin-info' && message.member.roles.cache.has('1127838335566626816')) {
            return message.channel.send({embeds: [adminHelpInfoEmbed] });
        }else if(parm1 == 'admin-info' && !message.member.roles.cache.has('1127838335566626816')) {
            return message.channel.send('You can not use that command.');
        } else if (parm1 == 'jack' && message.author.id == jack || message.author.id == silas) {
            return message.channel.send({embeds: [jackHelpEmbed] });
        } else if (parm1 == 'jack-info' && message.author.id == jack || message.author.id == silas) {
            return message.channel.send({embeds: [jackHelpInfoEmbed] });
        } 
        
    }
}