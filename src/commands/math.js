const { EmbedBuilder } = require('discord.js');
const math = require('mathjs');

module.exports = {
    name: 'math',
    description: '',
    async execute(message, args) {
        message.delete();
        let question = args.join('');
        const fun = [
            'That was one tough problem!',
            'Here is your answer!',
            'I hope this is what you asked for, I get confused sometimes!',
            'I this what you asked for?',
            'Here is your answer please come again!',
            'Soultion'
        ]
        const randomIndex = Math.floor(Math.random() * fun.length);
        const randomElement = fun[randomIndex];

        if(!question) return message.channel.send('Please enter a equation!')

        let result;
        try{
            result = math.evaluate(question);
        } catch (e) {
            return message.channel.send('Plase input a valid equation!');
        }
        const mathEmbed = new EmbedBuilder()
        .setColor(0x0099ff)
        .addFields(
            {name: 'Question:', value: `Your Question was: ${question}.`},
        )
        .addFields(
            {name: 'Answer:', value: `${randomElement} : ${question} = ${result}.`}
        )
       
        message.channel.send({ embeds: [mathEmbed] });
       
    }
}