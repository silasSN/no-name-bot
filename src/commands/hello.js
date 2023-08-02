module.exports = {
    name: 'hello',
    description: 'Sends ping to channel',
    async execute(message, args) {
        message.delete();
        message.channel.send('Hello World!!!');
    }
}