module.exports = {
    name: 'copy',
    description: '',
    async execute(message, args) {
        message.delete();
        let copyDescription = args.slice(0).join(' ');        
        if(!copyDescription) return message.channel.send('please enter a message.');
        message.channel.send(`${copyDescription}`)
    }
}