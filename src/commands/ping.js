module.exports = {
    name: 'ping',
    description: 'Sends ping to channel',
    async execute(message, args) {
        message.delete();
        message.channel.send("Pinging...").then((sent) => {
            const time = Date.now() - message.createdTimestamp;

            const timestamp = time.toString().split("");

            if (timestamp[0] === "-") timestamp.shift();
            sent.edit(`${timestamp.join("")}ms`);
            
      });
       return;
    }
}