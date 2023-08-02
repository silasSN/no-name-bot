module.exports = {
    name: 'cursed',
    description: 'Sends a cursed message.',
    execute(message, args) {
        message.delete();
        message.channel.send('desruc');
    }
}