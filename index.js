const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!corim";

/**
 * Mixes the contents of the passed array randomly
 * 
 * @param {*} arr Array to be mixed
 */
function mixArray(arr) {
    for (i = 0; i < arr.length; i++) {
        //get random index from 0-length
        randomIndex = Math.floor(Math.random() * Math.floor(arr.length));
        //swap
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
    if (message.content === `${prefix} ping`) {
        message.channel.send('Pong.');
    }

    else if (message.content === `${prefix} thanos`) {
        // TODO: Pull from thanosquotes.txt instead of this stupid array
        const quotes = [
            'You could not live with your own failure. And where did that bring you? Back to me.',
            'I am inevitable.',
            'You should have gone for the head.',
            'Perfectly balanced, as all things should be.',
            'Today I have lost more than you could ever know.',
            'This day extracts a heavy toll.',
            "You're not the only one cursed with knowledge.",
            'The hardest choices require the strongest wills.'];
        const msgIdx = Math.floor(Math.random() * (quotes.length));
        console.log('Thanos Quote: ' + msgIdx);
        message.channel.send(quotes[msgIdx]);
    }

    else if (message.content === `${prefix} win`) {
        message.channel.send('I see this as an absolute win!');
    }

    else if (message.content === `${prefix} flip`) {
        message.channel.send("I'm flipping a coin...");
        const coinSide = Math.floor(Math.random() * 2);
        if (coinSide === 0) {
            message.channel.send("The coin landed on heads!");
        } else {
            message.channel.send("Looks like it's tails!");
        }
    }

    else if (message.content === `${prefix} p`) {
        // TODO: Delete this
        message.channel.send("Penis");
    }

    else if (message.content === `${prefix} gigagamer`) {
        const gamerNum = Math.floor(Math.random() * 101);
        message.channel.send("gigagamer" + gamerNum);
    }

    else if (message.content === `${prefix} snap`) {
        //get list of users in guild
        const users = message.guild.members.array();
        const userDisplayNames = Array.from(users, x => x.displayName);

        //randomize, split, and print
        mixArray(userDisplayNames);
        const userDisplayNames2 = userDisplayNames.splice(0, users.length/2);
        message.channel.send("```fix\r\n Snapped: " + userDisplayNames2.join(", ") + "\r\n```");
        message.channel.send("```css\r\n Survived: " + userDisplayNames.join(", ") + "\r\n```");
    }
    // TODO: implement randomping
});

client.login(process.env.BOT_TOKEN);
