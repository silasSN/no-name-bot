module.exports = {
    name: 'coin',
    description: 'flips a coin',
    execute(message, args) {
        message.delete();
        const coin = ['HEADS', 'TAILS'];
        const coinFlip = Math.floor(Math.random() * coin.length);
        const flippedCoin = coin[coinFlip];
        message.channel.send(`<@${message.author.id}> Fliped a coin and got: ${flippedCoin}`);

    }
}