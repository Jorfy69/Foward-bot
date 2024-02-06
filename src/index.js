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
PARENT_ROLE_ID = '1203905985572511804';
            // 1139949498458705930
            //      torrso                         splintered skys
GuildIds = [      '1136009314235060284',        '429517181978542080' ];
let ChannelIds = [ '1136039448325390486',        '1139949498458705930' ];
//these are the roles u want to ping
let RoleIds =    [ '1136208790652469279',        '1139947979042726009'];



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