require('dotenv').config();
const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready.`);
    
});

//This is who can use the bot
PARENT_ROLE_ID = 'numbersasstrings';
            
            //      torrso                         splintered skys
GuildIds = [      'numbersasstrings',        'numbersasstrings' ];
let ChannelIds = [ 'numbersasstrings',        'numbersasstrings' ];
//these are the roles u want to ping
let RoleIds =    [ 'numbersasstrings',        'numbersasstrings'];



client.on('messageCreate', (message) => {

    if (message.channel.id === ChannelIds[0] && message.member.roles.cache.has(PARENT_ROLE_ID)){
    
        GuildIds.forEach(guildId => {
            const guild = client.guilds.cache.get(guildId);
            console.log(guild)
            console.log(guildId)
            ChannelIds.slice(1).forEach(channelId => {
                const channel = guild.channels.cache.get(channelId);
                if (!channel ) {
                    //console.log(`Channel with ID ${channelId} not found in guild ${guild.name}.`);
                    return;
                }
                
                switch (channelId){
                    case ChannelIds[1]:  
                        contentToSend = message.content.replace(new RegExp(`<@&${RoleIds[0]}>`, 'g'), `<@&${RoleIds[1]}>`);
                            
                        channel.send(contentToSend)
                               .then(sentMessage => console.log(`Message sent to ${channel.name} in guild ${guild.name}: ${sentMessage.content}`))
                               .catch(console.error);
    
                        break;
                    case ChannelIds[2]:
                        contentToSend = message.content.replace(new RegExp(`<@&${RoleIds[0]}>`, 'g'), `<@&${RoleIds[2]}>`);
                            
                        channel.send(contentToSend)
                               .then(sentMessage => console.log(`Message sent to ${channel.name} in guild ${guild.name}: ${sentMessage.content}`))
                               .catch(console.error);
                        break;
                    }
            })
        })
    }
});


client.login(process.env.CLIENT_TOKEN);
