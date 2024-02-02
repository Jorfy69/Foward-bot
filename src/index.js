require('dotenv').config();
const { Client, IntentsBitField, GuildDefaultMessageNotifications} = require('discord.js');

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
let PARENT_ID = '681531225508544602';
let GuildIds = ['1201143289613647962','1201143343971848212','1201143387449991242'];
let ChannelIds = ['1201704599006740532','1202394382737735771','1202394424257024100'];
let RoleIds = ['1203104432993214484', '1203104482620080220' ];

client.on('messageCreate', (message) => {

    if (message.channel.id === ChannelIds[0] && message.author.id === PARENT_ID){
    
        const messageContent = message.content;
    
        console.log(`Received message '${messageContent}' from ${message.author.tag} in the specific channel`);
        GuildIds.forEach(guildId => {
            const guild = client.guilds.cache.get(guildId);
            
            ChannelIds.slice(1).forEach(channelId => {
                const channel = guild.channels.cache.get(channelId);
                if (!channel ) {
                    console.log(`Channel with ID ${channelId} not found in guild ${guild.name}.`);
                    return;
                }
                
                const  guildRoles = client.guild.role.fetch(roleId);
                let contentToSend = message.content;
                roleId.forEach(wantedrole => {
                    if (wantedrole === RoleIds)
                    contentToSend = contentToSend.replace(`<@&${mentionedRole.id}>`, mentionedRole.toString());
                });

                channel.send(contentToSend)
                .then(sentMessage => console.log(`Message sent to ${channel.name} in guild ${guild.name}: ${sentMessage.content}`))
                .catch(console.error);
                    // Send the message to the channel
                    
                
})})}});


client.login(process.env.CLIENT_TOKEN);