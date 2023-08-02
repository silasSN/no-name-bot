module.exports = {
    name: 'roll',
    description: 'rolls a die',
    execute(message, args) {
        message.delete();
        const die = ['1', '2', '3', '4', '5', '6'];
        const dieRoll = Math.floor(Math.random() * die.length);
        const rolledDie = die[dieRoll];
        message.channel.send(`<@${message.author.id}> Rolled a die and got: ${rolledDie}`);

    }
}