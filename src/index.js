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

/*s
Main = 1201143289613647962
1201143343971848212
1201143387449991242
*/ 

//PARENT_ID = '457938958723317771';
PARENT_ROLE_ID = '1203828159707881493'
GuildIds = ['1201143289613647962','1201143343971848212','1201143387449991242'];
                 // 1202394382737735771 == 1203104432993214484
let ChannelIds = ['1201704599006740532','1202394382737735771' , '1202394424257024100'];
let RoleIds =    ['1203828402725978112','1203104432993214484' , '1203104482620080220' ];



client.on('messageCreate', (message) => {

    if (message.channel.id === ChannelIds[0] && message.member.roles.cache.has(PARENT_ROLE_ID)){
    
        GuildIds.forEach(guildId => {
            const guild = client.guilds.cache.get(guildId);
            
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