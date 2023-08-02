module.exports = {
    name: 'adpoll',
    description: '',
    execute(message, args) {
        message.delete();
        if(message.member.permissions.has('VIEW_CHANNELS')){
            const PollContent = args[1];
            if(!PollContent) return message.channel.send('Please enter a question and emojis in the following format. \n:thumbsup: = <what it means>');
            const { content } = message

        const eachLine = content.split('\n');

        for (const line of eachLine) {
            if(line.includes('=')) {
                const split = line.split('=');
                const emoji = split[0].trim();
                message.react(emoji);
            }
        }
        } else {
            return message.channel.send('You do not have the right permttions to preform this command. Message deleting in 2 seconds.')
            .then(msg => {
               setTimeout(() => msg.delete(), 2000)
             })
             .catch();
       }
    }
}