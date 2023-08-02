module.exports = {
    name: 'pick',
    Description: '',
    async execute(message, args) {
        message.delete();
        let pick = args.slice(0).join(' ');
        
        if(!pick) return message.channel.send('Please eneter at least 2 choices!');
        if(pick > 1)return message.channel.send('Please enter at least 2 choices for me to pick from! :)');
    
        const answer = pick.slice().trim().split(/ +/,)
        let myAnswer = answer[Math.floor(Math.random() * answer.length)];
        message.reply(`I pick ${myAnswer}!`)
        console.log(pick);
        console.log(answer);
         
    }
}